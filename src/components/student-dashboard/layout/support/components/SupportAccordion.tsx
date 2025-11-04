'use client';
import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box
} from '@mui/material';
import {useTranslations} from 'next-intl';
import Image from 'next/image';
import cross from '@/assets/svgs/dashboard-student/crossicon.svg';
import localFont from '@/utils/themes';

type InputProp = {
  openFaq: boolean;
};

const SupportAccordion = ({openFaq}: InputProp) => {
  const [expanded, setExpanded] = useState<number[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const t = useTranslations('Dashboard.Support');
  const PricingData = t.raw('FaqData');

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 900);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      if (isExpanded) {
        setExpanded((prev) => [...prev, panel]);
      } else {
        setExpanded((prev) => prev.filter((item) => item !== panel));
      }
    };

  return (
    <AnimatePresence>
      {/* ✅ Only animate mount/unmount on mobile */}
      {(openFaq || isDesktop) && (
        <Box
          sx={{
            position: {xs: 'absolute', md: 'relative'},
            bgcolor: {xs: 'rgba(240,240,250,0.6)', md: 'transparent'},
            border: '2px solid #fff',
            borderRadius: {xs: '18px', md: '0px'},
            p: {xs: '12px', md: '24px 12px'},
            overflow: 'auto',
            maxWidth: {xs: '300px', md: '230px', lg: '300px'},
            minWidth: {xs: '300px', md: '230px', lg: '300px'},
            width: '100%',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            top: {xs: '50px', md: 'initial'},
            left: {xs: '50%', md: 'initial'},
            transform: {xs: 'translateX(-50%)', md: 'initial'},
            backdropFilter: 'blur(15px)',
            zIndex: {xs: 1, md: 0},
            height: {xs: '90%', md: 'auto'}
          }}
        >
          <Box
            sx={{
              width: '100%',
              margin: 'auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: {xs: 'wrap', md: 'nowrap'},
              gap: {xs: '24px'}
            }}
          >
            <Typography
              sx={{
                ...localFont.inter16,
                fontFamily: '"Inter", sans-serif !important',
                fontWeight: '400',
                display: {xs: 'none', md: 'block'},
                textAlign: 'center'
              }}
            >
              {t('title')}
            </Typography>

            <Box sx={{maxWidth: '300px', width: '100%'}}>
              {PricingData.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{y: 50, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  transition={{
                    duration: 0.2,
                    ease: 'easeOut',
                    delay: index * 0.1
                  }}
                  style={{
                    marginBottom: expanded.includes(index) ? '16px' : '16px'
                  }}
                >
                  <Accordion
                    expanded={expanded.includes(index)}
                    onChange={handleChange(index)}
                    TransitionProps={{timeout: 500}}
                    sx={{
                      cursor: 'pointer',
                      marginBottom: '16px',
                      borderRadius: expanded.includes(index)
                        ? '18px 18px 2px 2px !important'
                        : '18px 18px 18px 2px !important',
                      boxShadow: '0px 0px 2px 0px rgb(212,212,216)',
                      border: '0px solid #000000',
                      '&::before': {display: 'none'},
                      backgroundColor: '#ffffff99',
                      '&:hover': {
                        background: 'rgba(255,255,255,0.85)'
                      }
                    }}
                  >
                    <AccordionSummary
                      sx={{
                        padding: ' 12px !important',
                        gap: '10px !important',
                        '& .MuiAccordionSummary-content': {
                          margin: '0 !important'
                        },

                        '& .MuiAccordionSummary-expandIconWrapper': {
                          transition: 'transform 0.9s ease !important',

                          '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded':
                            {
                              transform: 'rotate(10deg)'
                            }
                        }
                      }}
                      expandIcon={
                        <Box
                          className="accordion-icon"
                          sx={{
                            width: '18px',
                            height: '18px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'transform 0.3s ease',
                            transform: expanded.includes(index)
                              ? 'rotate(-45deg)'
                              : 'rotate(0deg)',
                            '& img': {
                              width: '100%',
                              height: '100%',
                              transition: 'filter 0.5s ease'
                            }
                          }}
                        >
                          <Image src={cross} alt="toggle-icon" />
                        </Box>
                      }
                    >
                      <Typography
                        className="accordion-title"
                        sx={{
                          ...localFont.inter14,
                          fontWeight: 500,
                          fontFamily: '"Inter", sans-serif  !important',
                          cursor: 'pointer',
                          transition: 'color 0.3s ease'
                        }}
                      >
                        {item.title}
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails
                      onClick={() => {
                        setExpanded((prev) =>
                          prev.includes(index)
                            ? prev.filter((item) => item !== index)
                            : [...prev, index]
                        );
                      }}
                      sx={{
                        transition: 'all 0.1s ease',
                        padding: `6px 12px 12px`
                      }}
                    >
                      <Typography
                        sx={{
                          ...localFont.inter14,
                          fontWeight: 300,
                          fontFamily: '"Inter", sans-serif  !important',
                          lineHeight: '1.5em'
                        }}
                        color="#71717A"
                      >
                        {item.content}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </motion.div>
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </AnimatePresence>
  );
};

export default SupportAccordion;
