import {Box, Typography} from '@mui/material';
import PricingCards from './PricingCards';
import {useTranslations} from 'next-intl';

export default function Pricing() {
  const t = useTranslations('Pricing');
  const preiseData = t.raw('PricingData');

  return (
    <>
      <Box
        sx={{
          bgcolor: '#FAFAFA',
          boxSizing: 'border-box'
        }}
      >
        <Box
          sx={{
            maxWidth: '1280px',
            width: '100%',
            p: {xs: '48px 16px', md: '48px 24px', lg: '48px'},
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: {xs: '24px'}
          }}
        >
          <Typography
            sx={{
              fontSize: {xs: '28px', md: '32px', lg: '36px'},
              lineHeight: {xs: '35px', md: '100%'},
              fontFamily: 'Satoshi !important',
              padding: '16px',
              textAlign: 'center',
              color: '#000'
            }}
          >
            {t('title')}
          </Typography>
          <Box
            sx={{
              padding: '8px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              gap: {xs: '32px', lg: '60px'},
              alignItems: 'center',
              flexWrap: {xs: 'wrap', md: 'nowrap'}
            }}
          >
            <PricingCards preiseData={preiseData} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
