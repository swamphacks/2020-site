import {
  TextInput,
  CheckBox,
  MaskedInput,
  Select,
  TextArea,
  FormField
} from 'grommet';

// Section format:
// name: 'firstName',
//     label: 'First name',
//     isRequired: true,
//     placeholder: '',
//     defaultValue: '',
//     helperMsg: 'Enter your first name.',
//     Component: TextField,
//     componentProps: {},
//     schemaPath: 'section1.firstName',
//     isSelect: false,
// isMulti: true,
//     selectOptions: []

const section1 = [
  // {
  //   name: 'firstName',
  //   label: 'First name',
  //   isRequired: true,
  //   placeholder: '',
  //   defaultValue: '',
  //   helperMsg: 'Enter your first name.',
  //   Component: TextField,
  //   componentProps: {},
  //   schemaPath: 'section1.firstName',
  //   isSelect: false,
  //   selectOptions: []
  // },
  // {
  //   name: 'lastName',
  //   label: 'Last name',
  //   isRequired: true,
  //   placeholder: '',
  //   defaultValue: '',
  //   helperMsg: 'Enter your last name.',
  //   Component: TextField,
  //   componentProps: {},
  //   schemaPath: 'section1.lastName',
  //   isSelect: false,
  //   selectOptions: []
  // },
  // {
  //   name: 'genderSex',
  //   label: 'Gender/Sex',
  //   isRequired: true,
  //   defaultValue: '',
  //   helperMsg: 'Enter your gender/sex.',
  //   Component: CreatableSelect,
  //   componentProps: {},
  //   schemaPath: 'section1.genderSex',
  //   isSelect: true,
  //   selectOptions: [
  //     {label: 'Male', value: 'male'},
  //     {label: 'Female', value: 'female'},
  //     {label: 'Other', value: 'other'},
  //     {label: 'Prefer not to answer', value: 'preferNoAnswer'}
  //   ]
  // },
  // {
  //   name: 'dateOfBirth',
  //   label: 'Date of Birth',
  //   isRequired: true,
  //   placeholder: '##/##/####',
  //   helperMsg: 'Enter your date of birth.',
  //   Component: TextField,
  //   schemaPath: 'section1.dateOfBirth'
  // },
  // {
  //   name: 'phone',
  //   label: 'Phone Number',
  //   isRequired: true,
  //   helperMsg: 'Enter your phone number.',
  //   Component: TextField,
  //   schemaPath: 'section1.phone'
  // },
  // {
  //   name: 'shirtSize',
  //   label: 'Shirt Size',
  //   isRequired: true,
  //   helperMsg: 'Select your shirt size.',
  //   Component: Select,
  //   schemaPath: 'section1.shirtSize',
  //   isSelect: true,
  //   selectOptions: [
  //     {label: 'Small', value: 's'},
  //     {label: 'Medium', value: 'm'},
  //     {label: 'Large', value: 'l'},
  //     {label: 'Extra large', value: 'xl'}
  //   ]
  // },
  // {
  //   name: 'allergiesDiet',
  //   label: 'Allergies/Dietary Restrictions',
  //   isRequired: true,
  //   helperMsg: 'Let us know if you have any restrictionns.',
  //   Component: CreatableSelect,
  //   componentProps: {isMulti: true},
  //   schemaPath: 'section1.allergiesDiet',
  //   isSelect: true,
  //   isMulti: true,
  //   selectOptions: [
  //     {label: 'Vegan', value: 'vegan'},
  //     {label: 'Vegetarian', value: 'vegetarian'}
  //   ]
  // }
];

const section2 = [
  // {
  //   name: 'test',
  //   label: 'Test name',
  //   isRequired: true,
  //   defaultValue: '',
  //   helperMsg: 'Enter your test name.',
  //   validMsg: 'Looks test!',
  //   Component: TextField,
  //   componentProps: {autoComplete: 'on'},
  //   schemaPath: 'section2.test'
  // }
];

export {section1, section2};
