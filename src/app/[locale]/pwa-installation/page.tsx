'use client';
import {Box} from '@mui/material';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import HeroAboutus from '@/components/about-us/Hero';

import {useTranslations} from 'next-intl';
import HowItWorks from '@/components/home/HowItWorks';
import apple from '@/assets/svgs/how-it-works/apple.svg';
import androidLogo from '@/assets/svgs/how-it-works/androidLogo.svg';
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

export default function Page() {
  const t = useTranslations('helpPage');
  const tHowItWorks = useTranslations('HowItWorks');

  const pwaIosImages = [uiDesigner, webDesigner, seoSpecialist, guide];
  const pwaAndroidImages = [uiDesigner, webDesigner, seoSpecialist, guide];

  const pwaIosSteps = (tHowItWorks.raw('pwaIos.steps') as StepFromI18n[]).map(
    (s, i) => ({
      number: String(s.number),
      title: s.title,
      heading: s.heading,
      description: s.description,
      image: pwaIosImages[i]
    })
  );

  const pwaAndroidSteps = (
    tHowItWorks.raw('pwaAndroid.steps') as StepFromI18n[]
  ).map((s, i) => ({
    number: String(s.number),
    title: s.title,
    heading: s.heading,
    description: s.description,
    image: pwaAndroidImages[i]
  }));

  const stepsArray: Step[][] = [pwaIosSteps, pwaAndroidSteps];

  const tabsData = [
    {label: tHowItWorks('label3'), icon: apple},
    {label: tHowItWorks('label4'), icon: androidLogo}
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
        <HeroAboutus title={t('pwaInstallationTitle')} description={t('pwaInstallationDes')} />
        <Box bgcolor={'#fafafa'}>
          <HowItWorks
            stepsArray={stepsArray}
            showTabs={true}
            tabsData={tabsData}
          />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
