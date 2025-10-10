'use client';
import React, {useState} from 'react';
import {Box} from '@mui/material';
import DetailSide from './components/DetailSide';
import ProcessForm from './components/ProcessForm';
import ProcessSteps from './components/ProcessSteps';

export default function Process() {
  const [show, setShow] = useState(false);

  return (
    <Box
      sx={{
        width: '100%',
        // background: 'red',
        height: {xs: '100%', md: '100%'},
        display: 'flex',
        gap: '16px'
      }}
    >
      <DetailSide show={show} />
      <ProcessForm />
      {/* <ProcessSteps /> */}
    </Box>
  );
}
