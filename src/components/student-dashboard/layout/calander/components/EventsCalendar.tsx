'use client';
import {Box, Popover, Typography} from '@mui/material';
import MiniFramerCalendar from './MiniCalendar';
import Image from 'next/image';
import calander from '@/assets/svgs/dashboard-student/calander/calander.svg';
import plus from '@/assets/svgs/dashboard-student/calander/plus.svg';
import * as React from 'react';
import localFont from '@/utils/themes';
import BigCalendar from './big-calander/BigCalander';

export default function EventsCalendar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box
      sx={{
        width: '100%',
        background: 'rgba(248,250,252,0.3)',
        p: {xs: '8px', lg: '24px'},
        border: '1px solid #fff',
        boxShadow:
          'rgb(255, 255, 255) 0px 0px 0px 1px, rgba(0, 0, 0, 0.25) 0px 1px 0px 0px, rgba(0, 0, 0, 0.25) 0px 1px 1px 0px',
        backdropFilter: 'blur(15px)',
        borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
        maxWidth: {md: 'calc( 100vw - 372px )', xl: '1002px'}
      }}
    >
      {/* ther header there  */}
      <Box
        sx={{
          overflow: 'visible',
          // overflowY: 'scroll',
          // height: '100%',
          // overflow: 'hidden auto',
          // msOverflowStyle: 'none',
          // scrollbarWidth: 'none',
          paddingBottom: '24px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              padding: '8px',
              height: '36px',
              width: '36px',
              background: '#fff',
              borderRadius: '50%'
            }}
          >
            <Image height={20} width={20} src={calander} alt="Calendar" />
          </Box>

          {/* Open Modal Button */}
          <Box
            onClick={handleClick}
            sx={{
              padding: '8px',
              height: '36px',
              width: '36px',
              background: '#fff',
              borderRadius: '50%',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            <Image height={20} width={20} src={plus} alt="plus" />
          </Box>
        </Box>
      </Box>
      {/* Anchored Modal */}
      <EventAddPopover anchorEl={anchorEl} open={open} onClose={handleClose} />
      {/* the big calander there  */}
      {/* <Box> */}
      <BigCalendar />
      {/* </Box> */}
    </Box>
  );
}

// 🔹 Subcomponent
type EventAddPopoverProps = {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
};

function EventAddPopover({open, anchorEl, onClose}: EventAddPopoverProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      PaperProps={{
        sx: {
          maxWidth: '300px',
          borderRadius: '10px',
          border: '1px solid #fff',
          p: '16px',
          background: 'rgba(248, 250, 252, 0.3)',
          backdropFilter: 'blur(15px)',
          boxShadow:
            '0px 0px 2px 0px var(--token-46fa6e04-aa50-4324-8a35-fd1170036322, rgb(212, 212, 216))',
          top: '16px !important',
          '& > *:not(:last-child)': {
            marginBottom: '32px'
          }
        }
      }}
    >
      <Typography variant="h6" sx={{...localFont.inter16}}>
        Termin bei Fahrschule buchen
      </Typography>
      <Box
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.85)',
          display: 'flex',
          p: '4px',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow:
            '0px 0px 2px 0px var(--token-46fa6e04-aa50-4324-8a35-fd1170036322, rgb(212, 212, 216))',
          borderRadius: '999px',
          gap: '4px'
        }}
      >
        {['Gespräch', 'Theorie', 'Fahren'].map((item, i) => (
          <Box
            key={i}
            onClick={() => setActiveIndex(i)}
            sx={{
              background: activeIndex === i ? '#463DF5' : 'transparent',
              padding: '4px 8px',
              borderRadius: '999px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              width: '100%'
            }}
          >
            <Typography
              sx={{
                ...localFont.inter16,
                color: activeIndex === i ? '#fff' : '#4A5568',
                textAlign: 'center'
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
      <MiniFramerCalendar />
    </Popover>
  );
}
