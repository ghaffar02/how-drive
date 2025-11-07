import {Box, TextField, Typography} from '@mui/material';
import React, {useEffect, useRef, useState} from 'react';

import Image from 'next/image';
import searchIcon from '@/assets/svgs/dashboard-student/searchIcon.svg';
import crossIcon from '@/assets/svgs/dashboard-student/crossicon.svg';
import {AnimatePresence, motion} from 'framer-motion';
import localFont from '@/utils/themes';
// import LeftSideDropDown from '../components/LeftSideDropDown';
// import AppointmentsDropDown from '../components/AppointmentsDropDown';
import steering from '@/assets/svgs/steering.svg';
import LeftformDropDown from '../components/LeftformDropDown';
import purpleSteering from '@/assets/svgs/purpleSteering.svg';
import {useTranslations} from 'next-intl';

const MotionBox = motion(Box);
const emails = [
  {
    subject: 'Tom Schwarz 1',
    class: 'B',
    isRequest: true
  },
  {
    subject: 'Tom Schwarz 2',
    class: 'B17',
    isRequest: true
  },
  {
    subject: 'Tom Schwarz 3',
    class: 'B (Umschreiben)',
    isRequest: true
  },
  {
    subject: 'Tom Schwarz 4',
    class: 'B'
  },
  {
    subject: 'Tom Schwarz 5',
    class: 'B17'
  },
  {
    subject: 'Tom Schwarz 6',
    class: 'B (Umschreiben)'
  },
  {
    subject: 'Tom Schwarz 7',
    class: 'B'
  },
  {
    subject: 'Tom Schwarz 8',
    class: 'B17'
  },
  {
    subject: 'Tom Schwarz 9',
    class: 'B (Umschreiben)'
  },
  {
    subject: 'Tom Schwarz 10',
    class: 'B'
  },
  {
    subject: 'Tom Schwarz 11',
    class: 'B17'
  },
  {
    subject: 'Tom Schwarz 12',
    class: 'B (Umschreiben)'
  },
  {
    subject: 'Tom Schwarz 13',
    class: 'B'
  },
  {
    subject: 'Tom Schwarz 14',
    class: 'B17'
  },
  {
    subject: 'Tom Schwarz 15',
    class: 'B (Umschreiben)'
  }
];

