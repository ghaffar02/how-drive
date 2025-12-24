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
import {useTranslations} from 'next-intl';

import Image from 'next/image';
import profile from '@/assets/svgs/how-it-works/profile.svg';
import car from '@/assets/svgs/how-it-works/car.svg';
import apple from '@/assets/svgs/how-it-works/apple.svg';
import androidLogo from '@/assets/svgs/how-it-works/androidLogo.svg';
import TabMenu from '@/components/home/TabMenu';
import {motion, Variants} from 'framer-motion';

const tabsMount: Variants = {
  hidden: {opacity: 0, y: 60, scale: 0.3},
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.06
    }
  }
};

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
type Step = {
  number: string;
  title: string;
  heading: string;
  description: string;
  image: any;
};

type TabData = {
  label: string;
  icon: any;
};

interface HowItWorksProps {
  stepsArray: Step[][];
  showTabs?: boolean;
  tabsData?: TabData[];
}

export default function HowItWorks({
  stepsArray,
  showTabs = true,
  tabsData: propsTabsData
}: HowItWorksProps) {
  const t = useTranslations('HowItWorks');

  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up('md'));

  const handleChange = (_e: React.SyntheticEvent, newValue: number) =>
    setValue(newValue);

  const defaultTabsData = [
    {label: t('label1'), icon: profile},
    {label: t('label2'), icon: car},
    {label: t('label3'), icon: apple},
    {label: t('label4'), icon: androidLogo}
  ];

  const tabsData = propsTabsData || defaultTabsData;

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
      <Box sx={{maxWidth: '1400px', m: 'auto'}}>
        <Typography
          sx={{
            p: '16px',
            color: '#000',
            fontSize: {xs: '28px', md: '32px', lg: '36px'},
            textAlign: 'center',
            fontWeight: 700
          }}
        >
          {t('title')}
        </Typography>

        <Box
          sx={{
            pt: {xs: '40px', lg: '24px'},
            '& > :not(:first-of-type)': {padding: '0px !important'}
          }}
        >
          {showTabs && (
            <Box
              // variants={tabsMount}
              // initial="hidden"
              // whileInView="visible"
              // viewport={{once: true, amount: 0.25}}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                centered
                TabIndicatorProps={{style: {display: 'none'}}}
                sx={{
                  width: 'fit-content',
                  m: 'auto',
                  borderRadius: '999px',
                  border: '1px solid #D4D4D4',
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 2px 0px',
                  marginBottom: '24px',
                  fontFamily: '"Inter", sans-serif !important',
                  '& .MuiTab-root, & .MuiTab-root span': {
                    fontFamily: '"Inter", sans-serif !important'
                  },
                  '& .MuiTab-root': {
                    fontFamily: '"Inter", sans-serif !important',
                    textTransform: 'none',
                    backgroundColor: 'transparent !important',
                    minHeight: 'auto',
                    minWidth: 'auto',
                    p: '8px',
                    borderRadius: '999px',
                    fontSize: {xs: '14px', md: '15px', lg: '16px'},
                    transition: 'all 0.3s ease-in-out',
                    m: '8px',
                    '&.Mui-selected': {
                      color: '#2D3748 !important',
                      backgroundColor: '#fff !important',
                      boxShadow: '0px 2px 8px rgba(0,0,0,0.15)',
                      p: '8px 16px',
                      fontFamily: '"Inter", sans-serif !important'
                    },
                    '&:hover, &.Mui-focusVisible': {
                      backgroundColor: '#fff !important',
                      boxShadow: '0px 2px 8px rgba(0,0,0,0.15)'
                    }
                  }
                }}
              >
                {tabsData.map((tab: TabData, i: number) => {
                  const showText = upMd || value === i;
                  const isSelected = value === i;

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
                          />
                          <Collapse
                            in={showText}
                            orientation="horizontal"
                            timeout={200}
                            unmountOnExit
                          >
                            <Box
                              component="span"
                              sx={{
                                fontWeight: isSelected
                                  ? '500 !important'
                                  : '400 !important',
                                textWrap: 'nowrap'
                              }}
                            >
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
          )}

          {showTabs ? (
            stepsArray.map((steps: Step[], idx: number) => (
              <CustomTabPanel key={idx} value={value} index={idx}>
                {steps.map((s, i) => (
                  <TabMenu
                    key={`${idx}-${s.number}`}
                    number={s.number}
                    title={s.title}
                    heading={s.heading}
                    description={s.description}
                    image={s.image}
                    index={i}
                  />
                ))}
              </CustomTabPanel>
            ))
          ) : (
            stepsArray.map((steps: Step[], idx: number) => (
              <Box key={idx}>
                {steps.map((s, i) => (
                  <TabMenu
                    key={`${idx}-${s.number}`}
                    number={s.number}
                    title={s.title}
                    heading={s.heading}
                    description={s.description}
                    image={s.image}
                    index={i}
                  />
                ))}
              </Box>
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
}
