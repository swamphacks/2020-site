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
  {
    name: 'firstName',
    label: 'First Name',
    isRequired: true,
    placeholder: 'First name',
    componentType: 'TextField',
    componentProps: {
      autoFocus: true
    }
  },
  {
    name: 'lastName',
    label: 'Last Name',
    isRequired: true,
    placeholder: 'Last name',
    componentType: 'TextField'
  },
  {
    name: 'genderSex',
    label: 'Gender/Sex',
    isRequired: true,
    placeholder: 'Select or type...',
    componentType: 'TextField',
    componentProps: {
      suggestions: [
        {label: 'Male', value: 'Male'},
        {label: 'Female', value: 'Female'},
        {label: 'Other', value: 'Other'}
      ]
    }
  },
  {
    name: 'dateOfBirth',
    label: 'Birthday',
    isRequired: true,
    componentType: 'MaskedInput',
    componentProps: {
      mask: [
        {
          length: 2,

          placeholder: 'mm'
        },
        {fixed: '/'},
        {
          length: 2,
          placeholder: 'dd'
        },
        {fixed: '/'},
        {
          length: 4,
          placeholder: 'yyyy'
        }
      ]
    }
  }
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
