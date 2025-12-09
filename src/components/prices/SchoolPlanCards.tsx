import {Box, Grid, SxProps, Theme} from '@mui/material';
import SchoolPlanCard from './SchoolPlanCard';
import {schoolPlansData} from './pricingData';

interface SchoolPlanCardsProps {
  cardSx?: SxProps<Theme>;
}

export default function SchoolPlanCards({cardSx}: SchoolPlanCardsProps) {
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
  );
}

