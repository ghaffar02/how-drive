import React from 'react';
import {Box, Typography} from '@mui/material';
import localFont from '@/utils/themes';

const data = [
  {
    id: 1,
    title: 'Driving school',
    status: true
  },
  {
    id: 2,
    title: 'Documents',
    status: false
  },
  {
    id: 3,
    title: 'Driving license office',
    status: false
  },
  {
    id: 4,
    title: 'Theory lessons',
    status: false
  },
  {
    id: 5,
    title: 'Theory exam',
    status: false
  },
  {
    id: 6,
    title: 'Driving lessons',
    status: false
  },
  {
    id: 7,
    title: 'Driving/Practical exam',
    status: false
  },
  {
    id: 8,
    title: 'Issuing a driving license',
    status: false
  }
];

export default function Process() {
  return (
    <Box
      sx={{
        background: 'rgba(255,255,255,0.75)',
        padding: {xs: '16px', md: '24px'},
        border: '1px solid white',
        borderRadius: '18px',
        maxWidth: '660px',
        width: '100%'
      }}
    >
      <Typography
        sx={{
          ...localFont.inter16,
          fontFamily: '"Inter", sans-serif !impotant',
          color: '#2d3748',
          mb: '16px'
        }}
      >
        Process
      </Typography>
      {/* Below is cards code */}
      <Box
        sx={{
          maxWidth: '600px',
          width: '100%',
          margin: 'auto',
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: {xs: 'start', md: 'center'},
          rowGap: {xs: '10px', md: '80px'},
          position: 'relative',
          overflow: 'hidden',
          padding: {xs: '25px 0px', md: '40px 0px'}
        }}
      >
        {data.map((item, i) => (
          <Card
            key={i + 1}
            id={item.id}
            title={item.title}
            status={item.status}
          />
        ))}
        {[1, 2, 3, 4, 5].map((i, index) => (
          <>
            <Box
              key={i}
              sx={{
                display: {xs: 'none', md: 'block'},
                position: 'absolute',
                top: 60,
                mt: i > 1 ? `${i * 61 - 59}px` : '0px',
                width: i == 1 || i == 5 ? '70%' : '90%',
                right: i == 1 ? 27 : 'initial',
                left: i == 5 ? 30 : 'initial',
                height: '1px',
                background: '#14b8a6'
              }}
            />
            <Box
              key={index}
              sx={{
                display: i == 5 ? 'none' : {xs: 'none', md: 'block'},
                position: 'absolute',
                width: i == 1 ? '64px' : '63px',
                height: i == 1 ? '64px' : '62px',
                mt: i > 1 ? `${i * 61 - 59}px` : '0px',
                top: 60,
                zIndex: 99999,
                borderRadius: '50%',
                background:
                  i % 2 === 0
                    ? 'conic-gradient(transparent 0deg 180deg, #14b8a6 180deg 360deg)'
                    : 'conic-gradient(#14b8a6 0deg 180deg, transparent 180deg 360deg)',
                mask: 'radial-gradient(farthest-side, transparent calc(100% - 1px), #000 0)',
                WebkitMask:
                  'radial-gradient(farthest-side, transparent calc(100% - 1px), #000 0)',
                ...(i === 1 || i === 3 || i === 5
                  ? {right: 0}
                  : i === 2 || i === 4
                    ? {left: 0}
                    : {})
              }}
            />
          </>
        ))}
      </Box>
    </Box>
  );
}

type CardProps = {
  id: number;
  title: string;
  status?: boolean;
};

function Card({id, title, status}: CardProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 16px 6px 6px',
        background: status
          ? 'linear-gradient(to left, rgba(165,243,252,1), rgba(94,234,212,1))'
          : 'linear-gradient(to right, rgba(248,250,252,1), rgba(255,255,255,1))',
        borderRadius: '999px',
        cursor: 'pointer',
        position: 'relative',
        zIndex: 999999
      }}
    >
      <Box
        sx={{
          width: '30px',
          height: '30px',
          background: status ? '#fff' : '#71717a',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter14,
            color: status ? '#0d9488' : '#fff',
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          {id}
        </Typography>
      </Box>
      <Typography
        sx={{
          ...localFont.inter14,
          color: status ? '#0d9488' : '#4a5568',
          fontFamily: '"Inter", sans-serif !important'
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
