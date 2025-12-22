'use client';

import {Box, Typography, Link} from '@mui/material';
import {useTranslations} from 'next-intl';

import Logo from '@/assets/pngs/LogoType.svg';
import Image from 'next/image';
import facebook from '@/assets/svgs/facebook.svg';
import instagram from '@/assets/svgs/instagram.svg';
import tiktok from '@/assets/svgs/tiktok.svg';

type FooterSection = {
  heading: string;
  items: {
    text: string;
    href: string;
  }[];
};

type FooterData = {
  description: string;
  features: FooterSection;
  services: FooterSection;
  support: FooterSection;
};

export default function Footer() {
  const t = useTranslations();
  const footerData = t.raw('Footer') as FooterData;
  const {description, ...sections} = footerData;

  return (
    <>
      <Box
        sx={{
          padding: {
            xs: '48px 16px 32px 16px',
            sm: '48px 24px 32px 24px',
            md: '48px 48px 32px 48px'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: {xs: 'start', sm: 'flex-start'},
            gap: {xs: '48px', sm: '10px'},
            justifyContent: 'space-between',
            maxWidth: '1400px',
            margin: 'auto',
            flexDirection: {xs: 'column', sm: 'row'}
          }}
        >
          {/* Logo + Description + Socials */}
          <Box sx={{maxWidth: '350px'}}>
            {/* <Box
              sx={{
                width: 'fit-content',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '6px',
                cursor: 'pointer'
              }}
            > */}
            <Image src={Logo} alt="logo" height={50} style={{width: 'auto'}} />
            {/* <Typography
                sx={{
                  fontSize: '28px',
                  lineHeight: '28px',
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
                    lineHeight: '28px'
                  }}
                >
                  Führerschein
                </span>
              </Typography> */}
            {/* </Box> */}
            <Typography
              sx={{
                color: '#2D3748',
                fontSize: {xs: '14px', md: '15px', lg: '16px'},
                fontFamily: '"Inter", sans-serif !important',
                paddingTop: '10px',
                lineHeight: '1.5em'
              }}
            >
              {description}
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

          {/* Footer Sections */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              width: {xs: '100%', sm: '100%'},
              justifyContent: {xs: 'space-between', sm: 'unset'},
              maxWidth: {lg: '540px', sm: '350px', xs: '80%'},
              mb: {xs: '55px', sm: '40px'}
            }}
          >
            {Object.entries(sections).map(([key, section]) => (
              <Box
                sx={{
                  width: {sm: '100px', md: '115px', lg: '172px'}
                }}
                key={key}
              >
                <Typography
                  sx={{
                    color: '#2e3749',
                    fontSize: {xs: '14px', md: '15px', lg: '16px'},
                    lineHeight: '1.5em',
                    fontWeight: '600',
                    paddingBottom: '10px',
                    wordBreak: 'break-word',
                    whiteSpace: 'normal',
                    fontFamily: '"Inter", sans-serif !important',
                    overflowWrap: 'break-word'
                  }}
                >
                  {section.heading}
                </Typography>
                <Box>
                  {section.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      underline="none"
                      sx={{
                        textDecoration: 'none'
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#626b7b',
                          fontSize: {xs: '12px', md: '13px', lg: '14px'},
                          paddingBottom:
                            index !== section.items.length - 1 ? '10px' : 0,
                          wordBreak: 'break-word',
                          whiteSpace: 'normal',
                          overflowWrap: 'break-word',
                          cursor: 'pointer',
                          fontFamily: '"Inter", sans-serif !important',
                          transition: 'all 0.4s ease-in-out',
                          '&:hover': {
                            color: '#4616F5'
                          }
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Link>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Footer Bottom */}
      <Box>
        <Typography
          sx={{
            color: '#4a5568',
            fontSize: {xs: '12px', md: '13px', lg: '14px'},
            lineHeight: '1.5em',
            fontWeight: '300',
            paddingBottom: {xs: '56px', lg: '24px'},
            wordBreak: 'break-word',
            whiteSpace: 'normal',
            fontFamily: '"Inter", sans-serif !important',
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
