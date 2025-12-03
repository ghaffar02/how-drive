import {Box, Grid} from '@mui/material';
import React from 'react';
// import TextCard from './components/TextCard';

import ImageBGridInfo2School from '@/assets/pngs/ImageBGridInfo2School.jpg';
import email from '@/assets/svgs/driving-schools/email.svg';
import website from '@/assets/svgs/driving-schools/website.svg';
import time from '@/assets/svgs/driving-schools/time.svg';
import ImageBGridInfo5School from '@/assets/pngs/ImageBGridInfo5School.jpg';
import phone from '@/assets/svgs/driving-schools/phone.svg';
import map from '@/assets/svgs/driving-schools/map.svg';
import location from '@/assets/svgs/driving-schools/location.svg';
import laptop from '@/assets/svgs/driving-schools/laptop.svg';

import {useTranslations} from 'next-intl';
import TextCard from './components/TextCard';
import BgCard from './components/BgCard';

export default function ClassGrid() {
  const t = useTranslations('DrivingSchools.GridSection');
  const timings = t.raw('timings');

  return (
    <Box sx={{bgcolor: '#FAFAFA'}}>
      <Box
        sx={{
          maxWidth: '1400px',
          width: '100%',
          margin: 'auto',
          padding: {xs: '120px 8px', md: '120px 24px', lg: '120px 48px'}
        }}
      >
        {/* <Grid spacing={2} container> */}
        <Box
          sx={{
            maxWidth: '1064px',
            width: '100%',
            margin: 'auto',
            padding: '8px'
          }}
        >
          <Grid
            width="100%"
            container
            mb={2}
            spacing={2}
            display={{xs: 'none', md: 'flex', lg: 'none'}}
            direction="row"
          >
            <Grid size={6}>
              {' '}
              <TextCard
                heading={t('openingHours')}
                data={timings}
                icon={time}
                headingSize={false}
                background="#edf0ff"
              />
            </Grid>
            <Grid size={6}>
              <Grid container spacing={2} direction="column">
                <Grid size={12}>
                  <BgCard
                    icon={laptop}
                    bgImage={ImageBGridInfo2School.src}
                    title={t('classesHeading')}
                    heading={t('classesList')}
                  />
                </Grid>
                <Grid size={12}>
                  <BgCard
                    icon={map}
                    bgImage={ImageBGridInfo5School.src}
                    title={t('languagesHeading')}
                    heading={t('languages')}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid
              size={{xs: 12, lg: 6}}
              display={{xs: 'grid', md: 'none', lg: 'grid'}}
            >
              <Grid
                container
                spacing={2}
                direction={{xs: 'column-reverse', md: 'row', lg: 'row'}}
              >
                <Grid size={{xs: 12, md: 6, lg: 12}}>
                  {' '}
                  <TextCard
                    heading={t('openingHours')}
                    icon={time}
                    data={timings}
                    headingSize={false}
                    background="#edf0ff"
                  />
                </Grid>
                <Grid
                  size={{xs: 12, md: 6, lg: 12}}
                  display={{xs: 'none', lg: 'block'}}
                >
                  <BgCard
                    icon={map}
                    bgImage={ImageBGridInfo5School.src}
                    title={t('languagesHeading')}
                    heading={t('languages')}
                  />
                </Grid>
                <Grid
                  size={{xs: 12, md: 6, lg: 12}}
                  display={{xs: 'block', lg: 'none'}}
                >
                  <BgCard
                    icon={laptop}
                    bgImage={ImageBGridInfo2School.src}
                    title={t('classesHeading')}
                    heading={t('classesList')}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{xs: 12, lg: 6}}>
              <Grid
                container
                spacing={2}
                direction={{xs: 'column-reverse', md: 'row-reverse', lg: 'row'}}
              >
                <Grid
                  size={{xs: 12, md: 6, lg: 12}}
                  display={{xs: 'none', md: 'none', lg: 'grid'}}
                >
                  <BgCard
                    icon={laptop}
                    bgImage={ImageBGridInfo2School.src}
                    title={t('classesHeading')}
                    heading={t('classesList')}
                  />
                </Grid>
                <Grid
                  size={{xs: 12, md: 6, lg: 12}}
                  display={{xs: 'grid', md: 'none', lg: 'none'}}
                >
                  <BgCard
                    icon={map}
                    bgImage={ImageBGridInfo5School.src}
                    title={t('languagesHeading')}
                    heading={t('languages')}
                  />
                </Grid>
                <Grid size={{xs: 12}}>
                  <Grid container spacing={2}>
                    <Grid size={{xs: 12, md: 6, lg: 6}}>
                      {' '}
                      <TextCard
                        heading={t('addressHeading')}
                        icon={location}
                        description={t('address')}
                        headingSize={false}
                        background="#f2f2f2"
                      />
                    </Grid>
                    <Grid size={{xs: 12, md: 6, lg: 6}}>
                      {' '}
                      <TextCard
                        heading={t('telephoneHeading')}
                        icon={phone}
                        description={t('telephone')}
                        headingSize={false}
                        background="#edf0ff"
                      />
                    </Grid>
                    <Grid size={{xs: 12, md: 6, lg: 6}}>
                      {' '}
                      <TextCard
                        heading={t('emailHeading')}
                        icon={email}
                        description={t('email')}
                        headingSize={false}
                        background="#edf0ff"
                      />
                    </Grid>
                    <Grid size={{xs: 12, md: 6, lg: 6}}>
                      {' '}
                      <TextCard
                        heading={t('websiteHeading')}
                        icon={website}
                        description={t('website')}
                        headingSize={false}
                        background="#f2f2f2"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        {/* </Grid> */}
      </Box>
    </Box>
  );
}
