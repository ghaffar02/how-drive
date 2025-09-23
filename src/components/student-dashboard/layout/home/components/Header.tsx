'use client';
import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import React, {useState} from 'react';

import Building from '@/assets/svgs/dashboard-student/home/building.svg';
import Tooltip from '@/assets/svgs/dashboard-student/home/tooltip.svg';

const data = [
  {
    title1: 'Führerscheinstelle',
    title2: 'Nicht angemeldet',
    title3: 'Angemeldet'
  },
  {
    title1: 'Theorieprüfung',
    title2: 'Nicht angemeldet',
    title3: '25.07.2025'
  },
  {
    title1: 'Praktische Prüfung',
    title2: 'Nicht angemeldet',
    title3: '25.07.2025'
  }
];

export default function Header() {
  return (
    <Box
      sx={{
        width: '100%',
        background: 'rgba(255,255,255,0.75)',
        padding: '8px',
        borderRadius: '18px',
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }}
    >
      {data.map((data, i) => (
        <Card
          key={i}
          title1={data.title1}
          title2={data.title2}
          title3={data.title3}
          initialShow={i === 0}
        />
      ))}
    </Box>
  );
}

type CardProps = {
  title1: string;
  title2: string;
  title3: string;
  initialShow?: boolean;
};

function Card({title1, title2, title3, initialShow}: CardProps) {
  const [show, setShow] = useState(initialShow);
  return (
    <Box
      sx={{
        maxWidth: '356px',
        width: '100%',
        padding: '19px 16px'
      }}
    >
      <Box sx={{display: 'flex', alignItems: 'center', gap: '16px'}}>
        <Box
          sx={{
            height: '32px',
            width: '32px',
            borderRadius: '50%',
            background: 'rgba(235,0,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Image src={Building} alt="icon" height={20} width={20} />
        </Box>
        <Typography sx={{...localFont.inter16, color: '#3f3f46'}}>
          {title1}
        </Typography>
      </Box>
      <Box
        sx={{
          pl: '48px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          mt: '10px'
        }}
      >
        <Typography
          onClick={() => setShow((prev) => !prev)}
          sx={{
            ...localFont.inter16,
            color: show ? '#07a66b' : '#d93a32',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          {show ? title3 : title2}
        </Typography>
        <Box sx={{height: '20px', width: '20px'}}>
          <Image
            src={Tooltip}
            alt="tooltip"
            style={{height: '100%', width: '100%'}}
          />
        </Box>
      </Box>
    </Box>
  );
}
