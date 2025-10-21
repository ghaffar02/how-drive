'use client';
import React from 'react';
import {Box, Divider} from '@mui/material';

const GradientDivider = () => {
  return (
    <Box width="100%">
      <Divider
        sx={{
          borderTop: '1px solid transparent',
          borderImage:
            'linear-gradient(90deg, #E4E4E7 0%, #cbcbcbff 50%, #e0e0e3ff 100%) 1'
        }}
      />
    </Box>
  );
};

export default GradientDivider;
