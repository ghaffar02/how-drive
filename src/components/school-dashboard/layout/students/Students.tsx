'use client';
import React from 'react';
import {Box} from '@mui/material';
import DetailSide from './sections/DetailSide';
import StudentDetail from './sections/StudentDetail';

export default function Process() {
  // const [show, setShow] = useState(true);

  return (
    <Box
      sx={{
        width: '100%',
        // background: 'red',
        // height: {xs: '100%', md: '100%'},
        height: {xs: 'auto', md: '100%'},
        display: 'flex',
        gap: '16px',
      }}
    >
      <DetailSide />
      <StudentDetail />
    </Box>
  );
}
