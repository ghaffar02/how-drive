import localFont from '@/utils/themes';
import {Box, Typography, Switch} from '@mui/material';
import Image from 'next/image';
import React, {useEffect, useRef, useState} from 'react';

import pen from '@/assets/svgs/dashboard-student/pen.svg';
import {AnimatePresence, motion} from 'framer-motion';
import EmailDropdown from './EmailDropdown';
import DrivinglicenseDropdown from './DrivinglicenseDropdown';
import TheoryexamDropDown from './TheoryexamDropDown';
import AppointmentsDropDown from './AppointmentsDropDown';

export default function Header() {
  const [checked, setChecked] = React.useState(true);
  const [openDropdown, setOpenDropdown] = useState(true);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
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
  return (
    <Box
      sx={{
        width: '100%',
        border: '1px solid #fff',
        borderRadius: '18px',
        p: {xs: '16px', lg: '24px'},
        background: 'rgba(255,255,255,0.75)',
        boxShadow:
          '0px 0px 0px 1px #ffffff, 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      {/* <Typography
        sx={{
          ...localFont.inter18,
          fontFamily: '"Inter", sans-serif !important',
          fontWeight: '400',
          letterSpacing: '0.02em',
          lineHeight: '1.4em',
          textAlign: 'center'
        }}
      >
        No students have been added to the list yet!
      </Typography> */}

      {/* After data has been added */}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%'
        }}
      >
        <Box sx={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <Typography
            sx={{
              ...localFont.inter20,
              fontWeight: '500',
              letterSpacing: '0.02em'
            }}
          >
            Daniel
          </Typography>
          <Typography
            sx={{
              ...localFont.inter20,
              fontWeight: '500',
              letterSpacing: '0.02em'
            }}
          >
            Mustermann
          </Typography>

          <Box
            ref={iconRef}
            sx={{height: '20px', width: '20px', cursor: 'pointer'}}
          >
            <Image
              src={pen}
              alt="edit"
              style={{height: '100%', width: '100%'}}
              onClick={() => setOpenDropdown((prev) => !prev)}
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
                    position: 'absolute',
                    zIndex: 99,

                    left: {xs: 40, sm: 100},
                    mt: '10px',
                    width: {xs: '300px'},
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
                  {/* <AppointmentsDropDown /> */}
                  <EmailDropdown onClose={() => setOpenDropdown(false)} />
                  {/* <DrivinglicenseDropdown /> */}
                  {/* <TheoryexamDropDown text="Is the theory exam already registered? Select the day and time for it. These will be displayed to the student." /> */}
                </Box>
              )}
            </AnimatePresence>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              ...localFont.inter14,
              fontFamily: '"Inter", sans-serif !important',
              letterSpacing: '0.01em'
            }}
          >
            mustermann@gmail.com
          </Typography>
          <Typography
            sx={{
              ...localFont.inter14,
              fontFamily: '"Inter", sans-serif !important',
              letterSpacing: '0.01em'
            }}
          >
            015128745223
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: '66px',
          padding: '4px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '12px'
        }}
      >
        <Switch
          checked={checked}
          onChange={handleChange}
          slotProps={{input: {'aria-label': 'controlled'}}}
          sx={{
            alignSelf: 'flex-end',
            width: 50,
            height: 28,
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            '& .MuiSwitch-switchBase': {
              padding: '4px',
              transition: 'transform 0.5s ease',
              '&.Mui-checked': {
                transform: 'translateX(22px)',
                color: '#fff',
                '& .MuiSwitch-thumb': {
                  background: '#fff'
                },
                '& + .MuiSwitch-track': {
                  backgroundColor: 'rgb(70,17,245)',
                  opacity: 1
                }
              }
            },
            '& .MuiSwitch-thumb': {
              width: 20,
              height: 20,
              backgroundColor: 'rgb(113,128,150)',
              boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
            },
            '& .MuiSwitch-track': {
              borderRadius: '999px',
              backgroundColor: 'rgb(250,250,250)',
              border: '1px solid #718096',
              opacity: 1,
              transition: 'background-color 0.5s'
            }
          }}
        />
        <Typography
          sx={{
            ...localFont.inter16,
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          Class B
        </Typography>
      </Box>
    </Box>
  );
}
