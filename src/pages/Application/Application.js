import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup';
import Form, {FormHeader, FormSection, FormFooter} from '@atlaskit/form';
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
        .required(),
      lastName: yup
        .string()
        .lowercase()
        .required(),
      genderSex: yup
        .string()
        .lowercase()
        .required(),
      dateOfBirth: yup.date().required(),
      phone: yup.number().required(),
      shirtSize: yup
        .string()
        .lowercase()
        .required(),
      dateOfBirth: yup.date().required(),
      allergiesDiet: yup
        .array(yup.string().lowercase())
        .required()
        .nullable()
    }),
    section2: yup.object().shape({
      // Education
      school: yup
        .string()
        .lowercase()
        .required(),
      currYear: yup
        .string()
        .lowercase()
        .required(),
      gradYear: yup.number().required(),
      major: yup
        .string()
        .lowercase()
        .required()
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

  const FormContainer = styled.div`
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

  const handleSubmit = data => {
    for (const key in data) {
      if (typeof data[key] === 'object') {
        data[key] = data[key].value;
      }
    }
    const newData = {...formData, ...data};
    setFormData(newData);
    if (currSection == section2) {
      setSection(section2);
    } else {
      console.log('form data', newData);
    }
  };

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          {({formProps}) => (
            <form {...formProps}>
              <FormHeader title='SwampHacks VI' />
              <FormSection title='Basic info'>
                {currSection.map(data => (
                  <FieldHelper {...data} schema={schema} key={data.name} />
                ))}
              </FormSection>
              <FormFooter>
                <button type='submit'>Submit</button>
              </FormFooter>
            </form>
          )}
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Application;
