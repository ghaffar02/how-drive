'use client';
import {Box} from '@mui/material';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import GettingStarted from '@/components/help/GettingStarted';
import {useTranslations} from 'next-intl';

export default function Page() {
  const t = useTranslations('helpPage');
  const forSchoolsData = t.raw('forSchoolsData');

  return (
    <>
      <Box sx={{background: '#fafafa'}}>
        <Box
          sx={{
            position: 'fixed',
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            top: 0,
            zIndex: 1000
          }}
        >
          <Navbar />
        </Box>
        <Box sx={{paddingTop: '80px'}}>
          <GettingStarted headerTitle={t('title3')} data={forSchoolsData} />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
