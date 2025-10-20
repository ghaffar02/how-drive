import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import addIcon from '@/assets/svgs/circleadd.svg';
import profile from '@/assets/svgs/dashboard-student/profile.svg';
import React, {useEffect, useRef, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import DriveStudentsDropD from './DriveStudentsDropD';
import DrivinglicenseDropdown from './DrivinglicenseDropdown';
type Props = {
  title: string;
};

export default function DrivingStudents({title}: Props) {
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

  const cardArray = [
    {
      name: 'Daniel Mustermann 2',
      drivingClass: 'B17'
    },
    {
      name: 'Daniel Mustermann 5',
      drivingClass: 'B (Umschreiben)'
    },
    {
      name: 'Daniel Mustermann 6',
      drivingClass: 'B'
    },
    {
      name: 'Daniel Mustermann 7',
      drivingClass: 'B (Umschreiben)'
    },
    {
      name: 'Daniel Mustermann 8',
      drivingClass: 'B'
    },
    {
      name: 'Daniel Mustermann 9',
      drivingClass: 'B (Umschreiben)'
    }
  ];
  return (
    <Box
      sx={{
        width: '100%',
        height: {xs: '320px', md: '324px', lg: '329px'},
        padding: {xs: '16px 0px', lg: '24px 0px'},
        border: '1px solid #fff',
        borderRadius: '18px',
        background: '#ffffffbf',
        boxShadow:
          '0px 0px 0px 1px #fff, 0px 1px 0px 0px rgba(0,0,0,0.25), 0px 1px 1px 0px rgba(0,0,0,0.25)',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: {xs: '0px 16px', lg: '0px 24px'}
        }}
      >
        <Typography
          sx={{
            ...localFont.inter16,
            fontFamily: '"Inter", sans-serif !important',
            fontWeight: '500'
          }}
        >
          {title}
        </Typography>
        <Box
          ref={iconRef}
          onClick={() => setOpenDropdown((prev) => !prev)}
          sx={{
            height: '24px',
            width: '24px',
            cursor: 'pointer',
            position: 'relative'
          }}
        >
          <Image
            src={addIcon}
            alt="addIcon"
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
                <DriveStudentsDropD />
              </Box>
            )}
          </AnimatePresence>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          overflow: 'hidden auto',
          padding: {xs: '4px 16px', lg: '4px 24px'},
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        {cardArray.map((data, i) => (
          <Card key={i} name={data.name} drivingClass={data.drivingClass} />
        ))}
      </Box>
    </Box>
  );
}

type CardProps = {
  name: string;
  drivingClass: string;
};

function Card({name, drivingClass}: CardProps) {
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
      ref={iconRef}
      onClick={() => setOpenDropdown((prev) => !prev)}
      sx={{
        position: 'relative',
        width: '100%',
        background: '#ffffff99',
        padding: '8px',
        display: 'flex',
        gap: '8px',
        borderRadius: '8px',
        boxShadow: '0px 0px 2px 0px rgb(212,212,216)',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '0px 0px 2px 0px rgb(70,17,245)',
          background: 'rgba(255,255,255,0.85)'
        }
      }}
    >
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
            <DrivinglicenseDropdown />
          </Box>
        )}
      </AnimatePresence>
      <Box
        sx={{
          height: '40px',
          width: '40px',
          background: '#2563eb1a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(37,99,235,0.1)',
          borderRadius: '8px'
        }}
      >
        <Image src={profile} alt="profile" height={24} width={24} />
      </Box>
      <Box sx={{width: '100%'}}>
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontSize: {xs: '10.8px', md: '11.8px', lg: '12.8px'},
            fontFamily: '"Inter", sans-serif !important',
            color: '#718096',
            textAlign: 'right'
          }}
        >
          {drivingClass}
        </Typography>
      </Box>
    </Box>
  );
}
