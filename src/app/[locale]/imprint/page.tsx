import Footer from '@/components/Footer';
import Navbar from '@/components/navbar/Navbar';
import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import React from 'react';
import BG from '@/assets/svgs/textbg.svg';

const data = [
  {
    heading: 'Information according to § 5 TMG (German Telemedia Act)',
    html: 'Max Mustermann<br />Musterstraße 123<br /> 10115 Berlin<br /> Deutschland'
  },
  {
    heading: 'Contact',
    html: 'Telefon: +49 (0) 30 12345678<br />E-Mail: info@wiefuererschein.de<br /> Website: www.wiefuererschein.de'
  },
  {
    heading: 'VAT ID',
    html: `In accordance with § 19 UStG (German VAT Act), no VAT is charged.`
  },
  {
    heading: 'Person Responsible for Content according to § 55 Abs. 2 RStV',
    html: 'Max Mustermann<br />Musterstraße 123<br /> 10115 Berlin'
  },
  {
    heading: 'Liability for Content',
    html: 'As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 Abs.1 TMG. However, according to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.<br /><br />Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this regard is only possible from the moment of knowledge of a specific infringement. Upon notification of such violations, we will remove this content immediately.'
  },
  {
    heading: 'Liability for Links',
    html: 'Our website contains links to external third-party websites over whose content we have no control. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the linked pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking.<br /><br />Permanent monitoring of the content of linked pages is not reasonable without concrete evidence of a violation. Upon notification of legal violations, we will remove such links immediately.'
  },
  {
    heading: 'Copyright',
    html: 'The content and works created by the site operators on these pages are subject to German copyright law. Any reproduction, editing, distribution, or other use outside the limits of copyright law requires the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.<br /><br />To the extent that the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, we ask for a corresponding notice. Upon notification of violations, we will remove such content immediately.'
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
              Imprint
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
