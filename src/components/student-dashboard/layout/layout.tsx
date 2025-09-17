'use client';
import React from 'react';
import {Box, Divider, Typography} from '@mui/material';
import logo from '@/assets/pngs/logo.png';
import Image from 'next/image';

// local imports
import home_black from '@/assets/svgs/dashboard-student/home_black.svg';
import home_blue from '@/assets/svgs/dashboard-student/home_blue.svg';
import timer_black from '@/assets/svgs/dashboard-student/timer_black.svg';
import timer_blue from '@/assets/svgs/dashboard-student/timer_blue.svg';
import calander_black from '@/assets/svgs/dashboard-student/calander_black.svg';
import calander_blue from '@/assets/svgs/dashboard-student/calander_blue.svg';
import message_black from '@/assets/svgs/dashboard-student/message_black.svg';
import message_blue from '@/assets/svgs/dashboard-student/message_blue.svg';

export default function StudentLayout() {
  const [activeKey, setActiveKey] = React.useState<string>('home');

  type NavItem = {
    key: string;
    label: string;
    iconBlack: string;
    iconBlue: string;
  };

  const navItems: NavItem[] = [
    {
      key: 'home',
      label: 'home',
      iconBlack: home_black,
      iconBlue: home_blue
    },
    {
      key: 'timer',
      label: 'timer',
      iconBlack: timer_black,
      iconBlue: timer_blue
    },
    {
      key: 'calendar',
      label: 'calendar',
      iconBlack: calander_black,
      iconBlue: calander_blue
    },
    {
      key: 'message',
      label: 'message',
      iconBlack: message_black,
      iconBlue: message_blue
    }
  ];

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: "url('/bgStudentDashboard2.svg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '24px'
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          margin: 'auto',
          padding: '4px',
          display: 'flex',
          height: '100%'
        }}
      >
        {/* the tab section  */}
        <Box
          sx={{
            border: '1px solid #fff',
            width: 'fit-content',
            borderTopLeftRadius: '24px',
            borderBottomLeftRadius: '24px',
            padding: '24px 8px',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column'
          }}
        >
          {/* logo here */}
          <Box>
            <Box
              sx={{
                height: '50px',
                width: '50px',
                margin: 'auto',
                marginBottom: '50px'
              }}
            >
              <Image
                style={{height: '100%', width: '100%'}}
                src={logo}
                alt="logo"
                priority
              />
            </Box>
            <Divider
              sx={{
                borderTop: '1px solid transparent',
                borderImage:
                  'linear-gradient(90deg, rgba(245,245,245,0.6) 0%, rgba(203,203,203,1) 50%, rgba(245,245,245,0.6) 100%) 1'
              }}
            />
          </Box>
          {/* all navigations */}
          <Box
            sx={{
              '& > :not(:last-child)': {
                marginBottom: '16px'
              }
            }}
          >
            {navItems.map((item) => {
              const isActive = activeKey === item.key;

              return (
                <Box
                  key={item.key}
                  onClick={() => setActiveKey(item.key)}
                  sx={{
                    padding: '32px 16px',
                    borderRadius: '32px',
                    backgroundColor: isActive
                      ? 'rgba(48, 88, 255, 0.10)'
                      : 'transparent',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: isActive
                        ? 'rgba(48, 88, 255, 0.10)'
                        : 'rgba(48, 88, 255, 0.06)'
                    }
                  }}
                >
                  <Image
                    src={isActive ? item.iconBlue : item.iconBlack}
                    alt={item.label}
                    width={25}
                    height={25}
                    unoptimized
                    style={{
                      display: 'block',
                      margin: 'auto'
                    }}
                  />
                  <Typography
                    sx={{
                      color: isActive ? '#3058FF' : '#000000',
                      fontSize: '12px',
                      fontFamily: '"Inter", sans-serif !important',
                      textAlign: 'center',
                      letterSpacing: '0.01em',
                      lineHeight: '1.5em',
                      marginTop: '4px'
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              );
            })}
          </Box>
          {/* profile */}
          <Box></Box>
        </Box>
        {/* and the detail section */}
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        ></Box>
      </Box>
    </Box>
  );
}
