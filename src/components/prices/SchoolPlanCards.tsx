import {Box, Grid, SxProps, Theme} from '@mui/material';
import SchoolPlanCard from './SchoolPlanCard';
import {schoolPlansData} from './pricingData';
import { PlanData } from './types';
import { Key } from 'react';
import { useTranslations } from 'next-intl';

interface SchoolPlanCardsProps {
  cardSx?: SxProps<Theme>;
}

export default function SchoolPlanCards({cardSx}: SchoolPlanCardsProps) {
  const t = useTranslations('Pricing');
  const data = t.raw('data');
  const schoolSection = data.schoolSection;
  return (
    <Box
      sx={{
        padding: '8px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...cardSx
      }}
    >
      <Grid container spacing={6}>
        {schoolSection.plans.map((plan: PlanData, index: Key | null | undefined) => (
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
  );
}

