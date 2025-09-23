import {Box, Typography} from '@mui/material';
import PricingCards from './PricingCards';
import {useTranslations} from 'next-intl';

type Pricing = {
  title?: boolean;
};
export default function Pricing({title = true}: Pricing) {
  const t = useTranslations('Pricing');
  const PricingData = t.raw('PricingData');

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
            <PricingCards pricingData={PricingData} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
