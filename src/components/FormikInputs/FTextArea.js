import React from 'react';

import TextArea from '@atlaskit/textarea';

const FTextArea = ({
  field, // { name, value, onChange, onBlur }
  form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <>
      <TextArea {...field} {...props} />
    </>
  );
};

export default FTextArea;
