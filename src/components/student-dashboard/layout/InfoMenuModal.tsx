'use client';

import localFont from '@/utils/themes';
import {Box, Modal, Typography} from '@mui/material';
import * as React from 'react';
import location from '@/assets/svgs/dashboard-student/home/location.svg';
import Image, {StaticImageData} from 'next/image';

export type InfoMenuModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function InfoMenuModal({open, onClose}: InfoMenuModalProps) {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      // delay state to trigger transition after mount
      requestAnimationFrame(() => setShow(true));
    } else {
      setShow(false);
    }
  }, [open]);

  return (
    <Modal
      sx={{
        '.css-4nmryk-MuiBackdrop-root-MuiModal-backdrop': {
          backgroundColor: 'transparent !important'
        },
        '& *': {
          outline: 'none !important'
        }
      }}
      open={open}
      onClose={onClose}
      keepMounted
    >
      <Box
        sx={{
          position: 'fixed',
          maxWidth: '300px',
          width: '100%',
          borderRadius: '10px',
          border: '1px solid #fff',
          p: '24px',
          bottom: '34px',
          left: '28px',
          zIndex: '10000',
          // backgroundColor: 'rgba(240, 240, 250, 0.6)',
          background:
            'linear-gradient(150deg, rgba(248, 250, 252, 0.3) 0%, rgba(248, 250, 252, 0.3) 25%, rgba(248, 250, 252, 0.3) 50%, rgba(248, 250, 252, 0.3) 75%, rgba(248, 250, 252, 0.3) 100%) rgba(248, 250, 252, 0.3)',
          backdropFilter: 'blur(15px)',
          boxShadow: `0px 0px 0px 1px rgb(255, 255, 255, rgb(255, 255, 255)), 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)`,
          transformOrigin: 'center',
          transition: 'all 0.3s ease-in-out',
          transform: show ? 'scale(1)' : 'scale(0.8)',
          opacity: show ? 1 : 0,
          maxHeight: 'calc(100vh - 84px)',
          overflowY: 'auto',
          // hide scrollbars
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {/* Content box */}
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <Typography
              sx={{
                ...localFont.inter16,
                fontWeight: '500'
              }}
            >
              Führerscheinklasse
            </Typography>
            <Box
              sx={{
                padding: '8px',
                backgroundColor: '#fff',
                borderRadius: '8px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <Typography
                sx={{color: '#000', fontSize: '24px', fontWeight: '300'}}
              >
                B
              </Typography>
              <Typography
                sx={{color: '#3F3F46', fontSize: '14.4px', fontWeight: '300'}}
              >
                (BF17)
              </Typography>
            </Box>
          </Box>

          <InfoCard title="Wohnsitz" value="Hamburg" />
          <Box>
            <InfoCard title="Führerscheinstelle" value="Hamburg-Mitte" />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                '& > *:not(:last-child)': {
                  marginBottom: '6px'
                },
                marginTop: '10px'
              }}
            >
              <InfoItem icon={location} label="Ausschläger Weg 100" />
              <InfoItem icon={location} label="040/42858-0" />
              <InfoItem icon={location} label="fuehrerschein@lbv.hamburg.de" />
            </Box>
          </Box>
          <Box>
            <InfoCard title="TÜV?" value="Hamburg-Mitte" />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                '& > *:not(:last-child)': {
                  marginBottom: '6px'
                },
                marginTop: '10px'
              }}
            >
              <InfoItem icon={location} label="Ausschläger Weg 100" />
              <InfoItem icon={location} label="040/42858-0" />
              <InfoItem icon={location} label="fuehrerschein@lbv.hamburg.de" />
            </Box>
          </Box>
          <Box>
            <InfoCard title="Fahrschule" value="Mundsburg" />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                '& > *:not(:last-child)': {
                  marginBottom: '6px'
                },
                marginTop: '10px'
              }}
            >
              <InfoItem icon={location} label="Mundsburger Damm 44" />
              <InfoItem icon={location} label="040/52160511" />
              <InfoItem icon={location} label="info@mundsburg-fahrschule.de" />
              <InfoItem
                icon={location}
                label="http://mundsburg-fahrschule.de/"
              />
              <InfoItem
                icon={location}
                label="Mo. – Do.: 12:00 – 19:00 UhrFr.: 12:00 – 16:30 Uhr"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

type InfoCardProps = {
  title: string;
  value: string;
};

function InfoCard({title, value}: InfoCardProps) {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <Typography
        sx={{
          ...localFont.inter16,
          fontWeight: '500'
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          padding: '8px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px'
        }}
      >
        <Typography sx={{...localFont.inter16}}>{value}</Typography>
      </Box>
    </Box>
  );
}

type InfoItemProps = {
  icon: StaticImageData;
  label: string;
};

function InfoItem({icon, label}: InfoItemProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '10px'
      }}
    >
      <Image
        style={{height: '22px', width: '22px', objectFit: 'contain'}}
        src={icon}
        alt={label}
      />
      <Typography
        sx={{
          fontSize: '12px',
          fontWeight: '400',
          fontFamily: '"Inter", "Inter Placeholder", sans-serif !important',
          color: '#71717A',
          lineHeight: '20px'
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}
