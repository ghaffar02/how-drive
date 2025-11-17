'use client';

import EditappointmentDropDown from '@/components/school-dashboard/layout/students/components/EditappointmentDropDown';
import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import {motion, AnimatePresence} from 'framer-motion';
import React, {useEffect, useRef, useState} from 'react';

export default function SchedulerSidebar() {
  const appointments = [
    {
      id: 1,
      color: '#9333EA',
      title: 'Besprechung',
      time: '12:30 - 13:00',
      date: '17.10.2025'
    },
    {
      id: 2,
      color: '#2563EB',
      title: 'Gruppe 1',
      time: '12:30 - 13:00',
      date: '17.10.2025'
    },
    {
      id: 3,
      color: '#0891B2',
      title: 'Tom',
      time: '12:30 - 13:00',
      date: '17.10.2025'
    },
    {
      id: 4,
      color: '#DC2626',
      title: 'Theorieprüfung',
      time: '12:30 - 13:00',
      date: '17.10.2025'
    }
  ];

  return (
    <Box
      sx={{
        minWidth: {md: '230px', lg: '300px'},
        maxWidth: {md: '230px', lg: '300px'},
        width: '100%',
        background: 'rgba(248,250,252,0.3)',
        padding: {xs: '8px', md: '24px 12px'},
        border: '1px solid #fff',
        boxShadow:
          'rgb(255, 255, 255) 0px 0px 0px 1px, rgba(0, 0, 0, 0.25) 0px 1px 0px 0px, rgba(0, 0, 0, 0.25) 0px 1px 1px 0px',
        backdropFilter: 'blur(15px)',
        display: {xs: 'none', md: 'flex'},
        alignItems: 'center',
        flexDirection: 'column',
        gap: '16px'
      }}
    >
      <Typography
        sx={{
          ...localFont.inter16,
          fontSize: {xs: '14px', md: '15px', lg: '16px'},
          fontWeight: '500',
          fontFamily: '"Inter", sans-serif !important'
        }}
      >
        Appointments
      </Typography>

      <Box
        sx={{
          marginTop: '32px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        {appointments.map((a) => (
          <AppointmentCard
            key={a.id}
            color={a.color}
            title={a.title}
            time={a.time}
            date={a.date}
          />
        ))}
      </Box>
    </Box>
  );
}

/* ============================================================= */
/*                AppointmentCard With Popup                     */
/* ============================================================= */

interface AppointmentCardProps {
  color: string;
  title: string;
  time: string;
  date: string;
}

function AppointmentCard({color, title, time, date}: AppointmentCardProps) {
  const [openDropdown, setOpenDropdown] = useState(false);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Outside click close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        dropdownRef.current.contains(event.target as Node)
      ) {
        return;
      }

      if (cardRef.current && cardRef.current.contains(event.target as Node)) {
        return;
      }

      setOpenDropdown(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <Box
      ref={cardRef}
      onClick={() => setOpenDropdown((p) => !p)}
      sx={{
        position: 'relative',
        padding: '7px 8px 4px 8px',
        borderRadius: '8px',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        boxShadow:
          '0px 0px 2px 0px var(--token-46fa6e04-aa50-4324-8a35-fd1170036322, rgb(212,212,216))',
        width: '100%',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.85)'
        }
      }}
    >
      {/* Dropdown Popup */}
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
              zIndex: 99999999,
              top: '10%',
              right: 0,
              mb: '8px',
              width: {xs: '300px'},
              height: '500px',
              overflow: 'auto',
              border: '1px solid rgb(255, 255, 255)',
              backgroundColor: '#f0f0fa99',
              backdropFilter: 'blur(8px)',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              '&::-webkit-scrollbar': {display: 'none'},
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
              barColor={color}
            />
          </Box>
        )}
      </AnimatePresence>

      {/* Appointment Info */}
      <Box sx={{display: 'flex', gap: '8px', alignItems: 'center'}}>
        <Box
          sx={{
            height: '23px',
            width: '6px',
            borderRadius: '999px',
            backgroundColor: color
          }}
        ></Box>

        <Typography
          sx={{
            ...localFont.inter14,
            fontWeight: '700',
            fontFamily: '"Inter", sans-serif !important',
            color: '#4A5568'
          }}
        >
          {title}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
          alignItems: 'center',
          marginTop: '4px'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter14,
            fontWeight: '300',
            fontFamily: '"Inter", sans-serif !important',
            color: '#4A5568'
          }}
        >
          {time}
        </Typography>

        <Typography
          sx={{
            ...localFont.inter14,
            fontWeight: '300',
            fontFamily: '"Inter", sans-serif !important',
            color: '#4A5568'
          }}
        >
          {date}
        </Typography>
      </Box>
    </Box>
  );
}
