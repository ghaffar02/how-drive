import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import React from 'react';

import addIcon from '@/assets/svgs/circleadd.svg';

export default function Appointment() {
  const cardArray = [
    {
      id: 1,
      barColor: 'red',
      name: 'Besprechung',
      date: '17.10.2025',
      time: '12:30 - 13:00'
    },
    {
      id: 2,
      barColor: 'purple',
      name: 'Besprechung',
      date: '18.10.2025',
      time: '13:30 - 14:00'
    },
    {
      id: 3,
      barColor: 'orange',
      name: 'Besprechung',
      date: '20.10.2025',
      time: '11:30 - 12:00'
    },
    {
      id: 4,
      barColor: 'green',
      name: 'Besprechung',
      date: '17.11.2025',
      time: '12:30 - 13:00'
    },
    {
      id: 5,
      barColor: 'yellow',
      name: 'Besprechung',
      date: '17.10.2025',
      time: '12:30 - 13:00'
    }
  ];
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        padding: {xs: '16px', lg: '24px'},
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        borderRadius: '18px',
        background: '#ffffffbf',
        boxShadow:
          '0px 0px 0px 1px #ffffff, 0px 1px 0px 0px rgba(0,0,0,0.25), 0px 1px 1px 0px rgba(0,0,0,0.25)',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter16,
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          Appointments
        </Typography>
        <Box sx={{height: '24px', width: '24px'}}>
          <Image
            src={addIcon}
            alt="addIcon"
            style={{height: '100%', width: '100%'}}
          />
        </Box>
      </Box>
      <Box
        sx={{
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          height: {xs: '190px', md: '270px', lg: '280px'},
          padding: '4px',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          msOverflowStyle: 'none'
        }}
      >
        {cardArray.map((data) => (
          <Card
            key={data.id}
            name={data.name}
            barColor={data.barColor}
            date={data.date}
            time={data.time}
          />
        ))}
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

export function Card({name, barColor, date, time}: CardProps) {
  return (
    <Box
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
            fontWeight: '500'
          }}
        >
          {name}
        </Typography>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          {time}
        </Typography>
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          {date}
        </Typography>
      </Box>
    </Box>
  );
}
