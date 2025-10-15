'use client';
import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import Image, {StaticImageData} from 'next/image';
import React, {useState} from 'react';

import Building from '@/assets/svgs/dashboard-student/home/building.svg';
import Pen from '@/assets/svgs/dashboard-student/pen.svg';
import Grade from '@/assets/svgs/dashboard-student/home/grade.svg';
import Steering from '@/assets/svgs/dashboard-student/home/steering.svg';
import Building1 from '@/assets/svgs/dashboard-student/home/smallBuilding.svg';
import Grade1 from '@/assets/svgs/dashboard-student/home/smallGrade.svg';
import Steering1 from '@/assets/svgs/dashboard-student/home/smallSteering.svg';
import {useTranslations} from 'next-intl';

export default function ExamInfo() {
  const t = useTranslations('Dashboard.home.header');
  const titles = t.raw('data');
  const data = [
    {
      title1: 'Führerscheinstelle',
      title2: 'Nicht angemeldet',
      title3: 'Angemeldet',
      status: true,
      imgSrc: Building.src,
      imgSrc1: Building1.src,
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
      imgSrc1: Grade1.src,
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
      imgSrc1: Steering1.src,
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
        width: '100%',
        height: '100%',
        background: 'rgba(255,255,255,0.75)',
        padding: {xs: '16px', md: '8px'},
        borderRadius: '18px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: {xs: '8px', lg: '10px'},
        // height: {xs: '100%', lg: '100%'},
        border: '1px solid #fff',
        boxShadow:
          '0px 0px 0px 1px #ffffff, 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)'
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
  imgSrc1: StaticImageData;
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
  imgSrc1,
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
          // maxWidth: '356px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
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
              height: {xs: '24px', sm: '32px'},
              width: {xs: '24px', sm: '32px'},
              borderRadius: '50%',
              background: bgColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box
              sx={{
                display: {xs: 'none', sm: 'block'},
                height: '20px',
                width: '20px'
              }}
            >
              <Image src={imgSrc} alt="icon" height={20} width={20} />
            </Box>
            <Box
              sx={{
                display: {xs: 'block', sm: 'none'},
                height: '16px',
                width: '16px'
              }}
            >
              <Image src={imgSrc1} alt="icon" height={16} width={16} />
            </Box>
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
              color: '#3f3f46',
              fontWeight: '300',
              lineHeight: '1.5em'
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
            justifyContent: 'space-between',
            gap: {xs: '4px', sm: '16px'},
            mt: {xs: '0px', sm: '10px'},
            // maxWidth: {xs: '180px', sm: '100%'},
            width: '100%'
          }}
        >
          <Typography
            // onClick={() => setShow((prev) => !prev)}
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
              cursor: 'pointer',
              lineHeight: '1.4em'
            }}
          >
            {show ? title3 : title2}
          </Typography>
          <Box
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{
              height: '20px',
              width: '20px',
              position: 'relative',
              cursor: 'pointer'
            }}
          >
            <Image
              src={Pen}
              alt="edit"
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
                  zIndex: 101,
                  boxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.05)'
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
            width: '100%',
            height: '1px',
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
