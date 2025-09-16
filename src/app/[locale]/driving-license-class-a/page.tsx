'use client';
import {Box} from '@mui/material';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import TrustServiceSection from '@/components/home/TrustServiceSection';
import HeroClasses from '@/components/driving-license/HeroClasses';
import ClassGrid from '@/components/driving-license/ClassGrid';
import ImportantInformation from '@/components/driving-license/ImportantInformation';
import Costoverview from '@/components/driving-license/CostOverview';
import {useTranslations} from 'next-intl';

export default function Page() {
  const t = useTranslations('licenseA');
  const drivingRules = t.raw('drivingRules');
  const drivingCosts = t.raw('drivingCosts');
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
        <HeroClasses />
        <ClassGrid license="licenseA" />
        <ImportantInformation
          drivingRules={drivingRules}
          heading={t('heading1')}
        />
        <Costoverview drivingCosts={drivingCosts} heading={t('heading2')} />

        <TrustServiceSection />
        <Footer />
      </Box>
    </>
  );
}
