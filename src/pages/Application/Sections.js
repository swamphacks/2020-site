import React from 'react';
import * as yup from 'yup';
import majors from '../../resources/data/majors.json';
import {Link} from 'react-router-dom';

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
        {key: 'Male', text: 'Male', value: 'Male'},
        {key: 'Female', text: 'Female', value: 'Female'},
        {
          key: 'Prefer Not to Answer',
          text: 'Prefer Not to Answer',
          value: 'Prefer Not to Answer'
        },
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
    },
    {
      name: 'raceEthnicity',
      label: 'What is your race/ethnicity?',
      componentType: 'Dropdown',
      options: [
        {
          key: 'American Indian or Alaskan Native',
          text: 'American Indian or Alaskan Native',
          value: 'American Indian or Alaskan Native'
        },
        {
          key: 'Asian / Pacific Islander',
          text: 'Asian / Pacific Islander',
          value: 'Asian / Pacific Islander'
        },
        {
          key: 'Black or African American',
          text: 'Black or African American',
          value: 'Black or African American'
        },
        {
          key: 'Hispanic',
          text: 'Hispanic',
          value: 'Hispanic'
        },
        {
          key: 'White / Caucasian',
          text: 'White / Caucasian',
          value: 'White / Caucasian'
        },
        {
          key: 'Multiple ethnicity / Other (please type)',
          text: 'Multiple ethnicity / Other (please type)',
          value: 'Other'
        },
        {
          key: 'Prefer Not to Answer',
          text: 'Prefer Not to Answer',
          value: 'Prefer Not to Answer'
        }
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
        placeholder: '##########',
        maxLength: 10
      }
    },
    {
      name: 'shirtSize',
      label: 'Shirt Size',
      componentType: 'Dropdown',
      options: [
        {key: 'Small', text: 'Small', value: 'Small'},
        {key: 'Medium', text: 'Medium', value: 'Medium'},
        {key: 'Large', text: 'Large', value: 'Large'},
        {key: 'Extra Large', text: 'Extra Large', value: 'Extra Large'},
        {
          key: 'Extra Extra Large',
          text: 'Extra Extra Large',
          value: 'Extra Extra Large'
        }
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
          key: 'Embry–Riddle Aeronautical University',
          text: 'Embry–Riddle Aeronautical University',
          value: 'Embry–Riddle Aeronautical University'
        },
        {
          key: 'Florida Atlantic University',
          text: 'Florida Atlantic University',
          value: 'Florida Atlantic University'
        },
        {
          key: 'Florida Institute of Technology',
          text: 'Florida Institute of Technology',
          value: 'Florida Institute of Technology'
        },
        {
          key: 'Florida International University',
          text: 'Florida International University',
          value: 'Florida International University'
        },
        {
          key: 'Florida State University',
          text: 'Florida State University',
          value: 'Florida State University'
        },
        {
          key: 'Georgia Institute of Technology',
          text: 'Georgia Institute of Technology',
          value: 'Georgia Institute of Technology'
        },
        {
          key: 'Georgia State University',
          text: 'Georgia State University',
          value: 'Georgia State University'
        },
        {
          key: 'University of Central Florida',
          text: 'University of Central Florida',
          value: 'University of Central Florida'
        },
        {
          key: 'University of Florida',
          text: 'University of Florida',
          value: 'University of Florida'
        },
        {
          key: 'University of Georgia',
          text: 'University of Georgia',
          value: 'University of Georgia'
        },
        {
          key: 'University of Miami',
          text: 'University of Miami',
          value: 'University of Miami'
        },
        {
          key: 'University of South Florida',
          text: 'University of South Florida',
          value: 'University of South Florida'
        },
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
    },
    {
      name: 'major',
      label: 'What is your major?',
      componentType: 'Dropdown',
      options: majors,
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
      name: 'currLevelStudy',
      label: 'What is your most current level of study?',
      componentType: 'Dropdown',
      options: [
        {key: 'Freshman', text: 'Freshman', value: 'Freshman'},
        {key: 'Sophomore', text: 'Sophomore', value: 'Sophomore'},
        {key: 'Junior', text: 'Junior', value: 'Junior'},
        {key: 'Senior', text: 'Senior', value: 'Senior'},
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
    positions: []
  },
  schema: yup.object().shape({
    // Professional information
    github: yup.string(),
    website: yup.string(),
    linkedIn: yup.string(),
    resume: yup.mixed().required('This field is required.'),
    positions: yup.array(yup.string())
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
      label: 'Upload Your Resume (pdf)',
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
          key: 'Summer 2020 Internship',
          text: 'Summer 2020 Internship',
          value: 'Summer 2020 Internship'
        },
        {
          key: 'Summer 2020 Co-op',
          text: 'Summer 2020 Co-op',
          value: 'Summer 2020 Co-op'
        },
        {
          key: 'Summer 2020 Full Time',
          text: 'Summer 2020 Full Time',
          value: 'Summer 2020 Full Time'
        },
        {
          key: 'Fall 2020 Internship',
          text: 'Fall 2020 Internship',
          value: 'Fall 2020 Internship'
        },
        {
          key: 'Fall 2020 Co-op',
          text: 'Fall 2020 Co-op',
          value: 'Fall 2020 Co-op'
        },
        {
          key: 'Fall 2020 Full Time',
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
    travelType: []
  },
  schema: yup.object().shape({
    // Travel information
    needsTravelAssist: yup.string().required('This field is required.'),
    travelType: yup.array(yup.string())
  }),
  fields: [
    {
      name: 'needsTravelAssist',
      label: 'Do you need travel assistance?',
      componentType: 'Dropdown',
      options: [
        {key: 'Yes', text: 'Yes', value: 'Yes'},
        {key: 'No', text: 'No', value: 'No'}
      ],
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
        {key: 'Flight', text: 'Flight', value: 'Flight'},
        {key: 'Carpool', text: 'Carpool', value: 'Carpool'},
        {key: 'Bus', text: 'Bus', value: 'Bus'},
        {key: 'Amtrak', text: 'Amtrak', value: 'Amtrak'},
        {key: 'Other', text: 'Other (please type)', value: 'Other'}
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
    technologies: [],
    workshops: [],
    question1: '',
    question2: '',
    question3: ''
  },
  schema: yup.object().shape({
    // Free response
    technologies: yup.array(yup.string()),
    workshops: yup.array(yup.string()),
    question1: yup.string().required('This field is required.'),
    question2: yup.string().required('This field is required.'),
    question3: yup.string().required('This field is required.')
  }),
  fields: [
    {
      name: 'technologies',
      label: 'What technologies are you interested in working with?',
      componentType: 'Dropdown',
      options: [
        {key: 'React', text: 'React', value: 'React'},
        {key: 'Angular', text: 'Angular', value: 'Angular'},
        {
          key: 'Machine Learning',
          text: 'Machine Learning',
          value: 'Machine Learning'
        },
        {
          key: 'Artificial Intelligence',
          text: 'Artificial Intelligence',
          value: 'Artificial Intelligence'
        },
        {
          key: 'Big Data',
          text: 'Big Data',
          value: 'Big Data'
        },
        {
          key: 'iOS Native Development (Swift)',
          text: 'iOS Native Development (Swift)',
          value: 'iOS Native Development (Swift)'
        },
        {
          key: 'Android Native Development (Java/Kotlin)',
          text: 'Android Native Development (Java/Kotlin)',
          value: 'Android Native Development (Java/Kotlin)'
        },
        {
          key: 'MongoDB',
          text: 'MongoDB',
          value: 'MongoDB'
        },
        {
          key: 'Google Cloud Platform',
          text: 'Google Cloud Platform',
          value: 'Google Cloud Platform'
        },
        {
          key: 'Microsoft Azure',
          text: 'Microsoft Azure',
          value: 'Microsoft Azure'
        },
        {
          key: 'Amazon Web Services',
          text: 'Amazon Web Services',
          value: 'Amazon Web Services'
        },
        {
          key: 'Other (please type)',
          text: 'Other (please type)',
          value: 'Other'
        }
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
    },
    {
      name: 'workshops',
      label: 'What workshops are you interested in seeing?',
      componentType: 'Dropdown',
      options: [
        {key: 'React', text: 'React', value: 'React'},
        {key: 'Angular', text: 'Angular', value: 'Angular'},
        {
          key: 'Machine Learning',
          text: 'Machine Learning',
          value: 'Machine Learning'
        },
        {
          key: 'Artificial Intelligence',
          text: 'Artificial Intelligence',
          value: 'Artificial Intelligence'
        },
        {
          key: 'Big Data',
          text: 'Big Data',
          value: 'Big Data'
        },
        {
          key: 'iOS Native Development (Swift)',
          text: 'iOS Native Development (Swift)',
          value: 'iOS Native Development (Swift)'
        },
        {
          key: 'Android Native Development (Java/Kotlin)',
          text: 'Android Native Development (Java/Kotlin)',
          value: 'Android Native Development (Java/Kotlin)'
        },
        {
          key: 'MongoDB',
          text: 'MongoDB',
          value: 'MongoDB'
        },
        {
          key: 'Google Cloud Platform',
          text: 'Google Cloud Platform',
          value: 'Google Cloud Platform'
        },
        {
          key: 'Microsoft Azure',
          text: 'Microsoft Azure',
          value: 'Microsoft Azure'
        },
        {
          key: 'Amazon Web Services',
          text: 'Amazon Web Services',
          value: 'Amazon Web Services'
        },
        {
          key: 'Front-end Development',
          text: 'Front-end Development',
          value: 'Front-end Development'
        },
        {
          key: 'Back-end Development',
          text: 'Back-end Development',
          value: 'Back-end Development'
        },
        {
          key: 'Full-stack Development',
          text: 'Full-stack Development',
          value: 'Full-stack Development'
        },
        {
          key: 'Other (please type)',
          text: 'Other (please type)',
          value: 'Other'
        }
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
    },
    {
      name: 'question1',
      label:
        'What inspired you to apply for SwampHacks VI (250 character max)?',
      componentType: 'TextArea',
      componentProps: {
        rows: 5,
        required: true,
        placeholder: 'Start typing...',
        maxLength: '250'
      }
    },
    {
      name: 'question2',
      label: 'Why do you hack (250 character max)?',
      componentType: 'TextArea',
      componentProps: {
        rows: 5,
        required: true,
        placeholder: 'Start typing...',
        maxLength: '250'
      }
    },
    {
      name: 'question3',
      label:
        'Describe your favorite project and why it is your favorite (250 character max).',
      componentType: 'TextArea',
      componentProps: {
        rows: 5,
        required: true,
        placeholder: 'Start typing...',
        maxLength: '250'
      }
    }
  ]
};

const section6 = {
  title: 'Final Stretch',
  initialValues: {
    email: '',
    password: '',
    confirmPassword: '',
    firstTimeHacker: '',
    firstTimeSwamphacks: '',
    hearAbout: undefined,
    mlhCodeOfConduct: undefined,
    regDataSharing: undefined,
    statisticsUsage: undefined,
    photoRelease: undefined,
    confirmTrue: undefined
  },
  schema: yup.object().shape({
    // Account information
    email: yup
      .string()
      .email()
      .required('This field is required.'),
    password: yup
      .string()
      .required('This field is required.')
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#$&*%^&*()_+=-])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
        'Your password must be at least 8 characters long include 1 uppercase character, 1 lowercase character, 1 number, and 1 special character.'
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match'),
    firstTimeHacker: yup.string().required(),
    firstTimeSwamphacks: yup.string().required(),
    hearAbout: yup.array(yup.string()),
    mlhCodeOfConduct: yup
      .bool()
      .oneOf([true], 'You must agree to these terms.')
      .required('You must agree to these terms.'),
    regDataSharing: yup
      .bool()
      .oneOf([true], 'You must agree to these terms.')
      .required('You must agree to these terms.'),
    statisticsUsage: yup
      .bool()
      .oneOf([true], 'You must agree to these terms.')
      .required('You must agree to these terms.'),
    photoRelease: yup
      .bool()
      .oneOf([true], 'You must agree to these terms.')
      .required('You must agree to these terms.'),
    confirmTrue: yup
      .bool()
      .oneOf([true], 'Field must be checked.')
      .required('Field must be checked.')
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
      name: 'confirmPassword',
      label: 'Confirm Password',
      componentType: 'TextField',
      componentProps: {
        required: true,
        placeholder: 'Confirm password',
        type: 'password'
      }
    },
    {
      name: 'firstTimeHacker',
      label: 'Have you participated in a hackathon before?',
      componentType: 'Dropdown',
      options: [
        {key: 'Yes', text: 'Yes', value: 'No'},
        {key: 'No', text: 'No', value: 'Yes'}
      ],
      componentProps: {
        required: true,
        placeholder: 'Select...'
      }
    },
    {
      name: 'firstTimeSwamphacks',
      label: 'Have you participated in SwampHacks before?',
      componentType: 'Dropdown',
      options: [
        {key: 'Yes', text: 'Yes', value: 'No'},
        {key: 'No', text: 'No', value: 'Yes'}
      ],
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
        {key: 'Facebook', text: 'Facebook', value: 'Facebook'},
        {key: 'Twitter', text: 'Twitter', value: 'Twitter'},
        {key: 'MLH Website', text: 'MLH Website', value: 'MLH Website'},
        {key: 'Friend', text: 'Friend', value: 'Friend'},
        {key: 'Instructor', text: 'Instructor', value: 'Instructor'},
        {key: 'Flyer/Sign', text: 'Flyer/Sign', value: 'Flyer/Sign'},
        {key: 'Other', text: 'Other (please type)', value: 'Other'}
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
      name: 'mlhCodeOfConduct',
      label: 'MLH Code of Conduct',
      content: (
        <p>
          I have read and agree to the{' '}
          <a href='http://www.google.com' target='_blank'>
            MLH Code of Conduct
          </a>
          .
        </p>
      ),
      componentType: 'Terms',
      componentProps: {
        required: true
      }
    },
    {
      name: 'regDataSharing',
      label: 'Registration Data Sharing',
      content: (
        <p>
          I authorize you to share my application/registration information for
          event administration, ranking, MLH administration, pre- and post-event
          informational e-mails, and occasional messages about hackathons
          in-line with the{' '}
          <a href='' target='_blank'>
            MLH Privacy Policy
          </a>
          . I further agree to the terms of both the{' '}
          <a href='' target='_blank'>
            MLH Contest Terms and Conditions
          </a>{' '}
          and the{' '}
          <a href='' target='_blank'>
            MLH Privacy Policy
          </a>
          .
        </p>
      ),
      componentType: 'Terms',
      componentProps: {
        required: true
      }
    },
    {
      name: 'statisticsUsage',
      label: 'Data Usage Form',
      content: (
        <p>
          I have read and agree to the{' '}
          <Link to='/DataUsageReleaseForm.pdf' target='_blank'>
            Data Usage Form
          </Link>
          .
        </p>
      ),
      componentType: 'Terms',
      componentProps: {
        required: true
      }
    },
    {
      name: 'photoRelease',
      label: 'Photo Release Form',
      content: (
        <p>
          I have read and agree to the{' '}
          <Link to='/PhotoReleaseForm.pdf' target='_blank'>
            Photo Release Form
          </Link>
          .
        </p>
      ),
      componentType: 'Terms',
      componentProps: {
        required: true
      }
    },
    {
      name: 'confirmTrue',
      label: 'Truth Statement',
      content: (
        <p>
          By checking this box, I confirm that all of the information provided
          in this application is true.
        </p>
      ),
      componentType: 'Terms',
      componentProps: {
        required: true
      }
    }
  ]
};

const sections = [section1, section2, section3, section4, section5, section6];

export {sections};
