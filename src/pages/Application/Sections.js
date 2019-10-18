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
import colleges from '../../resources/data/CollegeOptions';

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
  },
  {
    name: 'phone',
    label: 'Phone Number',
    isRequired: true,
    componentType: 'MaskedInput',
    componentProps: {
      mask: [
        {fixed: '('},
        {
          length: 3,
          placeholder: '###'
        },
        {fixed: ')'},
        {fixed: ' '},
        {
          length: 3,
          placeholder: '###'
        },
        {fixed: '-'},
        {
          length: 4,
          placeholder: '####'
        }
      ]
    }
  },
  {
    name: 'shirtSize',
    label: 'Shirt Size',
    isRequired: true,
    placeholder: 'Select a size...',
    componentType: 'Select',
    componentProps: {
      options: ['Small', 'Medium', 'Large', 'Extra large']
    }
  },
  {
    name: 'allergiesDiet',
    label: 'Allergies/Dietary Restrictions',
    isRequired: true,
    placeholder: 'Select or type...',
    componentType: 'TextField',
    componentProps: {
      suggestions: [
        {label: 'None', value: 'None'},
        {label: 'Vegan', value: 'Vegan'},
        {label: 'Vegetarian', value: 'Vegetarian'}
      ]
    }
  }
];

const section2 = [
  {
    name: 'school',
    label: 'School',
    isRequired: true,
    placeholder: 'Search or select...',
    componentType: 'Select',
    componentProps: {
      autoFocus: true,
      options: colleges
    }
  },
  {
    name: 'major',
    label: 'Major',
    isRequired: true,
    placeholder: 'Search or select...',
    componentType: 'Select',
    componentProps: {
      autoFocus: true,
      options: colleges
    }
  },
  {
    name: 'currYear',
    label: 'Year',
    isRequired: true,
    placeholder: 'Select...',
    componentType: 'Select',
    componentProps: {
      autoFocus: true,
      options: ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate']
    }
  },
  {
    name: 'gradYear',
    label: 'Graduation Year',
    isRequired: true,
    placeholder: 'Select...',
    componentType: 'Select',
    componentProps: {
      autoFocus: true,
      options: [
        '2020',
        '2021',
        '2022',
        '2023',
        '2024',
        '2025',
        '2026',
        '2027',
        '2028',
        '2029',
        '2030'
      ]
    }
  }
];

const section3 = [
  {
    name: 'github',
    label: 'Github Username',
    isRequired: false,
    componentType: 'TextField',
    componentProps: {
      autoFocus: true
    }
  },
  {
    name: 'website',
    label: 'Personal Website Link',
    isRequired: false,
    componentType: 'TextField'
  },
  {
    name: 'linkedIn',
    label: 'LinkedIn Link',
    isRequired: false,
    componentType: 'TextField'
  },
  {
    name: 'resume',
    label: 'Upload Your Resume',
    isRequired: false,
    componentType: 'FileUpload'
  }
];

const section4 = [
  {
    name: 'needsTravelAssist',
    label: 'Do you need travel assistance?',
    isRequired: true,
    componentType: 'TextField',
    componentProps: {
      autoFocus: true
    }
  },
  {
    name: 'travelType',
    label: 'If so, what type of travel?',
    isRequired: false,
    placeholder: 'Select...',
    componentType: 'TextField'
  }
];

const section5 = [
  {
    name: 'topics',
    label: 'What topics are you interested in?',
    isRequired: false,
    componentType: 'TextField',
    componentProps: {
      autoFocus: true
    }
  },
  {
    name: 'question1',
    label: 'Question 1',
    isRequired: false,
    placeholder: 'Start typing...',
    componentType: 'TextField'
  },
  {
    name: 'question2',
    label: 'Question 2',
    isRequired: false,
    placeholder: 'Start typing...',
    componentType: 'TextField'
  },
  {
    name: 'question3',
    label: 'Question 3',
    isRequired: false,
    placeholder: 'Start typing...',
    componentType: 'TextField'
  }
];

const section6 = [
  {
    name: 'email',
    label: 'Email',
    isRequired: true,
    componentType: 'TextField',
    componentProps: {
      autoFocus: true
    }
  },
  {
    name: 'password',
    label: 'Password',
    isRequired: true,
    componentType: 'TextField'
  }
];

const sections = [
  {sec: section1, sch: 'section1'},
  {sec: section2, sch: 'section2'},
  {sec: section3, sch: 'section3'},
  {sec: section4, sch: 'section4'},
  {sec: section5, sch: 'section5'},
  {sec: section6, sch: 'section6'}
];

export {sections};
