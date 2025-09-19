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
import ContentWithImage from '@/components/about-us/ContentWithImage';

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
        <HeroAboutus
          title="About WieFührerschein"
          description="Simplify the process of obtaining a driving license for drivering
                        students and enable more efficient administration for driving
                        schools"
        />
        <ContentWithImage
          title="Who we are"
          description="We believe that getting a driver's license should be simple, transparent, and stress-free. That's precisely why we created our platform — to help driving students obtain their license and to provide driving schools with an efficient system for managing their students."
          mediaSrc={image1.src}
          // direction="row-reverse"
          direction="row"
        />

        <ContentWithImage
          title="Our mission"
          description="We believe that a driver's license is an important step toward independence and mobility. At the same time, we understand how challenging organization, communication, and scheduling can be for driving students and driving schools. That's why we've created a digital solution that:
          <br/> 
          <br/>•   supports driving students free of charge,
          <br/>•   strengthens driving schools with innovative tools and increased visibility,   
          <br/>•   and makes the entire process more efficient, clearer and more personal."
          mediaSrc={image3.src}
          direction="row-reverse"
          // direction="row"
        />
        <ContentWithImage
          title="Why we do what we do"
          description="The driving school market is often still analog — confusing, paper-heavy, and not always transparent. We want to change that and create real added value for both parties with our platform: modern tools for driving schools and a clear, simple experience for students."
          mediaSrc={image2.src}
          // direction="row-reverse"
          direction="row"
        />

        <Whatweoffer Whatweoffer={featuresData} heading="What we offer" />

        <TrustServiceSection />
        <Footer />
      </Box>
    </>
  );
}
