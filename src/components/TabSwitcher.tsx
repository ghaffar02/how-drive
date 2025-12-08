'use client';

import {Box, Button} from '@mui/material';
import React from 'react';

interface TabSwitcherProps {
  tab1Label: string;
  tab2Label: string;
  activeTab: number;
  onTab1Click: () => void;
  onTab2Click: () => void;
}

export default function TabSwitcher({
  tab1Label,
  tab2Label,
  activeTab,
  onTab1Click,
  onTab2Click
}: TabSwitcherProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        width: 'fit-content',
        margin: 'auto',
        background: '#F8FAFC',
        borderRadius: '10px',
        padding: '6px',
        gap: '10px',
        boxShadow:
          '0px 0px 0px 1px rgba(26, 32, 44, 0.1), 0px 1px 0px 0px rgba(26, 32, 44, 0.2), 0px 2px 4px 0px rgba(26, 32, 44, 0.5)'
      }}
    >
      <Button
        onClick={onTab1Click}
        sx={{
          background: activeTab === 0 ? '#000' : 'transparent',
          color: activeTab === 0 ? '#fff' : '#000',
          textTransform: 'none',
          borderRadius: '8px',
          padding: '8px 30px',
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: '"Inter", sans-serif !important',
          letterSpacing: '0.01em',
          '&:hover': {
            background: activeTab === 0 ? '#000' : '#fff',
            boxShadow:
              '0px 0px 0px 1px rgba(26, 32, 44, 0.1), 0px 1px 0px 0px rgba(26, 32, 44, 0.2), 0px 2px 4px 0px rgba(26, 32, 44, 0.5)'
          }
        }}
      >
        {tab1Label}
      </Button>
      <Button
        onClick={onTab2Click}
        sx={{
          background: activeTab === 1 ? '#000' : 'transparent',
          color: activeTab === 1 ? '#fff' : '#000',
          textTransform: 'none',
          borderRadius: '8px',
          padding: '8px 30px',
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: '"Inter", sans-serif !important',
          letterSpacing: '0.01em',
          '&:hover': {
            background: activeTab === 1 ? '#000' : '#fff',
            boxShadow:
              '0px 0px 0px 1px rgba(26, 32, 44, 0.1), 0px 1px 0px 0px rgba(26, 32, 44, 0.2), 0px 2px 4px 0px rgba(26, 32, 44, 0.5)'
          }
        }}
      >
        {tab2Label}
      </Button>
    </Box>
  );
}

