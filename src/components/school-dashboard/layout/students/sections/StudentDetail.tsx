import {Box} from '@mui/material';
import React from 'react';
import Header from '../components/Header';
import ExamInfo from '../components/ExamInfo';
import Process from '../components/Process';
import LessonCard from '../components/LessonCard';
import Messages from '../components/Message';
import Appointment from '../components/Appointment';
import {useTranslations} from 'next-intl';

export default function StudentDetail() {
  const t = useTranslations('SchoolDashboard.MessageLesson');
  return (
    <Box
      sx={{
        width: '100%',
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
          title={t('card1Title')}
          completedHours={11}
          totalHours={14}
          progressValue={80}
        />
      </Box>
      <Box sx={{gridRow: '5', gridColumn: {xs: '2 / span 1', lg: '1'}}}>
        <LessonCard
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
    </Box>
  );
}
