import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import {useState} from 'react';
import Account from './Account';
import Password from './Password';
import Preference from './Preference';
import Privacy from './Privacy';
import {useTranslations} from 'next-intl';

export default function RightSide() {
  const t = useTranslations('Dashboard.Settings.leftSide');
  const [activeIndex, setActiveIndex] = useState<number | 0>(0);
  const data = t.raw('RightSideArray');

  const handleClick = (i: number) => {
    setActiveIndex(i);
  };

  return (
    <Box
      sx={{
        width: '100%',
        background: 'rgba(248,250,252,0.3)',
        border: '1px solid #fff',
        boxShadow:
          'rgb(255, 255, 255) 0px 0px 0px 1px, rgba(0, 0, 0, 0.25) 0px 1px 0px 0px, rgba(0, 0, 0, 0.25) 0px 1px 1px 0px',
        backdropFilter: 'blur(15px)',
        borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
        height: {xs: '100%', md: '100%'}
      }}
    >
      <Box
        sx={{
          p: {xs: '8px', md: '24px'},
          overflowY: 'scroll',
          // height: '100vh',
          height: {xs: '100%', lg: '100%'},
          // display: 'flex',
          // flexDirection: 'column',

          overflow: ' hidden auto',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
          // mb: '20px',
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
          {data.map((items: string, i: number) => (
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
          ))}
        </Box>

        {/* Pages */}
        <Box>
          {activeIndex === 0 && <Account />}
          {activeIndex === 1 && (
            <Typography>Notification Page Content</Typography>
          )}
          {activeIndex === 2 && (
            <Typography>
              <Privacy />
            </Typography>
          )}
          {activeIndex === 3 && (
            <Typography>
              <Preference />
            </Typography>
          )}
          {activeIndex === 4 && <Password />}
        </Box>
      </Box>
    </Box>
  );
}
