'use client';
import React, {useEffect, useRef, useState} from 'react';
import {Box, Typography} from '@mui/material';
import localFont from '@/utils/themes';
// ProfileDropdown relative icons
import settingsIcon from '@/assets/svgs/dashboard-student/setting.svg';
import settingsIconBold from '@/assets/svgs/dashboard-student/settingsIconBold.svg';
import supportIcon from '@/assets/svgs/dashboard-student/email.svg';
import supportIconBold from '@/assets/svgs/dashboard-student/supportIconBold.svg';
import logoutIcon from '@/assets/svgs/dashboard-student/login.svg';
import logoutIconBold from '@/assets/svgs/dashboard-student/logoutIconBold.svg';

// tabs import
import TabStudentLayout from './DesktopTabs';
import TabStudentLayoutMobile from './MobileTabs';
// tabs
import Home from './home/Home';
// import Home from '../../student-dashboard/layout/home/Home';
import Setting from '../../student-dashboard/layout/profile-setting/Setting';
import Process from '../../student-dashboard/layout/process/Process';
import Calander from '../../student-dashboard/layout/calander/Calander';
import Support from '../../student-dashboard/layout/support/Support';
import Message from '../../student-dashboard/layout/messages/Message';

import {useTranslations} from 'next-intl';
import ProfileDropdown from '@/components/student-dashboard/layout/ProfileDropdown';
import Students from './students/Students';
const Azdata = [
  {
    id: '5',
    label: 'Einstellungen',
    menuIcon: settingsIcon,
    menuIconHover: settingsIconBold
  },
  {
    id: '6',
    label: 'Support',
    menuIcon: supportIcon,
    menuIconHover: supportIconBold
  },
  {
    id: '7',
    label: 'Abmelden',
    menuIcon: logoutIcon,
    menuIconHover: logoutIconBold
  }
];
export default function TrainerDashbord() {
  const [activeKey, setActiveKey] = React.useState<string>('2');
  const [hoverKey, setHoverKey] = React.useState<string | null>(null);
  // ProfileDropdown relative states
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement | null>(null);
  // logout function here
  useEffect(() => {
    if (activeKey === '7') {
      console.log('logout function here');
    }
  }, [activeKey]);

  const t = useTranslations('Dashboard.DesktopTabs');
  const data = t.raw('data');
  const ADdata = t.raw('data2');

  const tabs = [...data, ...ADdata];
  const title = tabs[Number(activeKey) - 1]?.label ?? '';

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
          maxWidth: '1400px',
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
            overflowY: {xs: 'auto !important', md: 'unset !important'},
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
            // title={
            //   activeKey === '1'
            //     ? 'Home'
            //     : activeKey === '2'
            //       ? 'Process'
            //       : activeKey === '3'
            //         ? 'Calendar'
            //         : activeKey === '4'
            //           ? 'Messages'
            //           : activeKey === '5'
            //             ? 'Settings'
            //             : activeKey === '6'
            //               ? 'Support'
            //               : ''
            // }
            title={title}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
          />
          {activeKey === '1' && <Home setActiveKey={setActiveKey} />}
          {/* {activeKey === '2' && <Process setActiveKey={setActiveKey} />} */}
          {activeKey === '2' && <Students />}
          {activeKey === '3' && <Calander />}
          {activeKey === '4' && <Message />}
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
  const profileData = Azdata.map((item, index) => ({
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
            fontWeight: 500,
            fontSize: '16px'
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
