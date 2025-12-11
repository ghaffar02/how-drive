'use client';

import {Box, Button, Typography, useTheme, useMediaQuery} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {useTranslations} from 'next-intl';
import React, {useEffect, useRef, useState} from 'react';
import {motion} from 'framer-motion';

export type AdvantageCardData = {
  title: string;
  description: string;
  bgColor: string;
  color: string;
};

interface AdvantagesProps {
  data: AdvantageCardData[];
}

export default function Advantages({data}: AdvantagesProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const t = useTranslations('Advantages');

  const scrollRef = useRef<HTMLDivElement>(null);

  const [showLeft, setShowLeft] = useState(true);

  const updateButtons = () => {
    if (scrollRef.current) {
      const {scrollLeft} = scrollRef.current;
      setShowLeft(scrollLeft > 0);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const {clientWidth} = scrollRef.current;
      const scrollAmount = clientWidth * (isSmallScreen ? 1 : 0.7);
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateButtons();

    container.addEventListener('scroll', updateButtons);
    return () => container.removeEventListener('scroll', updateButtons);
  }, []);
  return (
    <Box sx={{width: '100%', bgcolor: '#FAFAFA'}}>
      <Typography
        sx={{
          fontSize: {xs: '28px', md: '32px', lg: '36px'},
          fontFamily: 'Satoshi500 !important',
          textAlign: 'center',
          color: '#000',
          pt: '48px'
        }}
      >
        {t('title')}
      </Typography>
      <Box
        sx={{
          padding: {
            xs: '48px 8px 48px 6px',
            sm: '48px 8px 48px 14px',
            lg: '48px 8px 48px 118px'
          }
        }}
      >
        <Box
          sx={{
            width: '100%',
           
            // maxWidth: '1400px',
            margin: 'auto',
          }}
        >
          <Box sx={{padding: '8px'}}>
            <Box sx={{position: 'relative', width: '100%'}}>
              {showLeft && (
                <Button
                  onClick={() => scroll('left')}
                  sx={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    minWidth: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    bgcolor: 'rgba(0,0,0,0.2)',
                    boxShadow: 2
                  }}
                >
                  <ChevronLeftIcon sx={{color: 'white'}} />
                </Button>
              )}

              <Box
                ref={scrollRef}
                sx={{
                  display: 'flex',
                  gap: '28px',
                  padding: '10px 10px 10px 8px',
                  overflowX: 'auto',
                  overflowY: 'hidden',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  '&::-webkit-scrollbar': {
                    display: 'none'
                  }
                }}
              >
                {data.map((cardData: AdvantageCardData, i: number) => (
                  <motion.div
                    key={cardData.title}
                    initial={{y: 80, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{
                      duration: 0.5,
                      ease: 'easeOut',
                      delay: i * 0.25
                    }}
                    style={{flexShrink: 0}}
                  >
                    <CardComponent
                      bgColor={cardData.bgColor}
                      color={cardData.color}
                      title={cardData.title}
                      description={cardData.description}
                    />
                  </motion.div>
                ))}
              </Box>
              <Button
                onClick={() => scroll('right')}
                sx={{
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  height: '40px',
                  zIndex: 10,
                  minWidth: '40px',
                  borderRadius: '50%',
                  bgcolor: 'rgba(0,0,0,0.2)',
                  boxShadow: 2
                }}
              >
                <ChevronRightIcon sx={{color: 'white'}} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

interface CardProps {
  bgColor: string;
  title: string;
  description: string;
  color: string;
}

function CardComponent({bgColor, title, description, color}: CardProps) {
  return (
    <Box sx={{padding: '0px'}}>
      <Box
        sx={{
          width: '400px',
          padding: '16px',
          height: '700px',
          backgroundColor: bgColor,
// bgcolor:'rgba(235, 7, 7, 0.9)',
          borderRadius: '25px',
          flexShrink: 0
        }}
      >
        <Box sx={{padding: '8px'}}>
          <Typography
            sx={{
              fontSize: {xs: '20px', md: '22px', lg: '24px'},
              marginBottom: '20px',
              color: color,
              fontFamily: 'Satoshi700 !important',
              lineHeight: '1.3em'
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: {xs: '14px', md: '15px', lg: '16px'},
              color: color,
              fontFamily: '"Inter", sans-serif  !important',
              fontWeight: '300',
              lineHeight: '1.5em'
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
