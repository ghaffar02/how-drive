import {Box, Typography, SxProps, Theme, Grid} from '@mui/material';
import StudentPlanCard from './StudentPlanCard';
import SchoolPlanCard from './SchoolPlanCard';
import {PlanData} from './types';
import { useTranslations } from 'next-intl';
import { Key } from 'react';

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
            {data.schoolSection.plans.map((plan: PlanData, index: Key | null | undefined) => (
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
