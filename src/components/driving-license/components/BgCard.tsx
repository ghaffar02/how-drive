import {Box, Typography} from '@mui/material';
import React from 'react';
import Image, {StaticImageData} from 'next/image';

type CardProps = {
  row?: boolean;
  icon: StaticImageData;
  bgImage: StaticImageData | string;
  title?: string;
};

export default function BgCard({row = true, icon, bgImage, title}: CardProps) {
  return (
    <Box
      sx={{
        // maxWidth: row ? '516px' : '250px',
        width: '100%',
        height: row
          ? {xs: '334px', sm: '344px', lg: '250px'}
          : {xs: '334px', sm: '344px', lg: '516px'},
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '24px',
        backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0.5),rgba(23,61,166, 1)), url(${bgImage})`,
        borderRadius: '15px'
      }}
    >
      <Box sx={{width: '60px', height: '60px'}}>
        <Image
          src={icon}
          alt="iconImage"
          style={{height: '100%', width: '100%'}}
        />
      </Box>
      <Box>
        <Typography
          component="div"
          sx={{
            fontSize: {xs: '20px', sm: '22px', lg: '24px'},
            color: '#fff',
            fontWeight: '600',
            fontFamily: '"Inter", sans-serif !important'
          }}
          dangerouslySetInnerHTML={{__html: title ?? ''}}
        />
      </Box>
    </Box>
  );
}
