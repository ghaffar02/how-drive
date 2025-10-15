// import {useTranslations} from 'next-intl';
import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import React, {useState} from 'react';

import car from '@/assets/svgs/dashboard-student/home/car.svg';
import fabian from '@/assets/svgs/dashboard-student/home/fabian.svg';
import logo from '@/assets/pngs/logo.avif';
import {useTranslations} from 'next-intl';
import addIcon from '@/assets/svgs/circleadd.svg';

import {motion} from 'framer-motion';

const MotionBox = motion(Box);

export default function Messages() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const t = useTranslations('Dashboard.home.MessageLesson');
  const emails = [
    {
      icon: car,
      sender: 'Fahrschule',
      date: '25.05.2025',
      subject: 'Das ist das Thema der Email.',
      bgcolor: '#450ff51a'
    },
    {
      icon: fabian,
      sender: 'Fabian',
      date: '01.06.2025',
      subject: 'Das ist das Thema der Email.',
      bgcolor: '#ffa60026'
    },
    {
      icon: car,
      sender: 'Fahrschule',
      date: '27.05.2025',
      subject: 'Termin deiner Theorieprüfung',
      bgcolor: 'rgba(70, 17, 245, 0.1)'
    },
    {
      icon: logo,
      sender: 'WieFührerschein',
      date: '20.05.2025',
      subject: 'Das ist das Thema der Email.',
      bgcolor: 'rgba(234, 0, 255, 0.08)'
    }
  ];

  return (
    <Box
      sx={{
        background: '#ffffffbf',
        padding: {xs: '16px', md: '24px'},
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '18px',
        gap: {xs: '6px', sm: '8px'},
        // height: {xs: 'auto', lg: '100%'},
        border: '1px solid #fff',
        boxShadow:
          '0px 0px 0px 1px #ffffff, 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)'
      }}
    >
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography
          sx={{
            ...localFont.inter16,
            fontWeight: '500',
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          {t('Messages')}
        </Typography>
        <Box sx={{height: '20px', width: '20px', cursor: 'pointer'}}>
          <Image
            src={addIcon}
            alt="add"
            style={{height: '100%', width: '100%'}}
          />
        </Box>
      </Box>
      <MotionBox
        sx={{
          display: 'flex',

          width: '100%',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'center',

          maxHeight: {xs: '188px', xl: '100%'},
          overflow: 'auto',
          p: '4px 2px',

          '&::-webkit-scrollbar': {
            display: 'none'
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.4, delay: 0.4, ease: 'easeInOut'}}
      >
        {emails.map((item, index) => {
          return (
            <Box
              onClick={() => setSelectedIndex(index)}
              key={index}
              sx={{
                width: '100%',
                // maxWidth: '309px',
                background: '#fff',
                padding: '8px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
                cursor: 'pointer',
                // fontWeight: selectedIndex === index ? '700' : '400'

                boxShadow:
                  selectedIndex === index
                    ? '0px 0px 2px 0px  #3058ffff'
                    : ' 0px 0px 2px 0px #d4d4d8ff',
                '&:hover': {
                  boxShadow: '0px 0px 2px 0px  #3058ffff'
                }

                //
              }}
            >
              <Box
                sx={{
                  backgroundColor: item.bgcolor,
                  px: '8px',
                  borderRadius: '8px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '40px'
                }}
              >
                <Box
                  sx={{
                    borderRadius: '999px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Box sx={{width: '100%', maxWidth: '30px', height: '30px'}}>
                    <Image
                      src={item.icon}
                      alt="car"
                      style={{
                        width: '100%',
                        height: '100%',
                        textAlign: 'center',
                        objectFit: 'contain'
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box width="100%">
                <Box
                  sx={{
                    // bgcolor: '#888',
                    width: '100%',
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Typography
                    sx={{
                      ...localFont.inter14,
                      // fontWeight: selectedIndex === index ? '700' : '400'
                      color: selectedIndex === index ? '#000' : '#718096',
                      fontFamily: '"Inter", sans-serif !important',
                      fontWeight: selectedIndex === index ? '500' : '400'
                    }}
                  >
                    {item.sender}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {xs: '8.4px', md: '10px', lg: '11px'},
                      color: selectedIndex === index ? '#000' : '#718096',
                      fontFamily: '"Inter", sans-serif !important',
                      fontWeight: selectedIndex === index ? '500' : '400'
                    }}
                  >
                    {item.date}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    // ...localFont.i,
                    fontSize: {xs: '9.6px', md: '11px', lg: '13px'},
                    color: '#718096',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400'
                  }}
                >
                  {item.subject}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </MotionBox>
    </Box>
  );
}
