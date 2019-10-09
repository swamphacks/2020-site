import React, {useState} from 'react';
import * as yup from 'yup';
import {Field, HelperMessage, ErrorMessage, ValidMessage} from '@atlaskit/form';

const FieldHelper = ({
  name,
  label,
  isRequired,
  placeholder,
  defaultValue,
  helperMsg,
  validMsg,
  Component,
  componentProps,
  schema,
  schemaPath,
  isSelect,
  selectOptions
}) => {
  // Used to handle createable
  const [cSelectOptions, setOptions] = useState(selectOptions);

  // TODO: Fix multi select

  return (
    <Field
      name={name}
      label={label}
      defaultValue={defaultValue}
      isRequired={isRequired}
      validate={value => {
        if (Array.isArray(value)) {
          for (let i = 0; i < value.length; i++) {
            value[i] = value[i].value;
          }
        } else if (typeof value === 'object' && value != undefined) {
          value = value.value;
        }
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
          {isSelect && (
            <Component
              {...componentProps}
              // Override componentProps
              autoComplete='on'
              {...fieldProps}
              // Handle select
              options={cSelectOptions}
              // Handle createable
              onCreateOption={value => {
                if (!isSelect) return undefined;
                const newOption = {
                  label: value,
                  value: value.toLowerCase().trim()
                };
                setOptions([...cSelectOptions, newOption]);
                fieldProps.onChange(newOption);
              }}
              placeholder='Select or begin typing...'
            />
          )}

          {!isSelect && (
            <Component
              {...componentProps}
              // Override componentProps
              autoComplete='on'
              {...fieldProps}
              placeholder={placeholder}
            />
          )}

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
