'use client';
import React from 'react';
import {Box} from '@mui/material';
import TabStudentLayout from './DesktopTabs';
import TabStudentLayoutMobile from './MobileTabs';
import Home from './home/Home';

export default function StudentDashboard() {
  const [activeKey, setActiveKey] = React.useState<string>('home');
  const [hoverKey, setHoverKey] = React.useState<string | null>(null);

  return (
    <Box
      sx={{
        width: '100%',
        height: {
          xs: 'calc(100svh - 32px)', // 16*2
          sm: 'calc(100svh - 40px)', // 20*2
          md: 'calc(100svh - 48px)' // 24*2
        },
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
            overflowY: 'scroll'
          }}
        >
          <Home />
          <Home />
          <Home />
          <Home />
        </Box>
      </Box>
    </Box>
  );
}
