'use client';
import {Box} from '@mui/material';
import image from '@/assets/pngs/ImageBGridInfo.jpg';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import GettingStarted from '@/components/help/GettingStarted';

export default function Page() {
  // Data array for Getting Started sections
  const gettingStartedData = [
    {
      title: 'Overview',
      content: [
        {
          type: 'heading' as const,
          content: 'Overview'
        },
        {
          type: 'paragraph' as const,
          content:
            'Our platform connects driving students with driving schools and trainers. Students can find a school, track their progress, book appointments, and communicate directly with their school or trainer.Driving schools can manage students, trainers, appointments, communication, and billing, all in one place.Trainers receive access to a dedicated dashboard created for them by their school.'
        },

        {
          type: 'heading' as const,
          content: 'How the platform works'
        },
        {
          type: 'heading' as const,
          content: 'For students'
        },
        {
          type: 'orderedList' as const,
          content: [
            'Find your driving school',
            'Create an account',
            'Track your progress toward the German driving license step by step',
            'Book appointments for theory lessons, driving lessons, or general questions',
            'Message your school or trainer'
          ]
        }
      ],
      image: image
    },

    {
      content: [
        {
          type: 'heading' as const,
          content: 'For schools'
        },
        {
          type: 'orderedList' as const,
          content: [
            'Manage student profiles and progression',
            'Add trainers — trainers do not create their own accounts',
            'Plan schedules and availability, have all the booked appointments in view',
            'Communicate with students and trainers',
            'Manage subscription and invoices'
          ]
        }
      ],
      image: image
    },
    {
      content: [
        {
          type: 'heading' as const,
          content: 'For trainers'
        },
        {
          type: 'orderedList' as const,
          content: [
            'Log in using the account created by the school',
            'See your assigned students or add them',
            'Track student progress',
            'Plan your availability, have all the booked appointments in view',
            'Message students and your school'
          ]
        }
      ],
      image: image
    },
    {
      title: 'Steps to create an account (Students & Schools)',
      content: [
        {
          type: 'heading' as const,
          content: 'Who can create an account?'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'Students → yes',
            'Schools → yes',
            'Trainers → no, accounts are created by schools'
          ]
        },
        {
          type: 'heading' as const,
          content: 'Steps to create an account (Students & Schools)'
        },
        {
          type: 'heading' as const,
          content: '1. Go to the signup page'
        },
        {
          type: 'heading' as const,
          content: '2. Choose your role'
        },
        {
          type: 'unorderedList' as const,
          content: ['student account', 'school account']
        },
        {
          type: 'heading' as const,
          content: '3. Fill in your details'
        },
        {
          type: 'unorderedList' as const,
          content: ['name', 'email', 'password']
        }
      ],
      image: image
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
          <GettingStarted headerTitle='Getting Started' data={gettingStartedData} />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
