import * as React from 'react';
import {Box, Typography, Tabs, Tab} from '@mui/material';
import profile from '@/assets/svgs/how-it-works/profile.svg';
import Image from 'next/image';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{p: 3}}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function HowItWorks() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // the tab data
  const tabsData = [
    {label: 'Fahrschüler', icon: profile},
    {label: 'Fahrschulen', icon: profile},
    {label: 'PWA auf iOS', icon: profile},
    {label: 'PWA auf Android', icon: profile}
  ];

  return (
    <>
      <Box
        sx={{
          padding: {
            xs: '64px 16px 48px 16px',
            md: '64px 24px 48px 24px',
            lg: '64px 48px 48px 48px'
          },
          backgroundColor: '#FAFAFA'
        }}
      >
        <Box
          sx={{
            maxWidth: '1280px',
            margin: 'auto'
          }}
        >
          <Typography
            sx={{
              padding: '16px',
              color: '#000',
              fontSize: {xs: '28px', md: '32px', lg: '36px'},
              textAlign: 'center',
              fontWeight: '700'
            }}
          >
            So funktioniert’s
          </Typography>

          <Box sx={{paddingTop: {xs: '40px', lg: '24px'}}}>
            {/* ✅ Tabs Section */}
            <Box
              sx={{
                backgroundColor: 'FAFAFA',
                width: 'fit-content',
                margin: 'auto',
                borderRadius: '999px',
                border: '1px solid #D4D4D4',
                boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 2px 0px'
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="how it works tabs"
                centered
                TabIndicatorProps={{style: {display: 'none'}}}
                sx={{
                  '& .MuiTab-root': {
                    backgroundColor: 'transparent !important',
                    minHeight: 'auto',
                    color: '#2D3748',
                    padding: '8px',
                    borderRadius: '999px',
                    fontSize: {xs: '14px', md: '15px', lg: '16px'},
                    '&.Mui-selected': {
                      color: '#2D3748 !important',
                      backgroundColor: '#fff !important',
                      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
                      padding: '8px 16px'
                    },
                    '&:hover, &.Mui-focusVisible': {
                      backgroundColor: '#fff !important',
                      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)'
                    },
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10px',
                    transition: 'all 0.4s ease-in-out',
                    position: 'relative',
                    zIndex: '100',
                    margin: '8px'
                  }
                }}
              >
                {tabsData.map((tab, index) => (
                  <Tab
                    key={index}
                    icon={
                      <Image
                        src={tab.icon}
                        alt={tab.label}
                        width={30}
                        height={30}
                        style={{objectFit: 'contain', margin: '0'}}
                      />
                    }
                    label={tab.label}
                    {...a11yProps(index)}
                  />
                ))}
              </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
              Content for Fahrschüler
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Content for Fahrschulen
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Content for PWA auf iOS
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              Content for PWA auf Android
            </CustomTabPanel>
          </Box>
        </Box>
      </Box>
    </>
  );
}
