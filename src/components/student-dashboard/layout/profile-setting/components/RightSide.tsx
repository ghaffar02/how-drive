import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import {useState} from 'react';
import Account from './Account';

export default function RightSide() {
  const [activeIndex, setActiveIndex] = useState<number | 0>(0);

  const handleClick = (i: number) => {
    setActiveIndex(i);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        background: 'rgba(248,250,252,0.3)',
        p: {xs: '8px', lg: '24px'},
        border: '1px solid #fff',
        borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}
    >
      {/* Tabs */}
      <Box
        sx={{
          bgcolor: '#ffffff99',
          display: 'flex',
          p: '4px',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0px 0px 2px 0px #a1a1aa',
          borderRadius: '999px'
        }}
      >
        {['Account', 'Notif.', 'Privacy', 'Preferen.', 'Password'].map(
          (items, i) => (
            <Box
              key={i}
              onClick={() => handleClick(i)}
              sx={{
                background: activeIndex === i ? '#ffff' : 'transprant',
                padding: '4px 8px',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow:
                  activeIndex === i
                    ? '0px 1px 2px 0px #00000040'
                    : '0px 0px 0px 0px #000000'
              }}
            >
              <Typography
                sx={{
                  ...localFont,
                  fontSize: {xs: '12px', md: '13px', lg: '14px'},
                  color: '#4A5568',
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: activeIndex === i ? '500' : '400'
                }}
              >
                {items}
              </Typography>
            </Box>
          )
        )}
      </Box>

      {/* Pages */}
      <Box>
        {activeIndex === 0 && <Account />}
        {activeIndex === 1 && (
          <Typography>Notification Page Content</Typography>
        )}
        {activeIndex === 2 && <Typography>Privacy Page Content</Typography>}
        {activeIndex === 3 && <Typography>Preference Page Content</Typography>}
        {activeIndex === 4 && <Typography>Password Page Content</Typography>}
      </Box>
    </Box>
  );
}
