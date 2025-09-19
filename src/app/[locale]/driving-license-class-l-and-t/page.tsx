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
import DrivingSteps from '@/components/driving-license/Tab';
import Notice from '@/components/driving-license/Notice';

export default function Page() {
  const t = useTranslations('licenseLT');
  const drivingRules = t.raw('drivingRules');
  const drivingCosts = t.raw('drivingCostsData1');
  const drivingCosts2 = t.raw('drivingCostsData2');
  const stepsData = t.raw('stepsData');

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
        <HeroClasses
          title1={t('title1')}
          title2={t('title2')}
          description={t('descriptionhero')}
        />
        <ClassGrid license="licenseLT" isbool={false} />
        <ImportantInformation
          drivingRules={drivingRules}
          heading={t('heading1')}
        />

        <Costoverview drivingCosts={drivingCosts} heading={t('heading2')} />
        <Box sx={{mt: '-80px'}}>
          <Costoverview drivingCosts={drivingCosts2} heading={t('heading4')} />
        </Box>
        <DrivingSteps steps={stepsData} heading={t('heading3')} />
        <Notice heading={t('notice')} description={t('noticeDetails')} />
        <TrustServiceSection />
        <Footer />
      </Box>
    </>
  );
}
