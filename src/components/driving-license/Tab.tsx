'use client';
import React, {useState} from 'react';
import {Box, Tabs, Typography, useMediaQuery, useTheme} from '@mui/material';

type Step = {
  title: string;
  content: string[];
};

type DrivingStepsProps = {
  steps: Step[];
  heading: string;
};

export default function DrivingSteps({steps, heading}: DrivingStepsProps) {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{bgcolor: '#FAFAFA'}}>
      <Box
        sx={{
          maxWidth: '1280px',
          textAlign: 'center',

          margin: ' auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: {xs: '60px 16px ', md: '60px 24px '},
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: '1063px',
            width: '100%',
            backgroundColor: '#EDF0FF',
            p: {xs: '12px', lg: '24px'},
            borderRadius: '24px'
          }}
        >
          {/* Heading */}
          <Typography
            sx={{
              color: '#1A202C',
              fontSize: {xs: '20px', md: '22px', lg: '24px'},
              fontWeight: 600,
              fontFamily: '"Inter", "Inter Placeholder", sans-serif !important',
              mb: '48px',

              width: '100%'
            }}
          >
            {heading}
          </Typography>

          <Box
            display="flex"
            flexDirection={isMobile ? 'row' : 'row'}
            sx={{p: '4px'}}
          >
            {/* Tabs */}
            <Tabs
              orientation={isMobile ? 'vertical' : 'vertical'}
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{style: {display: 'none'}}}
              sx={{
                maxWidth: {xs: '50px', md: '285px'},

                width: '100%',
                p: '4px',
                gap: '16px',
                '& .MuiTab-root': {
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  minHeight: '48px',
                  borderRadius: '25px',
                  boxShadow: `0px 0.48px 1.63px -1.5px rgba(0, 0, 0, 0.21),0px 1.83px 6.22px -3px rgba(0, 0, 0, 0.18), 0px 8px 27.2px -4.5px rgba(0, 0, 0, 0.02)`
                },
                '& .MuiTabs-flexContainer': {
                  gap: '16px'
                }
              }}
            >
              {steps.map((step, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  sx={{
                    height: {xs: '42px', md: 'auto'},
                    borderRadius: '25px',
                    boxShadow: `0px 0.48px 1.63px -1.5px rgba(0, 0, 0, 0.21),0px 1.83px 6.22px -3px rgba(0, 0, 0, 0.18), 0px 8px 27.2px -4.5px rgba(0, 0, 0, 0.02)`,
                    background:
                      value === index
                        ? 'linear-gradient(-110deg, #60A5FA, #3058FF)'
                        : 'linear-gradient(-110deg, #F8FAFC, #FFFFFF)',
                    color: value === index ? '#fff' : '#333',
                    cursor: 'pointer',
                    transition: '0.3s',
                    '&:hover': {}
                  }}
                  onClick={() => setValue(index)}
                >
                  {/* Number Circle */}
                  <Box
                    sx={{
                      minWidth: {xs: '29px', md: '32px'},
                      minHeight: {xs: '29px', md: '32px'},
                      borderRadius: '50%',
                      bgcolor: value === index ? '#fff' : '#71717A',
                      color: value === index ? '#3058FF' : '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      m: '6px 8px 6px 6px  ',
                      fontSize: {xs: '14px', sm: '15px', md: '16px'},
                      fontFamily: '"Inter", sans-serif !important',
                      letterSpacing: '0.01em',
                      lineHeight: '1.5em',
                      fontWeight: 500
                    }}
                  >
                    {index + 1}
                  </Box>

                  {/* Step Title */}
                  <Typography
                    display={{xs: 'none', md: 'flex'}}
                    sx={{
                      p: '6px 16px 6px 0',

                      fontSize: {xs: '14px', sm: '15px', md: '16px'},
                      fontFamily: '"Inter", sans-serif !important',
                      letterSpacing: '0.01em',
                      lineHeight: '1.5em',
                      fontWeight: 500
                    }}
                  >
                    {step.title}
                  </Typography>
                </Box>
              ))}
            </Tabs>

            {/* Content */}
            <Box
              maxWidth="698px"
              width="100%"
              p="16px"
              bgcolor="#fff"
              borderRadius="24px"
              ml={{xs: '16px', md: '24px'}}
              sx={{
                boxShadow: `0px 0.48px 1.63px -1.5px rgba(0, 0, 0, 0.21),0px 1.83px 6.22px -3px rgba(0, 0, 0, 0.18), 0px 8px 27.2px -4.5px rgba(0, 0, 0, 0.02)`
              }}
            >
              <Typography
                sx={{
                  padding: '16px',
                  width: '100%',
                  color: '#2D3748',
                  fontSize: {xs: '16px', md: '18px', lg: '20px'},
                  fontWeight: 500,
                  textAlign: 'center',
                  fontFamily:
                    '"Inter", "Inter Placeholder", sans-serif !important'
                }}
              >
                {steps[value].title}
              </Typography>
              {steps[value].content.map((point, idx) => (
                <Typography
                  key={idx}
                  sx={{
                    mt: '16px',
                    width: '100%',
                    textAlign: 'left',
                    color: '#2D3748',
                    fontSize: {xs: '14px', md: '15px', lg: '16px'},
                    fontWeight: 300,
                    fontFamily:
                      '"Inter", "Inter Placeholder", sans-serif !important'
                  }}
                >
                  • {point}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
