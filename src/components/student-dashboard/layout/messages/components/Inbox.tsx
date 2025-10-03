import localFont from '@/utils/themes';
import {Box, TextField, Typography} from '@mui/material';
import Image from 'next/image';
import React from 'react';

import car from '@/assets/svgs/dashboard-student/car.svg';
import printIcon from '@/assets/svgs/dashboard-student/printIcon.svg';
import deleteIcon from '@/assets/svgs/dashboard-student/deleteIcon.svg';
import sendIcon from '@/assets/svgs/dashboard-student/sendIcon.svg';
import attachIcon from '@/assets/svgs/dashboard-student/attachIcon.svg';

const messages = [
  'Every challenge you face is an opportunity to grow stronger and smarter than before.',
  'Success does not come overnight; it comes with consistent effort and patience every single day.',
  'No matter how small the step, moving forward will always bring you closer to your goals. Every challenge you face is an opportunity to grow stronger and smarter than before.',
  'Sometimes, the most important thing you can do is simply believe in yourself when no one else does.',
  'Happiness doesn’t come from what you have, but from how you choose to see the world around you.',
  'Failure is not the opposite of success; it’s a part of the journey that teaches you valuable lessons. Every challenge you face is an opportunity to grow stronger and smarter than before.',
  'Your mindset determines your reality, so choose positivity even when the road feels difficult.',
  'Learning a skill takes time, but each mistake you make is a step closer to mastery.',
  'When things feel overwhelming, pause, take a deep breath, and remind yourself of how far you’ve already come. Every challenge you face is an opportunity to grow stronger and smarter than before.',
  'Discipline will take you further than motivation ever can, because it stays when motivation fades.',
  'Opportunities rarely come announced; prepare yourself so you’re ready when they do.',
  'Growth happens outside of your comfort zone, so don’t be afraid to take risks and try new things. Every challenge you face is an opportunity to grow stronger and smarter than before.',
  'Every person you meet knows something you don’t — be curious, listen, and learn from them.',
  'The best investment you can ever make is in yourself — your skills, your health, and your mindset.',
  'You’ll never always be motivated, but you can train yourself to always stay consistent.',
  'Even the longest journey begins with a single step — so take yours today without fear.',
  'Hard work beats talent when talent doesn’t work hard, so never underestimate persistence.',
  'Time is the most valuable resource you have, so spend it wisely on what truly matters.',
  'Gratitude turns what you already have into enough, making life more fulfilling and joyful.',
  'Small habits practiced daily create big results over time — start with just one change today.'
];

export default function Inbox() {
  return (
    <Box
      sx={{
        width: '100%',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        background: 'rgba(248,250,252,0.3)',
        border: '1px solid #fff',
        borderRadius: '0px 24px 24px 0px'
      }}
    >
      <Box
        sx={{
          width: '100%',
          padding: '24px',
          border: '1px solid #fff',
          borderRadius: '18px',
          background: '#FAF8FE',
          display: 'flex',
          gap: '16px'
        }}
      >
        <Box
          sx={{
            width: '52px',
            height: '52px',
            background: 'rgba(70,17,245,0.1)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Image src={car} alt="car" height={24} width={24} />
        </Box>
        <Box>
          <Typography
            sx={{
              ...localFont.inter18,
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: '500',
              lineHeight: '1.4em'
            }}
          >
            Fahrschule Mundsburg
          </Typography>
          <Typography
            sx={{
              ...localFont.inter14,
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: '400',
              lineHeight: '1.6em'
            }}
          >
            Termin deiner Theorieprüfung
          </Typography>
        </Box>
        {/* Delete and Print Icon */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            marginLeft: 'auto'
          }}
        >
          <Box sx={{height: '20px', width: '20px'}}>
            <Image
              src={deleteIcon}
              alt="delete"
              style={{height: '100%', width: '100%'}}
            />
          </Box>
          <Box sx={{height: '20px', width: '20px'}}>
            <Image
              src={printIcon}
              alt="print"
              style={{height: '100%', width: '100%'}}
            />
          </Box>
        </Box>
      </Box>
      {/* Message Box */}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          background: '#ffffffbf',
          padding: '24px',
          borderRadius: '18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          overflow: 'auto'
        }}
      >
        {messages.map((data, i) => (
          <Box
            key={i}
            sx={{display: 'flex', flexDirection: 'column', gap: '6px'}}
          >
            <Typography
              sx={{
                ...localFont.inter14,
                fontWeight: '300',
                fontFamily: '"Inter", sans-serif !important'
              }}
            >
              26. Mai, 9:50 Uhr
            </Typography>
            <Box
              sx={{
                maxWidth: '80%',
                width: '100%',
                padding: '12px',
                background: 'rgba(191,202,255,1)',
                borderRadius: '18px 2px 18px 18px'
              }}
            >
              <Typography
                sx={{
                  ...localFont.inter14,
                  fontWeight: '400',
                  fontFamily: '"Inter", sans-serif !important'
                }}
              >
                {data}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      {/* Typing Box */}
      <Box sx={{width: '100%', height: '48px', display: 'flex', gap: '10px'}}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            padding: '8px 16px',
            borderRadius: '18px',
            background: '#ffffffbf'
          }}
        >
          <TextField
            placeholder="Nachricht"
            variant="outlined"
            sx={{
              flex: 1,
              '& .MuiOutlinedInput-root': {
                borderRadius: 0,
                '& fieldset': {border: 'none'}, // remove border
                '&:hover fieldset': {border: 'none'}, // remove on hover
                '&.Mui-focused fieldset': {border: 'none'} // remove on focus
              },
              '& .MuiInputBase-input': {
                height: 'auto',
                padding: '0px'
              }
            }}
          />
          <Box sx={{height: '24px', width: '24px'}}>
            <Image src={attachIcon} alt="attachIcon" height={24} width={24} />
          </Box>
        </Box>
        <Box
          sx={{
            height: '48px',
            width: '48px',
            background: 'rgba(255,255,255,0.75)',
            borderRadius: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Image src={sendIcon} alt="sendIcon" height={24} width={24} />
        </Box>
      </Box>
    </Box>
  );
}
