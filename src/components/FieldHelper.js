import React, {useState} from 'react';
import * as yup from 'yup';
import {Field, HelperMessage, ErrorMessage, ValidMessage} from '@atlaskit/form';
import {multiply} from '@atlaskit/theme/math';

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
  isMulti,
  selectOptions
}) => {
  // Used to handle createable
  const [cSelectOptions, setOptions] = useState(selectOptions);
  // TODO: Fix multi select
  const [multiValues, setMultiValues] = useState([]);

  return (
    <Field
      name={name}
      label={label}
      defaultValue={defaultValue}
      isRequired={isRequired}
      transform={(onChangeValue, currValue) => {
        console.log('onChangeValue', onChangeValue);
        console.log('currVal', currValue);
        if (isMulti) return onChangeValue;
        else if (isSelect) return onChangeValue;
      }}
      validate={value => {
        if (Array.isArray(value)) {
          if (value !== undefined) {
            for (let i = 0; i < value.length; i++) {
              value[i] = value[i].value;
            }
          }
        } else if (typeof value === 'object' && value !== undefined) {
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
          {isSelect && !isMulti && (
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

          {isSelect && isMulti && (
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
                let newMultiValues = multiValues;
                newMultiValues.push(newOption);
                setMultiValues(newMultiValues);
              }}
              placeholder='Select or begin typing...'
              onChange={value => {
                setMultiValues(value);
                fieldProps.onChange(value);
              }}
              value={multiValues}
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
