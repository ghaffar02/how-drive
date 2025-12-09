import Link from 'next/link';
import {Box, Button, Typography, SxProps, Theme, Grid} from '@mui/material';
import tick from '@/assets/svgs/tick.svg';
import Image from 'next/image';
import localFont from '@/utils/themes';

interface UsageItem {
  text: string;
}

interface FeatureItem {
  text: string;
}

interface PlanData {
  name: string;
  price: {
    amount: string;
    duration?: string;
    note?: string;
  };
  description: string;
  buttonText: string;
  buttonLink: string;
  usage?: UsageItem[];
  features: FeatureItem[];
  featuresHeader?: string;
  recommended?: boolean;
}

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
        { text: 'Information about required documents and responsible authorities' },
        { text: 'Progress indicator for obtaining a driving license' },
        { text: 'Calendar and booking system for theory and driving lessons' },
        { text: 'Appointment cancellation' },
        { text: 'Appointment confirmations (if offered by the driving school)' },
        { text: 'Appointment reminders (if offered by the driving school)' },
        { text: 'Messaging function with driving schools and driving trainers' },
        { text: 'No hidden costs' }
      ]
    }
  }
  ,  
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
        usage: [
          { text: '10 active students' },
          { text: '1 active trainers' }
        ],
        featuresHeader: 'Features include:',
        features: [
          { text: 'Public driving school profile' },
          { text: 'Student management' },
          { text: 'Student progress indicator' },
          { text: 'Calendar and booking system' },
          { text: 'Appointment cancellation' },
          { text: 'Messaging function' },
          { text: 'Can be canceled monthly' },
          { text: 'No hidden costs' }
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
        usage: [
          { text: '30 active students' },
          { text: '4 active trainers' }
        ],
        featuresHeader: 'Everything in Basic, plus:',
        features: [
          { text: 'Trainers management' },
          { text: 'Trainers calendar' },
          { text: 'Messaging with trainers' },
          { text: 'Student list assigned to trainers' },
          { text: 'Trainers access to their own dashboard' }
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
        usage: [
          { text: 'Unlimited students' },
          { text: 'Unlimited trainers' }
        ],
        featuresHeader: 'Everything in Standard, plus:',
        features: [
          { text: 'Appointment management' },
          { text: 'Appointment confirmation by email' },
          { text: 'Appointment reminders by email' }
        ]
      }
    ]
  }
  
};

interface DetailedPricingProps {
  cardSx?: SxProps<Theme>;
}

