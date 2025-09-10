'use client';

import {useState} from 'react';
import {Box, Typography, Button} from '@mui/material';
import Image from 'next/image';
import MenuDropdown from './MenuDropdown';
import LanguageDropdown from './LanguageDropdown';
import MobileMenu from './MobileMenu';
import Logo from '@/assets/pngs/logo.png';
import profile from '@/assets/svgs/profile.svg';
import hamburger from '@/assets/svgs/hamburger.svg';
import {useTranslations} from 'next-intl';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const t = useTranslations('Navbar');

  return (
    <>
      <Box
        sx={{
          padding: '16px',
          boxShadow:
            'rgba(0, 0, 0, 0.05) 0px 0.796192px 2.38858px -0.625px, ' +
            'rgba(0, 0, 0, 0.05) 0px 2.41451px 7.24352px -1.25px, ' +
            'rgba(0, 0, 0, 0.05) 0px 6.38265px 19.148px -1.875px, ' +
            'rgba(0, 0, 0, 0.05) 0px 20px 60px -2.5px'
        }}
      >
        <Box
          sx={{
            maxWidth: '1400px',
            margin: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              width: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '6px'
            }}
          >
            <Image src={Logo} alt="logo" height={50} width={50} />
            <Typography
              sx={{
                fontSize: '28px',
                lineHeight: '28px',
                color: '#4611f5'
              }}
            >
              Wie
              <span
                style={{
                  fontWeight: '600',
                  background: 'linear-gradient(to right, #4611f5, #E501FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: '28px'
                }}
              >
                Führerschein
              </span>
            </Typography>
          </Box>
          {/* the hamburger  */}

          <Box sx={{display: {lg: 'none'}, cursor: 'pointer'}}>
            <Image
              onClick={() => setOpen(true)}
              src={hamburger}
              alt="hamburger"
              height={35}
              width={35}
            />
          </Box>
          <MobileMenu
            open={open}
            onClose={() => setOpen(false)}
            sections={[
              {
                title: t('aboutus.text'),
                items: [
                  t('aboutus.item1'),
                  t('aboutus.item2'),
                  t('aboutus.item3')
                ]
              },
              {
                title: t('features.text'),
                items: [
                  t('features.item1'),
                  t('features.item2'),
                  t('features.item3')
                ]
              }
            ]}
          />
          <Box
            sx={{
              display: {xs: 'none', lg: 'flex'},
              gap: '36px',
              alignItems: 'center'
            }}
          >
            {/* the links,dropdowns  */}
            <Box sx={{display: 'flex', gap: '10px', alignItems: 'center'}}>
              {/* the dropdowns and testuals */}
              <MenuDropdown
                label={t('aboutus.text')}
                items={[
                  t('aboutus.item1'),
                  t('aboutus.item2'),
                  t('aboutus.item3')
                ]}
              />
              <MenuDropdown
                label={t('features.text')}
                items={[
                  t('features.item1'),
                  t('features.item2'),
                  t('features.item3')
                ]}
              />
              <Typography
                sx={{
                  color: '#000000',
                  fontSize: {xs: '14px', md: '15px', lg: '16px'},
                  fontWeight: '300',
                  lineHeight: '1.6em',
                  transition: 'all 0.3s ease-in-out',
                  padding: '4px 8px',
                  borderRadius: '5px',
                  '&:hover': {
                    backgroundColor: 'rgba(48, 88, 255, 0.1)'
                  },
                  cursor: 'pointer',
                  fontFamily:
                    '"Inter", "Inter Placeholder", sans-serif !important'
                }}
              >
                {t('pricing')}
              </Typography>
              <Typography
                sx={{
                  color: '#000000',
                  fontSize: {xs: '14px', md: '15px', lg: '16px'},
                  fontWeight: '300',
                  lineHeight: '1.6em',
                  transition: 'all 0.3s ease-in-out',
                  padding: '4px 8px',
                  borderRadius: '5px',
                  '&:hover': {
                    backgroundColor: 'rgba(48, 88, 255, 0.1)'
                  },
                  cursor: 'pointer',
                  fontFamily:
                    '"Inter", "Inter Placeholder", sans-serif !important'
                }}
              >
                {t('contact')}
              </Typography>
            </Box>
            {/* the icons,butotn  */}
            <Box sx={{display: 'flex', gap: '24px', alignItems: 'center'}}>
              <LanguageDropdown />
              <Image src={profile} alt="profile" height={35} width={35} />
              <Button
                disableRipple
                sx={{
                  backgroundColor: 'transparent',
                  color: '#000000',
                  fontSize: {xs: '14px', md: '15px', lg: '16px'},
                  fontWeight: '300',
                  lineHeight: '1.6em',
                  transition: 'all 0.3s ease-in-out',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  border: '1px solid #300CA8',
                  textTransform: 'capitalize',
                  '&:hover': {
                    backgroundColor: '#300CA8',
                    color: '#fff'
                  },
                  '&:active': {
                    backgroundColor: '#1A065C !important',
                    color: '#fff'
                  },
                  height: '44px',
                  width: '110px',
                  fontFamily:
                    '"Inter", "Inter Placeholder", sans-serif !important'
                }}
                variant="outlined"
              >
                {t('login')}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
