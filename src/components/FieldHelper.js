import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import {Field} from 'formik';
import {
  TextInput,
  CheckBox,
  MaskedInput,
  Select,
  TextArea,
  FormField,
  Button
} from 'grommet';

const FieldHelper = ({
  field, // { name, value, onChange, onBlur }
  form: {touched, errors, setFieldValue, setFieldTouched, handleChange}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  componentType,
  ...props
}) => {
  const errorMsg =
    touched[field.name] && errors[field.name] ? errors[field.name] : null;

  useEffect(() => {
    if (props.defaultValue !== null) {
      setFieldTouched(field.name, true);
      setFieldValue(field.name, props.defaultValue);
    }
  }, []);

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
        {/* TODO: Upload file to firebase files and set value of field to link. */}
        {componentType === 'FileUpload' && (
          <TextInput
            {...field}
            {...props}
            type='file'
            accept='.pdf,.doc,.docx'
            value={field.value}
            onChange={e => {
              console.log(e.target.value);
              setFieldTouched(field.name, true);
              handleChange(e);
            }}
          />
        )}
      </FormField>
    </>
  );
};

export default FieldHelper;
