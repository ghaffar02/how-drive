'use client';
import {Box} from '@mui/material';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import TrustServiceSection from '@/components/home/TrustServiceSection';
import HeroAboutus from '@/components/about-us/Hero';
import HelpCards from '@/components/help/HelpCards';

import Starten from '@/assets/svgs/help/img1.svg';
import Konto from '@/assets/svgs/help/img2.svg';
import Rechnung from '@/assets/svgs/help/img3.svg';
import Daten from '@/assets/svgs/help/imag4.svg';
import Trouble from '@/assets/svgs/help/trouble.svg';
import Sontiges from '@/assets/svgs/help/daten.svg';

import {useTranslations} from 'next-intl';

export default function Page() {
  const t = useTranslations('helpPage');

  const data = [
    {
      image: Starten,
      title: t('title1'),
      desc: t('des1'),
      href: t('href1')
    },
    {
      image: Konto,
      title: t('title2'),
      desc: t('des2'),
      href: t('href2')
    },
    {
      image: Rechnung,
      title: t('title3'),
      desc: t('des3'),
      href: t('href3')
    },
    {
      image: Daten,
      title: t('title4'),
      desc: t('des4'),
      href: t('href4')
    },
    {
      image: Sontiges,
      title: t('title5'),
      desc: t('des5'),
      href: t('href5')
    },
    {
      image: Trouble,
      title: t('title6'),
      desc: t('des6'),
      href: t('href6')
    }
  ];

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
        <HelpCards data={data} />
        <TrustServiceSection />
        <Footer />
      </Box>
    </>
  );
}
