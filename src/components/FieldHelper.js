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
  form: {touched, errors, setFieldValue, setFieldTouched, handleChange}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  componentType,
  ...props
}) => {
  const errorMsg =
    touched[field.name] && errors[field.name] ? errors[field.name] : null;

  return (
    <>
      <FormField name={field.name} label={props.label} error={errorMsg}>
        {componentType === 'TextField' && (
          <TextInput
            {...field}
            {...props}
            value={field.value}
            onSelect={e => {
              setFieldTouched(field.name, true);
              setFieldValue(field.name, e.suggestion.value);
            }}
            // dropProps={{style: {paddingLeft: 10}}}
            onChange={e => {
              setFieldTouched(field.name, true);
              handleChange(e);
            }}
          />
        )}
        {componentType === 'Select' && (
          <Select
            {...props}
            {...field}
            onChange={option => {
              setFieldTouched(field.name, true);
              setFieldValue(field.name, option.value);
            }}
            value={field.value}
          />
        )}
        {componentType === 'MaskedInput' && (
          <MaskedInput {...field} {...props} />
        )}
      </FormField>
    </>
  );
};

export default FieldHelper;
