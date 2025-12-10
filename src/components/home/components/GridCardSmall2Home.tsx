import React from 'react';
import {Box, Typography, Link, Grid} from '@mui/material';
import Add from '@/assets/svgs/lincense-steps/addIcon.svg';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {useTranslations} from 'next-intl';
import featureIcon1 from '@/assets/svgs/features/feature-icon-1.svg';
import featureIcon2 from '@/assets/svgs/features/feature-icon-2.svg';
import featureIcon3 from '@/assets/svgs/features/feature-icon-3.svg';
import featureIcon4 from '@/assets/svgs/features/feature-icon-4.svg';
import featureIcon5 from '@/assets/svgs/features/feature-icon-5.svg';
import featureIcon6 from '@/assets/svgs/features/feature-icon-6.svg';
import BgImage from '@/assets/svgs/lincense-steps/backgroundFeature.svg';

type CardProps = {
  img: string;
  title: string;
  description: string;
  href: string;
};

type FeatureItem = {
  title: string;
  description: string;
  href: string;
  img: string;
};

type FeaturesGridProps = {
  locale?: string;
};

const MotionBox = motion(Box);

export default function GridCardSmall2Home({
  img,
  title,
  description,
  href
}: CardProps) {
  return (
    <Link sx={{textDecoration: 'none'}} href={href}>
      <MotionBox
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.6, ease: 'easeInOut'}}
        sx={{
          width: '100%',
          maxWidth: {lg: '445px'},
          height: {xs: '100%', md: '305px', lg: '320px'},
          position: 'relative',
          padding: '32px',
          display: 'flex',
          gap: '24px',
          borderRadius: '15px',
          backgroundColor: 'rgba(255,255,255,0.9)',
          boxShadow: 'rgba(0,0,0,0.25) 0px 0px 16px 0px'
        }}
        whileHover={{
          y: -10,
          boxShadow: 'rgba(0,0,0,0.25) 0px 0px 16px 10px',
          transition: {duration: 0.3, ease: 'easeInOut'}
        }}
        whileTap={{
          scale: 0.95,
          transition: {duration: 0.25, ease: 'easeInOut'}
        }}
      >
        <Box
          sx={{
            maxWidth: {xs: '100%', sm: '100%'},
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}
        >
          <Box sx={{width: '48px', height: '48px'}}>
            <Image
              src={img}
              alt="icon"
              style={{height: '100%', width: '100%'}}
            />
          </Box>
          <Typography
            sx={{
              fontSize: {xs: '20px', sm: '22px', lg: '24px'},
              color: '#1a202c',
              fontFamily: 'Satoshi700 !important'
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              width: '100%',
              minHeight: {xs: '84px', md: '90px', lg: '120px'},
              color: '#2d3748',
              fontSize: {xs: '14px', sm: '15px', lg: '16px'},
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: '300',
              lineHeight: '1.5em'
            }}
          >
            {description}
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            bottom: '16px',
            right: '16px',
            zIndex: 1,
            height: '37px',
            width: '37px',
            background: `linear-gradient(to bottom right,rgba(70, 17, 245, 0.15),rgba(31, 244, 255, 0.10),rgba(235, 0, 255, 0.15))`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            padding: '6px'
          }}
        >
          <Box sx={{width: '25px', height: '25px'}}>
            <Image
              src={Add}
              alt="addIcon"
              style={{height: '100%', width: '100%'}}
            />
          </Box>
        </Box>
      </MotionBox>
    </Link>
  );
}

// New component for mapping features from JSON
export function FeaturesGrid({}: FeaturesGridProps) {
  const t = useTranslations('SchoolDashboard.Features');
  const t2 = useTranslations('pageRoutes');

  // Icons imported from assets
  const defaultIcons = {
    icon1: featureIcon1,
    icon2: featureIcon2,
    icon3: featureIcon3,
    icon4: featureIcon4,
    icon5: featureIcon5,
    icon6: featureIcon6
  };

  // Feature data with irregular grid positions (like a map)
  const features: FeatureItem[] = [
    {
      title: t('profile.title'),
      description: t('profile.description'),
      href: t2('pricing') || '#',
      img: defaultIcons.icon1
    },
    {
      title: t('dashboard.title'),
      description: t('dashboard.description'),
      href: t2('pricing') || '#',
      img: defaultIcons.icon2
    },
    {
      title: t('students.title'),
      description: t('students.description'),
      href: t2('pricing') || '#',
      img: defaultIcons.icon3
    },
    {
      title: t('appointments.title'),
      description: t('appointments.description'),
      href: t2('pricing') || '#',
      img: defaultIcons.icon4
    },
    {
      title: t('messaging.title'),
      description: t('messaging.description'),
      href: t2('pricing') || '#',
      img: defaultIcons.icon5
    },
    {
      title: t('trainers.title'),
      description: t('trainers.description'),
      href: t2('pricing') || '#',
      img: defaultIcons.icon6
    }
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(${BgImage.src})`,
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: {
          xs: '56px 16px 48px 16px',
          sm: '64px 24px 48px 24px',
          lg: '80px 48px 48px 48px'
        },
        overflow: 'hidden'
      }}
    >
      <Typography
        sx={{
          fontSize: {xs: '28px', sm: '32px', lg: '36px'},
          fontFamily: 'Satoshi500 !important',
          color: '#000',
          textAlign: 'center',
          padding: '16px',
          marginBottom: '30px'
        }}
      >
        {t('title')}
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          // display: 'grid',
          // gridTemplateColumns: 'repeat(12, 1fr)',
          // gridAutoRows: 'calc(245px)',
          // gap: 3,
          maxWidth: '1400px',
          width: '100%',
          margin: 'auto',
          padding: '8px'
        }}
      >
        {features.map((feature, index) => (
          <Grid
            key={index}
            size={{xs: 12, md: 6, lg: 4}}

            // sx={{
            //   gridColumn: {
            //     xs: 'span 12',
            //     sm: feature.gridColumn || 'span 6',
            //     lg: feature.gridColumn || 'span 4'
            //   },
            //   gridRow: {
            //     xs: 'span 1',
            //     sm: feature.gridRow || 'span 1',
            //     lg: feature.gridRow || 'span 1'
            //   }
            // }}
          >
            <GridCardSmall2Home
              img={feature.img}
              title={feature.title}
              description={feature.description}
              href={feature.href}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
