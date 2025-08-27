'use client';

import * as React from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Collapse,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Image from 'next/image';
import profile from '@/assets/svgs/how-it-works/profile.svg';
import TabMenu from '@/app/../components/home/TabMenu';
import {Padding} from '@mui/icons-material';

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
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up('md'));

  const handleChange = (_e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabsData = [
    {label: 'Fahrschüler', icon: profile},
    {label: 'Fahrschulen', icon: profile},
    {label: 'PWA auf iOS', icon: profile},
    {label: 'PWA auf Android', icon: profile}
  ];

  return (
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
      <Box sx={{maxWidth: '1280px', m: 'auto'}}>
        <Typography
          sx={{
            p: '16px',
            color: '#000',
            fontSize: {xs: '28px', md: '32px', lg: '36px'},
            textAlign: 'center',
            fontWeight: 700
          }}
        >
          So funktioniert’s
        </Typography>

        <Box
          sx={{
            pt: {xs: '40px', lg: '24px'},
            '& > :not(:first-child)': {padding: '0px !important'}
          }}
        >
          <Box
            sx={{
              backgroundColor: '#FAFAFA',
              width: 'fit-content',
              m: 'auto',
              borderRadius: '999px',
              border: '1px solid #D4D4D4',
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 2px 0px',
              marginBottom: '24px'
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              TabIndicatorProps={{style: {display: 'none'}}}
              sx={{
                '& .MuiTab-root': {
                  textTransform: 'none',
                  backgroundColor: 'transparent !important',
                  minHeight: 'auto',
                  minWidth: 'auto',
                  color: '#2D3748',
                  p: '8px',
                  borderRadius: '999px',
                  fontSize: {xs: '14px', md: '15px', lg: '16px'},
                  transition: 'all 0.3s ease-in-out',
                  m: '8px',
                  '&.Mui-selected': {
                    color: '#2D3748 !important',
                    backgroundColor: '#fff !important',
                    boxShadow: '0px 2px 8px rgba(0,0,0,0.15)',
                    p: '8px 16px'
                  },
                  '&:hover, &.Mui-focusVisible': {
                    backgroundColor: '#fff !important',
                    boxShadow: '0px 2px 8px rgba(0,0,0,0.15)'
                  }
                }
              }}
            >
              {tabsData.map((tab, i) => {
                const showText = upMd || value === i;
                return (
                  <Tab
                    key={i}
                    disableRipple
                    label={
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: {xs: showText ? '10px' : 0, md: '10px'}
                        }}
                      >
                        <Image
                          src={tab.icon}
                          alt={tab.label}
                          width={30}
                          height={30}
                          style={{objectFit: 'contain'}}
                        />
                        <Collapse
                          in={showText}
                          orientation="horizontal"
                          timeout={200}
                          unmountOnExit
                        >
                          <Box component="span" sx={{textWrap: 'nowrap'}}>
                            {tab.label}
                          </Box>
                        </Collapse>
                      </Box>
                    }
                    {...a11yProps(i)}
                  />
                );
              })}
            </Tabs>
          </Box>

          <CustomTabPanel value={value} index={0}>
            <TabMenu />
            <TabMenu />
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
  );
}
