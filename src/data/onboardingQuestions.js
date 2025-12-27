export const onboardingQuestions = [
  {
    id: 'user_type',
    question: 'I am a...',
    options: [
      { value: 'survivor', label: 'Brain injury survivor' },
      { value: 'caregiver', label: 'Caregiver or family member' },
      { value: 'professional', label: 'Healthcare professional' },
      { value: 'other', label: 'Other' },
    ],
  },
  {
    id: 'looking_for',
    question: "I'm looking for...",
    options: [
      { value: 'resources', label: 'Resources and information' },
      { value: 'support', label: 'Support groups and community' },
      { value: 'services', label: 'Services and providers' },
      { value: 'research', label: 'Research and studies' },
    ],
  },
  {
    id: 'experience_level',
    question: 'My experience with brain injury:',
    options: [
      { value: 'new', label: "I'm new to this journey" },
      { value: 'some', label: 'I have some experience' },
      { value: 'experienced', label: "I've been on this journey for a while" },
    ],
  },
];

export const getRecommendations = (answers) => {
  const recommendations = [];

  if (answers.user_type === 'survivor') {
    recommendations.push({
      title: 'About Brain Injury',
      link: '/about-brain-injury',
      description: 'Learn more about brain injury and recovery',
    });
  }
  
  if (answers.user_type === 'caregiver') {
    recommendations.push({
      title: 'Caregiver Resources',
      link: '/about-brain-injury',
      description: 'Information and support for caregivers',
    });
  }

  if (answers.looking_for === 'support') {
    recommendations.push({
      title: 'Community Events',
      link: '/events',
      description: 'Connect with others who understand your journey',
    });
  }
  
  if (answers.looking_for === 'resources') {
    recommendations.push({
      title: 'Resource Directory',
      link: '/directory',
      description: 'Find helpful resources and information',
    });
  }

  if (answers.looking_for === 'services') {
    recommendations.push({
      title: 'Service Providers',
      link: '/directory',
      description: 'Find services in your area',
    });
  }

  if (answers.experience_level === 'new') {
    recommendations.push({
      title: 'Frequently Asked Questions',
      link: '/faqs',
      description: 'Get answers to common questions',
    });
  }

  recommendations.push({
    title: 'Take Our Full Survey',
    link: '/surveys',
    description: 'Help us understand your needs better (20-30 min)',
  });

  if (recommendations.length === 1) {
    recommendations.unshift({
      title: 'Explore Our Site',
      link: '/about-brain-injury',
      description: 'Start learning about brain injury',
    });
  }

  return recommendations;
};
