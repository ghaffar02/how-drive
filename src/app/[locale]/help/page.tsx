'use client';
import {Box} from '@mui/material';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import TrustServiceSection from '@/components/home/TrustServiceSection';
import HeroAboutus from '@/components/about-us/Hero';

// import {useTranslations} from 'next-intl';
// import HeroClass from '@/components/driving-license/HeroClasses';

// import Notice from '@/components/driving-license/Notice';

export default function Page() {
  // const t = useTranslations('licenseA');
  // const Whatweoffer = t.raw('drivingRules');

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
        <HeroAboutus
          title="About WieFührerschein"
          description="Simplify the process of obtaining a driving license for drivering
                   students and enable more efficient administration for driving
                   schools"
        />
        <TrustServiceSection />
        <Footer />
      </Box>
    </>
  );
}
