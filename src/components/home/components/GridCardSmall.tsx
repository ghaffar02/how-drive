import React from 'react';
import {Box, Typography, Link} from '@mui/material';
import Add from '@/assets/svgs/lincense-steps/addIcon.svg';
import Image from 'next/image';
import {motion} from 'framer-motion';

type CardProps = {
  img: string;
  title: string;
  description: string;
  href: string;
};

const MotionBox = motion(Box);

export default function GridCardSmall({
  img,
  title,
  description,
  href
}: CardProps) {
  return (
    <Link sx={{textDecoration: 'none'}} href={href}>
      <MotionBox
        initial={{opacity: 0, y: 75}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.6, ease: 'easeInOut'}}
        sx={{
          height: '100%',
          position: 'relative',
          padding: '32px',
          display: 'flex',
          gap: '10px',
          borderRadius: '15px',
          backgroundColor: 'rgba(255,255,255,0.9)',
          boxShadow: 'rgba(0,0,0,0.25) 0px 0px 16px 0px'
        }}
        whileHover={{
          y: -10,
          boxShadow: 'rgba(0,0,0,0.25) 0px 0px 16px 10px',
          transition: {duration: 0.3, ease: 'easeInOut'}
        }}
        whileTap={{
          scale: 0.95,
          transition: {duration: 0.25, ease: 'easeInOut'}
        }}
      >
        <Box
          sx={{
            maxWidth: {xs: '100%', sm: '100%', lg: '324px'},
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <Typography
            sx={{
              fontSize: {xs: '20px', sm: '22px', lg: '24px'},
              color: '#1a202c',
              fontFamily: 'Satoshi700 !important'
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: '#2d3748',
              fontSize: {xs: '14px', sm: '15px', lg: '16px'},
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: '300',
              lineHeight: '1.5em'
            }}
          >
            {description}
          </Typography>
        </Box>
        <Box sx={{width: '48px', height: '48px'}}>
          <Image src={img} alt="icon" style={{height: '100%', width: '100%'}} />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: '16px',
            right: '16px',
            zIndex: 1,
            height: '37px',
            width: '37px',
            background: `linear-gradient(to bottom right,rgba(70, 17, 245, 0.15),rgba(31, 244, 255, 0.10),rgba(235, 0, 255, 0.15))`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            padding: '6px'
          }}
        >
          <Box sx={{width: '25px', height: '25px'}}>
            <Image
              src={Add}
              alt="addIcon"
              style={{height: '100%', width: '100%'}}
            />
          </Box>
        </Box>
      </MotionBox>
    </Link>
  );
}
