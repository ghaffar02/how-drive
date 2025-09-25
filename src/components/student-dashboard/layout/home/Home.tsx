import {Box} from '@mui/material';
import React from 'react';
import Header from './components/Header';
import Appointment from './components/Appointment';
import LessonCard from './components/LessonCard';
import Messages from './components/Message';

export default function Home() {
  return (
    <>
      <Box
        sx={{
          maxWidth: '1176px',
          width: '100%',
          height: '100%',
          background: 'rgba(248,250,252,0.3)',
          padding: {xs: '8px', lg: '24px'},
          border: '1px solid #fff',
          borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
          display: 'flex',
          flexDirection: {xs: 'row', md: 'column'},
          gap: '20px'
        }}
      >
        <Header />
        <Appointment />
        <Messages />

        {/* <Header /> */}
      </Box>
      <Box display="flex" width="100%" gap={2}>
        <LessonCard
          title="Theory lessons"
          completedHours={11}
          totalHours={14}
          progressValue={80}
        />
        <LessonCard
          title="Driving lessons"
          completedHours={12}
          totalHours={4}
          progressValue={30}
        />
      </Box>
    </>
  );
}
