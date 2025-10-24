import {Box} from '@mui/material';
import React from 'react';
import Header from '../components/Header';
import DrivingStudents from '../components/DrivingStudents';
import Messages from '../components/Messages';
import {useTranslations} from 'next-intl';
import EventsCalendar from '../../calander/components/EventsCalendar';

export default function DriverDetail() {
  const t = useTranslations('SchoolDashboard.Drivers.DriverDetail');

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        padding: {xs: '16px', md: '24px'},
        background: 'rgba(248,250,252,0.3)',
        backdropFilter: 'blur(15px)',
        boxShadow: `0px 0px 0px 1px rgb(255, 255, 255, rgb(255, 255, 255)), 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)`,
        border: '2px solid #fff',
        borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
        display: 'flex',
        flexDirection: 'column',
        gap: {xs: '20px', md: '24px', lg: '28px'},
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none'
      }}
    >
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexDirection: {xs: 'column', lg: 'row'},
          gap: {xs: '20px', md: '24px', lg: '28px'}
        }}
      >
        <Box sx={{flex: 1}}>
          <DrivingStudents title={t('drivingTitle')} />
        </Box>
        <Box sx={{flex: 1}}>
          <Messages />
        </Box>
      </Box>
      <Box sx={{height: '700px'}}>
        <EventsCalendar />
      </Box>
    </Box>
  );
}
