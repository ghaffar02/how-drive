import {Box} from '@mui/material';
import React from 'react';
// import Header from './components/Header';
// import Appointment from './components/Appointment';
// import LessonCard from './components/LessonCard';
// import Messages from './components/Message';
// import Process from './components/Process';
import {useTranslations} from 'next-intl';
import ProfileCard from './components/ProfileCard';
import ActiveIcon from '@/assets/svgs/dashboard-student/active.svg';
import InactiveIcon from '@/assets/svgs/dashboard-student/inactive.svg';
import Messages from './components/Message';
import Drivers from './components/Drivers';
import {DayDetailView} from '../calander/components/big-calander/DayDetailView';

export default function Home() {
  // const t = useTranslations('Dashboard.home.MessageLesson');
  const activeStudents = 164;
  const inactiveStudents = 1300;
  const totalStudents = activeStudents + inactiveStudents;
  const percentageValueActive = parseFloat(
    ((activeStudents / totalStudents) * 100).toFixed(1)
  );

  return (
    <>
      <Box
        sx={{
          maxWidth: '1300px',
          width: '100%',
          height: {xs: '100%', md: '100%'},
          padding: {xs: '8px', md: '24px'},
          background: 'rgba(21, 31, 42, 0.3)',
          borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
          backgroundColor: 'rgba(248, 250, 252, 0.3)',
          border: {xs: '1px solid #fff', md: 'none'},
          boxShadow: {
            xs: 'rgb(255, 255, 255) 0px 0px 0px 1px, rgba(0, 0, 0, 0.25) 0px 1px 0px 0px, rgba(0, 0, 0, 0.25) 0px 1px 1px 0px',
            md: 'none'
          },
          backdropFilter: {xs: 'blur(15px)', md: 'none'},
          zIndex: '1',
          display: 'grid',
          gridTemplateColumns: 'repeat(6, minmax(50px, 1fr))',
          gridTemplateRows: 'repeat(5, minmax(0px, 1fr))',
          gap: {xs: '20px', md: '28px'}
        }}
      >
        <Box
          sx={{
            gridColumn: {xs: '1 / span 6', md: '1 / span 2'},
            gridRow: {xs: '1 / span 1', md: '1 / span 1'}
          }}
        >
          <ProfileCard
            imgSrc={ActiveIcon}
            title="Active students"
            students={activeStudents}
          />
        </Box>
        <Box
          sx={{
            gridColumn: {xs: '1 / span 6', md: '3 / span 2'},
            gridRow: {xs: '2 / span 1', md: '1 / span 1'}
          }}
        >
          <ProfileCard
            imgSrc={InactiveIcon}
            title="Inactive students"
            students={inactiveStudents}
          />
        </Box>
        <Box
          sx={{
            gridColumn: {xs: '1 / span 6', md: '5 / span 2'},
            gridRow: {xs: '3 / span 1', md: '1 / span 1'}
          }}
        >
          <ProfileCard
            title="All students"
            students={totalStudents}
            progressBar={true}
            activePercentage={percentageValueActive}
          />
        </Box>
        <Box
          sx={{
            gridColumn: {xs: '1 / span 6', md: '1 / span 3', lg: '5 / span 2'},
            gridRow: {xs: '4 / span 1', md: '4 / span 2', lg: '2 / span 2'}
          }}
        >
          <Messages />
        </Box>
        <Box
          sx={{
            gridColumn: {xs: '1 / span 6', md: '4 / span 3', lg: '5 / span 2'},
            gridRow: {xs: '5 / span 1', md: '4 / span 2', lg: '4 / span 2'}
          }}
        >
          <Drivers title="Trainers" />
        </Box>
      </Box>
    </>
  );
}
