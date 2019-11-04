import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Button, Form, Input, Checkbox, TextArea} from 'formik-semantic-ui';
import DropdownCustom from '../../components/formik-semantic-ui-custom/DropdownCustom';
import {Button as SUIButton} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {Grid, Header} from 'semantic-ui-react';

// Sections
import {sections} from './Sections';

// Styled components
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
    } else {
      console.log(values);
    }
    formikApi.setSubmitting(false);
  };

  const _handleReset = (values, formikApi) => {
    setCurrSection(currSection - 1);
  };

  console.log(history[currSection]);

  return (
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
          >
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
                    fieldProps={{required: componentProps.required}}
                    key={name}
                  />
                );
              }
              if (componentType === 'Checkbox') {
                return (
                  <Checkbox
                    name={name}
                    label={label}
                    inputProps={componentProps}
                    fieldProps={{required: componentProps.required}}
                    key={name}
                  />
                );
              }
              if (componentType === 'TextArea') {
                return (
                  <TextArea
                    name={name}
                    label={label}
                    inputProps={componentProps}
                    fieldProps={{required: componentProps.required}}
                    key={name}
                  />
                );
              }
              if (componentType === 'Terms') {
                return (
                  <React.Fragment key={name}>
                    <Header size='tiny'>
                      Link:{' '}
                      <a href={extras.link} target='_blank'>
                        {label}
                      </a>
                    </Header>
                    <Checkbox
                      name={name}
                      label={`I agree to these terms.`}
                      inputProps={componentProps}
                      fieldProps={{required: componentProps.required}}
                    />
                  </React.Fragment>
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
              <Button.Submit>
                {currSection < sections.length - 1 ? 'Next' : 'Submit'}
              </Button.Submit>
            </ButtonGroup>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ApplicationPage;
