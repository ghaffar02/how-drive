import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import React, {useEffect, useRef, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import addIcon from '@/assets/svgs/circleadd.svg';
import AppointmentsDropDown from './AppointmentsDropDown';
import EditappointmentDropDown from './EditappointmentDropDown';
import {useTranslations} from 'next-intl';

export default function Appointment() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);
  const t = useTranslations('SchoolDashboard.studentHeader');

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;

      // Ignore clicks on MUI portal elements (Select menu, Popover, Modal, etc.)
      if (
        target.closest('.MuiPopover-root') ||
        target.closest('.MuiMenu-root') ||
        target.closest('.MuiModal-root') ||
        target.closest('.MuiPickersPopper-root')
      ) {
        return;
      }

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
      id: 1,
      barColor: '#9333ea',
      name: 'Besprechung',
      date: '17.10.2025',
      time: '12:30 - 13:00'
    },
    {
      id: 2,
      barColor: '#2563eb',
      name: 'Besprechung',
      date: '18.10.2025',
      time: '13:30 - 14:00'
    },
    {
      id: 3,
      barColor: '#0891b2',
      name: 'Besprechung',
      date: '20.10.2025',
      time: '11:30 - 12:00'
    },
    {
      id: 4,
      barColor: '#dc2626',
      name: 'Besprechung',
      date: '17.11.2025',
      time: '12:30 - 13:00'
    }
  ];
  const show = true;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 'auto',
        padding: {xs: '16px', lg: '24px'},
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        borderRadius: '18px',
        background: '#ffffffbf',
        boxShadow:
          '0px 0px 0px 1px #ffffff, 0px 1px 0px 0px rgba(0,0,0,0.25), 0px 1px 1px 0px rgba(0,0,0,0.25)',
        overflow: 'visible'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: '1px 4px'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter16,
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          {t('apptmt')}
        </Typography>
        {/* <Box sx={{height: '24px', width: '24px'}}>
          <Image
            src={addIcon}
            alt="addIcon"
            style={{height: '100%', width: '100%'}}
          />
        </Box> */}

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
                  zIndex: 99999999,
                  // bottom: '100%',
                  right: 0,
                  mb: '8px',
                  width: {xs: '310px'},
                  overflow: 'auto',
                  border: '1px solid rgb(255, 255, 255)',
                  backdropFilter: 'blur(8px)',

                  boxShadow: `
            0px 0px 0px 1px rgb(255, 255, 255),
            0px 1px 0px 0px rgba(0, 0, 0, 0.25),
            0px 1px 1px 0px rgba(0, 0, 0, 0.25)
          `,
                  borderRadius: '12px',
                  transformOrigin: 'top right',
                  height: '500px',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  '&::-webkit-scrollbar': {
                    display: 'none'
                  },
                  backgroundColor: '#f0f0fa99 !important'
                }}
              >
                <AppointmentsDropDown />
              </Box>
            )}
          </AnimatePresence>
        </Box>
      </Box>
      <Box
        sx={{
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          height: {xs: '190px', md: '190px', lg: '190px'},
          padding: '4px',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        {show ? (
          cardArray.map((data) => (
            <Card
              key={data.id}
              name={data.name}
              barColor={data.barColor}
              date={data.date}
              time={data.time}
            />
          ))
        ) : (
          <Typography
            sx={{
              ...localFont.inter24,
              color: '#3f3f46',
              fontWeight: '200',
              // textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%'
            }}
          >
            No new appointment!
          </Typography>
        )}
      </Box>
    </Box>
  );
}

type CardProps = {
  name: string;
  barColor: string;
  date: string;
  time: string;
};

function Card({name, barColor, date, time}: CardProps) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;

      // Ignore clicks on MUI portal elements (Select menu, Popover, Modal, etc.)
      if (
        target.closest('.MuiPopover-root') ||
        target.closest('.MuiMenu-root') ||
        target.closest('.MuiModal-root') ||
        target.closest('.MuiPickersPopper-root')
      ) {
        return;
      }

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
        padding: '7px 8px 4px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        background: '#ffffff99',
        borderRadius: '8px',
        boxShadow: '0px 0px 2px 0px rgb(212,212,216)',
        cursor: 'pointer',
        '&:hover': {
          background: 'rgba(255,255,255,0.85)',
          boxShadow: '0px 0px 2px 0px rgb(70,17,245)'
        }
      }}
    >
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
              display: barColor === '#0891b2' ? 'block' : 'none',
              position: 'absolute',
              zIndex: 99999999,
              top: '10%',
              right: 0,
              mb: '8px',
              width: {xs: '300px'},
              height: '600px',
              overflow: 'auto',
              border: '1px solid rgb(255, 255, 255)',
              backgroundColor: '#f0f0fa99',
              backdropFilter: 'blur(8px)',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              '&::-webkit-scrollbar': {
                display: 'none'
              },

              boxShadow: `
            0px 0px 0px 1px rgb(255, 255, 255),
            0px 1px 0px 0px rgba(0, 0, 0, 0.25),
            0px 1px 1px 0px rgba(0, 0, 0, 0.25)
          `,
              borderRadius: '12px',
              transformOrigin: 'top right'
            }}
          >
            <EditappointmentDropDown
              title="Edit appointment"
              driverLabel="Driver"
              dayLabel="Day"
              beginLabel="Begin"
              endLabel="End"
              participantsLabel="Participants"
              participantName="Daniel Mustermann 1"
              cancelHeading="Cancel appointment"
              cancelDescription="To cancel the appointment remove all participants from the list and click Save."
              cancelBtnLabel="Cancel"
              saveBtnLabel="Save"
              dropdownOptions={[
                {value: 'malfunction', label: 'Malfunction'},
                {value: 'question', label: 'Question'}
              ]}
              barColor={barColor}
            />
          </Box>
        )}
      </AnimatePresence>

      <Box sx={{display: 'flex', alignItems: 'center', gap: '8px'}}>
        <Box
          sx={{
            height: '22px',
            width: '6px',
            backgroundColor: barColor,
            borderRadius: '999px'
          }}
        />
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", sans-serif !important',
            fontWeight: '600'
          }}
        >
          {name}
        </Typography>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", sans-serif !important',
            fontWeight: '300'
          }}
        >
          {time}
        </Typography>
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", sans-serif !important',
            fontWeight: '300'
          }}
        >
          {date}
        </Typography>
      </Box>
    </Box>
  );
}
