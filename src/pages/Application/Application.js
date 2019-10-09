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
import {section1} from './Sections';

const Application = () => {
  const schema = yup.object().shape({
    // Section 1
    section1: yup.object().shape({
      // Basic information
      firstName: yup.string().required(),
      lastName: yup.string().required()
    })
  });

  const data = {};

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

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={data => console.log('form data', data)}>
          {({formProps}) => (
            <form {...formProps}>
              <FormHeader title='SwampHacks VI' />
              <FormSection title='Basic info'>
                {section1.map(data => (
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
