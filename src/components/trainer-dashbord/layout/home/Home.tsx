'use client';
import {Box} from '@mui/material';
import React, {useState} from 'react';
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
import {DayDetailView} from './components/DayDetailView';

type Props = {
  setActiveKey: React.Dispatch<React.SetStateAction<string>>;
};

export default function Home({setActiveKey}: Props) {
  const t = useTranslations('SchoolDashboard.Home');
  const activeStudents = 164;
  const inactiveStudents = 1522;
  const totalStudents = activeStudents + inactiveStudents;
  const percentageValueActive = parseFloat(
    ((activeStudents / totalStudents) * 100).toFixed(1)
  );

  // the day detail comp relative data
  const [showDetail, setShowDetail] = useState(false);

  // sample date and appointments (you can use real data instead)
  // const sampleDate = new Date(2025, 9, 17);
  // const sampleAppointments = [
  //   {
  //     id: 1,
  //     title: 'Fahrstunden',
  //     startTime: '09:00',
  //     endTime: '10:30',
  //     color: '#0891B2'
  //   },
  //   {
  //     id: 2,
  //     title: 'Theorieprüfung',
  //     startTime: '11:00',
  //     endTime: '11:30',
  //     color: '#DC2626'
  //   }
  // ];

  // const t = useTranslations('SchoolDashboard.Home');

  // Correct sample date
  const sampleDate = new Date('2025-11-17');

  // FIX: Appointments MUST match DayDetailView interface
  const sampleAppointments = [
    {
      id: 1,
      category: 'purple',
      startTime: '06:00',
      endTime: '07:00',
      hour: 6,
      duration: 1,
      title: 'Gespräch'
    },
    {
      id: 2,
      category: 'purple',
      startTime: '11:00',
      endTime: '12:00',
      hour: 11,
      duration: 1,
      title: 'Gespräch'
    },
    {
      id: 3,
      category: 'purple',
      startTime: '14:00',
      endTime: '15:00',
      hour: 14,
      duration: 1,
      title: 'Gespräch'
    },
    {
      id: 4,
      category: 'purple',
      startTime: '17:00',
      endTime: '18:00',
      hour: 17,
      duration: 1,
      title: 'Gespräch'
    },
    {
      id: 5,
      category: 'blue',
      startTime: '09:00',
      endTime: '10:00',
      hour: 9,
      duration: 1,
      title: 'Theoriestunde'
    }
  ];

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
        <Box
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

        {/* new red box to fill empty space */}
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
            title={t('students')}
            showIcon={false}
            setActiveKey={setActiveKey}
          />
        </Box>
      </Box>
    </>
  );
}
