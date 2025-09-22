'use client';
import React from 'react';
import {Box} from '@mui/material';
import Image from 'next/image';
import cross from '@/assets/svgs/dashboard-student/cross.svg';

type Props = {
  onClose: () => void;
};

export default function TabMenuModalForMobile({onClose}: Props) {
  return (
    <Box
      onClick={onClose}
      sx={{
        cursor: 'pointer',
        width: 'fit-content',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px'
      }}
    >
      <Image
        src={cross}
        alt="close"
        width={25}
        height={25}
        unoptimized
        style={{display: 'block', margin: 'auto'}}
      />
    </Box>
  );
}
