import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import React from 'react';
// import {useTranslations} from 'next-intl';

import car from '@/assets/svgs/dashboard-student/home/car.svg';
import fabian from '@/assets/svgs/dashboard-student/home/fabian.svg';
import logo from '@/assets/pngs/logo.avif';

export default function Messages() {
  // const t = useTranslations('Dashboard.home.appointment');
  // const show = true;

  const emails = [
    {
      icon: fabian, // yahan ap apna icon ya icon component rakh sakte hain
      sender: 'Fabian',
      date: '01.06.2025',
      subject: 'Das ist das Thema der Email.'
    },
    {
      icon: car,
      sender: 'Fahrschule',
      date: '27.05.2025',
      subject: 'Termin deiner Theorieprüfung'
    },
    {
      icon: car,
      sender: 'Fahrschule',
      date: '25.05.2025',
      subject: 'Das ist das Thema der Email.'
    },
    {
      icon: logo,
      sender: 'WieFührerschein',
      date: '20.05.2025',
      subject: 'Das ist das Thema der Email.'
    }
  ];

  return (
    <Box
      sx={{
        background: '#ffffffbf',
        padding: {xs: '16px', md: '24px'},
        maxWidth: {xs: '400px', md: '320px'},
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '18px',
        gap: {xs: '6px', sm: '15px'}
      }}
    >
      <Typography
        sx={{
          ...localFont.inter16,
          fontWeight: '500',
          fontFamily: '"Inter", sans-serif !important'
        }}
      >
        Messages
        {/* {t('title1')} */}
      </Typography>
      <Box
        sx={{
          background: '#c67171ff',
          padding: '12px',
          border: '1px solid #a1a1aa',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <Box sx={{display: 'flex', gap: '6px', alignItems: 'flex-end'}}>
          <Typography
            sx={{
              ...localFont.h2,
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: '200'
            }}
          >
            {/* {show && 25} */}
          </Typography>
          <Typography
            sx={{
              ...localFont.inter24,
              color: '#3f3f46',
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: '200'
            }}
          >
            {/* {show ? 'July' : `${t('title2')}`} */}
          </Typography>
        </Box>
        <Box
          sx={{
            width: {xs: '100%'},
            height: {xs: '1px'},
            backgroundImage: {
              xs: 'linear-gradient(to right, rgba(245,245,245,0.6), rgba(203,203,203,1), rgba(245,245,245,0.6))'
            },
            minWidth: {md: '1px'},
            minHeight: {xs: '1px'}
          }}
        />
        <Typography
          sx={{
            ...localFont.inter18,
            color: '#71717A',
            fontFamily: '"Inter", sans-serif !important',
            fontWeight: '300'
          }}
        >
          {/* {show ? 'Theory exam' : '--'} */}
        </Typography>
      </Box>
    </Box>
  );
}
