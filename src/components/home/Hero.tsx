'use client';
import {motion, Variants, useScroll, useTransform} from 'framer-motion';
import {Box, Button, Typography} from '@mui/material';
import Image from 'next/image';
import heroImage from '@/assets/pngs/heroimage.jpeg';

export default function Hero() {
  const text = 'Der Weg zum Führerschein';
  const {scrollY} = useScroll();

  const rotateX = useTransform(scrollY, [0, 150], [15, 0]);
  const y = useTransform(scrollY, [0, 150], [20, 0]);
  const letterAnimation = {
    hidden: {opacity: 0, rotateY: 90, y: 10},
    visible: (i: number) => ({
      opacity: 1,
      rotateY: 0,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  } as Variants;
  return (
    <>
      <Box
        sx={{
          // height: '100vh',
          backgroundImage: 'url(/HeroBG.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <Box
          sx={{
            // bgcolor: '#ccc',
            width: '100%',
            maxWidth: '1280px',
            p: {xs: '72px 16px 0', md: '80px 24px 0'},
            margin: 'auto',
            textAlign: 'center',
            paddingTop: '80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <>
            <Typography
              sx={{
                width: '100%',
                maxWidth: {xs: '330px', sm: '780px'},
                lineHeight: {xs: '58px', md: '100%'},
                color: '#000',
                fontSize: {xs: '48px', md: '56px', lg: '64px'},
                textWrap: {md: 'nowrap'},
                fontWeight: '600 !important',
                paddingBottom: '32px',
                perspective: '1000px',
                fontFamily: 'Satoshi600 !important'
              }}
            >
              {text.split('').map((char, i) => (
                <motion.span
                  key={i}
                  variants={letterAnimation}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  style={{
                    display: 'inline-block',
                    whiteSpace: char === ' ' ? 'pre' : 'nowrap'
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </Typography>
          </>
          <Typography
            component={motion.p}
            initial={{opacity: 0, scale: 0.92}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true, amount: 0.6}}
            transition={{duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2}}
            sx={{
              maxWidth: {sm: '780px'},
              color: '#000',
              fontSize: {xs: '18px', md: '20px', lg: '22px'},
              fontFamily: 'Satoshi300 !important'
            }}
          >
            Behalte jeden Schritt und deine Fortschritte immer im Blick, sowie
            Termine buchen und Nachrichten senden, alles aus einer Hand.
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
              sx={{
                width: '100%',
                maxWidth: '186px',
                fontSize: {xs: '14px', md: '16px', lg: '18px'},
                lineHeight: {xs: '21px', md: '20px', lg: '23px'},
                // fontFamily: '"Inter", sans-serif  !important',
                cursor: 'pointer',
                marginTop: '48px',
                padding: '12px 16px',
                textTransform: 'capitalize',
                borderRadius: '10px',
                border: '1px solid #4611f5',
                bgcolor: '#4611F5',
                color: '#fff',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: '#300ca8',
                  color: '#fff'
                }
              }}
            >
              Kostenlos starten
            </Button>
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
              // margin: '0 70%',
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
                  minWidth: '665px',
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
                    minWidth: '665px',
                    mx: 'auto',
                    width: '100%'
                  }}
                >
                  <Image
                    src={heroImage}
                    alt="heroImage"
                    style={{width: '100%', height: '100%'}}
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
