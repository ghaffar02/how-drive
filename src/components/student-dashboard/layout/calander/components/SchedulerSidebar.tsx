import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import MiniFramerCalendar from './MiniFramerCalendar';

export default function SchedulerSidebar() {
  return (
    <Box
      sx={{
        maxWidth: '300px',
        width: '100%',
        // height: '100%',
        background: 'rgba(248,250,252,0.3)',
        padding: {xs: '8px', md: '24px 12px'},
        border: '1px solid #fff',
        boxShadow:
          'rgb(255, 255, 255) 0px 0px 0px 1px, rgba(0, 0, 0, 0.25) 0px 1px 0px 0px, rgba(0, 0, 0, 0.25) 0px 1px 1px 0px',
        backdropFilter: 'blur(15px)',
        display: {xs: 'none', md: 'flex'},
        alignItems: 'center',
        flexDirection: {xs: 'column'},
        gap: '16px'
      }}
    >
      <Typography
        sx={{
          ...localFont.inter16,
          fontSize: {xs: '14px', md: '15px', lg: '16px'},
          fontWeight: '500',
          // colo
          fontFamily: '"Inter", sans-serif !important'
        }}
      >
        Settings
      </Typography>
      <MiniFramerCalendar />
    </Box>
  );
}
