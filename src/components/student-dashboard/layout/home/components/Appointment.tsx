import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import {useTranslations} from 'next-intl';

import Clock from '@/assets/svgs/dashboard-student/home/clock.svg';
import Location from '@/assets/svgs/dashboard-student/home/location.svg';

import {motion} from 'framer-motion';

const MotionBox = motion(Box);

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
        height: '100%',
        border: '1px solid #fff',
        boxShadow:
          '0px 0px 0px 1px #ffffff, 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)',
        overflow: 'hidden'
        // height: {xs: '224px', sm: '252px', md: 'auto', lg: '100%'}
      }}
    >
      <Typography
        sx={{
          ...localFont.inter16,
          fontWeight: '500',
          fontFamily: '"Inter", sans-serif !important',
          lineHeight: '1.5em'
        }}
      >
        {t('title1')}
      </Typography>
      <MotionBox
        sx={{
          background: '#fff',
          padding: '12px',
          // border: '1px solid #a1a1aa',
          boxShadow: '0px 0px 2px 0px #d4d4d8',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.4, delay: 0.4, ease: 'easeInOut'}}
      >
        <Box sx={{display: 'flex', gap: '6px', alignItems: 'flex-end'}}>
          <Typography
            sx={{
              ...localFont.h2,
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: '200',
              lineHeight: '1em'
            }}
          >
            {show && 25}
          </Typography>
          <Typography
            sx={{
              ...localFont.inter24,
              color: '#3f3f46',
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: '200',
              lineHeight: '1em'
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
            fontWeight: '300',
            lineHeight: '1.5em'
          }}
        >
          {show ? `${t('exam')}` : '--'}
        </Typography>
      </MotionBox>
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
                fontFamily: '"Inter", sans-serif !important',
                lineHeight: '1.6em',
                fontWeight: '300'
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
