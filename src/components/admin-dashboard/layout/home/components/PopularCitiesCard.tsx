'use client';
import {Box, Typography} from '@mui/material';
import React from 'react';
import localFont from '@/utils/themes';
import {usePathname} from 'next/navigation';

type CityData = {
  city: string;
  value: number;
};

type PopularCitiesCardProps = {
  schools: CityData[];
  students: CityData[];
};

export default function PopularCitiesCard({schools, students}: PopularCitiesCardProps) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const formatter = new Intl.NumberFormat(locale === 'de' ? 'de-DE' : 'en-US');

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        border: '1px solid #fff',
        borderRadius: '18px',
        padding: '24px',
        background: '#ffffffbf',
        boxShadow:
          '0px 0px 0px 1px #ffffff, 0px 1px 0px 0px rgba(0,0,0,0.25), 0px 1px 1px 0px rgba(0,0,0,0.25)',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        overflow: 'hidden'
      }}
    >
      <Typography
        sx={{
          ...localFont.inter18,
          fontFamily: '"Inter", sans-serif !important',
          fontWeight: '500',
          color: '#3f3f46'
        }}
      >
        Popular Cities
      </Typography>

      <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px', flex: 1}}>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
          <Typography
            sx={{
              ...localFont.inter14,
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: '500',
              color: '#3f3f46'
            }}
          >
            Schools
          </Typography>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            {schools.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '4px 0'
                }}
              >
                <Typography
                  sx={{
                    ...localFont.inter14,
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400',
                    color: '#3f3f46'
                  }}
                >
                  {item.city}
                </Typography>
                <Typography
                  sx={{
                    ...localFont.inter14,
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '500',
                    color: '#3f3f46'
                  }}
                >
                  {formatter.format(item.value)}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
          <Typography
            sx={{
              ...localFont.inter14,
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: '500',
              color: '#3f3f46'
            }}
          >
            Students
          </Typography>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            {students.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '4px 0'
                }}
              >
                <Typography
                  sx={{
                    ...localFont.inter14,
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400',
                    color: '#3f3f46'
                  }}
                >
                  {item.city}
                </Typography>
                <Typography
                  sx={{
                    ...localFont.inter14,
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '500',
                    color: '#3f3f46'
                  }}
                >
                  {formatter.format(item.value)}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

