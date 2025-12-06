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
          type: 'paragraph' as const,
          content: 'trainers do not create their own accounts.'
        },
        {
          type: 'paragraph' as const,
          content:
            ' Your driving school creates an account for you and assigns you to students.'
        },
        {
          type: 'heading' as const,
          content: 'Overview'
        },
        {
          type: 'paragraph' as const,
          content:
            'Your trainer dashboard gives you access to your students, appointments, availability, and messaging.'
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
          content: ['home', 'students', 'calendar', 'message']
        }
      ],
      image: image
    },
    {
      title: 'Top navigation bar',
      content: [
        {
          type: 'heading' as const,
          content: '2. Home widgets'
        },
        {
          type: 'paragraph' as const,
          content: 'The homepage shows key information:'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'number of active and inactive students',
            'profile of students',
            'upcoming appointments',
            'messages'
          ]
        }
      ],
      image: image
    },
    {
      title: 'Overview widgets',
      content: [
        {
          type: 'heading' as const,
          content: '3. Managing students'
        },
        {
          type: 'paragraph' as const,
          content: 'You can quickly:'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'add or accept a new student',
            'view and edit their profile',
            'track their progress'
          ]
        },
        {
          type: 'heading' as const,
          content: '4. Calendar preview'
        },
        {
          type: 'paragraph' as const,
          content: 'You can see appointments and set availability here.'
        },
        {
          type: 'heading' as const,
          content: '5. Messages'
        },
        {
          type: 'paragraph' as const,
          content:
            'Shows all messages including unread ones from your school or students.'
        },
        {
          type: 'heading' as const,
          content: 'Managing Students'
        },
        {
          type: 'paragraph' as const,
          content:
            'Trainers can view the full lifecycle of each student and take some changes: inviting new students, editing profiles, tracking progress, and archiving completed students.'
        },
        {
          type: 'heading' as const,
          content: 'How to manage students'
        },
        {
          type: 'heading' as const,
          content: '1. Open the Students section'
        },
        {
          type: 'heading' as const,
          content: 'Inviting students'
        },
        {
          type: 'orderedList' as const,
          content: [
            'click on Plus icon above the student list',
            'enter the email address of the student',
            'click Send Invitation'
          ]
        },
        {
          type: 'paragraph' as const,
          content:
            'The invitation needs to be confirmed by the student. After confirmation, the student will be first appeared in the list of your driving school.'
        }
      ],
      image: image
    },
    {
      title: 'Student invitation form',
      content: [
        {
          type: 'heading' as const,
          content: 'Viewing student profiles'
        },
        {
          type: 'paragraph' as const,
          content: 'You can view:'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'personal information',
            'progress status',
            'upcoming appointments',
            'messages',
            'completed theory and driving sessions'
          ]
        },
        {
          type: 'heading' as const,
          content: 'Tracking progress'
        },
        {
          type: 'paragraph' as const,
          content: 'Schools can update steps such as:'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'some steps for getting driving license',
            'completed driving hours'
          ]
        },
        {
          type: 'heading' as const,
          content: 'Archiving students'
        },
        {
          type: 'paragraph' as const,
          content:
            'Use archiving when a student gets his/her driving license or leaves the school.'
        },
        {
          type: 'orderedList' as const,
          content: [
            'open the student profile',
            'click on the toggle at the top-right corner'
          ]
        },

        {
          type: 'heading' as const,
          content: 'Scheduling Appointments'
        },
        {
          type: 'paragraph' as const,
          content:
            'Trainers can manage their personal availability and view all appointments assigned to them.'
        },
        {
          type: 'heading' as const,
          content: 'Setting your availability'
        },
        {
          type: 'orderedList' as const,
          content: [
            'Go to Calendar section',
            'Begin with the left side',
            {
              text: 'Select:',
              type: 'dottedList' as const,
              subItems: [
                'duration',
                'days of the week and time slots',
                'time of booking',
                'cancelation limit'
              ]
            }
          ] as (string | NestedListItem)[]
        }
      ],
      image: image
    },

    {
      title: 'School calendar',
      content: [
        {
          type: 'heading' as const,
          content: 'View appointments'
        },
        {
          type: 'paragraph' as const,
          content:
            'You can view all the appointments booked for you and edit your own driving sessions. Click on each day of the calendar to view the list of booked appointments on that specific day. Click on your driving-session-appointments to be able to edit the day or time of the appointment (available for the Premium pricing plan).'
        }
      ],
      image: image
    },

    {
      title: 'Cancel button',
      content: [
        {
          type: 'heading' as const,
          content: 'How to cancel a driving session'
        },
        {
          type: 'orderedList' as const,
          content: [
            'Click on each appointment',
            'Remove the name of the student from the list of participants',
            'Click Save'
          ]
        }
      ],
      image: image
    },
    {
      title: 'Cancel button',
      content: [
        {
          type: 'heading' as const,
          content: 'Book an appointment for a student'
        },
        {
          type: 'paragraph' as const,
          content:
            'Once availability has been determined, your students can book appointments with your driving school. You also have the option of booking appointments for your students yourself.'
        },
        {
          type: 'heading' as const,
          content: 'How to book an appointment'
        },
        {
          type: 'heading' as const,
          content:
            '1. Search for the name of the student in the student list and select the student'
        },
        {
          type: 'heading' as const,
          content:
            '2. Click on the Plus icon at the top-right of the appointments section'
        }
      ],
      image: image
    },
    {
      title: 'Teacher selection',
      content: [
        {
          type: 'heading' as const,
          content: '3. Choose the type of appointment'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'Driving (for driving lessons, shown with cyan in calendar)',
            'Exam (for practical exam, shown with red in calendar)'
          ]
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
      title: 'Send Messages',
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
          content: 'Messaging'
        },
        {
          type: 'paragraph' as const,
          content:
            'The messaging system allows you to communicate directly with your students and driving school. Please note that the system is not a live chat.'
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
        },
        {
          type: 'paragraph' as const,
          content: 'Notifications will appear in your dashboard.'
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
            headerTitle="For Trainers"
            data={gettingStartedData}
          />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
