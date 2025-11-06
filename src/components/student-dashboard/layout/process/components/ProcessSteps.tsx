import localFont from '@/utils/themes';
import {Box, keyframes, Typography} from '@mui/material';
import React, {useEffect, useRef, useState} from 'react';

import Image from 'next/image';
import pen from '@/assets/svgs/dashboard-student/pen.svg';
import cross from '@/assets/svgs/dashboard-student/cross1.svg';
import linkIcon from '@/assets/svgs/dashboard-student/linkIcon.svg';
import tooltip from '@/assets/svgs/dashboard-student/home/tooltip.svg';
import checkmark from '@/assets/svgs/dashboard-student/checkmark.svg';
import cross1 from '@/assets/svgs/dashboard-student/cross2.svg';
import tick from '@/assets/svgs/dashboard-student/tick.svg';

import {useTranslations} from 'next-intl';
import Support from '../../support/Support';

const fillAnimation = keyframes`0%{height:0%} 100%{height:100%}`;

type Props = {
  setActiveKey: React.Dispatch<React.SetStateAction<string>>;
};

export default function ProcessSteps({setActiveKey}: Props) {
  const t = useTranslations('Dashboard.Process.processSteps');

  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [activeBoxes, setActiveBoxes] = useState<{[key: number]: boolean}>({});

  const handleToggle = (id: number) => {
    setActiveBoxes((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  const data = [
    {
      id: 1,
      title: t('step1'),
      points: t.raw('points1'),
      link: t('des1'),
      width: '125px',
      complete: true
    },
    {
      id: 2,
      title: t('step2'),
      points: t.raw('points2'),
      link: '',
      complete: false
    },
    {
      id: 3,
      title: t('step3'),
      points: t.raw('points3'),
      link: t('des3'),
      width: '260px',
      complete: false
    },
    {
      id: 4,
      title: t('step4'),
      points: t.raw('points4'),
      link: t('des4'),
      complete: false
    },
    {
      id: 5,
      title: t('step5'),
      points: t.raw('points5'),
      link: t('des5'),
      complete: false
    },
    {
      id: 6,
      title: t('step6'),
      points: t.raw('points6'),
      link: t('des6'),
      complete: false
    },
    {
      id: 7,
      title: t('step7'),
      points: t.raw('points7'),
      link: t('des7'),
      complete: false
    },
    {
      id: 8,
      title: t('step8'),
      complete: false
    }
  ];

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

  function openModal() {
    setOpen((prev) => !prev);
  }
  return (
    <Box
      sx={{
        // width: '100%',
        border: '2px solid #fff',
        borderRadius: {xs: '24px', md: '2px 24px 24px 2px'},
        background: 'rgba(248,250,252,0.3)',
        backdropFilter: 'blur(15px)',
        boxShadow: `0px 0px 0px 1px rgb(255, 255, 255, rgb(255, 255, 255)), 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)`,
        padding: {xs: '8px', md: '24px'},
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        overflow: 'scroll',
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      <Box
        sx={{
          width: '100%',
          padding: '16px',
          display: 'flex',
          gap: '16px',
          background: 'rgba(255,255,255,0.75)',
          border: '1px solid #fff',
          borderRadius: '18px'
        }}
      >
        <Box
          onClick={openModal}
          ref={modalRef}
          sx={{
            minWidth: '20px',
            height: '20px',
            cursor: 'pointer',
            position: 'relative'
          }}
        >
          <Image
            src={pen}
            alt="penIcon"
            style={{height: '100%', width: '100%'}}
          />
          <Box
            onClick={(e) => e.stopPropagation()}
            sx={{
              position: 'absolute',
              top: 35,
              left: 0,
              border: '1px solid #fff',
              borderRadius: '12px',
              padding: '16px',
              minWidth: '300px',
              width: '100%',
              display: open ? 'flex' : 'none',
              flexDirection: 'column',
              gap: '24px',
              background: '#f0f0fada', //this is different color to trigger it
              backdropFilter: 'blur(8px)',
              boxShadow: `
    0px 0px 0px 1px rgb(255, 255, 255),
    0px 1px 0px 0px rgba(0, 0, 0, 0.25),
    0px 1px 1px 0px rgba(0, 0, 0, 0.25)
  `,
              transformOrigin: 'top right',
              zIndex: 9,
              cursor: 'default'
            }}
          >
            <Typography
              sx={{
                ...localFont.inter14,
                fontFamily: '"Inter", sans-serif !important',
                textAlign: 'center'
              }}
            >
              {t('clickIconTitle')}
            </Typography>
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
                  {t('cancelBtn')}
                </Typography>
              </Box>
              <Box
                component="button"
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
                  {t('saveBtn')}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Typography
          sx={{
            ...localFont.inter14,
            fontWeight: '400',
            fontFamily: '"Inter", sans-serif !important',
            lineHeight: '1.6em',
            color: '#4a5568',
            letterSpacing: '0.01em'
          }}
        >
          {t('para')}
        </Typography>
      </Box>
      {/* Below Box */}
      <Box sx={{width: '100%'}}>
        {data.map((data) => (
          <Steps key={data.id} {...data} setActiveKey={setActiveKey} />
        ))}
      </Box>
    </Box>
  );
}

type PropsData = {
  id: number;
  title?: string;
  points?: string;
  link?: string;
  width?: string;
  complete: boolean;
  setActiveKey: React.Dispatch<React.SetStateAction<string>>;
};

export function Steps({
  id,
  title,
  points,
  link,
  width = '190px',
  complete,
  setActiveKey
}: PropsData) {
  const t = useTranslations('Dashboard.Process.processSteps');
  return id === 8 ? (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '4px 0px',
        gap: '12px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '12px',
          padding: '4px'
        }}
      >
        <Box
          sx={{
            minHeight: '40px',
            width: '40px',
            borderRadius: '50%',
            background:
              'linear-gradient(145deg, rgba(248,250,252,1)), rgba(255,255,255,1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography
            sx={{
              ...localFont.inter18,
              fontFamily: '"Inter", sans-serif !important'
            }}
          >
            {id}
          </Typography>
        </Box>
        <Box
          sx={{
            padding: '6px 16px',
            background:
              'linear-gradient(145deg, rgba(248,250,252,1)), rgba(255,255,255,1)',
            borderRadius: '999px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Typography
            sx={{
              ...localFont.inter16,
              fontFamily: '"Inter", sans-serif !important'
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            height: '40px',
            width: '40px',
            background:
              'linear-gradient(145deg, rgba(248,250,252,1)), rgba(255,255,255,1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Image src={cross} alt="crossIcon" height={20} width={20} />
        </Box>
      </Box>
      <Box
        sx={{
          padding: '24px',
          background:
            'linear-gradient(100deg, rgba(248, 250, 252,1), rgba(255, 255, 255, 1))',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          width: '100%',
          borderRadius: '20px'
        }}
      >
        <Box
          sx={{
            padding: '4px',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}
        >
          <Box sx={{textAlign: 'center'}}>
            <Typography
              sx={{
                ...localFont.inter16,
                fontFamily: '"Inter", sans-serif !important'
              }}
            >
              {t('title1')}
            </Typography>
            <Typography
              sx={{
                ...localFont.inter16,
                fontFamily: '"Inter", sans-serif !important'
              }}
            >
              {t('title2')}
            </Typography>
          </Box>
          <Box sx={{display: 'flex', gap: '4px'}}>
            <Image src={tooltip} alt="tooltip" height={24} width={24} />
            <Typography
              sx={{
                ...localFont.inter14,
                fontFamily: '"Inter", sans-serif !important'
              }}
            >
              {t('title3')}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {xs: 'column', md: 'row'},
            justifyContent: 'center',
            alignItems: 'center',
            padding: '4px',
            gap: '12px'
          }}
        >
          <Box
            onClick={(e) => {
              e.stopPropagation();
              setActiveKey('6');
            }}
            sx={{
              width: 'fit-content',
              cursor: 'pointer',
              padding: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background:
                'linear-gradient(100deg, rgba(70, 17, 245, 0.4) 0%, rgba(234, 0, 255, 0.2) 100%)',
              borderRadius: '18px',
              boxShadow:
                'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px',
              transition: 'transform 0.25s ease',
              '&:hover': {
                transform: 'translateY(-6px)'
              }
            }}
          >
            <Typography
              sx={{
                ...localFont.inter14,
                fontFamily: '"Inter", sans-serif !important',
                fontWeight: '500'
              }}
            >
              {t('btn1')}
            </Typography>
            <Image src={linkIcon} alt="linkIcon" height={16} width={16} />
          </Box>
          {/* Second Button */}
          <Box
            onClick={(e) => {
              e.stopPropagation();
              setActiveKey('6');
            }}
            sx={{
              width: 'fit-content',
              cursor: 'pointer',
              padding: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background:
                'linear-gradient(100deg, rgba(48, 88, 255, 0.4) 0%, rgba(30, 245, 255, 0.2) 100%)',
              borderRadius: '18px',
              boxShadow:
                'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px',
              transition: 'transform 0.25s ease',
              '&:hover': {
                transform: 'translateY(-6px)'
              }
            }}
          >
            <Typography
              sx={{
                ...localFont.inter14,
                fontFamily: '"Inter", sans-serif !important',
                fontWeight: '500'
              }}
            >
              {t('btn2')}
            </Typography>
            <Image src={linkIcon} alt="linkIcon" height={16} width={16} />
          </Box>
        </Box>
      </Box>
    </Box>
  ) : (
    <Box
      sx={{display: 'flex', width: '100%', height: {xs: '470px', lg: '316px'}}}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          padding: '8px 4px'
        }}
      >
        <Box
          sx={{
            minHeight: '40px',
            width: '40px',
            borderRadius: '50%',
            background:
              'linear-gradient(145deg, rgba(248,250,252,1)), rgba(255,255,255,1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: complete
              ? '0px 0px 0px 1px rgba(30, 245, 165, 0.25), 0px 1px 0px 0px rgba(30, 245, 165, 0.25), 0px 2px 4px 0px rgba(30, 245, 165, 0.08)'
              : 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.08) 0px 2px 4px 0px'
          }}
        >
          <Typography
            sx={{
              ...localFont.inter18,
              fontFamily: '"Inter", sans-serif !important'
            }}
          >
            {id}
          </Typography>
        </Box>
        <Box
          sx={{
            position: 'relative',
            height: '100%',
            width: '4px',
            borderRadius: '999px',
            background: 'white', // base background
            overflow: 'hidden'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              background:
                'linear-gradient(270deg,rgb(94, 234, 212) 0%,rgb(165, 243, 252) 100%)',
              borderRadius: '999px',
              height: complete ? '100%' : '0%',
              animation: complete ? `${fillAnimation} 1s ease forwards` : 'none'
            }}
          />
        </Box>
      </Box>
      <Box sx={{width: '100%', padding: '4px'}}>
        <Box sx={{display: 'flex', gap: '12px', padding: '4px'}}>
          <Box
            sx={{
              padding: '6px 16px',
              background:
                'linear-gradient(145deg, rgba(248,250,252,1)), rgba(255,255,255,1)',
              boxShadow: complete
                ? '0px 0px 0px 1px rgba(30, 245, 165, 0.25), 0px 1px 0px 0px rgba(30, 245, 165, 0.25), 0px 2px 4px 0px rgba(30, 245, 165, 0.08)'
                : 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.08) 0px 2px 4px 0px',
              borderRadius: '999px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Typography
              sx={{
                ...localFont.inter16,
                fontFamily: '"Inter", sans-serif !important',
                color: complete ? '#0d9488' : '#2d3748'
              }}
            >
              {title}
            </Typography>
          </Box>
          <Box
            sx={{
              height: '40px',
              width: '40px',
              background:
                'linear-gradient(145deg, rgba(248,250,252,1)), rgba(255,255,255,1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: complete
                ? '0px 0px 0px 1px rgba(30, 245, 165, 0.25), 0px 1px 0px 0px rgba(30, 245, 165, 0.25), 0px 2px 4px 0px rgba(30, 245, 165, 0.08)'
                : 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.08) 0px 2px 4px 0px'
            }}
          >
            <Image
              src={complete ? checkmark : cross}
              alt="crossIcon"
              height={20}
              width={20}
            />
          </Box>
        </Box>
        <Box
          sx={{
            // width: '100%',
            mt: '12px',
            padding: '4px',
            display: 'flex',
            flexDirection: {xs: 'column', lg: 'row'},
            gap: '48px'
          }}
        >
          <Box
            sx={{
              flex: 1
              //   border: '1px solid black'
            }}
          >
            <Box
              sx={{
                '& ul': {
                  padding: '4px 4px 4px 30px',
                  margin: 0,
                  listStyleType: 'disc',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                },
                '& li': {
                  ...localFont.inter14,
                  fontFamily: '"Inter", sans-serif !important'
                }
              }}
              dangerouslySetInnerHTML={{__html: points as string}}
            />
          </Box>
          {link && (
            <Box
              onClick={(e) => {
                e.stopPropagation();
                if (id === 1 || id === 2 || id === 8) return;
                if (id === 3) setActiveKey('6');
                if (id === 4 || id === 6) setActiveKey('3');
                if (id === 5 || id === 7) setActiveKey('4');
              }}
              sx={{
                flex: 1,
                //   border: '1px solid red',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  padding: '12px',
                  background: '#fff',
                  borderRadius: '18px',
                  maxWidth: width,
                  width: '100%',
                  cursor: 'pointer'
                }}
              >
                <Typography
                  sx={{
                    ...localFont.inter14,
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '500'
                  }}
                >
                  {link}
                </Typography>
                <Box
                  sx={{
                    height: '16px',
                    width: '16px',
                    alignSelf: 'flex-end'
                  }}
                >
                  <Image src={linkIcon} alt="linkIcon" height={16} width={16} />
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
