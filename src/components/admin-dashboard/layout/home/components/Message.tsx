// import {useTranslations} from 'next-intl';
import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import React, {useState} from 'react';

import car from '@/assets/svgs/dashboard-student/home/car.svg';
import steering from '@/assets/svgs/steering.svg';
import logo from '@/assets/pngs/logo.avif';
import {useTranslations} from 'next-intl';

import {motion} from 'framer-motion';
import {StaticImageData} from 'next/image';

const MotionBox = motion(Box);

export type MessageItem = {
  icon: StaticImageData | string;
  sender: string;
  date: string;
  subject: string;
  bgcolor?: string;
};

type Props = {
  setActiveKey: React.Dispatch<React.SetStateAction<string>>;
  messages: MessageItem[];
};

// Helper function to get bgcolor based on sender or icon
function getBgColor(sender: string, index: number): string {
  const colors = [
    '#450ff51a',
    'rgba(6,182,212,0.1)',
    'rgba(70, 17, 245, 0.1)',
    'rgba(234, 0, 255, 0.08)'
  ];
  return colors[index % colors.length];
}

export default function Messages({setActiveKey, messages}: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const t = useTranslations('Dashboard.home.MessageLesson');

  return (
    <Box
      sx={{
        background: '#ffffffbf',
        padding: '16px',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '18px',
        gap: {xs: '6px', sm: '8px'},
        border: '1px solid #fff',
        boxShadow:
          '0px 0px 0px 1px #ffffff, 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)',
        overflow: 'hidden'
      }}
    >
      <Typography
        sx={{
          ...localFont.inter16,
          fontWeight: '500',
          fontFamily: '"Inter", sans-serif !important'
        }}
      >
        {t('Messages')}
      </Typography>
      <MotionBox
        sx={{
          overflowY: 'auto',
          overflowX: 'hidden',
          maxHeight: '700px',
          p: '1px 0px',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.4, delay: 0.4, ease: 'easeInOut'}}
        viewport={{once: true}}
      >
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'center',
            p: '4px 2px'
          }}
        >
          {messages.map((item, index) => {
            const bgcolor = item.bgcolor || getBgColor(item.sender, index);
            return (
              <Box
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(index);
                  setActiveKey('4');
                }}
                key={index}
                sx={{
                  width: '100%',
                  // maxWidth: '309px',
                  background: '#fff',
                  padding: '8px',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '10px',
                  cursor: 'pointer',
                  // fontWeight: selectedIndex === index ? '700' : '400'

                  boxShadow:
                    selectedIndex === index
                      ? '0px 0px 2px 0px rgb(70, 17, 245)'
                      : ' 0px 0px 2px 0px #d4d4d8ff',
                  '&:hover': {
                    boxShadow: '0px 0px 2px 0px rgb(70, 17, 245)'
                  }

                  //
                }}
              >
                <Box
                  sx={{
                    backgroundColor: bgcolor,
                    px: '8px',
                    borderRadius: '8px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '40px'
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: '999px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Box sx={{width: '100%', maxWidth: '30px', height: '30px'}}>
                      <Image
                        src={item.icon}
                        alt="car"
                        style={{
                          width: '100%',
                          height: '100%',
                          textAlign: 'center',
                          objectFit: 'contain'
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
                <Box width="100%">
                  <Box
                    sx={{
                      // bgcolor: '#888',
                      width: '100%',
                      display: 'flex',
                      gap: '8px',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography
                      sx={{
                        ...localFont.inter14,
                        // fontWeight: selectedIndex === index ? '700' : '400'
                        color: selectedIndex === index ? '#000' : '#718096',
                        fontFamily: '"Inter", sans-serif !important',
                        fontWeight: selectedIndex === index ? '500' : '400'
                      }}
                    >
                      {item.sender}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {xs: '8.4px', md: '10px', lg: '11px'},
                        color: selectedIndex === index ? '#000' : '#718096',
                        fontFamily: '"Inter", sans-serif !important',
                        fontWeight: selectedIndex === index ? '500' : '400'
                      }}
                    >
                      {item.date}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      // ...localFont.i,
                      fontSize: {xs: '9.6px', md: '11px', lg: '13px'},
                      color: '#718096',
                      fontFamily: '"Inter", sans-serif !important',
                      fontWeight: '400'
                    }}
                  >
                    {item.subject}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </MotionBox>
    </Box>
  );
}
