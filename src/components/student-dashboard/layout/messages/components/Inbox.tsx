import localFont from '@/utils/themes';
import {Box, Menu, MenuItem, TextField, Typography} from '@mui/material';
import Image from 'next/image';
import React, {useEffect, useRef, useState} from 'react';

import car from '@/assets/svgs/dashboard-student/car.svg';
import printIcon from '@/assets/svgs/dashboard-student/printIcon.svg';
import deleteIcon from '@/assets/svgs/dashboard-student/deleteIcon.svg';
import sendIcon from '@/assets/svgs/dashboard-student/sendIcon.svg';
import attachIcon from '@/assets/svgs/dashboard-student/attachIcon.svg';
import dots from '@/assets/svgs/dashboard-student/dots.svg';

import backIcon from '@/assets/svgs/dashboard-student/backIcon.svg';
import deleteIcon2 from '@/assets/svgs/dashboard-student/deleteIcon2.svg';
import copyIcon from '@/assets/svgs/dashboard-student/copyIcon.svg';
import CustomCard from './DropDown';
import download from '@/assets/svgs/downloadIcon.svg';
import {useTranslations} from 'next-intl';
import {AnimatePresence, motion} from 'framer-motion';
import Notifications from './Notifications';
import back from '@/assets/svgs/dashboard-student/arrowsetting.svg';

const messages = [
  {
    sender: 'system',
    message:
      'Every challenge you face is an opportunity to grow stronger and smarter than before.'
  },
  {
    sender: 'system',
    message:
      'Success does not come overnight; it comes with consistent effort and patience every single day.'
  },
  {
    sender: 'system',
    message:
      'No matter how small the step, moving forward will always bring you closer to your goals. Every challenge you face is an opportunity to grow stronger and smarter than before.',
    file: true
  },
  {
    sender: 'user',
    message:
      'Sometimes, the most important thing you can do is simply believe in yourself when no one else does.'
  },
  {
    sender: 'user',
    message:
      'Happiness doesn’t come from what you have, but from how you choose to see the world around you.'
  },
  {
    sender: 'system',
    message:
      'Failure is not the opposite of success; it’s a part of the journey that teaches you valuable lessons. Every challenge you face is an opportunity to grow stronger and smarter than before.',
    file: true
  },
  {
    sender: 'system',
    message:
      'Your mindset determines your reality, so choose positivity even when the road feels difficult.'
  },
  {
    sender: 'user',
    message:
      'Learning a skill takes time, but each mistake you make is a step closer to mastery.',
    file: true
  },
  {
    sender: 'system',
    message:
      'When things feel overwhelming, pause, take a deep breath, and remind yourself of how far you’ve already come. Every challenge you face is an opportunity to grow stronger and smarter than before.'
  },
  {
    sender: 'user',
    message:
      'Discipline will take you further than motivation ever can, because it stays when motivation fades.'
  },
  {
    sender: 'system',
    message:
      'Opportunities rarely come announced; prepare yourself so you’re ready when they do.'
  },
  {
    sender: 'system',
    message:
      'Growth happens outside of your comfort zone, so don’t be afraid to take risks and try new things. Every challenge you face is an opportunity to grow stronger and smarter than before.'
  },
  {
    sender: 'system',
    message:
      'Every person you meet knows something you don’t — be curious, listen, and learn from them.'
  },
  {
    sender: 'system',
    message:
      'The best investment you can ever make is in yourself — your skills, your health, and your mindset.'
  },
  {
    sender: 'system',
    message:
      'You’ll never always be motivated, but you can train yourself to always stay consistent.'
  },
  {
    sender: 'system',
    message:
      'Even the longest journey begins with a single step — so take yours today without fear.'
  },
  {
    sender: 'system',
    message:
      'Hard work beats talent when talent doesn’t work hard, so never underestimate persistence.',
    file: true
  },
  {
    sender: 'system',
    message:
      'Time is the most valuable resource you have, so spend it wisely on what truly matters.'
  },
  {
    sender: 'system',
    message:
      'Gratitude turns what you already have into enough, making life more fulfilling and joyful.'
  },
  {
    sender: 'system',
    message:
      'Small habits practiced daily create big results over time — start with just one change today.'
  }
];

