import Link from 'next/link';
import {Box, Button, Typography} from '@mui/material';
import {useTranslations} from 'next-intl';

import tick from '@/assets/svgs/tick.svg';

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

export default function DetailedPricing() {
  const t = useTranslations('DetailedPricing');
  const data: DetailedPricingData = t.raw('data');

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
        viewBox="0 0 24 24"
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

  const PlanCard = ({plan}: {plan: PlanData}) => (
    <Box
      sx={{
        position: 'relative',
        flexShrink: 0,
        maxWidth: '440px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        p: '32px',
        bgcolor: '#fff',
        borderRadius: '15px',
        boxShadow:
          '0px 0.7961918735236395px 2.3885756205709185px -0.625px rgba(0, 0, 0, 0.13), 0px 2.414506143104518px 7.2435184293135535px -1.25px rgba(0, 0, 0, 0.13), 0px 6.382653521484461px 19.147960564453385px -1.875px rgba(0, 0, 0, 0.13), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.13)'
      }}
    >
      {plan.recommended && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            bgcolor: '#4611F5',
            color: '#fff',
            px: '16px',
            py: '4px',
            borderRadius: '0 0 8px 8px',
            fontSize: '14px',
            fontFamily: '"Inter", sans-serif',
            fontWeight: '400'
          }}
        >
          recommended
        </Box>
      )}

      <Typography
        sx={{
          fontSize: {xs: '18px', md: '20px', lg: '22px'},
          fontFamily: '"Inter", sans-serif !important',
          color: '#000',
          fontWeight: '400',
          pt: plan.recommended ? '24px' : 0
        }}
      >
        {plan.name}
      </Typography>

      <Box>
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            alignItems: 'flex-start',
            mb: '8px'
          }}
        >
          <Typography
            sx={{
              fontSize: {xs: '32px', md: '36px', lg: '48px'},
              fontFamily: 'Satoshi700 !important',
              color: '#000',
              lineHeight: 1
            }}
          >
            {plan.price.amount}
          </Typography>
          {plan.price.duration && (
            <Box>
              <Typography
                sx={{
                  fontSize: {xs: '16px', md: '18px', lg: '20px'},
                  fontFamily: '"Inter", sans-serif !important',
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
                    fontFamily: '"Inter", sans-serif !important',
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
            fontSize: {xs: '14px', md: '15px', lg: '16px'},
            fontFamily: '"Inter", sans-serif !important',
            color: '#666',
            fontWeight: '400',
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
            fontFamily: '"Inter", sans-serif !important',
            fontWeight: '400',
            padding: '12px 16px',
            textTransform: 'none',
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
          height: '1px',
          width: '100%'
        }}
      />

      {plan.usage && plan.usage.length > 0 && (
        <Box>
          <Typography
            sx={{
              fontSize: {xs: '16px', md: '17px', lg: '18px'},
              fontFamily: '"Inter", sans-serif !important',
              color: '#000',
              fontWeight: '600',
              mb: '12px'
            }}
          >
            Usage:
          </Typography>
          {plan.usage.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                gap: '8px',
                alignItems: 'flex-start',
                mb: '8px'
              }}
            >
              <DashIcon />
              <Typography
                sx={{
                  fontSize: {xs: '14px', md: '15px', lg: '16px'},
                  fontFamily: '"Inter", sans-serif !important',
                  color: '#000',
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
            fontSize: {xs: '16px', md: '17px', lg: '18px'},
            fontFamily: '"Inter", sans-serif !important',
            color: '#000',
            fontWeight: '600',
            mb: '12px'
          }}
        >
          {plan.featuresHeader || 'Features include:'}
        </Typography>
        {plan.features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              gap: '8px',
              alignItems: 'flex-start',
              mb: '10px'
            }}
          >
            <CheckIcon />
            <Typography
              sx={{
                fontSize: {xs: '14px', md: '15px', lg: '16px'},
                fontFamily: '"Inter", sans-serif !important',
                color: '#000',
                fontWeight: '400'
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
          width: '100%',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: {xs: '48px', md: '64px', lg: '80px'}
        }}
      >
        {/* Student Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
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
              fontWeight: '700'
            }}
          >
            {data.studentSection.title}
          </Typography>

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <PlanCard plan={data.studentSection.plan} />
          </Box>
        </Box>

        {/* School Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
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
              fontWeight: '700'
            }}
          >
            {data.schoolSection.title}
          </Typography>

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              gap: {xs: '24px', md: '32px', lg: '40px'},
              flexWrap: {xs: 'wrap', md: 'nowrap'},
              alignItems: 'stretch'
            }}
          >
            {data.schoolSection.plans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

