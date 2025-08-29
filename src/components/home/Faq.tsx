'use client';

import React, {useState} from 'react';
import {motion} from 'framer-motion';

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box
} from '@mui/material';
import {useTranslations} from 'next-intl';
import Image from 'next/image';

import addicon from '@/assets/svgs/plus-icon.svg';

const Faq = () => {
  const [expanded, setExpanded] = useState<number[]>([]);
  const t = useTranslations('Faq');
  const PricingData = t.raw('FaqData');

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      if (isExpanded) {
        setExpanded((prev) => [...prev, panel]);
      } else {
        setExpanded((prev) => prev.filter((item) => item !== panel));
      }
    };

  return (
    <Box
      sx={{
        bgcolor: '#FAFAFA',
        boxSizing: 'border-box'
      }}
    >
      <Box
        sx={{
          maxWidth: '1280px',
          width: '100%',
          p: {xs: '48px 16px', sm: '48px 24px', lg: '48px'},
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
            fontSize: {xs: '28px', sm: '32px', lg: '36px'},
            lineHeight: {xs: '35px', sm: '100%'},
            fontWeight: 400,
            padding: '16px',
            textAlign: 'center',
            fontFamily: 'Satoshi500 !important',
            color: '#000'
          }}
        >
          {t('title')}
        </Typography>

        <Box sx={{maxWidth: '800px', padding: '8px', width: '100%'}}>
          {PricingData.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{y: 50, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              viewport={{once: true, amount: 0.2}}
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
                  borderRadius: '15px !important',
                  boxShadow: '0px 1px 2px rgba(0,0,0,0.25)',
                  border: '0px solid #000000',
                  '&::before': {display: 'none'},
                  backgroundColor: '#ffffffff',
                  '&:hover .accordion-icon img': {
                    filter:
                      'brightness(0) saturate(100%) invert(20%) sepia(96%) saturate(2200%) hue-rotate(210deg) brightness(90%) contrast(95%)'
                  },

                  '&:hover .accordion-title': {
                    color: '#173DA6 !important'
                  }
                }}
              >
                <AccordionSummary
                  sx={{
                    minHeight: {xs: '57px !important', lg: '59px !important'},
                    padding: ' 16px 18px !important',
                    gap: '10px !important',
                    '& .MuiAccordionSummary-content': {
                      margin: '0 !important'
                    },

                    '& .MuiAccordionSummary-expandIconWrapper': {
                      transition: 'transform 0.9s ease !important',

                      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                        transform: 'rotate(10deg)'
                      }
                    }
                  }}
                  expandIcon={
                    <Box
                      className="accordion-icon"
                      sx={{
                        width: '25px',
                        height: '25px',
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
                      <Image src={addicon} alt="toggle-icon" />
                    </Box>
                  }
                >
                  <Typography
                    className="accordion-title"
                    sx={{
                      fontFamily: 'Poppins',
                      fontWeight: 400,
                      fontSize: {xs: '14px', sm: '16px', lg: '18px'},
                      lineHeight: {xs: '22px', sm: '100%'},
                      color: '#000000',
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
                    padding: ` 8px 18px 16px`
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {xs: '14px', sm: '15px', lg: '16px'},
                      whiteSpace: 'pre-wrap',
                      fontWeight: '300',
                      fontFamily: '"Inter", sans-serif  !important'
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
  );
};

export default Faq;
