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
          height: {xs: 'auto', lg: '100%'},
          padding: {xs: '8px', lg: '24px'},
          borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
          marginBottom: {xs: '63px', md: 'auto'},
          backgroundColor: 'rgba(248, 250, 252, 0.3)',
          border: {xs: '1px solid #fff', md: 'none'},
          boxShadow: {
            xs: 'rgb(255, 255, 255) 0px 0px 0px 1px, rgba(0, 0, 0, 0.25) 0px 1px 0px 0px, rgba(0, 0, 0, 0.25) 0px 1px 1px 0px',
            md: 'none'
          },
          backdropFilter: {xs: 'blur(15px)', md: 'none'},
          zIndex: '1'
        }}
      >
        <Grid
          container
          sx={{height: {xs: 'auto', lg: '100%'}}}
          columnSpacing={{xs: 2, sm: 3, md: 3}}
          rowSpacing={{xs: 2, sm: 3, md: 3, lg: 2}}
        >
          <Grid size={{xs: 6, md: 12}} sx={{height: {xs: 'auto', lg: '18%'}}}>
            <Header />
          </Grid>
          <Grid size={6} sx={{display: {xs: 'block', md: 'none'}}}>
            <Appointment />
          </Grid>
          <Grid
            container
            size={{md: 12, lg: 8}}
            sx={{height: {xs: 'auto', lg: '79%'}}}
            spacing={{xs: 2, sm: 3, md: 3}}
          >
            <Grid size={12} sx={{height: {xs: 'auto', lg: '70%', xl: '73%'}}}>
              <Process />
            </Grid>
            <Grid size={6} sx={{height: {xs: 'auto', lg: '25%'}}}>
              <LessonCard
                title={t('card1Title')}
                completedHours={11}
                totalHours={14}
                progressValue={80}
              />
            </Grid>
            <Grid size={6} sx={{height: {xs: 'auto', lg: '25%'}}}>
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
            sx={{height: {xs: 'auto', lg: '79%'}}}
            spacing={3}
          >
            <Grid
              size={{md: 6, lg: 12}}
              sx={{
                display: {xs: 'none', md: 'block'},
                height: {xs: 'auto', lg: '48%', xl: '49%'}
              }}
            >
              <Appointment />
            </Grid>
            <Grid
              size={{xs: 12, md: 6, lg: 12}}
              sx={{height: {xs: 'auto', lg: '48%', xl: '49%'}}}
            >
              <Messages />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
