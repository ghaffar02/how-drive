import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import React from 'react';

import car from '@/assets/svgs/dashboard-student/car.svg';
import printIcon from '@/assets/svgs/dashboard-student/printIcon.svg';
import deleteIcon from '@/assets/svgs/dashboard-student/deleteIcon.svg';

export default function Inbox() {
  return (
    <Box
      sx={{
        width: '100%',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        background: 'rgba(248,250,252,0.3)',
        border: '1px solid #fff',
        borderRadius: '0px 24px 24px 0px'
      }}
    >
      <Box
        sx={{
          width: '100%',
          padding: '24px',
          border: '1px solid #fff',
          borderRadius: '18px',
          background: '#FAF8FE',
          display: 'flex',
          gap: '16px'
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
        <Box>
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
            gap: '18px',
            marginLeft: 'auto'
          }}
        >
          <Box sx={{height: '20px', width: '20px'}}>
            <Image
              src={deleteIcon}
              alt="delete"
              style={{height: '100%', width: '100%'}}
            />
          </Box>
          <Box sx={{height: '20px', width: '20px'}}>
            <Image
              src={printIcon}
              alt="print"
              style={{height: '100%', width: '100%'}}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
