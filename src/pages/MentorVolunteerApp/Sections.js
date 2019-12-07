import * as yup from 'yup';
import majors from '../../resources/data/majors.json';

const section1 = {
  title: 'Basic Information',
  initialValues: {
    firstName: '',
    lastName: '',
    mentorOrVolunteer: '',
    currLevelStudy: '',
    major: '',
    attendedHackathon: '',
    mentorVolunteerHistory: '',
    shirtSize: ''
  },
  schema: yup.object().shape({
    // Basic information
    firstName: yup.string().required('This field is required.'),
    lastName: yup.string().required('This field is required.'),
    mentorOrVolunteer: yup.string().required('This field is required.'),
    currLevelStudy: yup.string().required('This field is required.'),
    major: yup.string().required('This field is required.'),
    attendedHackathon: yup.string().required('This field is required.'),
    mentorVolunteerHistory: yup.string().required('This field is required.'),
    shirtSize: yup.string().required('This field is required.')
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
      name: 'mentorOrVolunteer',
      label: 'Are you interested in being a mentor or a volunteer?',
      componentType: 'Dropdown',
      options: [
        {key: 'Mentor', text: 'Mentor', value: 'Mentor'},
        {key: 'Volunteer', text: 'Volunteer', value: 'Volunteer'}
      ],
      componentProps: {
        required: true,
        placeholder: 'Select...'
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
        {key: 'Graduate', text: 'Graduate', value: 'Graduate'},
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
      name: 'attendedHackathon',
      label: 'Have you attended a hackathon before?',
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
      name: 'mentorVolunteerHistory',
      label:
        'Have mentored, volunteered, and/or coordinated for a hackathon before?',
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
    }
  ]
};

const section2 = {
  title: 'Mentor/Volunteer Information',
  initialValues: {
    why: '',
    workshopsToHost: '',
    ideas: '',
    skillsTalents: '',
    resume: undefined
  },
  schema: yup.object().shape({
    // Mentor information
    why: yup.string().required('This field is required.'),
    workshopsToHost: yup.string(),
    ideas: yup.string(),
    skillsTalents: yup.string(),
    resume: yup.mixed()
  }),
  fields: [
    {
      name: 'why',
      label:
        'Why do you want to mentor/volunteer for SwampHacks VI (250 character max)?',
      componentType: 'TextArea',
      componentProps: {
        rows: 5,
        required: true,
        placeholder: 'Start typing...',
        maxLength: '250'
      }
    },
    {
      name: 'workshopsToHost',
      label:
        'If you are interested in mentoring, are there any workshops that you would like to host for SwampHacks VI (250 character max)?',
      componentType: 'TextArea',
      componentProps: {
        rows: 5,
        placeholder: 'Start typing...',
        maxLength: '250'
      }
    },
    {
      name: 'ideas',
      label:
        'Do you have any ideas you would like to add that you think will improve Mentoring/Volunteering for SwampHacks VI (250 character max)?',
      componentType: 'TextArea',
      componentProps: {
        rows: 5,
        placeholder: 'Start typing...',
        maxLength: '250'
      }
    },
    {
      name: 'skillsTalents',
      label:
        'Do you have any special skills, talents, or abilities that you would like to mention (Ex: Knowing Python, blockchain, how to cartwheel with one hand, juggle) (250 character max)?',
      componentType: 'TextArea',
      componentProps: {
        rows: 5,
        placeholder: 'Start typing...',
        maxLength: '250'
      }
    },
    {
      name: 'resume',
      label:
        'Upload Your Resume (required for mentors, optional for volunteers) (pdf)',
      componentType: 'FileUpload',
      componentProps: {}
    }
  ]
};

const section3 = {
  title: 'Final Step',
  initialValues: {
    extraInfo: '',
    email: ''
  },
  schema: yup.object().shape({
    // Mentor information
    extraInfo: yup.string(),
    email: yup
      .string()
      .email()
      .required('This field is required.')
  }),
  fields: [
    {
      name: 'extraInfo',
      label:
        'Is there anything else you would like us to know about (250 character max)?',
      componentType: 'TextArea',
      componentProps: {
        rows: 5,
        placeholder: 'Start typing...',
        maxLength: '250'
      }
    },
    {
      name: 'email',
      label: 'Email',
      componentType: 'TextField',
      componentProps: {
        required: true,
        placeholder: 'Email'
      }
    }
  ]
};

const sections = [section1, section2, section3];

export {sections};
