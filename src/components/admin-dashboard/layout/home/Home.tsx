'use client';
import {Box} from '@mui/material';
import React, {useState} from 'react';
// import Header from './components/Header';
// import Appointment from './components/Appointment';
// import LessonCard from './components/LessonCard';
// import Messages from './components/Message';
// import Process from './components/Process';
import {useTranslations} from 'next-intl';
import ActiveIcon from '@/assets/svgs/dashboard-student/active.svg';
import InactiveIcon from '@/assets/svgs/dashboard-student/inactive.svg';

type Props = {
  setActiveKey: React.Dispatch<React.SetStateAction<string>>;
};

export default function Home({setActiveKey}: Props) {
  const t = useTranslations('SchoolDashboard.Home');

  return (
    <>
      <Box
        sx={{
          maxWidth: '1300px',
          width: '100%',
          height: {xs: 'auto', md: '100%'},
          padding: {xs: '8px', md: '24px'},
          background: 'rgba(21, 31, 42, 0.3)',
          borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
          backgroundColor: 'rgba(248, 250, 252, 0.3)',
          border: {xs: '2px solid #fff', md: 'none'},
          // boxShadow: {
          //   xs: 'rgb(255, 255, 255) 0px 0px 0px 1px, rgba(0, 0, 0, 0.25) 0px 1px 0px 0px, rgba(0, 0, 0, 0.25) 0px 1px 1px 0px',
          //   md: 'none'
          // },
          backdropFilter: {xs: 'blur(15px)', md: 'none'},
          zIndex: '1',
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(6, minmax(0px, 1fr))',
            md: 'repeat(8, minmax(0px, 1fr))',
            lg: 'repeat(6, minmax(0px, 1fr))'
          },
          gridTemplateRows: {xs: 'auto', md: 'repeat(5, minmax(50px, 1fr))'},
          gap: {xs: '16px', md: '24px'}
        }}
      >
        Home
        {/* <Box
          sx={{
            gridColumn: {xs: '1 / span 6', md: '1 / span 2', lg: '1 / span 2'},
            gridRow: {xs: '1 / span 1', md: '1 / span 1'},
            height: {xs: '85px', md: 'unset'}
          }}
        >
          <ProfileCard
            imgSrc={ActiveIcon}
            title={t('profileCard.active')}
            students={activeStudents}
          />
        </Box>
        <Box
          sx={{
            gridColumn: {xs: '1 / span 6', md: '3 / span 2', lg: '3 / span 2'},
            gridRow: {xs: '2 / span 1', md: '1 / span 1'},
            height: {xs: '85px', md: 'unset'}
          }}
        >
          <ProfileCard
            imgSrc={InactiveIcon}
            title={t('profileCard.inactive')}
            students={inactiveStudents}
            iconBg={true}
          />
        </Box>
        <Box
          sx={{
            gridColumn: {xs: '1 / span 6', md: '5 / span 4', lg: '5 / span 2'},
            gridRow: {xs: '3 / span 1', md: '1 / span 1'},
            height: {xs: '110px', md: 'unset'}
          }}
        >
          <ProfileCard
            title={t('profileCard.all')}
            students={totalStudents}
            progressBar={true}
            activePercentage={percentageValueActive}
          />
        </Box>

        <Box
          sx={{
            gridColumn: {xs: '1 / span 6', md: '1 / span 8', lg: '1 / span 4'},
            gridRow: {xs: '4 / span 2', md: '2 / span 2', lg: '2 / span 4'},
            overflowY: 'auto',
            border: '1px solid #fff',
            borderRadius: '18px',
            padding: {xs: '16px', md: '24px'},
            background: '#ffffffbf',
            boxShadow:
              '0px 0px 0px 1px #ffffff, 0px 1px 0px 0px rgba(0,0,0,0.25), 0px 1px 1px 0px rgba(0,0,0,0.25)',
            '&::-webkit-scrollbar': {display: 'none'},
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            height: {xs: '600px', md: 'unset'}
            // display: 'none'
          }}
        >
          <DayDetailView
            date={sampleDate}
            appointments={sampleAppointments}
            onClose={() => {}}
          />
        </Box>

        <Box
          sx={{
            gridColumn: {xs: '1 / span 6', md: '1 / span 4', lg: '5 / span 2'},
            gridRow: {xs: '6 / span 1', md: '4 / span 2', lg: '2 / span 2'},
            height: {xs: '245px', md: 'unset'}
          }}
        >
          <Messages setActiveKey={setActiveKey} />
        </Box>
        <Box
          sx={{
            gridColumn: {xs: '1 / span 6', md: '5 / span 4', lg: '5 / span 2'},
            gridRow: {xs: '7 / span 1', md: '4 / span 2', lg: '4 / span 2'},
            height: {xs: '245px', md: 'unset'}
          }}
        >
          <Drivers
            title={t('trainers')}
            showIcon={false}
            setActiveKey={setActiveKey}
          />
        </Box> */}
      </Box>
    </>
  );
}
