'use client';
import React from 'react';
import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import Image, {StaticImageData} from 'next/image';
import location from '@/assets/svgs/dashboard-student/home/location.svg';
import phone from '@/assets/svgs/dashboard-student/phone.svg';
import emailGrey from '@/assets/svgs/dashboard-student/emailGrey.svg';
import link from '@/assets/svgs/dashboard-student/link.svg';
import time from '@/assets/svgs/dashboard-student/time.svg';

import {useTranslations} from 'next-intl';

type DetailProps = {
  show: boolean;
};

export default function DetailSide({show}: DetailProps) {
  const t = useTranslations('Dashboard.Process.detailSide');
  return (
    <Box
      sx={{
        display: {xs: 'none', md: 'block'},
        minWidth: {md: '230px', lg: '300px'},
        maxWidth: {md: '230px', lg: '300px'},
        width: '100%',
        // borderRadius: '10px',
        border: '2px solid #fff',
        p: '24px 12px',
        bottom: '34px',
        background: 'rgba(248,250,252,0.3)',
        backdropFilter: 'blur(15px)',
        boxShadow: `0px 0px 0px 1px rgb(255, 255, 255, rgb(255, 255, 255)), 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)`,
        // transformOrigin: 'center',
        // transition: 'all 0.3s ease-in-out',
        // transform: show ? 'scale(1)' : 'scale(0.8)',
        // opacity: show ? 1 : 0,
        // maxHeight: 'calc(100vh - 84px)',
        overflowY: 'auto',
        // hide scrollbars
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}
    >
      {/* Content box */}
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <Typography
            sx={{
              ...localFont.inter16,
              fontWeight: '500',
              fontFamily: '"Inter", sans-serif !important',
              lineHeight: '1.5em'
            }}
          >
            {t('title1')}
          </Typography>
          <Box
            sx={{
              padding: '8px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <Typography
              sx={{
                color: '#000',
                fontSize: '24px',
                fontWeight: '300',
                fontFamily: '"Inter", sans-serif !important'
              }}
            >
              {show ? 'B' : '—'}
            </Typography>
            <Typography
              sx={{
                color: '#3F3F46',
                fontSize: '14.4px',
                fontWeight: '300',
                fontFamily: '"Inter", sans-serif !important'
              }}
            >
              {show ? '(BF17)' : ''}
            </Typography>
          </Box>
        </Box>

        <InfoCard title={t('title2')} value={show ? 'Hamburg' : '—'} />
        <Box>
          <InfoCard title={t('title3')} value={show ? 'Hamburg-Mitte' : '—'} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              '& > *:not(:last-child)': {
                marginBottom: '6px'
              },
              marginTop: '10px'
            }}
          >
            <InfoItem
              icon={location}
              label={show ? 'Ausschläger Weg 100' : '—'}
            />
            <InfoItem icon={phone} label={show ? '040/42858-0' : '—'} />
            <InfoItem
              icon={emailGrey}
              label={show ? 'fuehrerschein@lbv.hamburg.de' : '—'}
            />
          </Box>
        </Box>
        <Box>
          <InfoCard title={t('title4')} value={show ? 'Hamburg-Mitte' : '—'} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              '& > *:not(:last-child)': {
                marginBottom: '6px'
              },
              marginTop: '10px'
            }}
          >
            <InfoItem
              icon={location}
              label={show ? 'Ausschläger Weg 100' : '—'}
            />
            <InfoItem icon={phone} label={show ? '040/42858-0' : '—'} />
            <InfoItem
              icon={emailGrey}
              label={show ? 'fuehrerschein@lbv.hamburg.de' : '—'}
            />
          </Box>
        </Box>
        <Box>
          <InfoCard title={t('title5')} value={show ? 'Mundsburg' : '—'} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              '& > *:not(:last-child)': {
                marginBottom: '6px'
              },
              marginTop: '10px'
            }}
          >
            <InfoItem
              icon={location}
              label={show ? 'Ausschläger Weg 100' : '—'}
            />
            <InfoItem icon={phone} label={show ? '040/42858-0' : '—'} />
            <InfoItem
              icon={emailGrey}
              label={show ? 'fuehrerschein@lbv.hamburg.de' : '—'}
            />
            <InfoItem
              icon={link}
              label={show ? 'http://mundsburg-fahrschule.de/' : '—'}
            />
            <InfoItem
              icon={time}
              label={
                show
                  ? 'Mo. – Do.: 12:00 – 19:00 UhrFr.: 12:00 – 16:30 Uhr'
                  : '—'
              }
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

type InfoCardProps = {
  title: string;
  value: string;
};

function InfoCard({title, value}: InfoCardProps) {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <Typography
        sx={{
          ...localFont.inter16,
          fontWeight: '500',
          fontFamily: '"Inter", sans-serif !important'
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          padding: '8px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter16,
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
}

type InfoItemProps = {
  icon: StaticImageData;
  label: string;
};

function InfoItem({icon, label}: InfoItemProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '10px'
      }}
    >
      <Image
        style={{height: '20px', width: '20px', objectFit: 'contain'}}
        src={icon}
        alt={label}
      />
      <Typography
        sx={{
          ...localFont.inter14,
          fontWeight: '400',
          fontFamily: '"Inter", "Inter Placeholder", sans-serif !important',
          color: '#71717A',
          lineHeight: '20px'
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}
