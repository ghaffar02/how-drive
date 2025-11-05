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
          padding: {xs: '8px', md: '24px'},
          background: 'rgba(21, 31, 42, 0.3)',
          borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
          backgroundColor: 'rgba(248, 250, 252, 0.3)',
          border: {xs: '2px solid #fff', md: 'none'},
          overflowY: {md: 'auto', lg: 'unset'},
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',

          backdropFilter: {xs: 'blur(15px)', md: 'none'},
          zIndex: '1'
        }}
      >
        <Grid
          container
          sx={{height: {xs: 'auto', lg: '100%'}}}
          columnSpacing={{xs: 2, sm: 3, md: 3}}
          rowSpacing={{xs: 2, sm: 3, md: 3, lg: 3}}
        >
          <Grid size={{xs: 6, md: 12}} sx={{height: {xs: 'auto', lg: '16vh'}}}>
            <Header />
          </Grid>
          <Grid size={6} sx={{display: {xs: 'block', md: 'none'}}}>
            <Appointment />
          </Grid>
          <Grid
            container
            size={{md: 12, lg: 8}}
            sx={{
              height: {
                xs: 'auto',

                lg: 'calc( 100% - 16vh - 24px )'
              },
              rowGap: {xs: '16px', sm: '24px'},
              columnGap: {xs: '16px', sm: '24px'}
            }}
            // spacing={{xs: 2, sm: 3, md: 3}}
          >
            <Grid
              size={12}
              sx={{
                height: {
                  xs: 'auto',
                  lg: 'calc(100% - 16vh - 24px)'
                }
              }}
            >
              <Process />
            </Grid>
            <Grid size={6} sx={{height: {xs: 'auto', lg: '16vh'}}}>
              <LessonCard
                title={t('card1Title')}
                completedHours={11}
                totalHours={14}
                progressValue={80}
              />
            </Grid>
            <Grid size={6} sx={{height: {xs: 'auto', lg: '16vh'}}}>
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
            sx={{height: {xs: 'auto', lg: 'calc( 100% - 16vh - 24px )'}}}
            spacing={3}
          >
            <Grid
              size={{md: 6, lg: 12}}
              sx={{
                display: {xs: 'none', md: 'block'},
                height: {
                  xs: 'auto',
                  lg: 'calc( 50% - 12px )',
                  xl: 'calc( 50% - 12px )'
                }
              }}
            >
              <Appointment />
            </Grid>
            <Grid
              size={{xs: 12, md: 6, lg: 12}}
              sx={{
                height: {
                  xs: 'auto',
                  lg: 'calc( 50% - 12px )',
                  xl: 'calc( 50% - 12px )'
                }
              }}
            >
              <Messages />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
