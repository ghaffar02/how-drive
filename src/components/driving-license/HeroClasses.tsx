'use client';
import {motion} from 'framer-motion';
import {Box, Typography} from '@mui/material';
import bgImage from '@/assets/pngs/DrivingLicenseClasses/textImageHero.avif';
type HeroClass = {
  title1: string;
  title2: string;
  description: string;
};
export default function HeroClass({title1, title2, description}: HeroClass) {
  return (
    <Box sx={{bgcolor: '#FAFAFA'}}>
      <Box
        sx={{
          p: {xs: '120px 24px 60px'},
          maxWidth: '1280px',
          textAlign: 'center',

          margin: ' auto',
          mt: '80px',
          width: '100%',
          backgroundColor: '#FAFAFA',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {/* Heading */}
        <Typography
          component={motion.p}
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.6}}
          transition={{duration: 0.8}}
          sx={{
            position: 'relative',
            display: 'inline-block',
            color: '#000', // default text color
            lineHeight: {xs: '58px', md: '80px'},
            fontSize: {xs: '48px', md: '56px', lg: '64px'},
            fontFamily: 'Satoshi700, sans-serif !important',
            maxWidth: '460px',
            // height: '100%',
            width: '100%',
            '&::after': {
              content: `"${title1}"`,
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              zIndex: '111',
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.36), rgba(0, 0, 0, 0.26)), url(${bgImage.src})`,
              backgroundSize: '100% 15%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '100%  100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }
          }}
        >
          {title1}
        </Typography>

        <Typography
          component={motion.p}
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.6}}
          transition={{duration: 0.8}}
          sx={{
            backgroundSize: 'center',
            backgroundPosition: 'center 1900px',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',

            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.36), rgba(0, 0, 0, 0.26)), url(${bgImage.src})`,
            color: '#000',
            lineHeight: {xs: '58px', md: '100%'},
            fontSize: {xs: '48px', md: '56px', lg: '64px'},
            fontWeight: 700,
            fontFamily: 'Satoshi700, sans-serif !important',
            maxWidth: '430px',
            width: '100%'
            // marginBottom: '16px'
          }}
        >
          {title2}
        </Typography>

        {/* Description */}
        <Typography
          component={motion.p}
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.6}}
          transition={{duration: 1, delay: 0.2}}
          sx={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.63), rgba(0, 0, 0, 0.26)), url(${bgImage.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            maxWidth: '650px',
            width: '100%',
            color: '#1A202C',
            fontSize: {xs: '18px', md: '20px', lg: '22px'},
            fontFamily: '"Inter", sans-serif  !important',
            fontWeight: '300',
            lineHeight: '1.35em',
            textAlign: 'center',
            mt: '32px'
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

// "title1": "Driving license ",
//   "title2": "Class A",
//   "descriptionhero": " Motorcycles in four categories, from light mopeds to larger  motorcycles.",

// "title1": "Führerschein",
// "title2": " Klasse A",
// "descriptionhero": "Krafträder in vier Kategorien, von leichten Kleinkrafträdern (Mopeds) bis größere Motorräder.",
