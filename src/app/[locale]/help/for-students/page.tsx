'use client';
import {Box} from '@mui/material';
import image from '@/assets/pngs/ImageBGridInfo.jpg';
import {StaticImageData} from 'next/image';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import GettingStarted from '@/components/help/GettingStarted';

type ContentBlock = {
  type: 'heading' | 'paragraph' | 'orderedList' | 'unorderedList';
  content: string | string[];
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
            'You can use the platform to easily search for driving schools, compare them, and choose the one you want to learn with.'
        },
        {
          type: 'heading' as const,
          content: 'How to find a driving school'
        },
        {
          type: 'heading' as const,
          content: '1. Go to the "Find a driving school" page'
        },
        {
          type: 'paragraph' as const,
          content: 'You can access it directly from the navbar.'
        },
        {
          type: 'heading' as const,
          content: '2. Use the search bar'
        },
        {
          type: 'paragraph' as const,
          content: 'Enter your city or a school name.'
        }
      ],
      image: image
    },

    {
      title: 'Search bar',
      content: [
        {
          type: 'heading' as const,
          content: '3. View school details'
        },
        {
          type: 'paragraph' as const,
          content: 'Click on any school to see:'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'profile information',
            'opening hours',
            'supported driving classes',
            'spoken languages',
            'contact information'
          ]
        }
      ],
      image: image
    },
    {
      title: 'School profile page',
      content: [
        {
          type: 'heading' as const,
          content: '4. Select your school'
        },
        {
          type: 'paragraph' as const,
          content: 'Click Connect to connect with the school. '
        },
        {
          type: 'paragraph' as const,
          content: ' Your request should be first approved by the school.'
        },
        {
          type: 'heading' as const,
          content: 'Dashboard Walkthrough'
        },
        {
          type: 'paragraph' as const,
          content:
            'Your dashboard is your main control center. Here you can view your progress, upcoming appointments, messages, and school information.'
        },
        {
          type: 'heading' as const,
          content: 'Dashboard sections'
        },
        {
          type: 'heading' as const,
          content: '1. Sidebar'
        },
        {
          type: 'paragraph' as const,
          content: 'Shows access to:'
        },
        {
          type: 'unorderedList' as const,
          content: ['home', 'process', 'calendar', 'message']
        }
      ],
      image: image
    },

    {
      title: 'Top navigation',
      content: [
        {
          type: 'heading' as const,
          content: '2. Home widgets'
        },
        {
          type: 'paragraph' as const,
          content:
            'A quick overview of where you are in the driving license process, completed theory and driving sessions, alongside your appointments and messages.'
        }
      ],
      image: image
    },
    {
      title: 'Progress widget',
      content: [
        {
          type: 'heading' as const,
          content: '3. Progress tracking'
        },
        {
          type: 'paragraph' as const,
          content: 'Displays:'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'all the steps of getting the driving license with detailed information',
            'your driving license class and place of residence',
            'information about responsible authorities and your selected school'
          ]
        }
      ],
      image: image
    },
    {
      title: 'School info card',
      content: [
        {
          type: 'heading' as const,
          content: '4. Upcoming appointments'
        },
        {
          type: 'paragraph' as const,
          content: 'All scheduled appointments appear here:'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'General appointments',
            'Theory lessons',
            'Driving lessons',
            'Exam appointments'
          ]
        }
      ],
      image: image
    },
    {
      title: 'Upcoming appointments',
      content: [
        {
          type: 'heading' as const,
          content: '5. Messages'
        },
        {
          type: 'paragraph' as const,
          content:
            'Shows all messages including unread ones from your school or trainers.'
        }
      ],
      image: image
    },
    {
      title: 'Messages preview',
      content: [
        {
          type: 'heading' as const,
          content: 'Booking Appointments'
        },
        {
          type: 'paragraph' as const,
          content:
            'You can book appointments for general meetings, theory lessons, and driving lessons directly in your dashboard.'
        },
        {
          type: 'heading' as const,
          content: 'How to book a lesson'
        },
        {
          type: 'heading' as const,
          content: '1. Open the Calendar tab and click on Plus icon'
        },
        {
          type: 'heading' as const,
          content: '2. Choose the type of appointment'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'Talk (for general meetings, shown with purple in calendar)',
            'Theory (for theory lessons, shown with blue in calendar)',
            'Driving (for driving lessons, shown with cyan in calendar)'
          ]
        }
      ],
      image: image
    },
    {
      title: 'Appointment type selection',
      content: [
        {
          type: 'heading' as const,
          content: '3. Select the appropriate category, group, or trainer'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'Category (for general meetings)',
            'Group (for theory lessons)',
            'Trainer (for driving lessons)'
          ]
        },
        {
          type: 'paragraph' as const,
          content:
            'Only available time slots will be shown after choosing one of these.'
        },
        {
          type: 'heading' as const,
          content: '4. Choose a date and time'
        },
        {
          type: 'paragraph' as const,
          content: 'You will see all available slots.'
        }
      ],
      image: image
    },
    {
      title: 'Calendar selection',
      content: [
        {
          type: 'heading' as const,
          content: '5. Confirm your booking'
        },
        {
          type: 'paragraph' as const,
          content: 'Click Book.'
        },
        {
          type: 'heading' as const,
          content: 'How to cancel an appointment'
        },
        {
          type: 'paragraph' as const,
          content: 'Click on the appointment on the left or in the calendar'
        },
        {
          type: 'paragraph' as const,
          content: 'Remove your name from the list of participants'
        },
        {
          type: 'paragraph' as const,
          content: 'Click Save'
        }
      ],
      image: image
    },
    {
      title: 'Cancel button',
      content: [
        {
          type: 'heading' as const,
          content: 'Send Messages'
        },
        {
          type: 'paragraph' as const,
          content:
            'The messaging system allows you to communicate directly with your school and trainer. Please note that the system is not a live chat.'
        },
        {
          type: 'heading' as const,
          content: 'How to send a message'
        },
        {
          type: 'heading' as const,
          content: '1. Go to the Messages tab'
        },
        {
          type: 'heading' as const,
          content: '2. Choose the conversation or click on Plus icon'
        },
        {
          type: 'paragraph' as const,
          content: 'When clicking on Plus icon:'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'Select to whom you want to send the message',
            'Add the topic of the message',
            'Write your message',
            'Add a file if you want'
          ]
        }
      ],
      image: image
    },
    {
      title: 'Conversation list',
      content: [
        {
          type: 'heading' as const,
          content: '3. Type your message'
        },
        {
          type: 'paragraph' as const,
          content: 'Use the input field at the bottom.'
        },
        {
          type: 'heading' as const,
          content: '4. Send your message'
        },
        {
          type: 'paragraph' as const,
          content: 'Click Send.'
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
            headerTitle="Getting Started"
            data={gettingStartedData}
          />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
