'use client';

import React, {useMemo, useState} from 'react';
import Image, {StaticImageData} from 'next/image';
import {
  Box,
  Menu,
  MenuItem,
  ListItemText,
  Typography,
  PaperProps
} from '@mui/material';
import CheckRounded from '@mui/icons-material/CheckRounded';
import {useRouter, usePathname, useSearchParams} from 'next/navigation';

import FlagGermany from '@/assets/svgs/FlagGermany.svg';
import FlagUK from '@/assets/svgs/FlagUK.svg';

type Lang = 'de' | 'en';
const LOCALES: Lang[] = ['en', 'de'];
const DEFAULT: Lang = 'en';

type Option = {
  code: Lang;
  label: string;
  img: StaticImageData | string;
  alt: string;
};
const options: Option[] = [
  {code: 'de', label: 'DE', img: FlagGermany, alt: 'German Flag'},
  {code: 'en', label: 'EN', img: FlagUK, alt: 'UK Flag'}
];

const paperProps: PaperProps = {
  sx: {
    p: 2,
    borderRadius: 3,
    width: 125,
    boxShadow: '0 4px 12px rgba(26,32,44,0.1)',
    height: 90
  }
};

export default function LanguageDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const {locale, segs} = useMemo(() => {
    const parts = (pathname || '/').split('/');
    const maybe = parts[1] as Lang;
    const current = LOCALES.includes(maybe) ? maybe : DEFAULT;
    return {locale: current, segs: parts};
  }, [pathname]);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const current = options.find((o) => o.code === locale) ?? options[0];

  const select = (code: Lang) => {
    setAnchorEl(null);
    if (code === locale) return;
    const parts = [...segs];
    if (LOCALES.includes(parts[1] as Lang)) parts[1] = code;
    else parts.splice(1, 0, code);
    let next = parts.join('/') || '/';
    const qs = searchParams?.toString();
    if (qs) next += `?${qs}`;
    router.push(next);
  };

  return (
    <Box>
      <Box
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{
          width: 25,
          height: 25,
          borderRadius: '50%',
          overflow: 'hidden',
          cursor: 'pointer'
        }}
      >
        <Image
          src={current.img}
          alt={current.alt}
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        transformOrigin={{vertical: 'top', horizontal: 'center'}}
        PaperProps={paperProps}
        sx={{
          mt: {xs: '-60px', lg: '30px'},
          '& .MuiMenuItem-root': {p: 0},
          '& .MuiMenuItem-root:not(:last-of-type)': {pb: '10px'}
        }}
      >
        {options.map((o) => (
          <MenuItem
            key={o.code}
            onClick={() => select(o.code)}
            sx={{
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              '&:hover,&:active,&.Mui-focusVisible,&.Mui-selected': {
                bgcolor: 'transparent'
              }
            }}
          >
            <Box sx={{width: '20px', height: '15px', display: 'flex'}}>
              <Image
                src={o.img}
                alt={o.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  aspectRatio: '4/3'
                }}
              />
            </Box>
            <ListItemText
              primary={<Typography sx={{fontSize: 16}}>{o.label}</Typography>}
            />
            {locale === o.code && (
              <CheckRounded sx={{ml: '14px', width: '20px'}} fontSize="small" />
            )}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
