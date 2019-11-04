import colleges from '../../resources/data/CollegeOptions';
import * as yup from 'yup';

const section1 = {
  title: 'Basic Information',
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
      componentType: 'TextField',
      componentProps: {
        required: true,
        placeholder: 'First name'
      }
    },
    {
      name: 'lastName',
      label: 'Last Name',
      componentType: 'TextField',
      componentProps: {
        required: true,
        placeholder: 'Last name'
      }
    },
    {
      name: 'genderSex',
      label: 'Gender/Sex',
      componentType: 'Dropdown',
      options: [
        {text: 'Male', value: 'male'},
        {text: 'Female', value: 'female'}
      ],
      componentProps: {
        required: true,
        placeholder: 'Select or type...',
        search: true,
        allowAdditions: true,
        additionLabel: 'Other: ',
        additionPosition: 'bottom'
      }
    },
    {
      name: 'dateOfBirth',
      label: 'Birthday',
      componentType: 'TextField',
      componentProps: {
        required: true,
        placeholder: 'mm/dd/yyyy'
      }
    },
    {
      name: 'phone',
      label: 'Phone Number',
      componentType: 'TextField',
      componentProps: {
        required: true,
        placeholder: '##########'
      }
    },
    {
      name: 'shirtSize',
      label: 'Shirt Size',
      componentType: 'Dropdown',
      options: [
        {text: 'Small', value: 'small'},
        {text: 'Medium', value: 'medium'},
        {text: 'Large', value: 'large'},
        {text: 'Extra Large', value: 'extraLarge'}
      ],
      componentProps: {
        required: true,
        placeholder: 'Select...'
      }
    },
    {
      name: 'allergiesDiet',
      label: 'Allergies/Dietary Restrictions',
      componentType: 'Dropdown',
      options: [
        {text: 'Vegan', value: 'vegan'},
        {text: 'Vegetarian', value: 'vegetarian'},
        {text: 'None', value: 'none'}
      ],
      componentProps: {
        required: true,
        placeholder: 'Select or type...',
        search: true,
        allowAdditions: true,
        additionLabel: 'Other: ',
        additionPosition: 'bottom'
      }
    }
  ]
};

const section2 = {
  title: 'Education',
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
      initialValue: '',
      label: 'School',
      componentType: 'Dropdown',
      options: [
        {text: 'Vegan', value: 'vegan'},
        {text: 'Vegetarian', value: 'vegetarian'},
        {text: 'Other', value: 'other'}
      ],
      componentProps: {
        required: true,
        placeholder: 'Select or type...',
        search: true
      }
    },
    {
      name: 'major',
      label: 'Major',
      componentType: 'Dropdown',
      options: [
        {text: 'Vegan', value: 'vegan'},
        {text: 'Vegetarian', value: 'vegetarian'},
        {text: 'Other', value: 'other'}
      ],
      componentProps: {
        required: true,
        placeholder: 'Select or type...',
        search: true
      }
    },
    {
      name: 'currYear',
      label: 'Year',
      componentType: 'Dropdown',
      options: [
        {text: 'Freshman', value: 'freshman'},
        {text: 'Sophomore', value: 'sophomore'},
        {text: 'Junior', value: 'junior'},
        {text: 'Senior', value: 'senior'},
        {text: 'Graduate', value: 'graduate'}
      ],
      componentProps: {
        required: true,
        placeholder: 'Select...'
      }
    },
    {
      name: 'gradYear',
      label: 'Graduation Year',
      componentType: 'Dropdown',
      options: [
        {text: '2020', value: 2020},
        {text: '2021', value: 2021},
        {text: '2022', value: 2022},
        {text: '2023', value: 2023},
        {text: '2024', value: 2024},
        {text: '2025', value: 2025},
        {text: '2026', value: 2026},
        {text: '2027', value: 2027},
        {text: '2028', value: 2028},
        {text: '2029', value: 2029},
        {text: '2030', value: 2030}
      ],
      componentProps: {
        required: true,
        placeholder: 'Select...'
      }
    }
  ]
};

const section3 = {
  title: 'Professional Information',
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
      componentType: 'TextField',
      componentProps: {
        required: false
      }
    },
    {
      name: 'website',
      label: 'Personal Website Link',
      componentType: 'TextField',
      componentProps: {
        required: false
      }
    },
    {
      name: 'linkedIn',
      label: 'LinkedIn Link',
      componentType: 'TextField',
      componentProps: {
        required: false
      }
    },
    {
      name: 'resume',
      label: 'Upload Your Resume',
      componentType: 'FileUpload',
      componentProps: {
        required: false
      }
    },
    {
      name: 'positions',
      label: 'Select positions you may be interested in',
      componentType: 'Dropdown',
      options: [
        {
          key: '1',
          text: 'Summer 2020 Internship',
          value: 'Summer 2020 Internship'
        },
        {key: '2', text: 'Summer 2020 Co-op', value: 'Summer 2020 Co-op'},
        {
          key: '3',
          text: 'Summer 2020 Full Time',
          value: 'Summer 2020 Full Time'
        },
        {
          key: '4',
          text: 'Fall 2020 Internship',
          value: 'Fall 2020 Internship'
        },
        {key: '5', text: 'Fall 2020 Co-op', value: 'Fall 2020 Co-op'},
        {key: '6', text: 'Fall 2020 Co-op', value: 'Fall 2020 Co-op'},
        {
          key: '7',
          text: 'Fall 2020 Full Time',
          value: 'Fall 2020 Full Time'
        }
      ],
      componentProps: {
        required: false,
        placeholder: 'Select multiple...',
        multiple: true,
        closeOnChange: false
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
      componentType: 'Checkbox',
      componentProps: {
        required: true
      }
    },
    {
      name: 'travelType',
      label: 'If so, what type of travel are you considering?',
      componentType: 'Dropdown',
      options: [
        {key: 'flight', text: 'Flight', value: 'flight'},
        {key: 'carpool', text: 'Carpool', value: 'carpool'},
        {key: 'bus', text: 'Bus', value: 'bus'},
        {key: 'amtrak', text: 'Amtrak', value: 'amtrak'}
      ],
      componentProps: {
        required: false,
        placeholder: 'Select multiple or type...',
        multiple: true,
        closeOnChange: false,
        search: true,
        allowAdditions: true,
        additionLabel: 'Other: ',
        additionPosition: 'bottom'
      }
    }
  ]
};

