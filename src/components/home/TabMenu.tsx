'use client';

import * as React from 'react';
import {Box, Typography, Divider} from '@mui/material';
import Image, {StaticImageData} from 'next/image';

interface TabMenuProps {
  number: string;
  title: string;
  heading: string;
  description: string;
  image: StaticImageData;
}

export default function TabMenu({
  number,
  title,
  heading,
  description,
  image
}: TabMenuProps) {
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
          maxWidth: '1280px',
          m: 'auto',
          display: 'flex',
          gap: '8px'
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
                linear-gradient(#FAFAFA, #FAFAFA) padding-box,
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
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              border: 0,
              width: {xs: '2px', sm: '3px'},
              backgroundImage:
                'linear-gradient(180deg, rgba(70, 17, 245, 0.5) 0%, rgba(235, 0, 255, 0.5) 100%)',
              borderRadius: '9999px',
              boxShadow: 'none',
              filter: 'drop-shadow(0px 1px 8px rgba(0,0,0,0.25))',
              margin: 'auto',
              flexGrow: 1
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
              paddingTop: {xs: '4px', md: '20px'}
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '48px',
              flexDirection: {xs: 'column', md: 'row'},
              paddingX: '8px'
            }}
          >
            <Box sx={{width: {md: '50%'}}}>
              <Typography
                sx={{
                  color: '#1a202c',
                  fontSize: {xs: '32px', md: '36px', lg: '48px'},
                  lineHeight: {xs: '1.2em', lg: '1.15em'},
                  fontWeight: 700,
                  paddingBottom: '10px'
                }}
              >
                {heading}
              </Typography>
              <Typography
                sx={{
                  color: '#1a202c',
                  fontSize: {xs: '14px', md: '16px', lg: '18px'},
                  fontWeight: 700
                }}
              >
                {description}
              </Typography>
            </Box>
            <Box sx={{width: {md: '50%'}}}>
              <Image
                style={{height: '100%', width: '100%', objectFit: 'contain'}}
                src={image}
                alt={title}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
