import {Box, Grid} from '@mui/material';
import React from 'react';
import Header from './components/Header';
import Appointment from './components/Appointment';
import LessonCard from './components/LessonCard';
import Messages from './components/Message';
import Process from './components/Process';

export default function Home() {
  return (
    <>
      <Box
        sx={{
          maxWidth: '1300px',
          width: '100%',
          // height: '100%',
          background: 'rgba(248,250,252,0.3)',
          padding: {xs: '8px', lg: '24px'},
          border: '1px solid #fff',
          borderRadius: {xs: '24px', md: '0px 24px 24px 0px'}
        }}
      >
        <Grid container spacing={{xs: 2, sm: 3}}>
          <Grid size={{xs: 6, md: 12}}>
            <Header />
          </Grid>
          <Grid size={6} sx={{display: {xs: 'block', md: 'none'}}}>
            <Appointment />
          </Grid>
          <Grid container size={{md: 12, lg: 8}}>
            <Grid size={12}>
              <Process />
            </Grid>
            <Grid size={6}>
              <LessonCard
                title="Theory lessons"
                completedHours={11}
                totalHours={14}
                progressValue={80}
              />
            </Grid>
            <Grid size={6}>
              <LessonCard
                title="Driving lessons"
                completedHours={12}
                totalHours={4}
                progressValue={30}
              />
            </Grid>
          </Grid>
          <Grid container size={{xs: 12, md: 12, lg: 4}}>
            <Grid
              size={{md: 6, lg: 12}}
              sx={{display: {xs: 'none', md: 'block'}}}
            >
              <Appointment />
            </Grid>
            <Grid size={{xs: 12, md: 6, lg: 12}}>
              <Messages />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
