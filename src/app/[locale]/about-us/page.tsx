'use client';
import {Box} from '@mui/material';
import {useEffect} from 'react';
import {usePathname, useSearchParams} from 'next/navigation';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import TrustServiceSection from '@/components/home/TrustServiceSection';
import Whatweoffer from '@/components/about-us/Whatweoffer';
import HeroAboutus from '@/components/about-us/Hero';

import image1 from '@/assets/pngs/image1.avif';
import image2 from '@/assets/pngs/M5dwfwnbJ9l1Z3S2MO0Qm15GBgU.avif';
import image3 from '@/assets/pngs/sRUvVqKQg8MALY42m7Iv8wcpWU.avif';
import ContentWithImage from '@/components/about-us/ContentWithImage';

import {useTranslations} from 'next-intl';
// import HeroClass from '@/components/driving-license/HeroClasses';

// import Notice from '@/components/driving-license/Notice';

export default function Page() {
  const t = useTranslations('AboutUs');
  const featuresData = t.raw('featuresData');
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({behavior: 'smooth', block: 'start'});
          }, 100);
        }
      }
    };

    // Scroll on initial load or route change (for hash links)
    scrollToHash();

    // Listen for hash changes (when clicking links on the same page)
    window.addEventListener('hashchange', scrollToHash);

    // Also check for scroll target in sessionStorage (set by navbar click)
    const scrollTarget = sessionStorage.getItem('scrollTo');
    if (scrollTarget) {
      sessionStorage.removeItem('scrollTo');
      setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          element.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
      }, 300);
    }

    return () => {
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, [pathname, searchParams]);

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
        <HeroAboutus title={t('heroTitle')} description={t('heroDes')} />
        <ContentWithImage
          id="who-we-are"
          title={t('contantTitle1')}
          description={t('contactDes1')}
          mediaSrc={image1.src}
          // direction="row-reverse"
          direction="row"
        />

        <ContentWithImage
          id="our-mission"
          title={t('contantTitle2')}
          description={t('contactDes2')}
          mediaSrc={image3.src}
          direction="row-reverse"
          // direction="row"
        />
        <ContentWithImage
        
          title={t('contantTitle3')}
          description={t('contactDes3')}
          mediaSrc={image2.src}
          // direction="row-reverse"
          direction="row"
        />

        <Whatweoffer   id="what-we-offer" Whatweoffer={featuresData} heading={t('Title')} />

        <TrustServiceSection />
        <Footer />
      </Box>
    </>
  );
}
