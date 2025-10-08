import {Box} from '@mui/material';
import React from 'react';
import Inbox from './components/Inbox';
import Notifications from './components/Notifications';

export default function Message() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        position: 'relative',
        zIndex: 1,
        gap: '16px',
        height: {xs: 'calc(100vh - 194px)', md: '100%'}
      }}
    >
      <Notifications />
      <Inbox />
    </Box>
  );
}
