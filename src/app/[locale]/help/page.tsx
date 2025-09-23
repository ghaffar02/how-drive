'use client';
import {Box} from '@mui/material';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import TrustServiceSection from '@/components/home/TrustServiceSection';
import HeroAboutus from '@/components/about-us/Hero';
import HelpCards from '@/components/help/HelpCards';

import Starten from '@/assets/svgs/help/starten.svg';
import Konto from '@/assets/svgs/help/konto.svg';
import Rechnung from '@/assets/svgs/help/rechnung.svg';
import Daten from '@/assets/svgs/help/daten.svg';
import Trouble from '@/assets/svgs/help/trouble.svg';
import Sontiges from '@/assets/svgs/help/sontiges.svg';

import {useTranslations} from 'next-intl';

export default function Page() {
  const t = useTranslations('helpPage');

  const data = [
    {
      image: Starten,
      title: t('title1'),
      desc: t('des1')
    },
    {
      image: Konto,
      title: t('title2'),
      desc: t('des2')
    },
    {
      image: Rechnung,
      title: t('title3'),
      desc: t('des3')
    },
    {
      image: Daten,
      title: t('title4'),
      desc: t('des4')
    },
    {
      image: Trouble,
      title: t('title5'),
      desc: t('des5')
    },
    {
      image: Sontiges,
      title: t('title6'),
      desc: t('des6')
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
