import {Box} from '@mui/material';
import React from 'react';
import SchedulerSidebar from './components/SchedulerSidebar';
import EventsCalendar from './components/EventsCalendar';

export default function Calander() {
  return (
    <>
      <Box
        gap={2}
        sx={{
          display: 'flex',
          width: '100%',
          height: {
            xs: 'calc(100svh - 194px)',
            md: 'calc(100svh - 48px)'
          }
        }}
      >
        <SchedulerSidebar />
        <EventsCalendar />
      </Box>
    </>
  );
}
