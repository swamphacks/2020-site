import React from 'react';

import Select from '@atlaskit/select';

const FSelect = ({
  field, // { name, value, onChange, onBlur }
  form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <>
      <Select {...field} {...props} />
    </>
  );
};

export default FSelect;
