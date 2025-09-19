import React from 'react';
import {Box, Typography} from '@mui/material';

interface ContentWithMediaProps {
  title?: string;
  description?: string;
  mediaSrc?: string;
  direction?: string;
}

const ContentWithMedia: React.FC<ContentWithMediaProps> = ({
  title,
  description,
  mediaSrc,
  direction = 'row'
}) => {
  return (
    <Box
      sx={{
        bgcolor: '#FAFAFA',
        padding: {
          xs: '120px 16px 60px',
          md: '120px 24px 60px',
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
          alignItems: {xs: 'start', md: 'center'},
          justifyContent: 'space-between',
          gap: {md: '88px', lg: '120px'}
        }}
      >
        {/* Text Section */}
        <Box sx={{width: '100%', maxWidth: '580px'}}>
          {title && (
            <Typography
              sx={{
                fontSize: {xs: '28px', md: '32px', lg: '36px'},
                color: '#000',
                fontWeight: 600,
                fontFamily:
                  '"Inter", "Inter Placeholder", sans-serif !important',

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
                fontSize: {xs: '14px', sm: '16px', lg: '18px'},
                // lineHeight: {xs: '22px', sm: '100%'},
                fontFamily: '"Inter", sans-serif  !important',
                // maxWidth: '700px',
                width: '100%',
                color: '#000000',
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
              // maxWidth: '580px',
              height: '100%',
              // objectFit: 'cover',
              borderRadius: '30px'
              // boxShadow: '14px 8px 16px rgba(243, 236, 218, 0.15)'
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ContentWithMedia;
