import {Box} from '@mui/material';
import React, {useState} from 'react';
import SupportForm from './components/SupportForm';
import SupportAccordion from './components/SupportAccordion';

export default function Support() {
  const [openFaq, setOpenFaq] = useState(false);
  return (
    <Box
      sx={{
        background: 'transparent',
        // maxHeight: '75vh',
        height: {xs: '100%', md: '100%'},
        width: '100%',
        display: 'flex',
        gap: '16px',
        position: 'relative',
        overflow: 'auto'

        // marginBottom: {xs: '70px', md: '0px'}
      }}
    >
      <SupportAccordion openFaq={openFaq} />
      <SupportForm setOpenFaq={setOpenFaq} openFaq={openFaq} />
    </Box>
  );
}
