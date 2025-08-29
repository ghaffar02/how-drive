'use client';
import {Box} from '@mui/material';

import Hero from '@/components/home/Hero';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import TrustServiceSection from '@/components/home/TrustServiceSection';
import HowItWorks from '@/components/home/HowItWorks';
import Faq from '@/components/home/Faq';
import Advantages from '@/components/home/Advantages';
import Pricing from '@/components/prices/Pricing';
import LicenseSteps from '@/components/home/components/LicenseSteps';

export default function HomePage() {
  return (
    <>
      <Box>
        <Box
          sx={{
            position: 'fixed',
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            top: 0,
            zIndex: 10
          }}
        >
          <Navbar />
        </Box>
        <Box sx={{marginTop: '82px'}}>
          <Hero />
        </Box>
        <LicenseSteps />
        <HowItWorks />
        <Advantages />
        <Pricing />
        <Faq />
        <TrustServiceSection />
        <Footer />
      </Box>
    </>
  );
}
