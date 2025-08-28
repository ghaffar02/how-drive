import Image from 'next/image';
import {Box, Button, Typography} from '@mui/material';
import {motion} from 'framer-motion';

import tick from '@/assets/svgs/tick.svg';

interface PriceData {
  title: string;
  price: {
    amount: string;
    duration?: string;
    note?: string;
  };
  features: string[];
  button: string;
}

export default function PricingCards({
  pricingData
}: {
  pricingData: PriceData[];
}) {
  const MotionBox = motion(Box);
  return (
    <>
      {pricingData.map((items: PriceData, index: number) => {
        return (
          <MotionBox
            key={index}
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: index * 0.3}}
            viewport={{once: true, amount: 0.2}}
            sx={{
              maxWidth: '440px',
              width: '100%',
              height: '580px',
              flex: '1 1 auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',

              gap: '32px',
              p: '32px',
              bgcolor: '#ffffffff',
              borderRadius: '15px',

              boxShadow:
                '0px 0.7961918735236395px 2.3885756205709185px -0.625px rgba(0, 0, 0, 0.13), 0px 2.414506143104518px 7.2435184293135535px -1.25px rgba(0, 0, 0, 0.13), 0px 6.382653521484461px 19.147960564453385px -1.875px rgba(0, 0, 0, 0.13), 0px 20px 60px -2.5px rgba(0, 0, 0, 0.13)'
            }}
          >
            <Typography
              sx={{
                fontSize: {xs: '18px', md: '20px', lg: '22px'},
                fontFamily: '"Inter", sans-serif  !important',
                color: '#4611F5'
              }}
            >
              {items.title}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                maxWidth: '376px',
                width: '100%',
                gap: '10px',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexWrap: 'nowrap'
              }}
            >
              <Typography
                sx={{
                  fontSize: {xs: '32px', md: '36px', lg: '48px'},
                  fontFamily: 'Satoshi700 !important',
                  fontWeight: 700,
                  lineHeight: '100%',
                  textWrap: 'nowrap',
                  color: '#000'
                }}
              >
                {items.price.amount}
              </Typography>
              {items.price.duration && (
                <Box
                  sx={{
                    width: '100%'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {xs: '16px', md: '18px', lg: '20px'},

                      fontFamily: '"Inter", sans-serif  !important',
                      color: '#000'
                    }}
                  >
                    {items.price.duration}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {xs: '12px', md: '13px', lg: '14px'},
                      fontFamily: '"Inter", sans-serif  !important',
                      color: '#000'
                    }}
                  >
                    {items.price.note}
                  </Typography>
                </Box>
              )}
            </Box>
            <Box
              sx={{
                background:
                  'linear-gradient(90deg, rgba(30, 245, 255, 0.1) 0%, rgba(70, 17, 245, 0.15) 50.4505%, rgba(30, 245, 255, 0.1) 100%)',
                flex: '0 0 auto',
                height: '1px',
                overflow: 'hidden',
                position: 'relative',
                width: '100%'
              }}
            />
            <Box
              sx={{
                width: '100%',

                height: '262px'
              }}
            >
              {items.features.map((feature: string, i: number) => (
                <Box
                  key={i}
                  sx={{
                    width: '100%',
                    display: 'flex',
                    gap: '7px',
                    mb: '10px'
                  }}
                >
                  <Image
                    src={tick}
                    alt="tickImage"
                    style={{width: '25px', height: '25px'}}
                  />
                  <Typography
                    sx={{
                      fontSize: {xs: '14px', md: '15px', lg: '16px'},
                      fontFamily: '"Inter", sans-serif  !important',

                      color: '#2D3748'
                    }}
                  >
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Button
              sx={{
                width: '100%',
                fontSize: {xs: '14px', md: '15px', lg: '16px'},
                fontFamily: '"Inter", sans-serif  !important',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '8px 16px',
                textTransform: 'capitalize',
                alignContent: 'center',
                borderRadius: '10px',
                border: '1px solid #4611f5',
                bgcolor: '#4611F5',
                color: '#fff',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: '#300ca8',
                  color: '#fff'
                }
              }}
            >
              {items.button}
            </Button>
          </MotionBox>
        );
      })}
    </>
  );
}
