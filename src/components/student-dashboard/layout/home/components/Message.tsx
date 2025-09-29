import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import React from 'react';
// import {useTranslations} from 'next-intl';

import car from '@/assets/svgs/dashboard-student/home/car.svg';
import fabian from '@/assets/svgs/dashboard-student/home/fabian.svg';
import logo from '@/assets/svgs/dashboard-student/home/logo.svg';

export default function Messages() {
  // const t = useTranslations('Dashboard.home.appointment');
  // const show = true;

  const emails = [
    {
      icon: car,
      sender: 'Fahrschule',
      date: '25.05.2025',
      subject: 'Das ist das Thema der Email.',
      bgcolor: '#450ff51a'
    },
    {
      icon: fabian, // yahan ap apna icon ya icon component rakh sakte hain
      sender: 'Fabian',
      date: '01.06.2025',
      subject: 'Das ist das Thema der Email.',
      bgcolor: '#ffa60026'
    },
    {
      icon: car,
      sender: 'Fahrschule',
      date: '27.05.2025',
      subject: 'Termin deiner Theorieprüfung',
      bgcolor: 'rgba(70, 17, 245, 0.1)'
    },
    {
      icon: logo,
      sender: 'WieFührerschein',
      date: '20.05.2025',
      subject: 'Das ist das Thema der Email.',
      bgcolor: 'rgba(234, 0, 255, 0.08)'
    }
  ];

  return (
    <Box
      sx={{
        background: '#ffffffbf',
        padding: {xs: '16px', md: '24px'},
        // maxWidth: {xs: '100%', lg: '357px'},
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '18px',
        gap: {xs: '6px', sm: '8px'}
      }}
    >
      <Typography
        sx={{
          ...localFont.inter16,
          fontWeight: '500',
          fontFamily: '"Inter", sans-serif !important'
        }}
      >
        Messages
        {/* {t('title1')} */}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          gap: '10px',
          maxHeight: '188px',
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        {emails.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: '100%',
                background: '#fff',
                padding: '8px',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
                cursor: 'pointer',
                boxShadow: ' 0px 0px 2px 0px #a1a1aa',

                '&:hover': {
                  boxShadow: '0px 0px 2px 1px #a094c8ff'
                }

                //
              }}
            >
              <Box
                sx={{
                  backgroundColor: item.bgcolor,
                  px: '8px', // padding for inner circle
                  borderRadius: '8px',
                  // p: 1, // padding (optional)
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '40px'
                }}
              >
                <Box
                  sx={{
                    borderRadius: '999px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Box sx={{width: '100%', maxWidth: '30px'}}>
                    <Image
                      src={item.icon}
                      alt="car"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box width="100%">
                <Box
                  sx={{
                    // bgcolor: '#888',
                    width: '100%',
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Typography
                    sx={{
                      ...localFont.inter14,
                      color: '#718096',
                      fontFamily: '"Inter", sans-serif !important',
                      fontWeight: '400'
                    }}
                  >
                    {item.sender}
                    {/* {show && 25} */}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {xs: '8.4px', md: '10px', lg: '11px'},
                      color: '#718096',
                      fontFamily: '"Inter", sans-serif !important',
                      fontWeight: '400'
                    }}
                  >
                    {item.date}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    // ...localFont.i,
                    fontSize: {xs: '9.6px', md: '11px', lg: '13px'},
                    color: '#718096',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400'
                  }}
                >
                  {item.subject}
                  {/* {show ? 'Theory exam' : '--'} */}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
