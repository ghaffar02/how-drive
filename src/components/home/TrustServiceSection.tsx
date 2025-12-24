'use client';

import { Link } from '@/i18n/navigation';
import {Box, Button, Typography} from '@mui/material';
import {useTranslations} from 'next-intl';

export default function TrustServiceSection() {
  const t = useTranslations('Services');

  return (
    <>
      <Box
        sx={{
          padding: {
            xs: '48px 16px',
            sm: '48px 24px',
            md: '48px'
          },
          background: '#FAFAFA'
        }}
      >
        <Box
          sx={{
            background:
              'linear-gradient(125deg, rgba(70, 17, 245, 0.75) 0%, rgba(31, 244, 255, 0.75) 46.8468%, rgba(234, 0, 255, 0.75) 100%)',
            height: '390px',
            width: '100%',
            maxWidth: '1400px',
            m: '0 auto',
            borderRadius: '25px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* all the section content is  here  */}
          <Box sx={{position: 'relative', zIndex: '10', textAlign: 'center'}}>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontSize: {xs: '32px', sm: '36px', lg: '48px'},
                lineHeight: {xs: '1.2em', lg: '1.15em'},
                fontWeight: '600',
                paddingBottom: '10px',
                fontFamily: 'Satoshi700 !important'
              }}
            >
              {t('title')}
            </Typography>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontSize: {xs: '16px', md: '18px', lg: '20px'},
                lineHeight: '1.35em',
                fontFamily: '"Inter", sans-serif  !important',
                fontWeight: '400'
              }}
            >
              {t('des')}
            </Typography>
            <Box
              sx={{
                paddingTop: '48px',
                display: 'flex',
                gap: '24px',
                alignItems: 'center',
                flexDirection: {xs: 'column', sm: 'row'}
              }}
            >
              <Button
                component={Link}
                href={t('buttonLink')}
                disableRipple
                sx={{
                  color: '#fff',
                  backgroundColor: '#4616F5',
                  height: {xs: '44px', md: '46px', lg: '50px'},
                  width: {xs: '188px', md: '210px', lg: '239px'},
                  fontSize: {xs: '14px', md: '16px', lg: '18px'},
                  fontFamily: '"Inter", sans-serif  !important',
                  textWrap: 'nowrap',
                  textTransform: 'none',
                  borderRadius: '10px',
                  '&:hover': {
                    backgroundColor: '#300CA8'
                  },
                  '&:active': {
                    backgroundColor: '#2b1087 !important',
                    color: '#fff'
                  },
                  transition: 'all 0.4s ease-in-out',
                  fontWeight: '400'
                }}
              >
                {t('btn1')}
              </Button>
              <Button
               component={Link}
               href={t('buttonLink')}
                disableRipple
                sx={{
                  color: '#fff',
                  backgroundColor: 'transparent',
                  height: {xs: '44px', md: '46px', lg: '50px'},
                  width: {xs: '188px', md: '210px', lg: '239px'},
                  fontSize: {xs: '14px', md: '16px', lg: '18px'},
                  fontFamily: '"Inter", sans-serif  !important',
                  textWrap: 'nowrap',
                  textTransform: 'none',
                  borderRadius: '10px',
                  border: '1px solid #fff',
                  '&:hover': {
                    backgroundColor: '#fff',
                    color: '#000'
                  },
                  '&:active': {
                    backgroundColor: '#EDEDED !important',
                    color: '#000000'
                  },
                  transition: 'all 0.4s ease-in-out',
                  fontWeight: '400'
                }}
              >
                {t('btn2')}
              </Button>
            </Box>
          </Box>
          {/* the background dark overlay in here  */}
          <Box
            sx={{
              backgroundColor: '#00000099',
              height: '100%',
              width: '100%',
              position: 'absolute',
              top: '0px',
              left: '0px',
              zIndex: '1'
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
}
