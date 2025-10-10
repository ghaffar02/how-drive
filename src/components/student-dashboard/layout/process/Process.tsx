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
        height: {xs: 'auto', md: '100%'},
        display: {md: 'flex'},
        gap: {md: '16px'}
      }}
    >
      <DetailSide show={show} />
      {/* <ProcessForm /> */}
      <ProcessSteps />
    </Box>
  );
}
