'use client';
import {Box, Typography} from '@mui/material';
import Image, {StaticImageData} from 'next/image';
import localFont from '@/utils/themes';

type ContentBlock = {
  type?: 'heading' | 'paragraph' | 'orderedList' | 'unorderedList';
  content?: string | string[];
  bold?: boolean;
};

type GettingStartedItem = {
  title?: string;
  content?: ContentBlock[];
  image?: StaticImageData | string;
};

type GettingStartedProps = {
  data?: GettingStartedItem[];
  headerTitle?: string;
};

function renderContent(content: ContentBlock[]) {
  return content.map((block, index) => {
    const baseStyles = {
      ...localFont.inter16,
      fontFamily: '"Inter", sans-serif !important',
      textAlign: 'left' as const,
      color: '#2d3748'
    };

    const isLastBlock = index === content.length - 1;

    switch (block.type) {
      case 'heading':
        return (
          <Typography
            key={index}
            component="p"
            sx={{
              ...baseStyles,
              fontWeight: 700,
              marginBottom: isLastBlock ? '0px' : '20px'
            }}
          >
            {block.content}
          </Typography>
        );

      case 'paragraph':
        return (
          <Typography
            key={index}
            component="p"
            sx={{
              ...baseStyles,
              marginBottom: isLastBlock ? '0px' : '20px'
            }}
          >
            {typeof block.content === 'string'
              ? block.content
              : Array.isArray(block.content)
                ? block.content.join(' ')
                : ''}
          </Typography>
        );

      case 'orderedList':
        return (
          <Box
            key={index}
            component="ol"
            sx={{
              ...baseStyles,
              paddingLeft: '24px',
            //   marginBottom: isLastBlock ? '0px' : '20px',
            //   marginTop: '0px',
            //   '& li': {
            //     marginBottom: '8px',
            //     '&:last-child': {
            //       marginBottom: '0px'
            //     }
            //   }
            }}
          >
            {Array.isArray(block.content) &&
              block.content.map((item, itemIndex) => (
                <Typography
                  key={itemIndex}
                  component="li"
                  sx={{
                    ...localFont.inter16,
                    fontFamily: '"Inter", sans-serif !important',
                    color: '#2d3748'
                  }}
                >
                  {item}
                </Typography>
              ))}
          </Box>
        );

      case 'unorderedList':
        return (
          <Box
            key={index}
            component="ul"
            sx={{
              ...baseStyles,
              fontWeight: 300,
              paddingLeft: '24px',
              marginBottom: isLastBlock ? '0px' : '20px',
              marginTop: '0px',
              '& li': {
                marginBottom: '8px',
                '&:last-child': {
                  marginBottom: '0px'
                }
              }
            }}
          >
            {Array.isArray(block.content) &&
              block.content.map((item, itemIndex) => (
                <Typography
                  key={itemIndex}
                  component="li"
                  sx={{
                    ...localFont.inter16,
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: 300,
                    color: '#2d3748'
                  }}
                >
                  {item}
                </Typography>
              ))}
          </Box>
        );

      default:
        return null;
    }
  });
}

export default function GettingStarted({data, headerTitle = 'Getting Started'}: GettingStartedProps) {
  return (
    <Box
      sx={{
        background: '#fafafa',
        padding: {
          xs: '48px 16px 80px',
          sm: '48px 24px 80px',
          lg: '48px 48px 80px'
        }
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}
      >
        {/* Inner Box with 60px gap */}
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
          {/* Main Header */}
          <Box
            sx={{
              background: '#ffffff',
              padding: '24px',
              borderRadius: '15px 15px 0 0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography
              sx={{
                ...localFont.h6,
                fontFamily: 'Satoshi700 !important',
                textAlign: 'center'
              }}
            >
              {headerTitle}
            </Typography>
          </Box>

          {/* Content Sections */}
          <Box sx={{ background: '#fff',
          width:"100%",
                padding: '24px',
                gap: '48px',
                display: 'flex',
                flexWrap: 'wrap',
                
                borderRadius: ' 0 0 15px 15px',}}> 

         
          {data?.map((item, index) => (
            <Box
              key={index}
              sx={{
                width:"100%",
                // background: '#ffffff',
                // padding: '24px',
                gap: '48px',
                display: 'flex',
                flexDirection: {
                  xs: 'column-reverse',
                 
                },
                alignItems: {
                  xs: 'flex-start',
                  md: 'flex-start'
                },
                borderRadius: '24px'
              }}
            >
              {/* Image Section */}
              <Box
                sx={{
                    
                  width: '100%',
                  maxWidth: {
                    xs: '295px',
                    md: '699px',
                    lg: '1041px'
                  },
                  height: {
                    xs: '196px',
                    md: '466px',
                    lg: '694px'
                  },
                  position: 'relative',
                  flexShrink: 0,
                  borderRadius: '24px',
                  overflow: 'hidden',
                  margin: {
                    xs: '0 auto',
                   
                  }
                }}
              >
                <Image
                  src={item.image ?? ""}
                  alt={item.title ?? ""}
                  fill
                  style={{
                    objectFit: 'cover'
                  }}
                  unoptimized={typeof item.image === 'string'}
                />
              </Box>

              {/* Text Section */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1
                }}
              >
                {renderContent(item.content ?? [])}
              </Box>
            </Box>
          ))}
           </Box>
        </Box>
      </Box>
    </Box>
  );
}

