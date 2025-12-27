export const surveyPages = [
  {
    id: 'welcome',
    title: 'Welcome to the BIC Needs Assessment Survey',
    isIntro: true,
    description: `The purpose of this study is to assess the needs of people living with a brain injury.

This study will provide information about the needs of the brain injury community, and will help determine how the BIC may best be used to help those whose lives have been affected by brain injury.

Results will be available to those who provide programs, services, or products to the brain injury community, and will encourage those providers to spread the word and help them address the needs of this community.

This survey typically takes between 20-30 minutes to complete. (Please be sure you are well-rested and use any accommodations necessary.)

Participation is voluntary, and participants may withdraw from the survey at any time. Participants must be at least 18 years of age, or have someone over the age of 18 complete the survey for them.`,
  },
  {
    id: 'demographics',
    title: 'Demographics',
    pageNumber: 1,
    description: 'Please answer the following questions:',
    questions: [
      {
        id: 'demo_1',
        type: 'radio',
        question: 'What is your age range?',
        options: ['18-25', '26-35', '36-45', '46-55', '56-65', '65+'],
        required: true,
      },
      {
        id: 'demo_2',
        type: 'radio',
        question: 'What is your gender?',
        options: ['Male', 'Female', 'Non-binary', 'Prefer not to say'],
        required: false,
      },
      {
        id: 'demo_3',
        type: 'text',
        question: 'What is your zip code?',
        placeholder: 'Enter zip code...',
        required: false,
      },
    ],
  },
  {
    id: 'brain-injury-details',
    title: 'Brain Injury Details',
    pageNumber: 2,
    description: 'Please answer the following questions about your brain injury:',
    questions: [
      {
        id: 'bi_1',
        type: 'radio',
        question: 'How long ago did you sustain your brain injury?',
        options: [
          'Less than 1 year',
          '1-2 years',
          '3-5 years',
          '6-10 years',
          'More than 10 years',
        ],
        required: true,
      },
      {
        id: 'bi_2',
        type: 'checkbox',
        question: 'What was the cause of your brain injury? (Select all that apply)',
        options: [
          'Motor vehicle accident',
          'Fall',
          'Sports injury',
          'Assault',
          'Stroke',
          'Tumor',
          'Infection',
          'Other',
        ],
        required: false,
      },
      {
        id: 'bi_3',
        type: 'textarea',
        question: 'Please describe any additional details about your injury (optional):',
        placeholder: 'Share any additional context...',
        required: false,
      },
    ],
  },
  {
    id: 'quality-of-life',
    title: 'Quality of Life',
    pageNumber: 3,
    description: 'Please answer the following questions about your quality of life:',
    questions: [
      {
        id: 'qol_1',
        type: 'radio',
        question: 'How would you rate your overall quality of life?',
        options: ['Excellent', 'Good', 'Fair', 'Poor', 'Very Poor'],
        required: true,
      },
      {
        id: 'qol_2',
        type: 'radio',
        question: 'How has your brain injury affected your daily activities?',
        options: [
          'No impact',
          'Mild impact',
          'Moderate impact',
          'Significant impact',
          'Severe impact',
        ],
        required: true,
      },
      {
        id: 'qol_3',
        type: 'checkbox',
        question: 'Which areas of your life have been most affected? (Select all that apply)',
        options: [
          'Work/Employment',
          'Relationships',
          'Physical health',
          'Mental health',
          'Financial stability',
          'Independence',
          'Social activities',
        ],
        required: false,
      },
    ],
  },
  {
    id: 'brain-injury-effects',
    title: 'Brain Injury Effects',
    pageNumber: 4,
    description: 'Please answer the following questions about the effects of your brain injury:',
    questions: [
      {
        id: 'bie_1',
        type: 'checkbox',
        question: 'Which of the following effects do you experience? (Select all that apply)',
        options: [
          'Memory problems',
          'Difficulty concentrating',
          'Headaches',
          'Fatigue',
          'Mood changes',
          'Sleep problems',
          'Balance issues',
          'Vision problems',
          'Speech difficulties',
        ],
        required: false,
      },
      {
        id: 'bie_2',
        type: 'radio',
        question: 'How often do these effects impact your daily life?',
        options: ['Rarely', 'Sometimes', 'Often', 'Very often', 'Constantly'],
        required: true,
      },
    ],
  },
  {
    id: 'services-resources-1',
    title: 'Services / Resources 1',
    pageNumber: 5,
    description: 'Please answer the following questions about the services / resources you have received:',
    questions: [
      {
        id: 'sr1_1',
        type: 'checkbox',
        question: 'Which services have you received since your injury? (Select all that apply)',
        options: [
          'Physical therapy',
          'Occupational therapy',
          'Speech therapy',
          'Cognitive rehabilitation',
          'Psychological counseling',
          'Support groups',
          'Vocational rehabilitation',
          'None of the above',
        ],
        required: false,
      },
      {
        id: 'sr1_2',
        type: 'radio',
        question: 'How satisfied were you with the services you received?',
        options: [
          'Very satisfied',
          'Satisfied',
          'Neutral',
          'Dissatisfied',
          'Very dissatisfied',
          'Did not receive services',
        ],
        required: true,
      },
    ],
  },
  {
    id: 'services-resources-2',
    title: 'Services / Resources 2',
    pageNumber: 6,
    description: 'Please answer the following questions about the services / resources you currently have / receive:',
    questions: [
      {
        id: 'sr2_1',
        type: 'checkbox',
        question: 'Which services are you currently receiving? (Select all that apply)',
        options: [
          'Physical therapy',
          'Occupational therapy',
          'Speech therapy',
          'Cognitive rehabilitation',
          'Psychological counseling',
          'Support groups',
          'Vocational rehabilitation',
          'None of the above',
        ],
        required: false,
      },
      {
        id: 'sr2_2',
        type: 'radio',
        question: 'How easy is it for you to access the services you need?',
        options: ['Very easy', 'Easy', 'Neutral', 'Difficult', 'Very difficult'],
        required: true,
      },
    ],
  },
  {
    id: 'unmet-needs',
    title: 'Unmet Needs',
    pageNumber: 7,
    description: 'Please answer the following questions about your needs:',
    questions: [
      {
        id: 'un_1',
        type: 'checkbox',
        question: 'What services or resources do you need but currently lack? (Select all that apply)',
        options: [
          'Medical care',
          'Therapy services',
          'Financial assistance',
          'Housing support',
          'Transportation',
          'Employment assistance',
          'Social support',
          'Educational resources',
          'Legal assistance',
        ],
        required: false,
      },
      {
        id: 'un_2',
        type: 'textarea',
        question: 'Please describe any additional needs or concerns:',
        placeholder: 'Share your thoughts...',
        required: false,
      },
      {
        id: 'un_3',
        type: 'textarea',
        question: 'How can the Brain Injury Connection better serve you?',
        placeholder: 'Your suggestions are valuable to us...',
        required: false,
      },
    ],
  },
];

export const TOTAL_QUESTION_PAGES = surveyPages.filter((p) => p.pageNumber).length;
