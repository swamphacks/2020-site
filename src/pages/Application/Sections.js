import colleges from '../../resources/data/CollegeOptions';
import * as yup from 'yup';

const section1 = {
  title: 'Basic Information',
  initialValues: {
    firstName: undefined,
    lastName: undefined,
    genderSex: undefined,
    dateOfBirth: undefined,
    phone: undefined,
    shirtSize: undefined,
    allergiesDiet: undefined
  },
  schema: yup.object().shape({
    // Basic information
    firstName: yup
      .string()
      .lowercase()
      .required('This field is required.'),
    lastName: yup
      .string()
      .lowercase()
      .required('This field is required.'),
    genderSex: yup
      .string()
      .lowercase()
      .required('This field is required.'),
    dateOfBirth: yup.date().required(),
    phone: yup
      .string('Must be a valid phone number.')
      .matches(
        /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
        'Must be a valid phone number.'
      )
      .required('This field is required.'),
    shirtSize: yup
      .string()
      .lowercase()
      .required('This field is required.'),
    allergiesDiet: yup.string().required('This field is required.')
  }),
  fields: [
    {
      name: 'firstName',
      label: 'First Name',
      isRequired: true,
      placeholder: 'First name',
      componentType: 'TextField'
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
  ]
};

const section2 = {
  title: 'Education',
  initialValues: {
    school: undefined,
    major: undefined,
    currYear: undefined,
    gradYear: undefined
  },
  schema: yup.object().shape({
    // Education
    school: yup
      .string()
      .lowercase()
      .required('This field is required.'),
    major: yup
      .string()
      .lowercase()
      .required('This field is required.'),
    currYear: yup
      .string()
      .lowercase()
      .required('This field is required.'),
    gradYear: yup.number().required('This field is required.')
  }),
  fields: [
    {
      name: 'school',
      label: 'School',
      isRequired: true,
      placeholder: 'Search or select...',
      componentType: 'Select',
      componentProps: {
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
  ]
};

const section3 = {
  title: 'Professional Information',
  initialValues: {
    github: null,
    website: null,
    linkedIn: null,
    resume: null
  },
  schema: yup.object().shape({
    // Professional information
    github: yup.string().lowercase(),
    website: yup.string().lowercase(),
    linkedIn: yup.string().lowercase(),
    resume: yup.mixed(),
    positions: yup.array(yup.string().lowercase())
  }),
  fields: [
    {
      name: 'github',
      label: 'Github Username',
      isRequired: false,
      componentType: 'TextField'
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
    },
    {
      name: 'positions',
      label: 'Select positions you may be interested in',
      isRequired: false,
      componentType: 'Select',
      placeholder: 'Select multiple...',
      componentProps: {
        options: [
          'Summer 2020 Internship',
          'Summer 2020 Co-op',
          'Summer 2020 Full Time',
          'Fall 2020 Internship',
          'Fall 2020 Co-op',
          'Fall 2020 Full Time'
        ],
        multiple: true
      }
    }
  ]
};

const section4 = {
  title: 'Travel Information',
  schema: yup.object().shape({
    // Travel information
    needsTravelAssist: yup.string().required('This field is required.'),
    travelType: yup.array(yup.string().lowercase())
  }),
  fields: [
    {
      name: 'needsTravelAssist',
      label: 'Do you need travel assistance?',
      isRequired: true,
      componentType: 'Select',
      placeholder: 'Select...',
      componentProps: {
        options: ['Yes', 'No']
      }
    },
    {
      name: 'travelType',
      label: 'If so, what type of travel are you considering?',
      isRequired: false,
      placeholder: 'Select multiple...',
      componentType: 'Select',
      componentProps: {
        options: [
          {label: 'Flight', value: 'flight'},
          {label: 'Carpool', value: 'carpool'},
          {label: 'Bus', value: 'bus'},
          {label: 'Amtrak', value: 'amtrak'}
        ],
        isCreatable: true,
        isMulti: true
      }
    }
  ]
};

const section5 = {
  title: 'Free Response',
  initialValues: {
    topics: null,
    question1: null,
    question2: null,
    question3: null
  },
  schema: yup.object().shape({
    // Free response
    topics: yup.array(yup.string()),
    question1: yup.string().required('This field is required.'),
    question2: yup.string().required('This field is required.'),
    question3: yup.string().required('This field is required.')
  }),
  fields: [
    {
      name: 'topics',
      label: 'What topics are you interested in?',
      isRequired: false,
      placeholder: 'Select multiple...',
      componentType: 'Select',
      componentProps: {
        options: [
          'App development',
          'Enabling technologies',
          'Computational biology',
          'Computer architecture',
          'Computer vision',
          'Computer security',
          'Data analytics',
          'Data mining',
          'Graphics',
          'Machine learning',
          'Networking',
          'Robotics',
          'Video games',
          'Virtual/Augmented reality',
          'Web development',
          'Natural language processing',
          'Human-centered computing',
          'UI/UX design',
          'Professional development'
        ],
        multiple: true
      }
    },
    {
      name: 'question1',
      label: 'What inspired you to apply for SwampHacks VI?',
      isRequired: true,
      placeholder: 'Start typing...',
      componentType: 'TextArea'
    },
    {
      name: 'question2',
      label: 'Why do you hack?',
      isRequired: true,
      placeholder: 'Start typing...',
      componentType: 'TextArea'
    },
    {
      name: 'question3',
      label: 'Describe your favorite project and why it is your favorite.',
      isRequired: true,
      placeholder: 'Start typing...',
      componentType: 'TextArea'
    }
  ]
};

const section6 = {
  title: 'Final Stretch',
  subtitle:
    'Answer some final questions and create an account to view your application status at a later date.',
  schema: yup.object().shape({
    // Account information
    email: yup
      .string()
      .email()
      .lowercase()
      .required('This field is required.'),
    password: yup.string().required('This field is required.')
  }),
  fields: [
    {
      name: 'email',
      label: 'Email',
      isRequired: true,
      componentType: 'TextField'
    },
    {
      name: 'password',
      label: 'Password',
      isRequired: true,
      componentType: 'TextField'
    }
  ]
};

const sections = [section1, section2, section3, section4, section5, section6];

export {sections};
