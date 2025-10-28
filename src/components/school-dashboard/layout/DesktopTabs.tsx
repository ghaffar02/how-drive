'use client';
import React from 'react';
import {Box, Divider, Typography} from '@mui/material';
import Image from 'next/image';
import logo from '@/assets/pngs/logo.svg';

// tab icons
import home_black from '@/assets/svgs/dashboard-student/home_black.svg';
import home_bold from '@/assets/svgs/dashboard-student/home_bold.svg';
import home_blue from '@/assets/svgs/dashboard-student/home_blue.svg';
import timer_black from '@/assets/svgs/dashboard-student/timer_black.svg';
import timer_bold from '@/assets/svgs/dashboard-student/timer_bold.svg';
import timer_blue from '@/assets/svgs/dashboard-student/timer_blue.svg';
import calander_black from '@/assets/svgs/dashboard-student/calander_black.svg';
import calander_bold from '@/assets/svgs/dashboard-student/calander_bold.svg';
import calander_blue from '@/assets/svgs/dashboard-student/calander_blue.svg';
import message_black from '@/assets/svgs/dashboard-student/message_black.svg';
import message_bold from '@/assets/svgs/dashboard-student/message_bold.svg';
import message_blue from '@/assets/svgs/dashboard-student/message_blue.svg';
import driver_black from '@/assets/svgs/dashboard-student/driver_black.svg';
import driver_blue from '@/assets/svgs/dashboard-student/driver_blue.svg';
import driver_bold from '@/assets/svgs/dashboard-student/driver_bold.svg';

// dropdown icons
import setting from '@/assets/svgs/dashboard-student/setting.svg';
import email from '@/assets/svgs/dashboard-student/email.svg';
import login from '@/assets/svgs/dashboard-student/login.svg';

// your independent dropdown
import ProfileDropdown from './ProfileDropdown';
type Props = {
  activeKey: string;
  setActiveKey: React.Dispatch<React.SetStateAction<string>>;
  hoverKey: string | null;
  setHoverKey: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function DesktopTabs({
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
      key: '1',
      label: 'home',
      iconBlack: home_black,
      iconBlue: home_blue,
      iconHover: home_bold
    },
    {
      key: '2',
      label: 'timer',
      iconBlack: timer_black,
      iconBlue: timer_blue,
      iconHover: timer_bold
    },
    {
      key: '3',
      label: 'calendar',
      iconBlack: calander_black,
      iconBlue: calander_blue,
      iconHover: calander_bold
    },
    {
      key: '4',
      label: 'message',
      iconBlack: message_black,
      iconBlue: message_blue,
      iconHover: message_bold
    },
    {
      key: '7',
      label: 'Trainer',
      iconBlack: driver_black,
      iconBlue: driver_blue,
      iconHover: driver_bold
    }
  ];

  // profile initials
  const initials = 'aohn zoe example';

  // dropdown state + ref
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null!);

  return (
    <>
      <Box
        sx={{
          border: '1px solid #fff',
          boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 1px, rgba(0, 0, 0, 0.25) 0px 1px 0px 0px, rgba(0, 0, 0, 0.25) 0px 1px 1px 0px',
          backdropFilter: 'blur(15px)',
          borderTopLeftRadius: '24px',
          borderBottomLeftRadius: '24px',
          padding: '24px 8px',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          width: '88px'
        }}
      >
        {/* logo */}
        <Box>
          <Box
            sx={{
              height: '50px',
              width: '50px',
              margin: 'auto',
              marginBottom: '24px',
              cursor: 'pointer'
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
            '& > :not(:last-child)': {marginBottom: '16px'},
            overflowY: 'auto',
            // hide scrollbars
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
              display: 'none'
            }
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
                  padding: '32px 1px',
                  borderRadius: '32px',
                  backgroundColor: isActive
                    ? 'rgba(48, 88, 255, 0.10)'
                    : 'transparent',
                  cursor: 'pointer',
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
                <Typography
                  sx={{
                    color: isActive ? '#4611F5' : '#000000',
                    fontWeight: isActive ? '700' : '400',
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

        {/* profile dropdown */}
        <Box>
          <Divider
            sx={{
              borderTop: '1px solid transparent',
              borderImage:
                'linear-gradient(90deg, rgba(245,245,245,0.6) 0%, rgba(203,203,203,1) 50%, rgba(245,245,245,0.6) 100%) 1',
              marginBottom: '24px'
            }}
          />
          <Box sx={{margin: 'auto', width: 'fit-content'}}>
            <ProfileDropdown
              fullName={initials}
              items={[
                {id: '5', label: 'Einstellungen', menuIcon: setting},
                {id: '6', label: 'Support', menuIcon: email},
                {id: '7', label: 'Abmelden', menuIcon: login}
              ]}
              open={open}
              setOpen={setOpen}
              anchorRef={anchorRef}
              activeKey={activeKey}
              setActiveKey={setActiveKey}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
