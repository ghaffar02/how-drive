import React, {useEffect, useRef, useState} from 'react';
import {Box, Typography} from '@mui/material';
import localFont from '@/utils/themes';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import pen from '@/assets/svgs/dashboard-student/pen.svg';
import Image from 'next/image';
import cross1 from '@/assets/svgs/dashboard-student/cross2.svg';
import tick from '@/assets/svgs/dashboard-student/tick.svg';

const MotionBox = motion(Box);

export default function Process() {
  const t = useTranslations('Dashboard.home.process');
  const [open, setOpen] = useState(false);
  const [activeBoxes, setActiveBoxes] = useState<{[key: number]: boolean}>({});
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const handleToggle = (id: number) => {
    setActiveBoxes((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  function openModal() {
    setOpen((prev) => !prev);
  }

  const handleSave = () => {
    // Here you can do something with activeBoxes (e.g. send to API)
    console.log('Saved data:', activeBoxes);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const data = [
    {
      id: 1,
      title: t('step1'),
      status: true
    },
    {
      id: 2,
      title: t('step2'),
      status: false
    },
    {
      id: 3,
      title: t('step3'),
      status: false
    },
    {
      id: 4,
      title: t('step4'),
      status: false
    },
    {
      id: 5,
      title: t('step5'),
      status: false
    },
    {
      id: 6,
      title: t('step6'),
      status: false
    },
    {
      id: 7,
      title: t('step7'),
      status: false
    },
    {
      id: 8,
      title: t('step8'),
      status: false
    }
  ];
  return (
    <Box
      sx={{
        background: 'rgba(255,255,255,0.75)',
        padding: {xs: '16px', md: '24px'},
        border: '1px solid white',
        borderRadius: '18px',
        // maxWidth: '660px',
        width: '100%',
        height: '100%',
        // height: {xs: 'auto', lg: '100%'},
        display: {xs: 'block', lg: 'flex'},
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow:
          '0px 0px 0px 1px #ffffff, 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter16,
            fontFamily: '"Inter", sans-serif !important',
            color: '#2d3748',
            mb: '16px',
            fontWeight: '500'
          }}
        >
          {t('title')}
        </Typography>
        <Box
          ref={modalRef}
          onClick={(e) => {
            e.stopPropagation();
            openModal();
          }}
          sx={{
            height: '20px',
            width: '20px',
            cursor: 'pointer',
            position: 'relative'
          }}
        >
          <Image src={pen} alt="edit" style={{height: '100%', width: '100%'}} />
          {/* The code for the pop up */}
          <Box
            onClick={(e) => e.stopPropagation()}
            sx={{
              position: 'absolute',
              top: 35,
              right: 0,
              border: '1px solid #fff',
              borderRadius: '12px',
              padding: '16px',
              minWidth: '300px',
              width: '100%',
              display: open ? 'flex' : 'none',
              flexDirection: 'column',
              gap: '24px',
              background: '#f0f0fa99',
              backdropFilter: 'blur(8px)',
              zIndex: 999,
              cursor: 'default'
            }}
          >
            {/* Steps */}
            <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
              {data.map((step) => {
                const isActive = activeBoxes[step.id] || false;
                return (
                  <Box
                    onClick={() => handleToggle(step.id)}
                    key={step.id}
                    sx={{
                      width: 'fit-content',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '6px 16px 6px 6px',
                      background: isActive
                        ? 'linear-gradient(to left, rgba(165,243,252,1), rgba(94,234,212,1))'
                        : 'linear-gradient(to right, rgba(248,250,252,1), rgba(255,255,255,1))',
                      borderRadius: '999px',
                      cursor: 'pointer',
                      boxShadow:
                        'rgba(0, 0, 0, 0.21) 0px 0.48175px 1.63795px -1.5px, rgba(0, 0, 0, 0.18) 0px 1.83083px 6.22481px -3px, rgba(0, 0, 0, 0.02) 0px 8px 27.2px -4.5px'
                    }}
                  >
                    <Box
                      sx={{
                        width: '30px',
                        height: '30px',
                        background: isActive ? '#fff' : '#71717a',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Typography
                        sx={{
                          ...localFont.inter14,
                          color: isActive ? '#0d9488' : '#fff',
                          fontFamily: '"Inter", sans-serif !important'
                        }}
                      >
                        {step.id}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        ...localFont.inter14,
                        color: isActive ? '#0d9488' : '#4a5568',
                        fontFamily: '"Inter", sans-serif !important'
                      }}
                    >
                      {step.title}
                    </Typography>
                  </Box>
                );
              })}
            </Box>

            {/* Buttons */}
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '16px'}}>
              <Box
                component="button"
                onClick={handleCancel}
                sx={{
                  padding: '8px 12px',
                  display: 'flex',
                  gap: '8px',
                  alignItems: 'center',
                  background: '#dc2626',
                  borderRadius: '10px',
                  border: 'none',
                  minWidth: '95px',
                  cursor: 'pointer',
                  '&:hover': {
                    background: 'rgb(153,25,25)'
                  },
                  '&:active': {
                    background: 'rgb(82,82,91)'
                  }
                }}
              >
                <Image src={cross1} alt="cancel" height={16} width={16} />
                <Typography
                  sx={{
                    ...localFont.inter14,
                    color: '#fff',
                    fontFamily: '"Inter", sans-serif !important'
                  }}
                >
                  {/* {t('cancelBtn')} */}
                  Cancel
                </Typography>
              </Box>
              <Box
                component="button"
                onClick={handleSave}
                sx={{
                  padding: '8px 12px',
                  display: 'flex',
                  gap: '8px',
                  alignItems: 'center',
                  background: '#0d9488',
                  borderRadius: '10px',
                  border: 'none',
                  minWidth: '95px',
                  cursor: 'pointer',
                  '&:hover': {
                    background: 'rgb(12,93,86)'
                  },
                  '&:active': {
                    background: 'rgb(82,82,91)'
                  }
                }}
              >
                <Image src={tick} alt="save" height={16} width={16} />
                <Typography
                  sx={{
                    ...localFont.inter14,
                    color: '#fff',
                    fontFamily: '"Inter", sans-serif !important'
                  }}
                >
                  {/* {t('saveBtn')} */}
                  Save
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* The code for the pop up */}
        </Box>
      </Box>
      {/* Below is cards code */}
      <MotionBox
        sx={{
          maxWidth: '600px',
          width: '100%',
          margin: 'auto',
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: {
            xs: 'flex-start !important',
            md: 'center !important'
          },
          rowGap: {xs: '10px', lg: '80px'},
          position: 'relative',
          overflow: 'hidden',
          padding: {xs: '15px 0px', md: '20px 0px'}
        }}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.4, delay: 0.4, ease: 'easeInOut'}}
      >
        {data.map((item, i) => (
          <Card
            key={i + 1}
            id={item.id}
            title={item.title}
            status={item.status}
          />
        ))}
        {[1, 2, 3, 4, 5].map((i, index) => (
          <React.Fragment key={i}>
            <MotionBox
              key={i}
              sx={{
                display: {xs: 'none', lg: 'block'},
                position: 'absolute',
                top: 40,
                mt: i > 1 ? `${i * 61 - 59}px` : '0px',
                width: i == 1 || i == 5 ? '70%' : '90%',
                right: i == 1 ? 27 : 'initial',
                left: i == 5 ? 30 : 'initial',
                height: '1px',
                background: '#14b8a6'
              }}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.4, delay: 0.4, ease: 'easeInOut'}}
            />
            <MotionBox
              key={index}
              sx={{
                display: i == 5 ? 'none' : {xs: 'none', lg: 'block'},
                position: 'absolute',
                width: i == 1 ? '64px' : '63px',
                height: i == 1 ? '64px' : '62px',
                mt: i > 1 ? `${i * 61 - 59}px` : '0px',
                top: 40,
                zIndex: 100,
                borderRadius: '50%',
                background:
                  i % 2 === 0
                    ? 'conic-gradient(transparent 0deg 180deg, #14b8a6 180deg 360deg)'
                    : 'conic-gradient(#14b8a6 0deg 180deg, transparent 180deg 360deg)',
                mask: 'radial-gradient(farthest-side, transparent calc(100% - 1px), #000 0)',
                WebkitMask:
                  'radial-gradient(farthest-side, transparent calc(100% - 1px), #000 0)',
                ...(i === 1 || i === 3 || i === 5
                  ? {right: 0}
                  : i === 2 || i === 4
                    ? {left: 0}
                    : {})
              }}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.4, delay: 0.4, ease: 'easeInOut'}}
            />
          </React.Fragment>
        ))}
      </MotionBox>
    </Box>
  );
}

type CardProps = {
  id: number;
  title: string;
  status?: boolean;
};

function Card({id, title, status}: CardProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 16px 6px 6px',
        background: status
          ? 'linear-gradient(to left, rgba(165,243,252,1), rgba(94,234,212,1))'
          : 'linear-gradient(to right, rgba(248,250,252,1), rgba(255,255,255,1))',
        borderRadius: '999px',
        cursor: 'pointer',
        position: 'relative',
        zIndex: 100
      }}
    >
      <Box
        sx={{
          width: '30px',
          height: '30px',
          background: status ? '#fff' : '#71717a',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter14,
            color: status ? '#0d9488' : '#fff',
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          {id}
        </Typography>
      </Box>
      <Typography
        sx={{
          ...localFont.inter14,
          color: status ? '#0d9488' : '#4a5568',
          fontFamily: '"Inter", sans-serif !important'
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
