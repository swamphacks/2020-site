import React, {useEffect} from 'react';
import styled from 'styled-components';
import {
  TextInput,
  CheckBox,
  MaskedInput,
  Select,
  TextArea,
  FormField,
  Button,
  Heading,
  Box,
  Paragraph
} from 'grommet';

const TestFieldHelper = ({
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

  const RequiredHeading = styled(Heading)`
    &::after {
      content: '*';
    }
  `;

  return (
    <Box>
      {props.required && (
        <RequiredHeading level='5'>{props.label}</RequiredHeading>
      )}
      {!props.required && <Heading level='5'>{props.label}</Heading>}
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
      {componentType === 'MaskedInput' && <MaskedInput {...field} {...props} />}
      {componentType === 'TextArea' && <TextArea {...field} {...props} />}
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
            setFieldValue(field.name, e.currentTarget.files[0]);
          }}
        />
      )}
      {touched[field.name] && errors[field.name] && (
        <Paragraph color='status-error'>{errors[field.name]}</Paragraph>
      )}
    </Box>
  );
};

export default TestFieldHelper;
