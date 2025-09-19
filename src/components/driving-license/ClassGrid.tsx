import {Box, Grid} from '@mui/material';
import React from 'react';
import TextCard from './components/TextCard';
import BgCard from './components/BgCard';

import bg1 from '@/assets/svgs/driving-license-class-A/bg1.avif';
import bg2 from '@/assets/svgs/driving-license-class-A/bg2.avif';
import file from '@/assets/svgs/driving-license-class-A/file.svg';
import road from '@/assets/svgs/driving-license-class-A/road.svg';

import {useTranslations} from 'next-intl';

export default function ClassGrid({license}: {license: string}) {
  const t = useTranslations(license);

  const licenseArr1 = t.raw('grid1Data');
  return (
    <Box sx={{bgcolor: '#FAFAFA'}}>
      <Box
        sx={{
          maxWidth: '1400px',
          width: '100%',
          margin: 'auto',
          padding: {xs: '60px 16px', md: '60px 24px', lg: '60px 48px'}
        }}
      >
        <Box
          sx={{
            maxWidth: '1063px',
            width: '100%',
            margin: 'auto',
            padding: '8px'
          }}
        >
          <Grid container spacing={2}>
            <Grid container spacing={2}>
              {licenseArr1.map((data: any, i: any) => (
                <Grid key={i} size={{xs: 12, sm: 6, lg: 3}}>
                  <TextCard
                    heading={data.heading}
                    subHeading={data.sub}
                    description={data.des}
                  />
                </Grid>
              ))}
            </Grid>
            {/* Down grid component */}
            <Grid
              container
              spacing={2}
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                width: '100%'
              }}
            >
              <Grid sx={{gridColumn: {xs: 'span 12', sm: 'span 6'}}}>
                <BgCard icon={file} bgImage={bg1.src} title={t('fileTitle')} />
              </Grid>
              <Grid
                sx={{
                  gridColumn: {xs: 'span 12', sm: 'span 6', lg: 'span 3'},
                  gridRow: {xs: 3, sm: 2, lg: 'auto'}
                }}
              >
                <TextCard
                  heading={t('grund')}
                  subHeading=""
                  description={t('grundDes')}
                  headingSize={false}
                  background="#edf0ff"
                />
              </Grid>
              <Grid
                sx={{
                  gridColumn: {xs: 'span 12', sm: '7/span 6', lg: 'span 3'},
                  gridRow: {xs: 2, sm: 1, lg: 'span 2'}
                }}
              >
                <BgCard
                  icon={road}
                  bgImage={bg2.src}
                  row={false}
                  title={t('roadTitle')}
                />
              </Grid>
              <Grid
                sx={{
                  gridColumn: {xs: 'span 12', sm: 'span 6', lg: 'span 3'},
                  gridRow: {sm: 3, lg: 2}
                }}
              >
                <TextCard
                  heading={t('gult')}
                  subHeading=""
                  description={t('gultDes')}
                  headingSize={false}
                />
              </Grid>
              <Grid
                sx={{
                  gridColumn: {
                    xs: 'span 12',
                    sm: '7 / span 6',
                    lg: '4 / span 3'
                  },
                  gridRow: {sm: 3, lg: 2}
                }}
              >
                <TextCard
                  heading={t('mofa')}
                  subHeading={t('mofasub')}
                  description={t('mofaDes')}
                  headingSize={false}
                />
              </Grid>
              <Grid
                sx={{
                  gridColumn: {xs: 'span 12', sm: '7 / span 6', lg: 'span 3'},
                  gridRow: {xs: 4, sm: 2, lg: 2}
                }}
              >
                <TextCard
                  heading={t('zusa')}
                  subHeading=""
                  description={t('zusaDes')}
                  headingSize={false}
                  background="#edf0ff"
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
