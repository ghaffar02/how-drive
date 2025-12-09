'use client';
import {motion, useScroll, useTransform} from 'framer-motion';
import {Box, Button, Typography} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import heroImage from '@/assets/pngs/heroimage.jpeg';
import TabSwitcher from '../TabSwitcher';
import {useRouter} from 'next/navigation';

interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  imagePath?: string | any;
  activeTab?: number;
  showTabs?: boolean;
}

export default function Hero({
  title,
  description,
  buttonText,
  buttonHref,
  imagePath = heroImage,
  activeTab,
  showTabs = false
}: HeroProps) {
  const text = title;

  // const text = 'Der Weg zum Führerschein';

  // const splitText = (str: string) =>
  //   str.split('').map((char, i) => (
  //     <span
  //       key={i}
  //       style={{
  //         display: 'inline-block',
  //         opacity: 0,
  //         transform: 'rotateY(90deg) translateY(10px)',
  //         fontFamily: 'Satoshi700 !important',
  //         animation: `flipIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
  //         animationDelay: `${i * 0.05}s`
  //       }}
  //     >
  //       {char === ' ' ? '\u00A0' : char}
  //     </span>
  //   ));

  const splitText = (str: string) =>
    str.split(' ').map((word, wordIndex) => (
      <span
        key={wordIndex}
        style={{
          display: 'inline-block',
          marginRight: '10px',
          whiteSpace: 'nowrap'
        }}
      >
        {word.split('').map((char, charIndex) => (
          <span
            key={charIndex}
            style={{
              display: 'inline-block',
              opacity: 0,
              transform: 'rotateY(90deg) translateY(10px)',
              fontFamily: 'Satoshi700 !important',
              animation: `flipIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
              animationDelay: `${wordIndex * 0.3 + charIndex * 0.05}s`
            }}
          >
            {char}
          </span>
        ))}
      </span>
    ));

  const {scrollY} = useScroll();

  const rotateX = useTransform(scrollY, [0, 150], [15, 0]);
  const y = useTransform(scrollY, [0, 150], [20, 0]);
  const router = useRouter();

  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url(/HeroBG.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          p: {xs: '72px 16px 0', md: '80px 24px 0'}
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '1400px',
            margin: 'auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Tab Section */}

          <TabSwitcher
            tab1Label={'Driving students'}
            tab2Label={'Driving schools'}
            activeTab={activeTab}
            onTab1Click={() => router.push('/')}
            onTab2Click={() => router.push('/driving-schools-home')}
          />

          <>
            <style>
              {`
          @keyframes flipIn {
            0% {
              opacity: 0;
              transform: rotateY(90deg) translateY(10px);
            }
            100% {
              opacity: 1;
              transform: rotateY(0deg) translateY(0);
            }
          }
        `}
            </style>
            <Typography
              sx={{
                display: 'inline-block',
                whiteSpace: 'pre-wrap',
                color: '#000',
                fontSize: {xs: '48px', md: '56px', lg: '64px'},
                fontWeight: '700 !important',
                paddingBottom: '32px',
                lineHeight: {xs: '58px', md: '100%'},
                perspective: '1000px',
                fontFamily: 'Satoshi700 !important',
                mt: '50px'
              }}
            >
              {splitText(text)}
            </Typography>
          </>
          {/* </Box> */}
          <Typography
            component={motion.p}
            initial={{opacity: 0, scale: 0.92}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true, amount: 0.6}}
            transition={{duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1}}
            sx={{
              maxWidth: {sm: '780px'},
              color: '#1A202C',
              fontSize: {xs: '18px', md: '20px', lg: '22px'},
              fontFamily: '"Inter", sans-serif  !important',
              fontWeight: '300',
              lineHeight: '1.35em'
            }}
          >
            {description}
          </Typography>
          <Box
            component={motion.p}
            initial={{opacity: 0, scale: 0.92}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true, amount: 0.6}}
            transition={{duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.5}}
            sx={{
              width: '100%',
              margin: 'auto '
            }}
          >
            <Button
              component={Link}
              href={buttonHref}
              disableRipple
              sx={{
                width: 'fit-content',
                fontSize: {xs: '14px', md: '16px', lg: '18px'},
                lineHeight: {xs: '21px', md: '20px', lg: '23px'},
                fontWeight: '400',
                cursor: 'pointer',
                marginTop: '48px',
                padding: '12px 16px',
                textTransform: 'none',
                borderRadius: '10px',
                border: '1px solid #4611f5',
                bgcolor: '#4611F5',
                color: '#fff',
                transition: 'all 0.2s ease',
                fontFamily: '"Inter", sans-serif !important',
                '&:hover': {
                  backgroundColor: '#300CA8',
                  color: '#fff',
                  border: '1px solid #4611f5'
                },
                '&:active': {
                  backgroundColor: '#1A065C !important',
                  border: '1px solid #4611F5',
                  color: '#fff'
                }
              }}
            >
              {buttonText}
            </Button>
            {/* </Box> */}
          </Box>
          <Box
            component={motion.div}
            initial={{opacity: 0, scale: 0.92}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true, amount: 0.6}}
            transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.8}}
            sx={{
              perspective: '1000px',
              maxWidth: {xs: '865px', md: '1025px', lg: '1400px'},
              minWidth: '665px',
              mx: 'auto',
              overflow: 'hidden',
              padding: '0 30px',
              width: '100%'
            }}
          >
            <motion.div
              style={{
                width: '100%',
                transformStyle: 'preserve-3d',
                rotateX,
                y,
                scale: 1,
                opacity: 1
              }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 60,
                mass: 1
              }}
            >
              <Box
                sx={{
                  boxShadow:
                    'inset 0px 0.602px 1.083px -1.33px rgba(0,0,0,0.19), inset 0px 2.288px 4.119px -2.66px rgba(0,0,0,0.17), inset 0px 10px 18px -4px rgba(0,0,0,0.05)',
                  borderRadius: '15px',
                  border: '1px solid #ffffff',
                  maxWidth: {xs: '865px', md: '1025px', lg: '1400px'},
                  // minWidth: '665px',
                  mx: 'auto',
                  width: '100%',
                  mt: '80px',
                  padding: '8px',
                  bgcolor: 'transparent',
                  backdropFilter: 'blur(30px)',
                  WebkitBackdropFilter: 'blur(30px)'
                }}
              >
                <Box
                  sx={{
                    maxWidth: {xs: '865px', md: '1025px', lg: '1400px'},
                    // minWidth: '665px',
                    mx: 'auto',
                    width: '100%'
                  }}
                >
                  <Image
                    src={imagePath}
                    alt="heroImage"
                    style={{width: '100%', height: '100%'}}
                    quality={85}
                  />
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </>
  );
}
