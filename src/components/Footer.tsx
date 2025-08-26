import {Box, Typography} from '@mui/material';
import Logo from '@/assets/pngs/logo.png';
import Image from 'next/image';
import facebook from '@/assets/svgs/facebook.svg';
import instagram from '@/assets/svgs/instagram.svg';
import tiktok from '@/assets/svgs/tiktok.svg';

export default function Footer() {
  const sections = {
    funktionen: {
      heading: 'Funktionen',
      items: ['Fahrschüler', 'Fahrschulen', 'Installation']
    },
    services: {
      heading: 'Service',
      items: ['Über uns', 'Preise', 'Kontakt', 'Hilfe']
    },
    support: {
      heading: 'Rechtliches',
      items: ['Impressum', 'Datenschutz', 'AGB', 'Cookie']
    }
  };
  return (
    <>
      <Box
        sx={{
          padding: {
            xs: '48px 16px 32px 16px',
            sm: '48px 24px 32px 24px',
            md: '48px 48px 32px 48px'
          },
          display: 'flex',
          alignItems: {xs: 'center', sm: 'flex-start'},
          gap: {xs: '48px', sm: '10px'},
          justifyContent: 'space-between',
          maxWidth: '1280px',
          margin: 'auto',
          flexDirection: {xs: 'column', sm: 'row'}
        }}
      >
        <Box sx={{maxWidth: '350px'}}>
          <Box
            sx={{
              width: 'fit-content',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '6px',
              cursor: 'pointer'
            }}
          >
            <Image src={Logo} alt="logo" height={50} width={50} />
            <Typography
              sx={{
                fontSize: '27.58px',
                lineHeight: '27.58px',
                color: '#4611f5'
              }}
            >
              Wie
              <span
                style={{
                  fontWeight: '600',
                  background: 'linear-gradient(to right, #4611f5, #E501FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: '27.58px'
                }}
              >
                Führerschein
              </span>
            </Typography>
          </Box>
          <Typography
            sx={{
              color: '#2D3748',
              fontSize: {xs: '14px', md: '15px', lg: '16px'},
              paddingTop: '10px'
            }}
          >
            Wir verknupfen Fahrschüler und Fahrschulen durch ein digitales
            Service.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginTop: {xs: '24px', sm: '36px'}
            }}
          >
            <Image
              style={{height: '30px', width: '30px', objectFit: 'contain'}}
              src={facebook}
              alt="facebook"
            />
            <Image
              style={{height: '30px', width: '30px', objectFit: 'contain'}}
              src={instagram}
              alt="instagram"
            />
            <Image
              style={{height: '30px', width: '30px', objectFit: 'contain'}}
              src={tiktok}
              alt="tiktok"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px',
            width: {xs: '100%', sm: 'auto'},
            justifyContent: {xs: 'space-between', sm: 'unset'},
            maxWidth: '350px'
          }}
        >
          {Object.entries(sections).map(([key, section]) => (
            <Box sx={{width: {sm: '80px', md: '115px', lg: '172px'}}} key={key}>
              <Typography
                sx={{
                  color: '#2D3748',
                  fontSize: {xs: '14px', md: '15px', lg: '16px'},
                  lineHeight: '1.5em',
                  fontWeight: '600',
                  paddingBottom: '10px',
                  wordBreak: 'break-word',
                  whiteSpace: 'normal',
                  overflowWrap: 'break-word'
                }}
              >
                {section.heading}
              </Typography>
              <Box>
                {section.items.map((item, index) => (
                  <Typography
                    key={index}
                    sx={{
                      color: '#2D3748',
                      fontSize: {xs: '14px', md: '15px', lg: '16px'},
                      paddingBottom:
                        index !== section.items.length - 1 ? '10px' : 0,
                      wordBreak: 'break-word',
                      whiteSpace: 'normal',
                      overflowWrap: 'break-word',
                      cursor: 'pointer',
                      transition: 'all 0.4s ease-in-out',
                      '&:hover': {
                        color: '#4616F5'
                      }
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            color: '#2D3748',
            fontSize: {xs: '14px', md: '15px', lg: '16px'},
            lineHeight: '1.5em',
            fontWeight: '600',
            paddingBottom: {xs: '56px', lg: '24px'},
            wordBreak: 'break-word',
            whiteSpace: 'normal',
            overflowWrap: 'break-word',
            textAlign: 'center',
            paddingX: {
              xs: '16px',
              sm: '24px',
              md: '48px'
            }
          }}
        >
          Made in Germany with Love
        </Typography>
      </Box>
    </>
  );
}
