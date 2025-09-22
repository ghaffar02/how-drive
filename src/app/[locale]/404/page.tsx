'use client';
import {Box, Typography, Button} from '@mui/material';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import TrustServiceSection from '@/components/home/TrustServiceSection';
import {useTranslations} from 'next-intl';
import four from '@/assets/svgs/404/four.svg';
import sadEmoji from '@/assets/svgs/404/sadEmoji.svg';
import Image from 'next/image';

export default function Page404() {
  const t = useTranslations('PageError');

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          left: 0,
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          top: 0,
          zIndex: 1000
        }}
      >
        <Navbar />
      </Box>
      <Box
        sx={{
          marginTop: '82px',
          padding: {
            xs: '9px 16px',
            md: '105px 24px',
            lg: '18px 48px'
          },
          textAlign: 'center'
        }}
      >
        <Box
          sx={{
            paddingY: {xs: '0', md: '24px'},
            margin: 'auto',
            width: 'fit-content',
            '& > *': {
              height: 'auto',
              width: {xs: '110px', sm: '180px', md: '220px'}
            },
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '0',
            flexWrap: 'nowrap'
          }}
        >
          <Image src={four} alt="four" />
          <Image src={sadEmoji} alt="sadEmoji" />
          <Image src={four} alt="four" />
        </Box>
        <Typography
          sx={{
            display: 'inline-block',
            whiteSpace: 'pre-wrap',
            color: '#000',
            fontSize: {xs: '48px', md: '56px', lg: '64px'},
            fontWeight: '700 !important',
            padding: '48px 0 32px 0',
            lineHeight: {xs: '58px', md: '100%'},
            perspective: '1000px',
            fontFamily: 'Satoshi700 !important'
          }}
        >
          {t('heading')}
        </Typography>
        <Typography
          sx={{
            maxWidth: {sm: '700px'},
            color: '#1A202C',
            fontSize: {xs: '18px', md: '20px', lg: '22px'},
            fontFamily: '"Inter", sans-serif  !important',
            fontWeight: '300',
            lineHeight: '1.35em',
            margin: 'auto'
          }}
        >
          {t('description')}
        </Typography>
        <Button
          disableRipple
          sx={{
            width: 'fit-content',
            fontSize: {xs: '14px', md: '16px', lg: '18px'},
            lineHeight: {xs: '21px', md: '20px', lg: '23px'},
            fontWeight: '400',
            cursor: 'pointer',
            marginTop: '48px',
            padding: '12px 16px',
            textTransform: 'none',
            borderRadius: '10px',
            border: '1px solid #4611f5',
            bgcolor: '#4611F5',
            color: '#fff',
            transition: 'all 0.2s ease',
            fontFamily: '"Inter", sans-serif !important',
            '&:hover': {
              backgroundColor: '#300CA8',
              color: '#fff',
              border: '1px solid #4611f5'
            },
            '&:active': {
              backgroundColor: '#1A065C !important',
              border: '1px solid #4611F5',
              color: '#fff'
            }
          }}
        >
          {t('button')}
        </Button>
      </Box>
      <TrustServiceSection />
      <Footer />
    </>
  );
}
