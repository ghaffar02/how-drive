'use client';
import {Box} from '@mui/material';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import TrustServiceSection from '@/components/home/TrustServiceSection';
import HowItWorks from '@/components/home/HowItWorks';
import Faq from '@/components/home/Faq';
import Advantages from '@/components/home/Advantages';
import Pricing from '@/components/prices/Pricing';
import LicenseSteps from '@/components/home/components/LicenseSteps';
import HeroClasses from '@/components/driving-license/HeroClasses';
import ClassGrid from '@/components/driving-license/ClassGrid';

export default function Page() {
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

        <TrustServiceSection />
        <ClassGrid license="licenseA" />
        <Footer />
      </Box>
    </>
  );
}
