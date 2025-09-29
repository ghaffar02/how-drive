import {Box, Grid} from '@mui/material';
import React from 'react';
import Header from './components/Header';
import Appointment from './components/Appointment';
import LessonCard from './components/LessonCard';
import Messages from './components/Message';
import Process from './components/Process';
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Dashboard.home.MessageLesson');

  return (
    <>
      <Box
        sx={{
          maxWidth: '1300px',
          width: '100%',
          height: {xs: 'auto', xl: '100%'},
          background: 'rgba(248,250,252,0.3)',
          padding: {xs: '8px', lg: '24px'},
          border: '1px solid #fff',
          borderRadius: {xs: '24px', md: '0px 24px 24px 0px'}
        }}
      >
        <Grid
          container
          spacing={{xs: 2, sm: 3}}
          sx={{height: {xs: 'auto', xl: '100%'}}}
        >
          <Grid size={{xs: 6, md: 12}} sx={{height: {xs: 'auto', xl: '20%'}}}>
            <Header />
          </Grid>
          <Grid size={6} sx={{display: {xs: 'block', md: 'none'}}}>
            <Appointment />
          </Grid>
          <Grid
            container
            size={{md: 12, lg: 8}}
            sx={{height: {xs: 'auto', xl: '80%'}}}
          >
            <Grid size={12} sx={{height: {xs: 'auto', xl: '67%'}}}>
              <Process />
            </Grid>
            <Grid size={6} sx={{height: {xs: 'auto', xl: '28%'}}}>
              <LessonCard
                title={t('card1Title')}
                completedHours={11}
                totalHours={14}
                progressValue={80}
              />
            </Grid>
            <Grid size={6} sx={{height: {xs: 'auto', xl: '28%'}}}>
              <LessonCard
                title={t('card2Title')}
                completedHours={4}
                totalHours={12}
                progressValue={30}
              />
            </Grid>
          </Grid>
          <Grid
            container
            size={{xs: 12, md: 12, lg: 4}}
            sx={{height: {xs: 'auto', xl: '80%'}}}
          >
            <Grid
              size={{md: 6, lg: 12}}
              sx={{
                display: {xs: 'none', md: 'block'},
                height: {xs: 'auto', xl: '47.5%'}
              }}
            >
              <Appointment />
            </Grid>
            <Grid
              size={{xs: 12, md: 6, lg: 12}}
              sx={{height: {xs: 'auto', xl: '47.5%'}}}
            >
              <Messages />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
