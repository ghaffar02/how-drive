import {Box} from '@mui/material';
import React from 'react';
import TextCard from './components/TextCard';
import BgCard from './components/BgCard';

import bg1 from '@/assets/svgs/driving-license-class-A/bg1.avif';
import file from '@/assets/svgs/driving-license-class-A/file.svg';

export default function ClassAGrid() {
  return (
    <Box
      sx={{
        background: '#fff',
        padding: {xs: '30px 20px', sm: '40px 30px', lg: '60px 48px'}
      }}
    >
      <TextCard
        heading="A"
        subHeading="from 24"
        description="All motorcycles (unlimited)"
      />
      <BgCard icon={file} bgImage={bg1.src} />
    </Box>
  );
}