export default function DetailedPricing({cardSx}: DetailedPricingProps) {

  const CheckIcon = () => (
    <Box
      sx={{
        width: '24px',
        height: '24px',
        flexShrink: 0,
        color: '#4611F5'
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{width: '100%', height: '100%'}}
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
          clipRule="evenodd"
        />
      </svg>
    </Box>
  );

  const DashIcon = () => (
    <Box
      sx={{
        width: '24px',
        height: '24px',
        flexShrink: 0,
        color: '#4611F5'
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 25"
        fill="currentColor"
        style={{width: '100%', height: '100%'}}
      >
        <path
          fillRule="evenodd"
          d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
          clipRule="evenodd"
        />
      </svg>
    </Box>
  );

  const PlanCard = ({plan, cardSx, isRecommended}: {plan: PlanData; cardSx?: SxProps<Theme>; isRecommended?: boolean}) => (
    <Box
      sx={{
        // bgcolor: '#fff',
        position: 'relative',
        flexShrink: 0,
        // maxWidth: '440px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        p: '32px',      
        bgcolor: '#fff' ,
        borderRadius: '15px',
        border:plan.recommended ? "2px solid rgb(70, 17, 245)" : "none",
        boxShadow:plan.recommended ?" rgba(0, 0, 0, 0.13) 0px 0.602187px 1.80656px -0.833333px, rgba(0, 0, 0, 0.13) 0px 2.28853px 6.8656px -1.66667px, rgba(0, 0, 0, 0.13) 0px 10px 30px -2.5px":
          '0px 0.7961918735236395px 2.3885756205709185px -0.625px rgba(0, 0, 0, 0.13), 0px 2.414506143104518px 7.2435184293135535px -1.25px rgba(0, 0, 0, 0.13), 0px 6.382653521484461px 19.147960564453385px -1.875px rgba(0, 0, 0, 0.13), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.13)',
        ...cardSx
      }}
    >
      {plan.recommended && (
        <Box
          sx={{
            ...localFont.inter16,
            position: 'absolute',
            lineHeight: '1.3',
            top: '16px',
            right: '16px',
            bgcolor: '#4611F5',
            color: '#fff',
            borderRadius: '999px',
            px: '16px',
            py: '8px',
            fontFamily: '"Inter", sans-serif',
          }}
        >
          recommended
        </Box>
      )}

      <Typography
        sx={{
          fontSize: {xs: '18px', md: '20px', lg: '22px'},
          fontFamily: '"Inter", sans-serif !important',
          color: '#1A202C',
          fontWeight: '400',
        }}
      >
        {plan.name}
      </Typography>

      <Box>
        <Box
          sx={{
            display: 'flex',
            maxWidth: '376px',
            width: '100%',
            gap: '10px',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexWrap: 'nowrap'
          }}
        >
          <Typography
            sx={{
              fontSize: {xs: '32px', md: '36px', lg: '48px'},
                  fontFamily: 'Satoshi700 !important',
                  textWrap: 'nowrap',
                  color: '#000'
            }}
          >
            {plan.price.amount}
          </Typography>
          {plan.price.duration && (
            <Box  sx={{
              width: '100%'
            }}>
              <Typography
                sx={{
                  fontSize: {xs: '16px', md: '18px', lg: '20px'},
                  fontFamily: '"Inter", sans-serif  !important',
                  color: '#000',
                  fontWeight: '400'
                }}
              >
                {plan.price.duration}
              </Typography>
              {plan.price.note && (
                <Typography
                sx={{
                  fontSize: {xs: '12px', md: '13px', lg: '14px'},
                  fontFamily: '"Inter", sans-serif  !important',
                  color: '#000',
                  fontWeight: '400'
                }}
                >
                  {plan.price.note}
                </Typography>
              )}
            </Box>
          )}
        </Box>

        <Typography
          sx={{
          ...localFont.inter14,
            fontFamily: '"Inter", sans-serif !important',
            color: '#4A5568',
            fontWeight: '300',
            mb: '16px'
          }}
        >
          {plan.description}
        </Typography>



        <Button
          component={Link}
          href={plan.buttonLink}
          disableRipple
          sx={{
            width: '100%',
            fontSize: {xs: '14px', md: '15px', lg: '16px'},
            fontFamily: '"Inter", sans-serif  !important',
            fontWeight: '400',
            display: 'flex',
            lineHeight: {xs: '19px', md: '20px', lg: '22px'},
            justifyContent: 'center',
            alignItems: 'center',
            padding: '8px 16px',
            textTransform: 'none',
            alignContent: 'center',
            borderRadius: '10px',
            border: '1px solid #4611f5',
            bgcolor: '#4611F5',
            color: '#fff',
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: '#300ca8',
              color: '#fff'
            },
            '&:active': {
              backgroundColor: '#1A065C !important',
              color: '#fff'
            }
          }}
        >
          {plan.buttonText}
        </Button>
      </Box>

      <Box
              sx={{
                background:
                  'linear-gradient(90deg, rgba(30, 245, 255, 0.1) 0%, rgba(70, 17, 245, 0.15) 50.4505%, rgba(30, 245, 255, 0.1) 100%)',
                flex: '0 0 auto',
                height: '1px',
                overflow: 'hidden',
                position: 'relative',
                width: '100%'
              }}
            />

      {plan.usage && plan.usage.length > 0 && (
        <Box>
          <Typography
            sx={{
             ...localFont.inter16,
              fontFamily: '"Inter", sans-serif !important',
              color: '#000',
              fontWeight: '600',
              mb: '10px'
            }}
          >
            Usage:
          </Typography>
          {plan.usage.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                gap: '7px',
                alignItems: 'flex-start',
                mb: '10px'
              }}
            >
              <DashIcon />
              <Typography
                sx={{
                  fontSize: {xs: '14px', md: '15px', lg: '16px'},
                  fontFamily: '"Inter", sans-serif !important',
                  color: '#2D3748',
                  fontWeight: '400'
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      <Box>
        <Typography
          sx={{
            ...localFont.inter16,
              fontFamily: '"Inter", sans-serif !important',
              color: '#000',
              fontWeight: '600',
              mb: '10px'
          }}
        >
          {plan.featuresHeader || 'Features include:'}
        </Typography>
        {plan.features.map((feature, index) => (
           <Box
           key={index}
           sx={{
             width: '100%',
             display: 'flex',
             gap: '7px',
             mb: '10px'
           }}
         >
           <Image
             src={tick}
             alt="tickImage"
             style={{width: '25px', height: '25px'}}
           />
           <Typography
             sx={{
               fontSize: {xs: '14px', md: '15px', lg: '16px'},
               color: '#2D3748'
             }}
           >
             {feature.text}
           </Typography>
         </Box>
        ))}
      </Box>
    </Box>
  );


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
              color: '#000',
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
            <PlanCard plan={data.studentSection.plan} cardSx={{ width: '100%', maxWidth: '680px' ,height:{md:"666px"}}} />
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
              color: '#000',
            }}
          >
            {data.schoolSection.title}
          </Typography>

          <Grid container spacing={6}>  
            {data.schoolSection.plans.map((plan, index) => (
              <Grid size={{xs: 12,  lg: 4}} key={index} justifyContent="center" alignItems="center">
                <PlanCard plan={plan} cardSx={{ width: '100%', maxWidth: {xs:"440px",lg:"429px"},height:{xs:"776px",lg:"796px"},margin: 'auto'}} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
