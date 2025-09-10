'use client';

import * as React from 'react';
import {Box, Typography} from '@mui/material';
import Image, {StaticImageData} from 'next/image';
import {motion, useScroll, useTransform} from 'framer-motion';

interface TabMenuProps {
  number: string;
  title: string;
  heading: string;
  description: string;
  image: StaticImageData;
  index: number;
}

export default function TabMenu({
  number,
  title,
  heading,
  description,
  image,
  index
}: TabMenuProps) {
  const MotionBox = motion(Box);
  const dividerRef = React.useRef<HTMLDivElement | null>(null);
  const {scrollYProgress} = useScroll({
    target: dividerRef,
    offset: ['start end', 'end start']
  });
  const customProgress = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const bgSize = useTransform(customProgress, [0, 1], ['100% 0%', '100% 100%']);
  return (
    <Box
      sx={{
        paddingX: '8px',
        backgroundColor: '#FAFAFA',
        paddingTop: '16px'
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          m: 'auto',
          display: 'flex',
          gap: '18px'
        }}
      >
        {/* Left Number Circle */}
        <Box
          sx={{
            width: {xs: '45px', sm: '95px'},
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          <Box
            sx={{
              width: {xs: '30px', sm: '77px'},
              height: {xs: '30px', sm: '77px'},
              borderRadius: '50%',
              position: 'relative',
              boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.25)',
              background: `
                linear-gradient(#fff, #fff) padding-box,
                linear-gradient(180deg, rgba(70,17,245,0.5) 0%, rgba(235,0,255,0.5) 100%) border-box
              `,
              border: '1px solid transparent'
            }}
          >
            <Typography
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: {xs: '14px', sm: '30px'},
                textAlign: 'center'
              }}
            >
              {number}
            </Typography>
          </Box>
          <motion.div
            ref={dividerRef}
            style={{
              flexGrow: 1,
              width: '4px',
              borderRadius: '9999px',
              boxShadow: '0px 1px 8px rgba(0,0,0,0.25)',
              margin: 'auto',
              backgroundImage:
                'linear-gradient(180deg, rgba(70, 17, 245, 0.5) 0%, rgba(235, 0, 255, 0.5) 100%)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top',
              backgroundSize: bgSize,
              minHeight: '250px'
            }}
          />
        </Box>

        {/* Content */}

        <Box>
          <Typography
            sx={{
              color: '#2D3748',
              fontSize: {xs: '14px', md: '15px', lg: '16px'},
              paddingBottom: '24px',
              paddingTop: {xs: '4px', md: '20px'},
              fontFamily: '"Inter", "Inter Placeholder", sans-serif !important',
              fontWeight: '500'
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '48px',
              justifyContent: 'space-between',
              flexDirection: {xs: 'column', lg: 'row'}
            }}
          >
            <Box sx={{width: {md: '50%'}}}>
              <Typography
                sx={{
                  color: '#000',
                  fontSize: {xs: '32px', md: '36px', lg: '48px'},
                  lineHeight: {xs: '1.2em', lg: '1.15em'},
                  fontWeight: 700,
                  paddingBottom: '10px',
                  fontFamily: 'Satoshi700 !important'
                }}
              >
                {heading}
              </Typography>
              <Typography
                sx={{
                  color: '#1a202c',
                  fontSize: {xs: '14px', md: '16px', lg: '18px'},
                  lineHeight: '1.5em',
                  fontFamily:
                    '"Inter", "Inter Placeholder", sans-serif !important',
                  fontWeight: '400'
                }}
              >
                {description}
              </Typography>
            </Box>
            <MotionBox
              key={index}
              // component={motion.div}
              initial={{x: 80, opacity: 0}}
              whileInView={{x: 0, opacity: [0, 0.5, 1]}}
              viewport={{once: true}}
              transition={{
                duration: 0.7,
                ease: 'easeOut',
                delay: index * 0.25,
                times: [0, 0.5, 1]
              }}
              sx={{
                width: {lg: '50%'},
                height: 'fit-content',
                // width: '50%',
                // height: '50%',
                borderRadius: '15px',
                background:
                  'linear-gradient(125deg, rgba(70, 17, 245, 0.15) 0%, rgba(30, 245, 255, 0.1) 50%, rgba(235, 0, 255, 0.15) 100%)',
                padding: '8px'
              }}
            >
              <Box
                sx={{
                  overflow: 'hidden',
                  borderRadius: '15px',
                  height: '100%',
                  width: '100%',
                  aspectRatio: '4 / 3'
                }}
              >
                <Image
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover'
                  }}
                  src={image}
                  alt={title}
                />
              </Box>
            </MotionBox>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
