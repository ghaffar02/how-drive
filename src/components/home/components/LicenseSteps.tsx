import {Box, Typography} from '@mui/material';
import React from 'react';
import {useTranslations} from 'next-intl';

import GridCard from './GridCard';
import GridCardSmall from './GridCardSmall';

import bike from '@/assets/svgs/lincense-steps/bike.svg';
import car from '@/assets/svgs/lincense-steps/car.svg';
import truck from '@/assets/svgs/lincense-steps/truck.svg';
import bus from '@/assets/svgs/lincense-steps/bus.svg';
import tractor from '@/assets/svgs/lincense-steps/tractor.svg';
import arrow from '@/assets/svgs/lincense-steps/arrow.svg';
import BgImage from '@/assets/svgs/lincense-steps/backgroundFeature.svg';

export default function LicenseSteps() {
  const t = useTranslations('LicenseSteps');
  return (
    <Box
      sx={{
        backgroundImage: `url(${BgImage.src})`,
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: {
          xs: '56px 16px 16px 48px',
          sm: '64px 24px 24px 48px',
          lg: '80px 48px 48px 48px'
        },
        overflow: 'hidden'
      }}
    >
      <Typography
        sx={{
          fontSize: '36px',
          fontFamily: 'Satoshi500 !important',
          color: '#000',
          textAlign: 'center',
          padding: '16px',
          marginBottom: '30px'
        }}
      >
        {t('title')}
      </Typography>
      {/* Desktop Grid */}
      <Box
        sx={{
          display: {xs: 'none', sm: 'none', lg: 'grid'},
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoRows: 'calc(245px)',
          gap: 3,
          maxWidth: '1280px',
          width: '100%',
          margin: 'auto',
          padding: '8px'
        }}
      >
        <Box
          sx={{
            gridColumn: {xs: 'span 6', sm: 'span 6', lg: 'span 8'},
            gridRow: {xs: 'span 2', sm: 'span 2', lg: 'span 1'}
          }}
        >
          <GridCard title={t('classA')} description={t('dataA')} img={bike} />
        </Box>

        <Box
          sx={{
            gridColumn: {xs: 'span 6', sm: 'span 6', lg: 'span 4'},
            gridRow: {xs: 'span 2', sm: 'span 2', lg: 'span 2'}
          }}
        >
          <GridCard
            title={t('classB')}
            description={t('dataB')}
            img={car}
            flexdir={true}
          />
        </Box>

        <Box sx={{gridColumn: 'span 4', gridRow: 'span 1'}}>
          <GridCardSmall
            title={t('classC')}
            description={t('dataC')}
            img={truck}
          />
        </Box>

        <Box sx={{gridColumn: 'span 4', gridRow: 'span 1'}}>
          <GridCardSmall
            title={t('classD')}
            description={t('dataD')}
            img={bus}
          />
        </Box>

        <Box sx={{gridColumn: 'span 4', gridRow: 'span 1'}}>
          <GridCardSmall
            title={t('classL')}
            description={t('dataL')}
            img={tractor}
          />
        </Box>

        <Box sx={{gridColumn: 'span 8', gridRow: 'span 1'}}>
          <GridCard
            title={t('rewrite')}
            description={t('dataRewrite')}
            img={arrow}
          />
        </Box>
      </Box>
      {/* Tablet Grid */}
      <Box
        sx={{
          display: {xs: 'none', sm: 'grid', lg: 'none'},
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoRows: 'calc(85px)',
          gap: 3,
          maxWidth: '1400px',
          width: '100%',
          margin: 'auto',
          padding: '8px'
        }}
      >
        <Box
          sx={{
            gridColumn: {xs: 'span 6', sm: 'span 6', lg: 'span 8'},
            gridRow: {xs: 'span 2', sm: 'span 4', lg: 'span 4'}
          }}
        >
          <GridCard
            title={t('classA')}
            description={t('dataA')}
            img={bike}
            flexdir={true}
          />
        </Box>

        <Box
          sx={{
            gridColumn: {xs: 'span 6', sm: 'span 6', lg: 'span 4'},
            gridRow: {xs: 'span 2', sm: 'span 4', lg: 'span 4'}
          }}
        >
          <GridCard
            title={t('classB')}
            description={t('dataB')}
            img={car}
            flexdir={true}
          />
        </Box>

        <Box sx={{gridColumn: 'span 12', gridRow: 'span 2'}}>
          <GridCard
            title={t('rewrite')}
            description={t('dataRewrite')}
            img={arrow}
            width="720px"
          />
        </Box>

        <Box sx={{gridColumn: 'span 6', gridRow: 'span 2'}}>
          <GridCardSmall
            title={t('classC')}
            description={t('dataC')}
            img={truck}
          />
        </Box>

        <Box sx={{gridColumn: 'span 6', gridRow: 'span 2'}}>
          <GridCardSmall
            title={t('classD')}
            description={t('dataD')}
            img={bus}
          />
        </Box>

        <Box sx={{gridColumn: 'span 12', gridRow: 'span 2'}}>
          <GridCard
            title={t('classL')}
            description={t('dataL')}
            img={tractor}
            width="720px"
          />
        </Box>
      </Box>
      {/* Mobile View */}
      <Box
        sx={{
          display: {xs: 'grid', sm: 'none', lg: 'none'},
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoRows: 'calc(89px)',
          gap: 3,
          maxWidth: '1400px',
          width: '100%',
          margin: 'auto',
          padding: '8px'
        }}
      >
        <Box
          sx={{
            gridColumn: {xs: 'span 12', sm: 'span 6', lg: 'span 4'},
            gridRow: {xs: 'span 4', sm: 'span 4', lg: 'span 4'}
          }}
        >
          <GridCard title={t('classB')} description={t('dataB')} img={car} />
        </Box>
        <Box sx={{gridColumn: 'span 12', gridRow: 'span 4'}}>
          <GridCard
            title={t('rewrite')}
            description={t('dataRewrite')}
            img={arrow}
          />
        </Box>

        <Box sx={{gridColumn: 'span 12', gridRow: 'span 2'}}>
          <GridCardSmall
            title={t('classA')}
            description={t('dataA')}
            img={bike}
          />
        </Box>

        <Box sx={{gridColumn: 'span 12', gridRow: 'span 2'}}>
          <GridCardSmall
            title={t('classC')}
            description={t('dataC')}
            img={truck}
          />
        </Box>

        <Box sx={{gridColumn: 'span 12', gridRow: 'span 2'}}>
          <GridCardSmall
            title={t('classD')}
            description={t('dataD')}
            img={bus}
          />
        </Box>
        <Box sx={{gridColumn: 'span 12', gridRow: 'span 2'}}>
          <GridCardSmall
            title={t('classL')}
            description={t('dataL')}
            img={tractor}
          />
        </Box>
      </Box>
    </Box>
  );
}
