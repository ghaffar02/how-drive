'use client';

import localFont from '@/utils/themes';
import {
  Box,
  Typography,
  CircularProgress,
  circularProgressClasses
} from '@mui/material';
import {animate, useMotionValue} from 'framer-motion';
import {useTranslations} from 'next-intl';
import Image from 'next/image';
import React, {useEffect, useRef, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import pen from '@/assets/svgs/dashboard-student/pen.svg';
import LessonDropDown from './LessonDropDown';

interface LessonCardProps {
  title: string;
  completedHours: number;
  totalHours: number;
  progressValue: number;
}

export default function LessonCard({
  title,
  completedHours,
  totalHours,
  progressValue
}: LessonCardProps) {
  const [progress, setProgress] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);
  const motionProgress = useMotionValue(0);
  const t = useTranslations('SchoolDashboard.MessageLesson');
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        dropdownRef.current.contains(event.target as Node)
      ) {
        return;
      }
      if (iconRef.current && iconRef.current.contains(event.target as Node)) {
        return;
      }

      setOpenDropdown(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const unsub = motionProgress.on('change', (latest) => {
      setProgress(latest);
    });

    const steps: number[] = [];
    for (let i = 20; i < progressValue; i += 20) steps.push(i);
    steps.push(progressValue);

    let index = 0;
    let currentStart = 0;

    function goNextStep() {
      if (index >= steps.length) return;

      const next = steps[index];
      animate(currentStart, next, {
        duration: 0.001,
        ease: 'easeInOut',
        onUpdate: (v) => motionProgress.set(v),
        onComplete: () => {
          currentStart = next;
          index++;
          setTimeout(goNextStep, 100);
        }
      });
    }

    goNextStep();
    return () => unsub();
  }, [progressValue, motionProgress]);

  return (
    <Box
      sx={{
        // maxWidth: {xs: '100%', lg: '357px'},
        width: '100%',
        height: '100%',
        background: 'rgba(255,255,255,0.75)',
        padding: {xs: '16px', md: '24px 16px 24px 24px '},
        borderRadius: '18px',
        display: 'flex',
        flexDirection: {xs: 'column', md: 'row'},
        alignItems: {xs: 'end', md: 'start'},
        justifyContent: 'space-between',
        // height: {xs: '138px', sm: 'auto', lg: '100%'},
        border: '1px solid #fff',
        boxShadow:
          '0px 0px 0px 1px #ffffff, 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)'
      }}
    >
      {/* Icon + Title */}

      <Box
        sx={{
          // mt: {lg: -2, xl: -4},
          width: '100%',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          // alignItems: 'start',
          // justifyContent: 'start',
          gap: {xs: '4px', md: '24px'}
        }}
      >
        <Typography
          sx={{
            ...localFont.inter16,
            fontSize: {xs: '14px', md: '15px', lg: '16px'},
            fontFamily: '"Inter", sans-serif !important',
            color: '#2D3748',
            fontWeight: 500
          }}
        >
          {title}
        </Typography>

        {/* Progress text + tooltip */}
        <Box
          sx={{
            pl: {xs: '0px', md: '24px'},
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            maxWidth: {xs: '180px', sm: '100%'},
            width: '100%'
          }}
        >
          <Typography
            sx={{
              ...localFont.inter14,
              fontSize: {xs: '12px', md: '13px', lg: '14px'},
              fontFamily: '"Inter", sans-serif !important',
              color: '#2D3748',
              fontWeight: '300'
            }}
          >
            <Typography
              component="span"
              sx={{
                ...localFont.inter18,
                fontSize: {xs: '15px', md: '17px', lg: '18px'},
                fontFamily: '"Inter", sans-serif !important',
                color: '#07A66B',
                fontWeight: 600,
                mr: '4px'
              }}
            >
              {completedHours}
            </Typography>
            / {totalHours} <span></span>
            {t('hours')}
          </Typography>
          {/* <Box sx={{}}>
            <Image
              src={pen}
              alt="edit"
              style={{height: '100%', width: '100%'}}
            />
          </Box> */}

          <Box
            ref={iconRef}
            sx={{
              height: '20px',
              width: '20px',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            <Image
              src={pen}
              alt="edit"
              style={{height: '100%', width: '100%'}}
              onClick={() => setOpenDropdown((prev) => !prev)}
            />
            <AnimatePresence>
              {openDropdown && (
                <Box
                  ref={dropdownRef}
                  component={motion.div}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    y: 100,
                    x: 20,
                    originX: 1,
                    originY: 0
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    x: 0,
                    originX: 1,
                    originY: 0
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    // dur: 1,
                    y: 100,
                    x: 20,
                    originX: 1,
                    originY: 0
                  }}
                  transition={{
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 300,
                    damping: 25
                  }}
                  sx={{
                    // bgcolor: '#000',
                    position: 'absolute',
                    zIndex: 99999,
                    bottom: '100%',
                    right: 0,
                    mb: '8px',
                    width: {xs: '300px'},
                    overflow: 'visible',
                    border: '1px solid rgb(255, 255, 255)',
                    backgroundColor: '#f0f0fa99',
                    backdropFilter: 'blur(8px)',

                    boxShadow: `
    0px 0px 0px 1px rgb(255, 255, 255),
    0px 1px 0px 0px rgba(0, 0, 0, 0.25),
    0px 1px 1px 0px rgba(0, 0, 0, 0.25)
  `,
                    borderRadius: '12px',
                    transformOrigin: 'top right'
                  }}
                >
                  <LessonDropDown Label1={t('lable1')} Label2={t('lable2')} />
                </Box>
              )}
            </AnimatePresence>
          </Box>
        </Box>
      </Box>

      <svg width="0" height="0">
        <defs>
          <linearGradient id="circularGradient" x1="0" y1="0" x2="0" y2="1">
            {/* 🎨 Replace these two with your own gradient colors */}
            <stop offset="0%" stopColor="#4611f5ff" />
            <stop offset="100%" stopColor="#ea00ff" />
          </linearGradient>
        </defs>
      </svg>

      {/* -------- Right content : Circular Progress -------- */}
      <Box>
        <Box
          sx={{
            position: 'relative',
            display: 'inline-flex',
            // alignItems: 'center',
            zIndex: 0,
            transform: {
              xs: 'scale(1)',
              md: 'scale(1.3)',
              lg: 'scale(1.6)'
            },
            mt: {md: 1, lg: '20px'},
            // bgcolor: '#000',
            ml: {xs: '1%', md: '-20%', lg: '-75px'}
          }}
        >
          <CircularProgress
            variant="determinate"
            value={100}
            size={59}
            thickness={4}
            // thickness={2.5}
            sx={{
              color: '#fff',
              position: 'absolute',
              left: 0,
              top: 0,
              zIndex: 1
            }}
          />
          <CircularProgress
            variant="determinate"
            value={progress}
            // value={progressValue}
            size={59}
            thickness={4}
            // thickness={2.5}
            sx={{
              borderRadius: '50%',
              zIndex: 1,

              boxShadow:
                ' rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.08) 0px 2px 4px 0px',

              [`& .${circularProgressClasses.circle}`]: {
                stroke: 'url(#circularGradient)',
                strokeLinecap: 'round'
              }
            }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              zIndex: 1,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'

              // borderRadius: '30px'
            }}
          >
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: '600',
                color: '#2D3748',
                fontFamily: '"Inter", sans-serif !important'
              }}
            >
              {progressValue}
              <Typography
                component="span"
                sx={{
                  fontSize: '10px',
                  fontWeight: '400',
                  color: '#2D3748',
                  fontFamily: '"Inter", sans-serif !important'
                }}
              >
                %
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
