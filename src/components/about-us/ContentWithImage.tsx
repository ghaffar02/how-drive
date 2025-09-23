import React from 'react';
import {Box, Typography} from '@mui/material';

interface ContentWithImageProps {
  title?: string;
  description?: string;
  mediaSrc?: string;
  direction?: string;
  id?: string;
}

const ContentWithImage: React.FC<ContentWithImageProps> = ({
  title,
  description,
  mediaSrc,
  direction = 'row',
  id
}) => {
  return (
    <Box
      id={id}
      sx={{
        bgcolor: '#FAFAFA',
        padding: {
          xs: '56px 16px 60px',
          md: '64px 24px 60px',
          lg: '120px  48px 60px'
        }
      }}
    >
      <Box
        sx={{
          maxWidth: '1280px',
          width: '100%',
          margin: 'auto',
          display: 'flex',
          flexDirection: {xs: 'column', md: direction},
          alignItems: {xs: 'center', md: 'center'},
          justifyContent: 'space-between',
          gap: {xs: '88px', lg: '120px'}
        }}
      >
        {/* Text Section */}
        <Box sx={{width: '100%', maxWidth: '580px'}}>
          {title && (
            <Typography
              sx={{
                fontSize: {xs: '28px', md: '32px', lg: '36px'},
                color: '#000',
                fontWeight: 700,
                fontFamily: 'Satoshi700 !important',

                width: '100%',
                mb: '24px'
              }}
            >
              {title}
            </Typography>
          )}
          {description && (
            <Typography
              sx={{
                fontSize: {xs: '16px', sm: '17px', lg: '18px'},
                fontFamily: '"Inter", sans-serif  !important',
                width: '100%',
                color: '#2D3748',
                fontWeight: 300
              }}
              dangerouslySetInnerHTML={{__html: description}}
            />
          )}
        </Box>

        {/* Media Section */}
        <Box sx={{width: '100%', maxWidth: '580px', height: '600px'}}>
          <Box
            component="img"
            src={mediaSrc}
            alt="media"
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '30px',
              objectFit: 'cover'
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ContentWithImage;
