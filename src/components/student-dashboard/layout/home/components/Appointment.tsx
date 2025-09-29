import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import {useTranslations} from 'next-intl';

import Clock from '@/assets/svgs/dashboard-student/home/clock.svg';
import Location from '@/assets/svgs/dashboard-student/home/location.svg';

export default function Appointment() {
  const t = useTranslations('Dashboard.home.appointment');
  const show = true;
  const data = [
    {imgSrc: Clock, des: '10:15 am'},
    {imgSrc: Location, des: 'Berliner Straße 1'}
  ];
  return (
    <Box
      sx={{
        background: '#ffffffbf',
        padding: {xs: '16px', md: '24px'},
        // maxWidth: {xs: '400px', md: '320px'},
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '18px',
        gap: {xs: '6px', sm: '15px'},
        height: {xs: '224px', sm: '252px', md: 'auto', xl: '100%'}
      }}
    >
      <Typography
        sx={{
          ...localFont.inter16,
          fontWeight: '500',
          fontFamily: '"Inter", sans-serif !important'
        }}
      >
        {t('title1')}
      </Typography>
      <Box
        sx={{
          background: '#fff',
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
            {show && 25}
          </Typography>
          <Typography
            sx={{
              ...localFont.inter24,
              color: '#3f3f46',
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: '200'
            }}
          >
            {show ? 'July' : `${t('title2')}`}
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
          {show ? 'Theory exam' : '--'}
        </Typography>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
        {data.map((item, i) => (
          <Box key={i} sx={{display: 'flex', gap: '10px'}}>
            <Box sx={{height: '20px', width: '20px'}}>
              <Image
                src={item.imgSrc}
                alt="icon"
                style={{height: '100%', width: '100%'}}
              />
            </Box>
            <Typography
              sx={{
                ...localFont.inter14,
                color: '#71717a',
                fontFamily: '"Inter", sans-serif !important'
              }}
            >
              {show ? item.des : '--'}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
