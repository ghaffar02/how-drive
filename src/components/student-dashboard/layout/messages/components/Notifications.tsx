import {Box, TextField} from '@mui/material';
import React from 'react';

import Image from 'next/image';
import searchIcon from '@/assets/svgs/dashboard-student/searchIcon.svg';
import crossIcon from '@/assets/svgs/dashboard-student/crossicon.svg';

export default function Notifications() {
  return (
    <Box
      sx={{
        minWidth: '300px',
        maxWidth: '300px',
        width: '100%',
        height: '100%',
        background: 'rgba(248,250,252,0.3)',
        padding: '24px 12px',
        border: '1px solid #fff',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '62px',
          display: 'flex',
          gap: '10px'
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            gap: '4px',
            padding: '10px',
            borderRadius: '999px',
            height: '38px',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.75)'
          }}
        >
          <Box sx={{height: '16px', width: '16px'}}>
            <Image
              src={searchIcon}
              alt="searchIcon"
              style={{height: '100%', width: '100%'}}
            />
          </Box>
          <TextField
            placeholder="Search"
            variant="outlined"
            sx={{
              flex: 1,
              '& .MuiOutlinedInput-root': {
                borderRadius: 0,
                '& fieldset': {border: 'none'}, // remove border
                '&:hover fieldset': {border: 'none'}, // remove on hover
                '&.Mui-focused fieldset': {border: 'none'} // remove on focus
              },
              '& .MuiInputBase-input': {
                height: 'auto',
                padding: '0px'
              }
            }}
          />
        </Box>
        <Box
          sx={{
            height: '36px',
            width: '36px',
            background: '#ffffffbf',
            padding: '8px',
            borderRadius: '50%'
          }}
        >
          <Image src={crossIcon} alt="addIcon" height={20} width={20} />
        </Box>
      </Box>
      {/* Below part of notification screen */}
      <Box></Box>
    </Box>
  );
}
