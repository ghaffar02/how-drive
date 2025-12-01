import {Box, Grid} from '@mui/material';
import React from 'react';
// import TextCard from './components/TextCard';

import bg1 from '@/assets/svgs/driving-license-class-A/bg1.avif';
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

export default function ClassGrid({
  license,
  isbool = true
}: {
  license: string;
  isbool?: boolean;
}) {
  const t = useTranslations(license);
  const timings = [
    {day: 'Mo', slots: [{from: '14:30', to: '18:00'}]},
    {
      day: 'Di',
      slots: [
        {from: '10:30', to: '13:00'},
        {from: '14:30', to: '18:00'}
      ]
    },
    {day: 'Mi', slots: [{from: '16:00', to: '19:00'}]},
    {
      day: 'Do',
      slots: [
        {from: '10:30', to: '13:00'},
        {from: '14:30', to: '18:00'}
      ]
    },
    {day: 'Fr', slots: [{from: '14:30', to: '18:00'}]},

    {day: 'Sa', slots: [{from: 'Nicht verfügbar', to: ''}]},
    {day: 'So', slots: [{from: 'Nicht verfügbar', to: ''}]}
  ];

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
        {/* <Grid spacing={2} container> */}
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
              heading={t('grund')}
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
                  title="Klassen"
                  heading="A, B"
                />
              </Grid>
              <Grid size={12}>
                <BgCard
                  icon={map}
                  bgImage={ImageBGridInfo5School.src}
                  title="Sprachen"
                  heading="Deutsch, Englisch, Türkisch"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          // display={{xs: 'grid', md: 'none', lg: 'grid'}}
        >
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
                  heading={t('grund')}
                  icon={time}
                  data={timings}
                  // description={t('grundDes')}
                  headingSize={false}
                  background="#edf0ff"
                />
              </Grid>
              <Grid size={{xs: 12, md: 6, lg: 12}}>
                <BgCard
                  icon={map}
                  bgImage={ImageBGridInfo5School.src}
                  title="Sprachen"
                  heading="Deutsch, Englisch, Türkisch"
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
                display={{xs: 'grid', md: 'none', lg: 'grid'}}
              >
                <BgCard
                  bgImage={ImageBGridInfo2School.src}
                  icon={laptop}
                  title="Klassen"
                  heading="A, B"
                />
              </Grid>
              <Grid size={{xs: 12}}>
                <Grid container spacing={2}>
                  <Grid size={{xs: 12, md: 6, lg: 6}}>
                    {' '}
                    <TextCard
                      heading="Anschrift"
                      icon={location}
                      description="Mundsburger Damm 44"
                      headingSize={false}
                      background="#f2f2f2"
                    />
                  </Grid>
                  <Grid size={{xs: 12, md: 6, lg: 6}}>
                    {' '}
                    <TextCard
                      heading="Telefon"
                      icon={phone}
                      description="040-52160511"
                      headingSize={false}
                      background="#edf0ff"
                    />
                  </Grid>
                  <Grid size={{xs: 12, md: 6, lg: 6}}>
                    {' '}
                    <TextCard
                      heading="E-Mail"
                      icon={email}
                      description="info@mundsburg-fahrschule.de"
                      headingSize={false}
                      background="#edf0ff"
                    />
                  </Grid>
                  <Grid size={{xs: 12, md: 6, lg: 6}}>
                    {' '}
                    <TextCard
                      heading="Website"
                      icon={website}
                      description="http://mundsburg-fahrschule.de/"
                      headingSize={false}
                      background="#f2f2f2"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Box>
    </Box>
  );
}
