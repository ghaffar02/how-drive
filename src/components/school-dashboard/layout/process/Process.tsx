'use client';
import React from 'react';
import {Box} from '@mui/material';
import DetailSide from './components/DetailSide';
import StudentDetail from './components/StudentDetail';

export default function Process() {
  // const [show, setShow] = useState(true);

  return (
    <Box
      sx={{
        width: '100%',
        // background: 'red',
        height: {md: '100%'},
        display: 'flex',
        gap: '16px'
      }}
    >
      <DetailSide />
      <StudentDetail />
    </Box>
  );
}
