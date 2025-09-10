'use client';

import * as React from 'react';
import {Box, Typography, Divider, Slide, Button} from '@mui/material';
import MenuAccordion from './MenuAccordion';
import LanguageDropdown from './LanguageDropdown';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import profile from '@/assets/svgs/profile.svg';

type Section = {title: string; items: string[]};
type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  sections: Section[];
  title?: string;
};

export default function MobileMenu({open, onClose, sections}: MobileMenuProps) {
  const [expandedKey, setExpandedKey] = React.useState<string | false>(false);
  const t = useTranslations('Navbar');
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 1300,
        pointerEvents: open ? 'auto' : 'none'
      }}
    >
      <Box
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: '0',
          bgcolor: 'rgba(0, 0, 0, 0.3)',
          opacity: open ? 1 : 0,
          transition: 'opacity .2s',
          height: '100vh',
          width: '100vw'
        }}
      />
      <Slide direction="left" in={open} mountOnEnter unmountOnExit>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: {xs: '75%', sm: '50vw'},
            height: '100vh',
            bgcolor: 'rgba(255, 255, 255, 0.85)',
            display: 'flex',
            flexDirection: 'column',
            p: '16px',
            justifyContent: 'space-between',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            boxShadow:
              'rgba(0, 0, 0, 0.13) 0px 0.796192px 2.38858px -0.625px, ' +
              'rgba(0, 0, 0, 0.13) 0px 2.41451px 7.24352px -1.25px, ' +
              'rgba(0, 0, 0, 0.13) 0px 6.38265px 19.148px -1.875px, ' +
              'rgba(0, 0, 0, 0.13) 0px 20px 60px -2.5px'
          }}
        >
          <Box>
            <Box>
              {sections.map((s) => (
                <MenuAccordion
                  key={s.title}
                  title={s.title}
                  items={s.items}
                  expanded={expandedKey === s.title}
                  onChange={(v) => setExpandedKey(v ? s.title : false)}
                  onItemClick={() => onClose()}
                />
              ))}
            </Box>
            <Box sx={{p: '14px 8px 14px 8px'}}>
              <Typography
                sx={{
                  fontSize: {xs: 16, sm: 18},
                  fontWeight: 300,
                  cursor: 'pointer',
                  fontFamily: '"Inter", sans-serif !important'
                }}
              >
                {t('pricing')}
              </Typography>
            </Box>
            <Divider sx={{borderColor: '#c7c7c7'}} />
            <Box sx={{p: '14px 8px 15px 8px'}}>
              <Typography
                sx={{
                  fontSize: {xs: 16, sm: 18},
                  fontWeight: 300,
                  cursor: 'pointer',
                  fontFamily: '"Inter", sans-serif !important'
                }}
              >
                {t('contact')}
              </Typography>
            </Box>
            <Divider sx={{borderColor: '#c7c7c7'}} />
          </Box>
          <Box>
            <Divider
              sx={{
                margin: '16px auto',
                borderTop: '1px solid transparent',
                borderImage:
                  'linear-gradient(90deg, rgba(245,245,245,0.6) 0%, rgba(203,203,203,1) 50%, rgba(245,245,245,0.6) 100%) 1'
              }}
            />
            <Box
              sx={{
                display: 'flex',
                gap: '24px',
                alignItems: 'center',
                padding: '8px'
              }}
            >
              <LanguageDropdown />
              <Button
                disableRipple
                sx={{
                  WebkitTapHighlightColor: 'transparent',
                  backgroundColor: '#4610F5',
                  color: '#fff',
                  fontSize: {xs: '16px', sm: '18px'},
                  lineHeight: '1.6em',
                  fontWeight: '400',
                  transition: 'all 0.3s ease-in-out',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  textTransform: 'capitalize',
                  '&:hover': {
                    backgroundColor: '#4610F5',
                    color: '#fff'
                  },
                  '&:active': {
                    backgroundColor: '#1A065C !important',
                    color: '#fff'
                  },
                  width: '100%',
                  height: '43px'
                }}
              >
                {t('login')}
              </Button>
              <Image src={profile} alt="profile" height={35} width={35} />
            </Box>
          </Box>
        </Box>
      </Slide>
    </Box>
  );
}