export default function Inbox() {
  const t = useTranslations('Dashboard.Messages.options');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const open = Boolean(anchorEl);
  const iconRef = useRef<HTMLDivElement | null>(null);
  const [openMessage, setOpenMessage] = useState(true);

  const options = [
    {
      icon: backIcon,
      title: t('reply')
    },
    {
      icon: copyIcon,
      title: t('copy')
    },
    {
      icon: deleteIcon2,
      title: t('delete')
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
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const date = new Date();
  const currentDate = date
    .toLocaleString('de-DE', {
      day: '2-digit',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    .replace('um', '');

  // File upload function, right now just opening selection
  const handleFileClick = () => {
    const input = document.getElementById('hiddenFileInput');
    if (input) {
      input.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log('Selected file:', file.name);
      // you can also store it in state or upload it directly here
    }
  };

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: openMessage ? {xs: 'block', md: 'none'} : 'none',
          background: '#faf8fc4d',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px'
        }}
      >
        <Notifications display="flex" setOpenMessage={setOpenMessage} />
      </Box>
      <Box
        sx={{
          width: '100%',
          padding: {xs: '8px', md: '24px'},
          display: openMessage ? {xs: 'none', md: 'flex'} : 'flex',
          flexDirection: 'column',
          gap: '16px',
          background: 'rgba(248,250,252,0.3)',
          border: '2px solid #fff',
          borderRadius: {xs: '24px', md: '0px 24px 24px 0px'}
          // marginBottom: {xs: '65px', md: '0px'}
        }}
      >
        <Box
          onClick={(e) => {
            e.stopPropagation();
            setOpenMessage(true);
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
        <Box
          sx={{
            width: '100%',
            padding: {xs: '16px', md: '24px'},
            border: '2px solid #fff',
            borderRadius: '18px',
            // background: '#FAF8FE',
            background: '#ffffffbf',
            display: 'flex',
            gap: '16px'
            // height: '84px'
          }}
        >
          <Box
            sx={{
              width: '52px',
              height: '52px',
              background: 'rgba(70,17,245,0.1)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Image src={car} alt="car" height={24} width={24} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <Typography
              sx={{
                ...localFont.inter18,
                fontFamily: '"Inter", sans-serif !important',
                fontWeight: '500',
                lineHeight: '1.4em'
              }}
            >
              Fahrschule Mundsburg
            </Typography>
            <Typography
              sx={{
                ...localFont.inter14,
                fontFamily: '"Inter", sans-serif !important',
                fontWeight: '400',
                lineHeight: '1.6em'
              }}
            >
              Termin deiner Theorieprüfung
            </Typography>
          </Box>
          {/* Delete and Print Icon */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              marginLeft: 'auto'
            }}
          >
            <Box
              ref={iconRef}
              sx={{
                height: '20px',
                width: '20px',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              <Image
                src={deleteIcon}
                alt="delete"
                style={{height: '100%', width: '100%'}}
                onClick={() => setOpenDropdown((prev) => !prev)}
              />

              {/* <AnimatePresence mode="wait"> */}
              {openDropdown && (
                <Box
                  //  key="dropdown"
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
                    position: 'absolute',
                    // bottom: '100%',
                    // left: {xs: '10%', sm: 'unset'},
                    right: {xs: '-10%', sm: 0},
                    mt: '8px',
                    width: {xs: '283px', sm: '300px'},
                    zIndex: 10,
                    overflow: 'visible',
                    border: '1px solid rgb(255, 255, 255)',
                    backgroundColor: '#f0f0fa99',
                    backdropFilter: 'blur(8px)',
                    boxShadow: `
    0px 0px 0px 1px rgb(255, 255, 255),
    0px 1px 0px 0px rgba(0, 0, 0, 0.25),
    0px 1px 1px 0px rgba(0, 0, 0, 0.25)
  `,
                    borderRadius: '12px',
                    transformOrigin: 'top right'
                  }}
                >
                  <CustomCard
                    text="jhuy wmqnjq qmwjhiwu  wmfbw"
                    onClose={() => setOpenDropdown(false)}
                  />
                </Box>
              )}
              {/* <AnimatePresence/> */}
            </Box>

            <Box sx={{height: '20px', width: '20px', cursor: 'pointer'}}>
              <Image
                src={printIcon}
                alt="print"
                style={{height: '100%', width: '100%'}}
              />
            </Box>
          </Box>
        </Box>
        {/* Message Box */}
        <Box
          sx={{
            width: '100%',
            background: '#ffffffbf',
            padding: {xs: '16px', md: '24px'},
            border: '2px solid #fff',
            borderRadius: '18px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            overflow: 'auto',
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {messages.map((data, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                alignItems: data.sender === 'user' ? 'flex-end' : 'flex-start'
              }}
            >
              <Box sx={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                <Typography
                  sx={{
                    ...localFont.inter14,
                    fontWeight: '300',
                    fontFamily: '"Inter", sans-serif !important'
                  }}
                >
                  {currentDate}
                </Typography>
                {/* {data.sender !== 'user' && ( */}
                <>
                  <Box
                    onClick={handleClick}
                    sx={{
                      height: '20px',
                      width: '20px',
                      cursor: 'pointer'
                    }}
                  >
                    <Image
                      src={dots}
                      alt="dots"
                      style={{height: '100%', width: '100%'}}
                    />
                  </Box>
                  <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      paper: {
                        sx: {
                          width: '150px',
                          p: '8px',
                          borderRadius: '12px',
                          border: '1px solid #fff',
                          backgroundColor: '#f0f0fa99',
                          backdropFilter: 'blur(8px)',
                          boxShadow: `
    0px 0px 0px 1px rgb(255, 255, 255),
    0px 1px 0px 0px rgba(0, 0, 0, 0.25),
    0px 1px 1px 0px rgba(0, 0, 0, 0.25)
  `,
                          '& .MuiMenuItem-root': {
                            p: 0,
                            borderRadius: '12px'
                          }
                        }
                      },
                      list: {
                        'aria-labelledby': 'long-button',
                        sx: {
                          padding: '0px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px'
                        }
                      }
                    }}
                  >
                    {options.map((option, i) => (
                      <MenuItem key={i} onClick={handleClose}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            width: '100%',
                            padding: '8px',
                            borderRadius: '8px',
                            '&:hover': {
                              backgroundColor: 'rgba(48,88,255,.1)'
                            }
                          }}
                        >
                          {/* Example: add icon or image */}
                          <Image
                            src={option.icon}
                            alt={option.title}
                            width={18}
                            height={18}
                          />
                          <Typography
                            sx={{
                              ...localFont.inter14,
                              fontFamily: '"Inter", sans-serif !important',
                              color: '#1a202c'
                            }}
                          >
                            {option.title}
                          </Typography>
                        </Box>
                      </MenuItem>
                    ))}
                  </Menu>
                </>
                {/* )} */}
              </Box>
              {/* Below is the code for file */}
              {data?.file && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    p: '12px',
                    background: data.sender === 'user' ? '#6348fa' : '#f0f0fa',
                    borderRadius:
                      data.sender === 'user'
                        ? '18px 2px 18px 18px'
                        : '2px 18px 18px 18px'
                  }}
                >
                  <Box
                    sx={{
                      height: '42px',
                      width: '42px',
                      borderRadius: '50%',
                      background: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <Image
                      src={download}
                      alt="downloadIcon"
                      height={20}
                      width={20}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        ...localFont.inter14,
                        fontFamily: '"Inter", sans-serif !important',
                        color: data.sender === 'user' ? '#fff' : '#1a202c'
                      }}
                    >
                      Registeration Driving License
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {xs: '10px', md: '11px', lg: '12px'},
                        fontFamily: '"Inter", sans-serif !important',
                        fontWeight: 300,
                        color: data.sender === 'user' ? '#fff' : '#1a202c',
                        mt: '4px'
                      }}
                    >
                      517 KB - PDF
                    </Typography>
                  </Box>
                </Box>
              )}
              {/* File code end */}
              <Box
                sx={{
                  maxWidth: '80%',
                  width: '100%',
                  padding: '12px',
                  background: data.sender === 'user' ? '#6348fa' : '#f0f0fa',
                  borderRadius:
                    data.sender === 'user'
                      ? '18px 2px 18px 18px'
                      : '2px 18px 18px 18px'
                }}
              >
                <Typography
                  sx={{
                    ...localFont.inter14,
                    fontWeight: '400',
                    fontFamily: '"Inter", sans-serif !important',
                    color: data.sender === 'user' ? '#fff' : '#1a202c'
                  }}
                >
                  {data.message}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        {/* Typing Box */}
        <Box sx={{width: '100%', height: '48px', display: 'flex', gap: '10px'}}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              padding: '8px 16px',
              border: '1px solid #fff',
              borderRadius: '18px',
              background: '#ffffffbf'
            }}
          >
            <TextField
              placeholder={t('message')}
              variant="outlined"
              sx={{
                flex: 1,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 0,
                  '& fieldset': {border: 'none'}, // remove border
                  '&:hover fieldset': {border: 'none'}, // remove on hover
                  '&.Mui-focused fieldset': {border: 'none'} // remove on focus
                },
                '& .MuiInputBase-input': {
                  height: 'auto',
                  padding: '0px'
                }
              }}
            />
            <Box
              onClick={handleFileClick}
              sx={{
                height: '24px',
                width: '24px',
                cursor: 'pointer',
                display: 'none'
              }}
            >
              <Image src={attachIcon} alt="attachIcon" height={24} width={24} />
            </Box>
            {/* Input for the file */}
            {/* <input
            type="file"
            id="hiddenFileInput"
            style={{display: 'none'}}
            onChange={handleFileChange}
          /> */}
          </Box>
          <Box
            sx={{
              height: '48px',
              maxWidth: '48px',
              minWidth: '48px',
              width: '100%',
              background: 'rgba(255,255,255,0.75)',
              borderRadius: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              border: '2px solid #fff'
            }}
          >
            <Image src={sendIcon} alt="sendIcon" height={24} width={24} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
