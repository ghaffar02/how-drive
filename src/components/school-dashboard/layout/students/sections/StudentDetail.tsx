import {Box} from '@mui/material';
import React, {useEffect, useRef, useState} from 'react';
import Header from '../components/Header';
import ExamInfo from '../components/ExamInfo';
import Process from '../components/Process';
import LessonCard from '../components/LessonCard';
import Messages from '../components/Message';
import Appointment from '../components/Appointment';
import {useTranslations} from 'next-intl';
import MainDropdown from '../components/MainDropdown';
export default function StudentDetail() {
  const t = useTranslations('SchoolDashboard.MessageLesson');

  const [openDropdown, setOpenDropdown] = useState(true);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        dropdownRef.current.contains(event.target as Node)
      ) {
        return;
      }
      if (iconRef.current && iconRef.current.contains(event.target as Node)) {
        return;
      }

      setOpenDropdown(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        height: {xs: '100%', md: '100%'},
        padding: {xs: '16px', md: '24px'},
        background: 'rgba(248,250,252,0.3)',
        backdropFilter: 'blur(15px)',
        boxShadow: `0px 0px 0px 1px rgb(255, 255, 255, rgb(255, 255, 255)), 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)`,
        border: '2px solid #fff',
        borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
        display: 'grid',
        gridTemplateRows: 'auto',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 3,
        overflow: 'scroll',
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      <Box sx={{gridRow: '1', gridColumn: 'span 2'}}>
        <Header />
      </Box>
      <Box
        sx={{
          gridRow: '2',
          gridColumn: {xs: '1 / span 2', lg: '1 / span 1'}
        }}
      >
        <ExamInfo />
      </Box>
      <Box
        sx={{
          gridRow: {xs: '3', lg: '2'},
          gridColumn: {xs: '1 / span 2', lg: '2 / span 1'}
        }}
      >
        <Appointment />
      </Box>
      <Box sx={{gridRow: {xs: '4', lg: '3'}, gridColumn: '1 / span 2'}}>
        <Process />
      </Box>
      <Box sx={{gridRow: {xs: '5', lg: '4'}, gridColumn: '1'}}>
        <LessonCard
          isbool={true}
          Label1={t('lable1')}
          Label2={t('lable2')}
          title={t('card1Title')}
          completedHours={11}
          totalHours={14}
          progressValue={80}
        />
      </Box>
      <Box sx={{gridRow: '5', gridColumn: {xs: '2 / span 1', lg: '1'}}}>
        <LessonCard
          Label1={t('lable3')}
          Label2={t('lable4')}
          title={t('card2Title')}
          completedHours={11}
          totalHours={14}
          progressValue={80}
        />
      </Box>
      <Box
        sx={{
          gridRow: {xs: '6', lg: '4 / span 2'},
          gridColumn: {xs: '1 /span 2', lg: '2'}
        }}
      >
        <Messages />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: openDropdown ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {openDropdown && (
          <Box
            sx={{
              position: 'absolute',
              p: {xs: '48px 24px'},
              right: '2.5%',
              top: 150,
              width: '95%',
              margin: 'auto',

              zIndex: 178879,
              overflow: 'visible',
              border: '1px solid #ffffffff',
              backgroundColor: '#fff',
              // bgcolor: 'red',
              backdropFilter: 'blur(10px)',
              boxShadow: `
      0px 0px 0px 2px rgba(0, 0, 0, 0.02),
      0px 2px 9px 0px rgba(0, 0, 0, 0.09),
      0px 10px 42px 0px rgba(0, 0, 0, 0.4)
       
    `,
              borderRadius: '18px',
              transformOrigin: ' bottom'
            }}
          >
            <MainDropdown />
          </Box>
        )}
      </Box>
    </Box>
  );
}
