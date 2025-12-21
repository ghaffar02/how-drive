import {Box} from '@mui/material';
import React from 'react';
import SchedulerSidebar from './components/SchedulerSidebar';
import BigCalendar from '@/components/student-dashboard/layout/calander/components/big-calander/BigCalander';
// import BigCalendar from '@/components/school-dashboard/layout/calander/components/big-calander/BigCalander';

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
        <Box
          sx={{
            width: '100%',
            background: 'rgba(248,250,252,0.3)',
            p: {xs: '8px', sm: '24px'},
            border: '1px solid #fff',
            boxShadow:
              'rgb(255, 255, 255) 0px 0px 0px 1px, rgba(0, 0, 0, 0.25) 0px 1px 0px 0px, rgba(0, 0, 0, 0.25) 0px 1px 1px 0px',
            backdropFilter: 'blur(15px)',
            borderRadius: {xs: '24px', md: '0px 24px 24px 0px'}
            // height: '100%'
          }}
        >
          <BigCalendar />
        </Box>
        {/* <EventsCalendar /> */}
      </Box>
    </>
  );
}
