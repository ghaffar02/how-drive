'use client';
import React from 'react';
import {Box, Divider, Typography, Paper, Popper, Grow} from '@mui/material';
import Image, {StaticImageData} from 'next/image';
import logo from '@/assets/pngs/logo.png';
// tab icons
import home_black from '@/assets/svgs/dashboard-student/home_black.svg';
import home_blue from '@/assets/svgs/dashboard-student/home_blue.svg';
import timer_black from '@/assets/svgs/dashboard-student/timer_black.svg';
import timer_blue from '@/assets/svgs/dashboard-student/timer_blue.svg';
import calander_black from '@/assets/svgs/dashboard-student/calander_black.svg';
import calander_blue from '@/assets/svgs/dashboard-student/calander_blue.svg';
import message_black from '@/assets/svgs/dashboard-student/message_black.svg';
import message_blue from '@/assets/svgs/dashboard-student/message_blue.svg';
// dropdown icons
import setting from '@/assets/svgs/dashboard-student/setting.svg';
import email from '@/assets/svgs/dashboard-student/email.svg';
import login from '@/assets/svgs/dashboard-student/login.svg';
import arrow from '@/assets/svgs/dashboard-student/arrow.svg';

// name spliting function
function getInitials(fullName: string): string {
  if (!fullName) return '';
  const words = fullName.trim().split(' ').filter(Boolean);
  let initials = words[0]?.[0] || '';
  if (words.length > 1) {
    initials += words[1][0];
  }
  return initials.toUpperCase();
}

type Props = {
  activeKey: string;
  setActiveKey: React.Dispatch<React.SetStateAction<string>>;
  hoverKey: string | null;
  setHoverKey: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function TabStudentLayout({
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
    }
  ];
  const name = 'aohn zoe example';
  const initials = getInitials(name);

  return (
    <>
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
              marginBottom: '50px',
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
            '& > :not(:last-child)': {
              marginBottom: '16px'
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
                  padding: '32px 16px',
                  borderRadius: '32px',
                  backgroundColor: isActive
                    ? 'rgba(48, 88, 255, 0.10)'
                    : 'transparent',
                  cursor: 'pointer'
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
        {/* profile */}
        <Box>
          <Divider
            sx={{
              borderTop: '1px solid transparent',
              borderImage:
                'linear-gradient(90deg, rgba(245,245,245,0.6) 0%, rgba(203,203,203,1) 50%, rgba(245,245,245,0.6) 100%) 1',
              marginBottom: '50px'
            }}
          />
          <Box
            sx={{
              height: '40px',
              width: '40px',
              backgroundColor: '#FFFFFF',
              borderRadius: '50%',
              margin: 'auto',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#DDE0F0'
              },
              '&:active': {
                backgroundColor: '#B9C2EB'
              },
              transition: 'all 0.1s ease-in',
              position: 'relative'
            }}
          >
            {/* user name profile */}
            <MenuDropdown
              label={initials}
              items={[
                {label: 'Einstellungen', menuIcon: setting},
                {label: 'Support', menuIcon: email},
                {label: 'Abmelden', menuIcon: login}
              ]}
              // profileIcon={profileIcon}
            />
          </Box>
        </Box>
      </Box>
      {/* end tab section */}
    </>
  );
}

// the dropdown
type DropdownItem = {
  label: string;
  menuIcon: string;
};

type PropsDropdown = {
  label: string;
  items: DropdownItem[];
  profileIcon?: StaticImageData;
};

export function MenuDropdown({label, items, profileIcon}: PropsDropdown) {
  const textStyle = {
    color: '#000000',
    fontSize: '14px',
    fontWeight: '300',
    lineHeight: '14px',
    fontFamily: '"Inter", "Inter Placeholder", sans-serif !important'
  };
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement | null>(null);
  const enter = () => setOpen(!open);

  return (
    <>
      <Box
        ref={anchorRef}
        onClick={enter}
        sx={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'pointer',
          height: '40px',
          width: '40px',
          backgroundColor: '#FFFFFF',
          borderRadius: '50%',
          margin: 'auto',
          '&:hover': {
            backgroundColor: '#DDE0F0'
          },
          '&:active': {
            backgroundColor: '#B9C2EB'
          },
          transition: 'all 0.1s ease-in',
          overflow: 'hidden'
        }}
      >
        {profileIcon && (
          <Image
            style={{height: '100%', width: '100%', objectFit: 'cover'}}
            src={profileIcon}
            alt="profile icon"
          />
        )}
        {!profileIcon && (
          <Typography
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#2D3748',
              fontWeight: '500',
              fontFamily: '"Inter", sans-serif  !important',
              fontSize: {xs: '14px', md: '15px', lg: '16px'},
              textTransform: 'capitalize'
            }}
          >
            {label}
          </Typography>
        )}
      </Box>

      <Popper
        onMouseEnter={() => setOpen(true)}
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom"
        transition
        modifiers={[{name: 'offset', options: {offset: [49, 10]}}]}
        sx={{
          zIndex: 1300
        }}
      >
        {({TransitionProps}) => (
          <Grow {...TransitionProps} style={{transformOrigin: 'bottom center'}}>
            <Paper
              elevation={8}
              sx={{
                minWidth: '200px',
                borderRadius: '12px',
                boxShadow:
                  'rgba(0, 0, 0, 0.05) 0px 10px 20px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
                padding: '8px',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexDirection: 'column',
                backdropFilter: 'blur(15px)',
                transform: 'translate(100px,0)',
                maxWidth: '200px',
                gap: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                border: '1px solid #fff'
              }}
            >
              {items.map((item) => (
                <Box
                  onClick={() => setOpen(false)}
                  key={item.label}
                  sx={{
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    p: '12px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    justifyContent: 'space-between',
                    '&:hover': {
                      backgroundColor: 'rgba(48, 88, 255, 0.10)',
                      '& .arrowWrapper': {
                        opacity: 1,
                        transform: 'translateX(0)'
                      }
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}
                  >
                    <Box sx={{height: '20px', width: '20px'}}>
                      <Image
                        style={{height: '100%', width: '100%'}}
                        src={item.menuIcon}
                        alt={item.label}
                      />
                    </Box>
                    <Typography
                      sx={{
                        ...textStyle,
                        transition: 'all 0.24s ease-in-out',
                        fontWeight: '400'
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>

                  {/* Arrow wrapper for animation */}
                  <Box
                    className="arrowWrapper"
                    sx={{
                      opacity: 0,
                      transform: 'translateX(-10px)',
                      transition: 'all 0.3s ease-in-out',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Image
                      style={{
                        height: '16px',
                        width: '16px',
                        objectFit: 'cover'
                      }}
                      src={arrow}
                      alt="arrow icon"
                    />
                  </Box>
                </Box>
              ))}
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
