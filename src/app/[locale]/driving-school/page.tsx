'use client';
import {Box} from '@mui/material';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import TrustServiceSection from '@/components/home/TrustServiceSection';
import HeroAboutus from '@/components/about-us/Hero';

import {useTranslations} from 'next-intl';
import SearchInputWithSuggestions from '@/components/driving-school/SearchInputWithSuggestions';

export default function Page() {
  const t = useTranslations('AboutUs');

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
        <HeroAboutus title={t('Title2')} description={t('heroDes2')} />
        <SearchInputWithSuggestions />
        <TrustServiceSection />
        <Footer />
      </Box>
    </>
  );
}
