import {Box, Typography} from '@mui/material';
import React from 'react';

type CardProps = {
  heading?: string;
  subHeading?: string;
  description?: string;
  headingSize?: boolean;
  background?: string;
  isbool?: boolean;
};

export default function TextCard({
  heading,
  subHeading,
  description,
  headingSize = true,
  isbool,
  background = '#f2f2f2'
}: CardProps) {
  return (
    <Box
      sx={{
        background: background,
        // maxWidth: '250px',
        width: '100%',
        height: {
          xs: isbool ? '159px' : '180px',
          sm: isbool ? '164px' : '200px',
          lg: '250px'
        },
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          sx={{
            fontSize: headingSize
              ? {xs: '32px', sm: '36px', lg: '48px'}
              : {xs: '20px', sm: '22px', lg: '24px'},
            fontFamily: 'Satoshi700 !important',
            color: '#2563eb'
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            fontSize: {xs: '14px', sm: '16px', lg: '18px'},
            fontWeight: '300',
            color: '#2d3748',
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          {subHeading}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: {xs: '20px', sm: '22px', lg: '24px'},
            fontWeight: '600',
            color: '#1A202C',
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
