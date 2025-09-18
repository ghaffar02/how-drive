import Footer from '@/components/Footer';
import Navbar from '@/components/navbar/Navbar';
import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import React from 'react';
import BG from '@/assets/svgs/textbg.svg';

const data = [
  {
    heading: '',
    html: 'This Cookie Policy explains how we use cookies and similar technologies to provide you with an optimal user experience.<br /><br />As of: 01.10.2025'
  },
  {
    heading: '1. What Are Cookies?',
    html: 'Cookies are small text files stored by your browser on your device when you visit our website. They allow us to recognize your device on subsequent visits and to store certain information.'
  },
  {
    heading: '2. What Types of Cookies Do We Use?',
    html: '<strong>a) Essential Cookies</strong><br /><br />These cookies are necessary for the operation of our website and enable basic functions such as navigation and access to secure areas. Without these cookies, certain parts of the website may not function properly. These include, for example:<br /><br /><ul style="margin-left: 18px"><li>Session management (login status, security)</li><li>Storage of your cookie settings</li></ul><br /><br />These cookies cannot be disabled<br /><br /><strong>b) Functional Cookies</strong><br /><br />These cookies help improve user-friendliness, for example:<br /><br /><ul style="margin-left: 18px"><li>Saving your language settings</li><li>Pre-filled forms</li></ul><br /><strong>c) Analytics Cookies</strong><br /><br />We use these cookies to understand how our website is used (e.g., with Google Analytics or a similar tool).<br /><br /><ul style="margin-left: 18px"><li>Collection of anonymized usage data</li><li>Improvement of our content and features</li></ul><br />These cookies are only set with your consent.<br /><br /><strong>d) Marketing Cookies</strong><br /><br />These cookies enable the display of personalized content or advertising and the integration of external services, such as:<br /><ul style="margin-left: 18px"><li>Newsletter tracking</li><li>Payment service providers</li></ul><br />Map providers or embedded content'
  },
  {
    heading: '3. Your Consent',
    html: `On your first visit to our website, we ask for your consent to use cookies that are not strictly necessary. You can revoke or adjust your consent at any time by accessing the cookie settings.`
  },
  {
    heading: '4. Managing Your Cookie Settings',
    html: `You can control or completely disable the use of cookies in your browser settings. Please note that some features of our website may no longer function properly if you disable cookies.`
  },
  {
    heading: '5. Legal Basis',
    html: 'The legal basis for the use of cookies is:<br /><br /><ul style="margin-left:18px"><li>Art. 6(1)(f) GDPR (legitimate interest) for technically necessary cookies</li><li>Art. 6(1)(a) GDPR (consent) for all other types of cookies</li></ul>'
  }
];

export default function page() {
  return (
    <>
      <Navbar />
      <Box sx={{backgroundColor: '#fafafa'}}>
        <Box
          sx={{
            maxWidth: '1400px',
            width: '100%',
            margin: 'auto',
            padding: {xs: '20px 16px', sm: '40px 24px', lg: '80px 48px'}
          }}
        >
          <Box
            sx={{
              mb: '48px',
              height: {xs: '132px', sm: '136px', lg: '140px'},
              background: `url(${BG.src}) center / cover`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography
              sx={{
                ...localFont.h3
              }}
            >
              Cookie Policy
            </Typography>
          </Box>
          {data.map((item, i) => (
            <Box key={i} sx={{mb: '32px'}}>
              <Typography
                sx={{
                  color: '#1a202c',
                  fontSize: {xs: '20px', sm: '22px', lg: '24px'},
                  fontFamily: '"Inter", sans-serif !important'
                }}
              >
                {item.heading}
              </Typography>
              <Typography
                component="div"
                sx={{mt: '10px', fontSize: '16px', color: '#3d3d3d'}}
                dangerouslySetInnerHTML={{__html: item.html}}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
}
