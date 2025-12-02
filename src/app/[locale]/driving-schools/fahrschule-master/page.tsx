'use client';
import {Box} from '@mui/material';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import TrustServiceSection from '@/components/home/TrustServiceSection';

import {useTranslations} from 'next-intl';
import FahrschuleMustermann from '@/components/driving-schools/FahrschuleMustermann';
import ClassGrid from '@/components/driving-schools/ClassGrid';

export default function Page() {
  // const t = useTranslations('AboutUs');
  const t = useTranslations('licenseLT');

  return (
    <>
      <Box>
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
        {/* <HeroAboutus title={t('Title2')} description={t('heroDes2')} /> */}
        <FahrschuleMustermann />
        <ClassGrid />
        <TrustServiceSection />
        <Footer />
      </Box>
    </>
  );
}
