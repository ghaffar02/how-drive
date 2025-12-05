import {Box} from '@mui/material';
import React, {useState} from 'react';
import FAQHeader from './components/FAQHeader';
import FAQList from './components/FAQList';
import FAQForm from './components/FAQForm';

export default function Support() {
  const [activeTab, setActiveTab] = useState('Help Articles');
  
  return (
    <Box
      sx={{
        // background: 'transparent',
        border: '2px solid #fff',
        borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
        
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        justifyContent: {md: 'flex-start'},
        padding: {xs: '20px', md: '24px'},
        height: {xs: 'calc(100vh - 194px)', md: '100%'},
        overflow: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}
    >
      <FAQHeader activeTab={activeTab} onTabChange={setActiveTab} />
      <FAQList />
      
    </Box>
  );
}
