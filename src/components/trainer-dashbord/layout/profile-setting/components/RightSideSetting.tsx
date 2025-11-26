import {Box, Typography} from '@mui/material';
import {useEffect, useState} from 'react';
import Account from './Account';
import Password from './Password';
import Preference from './Preference';
import Privacy from './Privacy';
import {useTranslations} from 'next-intl';
import Notification from './Notification';

export default function RightSide({
  activeIndex,
  setActiveIndex
}: {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const t = useTranslations('Dashboard.Settings.leftSide');
  // const [activeIndex, setActiveIndex] = useState<number | 0>(0);
  const data = t.raw('SettingsArray');

  const handleClick = (i: number) => {
    if (window.innerWidth <= 900) {
      setActiveIndex(i);
    }
  };

  const [tabBarHeight, setTabBarHeight] = useState(0);

  useEffect(() => {
    const handleHeight = () => {
      const height = document.getElementById('tabBar')?.clientHeight || 0;
      setTabBarHeight(height);
    };

    handleHeight();
    window.addEventListener('resize', handleHeight);

    return () => window.removeEventListener('resize', handleHeight);
  }, []);
  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        background: '#f8fafc4d',
        border: '2px solid #FFFFFF',

        overflow: 'hidden',

        backdropFilter: 'blur(15px)',
        borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
        // borderRadius: '0px 24px 24px 0px',
        height: {xs: '100%', md: '100%'}
      }}
    >
      <Box
        sx={{
          p: {xs: '8px', md: '24px'},
          overflowY: 'scroll',

          height: {xs: '100%', lg: '100%'},

          overflow: ' hidden auto',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        {/* Tabs */}
        <Box
          id="tabBar"
          sx={{
            bgcolor: '#f0f0faef',
            opacity: 1,
            boxShadow: `0px 0px 0px 1px rgb(255, 255, 255, rgb(255, 255, 255)), 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)`,
            border: '2px solid #fff',
            backdropFilter: 'blur(15px)',
            // : {xs: '96.5%', sm: '97.7%'},

            width: '97.7%',

            '@media (max-width: 728px)': {
              width: '97.5%'
            },
            '@media (max-width: 588px)': {
              width: '97%'
            },

            '@media (max-width: 460px)': {
              width: '96.1%'
            },
            display: {xs: 'flex', md: 'none'},
            p: '12px',
            flexWrap: 'wrap',

            gap: '12px',
            position: 'fixed',
            zIndex: 121,
            borderRadius: '24px'
          }}
        >
          {data.map((items: string, i: number) => (
            <Box
              key={i}
              onClick={() => handleClick(i)}
              sx={{
                background: activeIndex === i ? '#2d3748' : '#DDE0F0',
                padding: '8px',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              <Typography
                sx={{
                  // ...localFont.inter16,
                  lineHeight: '1.6em',
                  textAlign: 'center',

                  fontSize: {xs: '12px', md: '13px', lg: '14px'},
                  color: activeIndex === i ? '#fff' : '#4A5568',
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: 400
                }}
              >
                {items}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Pages */}
        <Box
          sx={{
            '@media (max-width:900px)': {
              mt: {xs: `calc(${tabBarHeight}px + 36px)`}
            }
          }}
        >
          {activeIndex === 0 && <Account />}
          {activeIndex === 1 && <Notification />}
          {activeIndex === 2 && <Privacy />}
          {activeIndex === 3 && <Preference />}
          {activeIndex === 4 && <Password />}
        </Box>
      </Box>
    </Box>
  );
}
