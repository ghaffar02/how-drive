'use client';

import {Box, Typography} from '@mui/material';
import {motion} from 'framer-motion';
// import {useTranslations} from 'next-intl';
interface hero {
  title?: string;
  description?: string;
}
export default function HeroAboutus({title, description}: hero) {
  // const t = useTranslations('Services');

  return (
    <>
      <Box
        sx={{
          padding: {
            xs: '48px 16px',
            sm: '48px 24px',
            md: '48px'
          },
          mt: '82px',
          // background: '#FAFAFA',
          background:
            'linear-gradient(60deg, #ea00ff 0%, #4611f5ff 50%, rgb(30, 245, 255) 100%)'
        }}
      >
        <Box
          sx={{
            height: '60vh',
            width: '100%',
            maxWidth: '1280px',
            m: '0 auto',
            borderRadius: '25px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
            flexDirection: 'column'
          }}
        >
          <Typography
            component={motion.p}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.6}}
            transition={{duration: 0.8}}
            sx={{
              color: '#FFFFFF',
              fontSize: {xs: '48px', md: '56px', lg: '64px'},
              lineHeight: {xs: '1.2em', lg: '1.15em'},
              fontWeight: '700',
              maxWidth: '900px',
              width: '100%',
              fontFamily: 'Satoshi700 !important',
              textAlign: 'center'
            }}
          >
            {title}
          </Typography>
          <Typography
            component={motion.p}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.6}}
            transition={{duration: 0.8, delay: 0.9}}
            sx={{
              textAlign: 'center',
              color: '#FFFFFF',
              fontSize: {xs: '18px', md: '20px', lg: '22px'},
              lineHeight: '1.35em',
              fontFamily: '"Inter", sans-serif  !important',
              fontWeight: '300',
              maxWidth: '700px',
              width: '100%'
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
