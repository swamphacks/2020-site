import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {Field} from 'formik';

// Custom formik inputs
import FTextField from '../../../components/FormikInputs/FTextField';
import FTextArea from '../../../components/FormikInputs/FTextArea';
import FCheckbox from '../../../components/FormikInputs/FCheckbox';
import FSelect from '../../../components/FormikInputs/FSelect';

const Section1 = props => {
  return (
    <>
      <h1>Basic Information</h1>
      <Field name='testField' placeholder='Test field' component={FTextField} />
      <Field name='testArea' placeholder='Test area' component={FTextArea} />
      <Field name='testCheck' component={FCheckbox} />
      <Field
        name='testSelect'
        component={FSelect}
        options={[{value: 'test', label: 'Test'}]}
      />
    </>
  );
};

export default Section1;
