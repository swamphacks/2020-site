import React, {useState} from 'react';
import styled from 'styled-components';
import {Button, Form, Input, Checkbox, TextArea} from 'formik-semantic-ui';
import DropdownCustom from '../../components/formik-semantic-ui-custom/DropdownCustom';
import {animateScroll} from 'react-scroll';
import {Link} from 'react-router-dom';
import {
  Grid,
  Header,
  Label,
  Container,
  Transition,
  Button as SUIButton,
  Modal
} from 'semantic-ui-react';
import FileUploadInput from '../../components/FileUpload';
import {withFirebase} from '../../components/Firebase';

// Sections
import {sections} from './Sections';

// Styled components
const RegSign = styled.img.attrs(props => ({
  src: '/images/regSign.svg'
}))`
  max-width: 600px;
  width: 80vw;
  z-index: 2;
  padding: 40px 0px;
`;

const SectionTitleContainer = styled.div`
  padding-top: 40px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;
`;

const ApplicationPage = ({firebase}) => {
  const [currSection, setCurrSection] = useState(0);
  const [history, setHistory] = useState([
    ...sections.map(sec => sec.initialValues)
  ]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const _handleSubmit = async (values, formikApi) => {
    let newHistory = history;
    const keys = Object.keys(newHistory[currSection]);
    for (let i = 0; i < keys.length; i++) {
      newHistory[currSection][keys[i]] = values[keys[i]];
    }
    setHistory(newHistory);
    if (currSection < sections.length - 1) {
      setCurrSection(currSection + 1);
      animateScroll.scrollToTop({
        duration: 0,
        delay: 0,
        smooth: true
      });
    } else {
      // Clean up the form data
      let combined = {};
      for (let i = 0; i < newHistory.length; i++) {
        combined = {...combined, ...newHistory[i]};
      }
      const {
        resume,
        password,
        confirmPassword,
        mlhCodeOfConduct,
        regDataSharing,
        statisticsUsage,
        photoRelease,
        confirmTrue,
        ...relevantValues
      } = combined;
      console.log(resume);
      const date = Date.now();
      // Submit to database
      try {
        console.log('Logging in...');
        await firebase.createAccount(relevantValues.email, password);
        console.log('Logged in!');
        const name =
          relevantValues.lastName + relevantValues.firstName + date.toString();
        console.log('Uploading resume...');
        const resumePath = await firebase.uploadResume(name, resume);
        console.log('Uploaded!');
        console.log('Uploading application...');
        await firebase.submitApplication({
          ...relevantValues,
          resumePath: resumePath,
          dateApplied: date,
          accepted: false
        });
        console.log('Uploaded!');
        await firebase.signOut();
        formikApi.setSubmitting(false);
        setIsSubmitted(true);
      } catch (error) {
        console.log(error);
        var errorCode = error.code;
        if (errorCode === 'auth/email-already-in-use') {
          formikApi.setFieldError('email', 'This email is already in use.');
        } else if (errorCode === 'auth/invalid-email') {
          formikApi.setFieldError('email', 'This email is not valid.');
        } else {
          formikApi.setFieldError(
            'email',
            'An unexpected error occurred. Please try again.  If error persists, please contact support with error code: [' +
              errorCode +
              '].'
          );
        }
        formikApi.setSubmitting(false);
        animateScroll.scrollToTop({
          duration: 200,
          delay: 0,
          smooth: true
        });
      }
    }
  };

  const _handleReset = (values, formikApi) => {
    setCurrSection(currSection - 1);
    animateScroll.scrollToTop({
      duration: 0,
      delay: 0,
      smooth: true
    });
  };

  // See https://www.npmjs.com/package/formik-semantic-ui
  // For documentation on some of these
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: 80
      }}
    >
      <Transition visible={isSubmitted} animation='scale' duration={500}>
        <Modal open={isSubmitted}>
          <Modal.Header>Thanks for Applying!</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <p>
                We will send you an email when we have made a decision about
                your application. Check back in the coming weeks for access to
                your dashboard, where you can view more information about
                SwampHacks and your application status. Happy hacking!
              </p>
            </Modal.Description>
            <ButtonGroup>
              <SUIButton as={Link} to='/' primary>
                Ok
              </SUIButton>
            </ButtonGroup>
          </Modal.Content>
        </Modal>
      </Transition>
      <RegSign />
      <Grid container stretched>
        <Grid.Row centered>
          <Grid.Column>
            <SectionTitleContainer>
              <Header size='huge'>{sections[currSection].title}</Header>
            </SectionTitleContainer>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column>
            <Form
              onSubmit={_handleSubmit}
              onReset={_handleReset}
              initialValues={history[currSection]}
              validationSchema={sections[currSection].schema}
              enableReinitialize
              ignoreLoading
            >
              {formikProps => (
                <React.Fragment>
                  {sections[currSection].fields.map(field => {
                    const {
                      name,
                      label,
                      componentType,
                      componentProps,
                      ...extras
                    } = field;
                    if (componentType === 'TextField') {
                      return (
                        <Input
                          name={name}
                          label={label}
                          inputProps={componentProps}
                          fieldProps={{
                            required: componentProps.required
                          }}
                          key={name}
                          errorComponent={({message}) => (
                            <Label basic color='red' pointing>
                              {message}
                            </Label>
                          )}
                        />
                      );
                    }
                    if (componentType === 'Dropdown') {
                      return (
                        <DropdownCustom
                          name={name}
                          label={label}
                          options={extras.options}
                          inputProps={componentProps}
                          fieldProps={{
                            required: componentProps.required
                          }}
                          key={name}
                          errorComponent={({message}) => (
                            <Label basic color='red' pointing>
                              {message}
                            </Label>
                          )}
                        />
                      );
                    }
                    if (componentType === 'TextArea') {
                      return (
                        <TextArea
                          name={name}
                          label={label}
                          inputProps={componentProps}
                          fieldProps={{
                            required: componentProps.required
                          }}
                          key={name}
                          errorComponent={({message}) => (
                            <Label basic color='red' pointing>
                              {message}
                            </Label>
                          )}
                        />
                      );
                    }
                    if (componentType === 'Terms') {
                      return (
                        <React.Fragment key={name}>
                          <Header size='tiny'>{label}</Header>
                          <Checkbox
                            name={name}
                            label={{
                              children: (
                                <Container text style={{minWidth: 0}}>
                                  {extras.content}
                                </Container>
                              )
                            }}
                            inputProps={componentProps}
                            errorComponent={() => null}
                          />
                          {formikProps.errors[name] && (
                            <Label basic color='red' pointing>
                              {formikProps.errors[name]}
                            </Label>
                          )}
                        </React.Fragment>
                      );
                    }
                    if (componentType === 'FileUpload') {
                      return (
                        <FileUploadInput
                          key={name}
                          formikProps={formikProps}
                          name={name}
                          label={label}
                          fieldProps={{
                            required: componentProps.required
                          }}
                        />
                      );
                    }
                  })}
                  <ButtonGroup>
                    {currSection === 0 && (
                      <SUIButton as={Link} to='/' basic color='black'>
                        Cancel
                      </SUIButton>
                    )}
                    {currSection > 0 && (
                      <Button.Reset basic color='black'>
                        Back
                      </Button.Reset>
                    )}
                    <Button.Submit
                      loading={formikProps.isSubmitting}
                      disabled={formikProps.isSubmitting}
                    >
                      {currSection < sections.length - 1 ? 'Next' : 'Submit'}
                    </Button.Submit>
                  </ButtonGroup>
                </React.Fragment>
              )}
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default withFirebase(ApplicationPage);
