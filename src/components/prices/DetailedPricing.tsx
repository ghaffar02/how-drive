import Link from 'next/link';
import {Box, Button, Typography, SxProps, Theme, Grid} from '@mui/material';
import tick from '@/assets/svgs/tick.svg';
import Image from 'next/image';
import localFont from '@/utils/themes';
import { useTranslations } from 'next-intl';

interface UsageItem {
  text: string;
}

interface FeatureItem {
  text: string;
}

interface PlanData {
  usageHeader?: string;
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
  recommendedText?: string;
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

interface DetailedPricingProps {
  cardSx?: SxProps<Theme>;
}

export default function DetailedPricing({cardSx}: DetailedPricingProps) {
  const t = useTranslations('Pricing');
const data = t.raw('data');



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
          {plan.recommendedText || 'Recommended'}
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
          // component={Link}
          // href={plan.buttonLink}
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
         {plan.usageHeader && <Typography
            sx={{
             ...localFont.inter16,
              fontFamily: '"Inter", sans-serif !important',
              color: '#000',
              fontWeight: '600',
              mb: '10px'
            }}
          >
           {plan.usageHeader || 'Usage:'}
          </Typography>}
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
            {data.schoolSection.plans.map((plan: PlanData, index: number) => (
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
