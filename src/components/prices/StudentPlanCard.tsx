'use client';
import {Link} from '@/i18n/navigation';
import {Box, Button, Typography, SxProps, Theme} from '@mui/material';
import tick from '@/assets/svgs/tick.svg';
import Image from 'next/image';
import localFont from '@/utils/themes';
import {PlanData} from './types';
import {useTranslations} from 'next-intl';
import {ReactNode} from 'react';

interface StudentPlanCardProps {
  plan?: PlanData;
  cardSx?: SxProps<Theme>;
}

export default function StudentPlanCard({plan, cardSx}: StudentPlanCardProps) {
  const t = useTranslations('Pricing');
  
  // Get student plan data from translations if plan is not provided
  // Access nested translation data correctly
  let studentPlanData: Partial<PlanData> | undefined;
  try {
    const pricingData = t.raw('data') as {
      studentSection?: {
        plan?: Partial<PlanData>;
      };
    };
    studentPlanData = pricingData?.studentSection?.plan;
  } catch (error) {
    console.error('Error loading translation data:', error);
  }

  // Use provided plan or use data from translations, ensuring all required fields are set
  let cardPlan: PlanData;
  
  if (plan) {
    cardPlan = plan;
  } else if (studentPlanData) {
    cardPlan = {
      name: studentPlanData.name || 'Students',
      price: studentPlanData.price || {amount: 'Free', duration: '', note: ''},
      description: studentPlanData.description || '',
      buttonText: studentPlanData.buttonText || 'Sign up',
      buttonLink: studentPlanData.buttonLink || '/register',
      usage: studentPlanData.usage || [],
      featuresHeader: studentPlanData.featuresHeader || 'Features include:',
      features: studentPlanData.features || [],
      recommendedText: (studentPlanData.recommendedText as ReactNode) || '',
      usageHeader: studentPlanData.usageHeader || 'Usage:'
    } as PlanData;
  } else {
    cardPlan = {
      name: 'Students',
      price: {amount: 'Free', duration: '', note: ''},
      description: "Use all the features of our service without worry. It's completely free for driving students. It's important that your account is linked to your driving school's account.",
      buttonText: 'Sign up',
      buttonLink: '/register',
      usage: [],
      featuresHeader: 'Features include:',
      features: [],
      recommendedText: '' as ReactNode,
      usageHeader: 'Usage:'
    };
  }
  return (
    <Box
      sx={{
        position: 'relative',
        flexShrink: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        p: '32px',
        bgcolor: '#fff',
        borderRadius: '15px',
        border: cardPlan.recommended ? '2px solid rgb(70, 17, 245)' : 'none',
        boxShadow: cardPlan.recommended
          ? 'rgba(0, 0, 0, 0.13) 0px 0.602187px 1.80656px -0.833333px, rgba(0, 0, 0, 0.13) 0px 2.28853px 6.8656px -1.66667px, rgba(0, 0, 0, 0.13) 0px 10px 30px -2.5px'
          : '0px 0.7961918735236395px 2.3885756205709185px -0.625px rgba(0, 0, 0, 0.13), 0px 2.414506143104518px 7.2435184293135535px -1.25px rgba(0, 0, 0, 0.13), 0px 6.382653521484461px 19.147960564453385px -1.875px rgba(0, 0, 0, 0.13), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.13)',
        ...cardSx
      }}
    >
      {cardPlan.recommended && (
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
            fontFamily: '"Inter", sans-serif'
          }}
        >
          {cardPlan.recommendedText}
        </Box>
      )}

      <Typography
        sx={{
          fontSize: {xs: '18px', md: '20px', lg: '22px'},
          fontFamily: '"Inter", sans-serif !important',
          color: '#1A202C',
          fontWeight: '400'
        }}
      >
        {cardPlan.name}
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
            {cardPlan.price.amount}
          </Typography>
          {cardPlan.price.duration && (
            <Box sx={{width: '100%'}}>
              <Typography
                sx={{
                  fontSize: {xs: '16px', md: '18px', lg: '20px'},
                  fontFamily: '"Inter", sans-serif  !important',
                  color: '#000',
                  fontWeight: '400'
                }}
              >
                {cardPlan.price.duration}
              </Typography>
              {cardPlan.price.note && (
                <Typography
                  sx={{
                    fontSize: {xs: '12px', md: '13px', lg: '14px'},
                    fontFamily: '"Inter", sans-serif  !important',
                    color: '#000',
                    fontWeight: '400'
                  }}
                >
                  {cardPlan.price.note}
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
          {cardPlan.description}
        </Typography>

        <Button
          component={Link}
          href={cardPlan.buttonLink}
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
          {cardPlan.buttonText}
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
          {cardPlan.featuresHeader || 'Features include:'}
        </Typography>
        {cardPlan.features.map((feature, index) => (
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
}

