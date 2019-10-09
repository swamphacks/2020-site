import * as yup from 'yup';
import React, {useState} from 'react';
import TextField from '@atlaskit/textfield';
import Checkbox from '@atlaskit/checkbox';
import Select from '@atlaskit/select';
import TextArea from '@atlaskit/textarea';

// Section format:

const section1 = [
  {
    name: 'firstName',
    label: 'First name',
    isRequired: true,
    defaultValue: '',
    helperMsg: 'Enter your first name.',
    validMsg: 'Looks great!',
    Component: TextField,
    componentProps: {autoComplete: 'on'},
    schemaPath: 'section1.firstName'
  },
  {
    name: 'lastName',
    label: 'Last name',
    isRequired: true,
    defaultValue: '',
    helperMsg: 'Enter your last name.',
    validMsg: 'Looks great!',
    Component: TextField,
    componentProps: {autoComplete: 'on'},
    schemaPath: 'section1.lastName'
  }
];

export {section1};
