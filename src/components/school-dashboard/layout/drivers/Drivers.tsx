import {Box} from '@mui/material';
import React from 'react';
import DetailSide from './sections/DetailSide';
import DriverDetail from './sections/DriverDetail';

type DriversProps = {
  activeKey?: string;
};
export default function Drivers({activeKey}: DriversProps) {
  return (
    <Box
      sx={{
        width: '100%',
        height: {xs: 'auto', md: '100%'},
        display: 'flex',
        gap: '16px'
      }}
    >
      <DetailSide />
      <DriverDetail activeKey={activeKey} />
    </Box>
  );
}
