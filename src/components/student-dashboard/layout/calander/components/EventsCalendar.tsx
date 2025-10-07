// import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
// import {useState} from 'react';
import MiniFramerCalendar from './MiniCalendar';
import Image from 'next/image';
import calander from '@/assets/svgs/dashboard-student/calander/calander.svg';
import plus from '@/assets/svgs/dashboard-student/calander/plus.svg';

export default function EventsCalendar() {
  // const [activeIndex, setActiveIndex] = useState<number | 0>(0);

  // const handleClick = (i: number) => {
  //   setActiveIndex(i);
  // };

  return (
    <Box
      sx={{
        width: '100%',
        background: 'rgba(248,250,252,0.3)',
        p: {xs: 'px8,', lg: '24px'},
        border: '1px solid #fff',
        boxShadow:
          'rgb(255, 255, 255) 0px 0px 0px 1px, rgba(0, 0, 0, 0.25) 0px 1px 0px 0px, rgba(0, 0, 0, 0.25) 0px 1px 1px 0px',
        backdropFilter: 'blur(15px)',
        borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
        height: '100%'
      }}
    >
      <Box
        sx={{
          overflowY: 'scroll',
          height: '100%',
          overflow: ' hidden auto',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
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
          <Box
            sx={{
              padding: '8px',
              height: '36px',
              width: '36px',
              background: '#ffffffff',
              borderRadius: '50%'
            }}
          >
            <Image height={20} width={20} src={plus} alt="plus" />
          </Box>
        </Box>
        <MiniFramerCalendar />
      </Box>
    </Box>
  );
}
