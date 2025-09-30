'use client';
import React, {useState} from 'react';
import {Box, Typography} from '@mui/material';
import Image from 'next/image';

// tab icons
import home_black from '@/assets/svgs/dashboard-student/home_black.svg';
import home_blue from '@/assets/svgs/dashboard-student/home_blue.svg';
import timer_black from '@/assets/svgs/dashboard-student/timer_black.svg';
import timer_blue from '@/assets/svgs/dashboard-student/timer_blue.svg';
import calander_black from '@/assets/svgs/dashboard-student/calander_black.svg';
import calander_blue from '@/assets/svgs/dashboard-student/calander_blue.svg';
import message_black from '@/assets/svgs/dashboard-student/message_black.svg';
import message_blue from '@/assets/svgs/dashboard-student/message_blue.svg';
import infos_black from '@/assets/svgs/dashboard-student/infos_black.svg';
// import menu from '@/assets/svgs/dashboard-student/menu.svg';

import InfoMenuModal from './InfoMenuModal';

type Props = {
  activeKey: string;
  setActiveKey: React.Dispatch<React.SetStateAction<string>>;
  hoverKey: string | null;
  setHoverKey: React.Dispatch<React.SetStateAction<string | null>>;
};

type NavItem = {
  key: string;
  label: string;
  iconBlack: string;
  iconBlue: string;
  iconHover: string;
};

export default function MobileTabs({
  activeKey,
  setActiveKey,
  hoverKey,
  setHoverKey
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    {
      key: '1',
      label: 'home',
      iconBlack: home_black,
      iconBlue: home_blue,
      iconHover: home_blue
    },
    {
      key: '2',
      label: 'timer',
      iconBlack: timer_black,
      iconBlue: timer_blue,
      iconHover: timer_blue
    },
    {
      key: '3',
      label: 'calendar',
      iconBlack: calander_black,
      iconBlue: calander_blue,
      iconHover: calander_blue
    },
    {
      key: '4',
      label: 'message',
      iconBlack: message_black,
      iconBlue: message_blue,
      iconHover: message_blue
    },
    {
      key: '5',
      label: 'Infos',
      iconBlack: infos_black,
      iconBlue: infos_black,
      iconHover: infos_black
    }
  ];

  return (
    <>
      <Box
        sx={{
          border: '1px solid #fff',
          boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 1px, rgba(0, 0, 0, 0.25) 0px 1px 0px 0px, rgba(0, 0, 0, 0.25) 0px 1px 1px 0px',
          backdropFilter: 'blur(15px)',
          width: 'calc(100% - 32px)',
          borderRadius: '18px',
          padding: '8px',
          backgroundColor: 'rgba(248, 250, 252, 0.3)',
          position: 'fixed',
          bottom: '16px',
          // height: '77px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: '1000'
        }}
      >
        <Box
          sx={{
            justifyContent: 'flex-end',
            width: '100%',
            gap: '8px',
            display: 'flex'
          }}
        >
          {navItems.map((item) => {
            const isActive = activeKey === item.key;
            const isHover = hoverKey === item.key;
            const iconSrc = isActive
              ? item.iconBlue
              : isHover
                ? item.iconHover
                : item.iconBlack;

            return (
              <Box
                key={item.key}
                onClick={() => {
                  if (item.key === '5') {
                    setMenuOpen(true);
                  } else {
                    setActiveKey(item.key);
                  }
                }}
                onMouseEnter={() => setHoverKey(item.key)}
                onMouseLeave={() => setHoverKey(null)}
                sx={{cursor: 'pointer', width: '20%'}}
              >
                <Box
                  sx={{
                    padding: '2px',
                    borderRadius: '9999px',
                    backgroundColor: isActive
                      ? 'rgba(48, 88, 255, 0.10)'
                      : 'transparent',
                    width: '100%'
                  }}
                >
                  <Image
                    src={iconSrc}
                    alt={item.label}
                    width={25}
                    height={25}
                    unoptimized
                    style={{display: 'block', margin: 'auto'}}
                  />
                </Box>
                <Typography
                  sx={{
                    color: isActive ? '#4611F5' : '#000000',
                    fontWeight: isActive ? '700' : '400',
                    fontSize: '12px',
                    fontFamily: '"Inter", sans-serif !important',
                    textAlign: 'center',
                    letterSpacing: '0.01em',
                    lineHeight: '1.2em',
                    mt: '4px',
                    textTransform: 'capitalize'
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* The modal lives alongside the tabs and is controlled by state */}
      <InfoMenuModal open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
