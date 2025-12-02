import {Box} from '@mui/material';
import React from 'react';

export default function Schools() {
  return (
    <Box
      sx={{
        background: 'transparent',
        border: '2px solid #fff',
        borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
        // boxShadow:
        //   '0px 0px 0px 1px #ffffff, 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)',
        // maxWidth: '860px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: {xs: '20px', md: '60px'},
        justifyContent: {md: 'center'},
        padding: {xs: '20px', md: '24px'},
        height: {xs: 'calc(100vh - 194px)', md: '100%'},
        overflow: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}
    >
      {/* <Notifications />
      <Inbox /> */}
    </Box>
  );
}
