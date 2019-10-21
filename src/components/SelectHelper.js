import React, {useState} from 'react';
import {Box, TextField, MenuItem} from '@material-ui/core';

const SelectHelper = ({options, multiple = false, field, form, ...props}) => {
  const [multiValues, setMultiValues] = useState([]);

  const onChange = event => {
    form.setFieldTouched(field.name, true);
    if (multiple) {
      const newVal = event.target.value;
      const newValues = [...multiValues, newVal];
      setMultiValues(newValues);
      form.setFieldValue(newValues);
    } else {
      form.handleChange(event);
    }
  };

  return (
    <TextField
      {...props}
      name={field.name}
      value={field.value}
      onChange={onChange}
      multiple={multiple}
      select
    >
      {options.map(option => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectHelper;
