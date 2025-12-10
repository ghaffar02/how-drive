'use client';
import {Box, Typography} from '@mui/material';
import Image, {StaticImageData} from 'next/image';
import localFont from '@/utils/themes';

type NestedListItem = {
  text: string;
  type?: 'orderedList' | 'unorderedList' | 'dotList' | 'dottedList';
  subItems?: string[];
};

type ContentBlock = {
  type?: 'heading' | 'paragraph' | 'orderedList' | 'unorderedList';
  content?: string | string[] | NestedListItem[] | (string | NestedListItem)[];
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
            dangerouslySetInnerHTML={{
              __html:
                typeof block.content === 'string'
                  ? block.content
                  : Array.isArray(block.content)
                    ? block.content
                        .map((item) =>
                          typeof item === 'string' ? item : item.text
                        )
                        .join(' ')
                    : ''
            }}
          />
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
            dangerouslySetInnerHTML={{
              __html:
                typeof block.content === 'string'
                  ? block.content
                  : Array.isArray(block.content)
                    ? block.content
                        .map((item) =>
                          typeof item === 'string' ? item : item.text
                        )
                        .join(' ')
                    : ''
            }}
          />
        );

      case 'orderedList':
        return (
          <Box
            key={index}
            component="ol"
            sx={{
              ...baseStyles,
              paddingLeft: '24px',
              marginBottom: isLastBlock ? '0px' : '20px'
            }}
          >
            {Array.isArray(block.content) &&
              block.content.map((item, itemIndex) => {
                // Check if item is a nested list structure
                if (typeof item === 'object' && 'text' in item) {
                  const nestedItem = item as NestedListItem;
                  return (
                    <Box
                      key={itemIndex}
                      component="li"
                      sx={{marginBottom: '8px'}}
                    >
                      <Typography
                        component="span"
                        sx={{
                          ...localFont.inter16,
                          fontFamily: '"Inter", sans-serif !important',
                          color: '#2d3748'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: nestedItem.text ?? ''
                        }}
                      />
                      {nestedItem.subItems &&
                        nestedItem.subItems.length > 0 && (
                          <Box
                            component={
                              nestedItem.type === 'orderedList' ? 'ol' : 'ul'
                            }
                            sx={{
                              paddingLeft: '24px',
                              marginTop: '8px',
                              marginBottom: '0px',
                              '& li::marker': {
                                color: '#000000'
                              }
                            }}
                          >
                            {nestedItem.subItems.map((subItem, subIndex) => (
                              <Typography
                                key={subIndex}
                                component="li"
                                sx={{
                                  ...localFont.inter16,
                                  fontFamily: '"Inter", sans-serif !important',
                                  color: '#2d3748'
                                }}
                                dangerouslySetInnerHTML={{
                                  __html: subItem ?? ''
                                }}
                              />
                            ))}
                          </Box>
                        )}
                    </Box>
                  );
                }
                // Regular string item
                const textContent = typeof item === 'string' ? item : '';
                return (
                  <Typography
                    key={itemIndex}
                    component="li"
                    sx={{
                      ...localFont.inter16,
                      fontFamily: '"Inter", sans-serif !important',
                      color: '#2d3748'
                    }}
                    dangerouslySetInnerHTML={{__html: textContent}}
                  />
                );
              })}
          </Box>
        );

      case 'unorderedList':
        return (
          <Box
            key={index}
            component="ul"
            sx={{
              ...baseStyles,
              fontWeight: 400,
              paddingLeft: '24px',
              marginBottom: isLastBlock ? '0px' : '20px'
            }}
          >
            {Array.isArray(block.content) &&
              block.content.map((item, itemIndex) => {
                // Check if item is a nested list structure
                if (typeof item === 'object' && 'text' in item) {
                  const nestedItem = item as NestedListItem;
                  return (
                    <Box
                      key={itemIndex}
                      component="li"
                      sx={{marginBottom: '8px'}}
                    >
                      <Typography
                        component="span"
                        sx={{
                          ...localFont.inter16,
                          fontFamily: '"Inter", sans-serif !important',
                          fontWeight: 400,
                          color: '#2d3748'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: nestedItem.text ?? ''
                        }}
                      />
                      {nestedItem.subItems &&
                        nestedItem.subItems.length > 0 && (
                          <Box
                            component={
                              nestedItem.type === 'orderedList' ? 'ol' : 'ul'
                            }
                            sx={{
                              paddingLeft: '24px',
                              marginTop: '8px',
                              marginBottom: '0px',
                              '& li::marker': {
                                color: '#000000'
                              }
                            }}
                          >
                            {nestedItem.subItems.map((subItem, subIndex) => (
                              <Typography
                                key={subIndex}
                                component="li"
                                sx={{
                                  ...localFont.inter16,
                                  fontFamily: '"Inter", sans-serif !important',
                                  fontWeight: 400,
                                  color: '#2d3748'
                                }}
                                dangerouslySetInnerHTML={{
                                  __html: subItem ?? ''
                                }}
                              />
                            ))}
                          </Box>
                        )}
                    </Box>
                  );
                }
                // Regular string item
                const textContent = typeof item === 'string' ? item : '';
                return (
                  <Typography
                    key={itemIndex}
                    component="li"
                    sx={{
                      ...localFont.inter16,
                      fontFamily: '"Inter", sans-serif !important',
                      fontWeight: 400,
                      color: '#2d3748'
                    }}
                    dangerouslySetInnerHTML={{__html: textContent}}
                  />
                );
              })}
          </Box>
        );

      default:
        return null;
    }
  });
}

export default function GettingStarted({
  data,
  headerTitle = 'Getting Started'
}: GettingStartedProps) {
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
                ...localFont.inter22,
                fontWeight: 600,
                textTransform: 'capitalize',
                color: '#1A202C',
                fontFamily: '"Inter", sans-serif !important',
                textAlign: 'center'
              }}
              dangerouslySetInnerHTML={{__html: headerTitle ?? ''}}
            />
          </Box>

          {/* Content Sections */}
          <Box
            sx={{
              background: '#fff',
              width: '100%',
              padding: '24px',
              gap: '48px',
              display: 'flex',
              flexWrap: 'wrap',

              borderRadius: ' 0 0 15px 15px'
            }}
          >
            {data?.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: '100%',
                  // background: '#ffffff',
                  // padding: '24px',
                  gap: '48px',
                  display: 'flex',
                  flexDirection: {
                    xs: 'column-reverse'
                  },
                  alignItems: {
                    xs: 'flex-start',
                    md: 'flex-start'
                  },
                  borderRadius: '24px'
                }}
              >
                {/* Image Section */}
                {item.image && (
                  <Box
                    sx={{
                      width: {
                        xs: '100%',
                        md: '100%',
                        lg: '100%'
                      },
                      maxWidth: {
                        xs: '100%',
                        md: '100%',
                        lg: '1080px'
                      },
                      height: {
                        xs: 'auto',
                        md: 'auto',
                        lg: '720px'
                      },
                      position: 'relative',
                      flexShrink: 0,
                      borderRadius: '24px',
                      overflow: 'hidden',
                      margin: {
                        xs: '0 auto'
                      }
                    }}
                  >
                    <Image
                      src={item.image ?? ''}
                      alt={item.title ?? ''}
                      width={1041}
                      height={694}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      unoptimized={typeof item.image === 'string'}
                    />
                  </Box>
                )}
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
