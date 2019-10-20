import React, {useEffect} from 'react';
import styled from 'styled-components';
import {
  TextInput,
  CheckBox,
  MaskedInput,
  TextArea,
  Button,
  Heading,
  Box,
  Paragraph
} from 'grommet';
import SelectHelper from '../components/SelectHelper';

const TestFieldHelper = ({
  field, // { name, value, onChange, onBlur }
  form: {touched, errors, setFieldValue, setFieldTouched, handleChange}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  componentType,
  ...props
}) => {
  useEffect(() => {
    if (props.defaultValue !== undefined) {
      setFieldTouched(field.name, true);
      setFieldValue(field.name, props.defaultValue);
    }
  }, []);

  const RequiredHeading = styled(Heading)`
    &::after {
      content: '*';
    }
  `;

  const onBlur = () => {
    setFieldTouched(field.name);
  };

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
          onBlur={onBlur}
        />
      )}
      {componentType === 'Select' && (
        <SelectHelper
          {...props}
          field={field}
          form={{touched, setFieldValue, setFieldTouched, handleChange}}
          onBlur={onBlur}
        />
      )}
      {componentType === 'MaskedInput' && (
        <MaskedInput {...field} {...props} onBlur={onBlur} />
      )}
      {componentType === 'TextArea' && (
        <TextArea {...field} {...props} onBlur={onBlur} />
      )}
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
          onBlur={onBlur}
        />
      )}
      {touched[field.name] && errors[field.name] && (
        <Paragraph color='status-error'>{errors[field.name]}</Paragraph>
      )}
    </Box>
  );
};

export default TestFieldHelper;
