import {Box, TextField, Typography} from '@mui/material';
import React, {useEffect, useRef, useState} from 'react';

import Image from 'next/image';
import searchIcon from '@/assets/svgs/dashboard-student/searchIcon.svg';
import crossIcon from '@/assets/svgs/dashboard-student/crossicon.svg';

import car from '@/assets/svgs/dashboard-student/home/car.svg';
import fabian from '@/assets/svgs/steering.svg';
import logo from '@/assets/pngs/logo.avif';

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
    icon: fabian,
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
    icon: fabian,
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

import {AnimatePresence, motion} from 'framer-motion';
import localFont from '@/utils/themes';
import LeftSideDropDown from './LeftSideDropDown';

const MotionBox = motion(Box);

export default function Notifications() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [openDropdown, setOpenDropdown] = useState(false);
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
        minWidth: {md: '230px', lg: '300px'},
        maxWidth: {md: '230px', lg: '300px'},
        width: '100%',
        height: '100%',
        background: 'rgba(248,250,252,0.3)',
        padding: '24px 12px',
        border: '2px solid #fff',
        display: {xs: 'none', md: 'flex'},
        flexDirection: 'column',
        gap: '8px'
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '62px',
          display: 'flex',
          gap: '10px'
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            gap: '4px',
            padding: '10px',
            borderRadius: '999px',
            height: '38px',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.75)'
          }}
        >
          <Box sx={{height: '16px', width: '16px'}}>
            <Image
              src={searchIcon}
              alt="searchIcon"
              style={{height: '100%', width: '100%'}}
            />
          </Box>
          <TextField
            placeholder="Search"
            variant="outlined"
            sx={{
              flex: 1,
              '& .MuiOutlinedInput-root': {
                borderRadius: 0,
                '& fieldset': {border: 'none'},
                '&:hover fieldset': {border: 'none'},
                '&.Mui-focused fieldset': {border: 'none'}
              },
              '& .MuiInputBase-input': {
                height: 'auto',
                padding: '0px'
              }
            }}
          />
        </Box>
        <Box
          onClick={() => setOpenDropdown((prev) => !prev)}
          ref={iconRef}
          sx={{
            height: '36px',
            width: '36px',
            background: '#ffffffbf',
            padding: '8px',
            borderRadius: '50%',
            position: 'relative',
            overflow: 'visible !important',
            cursor: 'pointer',
            '&:hover': {
              background: 'rgba(228,228,231,0.75)'
            },
            '&:active': {
              background: 'rgba(212,212,216,0.75)'
            }
            // bgcolor: '#d80909ff'
          }}
        >
          <Image
            src={crossIcon}
            alt="addIcon"
            height={20}
            width={20}
            style={{position: 'relative'}}
          />
          <AnimatePresence>
            {openDropdown && (
              <Box
                ref={dropdownRef}
                component={motion.div}
                onClick={(e) => e.stopPropagation()}
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
                  zIndex: 999999999,
                  // left: {md: 100, lg: 130, xl: 200},
                  right: 0,
                  mt: '20px',
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
                <LeftSideDropDown />
              </Box>
            )}
          </AnimatePresence>
        </Box>
      </Box>
      {/* Below part of notification screen */}
      <MotionBox
        sx={{
          display: 'flex',

          width: '100%',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'center',
          // maxHeight: {xs: '188px', xl: '100%'},
          overflowX: 'visible',
          overflowY: 'auto',
          py: '1px',
          // p: '4px 2px',

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
                width: '99%',
                minHeight: '60px',
                // maxWidth: '309px',
                background:
                  selectedIndex === index ? 'rgba(255,255,255,1)' : '#ffffffb3',
                padding: '8px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                gap: '10px',
                cursor: 'pointer',
                overflowX: 'visible',
                boxShadow:
                  selectedIndex === index
                    ? '0px 0px 2px 0px  #3058ffff'
                    : ' 0px 0px 2px 0px rgb(212,212,216)',
                '&:hover': {
                  boxShadow: '0px 0px 2px 0px  #3058ffff',
                  background: 'rgba(255,255,255,0.85)'
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
                  height: '40px',
                  width: '40px'
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
                  <Box
                    sx={{
                      width: '100%',
                      minWidth: '24px',
                      maxWidth: '24px',
                      height: '24px'
                    }}
                  >
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
              <Box sx={{width: '100%', overflow: 'hidden'}}>
                <Box
                  sx={{
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
                      fontWeight: selectedIndex === index ? '500' : '400',
                      lineHeight: '1.6em'
                    }}
                  >
                    {item.sender}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {xs: '8.4px', md: '10px', lg: '11px'},
                      color: selectedIndex === index ? '#000' : '#718096',
                      fontFamily: '"Inter", sans-serif !important',
                      fontWeight: selectedIndex === index ? '500' : '400',
                      lineHeight: '1.6em'
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
                    fontWeight: '400',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    lineHeight: '1.6em'
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
