import React from 'react';

import Textfield from '@atlaskit/textfield';

const FTextField = ({
  field, // { name, value, onChange, onBlur }
  form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <>
      <Textfield {...field} {...props} />
    </>
  );
};

export default FTextField;
