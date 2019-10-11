import React, {useState} from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import {Formik, Form, Field} from 'formik';
import FieldHelper from '../../components/FieldHelper';

// Necessary inputs:
// Checkbox
// Text field
// Text box
// Select

// Sections
import {section1, section2} from './Sections';

const Application = () => {
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
        .required()
      // currYear: yup
      //   .string()
      //   .lowercase()
      //   .required(),
      // gradYear: yup.number().required(),
      // major: yup
      //   .string()
      //   .lowercase()
      //   .required()
    }),
    section3: yup.object().shape({
      // Professional information
      github: yup
        .string()
        .lowercase()
        .url(),
      website: yup
        .string()
        .lowercase()
        .url(),
      linkedIn: yup
        .string()
        .lowercase()
        .url(),
      resume: yup.object(),
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

  const [currSection, setSection] = useState(section1);
  const [formData, setFormData] = useState({});
  const [currSchema, setSchema] = useState('section1');

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
    background-color: white;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  `;

  const handleSubmit = (values, {setSubmitting}) => {
    const newData = {...formData, ...values};
    setFormData(newData);
    console.log(newData);
    if (currSection !== section2) {
      setSection(section2);
      setSchema('section2');
    } else {
      console.log('form data', newData);
    }
  };

  return (
    <Container>
      <Formik
        validationSchema={yup.reach(schema, currSchema)}
        onSubmit={handleSubmit}
      >
        <FormContainer>
          {currSection.map(
            ({
              name,
              label,
              required,
              placeholder,
              componentProps,
              ...props
            }) => {
              return (
                <Field
                  component={FieldHelper}
                  name={name}
                  label={label}
                  required={required}
                  placeholder={placeholder}
                  {...componentProps}
                  {...props}
                  key={name}
                />
              );
            }
          )}

          <button type='submit'>Submit</button>
        </FormContainer>
      </Formik>
    </Container>
  );
};

export default Application;
