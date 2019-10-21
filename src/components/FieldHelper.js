import React, {useEffect} from 'react';
import {TextArea} from 'grommet';
import {Box, TextField} from '@material-ui/core';
import SelectHelper from '../components/SelectHelper';
import FileUploadInput from './FileUploadInput';

const FieldHelper = ({
  field, // { name, value, onChange, onBlur }
  form: {touched, errors, setFieldValue, setFieldTouched, handleChange}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  componentType,
  ...props
}) => {
  // This is used to retain form state after clicking 'back'
  useEffect(() => {
    if (props.defaultValue !== undefined) {
      setFieldTouched(field.name, true);
      setFieldValue(field.name, props.defaultValue);
    }
  }, []);

  // Used because formik is doodoo
  const onBlur = () => {
    setFieldTouched(field.name);
  };

  return (
    <Box>
      {componentType === 'TextField' && (
        <TextField
          {...field}
          {...props}
          variant='outlined'
          error={errors[field.name] && touched[field.name]}
          helperText={
            errors[field.name] && touched[field.name] ? errors[field.name] : ''
          }
          onChange={e => {
            setFieldTouched(field.name, true);
            handleChange(e);
          }}
          onBlur={onBlur}
          fullWidth
        />
      )}
      {componentType === 'Select' && (
        <SelectHelper
          field={field}
          form={{setFieldValue, setFieldTouched, handleChange}}
          {...props}
          variant='outlined'
          error={errors[field.name] && touched[field.name]}
          helperText={
            errors[field.name] && touched[field.name] ? errors[field.name] : ''
          }
          onBlur={onBlur}
          fullWidth
        />
      )}
      {componentType === 'TextArea' && (
        <TextArea {...field} {...props} onBlur={onBlur} />
      )}
      {componentType === 'FileUpload' && (
        <FileUploadInput
          field={field}
          setFieldTouched={setFieldTouched}
          setFieldValue={setFieldValue}
          {...props}
        />
      )}
    </Box>
  );
};

export default FieldHelper;
