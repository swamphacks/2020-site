import React, {useState} from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import {Formik, Form, Field} from 'formik';
import FieldHelper from '../../components/FieldHelper';
import {Box, Button, Heading, Paragraph} from 'grommet';
import TestFieldHelper from '../../tests/TestFieldHelper';

// Necessary inputs:
// Checkbox
// Text field
// Text box
// Select

// Sections
import {sections} from './Sections';

const Application = () => {
  // TODO: Move to sections
  const schema = yup.object().shape({
    // Section 1
    section1: yup.object().shape({
      // Basic information
      firstName: yup
        .string()
        .lowercase()
        .required('Your first name is required.'),
      lastName: yup
        .string()
        .lowercase()
        .required(),
      genderSex: yup
        .string()
        .lowercase()
        .required(),
      dateOfBirth: yup.date().required(),
      phone: yup
        .string('Must be a valid phone number.')
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          'Must be a valid phone number.'
        )
        .required('Your phone number is required.'),
      shirtSize: yup
        .string()
        .lowercase()
        .required(),
      allergiesDiet: yup.string().required()
    }),
    section2: yup.object().shape({
      // Education
      school: yup
        .string()
        .lowercase()
        .required(),
      major: yup
        .string()
        .lowercase()
        .required(),
      currYear: yup
        .string()
        .lowercase()
        .required(),
      gradYear: yup.number().required()
    }),
    section3: yup.object().shape({
      // Professional information
      github: yup.string().lowercase(),
      website: yup.string().lowercase(),
      linkedIn: yup.string().lowercase(),
      resume: yup.mixed(),
      positions: yup.array(yup.string().lowercase())
    }),
    section4: yup.object().shape({
      // Travel information
      needsTravelAssist: yup.boolean().required(),
      travelType: yup.string()
    }),
    section5: yup.object().shape({
      // Free response
      topics: yup.array(yup.string()),
      question1: yup.string().required(),
      question2: yup.string().required(),
      question3: yup.string().required()
    }),
    section6: yup.object().shape({
      // Account information
      email: yup
        .string()
        .email()
        .lowercase()
        .required(),
      password: yup.string().required()
    })
  });

  const [currSection, setSection] = useState(0);
  const [formData, setFormData] = useState({});

  const FormContainer = styled(Form)`
    background-color: transparent;
    display: flex;
    justify-content: center;
    width: 80%;
    flex-direction: column;
  `;

  const Container = styled.div`
    display: flex;
    width: 100vw;
    min-height: 100vh;
    flex-grow: 1;
    align-items: flex-start;
    justify-content: center;
  `;

  const handleSubmit = (values, {setSubmitting}) => {
    const newData = {...formData, ...values};
    setFormData(newData);
    console.log(newData);
    if (currSection !== sections.length - 1) {
      setSection(currSection + 1);
    } else {
      console.log('form data', newData);
    }
  };

  const handleGoBack = () => {
    setSection(currSection - 1);
  };

  return (
    <Container>
      <Formik
        validationSchema={yup.reach(schema, sections[currSection].sch)}
        onSubmit={handleSubmit}
        initialValues={sections[currSection].sec.initialValues}
      >
        <FormContainer>
          <Heading level='3'>{sections[currSection].sec.title}</Heading>
          <Paragraph fill>{sections[currSection].sec.subtitle}</Paragraph>
          {sections[currSection].sec.fields.map(
            ({
              name,
              label,
              isRequired,
              placeholder,
              componentProps,
              ...props
            }) => {
              return (
                <Field
                  component={TestFieldHelper}
                  name={name}
                  label={label}
                  required={isRequired}
                  placeholder={placeholder}
                  {...componentProps}
                  {...props}
                  key={name}
                  defaultValue={formData[name] ? formData[name] : null}
                />
              );
            }
          )}
          <Box direction='row' gap='xsmall' margin={{vertical: 'medium'}}>
            {currSection !== 0 && (
              <Button label='Back' onClick={handleGoBack} />
            )}
            <Button
              label={currSection === sections.length - 1 ? 'Submit' : 'Next'}
              type='submit'
              primary
            />
          </Box>
        </FormContainer>
      </Formik>
    </Container>
  );
};

export default Application;
