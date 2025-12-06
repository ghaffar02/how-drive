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
      title: 'Overview',
      content: [
        
        {
          type: 'heading' as const,
          content: 'Overview'
        },
        {
          type: 'paragraph' as const,
          content:
            'If you cannot log in, the issue is usually related to your password, email verification, browser settings, or school-created account status.'
        },
        {
          type: 'heading' as const,
          content: '1. Check your email and password'
        },

        {
          type: 'unorderedList' as const,
          content: [
            'Make sure your email is correct',
            'Check for spelling mistakes',
            'Passwords are case-sensitive'
          ]
        }
      ],
      image: image
    },

    {
      title: 'Reset your password',
      content: [
        {
          type: 'heading' as const,
          content: '2. Reset your password'
        },
        {
          type: 'orderedList' as const,
          content: [
            'Click Forgot password?',
            'Enter your email',
            'Use the link you receive to create a new password'
          ]
        }
      ],
      image: image
    },
    {
      title: 'Confirm your email',
      content: [
        {
          type: 'heading' as const,
          content: '3. Confirm your email'
        },
        {
          type: 'paragraph' as const,
          content: 'If your email is not verified, you cannot log in.'
        },
        {
          type: 'paragraph' as const,
          content: 'Check your inbox for the confirmation message.'
        },
        {
          type: 'heading' as const,
          content: '4. Check browser or device issues'
        },
        {
          type: 'paragraph' as const,
          content: 'Try:'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'refreshing the page',
            'using another browser',
            'disabling browser extensions',
            'clearing cookies'
          ]
        },
        {
          type: 'heading' as const,
          content: '5. Trainer accounts: ask your school'
        },
        {
          type: 'paragraph' as const,
          content: 'trainers cannot create or activate their own accounts.'
        },
        {
          type: 'paragraph' as const,
          content:
            'If you are a trainer and cannot log in, the school must verify:'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'that your account was created',
            'that your email is correct',
            'that your account is active'
          ]
        },
        {
          type: 'heading' as const,
          content: '6. Contact support'
        },
        {
          type: 'paragraph' as const,
          content: 'If everything fails, contact support with:'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'your email',
            'your role (student, school, trainer)',
            'screenshot of the error'
          ]
        },
        {
          type: 'heading' as const,
          content: ''
        },
        {
          type: 'heading' as const,
          content: ''
        },
        {
          type: 'heading' as const,
          content: 'Booking Errors'
        },
        {
          type: 'paragraph' as const,
          content:
            "If you can't book an appointment, it is usually due to availability, missing school approval, or browser issues."
        },
        {
          type: 'heading' as const,
          content: '1. Check if your school has approved you'
        },
        {
          type: 'paragraph' as const,
          content:
            'Driving schools must first approve the student before booking is possible. After confirmation, students receive a confirmation email.'
        },
        {
          type: 'heading' as const,
          content: '2. No availability'
        },
        {
          type: 'paragraph' as const,
          content: 'If no times appear:'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'the trainer may not have set their schedule',
            'the school may be closed on that day',
            'slots may already be fully booked (shown as a grey time slot)'
          ]
        }
      ],
      image: image
    },
    {
      title: 'Booking conflicts',
      content: [
        {
          type: 'heading' as const,
          content: '3. Booking conflicts'
        },
        {
          type: 'paragraph' as const,
          content:
            'If you already have an appointment at the same time, you cannot book another.'
        },
        {
          type: 'heading' as const,
          content: '4. Connection or browser issues'
        },
        {
          type: 'paragraph' as const,
          content: 'Try:'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'refreshing',
            'switching to another browser',
            'clearing cache'
          ]
        },
        {
          type: 'heading' as const,
          content: '5. School has not offered appointments'
        },
        {
          type: 'paragraph' as const,
          content:
            'If a school does not offer theory or driving sessions on the platform, those options will not appear.'
        },
        {
          type: 'heading' as const,
          content: '6. Contact your school'
        },
        {
          type: 'paragraph' as const,
          content: 'They can check:'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'your assigned trainer',
            'availability settings',
            'booking restrictions'
          ]
        },
        {
          type: 'heading' as const,
          content: ''
        },
        {
          type: 'heading' as const,
          content: ''
        },
        {
          type: 'heading' as const,
          content: 'Payment Issues'
        },
        {
          type: 'paragraph' as const,
          content: 'Payment applies only to schools, not students.'
        },
        {
          type: 'paragraph' as const,
          content:
            'If your payments fail or invoices are missing, the cause is usually card issues or expired subscription details.'
        },
        {
          type: 'heading' as const,
          content: '1. Check your payment method'
        },
        {
          type: 'paragraph' as const,
          content: 'Go to Billing → Payment Methods.'
        },
        {
          type: 'paragraph' as const,
          content: 'Check your payment methods and their validity.'
        },
        {
          type: 'heading' as const,
          content: '2. Payment declined'
        },
        {
          type: 'paragraph' as const,
          content: 'Common reasons:'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'bank declined the transaction',
            'credit limit reached',
            'card blocked'
          ]
        },
        {
          type: 'heading' as const,
          content: '3. Invoice not generated'
        },
        {
          type: 'paragraph' as const,
          content: 'Invoices are generated monthly.'
        },
        {
          type: 'paragraph' as const,
          content: 'If it is too early in the cycle, it may not appear yet.'
        },
        {
          type: 'heading' as const,
          content: '4. Subscription not active'
        },
        {
          type: 'paragraph' as const,
          content:
            'If your payment failed multiple times, your subscription may be paused.'
        },
        {
          type: 'paragraph' as const,
          content: 'Update your payment method and retry.'
        },
        {
          type: 'heading' as const,
          content: '5. Contact support'
        },
        {
          type: 'paragraph' as const,
          content: 'Send:'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'your school name',
            'invoice number (if available)',
            'screenshots of the error'
          ]
        },
        {
          type: 'heading' as const,
          content: ''
        },
        {
          type: 'heading' as const,
          content: ''
        },
        {
          type: 'heading' as const,
          content: 'Mobile Issues'
        },
        {
          type: 'paragraph' as const,
          content:
            'If the platform does not work properly on your phone, try the steps below.'
        },
        {
          type: 'heading' as const,
          content: '1. Update your browser'
        },
        {
          type: 'paragraph' as const,
          content: 'Supported browsers:'
        },
        {
          type: 'unorderedList' as const,
          content: ['Chrome', 'Safari', 'Firefox']
        },
        {
          type: 'paragraph' as const,
          content: 'Older versions may cause errors.'
        },
        {
          type: 'heading' as const,
          content: '2. Clear mobile browser cache'
        },
        {
          type: 'paragraph' as const,
          content: 'This fixes most loading issues.'
        },
        {
          type: 'heading' as const,
          content: '3. Enable cookies & JavaScript'
        },
        {
          type: 'paragraph' as const,
          content: 'The platform requires both to function properly.'
        },
        {
          type: 'heading' as const,
          content: '4. Check internet connection'
        },
        {
          type: 'paragraph' as const,
          content:
            'Slow networks may cause appointments or messages not to load.'
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
            headerTitle="Troubleshooting"
            data={gettingStartedData}
          />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
