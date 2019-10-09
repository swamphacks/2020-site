import React from 'react';
import * as yup from 'yup';
import {Field, HelperMessage, ErrorMessage, ValidMessage} from '@atlaskit/form';
import styled from 'styled-components';
import TextField from '@atlaskit/textfield';
import Checkbox from '@atlaskit/checkbox';
import Select from '@atlaskit/select';
import TextArea from '@atlaskit/textarea';

// {
//   name: 'firstName',
//   label: 'First name',
//   isRequired: true,
//   defaultValue: '',
//   helperMsg: 'Enter your first name.',
//   validMsg: 'Looks great!',
//   component: 'field',
//   schema: null
// }

const FieldHelper = ({
  name,
  label,
  isRequired,
  defaultValue,
  helperMsg,
  validMsg,
  Component,
  componentProps,
  schema,
  schemaPath
}) => {
  return (
    <Field
      name={name}
      label={label}
      defaultValue={defaultValue}
      isRequired={isRequired}
      validate={value => {
        value = value.trim();
        try {
          yup.reach(schema, schemaPath).validateSync(value);
          return undefined;
        } catch (err) {
          return err.errors[0];
        }
      }}
    >
      {({fieldProps, error, valid}) => (
        <>
          <Component {...componentProps} autoComplete='on' {...fieldProps} />
          {!error && !valid && <HelperMessage>{helperMsg}</HelperMessage>}
          {error && (
            <ErrorMessage>
              {error.charAt(0).toUpperCase() + error.slice(1) + '.'}
            </ErrorMessage>
          )}
          {valid && <ValidMessage>{validMsg}</ValidMessage>}
        </>
      )}
    </Field>
  );
};

export default FieldHelper;
