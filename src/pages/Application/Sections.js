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

const section2 = [
  {
    name: 'test',
    label: 'Test name',
    isRequired: true,
    defaultValue: '',
    helperMsg: 'Enter your test name.',
    validMsg: 'Looks test!',
    Component: TextField,
    componentProps: {autoComplete: 'on'},
    schemaPath: 'section2.test'
  }
];

export {section1, section2};
