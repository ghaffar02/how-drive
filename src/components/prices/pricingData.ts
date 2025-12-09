import {PlanData} from './types';

// School plans data
export const schoolPlansData: PlanData[] = [
  {
    name: 'Basic',
    price: {
      amount: '29,95 €',
      duration: '/month',
      note: '(incl. VAT)'
    },
    description: 'One month Premium trial',
    buttonText: 'Start for free',
    buttonLink: '/pricing/school/basic',
    usage: [{text: '10 active students'}, {text: '1 active trainers'}],
    featuresHeader: 'Features include:',
    features: [
      {text: 'Public driving school profile'},
      {text: 'Student management'},
      {text: 'Student progress indicator'},
      {text: 'Calendar and booking system'},
      {text: 'Appointment cancellation'},
      {text: 'Messaging function'},
      {text: 'Can be canceled monthly'},
      {text: 'No hidden costs'}
    ]
  },
  {
    name: 'Standard',
    price: {
      amount: '44,95 €',
      duration: '/month',
      note: '(incl. VAT)'
    },
    description: 'One month Premium trial',
    buttonText: 'Start for free',
    buttonLink: '/pricing/school/standard',
    recommended: true,
    usage: [{text: '30 active students'}, {text: '4 active trainers'}],
    featuresHeader: 'Everything in Basic, plus:',
    features: [
      {text: 'Trainers management'},
      {text: 'Trainers calendar'},
      {text: 'Messaging with trainers'},
      {text: 'Student list assigned to trainers'},
      {text: 'Trainers access to their own dashboard'}
    ]
  },
  {
    name: 'Premium',
    price: {
      amount: '69,95 €',
      duration: '/month',
      note: '(incl. VAT)'
    },
    description: 'One month Premium trial',
    buttonText: 'Start for free',
    buttonLink: '/pricing/school/premium',
    usage: [{text: 'Unlimited students'}, {text: 'Unlimited trainers'}],
    featuresHeader: 'Everything in Standard, plus:',
    features: [
      {text: 'Appointment management'},
      {text: 'Appointment confirmation by email'},
      {text: 'Appointment reminders by email'}
    ]
  }
];

