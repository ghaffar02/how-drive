import {Box, Typography, Grid} from '@mui/material';
import StudentPlanCard from './StudentPlanCard';
import SchoolPlanCard from './SchoolPlanCard';
import {useTranslations} from 'next-intl';
import {PlanData} from './types';

type Pricing = {
  title?: boolean;
  mode?: 'student' | 'school';
};
export default function Pricing({title = true, mode = 'student'}: Pricing) {
  const t = useTranslations('Pricing');
  const PricingData = t.raw('PricingData') as Array<{
    title: string;
    price: {
      amount: string;
      duration?: string;
      note?: string;
    };
    features: string[];
    button: string;
  }>;

  // School plans data (matching DetailedPricing structure)
  const schoolPlansData: PlanData[] = [
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

  // Get only the Students (free) card - first item
  const studentData =
    PricingData.find((item) => item.title === 'Students') || PricingData[0];

  // Transform to PlanData format matching the free card structure
  const freeCardData: PlanData = {
    name: studentData.title,
    price: {
      amount: studentData.price.amount,
      duration: studentData.price.duration || '',
      note: studentData.price.note || ''
    },
    description:
      "Use all the features of our service without worry. It's completely free for driving students. It's important that your account is linked to your driving school's account.",
    buttonText: studentData.button,
    buttonLink: '/pricing/student',
    usage: [],
    featuresHeader: 'Features include:',
    features: studentData.features.map((feature) => ({text: feature}))
  };

  return (
    <>
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
            width: '100%',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: {xs: '24px'}
          }}
        >
          {title && (
            <Typography
              sx={{
                fontSize: {xs: '28px', md: '32px', lg: '36px'},
                lineHeight: {xs: '35px', md: '100%'},
                fontFamily: 'Satoshi500 !important',
                padding: '16px',
                textAlign: 'center',
                color: '#000',
                fontWeight: '700'
              }}
            >
              {t('title')}
            </Typography>
          )}

          {mode === 'student' ? (
            <Box
              sx={{
                padding: '8px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <StudentPlanCard
                plan={freeCardData}
                cardSx={{
                  width: '100%',
                  maxWidth: '680px',
                  height: {md: '666px'}
                }}
              />
            </Box>
          ) : (
            <Box
              sx={{
                padding: '8px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Grid container spacing={6}>
                {schoolPlansData.map((plan, index) => (
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
          )}
        </Box>
      </Box>
    </>
  );
}
