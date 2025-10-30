// import {useTranslations} from 'next-intl';
import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import Image from 'next/image';
// import React, {useState} from 'react';
import React, {useEffect, useRef, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import car from '@/assets/svgs/dashboard-student/home/car.svg';
import steering from '@/assets/svgs/steering.svg';
import logo from '@/assets/pngs/logo.avif';
import {useTranslations} from 'next-intl';
import addIcon from '@/assets/svgs/circleadd.svg';

import DriveMessagesDropD from './DriveMessagesDropD';

const MotionBox = motion(Box);

export default function Messages() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);
  const t = useTranslations('SchoolDashboard.MessageLesson');
  const emails = [
    {
      icon: car,
      sender: 'Fahrschule',
      date: '25.05.2025',
      subject: 'Das ist das Thema der Email.',
      bgcolor: '#450ff51a'
    },
    {
      icon: steering,
      sender: 'Fabian',
      date: '01.06.2025',
      subject: 'Das ist das Thema der Email.',
      bgcolor: '#06b6d41a'
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
    },
    {
      icon: car,
      sender: 'Fahrschule',
      date: '25.05.2025',
      subject: 'Das ist das Thema der Email.',
      bgcolor: '#450ff51a'
    },
    {
      icon: steering,
      sender: 'Fabian',
      date: '01.06.2025',
      subject: 'Das ist das Thema der Email.',
      bgcolor: '#06b6d41a'
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
        background: '#ffffffbf',
        padding: {xs: '16px', lg: '24px'},
        width: '100%',
        height: {xs: '320px', md: '324px', lg: '329px'},
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

        <Box
          onClick={() => setOpenDropdown((prev) => !prev)}
          ref={iconRef}
          sx={{
            height: '20px',
            width: '20px',
            cursor: 'pointer',
            position: 'relative'
          }}
        >
          <Image
            src={addIcon}
            alt="add"
            style={{height: '100%', width: '100%'}}
          />
          <AnimatePresence>
            {openDropdown && (
              <Box
                ref={dropdownRef}
                component={motion.div}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  y: -20,
                  x: 20,
                  originX: 1,
                  originY: 0
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  x: 0,
                  originX: 1,
                  originY: 0
                }}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                  // dur: 1,
                  y: -20,
                  x: 20,
                  originX: 1,
                  originY: 0
                }}
                transition={{
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 300,
                  damping: 25
                }}
                sx={{
                  // bgcolor: '#000',
                  position: 'absolute',
                  zIndex: 99999,
                  top: '100%',
                  right: 0,
                  mt: '12px',
                  width: {xs: '300px'},
                  overflow: 'visible',
                  border: '1px solid rgb(255, 255, 255)',
                  backgroundColor: '#f0f0fa99',
                  backdropFilter: 'blur(8px)',
                  // borderRadius: "12px",
                  boxShadow: `
                      0px 0px 0px 1px rgb(255, 255, 255),
                      0px 1px 0px 0px rgba(0, 0, 0, 0.25),
                      0px 1px 1px 0px rgba(0, 0, 0, 0.25)
                    `,
                  borderRadius: '12px',
                  transformOrigin: 'top right'
                }}
              >
                <DriveMessagesDropD />
              </Box>
            )}
          </AnimatePresence>
        </Box>
      </Box>
      <MotionBox
        sx={{
          display: 'flex',

          width: '100%',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'center',

          //   maxHeight: {xs: '188px', xl: '100%'},
          overflow: 'hidden auto',
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
                overflow: 'visible',
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
