import {Box, Typography} from '@mui/material';
import React, {useState} from 'react';
import Header from '../components/Header';
import ExamInfo from '../components/ExamInfo';
import Process from '../components/Process';
import LessonCard from '../components/LessonCard';
import Messages from '../components/Message';
import Appointment from '../components/Appointment';
import {useTranslations} from 'next-intl';
import DetailSide from './DetailSide';
import back from '@/assets/svgs/dashboard-student/arrowsetting.svg';
import Image from 'next/image';
import localFont from '@/utils/themes';

export default function StudentDetail() {
  const t = useTranslations('SchoolDashboard.MessageLesson');

  const [openStudents, setOpenStudents] = useState(true);

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: 'calc(100vh - 194px)',
          display: openStudents ? {xs: 'block', md: 'none'} : 'none'
        }}
      >
        <DetailSide display="flex" setOpenStudents={setOpenStudents} />
      </Box>
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
          display: openStudents ? {xs: 'none', md: 'grid'} : 'grid',
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
        <Box
          onClick={(e) => {
            e.stopPropagation();
            setOpenStudents(true);
          }}
          sx={{
            minHeight: '24px',
            width: '100%',
            borderRadius: '18px',
            background: '#ffffffbf',
            display: {xs: 'flex', md: 'none'},
            p: '2px',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            gridColumn: '1 / span 2',
            boxShadow:
              '0px 0px 0px 1px #ffffff, 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)'
          }}
        >
          <Image
            src={back}
            alt="back"
            height={16}
            width={16}
            style={{transform: 'rotate(180deg)'}}
          />
          <Typography
            sx={{
              ...localFont.inter14,
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: '400'
            }}
          >
            {t('back')}
          </Typography>
        </Box>
        <Box sx={{gridRow: {xs: '2', md: '1'}, gridColumn: 'span 2'}}>
          <Header />
        </Box>
        <Box
          sx={{
            gridRow: {xs: '3', md: '2'},
            gridColumn: {xs: '1 / span 2', lg: '1 / span 1'}
          }}
        >
          <ExamInfo />
        </Box>
        <Box
          sx={{
            gridRow: {xs: '4', md: '3', lg: '2'},
            gridColumn: {xs: '1 / span 2', lg: '2 / span 1'}
          }}
        >
          <Appointment />
        </Box>
        <Box
          sx={{
            gridRow: {xs: '5', md: '4', lg: '3'},
            gridColumn: '1 / span 2',
            height: {xs: 'auto', md: '400px', lg: 'auto'}
          }}
        >
          <Process />
        </Box>
        <Box
          sx={{
            gridRow: {xs: '6', md: '5', lg: '4'},
            gridColumn: '1'
          }}
        >
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
        <Box
          sx={{
            gridRow: {xs: '6', md: '5'},
            gridColumn: {xs: '2 / span 1', lg: '1'}
          }}
        >
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
            gridRow: {xs: '7', md: '6', lg: '4 / span 2'},
            gridColumn: {xs: '1 /span 2', lg: '2'},
            height: {xs: '240px', md: '280px', lg: '292px', xl: '366px'}
          }}
        >
          <Messages />
        </Box>
      </Box>
    </>
  );
}
