import {Box, Typography, SxProps, Theme, Grid} from '@mui/material';
import StudentPlanCard from './StudentPlanCard';
import SchoolPlanCard from './SchoolPlanCard';
import {PlanData} from './types';

interface DetailedPricingData {
  studentSection: {
    title: string;
    plan: PlanData;
  };
  schoolSection: {
    title: string;
    plans: PlanData[];
  };
}

const data: DetailedPricingData = {
  studentSection: {
    title: 'Our prices for driving students',
    plan: {
      name: 'Students',
      price: {
        amount: 'Free',
        duration: '',
        note: ''
      },
      description:
        "Use all the features of our service without worry. It's completely free for driving students. It's important that your account is linked to your driving school's account.",
      buttonText: 'Sign up',
      buttonLink: '/pricing/student',

      usage: [],

      featuresHeader: 'Features include:',
      features: [
        {
          text: 'Information about required documents and responsible authorities'
        },
        {text: 'Progress indicator for obtaining a driving license'},
        {text: 'Calendar and booking system for theory and driving lessons'},
        {text: 'Appointment cancellation'},
        {text: 'Appointment confirmations (if offered by the driving school)'},
        {text: 'Appointment reminders (if offered by the driving school)'},
        {text: 'Messaging function with driving schools and driving trainers'},
        {text: 'No hidden costs'}
      ]
    }
  },
  schoolSection: {
    title: 'Our prices for driving schools ',
    plans: [
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
    ]
  }
};

interface DetailedPricingProps {
  cardSx?: SxProps<Theme>;
}

export default function DetailedPricing({cardSx}: DetailedPricingProps) {
  return (
    <Box
      sx={{
        bgcolor: '#FAFAFA',
        boxSizing: 'border-box',
        p: {xs: '56px 16px', md: '64px 24px', lg: '80px 48px'}
      }}
    >
      <Box
        sx={{
          maxWidth: '1440px',
          // bgcolor: 'red',
          width: '100%',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: {xs: '80px'}
        }}
      >
        {/* Student Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: {xs: '80px'},
            alignItems: 'center'
          }}
        >
          <Typography
            sx={{
              fontSize: {xs: '28px', md: '32px', lg: '36px'},
              lineHeight: {xs: '35px', md: '100%'},
              fontFamily: 'Satoshi500 !important',
              textAlign: 'center',
              color: '#000'
            }}
          >
            {data.studentSection.title}
          </Typography>

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <StudentPlanCard
              plan={data.studentSection.plan}
              cardSx={{width: '100%', maxWidth: '680px', height: {md: '666px'}}}
            />
          </Box>
        </Box>

        {/* School Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: {xs: '80px'},
            alignItems: 'center'
          }}
        >
          <Typography
            sx={{
              fontSize: {xs: '28px', md: '32px', lg: '36px'},
              lineHeight: {xs: '35px', md: '100%'},
              fontFamily: 'Satoshi500 !important',
              textAlign: 'center',
              color: '#000'
            }}
          >
            {data.schoolSection.title}
          </Typography>

          <Grid container spacing={6}>
            {data.schoolSection.plans.map((plan, index) => (
              <Grid
                size={{xs: 12, lg: 4}}
                key={index}
                justifyContent="center"
                alignItems="center"
              >
                <SchoolPlanCard
                  plan={plan}
                  cardSx={{
                    width: '100%',
                    maxWidth: {xs: '440px', lg: '429px'},
                    height: {xs: '776px', lg: '796px'},
                    margin: 'auto'
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
