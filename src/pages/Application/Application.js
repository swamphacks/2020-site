import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {Formik, Form, Field} from 'formik';
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
    firstName: yup.string().required('This field is required.'),
    lastName: yup.string().required('This field is required.'),
    dob: yup.string().required('This field is required.'),
    phone: yup.string().required('This field is required.'),
    genderSex: yup.string().required('This field is required.'),
    shirtSize: yup.string().required('This field is required.'),
    allergiesDietaryRestrictions: yup
      .string()
      .required('This field is required.'),
    // Education
    school: yup.string().required('This field is required.'),
    year: yup.string().required('This field is required.'),
    gradYear: yup.string().required('This field is required.'),
    major: yup.string().required('This field is required.')
  });

  const data = {};

  const [currSchema, setSchema] = useState(schema1);
  const [currSection, setSection] = useState(Section1);

  return (
    <div>
      <Formik validationSchema={currSchema}>
        {({isSubmitting, validateForm}) => <Form>{currSection}</Form>}
      </Formik>
    </div>
  );
};

export default Application;
