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
          bgcolor: 'rgba(0,0,0,0.6)',
          opacity: open ? 1 : 0,
          transition: 'opacity .2s'
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
            bgcolor: '#fff',
            boxShadow: '0 4px 12px rgba(26,32,44,0.1)',
            display: 'flex',
            flexDirection: 'column',
            p: '16px',
            justifyContent: 'space-between'
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
                  fontWeight: 500,
                  cursor: 'pointer'
                }}
              >
                {t('pricing')}
              </Typography>
            </Box>
            <Divider />
            <Box sx={{p: '14px 8px 15px 8px'}}>
              <Typography
                sx={{
                  fontSize: {xs: 16, sm: 18},
                  fontWeight: 500,
                  cursor: 'pointer'
                }}
              >
                {t('contact')}
              </Typography>
            </Box>
            <Divider />
          </Box>
          <Box>
            <Divider
              sx={{
                width: '100%',
                borderTop: '1px solid transparent',
                borderImage:
                  'linear-gradient(90deg, rgba(245,245,245,0.6) 0%, rgba(203,203,203,1) 50%, rgba(245,245,245,0.6) 100%) 1'
              }}
            />
            <Divider
              sx={{
                width: '49.5%',
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
                  width: '100%',
                  height: '43px'
                }}
              >
                {t('login')}n
              </Button>
              <Image src={profile} alt="profile" height={35} width={35} />
            </Box>
          </Box>
        </Box>
      </Slide>
    </Box>
  );
}
