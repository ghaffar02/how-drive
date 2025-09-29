import {Box} from '@mui/material';
import React from 'react';
import SupportForm from './components/SupportForm';

export default function Support() {
  return (
    <Box sx={{background: 'transparent', height: '100%', width: '100%'}}>
      <SupportForm />
    </Box>
  );
}
