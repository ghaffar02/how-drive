import {Box, Typography} from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Add from '@/assets/svgs/lincense-steps/addIcon.svg';
import {motion} from 'framer-motion';

type CardProps = {
  img: string;
  title: string;
  description: string;
  flexdir?: boolean;
  width?: string;
};

const MotionBox = motion(Box);

export default function GridCard({
  img,
  title,
  description,
  flexdir,
  width
}: CardProps) {
  return (
    <MotionBox
      initial={{opacity: 0, y: 75}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.3}}
      transition={{duration: 0.6, ease: 'easeInOut'}}
      sx={{
        height: '100%',
        padding: {
          xs: '48px 32px',
          sm: '32px',
          lg: flexdir ? '48px 32px' : '32px 48px'
        },
        position: 'relative',
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: flexdir ? 'column' : 'row',
          md: flexdir ? 'column' : 'row'
        },
        justifyContent: {
          sm: flexdir ? '' : 'center',
          lg: flexdir ? 'space-evenly' : ''
        },
        gap: {
          xs: '60px',
          sm: flexdir || width ? '60px' : '0px',
          lg: flexdir ? '0px' : '48px'
        },
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: '15px',
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
          width: '183px',
          height: '136px',
          alignSelf: 'center'
        }}
      >
        <Image
          src={img}
          alt="icons"
          style={{
            height: '100%',
            width: '100%'
          }}
        />
      </Box>
      <Box
        sx={{
          maxWidth: width ? width : '525px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}
      >
        <Typography
          sx={{
            fontSize: {xs: '20px', sm: '22px', lg: '24px'},
            fontFamily: 'Satoshi700 !important',
            color: '#1a202c'
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: '#2d3748',
            fontSize: {xs: '14px', sm: '15px', lg: '16px'},
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          {description}
        </Typography>
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
  );
}
