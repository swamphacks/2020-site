import * as yup from 'yup';
import majors from '../../resources/data/majors.json';

const section1 = {
  title: 'Basic Information',
  initialValues: {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    raceEthnicity: '',
    phone: '',
    shirtSize: '',
    allergiesDiet: ''
  },
  schema: yup.object().shape({
    // Basic information
    firstName: yup.string().required('This field is required.'),
    lastName: yup.string().required('This field is required.'),
    dateOfBirth: yup
      .string()
      .matches(
        /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/,
        'Must be a valid date of birth (mm/dd/yyyy).'
      )
      .required('This field is required.'),
    gender: yup.string().required('This field is required.'),
    raceEthnicity: yup.string().required('This field is required.'),
    phone: yup
      .string('Must be a valid phone number.')
      .matches(/\d{10}/, 'Must be a valid phone number (##########).')
      .required('This field is required.'),
    shirtSize: yup.string().required('This field is required.'),
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
      name: 'dateOfBirth',
      label: 'Date of Birth',
      componentType: 'TextField',
      componentProps: {
        required: true,
        placeholder: 'mm/dd/yyyy'
      }
    },
    {
      name: 'gender',
      label: 'Gender',
      componentType: 'Dropdown',
      options: [
        {key: '0', text: 'Male', value: 'Male'},
        {key: '1', text: 'Female', value: 'Female'},
        {key: '2', text: 'Prefer Not to Answer', value: 'No Answer'},
        {key: '3', text: 'Other (please type)', value: 'Other'}
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
      name: 'raceEthnicity',
      label: 'What is your race/ethnicity?',
      componentType: 'Dropdown',
      options: [
        {
          key: '0',
          text: 'American Indian or Alaskan Native',
          value: 'American Indian or Alaskan Native'
        },
        {
          key: '1',
          text: 'Asian / Pacific Islander',
          value: 'Asian / Pacific Islander'
        },
        {
          key: '2',
          text: 'Black or African American',
          value: 'Black or African American'
        },
        {
          key: '3',
          text: 'Hispanic',
          value: 'Hispanic'
        },
        {
          key: '4',
          text: 'White / Caucasian',
          value: 'White / Caucasian'
        },
        {
          key: '5',
          text: 'Multiple ethnicity / Other (please type)',
          value: 'Other'
        },
        {key: '6', text: 'Prefer Not to Answer', value: 'No Answer'}
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
        {key: '0', text: 'Small', value: 'Small'},
        {key: '1', text: 'Medium', value: 'Medium'},
        {key: '2', text: 'Large', value: 'Large'},
        {key: '3', text: 'Extra Large', value: 'Extra Large'},
        {key: '4', text: 'Extra Extra Large', value: 'Extra Extra Large'}
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
        {key: 'None', text: 'None', value: 'None'},
        {key: 'Vegan', text: 'Vegan', value: 'Vegan'},
        {key: 'Vegetarian', text: 'Vegetarian', value: 'Vegetarian'},
        {
          key: 'Lactose Intolerance',
          text: 'Lactose Intolerance',
          value: 'Lactose Intolerance'
        },
        {
          key: 'Peanut Allergy',
          text: 'Peanut Allergy',
          value: 'Peanut Allergy'
        },
        {key: 'Gluten Free', text: 'Gluten Free', value: 'Gluten Free'},
        {key: 'Vegetarian', text: 'Vegetarian', value: 'Vegetarian'},
        {key: 'Kosher', text: 'Kosher', value: 'Kosher'},
        {key: 'Halal', text: 'Halal', value: 'Halal'},
        {key: 'Other', text: 'Other (please type)', value: 'Other'}
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
  initialValues: {
    school: '',
    major: '',
    currLevelStudy: '',
    gradYear: ''
  },
  schema: yup.object().shape({
    // Education
    school: yup.string().required('This field is required.'),
    major: yup.string().required('This field is required.'),
    currLevelStudy: yup.string().required('This field is required.'),
    gradYear: yup.number().required('This field is required.')
  }),
  fields: [
    {
      name: 'school',
      initialValue: '',
      label: 'School',
      componentType: 'Dropdown',
      options: [
        {
          key: 'University of Florida',
          text: 'University of Florida',
          value: 'University of Florida'
        },
        {
          key: 'University of Central Florida',
          text: 'University of Central Florida',
          value: 'University of Central Florida'
        },
        {
          key: 'Florida International University',
          text: 'Florida International University',
          value: 'Florida International University'
        },
        {
          key: 'University of South Florida',
          text: 'University of South Florida',
          value: 'University of South Florida'
        },
        {
          key: 'Florida Institute of Technology',
          text: 'Florida Institute of Technology',
          value: 'Florida Institute of Technology'
        },
        {
          key: 'Georgia Institute of Technology',
          text: 'Georgia Institute of Technology',
          value: 'Georgia Institute of Technology'
        },
        {
          key: 'University of Georgia',
          text: 'University of Georgia',
          value: 'University of Georgia'
        },
        {
          key: 'Georgia State University',
          text: 'Georgia State University',
          value: 'Georgia State University'
        },
        {
          key: 'Florida Atlantic University',
          text: 'Florida Atlantic University',
          value: 'Florida Atlantic University'
        },
        {
          key: 'University of Miami',
          text: 'University of Miami',
          value: 'University of Miami'
        },
        {key: 'Other', text: 'Other (please type)', value: 'Other'}
      ],
      componentProps: {
        required: true,
        placeholder: 'Select or type...',
        search: true
      }
    },
    {
      name: 'major',
      label: 'What is your major?',
      componentType: 'Dropdown',
      options: majors,
      componentProps: {
        required: true,
        placeholder: 'Select or type...',
        search: true
      }
    },
    {
      name: 'currLevelStudy',
      label: 'What is your most current level of study?',
      componentType: 'Dropdown',
      options: [
        {key: 'Undergraduate', text: 'Undergraduate', value: 'Undergraduate'},
        {key: 'Graduate', text: 'Graduate', value: 'Graduate'}
      ],
      componentProps: {
        required: true,
        placeholder: 'Select...'
      }
    },
    {
      name: 'gradYear',
      label: 'What is your graduation year?',
      componentType: 'Dropdown',
      options: [
        {key: '2020', text: '2020', value: 2020},
        {key: '2021', text: '2021', value: 2021},
        {key: '2022', text: '2022', value: 2022},
        {key: '2023', text: '2023', value: 2023},
        {key: '2024', text: '2024', value: 2024},
        {key: '2025', text: '2025', value: 2025},
        {key: '2026', text: '2026', value: 2026},
        {key: '2027', text: '2027', value: 2027},
        {key: '2028', text: '2028', value: 2028},
        {key: '2029', text: '2029', value: 2029},
        {key: '2030', text: '2030', value: 2030}
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
  initialValues: {
    github: '',
    website: '',
    linkedIn: '',
    resume: undefined,
    positions: ['']
  },
  schema: yup.object().shape({
    // Professional information
    github: yup.string().lowercase(),
    website: yup.string().lowercase(),
    linkedIn: yup.string().lowercase(),
    resume: yup.mixed().required('This field is required.'),
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
        required: true
      }
    },
    {
      name: 'positions',
      label: 'What positions are you interested in?',
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
  initialValues: {
    needsTravelAssist: '',
    travelType: ['']
  },
  schema: yup.object().shape({
    // Travel information
    needsTravelAssist: yup.string().required(),
    travelType: yup.array(yup.string().lowercase())
  }),
  fields: [
    {
      name: 'needsTravelAssist',
      label: 'Do you need travel assistance?',
      componentType: 'Dropdown',
      options: [{text: 'Yes', value: 'yes'}, {text: 'No', value: 'no'}],
      componentProps: {
        required: true,
        placeholder: 'Select...'
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
  initialValues: {
    topics: [],
    question1: '',
    question2: '',
    question3: ''
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
  initialValues: {
    email: '',
    password: '',
    photoRelease: undefined,
    mlhCodeOfConduct: undefined,
    regDataSharing: undefined,
    statisticsUsage: undefined,
    firstTimeHacker: '',
    firstTimeSwamphacks: '',
    hearAbout: undefined,
    confirmTrue: undefined
  },
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
