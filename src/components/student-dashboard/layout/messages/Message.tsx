import {Box} from '@mui/material';
import React from 'react';
import Inbox from './components/Inbox';
import Notifications from './components/Notifications';

export default function Message() {
  return (
    <Box
      sx={{
        width: '100%',
        height: {xs: 'auto', md: '100%'},
        display: 'flex',
        gap: '16px'
      }}
    >
      <Notifications />
      <Inbox />
    </Box>
  );
}
