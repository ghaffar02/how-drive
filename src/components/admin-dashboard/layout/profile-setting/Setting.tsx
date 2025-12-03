import {Box} from '@mui/material';
import React, {useState} from 'react';

export default function Setting() {
  const [activeIndex, setActiveIndex] = useState<number | 0>(0);

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          background: '#f8fafc4d',
          boxShadow: `0px 0px 0px 1px rgb(255, 255, 255, rgb(255, 255, 255)), 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)`,
          border: '2px solid #fff',

          overflow: 'hidden',

          backdropFilter: 'blur(15px)',
          borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
          // borderRadius: '0px 24px 24px 0px',
          height: {xs: '100%'}
        }}
      >
        {/* <Leftside
          activeIndexes={activeIndex}
          setActiveIndexes={setActiveIndex}
        />
        <RightSide activeIndex={activeIndex} setActiveIndex={setActiveIndex} /> */}
      </Box>
    </>
  );
}
