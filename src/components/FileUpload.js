import React from 'react';
import styled from 'styled-components';
import { Button, Form, Label } from 'semantic-ui-react';

const Container = styled.div`
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
`;

const ValueLabel = styled.p`
  text-decoration: underline;
  padding: 0px 10px;
`;

const FileUploadInput = ({ formikProps, name, fieldProps, ...props }) => {
  const { setFieldTouched, setFieldValue } = formikProps;
  return (
    <Form.Field {...fieldProps} error={formikProps.errors[name] ? true : false}>
      <label>{props.label}</label>
      <input
        accept='.pdf'
        type='file'
        onChange={e => {
          setFieldTouched(name, true);
          console.log(e.currentTarget.files);
          setFieldValue(name, e.currentTarget.files[0]);
        }}
        id={name}
        style={{ display: 'none' }}
      />

      <Container>
        <label htmlFor={name}>
          <Button as='span' basic color='black'>
            Upload File
          </Button>
        </label>
        <ValueLabel>
          {formikProps.values[name]
            ? formikProps.values[name].name
            : 'No file selected.'}
        </ValueLabel>
      </Container>
      {formikProps.errors[name] && (
        <Label basic color='red' pointing>
          {formikProps.errors[name]}
        </Label>
      )}
    </Form.Field>
  );
};

export default FileUploadInput;
