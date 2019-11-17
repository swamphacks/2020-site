import React, {useState} from 'react';
import styled from 'styled-components';
import {Button, Form, Input, Checkbox, TextArea} from 'formik-semantic-ui';
import DropdownCustom from '../../components/formik-semantic-ui-custom/DropdownCustom';
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
import * as firebase from 'firebase';

import regSign from '../../resources/images/regSign.svg';

// Sections
import {sections} from './Sections';

// Styled components
const RegSign = styled.img.attrs(props => ({
  src: regSign
}))`
  max-width: 500px;
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

const ApplicationPage = () => {
  const [currSection, setCurrSection] = useState(0);
  const [history, setHistory] = useState([
    ...sections.map(sec => sec.initialValues)
  ]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const _handleSubmit = (values, formikApi) => {
    // console.log(values, formikApi);
    let newHistory = history;
    const keys = Object.keys(newHistory[currSection]);
    for (let i = 0; i < keys.length; i++) {
      newHistory[currSection][keys[i]] = values[keys[i]];
    }
    setHistory(newHistory);
    console.log(newHistory);
    if (currSection < sections.length - 1) {
      setCurrSection(currSection + 1);
      formikApi.setSubmitting(false);
    } else {
      // Submit to database
      const {email, password} = values;
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          const db = firebase.firestore();
          let docRef = db
            .collection('years')
            .doc('2020')
            .collection('applications')
            .doc();
          let combined = {};
          for (let i = 0; i < newHistory.length; i++) {
            combined = {...combined, ...newHistory[i]};
          }
          console.log(combined);
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
          const date = Date.now();
          const storageRef = firebase
            .storage()
            .ref('2020/resumes')
            .child(
              relevantValues.lastName +
                relevantValues.firstName +
                date +
                'Resume.pdf'
            );
          storageRef.put(resume).then(() => {
            let res = docRef
              .set({
                ...relevantValues,
                resumePath: storageRef.fullPath,
                dateApplied: date,
                accepted: false,
                uid: firebase.auth().currentUser.uid
              })
              .then(() => {
                setIsSubmitted(true);
              });
          });
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          if (errorCode === 'auth/email-already-in-use') {
            formikApi.setFieldError('email', 'This email is already in use.');
          } else if (errorCode === 'auth/invalid-email') {
            formikApi.setFieldError('email', 'This email is not valid.');
          } else {
            formikApi.setFieldError(
              'email',
              'An unexpected error occurred. Please try again.'
            );
          }
        })
        .finally(() => {
          formikApi.setSubmitting(false);
        });
    }
  };

  const _handleReset = (values, formikApi) => {
    setCurrSection(currSection - 1);
  };

  console.log(history[currSection]);

  // See https://www.npmjs.com/package/formik-semantic-ui
  // For documentation on some of these
  return (
    <div
      style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}
    >
      <Modal open={isSubmitted}>
        <Modal.Header>Thanks for Applying!</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>
              We will send you an email when we have made a decision about your
              application. Happy hacking!
            </p>
          </Modal.Description>
          <ButtonGroup>
            <SUIButton as={Link} to='/' primary>
              Ok
            </SUIButton>
          </ButtonGroup>
        </Modal.Content>
      </Modal>
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
            >
              {formikProps => (
                <Transition.Group duration={200}>
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
                        <SUIButton as={Link} to='/' basic>
                          Cancel
                        </SUIButton>
                      )}
                      {currSection > 0 && <Button.Reset>Back</Button.Reset>}
                      <Button.Submit
                        loading={formikProps.isSubmitting}
                        disabled={formikProps.isSubmitting}
                      >
                        {currSection < sections.length - 1 ? 'Next' : 'Submit'}
                      </Button.Submit>
                    </ButtonGroup>
                  </React.Fragment>
                </Transition.Group>
              )}
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ApplicationPage;
