import {Box} from '@mui/material';
import React, {useState} from 'react';
import FAQHeader from './components/FAQHeader';
import FAQList from './components/FAQList';
import FAQForm from './components/FAQForm';

interface FAQItem {
  id: number;
  germanQuestion: string;
  germanAnswer: string;
  englishQuestion: string;
  englishAnswer: string;
}

export default function Support() {
  const [activeTab, setActiveTab] = useState('FAQ Homepage');
  const [selectedFAQ, setSelectedFAQ] = useState<FAQItem | null>(null);

  return (
    <Box
      sx={{
        border: '2px solid #fff',
        borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: {xs: '20px', md: '24px'},
        height: {xs: 'calc(100vh - 194px)', md: '100%'},
        overflow: 'hidden'
      }}
    >
      {/* Header Section - Stays at top */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          maxWidth: '1720px',
          justifyContent: 'center'
        }}
      >
        <FAQHeader
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab);
            setSelectedFAQ(null); // Clear selection when tab changes
          }}
        />
      </Box>

      {/* Content Section - Left (FAQ List) and Right (FAQ Form) */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column', md: 'row'},
          gap: '24px',
          flex: 1,
          overflow: 'hidden',
          maxWidth: '1720px',
          minHeight: 0
        }}
      >
        {/* Left Side - FAQ List */}
        <Box
          sx={{
            flex: {xs: '1 1 auto', md: '1 1 50%'},
            minWidth: 0,
            // background: '#ffffff99',
            // boxShadow: `0px 0px 0px 1px rgb(255, 255, 255, rgb(255, 255, 255)), 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)`,
            // border: '2px solid #fff',
            // borderRadius: {xs: '24px'},
            // backdropFilter: 'blur(15px)',
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
              height: '8px'
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
              borderRadius: '4px'
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#888',
              borderRadius: '4px',
              '&:hover': {
                background: '#555'
              }
            }
          }}
        >
          <FAQList
            onEdit={(item) => setSelectedFAQ(item)}
            selectedFAQId={selectedFAQ?.id}
            activeTab={activeTab}
          />
        </Box>

        {/* Right Side - FAQ Form */}
        <Box
          sx={{
            flex: {xs: '1 1 auto', md: '1 1 50%'},
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <FAQForm
            activeTab={activeTab}
            initialData={selectedFAQ || undefined}
            onSave={(data) => {
              console.log('Save data:', data);
              // Reset selection after save
              setSelectedFAQ(null);
            }}
            onAddNew={() => {
              setSelectedFAQ(null);
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
