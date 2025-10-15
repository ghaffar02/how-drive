import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import React from 'react';

import addIcon from '@/assets/svgs/circleadd.svg';

export default function Appointment() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        padding: '24px',
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
          flex: 1,
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          // height: '100%',
          // overflowY: 'auto',
          padding: '4px 0px'
        }}
      >
        <Card />
        <Card />
      </Box>
    </Box>
  );
}

export function Card() {
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
            backgroundColor: 'red',
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
          Besprechung
        </Typography>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          12:30 - 13:00
        </Typography>
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          17.10.2025
        </Typography>
      </Box>
    </Box>
  );
}