export default function DetailSide() {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);
  // const [value, setValue] = useState('active');

  const [activeIndex, setActiveIndex] = useState<number | 0>(0);
  const t = useTranslations('SchoolDashboard.leftSideTab');
  const textTab = t.raw('textTab');
  const handleClickTab = (i: number) => {
    setActiveIndex(i);
  };
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

  // const handleClick = (i: number) => {
  //   setActiveIndexes((prev) =>
  //     prev.includes(i) ? prev.filter((idx) => idx !== i) : [...prev, i]
  //   );
  // };
  const handleClick = (i: number) => {
    setActiveIndexes((prev) => {
      if (activeIndex === 0) {
        return prev.includes(i)
          ? prev.filter((idx) => idx !== i)
          : [...prev, i];
      } else if (activeIndex === 1) {
        return [i];
      }
      return prev;
    });
  };

  return (
    <Box
      sx={{
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
      {/* search bar */}
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
            background: '#ffffffbf',
            boxShadow: '0px 0px 2px 0px #D4D4D8'
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
            placeholder={t('search')}
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
          ref={iconRef}
          onClick={() => setOpenDropdown((prev) => !prev)}
          sx={{
            height: '36px',
            width: '36px',
            background: '#ffffffbf',
            padding: '8px',
            borderRadius: '50%',
            position: 'relative',
            cursor: 'pointer',
            overflow: 'visible !important',
            '&:hover': {
              bgcolor: '#E4E4E7'
            }
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
                <LeftformDropDown />
                {/* <AppointmentsDropDown /> */}
              </Box>
            )}
          </AnimatePresence>
        </Box>
      </Box>
      {/* Below part of notification screen */}

      {/* tab */}
      <Box
        sx={{
          // bgcolor: '#000',
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column'},
          gap: '20px',
          alignItems: 'end',
          justifyContent: 'end',
          mt: '16px'
        }}
      >
        <Box
          sx={{
            width: '100%',
            // maxWidth: '828px',
            bgcolor: '#ffffff99',
            display: 'flex',
            p: '4px',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0px 0px 2px 0px #D4D4D8',
            borderRadius: '999px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Moving Highlight */}
          <Box
            sx={{
              position: 'absolute',
              top: 4,
              bottom: 4,
              left: 4,
              width: `calc((100% - 8px) / 2)`,
              borderRadius: '999px',
              background: '#4611F5',
              // boxShadow: '0px 2px 6px 0px #fe0909ff',
              transition: 'all 0.4s ease',
              transform: `translateX(${activeIndex * 100}%)`, // move on X
              zIndex: 1
            }}
          />

          {textTab.map((item: string, i: number) => (
            <Box
              key={i}
              onClick={() => handleClickTab(i)}
              sx={{
                flex: 1,
                textAlign: 'center',
                p: '4px 8px',
                cursor: 'pointer',
                zIndex: 2
              }}
            >
              <Typography
                sx={{
                  lineHeight: '1.6em',
                  fontSize: {xs: '12px', md: '13px', lg: '14px'},
                  color: activeIndex === i ? '#ffff' : '#4A5568',
                  fontWeight: activeIndex === i ? '400' : '400',
                  transition: 'all 0.3s ease-in-out',
                  fontFamily: '"Inter", sans-serif !important'
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Below is the part which we will show when we have the data */}
      <MotionBox
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'center',
          // maxHeight: {xs: '188px', xl: '100%'},
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
        {emails.map((items, i) => {
          return (
            <Box
              key={i}
              onClick={() => handleClick(i)}
              sx={{
                width: '100%',
                height: '60px',
                background: activeIndexes.includes(i)
                  ? '#ffffffd9'
                  : '#ffffff99',
                padding: '8px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
                cursor: 'pointer',
                // boxShadow: items.isRequest
                //   ? '0px 0px 2px 0px  #f97316'
                //   : activeIndexes.includes(i)
                //     ? '0px 0px 2px 0px #4611f5'
                //     : '0px 0px 2px 0px #D4D4D8',
                boxShadow: activeIndexes.includes(i)
                  ? '0px 0px 2px 0px #4611f5'
                  : '0px 0px 2px 0px #D4D4D8',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: activeIndexes.includes(i)
                    ? '0px 0px 2px 0px #4611f5'
                    : '0px 0px 2px 0px #4611f5',
                  background: 'rgba(255,255,255,0.85)'
                },
                '&:hover .hoverArrow': {
                  opacity: 1,
                  transform: 'translateX(1px)'
                  // transition: 'transform 0.3s ease-in-out'
                }
              }}
            >
              <Box
                sx={{
                  height: '40px',
                  minWidth: '40px',
                  background: activeIndexes.includes(i)
                    ? '#4611f51a'
                    : '#06b6d41a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  // border: '1px solid rgba(37,99,235,0.1)',
                  borderRadius: '8px'
                }}
              >
                <Image
                  src={activeIndexes.includes(i) ? purpleSteering : steering}
                  alt="steering"
                  height={24}
                  width={24}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  textAlign: 'center',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  width: '100%'
                }}
              >
                <Typography
                  sx={{
                    ...localFont.inter14,
                    textAlign: 'start',
                    color: activeIndexes.includes(i) ? '#4611f5' : '#4A5568',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: activeIndexes.includes(i) ? '500' : '400'
                  }}
                >
                  {items.subject}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: '10.8px', md: '11.8px', lg: '12.8px'},
                    textAlign: 'end',

                    color: activeIndexes.includes(i) ? '#4611f5' : '#4A5568',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: activeIndexes.includes(i) ? '500' : '400'
                  }}
                >
                  {items.class}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </MotionBox>
    </Box>
  );
}
