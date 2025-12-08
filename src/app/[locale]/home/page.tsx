'use client';
import {Box} from '@mui/material';
import {useTranslations} from 'next-intl';

import Hero from '@/components/home/Hero';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import TrustServiceSection from '@/components/home/TrustServiceSection';
import HowItWorks from '@/components/home/HowItWorks';
import Faq from '@/components/home/Faq';
import Advantages from '@/components/home/Advantages';
import Pricing from '@/components/prices/Pricing';
import LicenseSteps from '@/components/home/components/LicenseSteps';
import uiDesigner from '@/assets/pngs/Tab-Menu/uiDesigner.png';
import webDesigner from '@/assets/pngs/Tab-Menu/webDesigner.png';
import seoSpecialist from '@/assets/pngs/Tab-Menu/seoSpecialist.png';
import guide from '@/assets/pngs/Tab-Menu/guide.png';

type StepFromI18n = {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  heading: string;
};

type Step = {
  number: string;
  title: string;
  heading: string;
  description: string;
  image: any;
};

export default function HomePage() {
  const t = useTranslations('HowItWorks');
  const tAdvantages = useTranslations('Advantages');

  const learnerImages = [uiDesigner, webDesigner, seoSpecialist, guide];

  const learnerSteps = (t.raw('learner.steps') as StepFromI18n[]).map(
    (s, i) => ({
      number: String(s.number),
      title: s.title,
      heading: s.heading,
      description: s.description,
      image: learnerImages[i]
    })
  );

  const stepsArray: Step[][] = [learnerSteps];

  const driverData = tAdvantages.raw('DriverData') as Array<{
    title: string;
    description: string;
    bgColor: string;
    color: string;
  }>;

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
        <Box sx={{marginTop: '82px'}}>
          <Hero />
        </Box>
        <LicenseSteps />
        <HowItWorks stepsArray={stepsArray} showTabs={false} />
        <Advantages data={driverData} />
        <Pricing />
        <Faq />
        <TrustServiceSection />
        <Footer />
      </Box>
    </>
  );
}
