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
      title: 'Driving School Profile',
      content: [
        {
          type: 'heading' as const,
          content: '3.1 Driving School Profile'
        },
        {
          type: 'heading' as const,
          content: 'Overview'
        },
        {
          type: 'paragraph' as const,
          content:
            'In the school settings, you can edit your school profile, upload your logo, and set your opening hours.'
        },
        {
          type: 'heading' as const,
          content: 'How to edit school profile'
        },
        {
          type: 'heading' as const,
          content: '1. Go to Settings'
        },
        {
          type: 'paragraph' as const,
          content: 'Navigate to Business profile in the settings area.'
        },
        {
          type: 'heading' as const,
          content: '2. Update your school profile'
        },
        {
          type: 'paragraph' as const,
          content: 'You can edit:'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'school name',
            'address',
            'contact information',
            'languages',
            'driving license classes',
            'description'
          ]
        }
      ],
      image: image
    },
    {
      title: 'School profile form',
      content: [
        {
          type: 'heading' as const,
          content: '3. Upload your logo'
        },
        {
          type: 'paragraph' as const,
          content: 'Click Upload Logo and select an image from your device.'
        },
        {
          type: 'heading' as const,
          content: '4. Set opening hours'
        },
        {
          type: 'paragraph' as const,
          content: 'Choose the days and times your school is open.'
        },
        {
          type: 'heading' as const,
          content: '5. Save changes'
        },
        {
          type: 'paragraph' as const,
          content: 'Click Save to apply updates.'
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
          content: 'Dashboard Walkthrough'
        },
        {
          type: 'paragraph' as const,
          content:
            'The school dashboard is your central hub for managing students, trainers, schedules, messages, and billing. This guide shows you how each part of the dashboard works.'
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
          content: ['home', 'students', 'calendar', 'message', 'trainers']
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
            'profile of trainers',
            'upcoming appointments',
            'messages'
          ]
        }
      ],
      image: image
    },
    {
      title: 'Top navigation bar',
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
            'track their progress',
            'manage their appointments'
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
            'Shows all messages including unread ones from your school or trainers.'
        },
        {
          type: 'heading' as const,
          content: '6. Managing trainers'
        },
        {
          type: 'paragraph' as const,
          content: 'You can quickly:'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'add a new trainer',
            'view and edit their profile',
            'track their appointments'
          ]
        },
        {
          type: 'heading' as const,
          content: 'Managing Students'
        },
        {
          type: 'paragraph' as const,
          content:
            'Schools can manage the full lifecycle of each student: accepting new requests, inviting new students, editing profiles, tracking progress, and archiving completed students.'
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
          content: 'Adding or accepting students'
        },
        {
          type: 'paragraph' as const,
          content: 'A. accept a new student request'
        },
        {
          type: 'orderedList' as const,
          content: [
            'new requests are highlighted with different colors in the student list',
            'click on each of the new requests',
            'click on Confirm in the shown popup to accept the student',
            'or click on Reject to reject and remove the request'
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
          content: 'B. invite a new student'
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
          content: 'The invitation needs to be confirmed by the student.'
        }
      ],
      image: image
    },
    {
      title: 'Accept request',
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
        }
      ],
      image: image
    },
    {
      title: 'Student invitation form',
      content: [
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
            'completed steps for getting driving license',
            'completed theory hours',
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
          content: ''
        },
        {
          type: 'heading' as const,
          content: ''
        },
        {
          type: 'heading' as const,
          content: 'Managing Trainers'
        },
        {
          type: 'paragraph' as const,
          content:
            'Schools manage all trainers. Trainers do not sign up themselves. You can add new trainers, archive them, and assign them to students (available for Standard and Premium pricing plans).'
        },
        {
          type: 'heading' as const,
          content: 'Adding a trainer'
        },
        {
          type: 'heading' as const,
          content: '1. Open the Trainers section'
        },
        {
          type: 'heading' as const,
          content: '2. Click the "Plus" icon at the top of the trainers list'
        },
        {
          type: 'paragraph' as const,
          content: 'Enter:'
        },
        {
          type: 'unorderedList' as const,
          content: [
            'name',
            'email',
            'phone',
            'driving license classes',
            "password (will be used for trainer's dashboard)"
          ]
        }
      ],
      image: image
    },

    {
      title: 'Add trainer form',
      content: [
        {
          type: 'heading' as const,
          content: 'Assigning students to trainers'
        },
        {
          type: 'orderedList' as const,
          content: [
            'Open the trainer profile',
            'Click on the plus icon at the right corner of students list',
            'Search for the name of a student from your students list',
            'Select the desired student'
          ]
        },
        {
          type: 'heading' as const,
          content: 'Archiving a trainer'
        },
        {
          type: 'orderedList' as const,
          content: [
            'open the trainer profile',
            'click on the toggle at the top-right corner'
          ]
        }
      ],
      image: image
    },
    {
      title: 'Archive trainer',
      content: [
        {
          type: 'heading' as const,
          content: 'Scheduling Appointments'
        },
        {
          type: 'paragraph' as const,
          content:
            'Schools can manage availability, school-wide schedules, and trainer-specific calendars.'
        },
        {
          type: 'heading' as const,
          content: 'Setting availability'
        },
        {
          type: 'orderedList' as const,
          content: [
            'Go to Calendar section',            
            {
              text: 'Choose the type of scheduling',
              type: 'dotList' as const,
              subItems: [
                'Talk (for general meetings, shown with purple in calendar)',
                'Theory (for theory lessons, shown with blue in calendar)',
                'Driving (for driving lessons, shown with cyan in calendar)'
              ]
            },

            'Select "Category", "Group", or "Trainer" for each of the scheduling types',
            {
              text: 'Select:',
              type: 'dottedList' as const,
              subItems: [
                'capacity (The capacity of more than one person is only available for Theory sessions.)',
                'duration',
                'days of the week and time slots',
                'time of booking',
                'cancelation limit'
              ]
            }


          ] as (string | NestedListItem)[]
        },
        // {
        //   type: 'paragraph' as const,
        //   content: ' 4 .Select:'
        // },
        // {
        //   type: 'unorderedList' as const,
        //   content: [
        //     'capacity (The capacity of more than one person is only available for Theory sessions.)',
        //     'duration',
        //     'days of the week and time slots',
        //     'time of booking',
        //     'cancelation limit'
        //   ]
        // }
      ],
      image: image
    },
    {
      title: 'Availability editor',
      content: [
        {
          type: 'heading' as const,
          content: 'Managing school-wide appointments'
        },
        {
          type: 'paragraph' as const,
          content:
            'You can view and edit all the appointments booked for your driving school. Click on each day of the calendar to view the list of booked appointments on that specific day. Click on each appointment to be able to edit the day or time of the appointment (available for the Premium pricing plan).'
        }
      ],
      image: image
    },
    {
      title: 'School calendar',
      content: [
        {
          type: 'heading' as const,
          content: 'How to cancel an appointment'
        },
        {
          type: 'orderedList' as const,
          content: [
            'Click on each appointment',
            'Remove the name of the student from the list of participants',
            'Click Save'
          ]
        },
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
          content: '1. Click on the Plus icon at the top-right of the calendar'
        },
        {
          type: 'heading' as const,
          content:
            '2. Search for the name of the student and select the student'
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
            'Talk (for general meetings, shown with purple in calendar)',
            'Theory (for theory lessons, shown with blue in calendar)',
            'Driving (for driving lessons, shown with cyan in calendar)'
          ]
        },
        {
          type: 'heading' as const,
          content: '4. Select the appropriate category, group, or trainer'
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
        }
      ],
      image: image
    },
    {
      title: 'Send Messages',
      content: [
        {
          type: 'heading' as const,
          content: '5. Choose a date and time'
        },
        {
          type: 'paragraph' as const,
          content: 'You will see all available slots.'
        },
        {
          type: 'heading' as const,
          content: '6. Confirm your booking'
        },
        {
          type: 'paragraph' as const,
          content: 'Click Book.'
        },
        {
          type: 'heading' as const,
          content: 'Send Messages'
        },
        {
          type: 'heading' as const,
          content: 'Overview'
        },
        {
          type: 'paragraph' as const,
          content:
            'The messaging system allows you to communicate directly with your students and trainers. Please note that the system is not a live chat.'
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
        },
        {
          type: 'paragraph' as const,
          content: ''
        },
        {
          type: 'paragraph' as const,
          content: ''
        },
        {
          type: 'heading' as const,
          content: 'Billing & Subscriptions'
        },
        {
          type: 'paragraph' as const,
          content:
            'Schools can view invoices, manage payment methods, and upgrade their subscription plan.'
        },
        {
          type: 'heading' as const,
          content: 'How to access billing'
        },
        {
          type: 'paragraph' as const,
          content: 'Go to Payment in settings'
        },
        {
          type: 'heading' as const,
          content: 'Viewing invoices'
        },
        {
          type: 'paragraph' as const,
          content: 'You can view all invoices and download them if needed.'
        },
        {
          type: 'heading' as const,
          content: 'Managing payment methods'
        },
        {
          type: 'orderedList' as const,
          content: [
            'Open Payment Methods',
            'Update or change your payment methods'
          ]
        }
      ],
      image: image
    },
    {
      title: 'Billing & Subscriptions',
      content: [
        {
          type: 'heading' as const,
          content: 'Upgrading your plan'
        },
        {
          type: 'paragraph' as const,
          content: 'Click on each Price Plan to change your current plan.'
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
          <GettingStarted headerTitle="For Schools" data={gettingStartedData} />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
