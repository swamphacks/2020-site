import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {Field} from 'formik';

const Section1 = () => {
  return (
    <div>
      <Field name='firstName'></Field>
    </div>
  );
};

export default Section1;
