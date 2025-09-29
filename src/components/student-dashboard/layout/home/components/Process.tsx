import React from 'react';
import {Box, Typography} from '@mui/material';
import localFont from '@/utils/themes';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';

const MotionBox = motion(Box);

export default function Process() {
  const t = useTranslations('Dashboard.home.process');
  const data = [
    {
      id: 1,
      title: t('step1'),
      status: true
    },
    {
      id: 2,
      title: t('step2'),
      status: false
    },
    {
      id: 3,
      title: t('step3'),
      status: false
    },
    {
      id: 4,
      title: t('step4'),
      status: false
    },
    {
      id: 5,
      title: t('step5'),
      status: false
    },
    {
      id: 6,
      title: t('step6'),
      status: false
    },
    {
      id: 7,
      title: t('step7'),
      status: false
    },
    {
      id: 8,
      title: t('step8'),
      status: false
    }
  ];
  return (
    <Box
      sx={{
        background: 'rgba(255,255,255,0.75)',
        padding: {xs: '16px', md: '24px'},
        border: '1px solid white',
        borderRadius: '18px',
        // maxWidth: '660px',
        width: '100%',
        height: {xs: 'auto', lg: '100%'},
        display: {xs: 'block', lg: 'flex'},
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <Typography
        sx={{
          ...localFont.inter16,
          fontFamily: '"Inter", sans-serif !important',
          color: '#2d3748',
          mb: '16px',
          fontWeight: '500'
        }}
      >
        {t('title')}
      </Typography>
      {/* Below is cards code */}
      <MotionBox
        sx={{
          maxWidth: '600px',
          width: '100%',
          margin: 'auto',
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: {
            xs: 'flex-start !important',
            md: 'center !important'
          },
          rowGap: {xs: '10px', md: '80px'},
          position: 'relative',
          overflow: 'hidden',
          padding: {xs: '15px 0px', md: '20px 0px'}
        }}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.4, delay: 0.4, ease: 'easeInOut'}}
      >
        {data.map((item, i) => (
          <Card
            key={i + 1}
            id={item.id}
            title={item.title}
            status={item.status}
          />
        ))}
        {[1, 2, 3, 4, 5].map((i, index) => (
          <React.Fragment key={i}>
            <MotionBox
              key={i}
              sx={{
                display: {xs: 'none', md: 'block'},
                position: 'absolute',
                top: 40,
                mt: i > 1 ? `${i * 61 - 59}px` : '0px',
                width: i == 1 || i == 5 ? '70%' : '90%',
                right: i == 1 ? 27 : 'initial',
                left: i == 5 ? 30 : 'initial',
                height: '1px',
                background: '#14b8a6'
              }}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.4, delay: 0.4, ease: 'easeInOut'}}
            />
            <MotionBox
              key={index}
              sx={{
                display: i == 5 ? 'none' : {xs: 'none', md: 'block'},
                position: 'absolute',
                width: i == 1 ? '64px' : '63px',
                height: i == 1 ? '64px' : '62px',
                mt: i > 1 ? `${i * 61 - 59}px` : '0px',
                top: 40,
                zIndex: 99999,
                borderRadius: '50%',
                background:
                  i % 2 === 0
                    ? 'conic-gradient(transparent 0deg 180deg, #14b8a6 180deg 360deg)'
                    : 'conic-gradient(#14b8a6 0deg 180deg, transparent 180deg 360deg)',
                mask: 'radial-gradient(farthest-side, transparent calc(100% - 1px), #000 0)',
                WebkitMask:
                  'radial-gradient(farthest-side, transparent calc(100% - 1px), #000 0)',
                ...(i === 1 || i === 3 || i === 5
                  ? {right: 0}
                  : i === 2 || i === 4
                    ? {left: 0}
                    : {})
              }}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.4, delay: 0.4, ease: 'easeInOut'}}
            />
          </React.Fragment>
        ))}
      </MotionBox>
    </Box>
  );
}

type CardProps = {
  id: number;
  title: string;
  status?: boolean;
};

function Card({id, title, status}: CardProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 16px 6px 6px',
        background: status
          ? 'linear-gradient(to left, rgba(165,243,252,1), rgba(94,234,212,1))'
          : 'linear-gradient(to right, rgba(248,250,252,1), rgba(255,255,255,1))',
        borderRadius: '999px',
        cursor: 'pointer',
        position: 'relative',
        zIndex: 100
      }}
    >
      <Box
        sx={{
          width: '30px',
          height: '30px',
          background: status ? '#fff' : '#71717a',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter14,
            color: status ? '#0d9488' : '#fff',
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          {id}
        </Typography>
      </Box>
      <Typography
        sx={{
          ...localFont.inter14,
          color: status ? '#0d9488' : '#4a5568',
          fontFamily: '"Inter", sans-serif !important'
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
