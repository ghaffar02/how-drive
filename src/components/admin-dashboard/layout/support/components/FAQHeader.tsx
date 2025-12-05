import {Box, Typography} from '@mui/material';
import React from 'react';

interface FAQHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  'FAQ Homepage',
  'FAQ Students',
  'FAQ Schools',
  'FAQ Trainers',
  'Emails'
];

export default function FAQHeader({activeTab, onTabChange}: FAQHeaderProps) {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        background: '#ffffff99',
        boxShadow: `0px 0px 0px 1px rgb(255, 255, 255, rgb(255, 255, 255)), 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)`,
        border: '2px solid #fff',
        backdropFilter: 'blur(15px)',
        borderRadius: '24px',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '12px',
        padding: '12px'
      }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <Box
            key={tab}
            onClick={() => onTabChange(tab)}
            sx={{
              flex: 1,
              padding: '12px 16px',
              cursor: 'pointer',
              backgroundColor: isActive ? 'rgb(45, 55, 72)' : '#dde0f0',
              borderRadius: '12px',
              transition: 'all 0.2s ease',
              '&:hover': {
                // backgroundColor: isActive ? 'rgb(45, 55, 72)' : 'rgba(45, 55, 72, 0.05)'
              }
            }}
          >
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: isActive ? 600 : 400,
                textAlign: 'center',
                fontFamily: '"Inter", sans-serif',
                color: isActive ? '#fff' : '#4A5568'
              }}
            >
              {tab}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}

