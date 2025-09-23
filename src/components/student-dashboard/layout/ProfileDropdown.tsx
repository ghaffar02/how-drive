'use client';
import React from 'react';
import {Box, Typography, Paper, Popper, Grow} from '@mui/material';
import Image, {StaticImageData} from 'next/image';
import arrow from '@/assets/svgs/dashboard-student/arrow.svg';

type ProfileDropdownProps = {
  anchorRef: React.RefObject<HTMLDivElement | null>;
  label: string;
  items: {label: string; menuIcon: string}[];
  open: boolean;
  setOpen: (open: boolean) => void;
  profileIcon?: StaticImageData;
};

export default function ProfileDropdown({
  label,
  items,
  profileIcon,
  open,
  setOpen,
  anchorRef
}: ProfileDropdownProps) {
  const textStyle = {
    color: '#000000',
    fontSize: '14px',
    fontWeight: '300',
    lineHeight: '14px',
    fontFamily: '"Inter", "Inter Placeholder", sans-serif !important'
  };

  return (
    <>
      {/* Trigger */}
      <Box
        ref={anchorRef}
        onClick={() => setOpen(!open)}
        sx={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'pointer',
          height: '40px',
          width: '40px',
          backgroundColor: '#FFFFFF',
          borderRadius: '50%',
          margin: 'auto',
          '&:hover': {backgroundColor: '#DDE0F0'},
          '&:active': {backgroundColor: '#B9C2EB'},
          transition: 'all 0.1s ease-in',
          overflow: 'hidden'
        }}
      >
        {profileIcon ? (
          <Image
            style={{height: '100%', width: '100%', objectFit: 'cover'}}
            src={profileIcon}
            alt="profile icon"
          />
        ) : (
          <Typography
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#2D3748',
              fontWeight: '500',
              fontFamily: '"Inter", sans-serif !important',
              fontSize: {xs: '14px', md: '15px', lg: '16px'},
              textTransform: 'capitalize'
            }}
          >
            {label}
          </Typography>
        )}
      </Box>

      {/* Dropdown */}
      <Popper
        onMouseEnter={() => setOpen(true)}
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom"
        transition
        modifiers={[{name: 'offset', options: {offset: [49, 10]}}]}
        sx={{zIndex: 1300}}
      >
        {({TransitionProps}) => (
          <Grow {...TransitionProps} style={{transformOrigin: 'bottom center'}}>
            <Paper
              elevation={8}
              sx={{
                minWidth: '200px',
                borderRadius: '12px',
                boxShadow:
                  'rgba(0, 0, 0, 0.05) 0px 10px 20px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                backdropFilter: 'blur(15px)',
                maxWidth: '200px',
                gap: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                border: '1px solid #fff'
              }}
            >
              {items.map((item) => (
                <Box
                  onClick={() => setOpen(false)}
                  key={item.label}
                  sx={{
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    p: '12px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    '&:hover': {
                      backgroundColor: 'rgba(48, 88, 255, 0.10)',
                      '& .arrowWrapper': {
                        opacity: 1,
                        transform: 'translateX(0)'
                      }
                    }
                  }}
                >
                  <Box
                    sx={{display: 'flex', alignItems: 'center', gap: '12px'}}
                  >
                    <Box sx={{height: '20px', width: '20px'}}>
                      <Image
                        style={{height: '100%', width: '100%'}}
                        src={item.menuIcon}
                        alt={item.label}
                      />
                    </Box>
                    <Typography sx={{...textStyle, fontWeight: '400'}}>
                      {item.label}
                    </Typography>
                  </Box>

                  <Box
                    className="arrowWrapper"
                    sx={{
                      opacity: 0,
                      transform: 'translateX(-10px)',
                      transition: 'all 0.3s ease-in-out',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Image
                      style={{
                        height: '16px',
                        width: '16px',
                        objectFit: 'cover'
                      }}
                      src={arrow}
                      alt="arrow icon"
                    />
                  </Box>
                </Box>
              ))}
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
