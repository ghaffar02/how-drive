import {Box} from '@mui/material';
import React, {useState} from 'react';
import Leftside from './components/LeftsideSetting';
import RightSide from './components/RightSideSetting';

export default function Setting() {
  const [activeIndex, setActiveIndex] = useState<number | 0>(0);

  return (
    <>
      <Box
        gap={2}
        sx={{
          display: 'flex',
          width: '100%',
          position: 'relative',
          overflow: 'hidden',

          zIndex: 1,
          height: {
            xs: 'calc(100svh - 194px)',
            md: 'calc(100svh - 40px)'
          }
        }}
      >
        <Leftside
          activeIndexes={activeIndex}
          setActiveIndexes={setActiveIndex}
        />
        <RightSide activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </Box>
    </>
  );
}
