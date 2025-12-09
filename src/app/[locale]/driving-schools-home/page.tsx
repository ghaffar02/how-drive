'use client';
import {Box} from '@mui/material';
import {useTranslations} from 'next-intl';
import {useParams} from 'next/navigation';

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
import heroImage from '@/assets/pngs/heroimage.jpeg';

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
  const params = useParams();
  const locale = (params?.locale as string) || 'en';

  const schoolImages = [uiDesigner, webDesigner, seoSpecialist, guide];

  const schoolSteps = (t.raw('school.steps') as StepFromI18n[]).map((s, i) => ({
    number: String(s.number),
    title: s.title,
    heading: s.heading,
    description: s.description,
    image: schoolImages[i]
  }));

  const stepsArray: Step[][] = [schoolSteps];

  const schoolsData = tAdvantages.raw('SchoolsData') as Array<{
    title: string;
    description: string;
    bgColor: string;
    color: string;
  }>;

  // Hero data for driving schools home page - passed directly from parent
  const heroData = {
    en: {
      title: 'The way to increase your efficiency',
      description:
        'Manage your driving school more efficiently through digital records, along with a booking system and messaging, all in one place.',
      buttonText: 'Start for free',
      buttonHref: '/register'
    },
    de: {
      title: 'Der Weg zur Effizienz',
      description:
        'Verwalte deine Fahrschule effizienter durch digitale Akten, zusammen mit Buchungssystem und Messaging, alles zentral.',
      buttonText: 'Kostenlos starten',
      buttonHref: '/register'
    }
  };

  const heroContent = heroData[locale as keyof typeof heroData] || heroData.en;

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
          <Hero
            title={heroContent.title}
            description={heroContent.description}
            buttonText={heroContent.buttonText}
            buttonHref={heroContent.buttonHref}
            imagePath={heroImage}
            showTabs={false}
            activeTab={1}
          />
        </Box>
        <LicenseSteps />
        <HowItWorks stepsArray={stepsArray} showTabs={false} />
        <Advantages data={schoolsData} />
        <Pricing mode="school" />
        <Faq type="school" />
        <TrustServiceSection />
        <Footer />
      </Box>
    </>
  );
}