const section5 = {
  title: 'Free Response',
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
      componentType: 'Dropdown',
      options: [
        {key: 'flight', text: 'Flight', value: 'flight'},
        {key: 'carpool', text: 'Carpool', value: 'carpool'},
        {key: 'bus', text: 'Bus', value: 'bus'},
        {key: 'amtrak', text: 'Amtrak', value: 'amtrak'}
      ],
      componentProps: {
        required: false,
        placeholder: 'Select multiple or type...',
        multiple: true,
        closeOnChange: false,
        search: true
      }
    },
    {
      name: 'question1',
      label: 'What inspired you to apply for SwampHacks VI?',
      componentType: 'TextArea',
      componentProps: {
        rows: 5,
        required: true,
        placeholder: 'Start typing...'
      }
    },
    {
      name: 'question2',
      label: 'Why do you hack?',
      componentType: 'TextArea',
      componentProps: {
        rows: 5,
        required: true,
        placeholder: 'Start typing...'
      }
    },
    {
      name: 'question3',
      label: 'Describe your favorite project and why it is your favorite.',
      componentType: 'TextArea',
      componentProps: {
        rows: 5,
        required: true,
        placeholder: 'Start typing...'
      }
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
    password: yup.string().required('This field is required.'),
    photoRelease: yup.bool().oneOf([true], 'You must agree to these terms.'),
    mlhCodeOfConduct: yup
      .bool()
      .oneOf([true], 'You must agree to these terms.'),
    regDataSharing: yup.bool().oneOf([true], 'You must agree to these terms.'),
    statisticsUsage: yup.bool().oneOf([true], 'You must agree to these terms.'),
    firstTimeHacker: yup.string().required(),
    firstTimeSwamphacks: yup.string().required(),
    hearAbout: yup.array(yup.string().lowercase()),
    confirmTrue: yup.bool().oneOf([true], 'Field must be checked.')
  }),
  fields: [
    {
      name: 'email',
      label: 'Email',
      componentType: 'TextField',
      componentProps: {
        required: true,
        placeholder: 'Email'
      }
    },
    {
      name: 'password',
      label: 'Password',
      componentType: 'TextField',
      componentProps: {
        required: true,
        placeholder: 'Password',
        type: 'password'
      }
    },
    {
      name: 'photoRelease',
      label: 'Photo Release Terms',
      componentType: 'Terms',
      link: 'http://www.google.com',
      componentProps: {
        required: true
      }
    },
    {
      name: 'mlhCodeOfConduct',
      label: 'MLH Code of Conduct',
      componentType: 'Terms',
      link: 'http://www.google.com',
      componentProps: {
        required: true
      }
    },
    {
      name: 'regDataSharing',
      label: 'Registration Data Sharing',
      componentType: 'Terms',
      link: 'http://www.google.com',
      componentProps: {
        required: true
      }
    },
    {
      name: 'statisticsUsage',
      label: 'Statistics Usage',
      componentType: 'Terms',
      link: 'http://www.google.com',
      componentProps: {
        required: true
      }
    },
    {
      name: 'firstTimeHacker',
      label: 'Have you participated in a hackathon before?',
      componentType: 'Dropdown',
      options: [{text: 'Yes', value: 'no'}, {text: 'No', value: 'yes'}],
      componentProps: {
        required: true,
        placeholder: 'Select...'
      }
    },
    {
      name: 'firstTimeSwamphacks',
      label: 'Have you participated in SwampHacks before?',
      componentType: 'Dropdown',
      options: [{text: 'Yes', value: 'no'}, {text: 'No', value: 'yes'}],
      componentProps: {
        required: true,
        placeholder: 'Select...'
      }
    },
    {
      name: 'hearAbout',
      label: 'How did you hear about SwampHacks?',
      componentType: 'Dropdown',
      options: [
        {text: 'Facebook', value: 'facebook'},
        {text: 'Twitter', value: 'twitter'},
        {text: 'MLH Website', value: 'mlh'},
        {text: 'Friend', value: 'friend'},
        {text: 'Instructor', value: 'instructor'},
        {text: 'Flyer/Sign', value: 'flyerSign'}
      ],
      componentProps: {
        required: true,
        placeholder: 'Select or type...',
        search: true,
        allowAdditions: true,
        additionLabel: 'Other: ',
        additionPosition: 'bottom',
        multiple: true
      }
    },
    {
      name: 'confirmTrue',
      label: 'I confirm that all of the information I have provided is true.',
      componentType: 'Checkbox',
      componentProps: {
        required: true
      }
    }
  ]
};

const sections = [section1, section2, section3, section4, section5, section6];

export {sections};
