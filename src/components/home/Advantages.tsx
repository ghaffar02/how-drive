'use client';

import {Box, Button, Typography, useTheme, useMediaQuery} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import React, {useEffect, useRef, useState} from 'react';
import {motion} from 'framer-motion';

import User from '@/assets/svgs/user.svg';
import Car from '@/assets/svgs/car.svg';

export default function Advantages() {
  const [value, setValue] = useState('fahrschuler');
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const t = useTranslations('Advantages');
  const DriverData = t.raw('DriverData');
  const SchoolsData = t.raw('SchoolsData');

  function tabSwitch(val: string) {
    setValue(val);
    console.log(value);
  }

  const scrollRef = useRef<HTMLDivElement>(null);

  const [showLeft, setShowLeft] = useState(true);

  const updateButtons = () => {
    if (scrollRef.current) {
      const {scrollLeft} = scrollRef.current;
      setShowLeft(scrollLeft > 0);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const {clientWidth} = scrollRef.current;
      const scrollAmount = clientWidth * (isSmallScreen ? 1 : 0.7);
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateButtons();

    container.addEventListener('scroll', updateButtons);
    return () => container.removeEventListener('scroll', updateButtons);
  }, []);
  return (
    <Box sx={{width: '100%', bgcolor: '#FAFAFA'}}>
      <Typography
        sx={{
          fontSize: '36px',
          fontFamily: 'Satoshi500 !important',
          textAlign: 'center',
          color: '#000',
          mt: '48px'
        }}
      >
        {t('title')}
      </Typography>
      <Box
        sx={{
          width: '100%',
          padding: {
            xs: '48px 8px 48px 6px',
            sm: '48px 8px 48px 14px',
            lg: '48px 8px 48px 118px'
          }
        }}
      >
        <Box sx={{padding: '8px'}}>
          <Box
            sx={{
              maxWidth: '336px',
              width: '100%',
              border: '1px solid rgb(212,212,212)',
              padding: '8px',
              backgroundColor: '#FAFAFA',
              borderRadius: '99px',
              boxShadow: 'rgba(0,0,0,0.25) 0px 1px 2px 0px',
              display: 'flex',
              gap: '16px',
              marginBottom: '24px'
            }}
          >
            <Box
              onClick={() => tabSwitch('fahrschuler')}
              sx={{
                maxWidth: value === 'fahrschuler' ? '158px' : '145px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: value === 'fahrschuler' ? '8px 16px' : '8px',
                backgroundColor:
                  value === 'fahrschuler' ? '#fff' : 'transparent',
                borderRadius: value === 'fahrschuler' ? '99px' : 'none',
                boxShadow:
                  value === 'fahrschuler'
                    ? 'rgba(0,0,0,0.15) 0px 2px 8px 0px'
                    : 'none',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer',
                ...(value !== 'fahrschuler' && {
                  '&:hover': {
                    backgroundColor: 'rgb(250,250,250)',
                    borderRadius: '99px',
                    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.25)'
                  }
                })
              }}
            >
              <Box sx={{width: '30px', height: '30px'}}>
                <Image
                  src={User}
                  alt="image"
                  style={{height: '100%', width: '100%'}}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontFamily: 'Inter, sans-serif !important',
                  color: '#2d3748'
                }}
              >
                {t('driverTab')}
              </Typography>
            </Box>
            {/* Second Button */}
            <Box
              onClick={() => tabSwitch('fahrschulen')}
              sx={{
                maxWidth: value === 'fahrschulen' ? '158px' : '145px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: value === 'fahrschulen' ? '8px 16px' : '8px',
                backgroundColor:
                  value === 'fahrschulen' ? '#fff' : 'transparent',
                borderRadius: value === 'fahrschulen' ? '99px' : 'none',
                boxShadow:
                  value === 'fahrschulen'
                    ? 'rgba(0,0,0,0.15) 0px 2px 8px 0px'
                    : 'none',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer',
                ...(value !== 'fahrschulen' && {
                  '&:hover': {
                    backgroundColor: 'rgb(250,250,250)',
                    borderRadius: '99px',
                    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.25)'
                  }
                })
              }}
            >
              <Box sx={{width: '30px', height: '30px'}}>
                <Image
                  src={Car}
                  alt="image"
                  style={{height: '100%', width: '100%'}}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontFamily: 'Inter, sans-serif !important',
                  color: '#2d3748'
                }}
              >
                {t('schoolTab')}
              </Typography>
            </Box>
          </Box>
          <Box sx={{position: 'relative', width: '100%'}}>
            {showLeft && (
              <Button
                onClick={() => scroll('left')}
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  minWidth: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  bgcolor: 'rgba(0,0,0,0.2)',
                  boxShadow: 2
                }}
              >
                <ChevronLeftIcon sx={{color: 'white'}} />
              </Button>
            )}

            <Box
              ref={scrollRef}
              sx={{
                display: 'flex',
                gap: '28px',
                padding: '10px 10px 10px 0',
                overflowX: 'auto',
                overflowY: 'hidden',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none'
                }
              }}
            >
              {value === 'fahrschuler'
                ? DriverData.map((data: any, i: number) => (
                    <motion.div
                      key={data.title}
                      initial={{y: 80, opacity: 0}}
                      whileInView={{y: 0, opacity: 1}}
                      viewport={{once: true}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: i * 0.25
                      }}
                      style={{flexShrink: 0}}
                    >
                      <CardComponent
                        bgColor={data.bgColor}
                        color={data.color}
                        title={data.title}
                        description={data.description}
                      />
                    </motion.div>
                  ))
                : SchoolsData.map((data: any, i: number) => (
                    <motion.div
                      key={data.title}
                      initial={{y: 80, opacity: 0}}
                      whileInView={{y: 0, opacity: [0, 0.5, 1]}}
                      viewport={{once: true}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                        delay: i * 0.25,
                        times: [0, 0.5, 1]
                      }}
                      style={{flexShrink: 0}}
                    >
                      <CardComponent
                        bgColor={data.bgColor}
                        color={data.color}
                        title={data.title}
                        description={data.description}
                      />
                    </motion.div>
                  ))}
            </Box>
            <Button
              onClick={() => scroll('right')}
              sx={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                height: '40px',
                zIndex: 10,
                minWidth: '40px',
                borderRadius: '50%',
                bgcolor: 'rgba(0,0,0,0.2)',
                boxShadow: 2
              }}
            >
              <ChevronRightIcon sx={{color: 'white'}} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

interface CardProps {
  bgColor: string;
  title: string;
  description: string;
  color: string;
}

function CardComponent({bgColor, title, description, color}: CardProps) {
  return (
    <Box sx={{padding: '0px'}}>
      <Box
        sx={{
          width: '400px',
          padding: '16px',
          height: '700px',
          backgroundColor: bgColor,
          borderRadius: '25px',
          flexShrink: 0
        }}
      >
        <Box sx={{padding: '8px'}}>
          <Typography
            sx={{
              fontSize: '24px',
              marginBottom: '20px',
              color: color,
              fontFamily: 'Satoshi500 !important'
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: '16px',
              color: color,
              fontFamily: '"Inter", sans-serif  !important',
              fontWeight: '300'
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
