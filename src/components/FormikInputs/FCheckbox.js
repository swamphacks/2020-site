import React from 'react';

import {Checkbox} from '@atlaskit/checkbox';

const FCheckbox = ({
  field, // { name, value, onChange, onBlur }
  form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <>
      <Checkbox {...field} {...props} />
    </>
  );
};

export default FCheckbox;
