'use client';
import React from 'react';
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
import menu from '@/assets/svgs/dashboard-student/menu.svg';

type Props = {
  activeKey: string;
  setActiveKey: React.Dispatch<React.SetStateAction<string>>;
  hoverKey: string | null;
  setHoverKey: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function TabStudentLayoutMobile({
  activeKey,
  setActiveKey,
  hoverKey,
  setHoverKey
}: Props) {
  type NavItem = {
    key: string;
    label: string;
    iconBlack: string;
    iconBlue: string;
    iconHover: string;
  };

  const navItems: NavItem[] = [
    {
      key: 'home',
      label: 'home',
      iconBlack: home_black,
      iconBlue: home_blue,
      iconHover: home_blue
    },
    {
      key: 'timer',
      label: 'timer',
      iconBlack: timer_black,
      iconBlue: timer_blue,
      iconHover: timer_blue
    },
    {
      key: 'calendar',
      label: 'calendar',
      iconBlack: calander_black,
      iconBlue: calander_blue,
      iconHover: calander_blue
    },
    {
      key: 'message',
      label: 'message',
      iconBlack: message_black,
      iconBlue: message_blue,
      iconHover: message_blue
    },
    {
      key: 'menu',
      label: 'menu',
      iconBlack: menu,
      iconBlue: menu,
      iconHover: menu
    }
  ];

  return (
    <>
      {/* the tab section  */}
      <Box
        sx={{
          border: '1px solid #fff',
          width: '100%',
          borderRadius: '18px',
          padding: '12px'
        }}
      >
        {/* all navigations */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            gap: '8px'
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
                onClick={() => setActiveKey(item.key)}
                onMouseEnter={() => setHoverKey(item.key)}
                onMouseLeave={() => setHoverKey(null)}
                sx={{
                  cursor: 'pointer',
                  width: '20%'
                }}
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
                    style={{
                      display: 'block',
                      margin: 'auto'
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    color: isActive ? '#3058FF' : '#000000',
                    fontWeight: isActive ? '600' : '400',
                    fontSize: '12px',
                    fontFamily: '"Inter", sans-serif !important',
                    textAlign: 'center',
                    letterSpacing: '0.01em',
                    lineHeight: '1.5em',
                    marginTop: '4px',
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
      {/* end tab section */}
    </>
  );
}
