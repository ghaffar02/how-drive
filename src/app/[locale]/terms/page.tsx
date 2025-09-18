import Footer from '@/components/Footer';
import Navbar from '@/components/navbar/Navbar';
import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import React from 'react';
import BG from '@/assets/svgs/textbg.svg';

const data = [
  {
    heading: '',
    html: 'As of: 01.10.2025<br /><br />Betreiber:<br />Max Mustermann<br />Musterstraße 123<br />10115 Berlin<br /><br />info@wiefuererschein.de'
  },
  {
    heading: '1. Scope',
    html: 'These Terms and Conditions apply to the use of the platform <strong>[Name of the Platform]</strong> by driving students and driving schools. The platform serves to connect theory and driving lessons and to facilitate communication between driving students and driving schools.'
  },
  {
    heading: '2. Registration and User Accounts',
    html: `<strong>a) Driving Students</strong><br /><br /><ul style="margin-left: 18px"><li>Registration and use of the platform is free of charge for driving students.</li><li>Users must provide truthful and complete information during registration.</li><li>Each user is responsible for the confidentiality of their password.</li></ul><br /><br /><strong>b) Driving Students</strong><br /><br /><ul style="margin-left: 18px"><li>Driving schools may register after successful verification by the operator.</li><li>Use of the platform is free of charge for driving schools for the first month. From the second month onwards, use is subject to a fee (see § 3).</li><li>Driving schools undertake to provide current and accurate information about their driving school (e.g., address, opening hours, contact details).</li></ul>`
  },
  {
    heading: '3. Costs and Payment Terms (for Driving Schools Only)',
    html: `The following conditions apply:<ul style="margin-left: 18px"><li>Use of the platform is free of charge for driving schools for the first month. After that, use is subject to a monthly fee.</li><li>Payment is made via <strong>[payment method, e.g., SEPA direct debit, credit card]</strong> through our payment service provider <strong>[Name of the payment service provider]</strong>.</li><li>Payment is debited monthly in advance.</li><li>Driving schools may terminate the contract with <strong>14 days’</strong> notice to the end of the month.</li></ul>`
  },
  {
    heading: '4. Booking Appointments',
    html: `The following conditions apply:<ul style="margin-left: 18px"><li>Driving students can book theory and driving lessons with participating driving schools via the platform.</li><li>Bookings are binding. Cancellations or changes must be arranged directly with the driving school.</li><li>The platform accepts no liability for the execution of booked appointments.</li></ul>`
  },
  {
    heading: '5. User Obligations',
    html: `The following conditions apply:<ul style="margin-left: 18px"><li>Users undertake to use the platform only for its intended purpose.</li><li>It is prohibited to provide false information, use the platform for illegal purposes, or harass other users.</li><li>Driving schools undertake to keep their offers and prices correct and up to date.</li></ul>`
  },
  {
    heading: '6. Liability',
    html: `The following conditions apply:<ul style="margin-left: 18px"><li>The operator is not liable for the accuracy, completeness, or timeliness of the information provided on the platform.</li><li>The operator is not liable for damages arising from the use of the platform or the behavior of other users.</li><li>Driving schools are themselves liable for the execution of booked appointments.</li></ul>`
  },
  {
    heading: '7. Data Protection',
    html: `The following conditions apply:<ul style="margin-left: 18px"><li>The collection and processing of personal data is carried out in accordance with our Privacy Policy.</li><li>Users agree to the Privacy Policy.</li></ul>`
  },
  {
    heading: '8. Termination and Blocking',
    html: `The following conditions apply:<ul style="margin-left: 18px"><li>The operator reserves the right to block user accounts in the event of a breach of these Terms and Conditions.</li><li>Driving schools may terminate their contract with <strong>14 days’</strong> notice.</li></ul>`
  },
  {
    heading: '9. Changes to the Terms and Conditions',
    html: `The following conditions apply:<ul style="margin-left: 18px"><li>The operator reserves the right to change these Terms and Conditions.</li><li>Users will be informed of changes by email.</li><li>Continued use of the platform after a change constitutes acceptance of the new Terms and Conditions.</li></ul>`
  },
  {
    heading: '10. Final Provisions',
    html: `The following conditions apply:<ul style="margin-left: 18px"><li>If individual provisions of these Terms and Conditions are or become invalid, the validity of the remaining provisions shall remain unaffected.</li><li>The law of the Federal Republic of Germany shall apply.</li><li>The place of jurisdiction is <strong>[Location]</strong>, provided the user is a merchant or does not have a general place of jurisdiction in Germany.</li></ul>`
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
              Terms and Conditions
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
