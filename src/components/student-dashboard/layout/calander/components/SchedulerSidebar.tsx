'use client';
import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import {motion} from 'framer-motion';

export default function SchedulerSidebar() {
  const appointments = [
    {
      id: 1,
      color: '#9333EA', // purple
      title: 'Besprechung',
      time: '12:30 - 13:00',
      date: '17.10.2025'
    },
    {
      id: 2,
      color: '#2563EB', // blue
      title: 'Gruppe 1',
      time: '12:30 - 13:00',
      date: '17.10.2025'
    },
    {
      id: 3,
      color: '#0891B2', // cyan
      title: 'Tom',
      time: '12:30 - 13:00',
      date: '17.10.2025'
    },
    {
      id: 4,
      color: '#DC2626', // red
      title: 'Theorieprüfung',
      time: '12:30 - 13:00',
      date: '17.10.2025'
    }
  ];

  return (
    <Box
      sx={{
        // // maxWidth: '300px',
        // width: {xs: '100%', md: '206px', lg: '276px'},
        // minWidth: {md: '206px', lg: '276px'},
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
        Settings
      </Typography>

      {/* List of Appointments */}
      <Box
        component={motion.div}
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{
          duration: 0.2,
          ease: 'easeOut',
          delay: 0.2
        }}
        viewport={{once: true}}
        sx={{
          marginTop: '32px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        {appointments.map((appt, i) => (
          <Box
            key={appt.id}
            component={motion.div}
            initial={{y: 50, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
              delay: i * 0.2 // 👈 delay multiplied by index
            }}
            viewport={{once: true}} // 👈 run only once
          >
            <AppointmentCard
              color={appt.color}
              title={appt.title}
              time={appt.time}
              date={appt.date}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

/* ✅ Reusable AppointmentCard Component (BOTTOM of file) */
interface AppointmentCardProps {
  color: string;
  title: string;
  time: string;
  date: string;
}

function AppointmentCard({color, title, time, date}: AppointmentCardProps) {
  return (
    <Box
      sx={{
        padding: '7px 8px 4px 8px',
        borderRadius: '8px',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        boxShadow:
          '0px 0px 2px 0px var(--token-46fa6e04-aa50-4324-8a35-fd1170036322, rgb(212, 212, 216))',
        width: '100%'
      }}
    >
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
