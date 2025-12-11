import React, {useState} from 'react';
import {Box, Typography, Link, Grid, IconButton} from '@mui/material';
import Add from '@/assets/svgs/lincense-steps/addIcon.svg';
import Image from 'next/image';
import {motion, AnimatePresence} from 'framer-motion';
import {useTranslations} from 'next-intl';
import featureIcon1 from '@/assets/svgs/features/feature-icon-1.svg';
import featureIcon2 from '@/assets/svgs/features/feature-icon-2.svg';
import featureIcon3 from '@/assets/svgs/features/feature-icon-3.svg';
import featureIcon4 from '@/assets/svgs/features/feature-icon-4.svg';
import featureIcon5 from '@/assets/svgs/features/feature-icon-5.svg';
import featureIcon6 from '@/assets/svgs/features/feature-icon-6.svg';
import BgImage from '@/assets/svgs/lincense-steps/FeatureBG.svg';
import BgImage1 from '@/assets/svgs/dashboard-student/DashAdBG.svg';
import localFont from '@/utils/themes';

type CardProps = {
  img: string;
  title: string;
  description: string;
  href: string;
  onCardClick?: () => void;
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
  href,
  onCardClick
}: CardProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onCardClick) {
      onCardClick();
    }
  };

  return (
    <Link sx={{textDecoration: 'none'}} href={href} onClick={handleClick}>
      <MotionBox
        initial={{opacity: 0, y: 75}}
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
          boxShadow: '0px 0px 16px 0px rgba(0, 0, 0, 0.25)',
          cursor: 'pointer'
        }}
        whileHover={{
          y: -8,
          boxShadow: 'rgba(0,0,0,0.25) 0px 0px 16px 8px',
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
              color: '#333845',
              fontFamily: 'Satoshi700 !important'
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              width: '100%',
              minHeight: {xs: '84px', md: '90px', lg: '120px'},
              color: '#434b5d',
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

// Modal Component
type FeatureModalProps = {
  open: boolean;
  onClose: () => void;
  img: string;
  title: string;
  description: string;
};

function FeatureModal({
  open,
  onClose,
  img,
  title,
  description
}: FeatureModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop with blur */}
          <MotionBox
            initial={{opacity: 0, y: 81}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.3, ease: 'easeInOut'}}
            onClick={onClose}
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              // backdropFilter: 'blur(8px)
              opacity: 1,
              zIndex: 9998,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: {xs: '16px', sm: '24px', md: '32px'}
            }}
          />
          {/* Modal Content */}
          <Box
            sx={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              // bottom: '0%',
              // transform: 'translate(-50%, -50%)',
              transform: {
                xs: 'translate(-50%, -35%)',
                md: 'translate(-50%, -50%)'
              },
              zIndex: 9999,
              // width: {xs: '90%', sm: '80%', md: '70%', lg: '60%'},
              width: '100%',
              maxWidth: '916px',
              maxHeight: '90vh',
              pointerEvents: 'auto'
            }}
          >
            <MotionBox
              initial={{opacity: 0, scale: 0.8, y: 120}}
              animate={{opacity: 1, scale: 1, y: 0}}
              exit={{opacity: 0, scale: 0.8, y: 20}}
              transition={{duration: 0.4, ease: 'easeInOut'}}
              onClick={(e) => e.stopPropagation()}
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                // backgroundColor: 'rgb(255, 255, 255 )',
                backgroundColor: '#ffffff',
                p: '32px',
                gap: '32px',
                borderRadius: '20px',
                boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 40px 10px',
                overflow: 'hidden'
              }}
            >
              {/* Image Container */}
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                {/* Text Content */}
                <Box
                  sx={{
                    // padding: {xs: '24px', sm: '32px'},
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    // flexDirection: '',
                    gap: '16px'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {xs: '20px', sm: '22px', lg: '24px'},
                      color: '#333845',
                      fontFamily: 'Satoshi700 !important'
                    }}
                  >
                    {title}
                  </Typography>

                  {/* Close Button */}
                  <Box
                    sx={
                      {
                        // position: 'absolute',
                        // top: '16px',
                        // right: '16px ',
                        // zIndex: 10000
                      }
                    }
                  >
                    <IconButton
                      onClick={onClose}
                      sx={{
                        width: '40px',
                        height: '40px',
                        // backgroundColor: 'rgba(0, 0, 0, 0.05)',
                        borderRadius: '50%',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.1)'
                        },
                        transition: 'all 0.2s ease-in-out'
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        style={{
                          width: '24px',
                          height: '24px',
                          fill: 'rgb(0, 0, 0)'
                        }}
                      >
                        <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
                      </svg>
                    </IconButton>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    ...localFont.inter16,
                    color: '#2d3748',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '300',
                    lineHeight: '1.6em'
                  }}
                >
                  {description}
                </Typography>
              </Box>

              <Box
                sx={{
                  width: '100%',
                  padding: '24px',
                  maxWidth: '916px',
                  // height: '524px',
                  height: {xs: '250px', sm: '300px', md: '400px', lg: '524px'},
                  position: 'relative',
                  backgroundColor:
                    'linear-gradient(125deg, rgba(70, 17, 245, 0.15) 0%, rgba(255, 165, 0, 0.1) 50%, rgba(235, 0, 255, 0.15) 100%)',
                  boxShadow:
                    'rgba(0, 0, 0, 0.13) 0px 0.602187px 2.52919px -0.833333px, rgba(0, 0, 0, 0.13) 0px 2.28853px 9.61184px -1.66667px, rgba(0, 0, 0, 0.13) 0px 10px 42px -2.5px',
                  borderRadius: {xs: '16px'},
                  overflow: 'hidden'
                }}
              >
                <Image
                  src={BgImage1}
                  alt={title}
                  fill
                  style={{
                    objectFit: 'cover',
                    borderRadius: '20px 20px 0 0'
                  }}
                />
              </Box>
            </MotionBox>
          </Box>
        </>
      )}
    </AnimatePresence>
  );
}

// New component for mapping features from JSON
export function FeaturesGrid({}: FeaturesGridProps) {
  const t = useTranslations('SchoolDashboard.Features');
  const t2 = useTranslations('pageRoutes');
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(
    null
  );

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
          maxWidth: '1400px',
          width: '100%',
          margin: 'auto',
          padding: '8px'
        }}
      >
        {features.map((feature, index) => (
          <Grid key={index} size={{xs: 12, md: 6, lg: 4}}>
            <GridCardSmall2Home
              img={feature.img}
              title={feature.title}
              description={feature.description}
              href={feature.href}
              onCardClick={() => setSelectedFeature(feature)}
            />
          </Grid>
        ))}
      </Grid>

      {/* Modal */}
      <FeatureModal
        open={selectedFeature !== null}
        onClose={() => setSelectedFeature(null)}
        img={selectedFeature?.img || ''}
        title={selectedFeature?.title || ''}
        description={selectedFeature?.description || ''}
      />
    </Box>
  );
}
