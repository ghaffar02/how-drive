'use client';

import {
  Box,
  Typography,
  CircularProgress,
  circularProgressClasses
} from '@mui/material';
import Image from 'next/image';
// import TooltipIcon from '@/app/_assets/png/Tooltip.png'; // replace with your icon
// import Icon from '@/app/_assets/png/yourIcon.png'; // replace with your icon

export default function LessonCard() {
  return (
    <Box
      sx={{
        maxWidth: {xs: '100%', lg: '357px'},
        width: '100%',
        background: 'rgba(255,255,255,0.75)',
        padding: {xs: '16px', md: '24px 16px 24px 24px '},
        borderRadius: '18px',
        display: 'flex',
        flexDirection: {xs: 'column', md: 'row'},
        alignItems: {xs: 'end', md: 'center'},
        justifyContent: 'space-between'
        // gap: {xs: '8px', lg: '10px'}
      }}
    >
      {/* Icon + Title */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'start',
          gap: {xs: '4px', md: '24px'}
        }}
      >
        <Typography
          sx={{
            fontSize: {xs: '14px', md: '15px', lg: '16px'},
            fontFamily: '"Inter", sans-serif',
            color: '#2D3748',
            fontWeight: '500'
          }}
        >
          Theory lessons
        </Typography>

        {/* Progress text + tooltip */}
        <Box
          sx={{
            pl: {xs: '0px', md: '24px'},
            display: 'flex',
            alignItems: 'center',
            // gap: {xs: '4px', sm: '24px'},
            // mt: {xs: '0px', sm: '10px'},
            maxWidth: {xs: '180px', sm: '100%'},
            width: '100%'
          }}
        >
          <Typography
            sx={{
              fontSize: {xs: '12px', md: '13px', lg: '14px'},
              fontFamily: '"Inter", sans-serif',
              color: '#2D3748',
              fontWeight: '300'
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: {xs: '15px', md: '17px', lg: '18px'},
                fontFamily: '"Inter", sans-serif',
                color: '#07A66B',
                fontWeight: 600,
                mr: '4px'
              }}
            >
              11
            </Typography>
            / 14 hours
          </Typography>
        </Box>
      </Box>

      <svg width="0" height="0">
        <defs>
          <linearGradient id="circularGradient" x1="0" y1="0" x2="0" y2="1">
            {/* 🎨 Replace these two with your own gradient colors */}
            <stop offset="0%" stopColor="#4611f5ff" /> {/* top color */}
            <stop offset="100%" stopColor="#ea00ff" /> {/* bottom color */}
          </linearGradient>
        </defs>
      </svg>

      {/* -------- Right content : Circular Progress -------- */}
      <Box
        sx={{position: 'relative', display: 'inline-flex', alignItems: 'end'}}
      >
        <CircularProgress
          variant="determinate"
          value={80}
          size={59}
          thickness={4}
          sx={{
            // width: {xs: 59, md: 77, lg: 94},
            // height: {xs: 59, md: 77, lg: 94},
            transform: {
              xs: 'scale(0.7)',
              md: 'scale(2)',
              lg: 'scale(3.2)'
            },
            color: '#000',
            // boxShadow: '2 2 2 2 #000',
            [`& .${circularProgressClasses.circle}`]: {
              stroke: 'url(#circularGradient)',
              strokeLinecap: 'round'
            }
          }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
            // borderRadius: '30px'
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#3f3f46'
            }}
          >
            80%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
