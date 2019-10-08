import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {Formik, Form, Field} from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';

// Necessary inputs:
// Checkbox
// Text field
// Text box
// Select

// Sections
import Section1 from './Sections/Section1';

const Application = () => {
  const schema1 = yup.object().shape({
    // Basic information
    testField: yup.string().required('This field is required.'),
    testArea: yup.string().required('This field is required.'),
    testCheck: yup.string().required('This field is required.'),
    testSelect: yup.string()
  });

  const data = {};

  const [currSchema, setSchema] = useState(schema1);
  const [currSection, setSection] = useState(Section1);

  const StyledForm = styled(Form)`
    background-color: blue;
    display: flex;
    justify-content: center;
    width: 80%;
    flex-direction: column;
  `;

  const Container = styled.div`
    display: flex;
    width: 100vw;
    min-height: 100vh;
    background-color: red;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  `;

  return (
    <Container>
      <Formik
        validationSchema={currSchema}
        onSubmit={(values, {setSubmitting}) => {
          console.log(values);
        }}
      >
        {({isSubmitting, validateForm}) => (
          <>
            <StyledForm>
              {currSection}
              <button type='submit'>Submit </button>
            </StyledForm>
          </>
        )}
      </Formik>
    </Container>
  );
};

export default Application;
