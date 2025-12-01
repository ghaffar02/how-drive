import {Box, SxProps, Theme, Typography} from '@mui/material';
import React from 'react';
import Image, {StaticImageData} from 'next/image';
import localFont from '@/utils/themes';

type CardProps = {
  row?: boolean;
  icon?: StaticImageData;
  bgImage: StaticImageData | string;
  title?: string;
  heading?: string;
  des?: string;
  sx?: SxProps<Theme>;
};

export default function BgCard({
  row = true,
  icon,
  bgImage,
  title,
  heading,
  des,
  sx = {}
}: CardProps) {
  return (
    <Box
      sx={{
        // maxWidth: row ? '516px' : '250px',
        width: '100%',
        height: heading ? '170px' : 'auto',
        // height: row
        //   ? {xs: '334px', sm: '344px', lg: '250px'}
        //   : {xs: '334px', sm: '344px', lg: '516px'},
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '24px',
        backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0.5),rgba(23,61,166, 1)), url(${bgImage})`,
        borderRadius: '15px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        ...sx
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          alignItems: des ? 'center' : 'normal',
          justifyContent: 'space-between'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',

            justifyContent: 'space-between'
          }}
        >
          {title && (
            <Typography
              component="div"
              sx={{
                textAlign: 'center',

                fontSize: {xs: '20px', sm: '22px', lg: '24px'},
                color: '#fff',
                fontWeight: '600',
                fontFamily: '"Inter", sans-serif !important'
              }}
              dangerouslySetInnerHTML={{__html: title ?? ''}}
            />
          )}
          {icon && (
            <Box sx={{width: '24px', height: '24px'}}>
              <Image
                src={icon}
                alt="iconImage"
                style={{height: '100%', width: '100%'}}
              />
            </Box>
          )}
        </Box>
        {des && (
          <Typography
            component="div"
            sx={{
              ...localFont.inter16,
              mt: '24px',
              color: '#fff',
              fontWeight: '300',
              fontFamily: '"Inter", sans-serif !important'
            }}
            dangerouslySetInnerHTML={{__html: des ?? ''}}
          />
        )}
        {heading && (
          <Typography
            component="div"
            sx={{
              ...localFont.inter20,
              color: '#fff',
              fontFamily: '"Inter", sans-serif !important'
            }}
            dangerouslySetInnerHTML={{__html: heading ?? ''}}
          />
        )}
      </Box>
    </Box>
  );
}
