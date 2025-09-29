'use client';
import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import Image, {StaticImageData} from 'next/image';
import React, {useState} from 'react';

import Building from '@/assets/svgs/dashboard-student/home/building.svg';
import Tooltip from '@/assets/svgs/dashboard-student/home/tooltip.svg';
import Grade from '@/assets/svgs/dashboard-student/home/grade.svg';
import Steering from '@/assets/svgs/dashboard-student/home/steering.svg';
import {useTranslations} from 'next-intl';

export default function Header() {
  const t = useTranslations('Dashboard.home.header');
  const titles = t.raw('data');
  const data = [
    {
      title1: 'Führerscheinstelle',
      title2: 'Nicht angemeldet',
      title3: 'Angemeldet',
      status: true,
      imgSrc: Building.src,
      bgColor: 'rgba(235,0,255,0.1)',
      id: 1,
      tooltip: ''
    },
    {
      title1: 'Theorieprüfung',
      title2: 'Nicht angemeldet',
      title3: '25.07.2025',
      status: false,
      imgSrc: Grade.src,
      bgColor: '#00bcd11a',
      id: 2,
      tooltip: ''
    },
    {
      title1: 'Praktische Prüfung',
      title2: 'Nicht angemeldet',
      title3: '25.07.2025',
      status: false,
      imgSrc: Steering.src,
      bgColor: '#1270ff1a',
      id: 3,
      tooltip: ''
    }
  ];
  const updatedData = data.map((item, index) => ({
    ...item,
    ...titles[index]
  }));
  return (
    <Box
      sx={{
        // maxWidth: {xs: '400px', md: '100%'},
        width: '100%',
        background: 'rgba(255,255,255,0.75)',
        padding: {xs: '16px 12px 16px 16px', md: '8px'},
        borderRadius: '18px',
        display: 'flex',
        flexDirection: {xs: 'column', md: 'row'},
        alignItems: 'center',
        gap: {xs: '8px', lg: '10px'},
        height: {xs: 'auto', xl: '100%'}
      }}
    >
      {updatedData.map((item, i) => (
        <Card key={i} {...item} />
      ))}
    </Box>
  );
}

type CardProps = {
  title1: string;
  title2: string;
  title3: string;
  status?: boolean;
  imgSrc: StaticImageData;
  bgColor: string;
  id: number;
  tooltip: string;
};

function Card({
  title1,
  title2,
  title3,
  status,
  imgSrc,
  bgColor,
  id,
  tooltip
}: CardProps) {
  const [show, setShow] = useState(status);
  const [hover, setHover] = useState(false);
  return (
    <>
      <Box
        sx={{
          maxWidth: '356px',
          width: '100%',
          padding: {xs: '0px', md: '16px'}
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: {xs: '4px', lg: '16px'}
          }}
        >
          <Box
            sx={{
              height: '32px',
              width: '32px',
              borderRadius: '50%',
              background: bgColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Image src={imgSrc} alt="icon" height={20} width={20} />
          </Box>
          <Typography
            sx={{
              ...localFont.inter16,
              fontSize: {
                xs: '12px',
                md: '14px',
                lg: '16px'
              },
              fontFamily: '"Inter", sans-serif !important',
              color: '#3f3f46'
            }}
          >
            {title1}
          </Typography>
        </Box>
        <Box
          sx={{
            pl: {xs: '16px', lg: '48px'},
            display: 'flex',
            alignItems: 'center',
            gap: {xs: '4px', sm: '16px'},
            mt: {xs: '0px', sm: '10px'},
            maxWidth: {xs: '180px', sm: '100%'},
            width: '100%'
          }}
        >
          <Typography
            onClick={() => setShow((prev) => !prev)}
            sx={{
              ...localFont.inter16,
              fontSize: {
                xs: '12px',
                md: '14px',
                lg: '16px'
              },
              fontFamily: '"Inter", sans-serif !important',
              color: show ? '#07a66b' : '#d93a32',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            {show ? title3 : title2}
          </Typography>
          <Box
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{height: '20px', width: '20px', position: 'relative'}}
          >
            <Image
              src={Tooltip}
              alt="tooltip"
              style={{height: '100%', width: '100%'}}
            />
            <Box
              sx={{
                display: hover ? 'block' : 'none',
                position: 'absolute',
                background: 'transparent',
                height: '15px',
                width: {xs: '30px', sm: '65px', md: '65px'},
                top: 18,
                left: {xs: -5, sm: -20}
              }}
            />
            {hover && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 30,
                  left: -75,
                  // height: '150px',
                  width: {xs: '180px', md: '200px'},
                  background: '#fff',
                  padding: '16px',
                  borderRadius: '12px',
                  zIndex: 99
                }}
              >
                <Typography
                  sx={{
                    ...localFont.inter16,
                    fontSize: {
                      xs: '12px',
                      md: '14px',
                      lg: '16px'
                    },
                    fontFamily: '"Inter", sans-serif !important',
                    color: '#3f3f46'
                  }}
                >
                  {tooltip}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      {id < 3 && (
        <Box
          sx={{
            width: {xs: '100%', md: '1px'},
            height: {xs: '1px', md: '11.7vh'},
            backgroundImage: {
              xs: 'linear-gradient(to right, rgba(245,245,245,0.6), rgba(203,203,203,1), rgba(245,245,245,0.6))',
              md: 'linear-gradient(to bottom, rgba(245,245,245,0.6), rgba(203,203,203,1), rgba(245,245,245,0.6))'
            },
            minWidth: {xs: '1px'},
            minHeight: {xs: '1px'}
          }}
        />
      )}
    </>
  );
}
