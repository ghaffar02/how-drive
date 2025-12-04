'use client';
import React, {useEffect, useRef, useState} from 'react';
import {Box, Typography} from '@mui/material';
import TabStudentLayout from './DesktopTabs';
import TabStudentLayoutMobile from './MobileTabs';
import Home from './home/Home';
import localFont from '@/utils/themes';
import ProfileDropdown from '../../student-dashboard/layout/ProfileDropdown';
// ProfileDropdown relative icons
import settingsIcon from '@/assets/svgs/dashboard-student/setting.svg';
import supportIcon from '@/assets/svgs/dashboard-student/email.svg';
import logoutIcon from '@/assets/svgs/dashboard-student/login.svg';
import Setting from './profile-setting/Setting';
// import Calander from './calander/Calander';
import Calander from '@/components/admin-dashboard/layout/calander/Calander';
import Support from './support/Support';
import Students from './students/Students';
import Drivers from './drivers/Drivers';
import Message from './messages/Message';
import {useTranslations} from 'next-intl';
import Schools from './schools/Schools';
const data = [
  {id: '5', label: 'Einstellungen', menuIcon: settingsIcon},
  {id: '6', label: 'Support', menuIcon: supportIcon},
  {id: '8', label: 'Abmelden', menuIcon: logoutIcon}
];

export default function AdminDashboard() {
  const [activeKey, setActiveKey] = React.useState<string>('9');
  const [hoverKey, setHoverKey] = React.useState<string | null>(null);
  // ProfileDropdown relative states
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement | null>(null);

  // logout function here
  useEffect(() => {
    if (activeKey === '8') {
      console.log('logout function here');
    }
  }, [activeKey]);
  const t = useTranslations('SchoolDashboard.DesktopTabs');
  const data = t.raw('data');
  const ADdata = t.raw('data2');

  const tabs = [...data, ...ADdata];

  return (
    <Box
      sx={{
        width: '100%',
        height: {
          xs: '100svh',
          md: 'calc(100svh - 48px)'
        },
        borderRadius: '24px'
      }}
    >
      <Box
        sx={{
          maxWidth: '100%',
          margin: 'auto',
          display: 'flex',
          height: '100%',
          flexDirection: {xs: 'column-reverse', md: 'row'},
          gap: {md: '16px'}
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
            overflowY: {xs: 'auto !important', md: 'visible !important'},
            overflowX: 'visible !important',
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            paddingTop: {xs: '97px', md: 'unset'},
            paddingBottom: {xs: '97px', md: 'unset'},
            ...(activeKey === '1'
              ? {
                  border: {md: '1px solid #fff'},
                  borderRadius: {md: '0px 24px 24px 0px'},
                  boxShadow: {
                    md: 'rgb(255, 255, 255) 0px 0px 0px 1px, rgba(0, 0, 0, 0.25) 0px 1px 0px 0px, rgba(0, 0, 0, 0.25) 0px 1px 1px 0px'
                  },
                  backdropFilter: {md: 'blur(15px)'}
                }
              : {})
          }}
        >
          <MobileHeader
            anchorRef={anchorRef}
            open={open}
            setOpen={setOpen}
            title={
              activeKey === '1'
                ? (tabs[Number(activeKey) - 1]?.label ?? '')
                : activeKey === '2'
                  ? (tabs[Number(activeKey) - 1]?.label ?? '')
                  : activeKey === '3'
                    ? (tabs[Number(activeKey) - 1]?.label ?? '')
                    : activeKey === '4'
                      ? (tabs[Number(activeKey) - 1]?.label ?? '')
                      : activeKey === '5'
                        ? (tabs[Number(activeKey)]?.label ?? '')
                        : activeKey === '6'
                          ? (tabs[Number(activeKey)]?.label ?? '')
                          : activeKey === '7'
                            ? (tabs[Number(activeKey) - 3]?.label ?? '')
                            : activeKey === '9'
                              ? (tabs[Number(activeKey) - 3]?.label ?? '')
                              : ''
            }
            activeKey={activeKey}
            setActiveKey={setActiveKey}
          />
          {activeKey === '1' && <Home setActiveKey={setActiveKey} />}
          {activeKey === '2' && <Students />}
          {activeKey === '3' && <Calander />}
          {activeKey === '4' && <Message />}
          {activeKey === '7' && <Drivers activeKey={activeKey} />}
          {activeKey === '9' && <Schools />}
          {activeKey === '5' && <Setting />}
          {activeKey === '6' && <Support />}
        </Box>
      </Box>
    </Box>
  );
}

type MobileHeaderProps = {
  anchorRef: React.RefObject<HTMLDivElement | null>;
  open: boolean;
  setOpen: (open: boolean) => void;
  title?: string;
  // profiledropdown props
  activeKey: string;
  setActiveKey: React.Dispatch<React.SetStateAction<string>>;
};

function MobileHeader({
  anchorRef,
  open,
  setOpen,
  title = 'Home',
  activeKey,
  setActiveKey
}: MobileHeaderProps) {
  const t = useTranslations('Dashboard.DesktopTabs');
  const ADdata = t.raw('data2');

  const profileData = data.map((item, index) => ({
    ...item,
    label: ADdata[index]?.label || item.label
  }));
  return (
    <>
      {/* the profile tab for mobile  */}
      <Box
        sx={{
          display: {xs: 'flex', md: 'none'},
          justifyContent: 'space-between',
          alignItems: 'center',
          // copy cat
          border: '1px solid #fff',
          boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 1px, rgba(0, 0, 0, 0.25) 0px 1px 0px 0px, rgba(0, 0, 0, 0.25) 0px 1px 1px 0px',
          backdropFilter: 'blur(15px)',
          backgroundColor: 'rgba(248, 250, 252, 0.3)',
          borderRadius: '18px',
          padding: '12px',
          height: '65px !important',
          // position fixed here
          position: 'fixed',
          top: '16px',
          left: '16px',
          right: '16px',
          width: '100%',
          maxWidth: 'calc(100% - 32px)',
          zIndex: '1000'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter20,
            fontSize: '16px',
            fontWeight: '500'
          }}
        >
          {title}
        </Typography>
        <Box sx={{width: 'fit-content'}}>
          <ProfileDropdown
            anchorRef={anchorRef}
            fullName="Daniel Mustermann"
            items={profileData}
            open={open}
            setOpen={setOpen}
            positionSx={{
              top: {xs: '20px !important', md: '20px  !important'},
              right: 'unset',
              left: '-20px !important'
            }}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
            // profileIcon={optionalCustomImage} // if you want profile picture instead of initials
          />
        </Box>
      </Box>
    </>
  );
}
