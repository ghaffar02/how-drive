'use client';
import {Box} from '@mui/material';
import image from '@/assets/pngs/ImageBGridInfo.jpg';
import {StaticImageData} from 'next/image';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import GettingStarted from '@/components/help/GettingStarted';

type NestedListItem = {
  text: string;
  type?: 'orderedList' | 'unorderedList' | 'dotList' | 'dottedList';
  subItems?: string[];
};

type ContentBlock = {
  type: 'heading' | 'paragraph' | 'orderedList' | 'unorderedList';
  content: string | string[] | NestedListItem[] | (string | NestedListItem)[];
  bold?: boolean;
};

type GettingStartedItem = {
  title: string;
  content: ContentBlock[];
  image: StaticImageData | string;
};

export default function Page() {
  // Data array for Getting Started sections
  const gettingStartedData: GettingStartedItem[] = [
    {
      title: 'Deleting Account',
      content: [
        {
          type: 'heading' as const,
          content: 'Deleting Account'
        },
        {
          type: 'paragraph' as const,
          content: 'You can delete your account at any time.'
        },
        {
          type: 'paragraph' as const,
          content: 'Account deletion is permanent and cannot be undone.'
        },
        {
          type: 'heading' as const,
          content: 'What happens after deletion?'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'All your personal data will be deleted.',
            'All your booked driving lessons and appointments will be removed. You must cancel or resolve any outstanding bookings or contracts with driving schools yourself beforehand.',
            'All chats and messages with driving schools or other users will be deleted.',
            'You will lose access to your dashboard and all platform features.',
            'All profile data and driving school profile pages on the website, as well as all invoices, will be deleted.',
            'Schools cannot delete trainers manually; instead, they archive them.'
          ]
        },
        {
          type: 'heading' as const,
          content: 'How to delete your account'
        },
        {
          type: 'heading' as const,
          content: '1. Open Settings'
        },
        {
          type: 'heading' as const,
          content: '2. Go to "Account"'
        },
        {
          type: 'paragraph' as const,
          content: 'Click on "Delete account" and confirm your decision.'
        }
      ],
      image: image
    },
    {
      title: 'Delete account section',
      content: [
        {
          type: 'heading' as const,
          content: '3. Confirm deletion'
        },
        {
          type: 'paragraph' as const,
          content:
            'You will receive an email at your registered address to confirm the deletion process. This is for your security. After confirmation, your account will be permanently deleted within 30 days. During this time, you can cancel the deletion process at any time by logging in again.'
        },
        {
          type: 'heading' as const,
          content: 'Important hints'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'Irrevocable: Once deleted, your data cannot be recovered. You will need to re-register if you wish to use the platform again later.',
            'GDPR: Your data will be deleted in accordance with the General Data Protection Regulation (GDPR). You can find more information in our privacy policy.',
            'Retention obligations: For legal reasons (e.g., tax law), some data may be archived for a limited period.',
            'Outstanding bookings: Ensure that all pending exams or payments are completed. Outstanding contracts or payment obligations remain in effect even after deletion.',
            'Student information for driving schools: Inform your students in a timely manner if you are leaving the platform to avoid misunderstandings.'
          ]
        },

        {
          type: 'heading' as const,
          content: "What doesn't happen?"
        },
        {
          type: 'paragraph' as const,
          content: [
            'For driving students: Your data will not be deleted by the driving schools themselves. Please contact the respective driving school directly if you wish to delete your data there as well.',
            'External services: If you have logged in with external accounts (e.g., Google, Facebook), you must disconnect them separately.'
          ]
        },
        {
          type: 'heading' as const,
          content: 'Exporting Data'
        },
        {
          type: 'paragraph' as const,
          content:
            'You can export certain types of data depending on your user role.'
        },
        {
          type: 'paragraph' as const,
          content: 'Export is available for:'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'students: personal data, progress, appointments, messages',
            'schools: student lists, trainer lists, appointments, messages, invoices',
            'trainers: assigned student lists, appointments, messages'
          ]
        },
        {
          type: 'heading' as const,
          content: 'How to export your data'
        },
        {
          type: 'heading' as const,
          content: '1. Open Settings'
        },
        {
          type: 'heading' as const,
          content: '2. Go to "Privacy" section'
        },
        {
          type: 'paragraph' as const,
          content: 'Click on "Export data" and confirm your decision.'
        }
      ],
      image: image
    },

    {
      title: 'What can you do with your data',
      content: [
        {
          type: 'heading' as const,
          content: '3. Download the file'
        },
        {
          type: 'paragraph' as const,
          content:
            'You will receive an email with a secure download link. The link is valid for 7 days. Download the data within this period.'
        },
        {
          type: 'heading' as const,
          content: 'What can you do with your data?'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'You can save your data locally to use it later if you switch accounts or as a backup.',
            'If you switch to another platform, you may be able to import your data there.',
            'You can check what information we have stored about you.'
          ]
        },
        {
          type: 'paragraph' as const,
          content:
            'Attention: This data is for your internal use only. Disclosure to third parties is subject to data protection regulations.'
        },
        {
          type: 'heading' as const,
          content: 'Legal notice'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'Data export is carried out in accordance with Article 15 of the GDPR. You have the right to request one free export per month.',
            'Your data is transmitted in encrypted form and is only accessible to you.',
            'For technical or legal reasons, certain data (e.g., log data) cannot be exported.'
          ]
        }
      ],
      image: ''
    }
  ];

  return (
    <>
      <Box sx={{background: '#fafafa'}}>
        <Box
          sx={{
            position: 'fixed',
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            top: 0,
            zIndex: 1000
          }}
        >
          <Navbar />
        </Box>
        <Box sx={{paddingTop: '80px'}}>
          <GettingStarted
            headerTitle="Data Policies"
            data={gettingStartedData}
          />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
