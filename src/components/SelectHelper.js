import React, {useState} from 'react';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';

const SelectHelper = ({
  options,
  isMulti = false,
  isCreatable = false,
  field,
  form,
  ...props
}) => {
  const onChange = option => {
    if (option)
      form.setFieldValue(
        field.name,
        isMulti ? option.map(item => item.value) : option.value
      );
    else form.setFieldValue(field.name, undefined);
  };

  const getValue = () => {
    if (options && field.value) {
      return isMulti
        ? options.filter(option => field.value.indexOf(option.value) >= 0)
        : options.find(option => option.value === field.value);
    } else {
      return isMulti ? [] : '';
    }
  };
  return (
    <>
      {isCreatable && (
        <CreatableSelect
          {...props}
          name={field.name}
          value={getValue()}
          onChange={onChange}
          options={options}
          isMulti={isMulti}
        />
      )}
      {!isCreatable && (
        <Select
          {...props}
          name={field.name}
          value={getValue()}
          onChange={onChange}
          options={options}
          isMulti={isMulti}
        />
      )}
    </>
  );
};

export default SelectHelper;
