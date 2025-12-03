'use client';
import {Box} from '@mui/material';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import TrustServiceSection from '@/components/home/TrustServiceSection';

import FahrschuleMustermann from '@/components/driving-schools/FahrschuleMustermann';
import ClassGrid from '@/components/driving-schools/ClassGrid';
import {useRef} from 'react';

export default function Page() {
  // const t = useTranslations('AboutUs');
  const classGridRef = useRef<HTMLDivElement | null>(null);

  // 👉 scroll function
  const scrollToClassGrid = () => {
    classGridRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

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
        <FahrschuleMustermann onGoToClasses={scrollToClassGrid} />

        {/* 👉 Wrap ClassGrid inside ref */}
        <Box ref={classGridRef}>
          <ClassGrid />
        </Box>
        <TrustServiceSection />
        <Footer />
      </Box>
    </>
  );
}
