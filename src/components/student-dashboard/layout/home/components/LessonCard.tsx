'use client';

import {
  Box,
  Typography,
  CircularProgress,
  circularProgressClasses
} from '@mui/material';
// import TooltipIcon from '@/app/_assets/png/Tooltip.png'; // replace with your icon
// import Icon from '@/app/_assets/png/yourIcon.png'; // replace with your icon
interface LessonCardProps {
  title: string;
  completedHours: number;
  totalHours: number;
  progressValue: number;
}

export default function LessonCard({
  title,
  completedHours,
  totalHours,
  progressValue
}: LessonCardProps) {
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
            fontFamily: '"Inter", sans-serif !important',
            color: '#2D3748',
            fontWeight: 500
          }}
        >
          {title}
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
              fontFamily: '"Inter", sans-serif !important',
              color: '#2D3748',
              fontWeight: '300'
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: {xs: '15px', md: '17px', lg: '18px'},
                fontFamily: '"Inter", sans-serif !important',
                color: '#07A66B',
                fontWeight: 600,
                mr: '4px'
              }}
            >
              {completedHours}
            </Typography>
            / {totalHours} hours
          </Typography>
        </Box>
      </Box>

      <svg width="0" height="0">
        <defs>
          <linearGradient
            id="circularGradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
            // boxShadow="0 0 10px rgba(0,0,0,0.3)"
          >
            {/* 🎨 Replace these two with your own gradient colors */}
            <stop offset="0%" stopColor="#4611f5ff" /> {/* top color */}
            <stop offset="100%" stopColor="#ea00ff" /> {/* bottom color */}
          </linearGradient>
        </defs>
      </svg>

      {/* -------- Right content : Circular Progress -------- */}
      <Box>
        <Box
          sx={{
            position: 'relative',
            display: 'inline-flex',
            // alignItems: 'center',
            transform: {
              xs: 'scale(1)',
              md: 'scale(1.3)',
              lg: 'scale(1.6)'
            },
            // bgcolor: '#000',
            ml: {xs: '-20%', md: '-20%', lg: '-75px'}
          }}
        >
          <CircularProgress
            variant="determinate"
            value={100}
            size={59}
            thickness={2.5}
            sx={{
              color: '#fff', // remaining portion color
              position: 'absolute',
              left: 0,
              top: 0
            }}
          />
          <CircularProgress
            variant="determinate"
            value={progressValue}
            size={59}
            thickness={2.5}
            sx={{
              borderRadius: '50%',

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
                fontSize: '18px',
                fontWeight: '500',
                color: '#2D3748',
                fontFamily: '"Inter", sans-serif'
              }}
            >
              {progressValue}
              <Typography
                component="span"
                sx={{
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#2D3748',
                  fontFamily: '"Inter", sans-serif'
                }}
              >
                %
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
