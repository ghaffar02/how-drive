'use client';
import React, {useRef, useState} from 'react';
import {Box, Typography} from '@mui/material';
import TabStudentLayout from './DesktopTabs';
import TabStudentLayoutMobile from './MobileTabs';
import Home from './home/Home';
import Setting from './profile-setting/Setting';
import localFont from '@/utils/themes';
import ProfileDropdown from './ProfileDropdown';
// ProfileDropdown relative icons
import settingsIcon from '@/assets/svgs/dashboard-student/setting.svg';
import supportIcon from '@/assets/svgs/dashboard-student/email.svg';
import logoutIcon from '@/assets/svgs/dashboard-student/login.svg';

export default function StudentDashboard() {
  const [activeKey, setActiveKey] = React.useState<string>('1');
  const [hoverKey, setHoverKey] = React.useState<string | null>(null);
  // ProfileDropdown relative states
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement | null>(null);

  return (
    <Box
      sx={{
        width: '100%',
        height: {
          xs: 'calc(100svh - 32px)',
          md: 'calc(100svh - 40px)'
        },
        borderRadius: '24px'
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          margin: 'auto',
          display: 'flex',
          height: '100%',
          flexDirection: {xs: 'column-reverse', md: 'row'},
          gap: '16px'
        }}
      >
        {/* the tab section  */}
        <Box sx={{display: {xs: 'none', md: 'block'}}}>
          <TabStudentLayout
            activeKey={activeKey}
            setActiveKey={setActiveKey}
            hoverKey={hoverKey}
            setHoverKey={setHoverKey}
          />
        </Box>
        <Box sx={{display: {xs: 'block', md: 'none'}}}>
          <TabStudentLayoutMobile
            activeKey={activeKey}
            setActiveKey={setActiveKey}
            hoverKey={hoverKey}
            setHoverKey={setHoverKey}
          />
        </Box>

        {/* and the detail section */}
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          {/* the profile tab for mobile  */}
          <Box
            sx={{
              display: {xs: 'flex', md: 'none'},
              justifyContent: 'space-between',
              alignItems: 'center',
              // copy cat
              border: '1px solid #fff',
              borderRadius: '18px',
              padding: '12px',
              backgroundColor: 'rgba(248, 250, 252, 0.3)',
              width: '100%',
              height: '60px !important'
            }}
          >
            <Typography
              sx={{
                ...localFont.inter20,
                fontSize: '16px'
              }}
            >
              Home
            </Typography>
            <Box sx={{width: 'fit-content'}}>
              <ProfileDropdown
                anchorRef={anchorRef}
                fullName="Daniel Mustermann"
                items={[
                  {label: 'Einstellungen', menuIcon: settingsIcon},
                  {label: 'Support', menuIcon: supportIcon},
                  {label: 'Abmelden', menuIcon: logoutIcon}
                ]}
                open={open}
                setOpen={setOpen}
                positionSx={{
                  top: {xs: '20px !important', md: '20px  !important'},
                  right: 'unset',
                  left: '-20px !important'
                }}
                // profileIcon={optionalCustomImage} // if you want profile picture instead of initials
              />
            </Box>
          </Box>
          {activeKey === '1' && <Home />}
          {activeKey === '2' && <Setting />}
        </Box>
      </Box>
    </Box>
  );
}
