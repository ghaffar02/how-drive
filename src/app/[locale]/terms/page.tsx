import Footer from '@/components/Footer';
import Navbar from '@/components/navbar/Navbar';
import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import React from 'react';
import BG from '@/assets/svgs/textbg.svg';
import TrustServiceSection from '@/components/home/TrustServiceSection';
import {useTranslations} from 'next-intl';

export default function Page() {
  const t = useTranslations('terms');
  const data = t.raw('data');
  return (
    <>
      <Navbar />
      <Box sx={{backgroundColor: '#fafafa'}}>
        <Box
          sx={{
            maxWidth: '1400px',
            width: '100%',
            margin: 'auto',
            padding: {xs: '20px 16px', sm: '40px 24px', lg: '80px 48px'}
          }}
        >
          <Box
            sx={{
              mb: '48px',
              height: {xs: '132px', sm: '136px', lg: '140px'},
              background: `url(${BG.src}) center / cover`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography
              sx={{
                ...localFont.h3,
                fontWeight: 700
              }}
            >
              {t('title')}
            </Typography>
          </Box>
          {data.map((item: any, i: any) => (
            <Box key={i} sx={{mb: '32px'}}>
              <Typography
                sx={{
                  color: '#1a202c',
                  fontSize: {xs: '20px', sm: '22px', lg: '24px'},
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: '600'
                }}
              >
                {item.heading}
              </Typography>
              <Typography
                component="div"
                sx={{mt: '10px', fontSize: '16px', color: '#3d3d3d'}}
                dangerouslySetInnerHTML={{__html: item.html}}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <TrustServiceSection />
      <Footer />
    </>
  );
}
