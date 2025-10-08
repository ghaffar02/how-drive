import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import {useState} from 'react';
import MiniFramerCalendar from './MiniFramerCalendar';

export default function EventsCalendar() {
  const [activeIndex, setActiveIndex] = useState<number | 0>(0);

  const handleClick = (i: number) => {
    setActiveIndex(i);
  };

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
        height: {xs: '100%', md: '100%'}
      }}
    >
      <Box
        sx={{
          overflowY: 'scroll',
          height: {xs: '100%', lg: '100%'},
          overflow: ' hidden auto',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        <Box sx={{}}>
          <MiniFramerCalendar />
        </Box>
      </Box>
    </Box>
  );
}
