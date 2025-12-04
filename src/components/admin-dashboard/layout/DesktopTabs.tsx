'use client';
import React from 'react';
import {Box, Divider, Typography} from '@mui/material';
import Image from 'next/image';
import logo from '@/assets/pngs/logo.svg';

// tab icons
import home_black from '@/assets/svgs/dashboard-student/home_black.svg';
import home_bold from '@/assets/svgs/dashboard-student/home_bold.svg';
import home_blue from '@/assets/svgs/dashboard-student/home_blue.svg';
import timer_black from '@/assets/svgs/stdIcon.svg';
import school_black from '@/assets/svgs/dashboard-student/school-black.svg';
import timer_bold from '@/assets/svgs/users-bold.svg';
import school_bold from '@/assets/svgs/dashboard-student/school-bold.svg';
import timer_blue from '@/assets/svgs/activeStdIcon.svg';
import calander_black from '@/assets/svgs/dashboard-student/calander_black.svg';
import calander_bold from '@/assets/svgs/dashboard-student/calander_bold.svg';
import calander_blue from '@/assets/svgs/dashboard-student/calander_blue.svg';
import message_black from '@/assets/svgs/dashboard-student/message_black.svg';
import message_bold from '@/assets/svgs/messagehover.svg';
import message_blue from '@/assets/svgs/dashboard-student/message_blue.svg';
import driver_black from '@/assets/svgs/dashboard-student/driver_black.svg';
import schoolblue from '@/assets/svgs/dashboard-student/schoolblue.svg';
import driver_blue from '@/assets/svgs/dashboard-student/driver_blue.svg';
import driver_bold from '@/assets/svgs/dashboard-student/driver_bold.svg';

// dropdown icons
import setting from '@/assets/svgs/dashboard-student/setting.svg';
import settingsIconBold from '@/assets/svgs/dashboard-student/settingsIconBold.svg';
import email from '@/assets/svgs/dashboard-student/email.svg';
import supportIconBold from '@/assets/svgs/dashboard-student/supportIconBold.svg';
import login from '@/assets/svgs/dashboard-student/login.svg';
import logoutIconBold from '@/assets/svgs/dashboard-student/logoutIconBold.svg';

// your independent dropdown
import ProfileDropdown from '../../student-dashboard/layout/ProfileDropdown';
import {useTranslations} from 'next-intl';
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
      label: 'Students',
      iconBlack: timer_black,
      iconBlue: timer_blue,
      iconHover: timer_bold
    },
    {
      key: '9',
      label: 'Schools',
      iconBlack: school_black,
      iconBlue: schoolblue,
      iconHover: school_bold
    },

    {
      key: '7',
      label: 'Trainer',
      iconBlack: driver_black,
      iconBlue: driver_blue,
      iconHover: driver_bold
    },
    {
      key: '3',
      label: 'bookings',
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
    }
  ];

  // profile initials
  const initials = 'aohn zoe example';
  const Azdata = [
    {
      id: '5',
      label: 'Einstellungen',
      menuIcon: setting,
      menuIconHover: settingsIconBold
    },
    {
      id: '6',
      label: 'Support',
      menuIcon: email,
      menuIconHover: supportIconBold
    },
    {id: '7', label: 'Abmelden', menuIcon: login, menuIconHover: logoutIconBold}
  ];
  // const t = useTranslations('SchoolDashboard.DesktopTabs');
  // const data = t.raw('data');
  // const ADdata = t.raw('data2');
  // const profileData = Azdata.map((item, index) => ({
  //   ...item,
  //   label: ADdata[index]?.label || item.label
  // }));
  // const updateItems = navItems.map((item, index) => ({
  //   ...item,
  //   label: data[index]?.label || item.label
  // }));
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
              height: '44px',
              width: '44px',
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
              height: '2px',
              border: 'none',
              background:
                'linear-gradient(90deg, rgb(228, 228, 231) 0%, rgb(212, 212, 216) 50%, rgb(228, 228, 231) 100%)'
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
                  padding: '20px 1px',
                  borderRadius: '32px',
                  backgroundColor: isActive
                    ? 'rgba(48, 88, 255, 0.10)'
                    : 'transparent',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                <Box sx={{position: 'relative'}}>
                  <Image
                    src={iconSrc}
                    alt={item.label}
                    width={25}
                    height={25}
                    unoptimized
                    style={{display: 'block', margin: 'auto'}}
                  />
                  {/* {item.key?.toLowerCase() === '2' && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '-4px',
                        right: '17px',
                        backgroundColor: '#4611F5',
                        height: '8px',
                        width: '8px',
                        borderRadius: '50%'
                      }}
                    ></Box>
                  )} */}
                  {item.key?.toLowerCase() === '5' && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '-4px',
                        right: '17px',
                        backgroundColor: '#4611F5',
                        height: '8px',
                        width: '8px',
                        borderRadius: '50%'
                      }}
                    ></Box>
                  )}
                </Box>
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
              height: '2px',
              border: 'none',
              background:
                'linear-gradient(90deg, rgb(228, 228, 231) 0%, rgb(212, 212, 216) 50%, rgb(228, 228, 231) 100%)',
              marginBottom: '24px'
            }}
          />

          <Box sx={{margin: 'auto', width: 'fit-content'}}>
            <ProfileDropdown
              fullName={initials}
              items={Azdata}
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
