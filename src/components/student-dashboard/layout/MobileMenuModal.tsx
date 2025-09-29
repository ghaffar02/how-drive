'use client';
import React from 'react';
import {Box} from '@mui/material';
import Image from 'next/image';
import cross from '@/assets/svgs/dashboard-student/cross.svg';
import logo from '@/assets/pngs/logo.png';
import ProfileDropdown from './ProfileDropdown';
// dropdown icons
import setting from '@/assets/svgs/dashboard-student/setting.svg';
import email from '@/assets/svgs/dashboard-student/email.svg';
import login from '@/assets/svgs/dashboard-student/login.svg';

type Props = {
  onClose: () => void;
};

export default function MobileMenuModal({onClose}: Props) {
  // dropdown state + ref
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null!);
  const initials = 'Hans zustermann';
  return (
    <>
      <Box
        sx={{
          height: '400px',
          width: '100%'
          // backgroundColor: 'red',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'red',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              height: '50px',
              width: '50px',
              cursor: 'pointer'
            }}
          >
            <Image
              style={{height: '100%', width: '100%'}}
              src={logo}
              alt="logo"
              priority
            />
          </Box>
          <Box sx={{height: '40px', width: '40px'}}>
            <ProfileDropdown
              fullName={initials}
              items={[
                {label: 'Einstellungen', menuIcon: setting},
                {label: 'Support', menuIcon: email},
                {label: 'Abmelden', menuIcon: login}
              ]}
              open={open}
              setOpen={setOpen}
              anchorRef={anchorRef}
            />
          </Box>
        </Box>
        <Box
          onClick={onClose}
          sx={{
            cursor: 'pointer',
            width: 'fit-content',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px'
          }}
        >
          <Image
            src={cross}
            alt="close"
            width={25}
            height={25}
            unoptimized
            style={{display: 'block', margin: 'auto'}}
          />
        </Box>
      </Box>
    </>
  );
}
