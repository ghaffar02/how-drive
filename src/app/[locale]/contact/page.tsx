'use client';
import {Box} from '@mui/material';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import TrustServiceSection from '@/components/home/TrustServiceSection';
import HeroAboutus from '@/components/about-us/Hero';
import ContactForm from '@/components/contact/ContactForm';

import {useTranslations} from 'next-intl';
// import HeroClass from '@/components/driving-license/HeroClasses';

// import Notice from '@/components/driving-license/Notice';

export default function Page() {
  const t = useTranslations('contactPage');
  // const Whatweoffer = t.raw('drivingRules');

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
        <HeroAboutus title={t('pageTitle')} description={t('pageDes')} />
        <ContactForm />
        <TrustServiceSection />
        <Footer />
      </Box>
    </>
  );
}
