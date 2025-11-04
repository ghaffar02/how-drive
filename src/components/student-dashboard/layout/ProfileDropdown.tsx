'use client';
import React, {useState, useEffect, useRef} from 'react';
import {Box, Typography, Paper, Popper, Grow, Divider} from '@mui/material';
import {SxProps, Theme} from '@mui/material';
import Image, {StaticImageData} from 'next/image';
import arrow from '@/assets/svgs/dashboard-student/arrow.svg';
import profileLogo from '@/assets/svgs/lincense-steps/profileLogo.svg';
import localFont from '@/utils/themes';

type ProfileDropdownProps = {
  anchorRef: React.RefObject<HTMLDivElement | null>;
  fullName: string;
  items: {
    id: string;
    label: string;
    menuIcon: string;
    menuIconHover?: string;
  }[];
  open: boolean;
  setOpen: (open: boolean) => void;
  profileIcon?: StaticImageData;
  positionSx?: SxProps<Theme>;
  // NEW (optional)
  activeKey?: string;
  setActiveKey?: (key: string) => void;
  //logout handler function for id === '7'
  onLogout?: () => void;
};

// helper inside component
function getInitials(fullName: string): string {
  if (!fullName) return '';
  const words = fullName.trim().split(' ').filter(Boolean);
  let initials = words[0]?.[0] || '';
  if (words.length > 1) {
    initials += words[1][0];
  }
  return initials.toUpperCase();
}

export default function ProfileDropdown({
  fullName,
  items,
  profileIcon,
  open,
  setOpen,
  anchorRef,
  positionSx,
  setActiveKey,
  onLogout
}: ProfileDropdownProps) {
  const initials = getInitials(fullName);
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        open &&
        anchorRef.current &&
        !anchorRef.current.contains(target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, setOpen, anchorRef]);

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
          backgroundColor: '#DDE0F0',
          borderRadius: '50%',
          margin: 'auto',
          '&:hover': {backgroundColor: '#CED5F5'},
          '&:active': {backgroundColor: '#B9C2EB'},
          transition: 'all 0.1s ease-in',
          boxShadow: '0px 0px 2px 0px #D4D4D8'
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
            {initials}
          </Typography>
        )}
      </Box>

      {/* Dropdown */}
      <Popper
        onMouseEnter={() => setOpen(true)}
        open={open}
        anchorEl={anchorRef.current}
        placement="top"
        transition
        sx={{
          left: {md: '20px !important'},
          right: {xs: '20px !important', md: 'unset !important'},
          bottom: {md: '18px !important'},
          position: 'fixed',
          zIndex: '1000',
          ...positionSx
        }}
      >
        {({TransitionProps}) => (
          <Grow {...TransitionProps} style={{transformOrigin: 'bottom center'}}>
            <Paper
              ref={dropdownRef}
              elevation={8}
              sx={{
                borderRadius: '12px',
                boxShadow:
                  'rgba(0, 0, 0, 0.05) 0px 10px 20px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                backdropFilter: 'blur(15px)',
                width: '256px',
                gap: '4px',
                backgroundColor: 'rgba(240, 240, 250, 0.6)',
                border: '2px solid #fff'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: '8px',
                  gap: '12px'
                }}
              >
                <Image
                  style={{height: '42px', width: '42px', objectFit: 'cover'}}
                  src={profileLogo}
                  alt="profileLogo"
                />
                <Box>
                  <Typography
                    sx={{
                      ...localFont.inter18,
                      fontFamily:
                        '"Inter", "Inter Placeholder", sans-serif !important',
                      fontWeight: '700'
                    }}
                  >
                    {fullName}
                  </Typography>
                  <Typography
                    sx={{
                      ...localFont.inter14,
                      fontFamily:
                        '"Inter", "Inter Placeholder", sans-serif !important',
                      fontWeight: '300'
                    }}
                  >
                    mustermann@gmail.com
                  </Typography>
                </Box>
              </Box>
              <Divider
                sx={{
                  marginY: '20px',
                  borderTop: '1px solid #fff',
                  width: '100%'
                }}
              />

              {items.map((item) => {
                const isHovered = hoveredItemId === item.id;
                const iconSrc =
                  isHovered && item.menuIconHover
                    ? item.menuIconHover
                    : item.menuIcon;

                return (
                  <Box
                    // onClick={() => {
                    //   setOpen(false);
                    //   if (setActiveKey) setActiveKey(item.id);
                    // }}
                    onClick={() => {
                      setOpen(false);
                      if (item.id === '7') {
                        onLogout?.();
                      }
                      if (setActiveKey) {
                        setActiveKey(item.id);
                      }
                    }}
                    onMouseEnter={() => setHoveredItemId(item.id)}
                    onMouseLeave={() => setHoveredItemId(null)}
                    key={item.id || item.label}
                    sx={{
                      borderRadius: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease-in-out',
                      padding: '12px',
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
                          src={iconSrc}
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
                );
              })}
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
