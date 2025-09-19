'use client';
import {Box} from '@mui/material';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import TrustServiceSection from '@/components/home/TrustServiceSection';
import {useTranslations} from 'next-intl';
// import HeroClass from '@/components/driving-license/HeroClasses';

// import Notice from '@/components/driving-license/Notice';

export default function Page() {
  const t = useTranslations('AboutUs');
  const featuresData = t.raw('featuresData');

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
        404 data here
        <TrustServiceSection />
        <Footer />
      </Box>
    </>
  );
}
