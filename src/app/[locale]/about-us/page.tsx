'use client';
import {Box} from '@mui/material';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import TrustServiceSection from '@/components/home/TrustServiceSection';
import Whatweoffer from '@/components/about-us/Whatweoffer';
import HeroAboutus from '@/components/about-us/Hero';

import image1 from '@/assets/pngs/image1.avif';
import image2 from '@/assets/pngs/M5dwfwnbJ9l1Z3S2MO0Qm15GBgU.avif';
import image3 from '@/assets/pngs/sRUvVqKQg8MALY42m7Iv8wcpWU.avif';
import ContentWithMedia from '@/components/about-us/ContentWithMedia';

// import {useTranslations} from 'next-intl';
// import HeroClass from '@/components/driving-license/HeroClasses';

// import Notice from '@/components/driving-license/Notice';

export default function Page() {
  // const t = useTranslations('licenseA');
  // const Whatweoffer = t.raw('drivingRules');

  const featuresData = [
    {
      category: 'For Driving Students',
      items: [
        {
          title: 'Find and compare driving schools',
          description:
            'Discover driving schools near you and find the right one for you'
        },
        {
          title: 'Personal progress tracker',
          description:
            'Keep track of your completed theory and driving hours, exam dates and your learning progress'
        },
        {
          title: 'Book appointments online',
          description:
            'Book theory and practical lessons conveniently via the website – without phone calls or waiting times'
        },
        {
          title: 'Direct communication',
          description:
            'Chat safely and easily with your driving school, ask questions and clarify everything important'
        },
        {
          title: 'Tips on necessary documents',
          description:
            "Use our tips to prepare the necessary documents for your driver's license application"
        }
      ]
    },
    {
      category: 'For Driving Schools',
      items: [
        {
          title: 'Attracting new driving students',
          description:
            'Present your offer on our platform and reach targeted driving students in your region'
        },
        {
          title: 'Appointment management',
          description:
            'Manage bookings digitally, reduce no-shows and save time'
        },
        {
          title: 'Centralize communication',
          description:
            'Answer inquiries and organize exchanges with students via our secure chat function'
        },
        {
          title: 'Progress documentation',
          description:
            'Record your students’ learning progress and provide them with a transparent overview'
        },
        {
          title: 'Monthly subscription model',
          description:
            'Enjoy all the benefits of our platform for a fixed, predictable monthly fee – no hidden costs'
        }
      ]
    }
  ];

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
        <HeroAboutus />
        <ContentWithMedia
          title="Who we are"
          description="We believe that getting a driver's license should be simple, transparent, and stress-free. That's precisely why we created our platform — to help driving students obtain their license and to provide driving schools with an efficient system for managing their students."
          mediaSrc={image1.src}
          // direction="row-reverse"
          direction="row"
        />
        {/* <HeroClass title1="aaa" title2="wwww" description="dddd" /> */}
        <Whatweoffer Whatweoffer={featuresData} heading="What we offer" />

        {/* <Whatweoffer */}
        <TrustServiceSection />
        <Footer />
      </Box>
    </>
  );
}
