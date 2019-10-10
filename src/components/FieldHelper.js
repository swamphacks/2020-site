import React, {useState} from 'react';
import * as yup from 'yup';
import {Field} from 'formik';
import {
  TextInput,
  CheckBox,
  MaskedInput,
  Select,
  TextArea,
  FormField
} from 'grommet';

const FieldHelper = ({
  field, // { name, value, onChange, onBlur }
  form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <>
      <FormField
        name={field.name}
        label={props.label}
        error={errors[field.name]}
        required={props.required}
      >
        <TextInput {...field} {...props} />
      </FormField>
    </>
  );
};

export default FieldHelper;
