'use client';

import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import React, {useState, useEffect, useRef} from 'react';
import {useTranslations} from 'next-intl';
import {AnimatePresence, motion} from 'framer-motion';

import localFont from '@/utils/themes';
import DrivinglicenseDropdown from './DrivinglicenseDropdown';

// Images
import Building from '@/assets/svgs/dashboard-student/home/building.svg';
import Pen from '@/assets/svgs/dashboard-student/pen.svg';
import Grade from '@/assets/svgs/dashboard-student/home/grade.svg';
import Steering from '@/assets/svgs/dashboard-student/home/steering.svg';
import Building1 from '@/assets/svgs/dashboard-student/home/smallBuilding.svg';
import Grade1 from '@/assets/svgs/dashboard-student/home/smallGrade.svg';
import Steering1 from '@/assets/svgs/dashboard-student/home/smallSteering.svg';
import TheoryexamDropDown from './TheoryexamDropDown';
import DriveMessagesDropD from './DrivinglicenseDropdown';

const data = [
  {
    title1: 'Führerscheinstelle',
    title2: 'Nicht angemeldet',
    title3: 'Angemeldet',
    status: true,
    imgSrc: Building.src,
    imgSrc1: Building1.src,
    bgColor: 'rgba(235,0,255,0.1)',
    id: 1
    // card: <DrivinglicenseDropdown />
  },
  {
    title1: 'Theorieprüfung',
    title2: 'Nicht angemeldet',
    title3: '25.07.2025',
    status: false,
    imgSrc: Grade.src,
    imgSrc1: Grade1.src,
    bgColor: '#00bcd11a',
    id: 2
    // card: (
    //   <TheoryexamDropDown text="Is the theory exam already registered? Select the day and time for it. These will be displayed to the student." />
    // )
  },
  {
    title1: 'Praktische Prüfung',
    title2: 'Nicht angemeldet',
    title3: '25.07.2025',
    status: false,
    imgSrc: Steering.src,
    imgSrc1: Steering1.src,
    bgColor: '#1270ff1a',
    id: 3
    // card: (
    //   <TheoryexamDropDown text="Is the theory exam already registered? Select the day and time for it. These will be displayed to the student." />
    // )
  }
];
export default function ExamInfo() {
  const t = useTranslations('SchoolDashboard.header');
  const titles = t.raw('data');

  const updatedData = data.map((item, index) => ({
    ...item,
    ...titles[index]
  }));
  console.log('updated data array: ', updatedData);

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        background: 'rgba(255,255,255,0.75)',
        padding: {xs: '16px', md: '8px'},
        borderRadius: '18px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: {xs: '8px', lg: '10px'},
        border: '1px solid #fff',
        boxShadow:
          '0px 0px 0px 1px #ffffff, 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)'
      }}
    >
      {updatedData.map((item, i) => (
        <Card key={i} {...item} />
      ))}
    </Box>
  );
}

type CardProps = {
  title1: string;
  title2: string;
  title3: string;
  tooltip: string;
  status?: boolean;
  imgSrc: string;
  imgSrc1: string;
  bgColor: string;
  id: number;
  // card: React.ReactNode;
};

function Card({
  title1,
  title2,
  title3,
  status,
  imgSrc,
  imgSrc1,
  bgColor,
  id,
  // card,
  tooltip
}: CardProps) {
  const [show, setShow] = useState(status);
  const [hover, setHover] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        dropdownRef.current.contains(event.target as Node)
      )
        return;
      if (iconRef.current && iconRef.current.contains(event.target as Node))
        return;

      setOpenDropdown(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          width: '100%',
          padding: {xs: '0px', md: '3px 16px'}
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: {xs: '4px', lg: '16px'}
          }}
        >
          <Box
            sx={{
              height: {xs: '24px', sm: '32px'},
              width: {xs: '24px', sm: '32px'},
              borderRadius: '50%',
              background: bgColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box
              sx={{
                display: {
                  xs: 'none',
                  sm: 'block'
                },
                height: '20px',
                width: '20px'
              }}
            >
              <Image src={imgSrc} alt="icon" width={20} height={20} />
            </Box>
            <Box
              sx={{
                display: {xs: 'block', sm: 'none'},
                height: '16px',
                width: '16px'
              }}
            >
              <Image src={imgSrc1} alt="icon" width={16} height={16} />
            </Box>
          </Box>

          <Typography
            sx={{
              fontSize: {xs: '12px', md: '14px', lg: '16px'},
              color: '#3f3f46',
              fontWeight: '300',
              lineHeight: '1.5em',
              fontFamily: '"Inter", sans-serif !important'
            }}
          >
            {title1}
          </Typography>
        </Box>

        {/* Status & Edit */}
        <Box
          sx={{
            pl: {xs: '16px', lg: '48px'},
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: {xs: '4px', sm: '16px'},
            mt: {xs: '0px', sm: '10px'},
            width: '100%',
            position: 'relative',
            cursor: 'pointer'
          }}
          ref={iconRef}
          onClick={(e) => {
            e.stopPropagation();
            setOpenDropdown((prev) => !prev);
          }}
        >
          <Typography
            sx={{
              fontSize: {xs: '12px', md: '14px', lg: '16px'},
              color: show ? '#07a66b' : '#d93a32',
              fontWeight: '600',
              cursor: 'pointer',
              lineHeight: '1.4em',
              fontFamily: '"Inter", sans-serif !important'
            }}
          >
            {show ? title3 : title2}
          </Typography>

          <Box
            sx={{
              height: '20px',
              width: '20px',
              cursor: 'pointer',
              display: id === 3 ? 'block' : 'none'
            }}
          >
            <Image
              src={Pen}
              alt="edit"
              style={{height: '100%', width: '100%'}}
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
                    zIndex: 9999,

                    left: {xs: 40, sm: 100},
                    mt: '10px',
                    width: {xs: '304px'},
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
                  // onClick={(e) => e.stopPropagation()}
                >
                  {id === 1 ? (
                    <DrivinglicenseDropdown text={tooltip} />
                  ) : (
                    <TheoryexamDropDown text={tooltip} />
                  )}
                </Box>
              )}
            </AnimatePresence>
          </Box>
        </Box>
      </Box>

      {/* Divider */}
      {id < 3 && (
        <Box
          sx={{
            width: '100%',
            height: '1px',
            backgroundImage:
              'linear-gradient(to right, rgba(245,245,245,0.6), rgba(203,203,203,1), rgba(245,245,245,0.6))'
          }}
        />
      )}
    </>
  );
}
