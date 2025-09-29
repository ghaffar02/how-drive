import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import arrow from '@/assets/svgs/dashboard-student/arrowsetting.svg';
import {useState} from 'react';

export default function Leftside() {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const handleClick = (i: number) => {
    setActiveIndexes((prev) =>
      prev.includes(i) ? prev.filter((idx) => idx !== i) : [...prev, i]
    );
  };

  return (
    <Box
      sx={{
        maxWidth: '300px',
        width: '100%',
        height: '100%',
        background: 'rgba(248,250,252,0.3)',
        padding: {xs: '8px', md: '24px 12px'},
        border: '1px solid #fff',
        display: 'flex',
        alignItems: 'center',
        flexDirection: {xs: 'column'},
        gap: '16px'
      }}
    >
      <Typography
        sx={{
          ...localFont.inter16,
          fontSize: {xs: '14px', md: '15px', lg: '16px'},
          fontWeight: '500',
          // colo
          fontFamily: '"Inter", sans-serif !important'
        }}
      >
        Settings
      </Typography>

      {['Account', 'Notifications', 'Privacy', 'Preferences', 'Password'].map(
        (items, i) => (
          <Box
            key={i}
            onClick={() => handleClick(i)}
            sx={{
              width: '100%',
              background: '#fff',
              padding: '8px',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'row',
              gap: '10px',
              cursor: 'pointer',
              boxShadow: activeIndexes.includes(i)
                ? '0px 0px 4px 0px #4611f5'
                : '0px 0px 2px 0px #a1a1aa',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: activeIndexes.includes(i)
                  ? '0px 0px 4px 0px #4611f5'
                  : '0px 0px 2px 0px #d4d4d8'
              },
              '&:hover .hoverArrow': {
                opacity: 1,
                transform: 'translateX(12px)',
                transition: 'transform 0.1s ease-in-out'
              }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                textAlign: 'center',
                justifyContent: 'space-between',
                width: '100%'
              }}
            >
              <Typography
                sx={{
                  ...localFont.inter16,
                  fontSize: {xs: '14px', md: '15px', lg: '16px'},
                  color: activeIndexes.includes(i) ? '#4611f5' : '#2d3748',
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: '400'
                }}
              >
                {items}
              </Typography>

              <Box
                className={
                  (!activeIndexes.includes(i) && 'hoverArrow') as
                    | string
                    | undefined
                }
                component="img"
                src={arrow.src}
                alt="Arrow"
                sx={{
                  maxWidth: {xs: '14px', sm: '15px', md: '16px'},
                  width: '100%',
                  height: '100%',
                  zIndex: 111,
                  opacity: 0,
                  mr: '15px'
                }}
              />
            </Box>
          </Box>
        )
      )}
    </Box>
  );
}
