'use client';
import {Box, SvgIcon, Typography} from '@mui/material';
import {motion} from 'framer-motion';
// import {JSX} from 'react';
type Whatweoffer = {
  category: string;
  items: {title: string; description: string}[];
};

type WhatweofferProps = {
  Whatweoffer: Whatweoffer[];
  heading: string;
  id?: string;
};

export default function Whatweoffer({Whatweoffer, heading, id}: WhatweofferProps) {
  const MotionBox = motion(Box);
  return (
    <Box id={id} sx={{bgcolor: '#FAFAFA'}}>
      <Box
        sx={{
          maxWidth: '1380px',
          textAlign: 'center',

          margin: ' auto',
          width: '100%',
          // backgroundColor: '#FAFAFA',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: {xs: '60px 16px', md: '60px 24px', lg: '60px 48px'},
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            // maxWidth: '1087px',
            width: '100%'

            // backgroundColor: '#EDF0FF',
            // p: {xs: '16px', sm: '24px', lg: '48px'},
            // borderRadius: '24px'
          }}
        >
          {/* Heading */}
          <Typography
            sx={{
              // color: '#1A202C',
              fontSize: {xs: '28px', md: '32px', lg: '36px'},
              color: '#000',
              fontWeight: 600,
              fontFamily: '"Inter", "Inter Placeholder", sans-serif !important',

              width: '100%',
              mb: '36px'
            }}
          >
            {heading}
          </Typography>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: {xs: 'column', md: 'row'},
              justifyContent: 'space-between',

              gap: '48px',
              p: '4px'
            }}
          >
            {Whatweoffer.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <MotionBox
                  key={index}
                  // component={motion.div}
                  initial={{opacity: 0, x: isEven ? -50 : 50}} // left or right
                  animate={{opacity: 1, x: 0}}
                  exit={{opacity: 0, y: -20}}
                  transition={{duration: 0.6}}
                  sx={{
                    bgcolor: '#E1F2F2',
                    maxWidth: '615px',
                    width: '100%',
                    p: '24px',
                    minHeight: {md: '707px', lg: '605px'},
                    borderRadius:
                      (index + 1) % 2 === 0
                        ? '4px 60px 4px 60px'
                        : '60px 4px 60px 4px'
                  }}
                >
                  {/* {item.category} */}
                  <Typography
                    sx={{
                      width: '100%',
                      color: '#1A202C',
                      fontSize: {xs: '20px', md: '22px', lg: '24px'},

                      fontWeight: 600,
                      fontFamily:
                        '"Inter", "Inter Placeholder", sans-serif !important'

                      // lineHeight: '1.35em'
                    }}
                  >
                    {item.category}
                  </Typography>

                  {/* {item.category.it} */}
                  {item.items.map((ele, i) => {
                    return (
                      <Box
                        key={i}
                        sx={{
                          width: '100%',
                          mt: '28px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px'
                        }}
                      >
                        <SvgIcon
                          viewBox="0 0 256 256"
                          focusable="false"
                          sx={{width: 20}}
                        >
                          <g>
                            <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z" />
                          </g>
                        </SvgIcon>

                        <Box
                          // key={i}
                          sx={{
                            width: '100%',
                            // bgcolor: '#ccc',
                            // display: 'flex',
                            textAlign: 'left'
                          }}
                        >
                          <Typography
                            sx={{
                              width: '100%',
                              color: '#2D3748',
                              fontSize: {xs: '16px', sm: '17px', lg: '18px'},
                              fontWeight: 500,
                              fontFamily:
                                '"Inter", "Inter Placeholder", sans-serif !important'
                              // lineHeight: '1.35em'
                            }}
                          >
                            {ele.title}
                          </Typography>
                          <Typography
                            sx={{
                              // maxWidth: '650px',
                              width: '100%',
                              color: '#2D3748',
                              fontSize: {xs: '14px', sm: '15px', lg: '16px'},
                              fontFamily:
                                '"Inter", "Inter Placeholder", sans-serif !important',
                              fontWeight: 300
                            }}
                          >
                            {ele.description}
                          </Typography>
                        </Box>
                      </Box>
                    );
                  })}
                </MotionBox>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
