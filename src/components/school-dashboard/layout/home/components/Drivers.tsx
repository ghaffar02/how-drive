import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import addIcon from '@/assets/svgs/circleadd.svg';
import steering from '@/assets/svgs/steering.svg';
import {motion} from 'framer-motion';

type Props = {
  title: string;
  showIcon?: boolean;
  setActiveKey: React.Dispatch<React.SetStateAction<string>>;
};

export default function Drivers({title, showIcon = true, setActiveKey}: Props) {
  const cardArray = [
    {
      name: 'Daniel Mustermann 2',
      drivingClass: 'B17'
    },
    {
      name: 'Daniel Mustermann 5',
      drivingClass: 'B (Umschreiben)'
    },
    {
      name: 'Daniel Mustermann 6',
      drivingClass: 'B'
    },
    {
      name: 'Daniel Mustermann 7',
      drivingClass: 'B (Umschreiben)'
    },
    {
      name: 'Daniel Mustermann 8',
      drivingClass: 'B'
    },
    {
      name: 'Daniel Mustermann 9',
      drivingClass: 'B (Umschreiben)'
    },
    {
      name: 'Daniel Mustermann 9',
      drivingClass: 'B (Umschreiben)'
    },
    {
      name: 'Daniel Mustermann 9',
      drivingClass: 'B (Umschreiben)'
    }
  ];
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        padding: {xs: '16px 0px', md: '24px 0px'},
        border: '1px solid #fff',
        borderRadius: '18px',
        background: '#ffffffbf',
        boxShadow:
          '0px 0px 0px 1px #fff, 0px 1px 0px 0px rgba(0,0,0,0.25), 0px 1px 1px 0px rgba(0,0,0,0.25)',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: {xs: '0px 16px', md: '0px 24px'}
        }}
      >
        <Typography
          sx={{
            ...localFont.inter16,
            fontFamily: '"Inter", sans-serif !important',
            fontWeight: '500'
          }}
        >
          {title}
        </Typography>
        {showIcon && (
          <Box sx={{height: '24px', width: '24px'}}>
            <Image
              src={addIcon}
              alt="addIcon"
              style={{height: '100%', width: '100%'}}
            />
          </Box>
        )}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          overflow: 'hidden auto',
          padding: {xs: '4px 16px', md: '4px 24px'},
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        {cardArray.map((data, i) => (
          <Card
            setActiveKey={setActiveKey}
            key={i}
            name={data.name}
            drivingClass={data.drivingClass}
          />
        ))}
      </Box>
    </Box>
  );
}

type CardProps = {
  name: string;
  drivingClass: string;
  setActiveKey: React.Dispatch<React.SetStateAction<string>>;
};

function Card({name, drivingClass, setActiveKey}: CardProps) {
  return (
    <Box
      component={motion.div}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.4, delay: 0.4, ease: 'easeInOut'}}
      onClick={(e) => {
        e.stopPropagation();
        setActiveKey('7');
      }}
      sx={{
        width: '100%',
        background: '#ffffff99',
        padding: '8px',
        display: 'flex',
        gap: '8px',
        borderRadius: '8px',
        boxShadow: '0px 0px 2px 0px rgb(212,212,216)',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '0px 0px 2px 0px rgb(70,17,245)',
          background: 'rgba(255,255,255,0.85)'
        }
      }}
    >
      <Box
        sx={{
          height: '40px',
          minWidth: '40px',
          background: '#06b6d41a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px'
        }}
      >
        <Image src={steering} alt="steering" height={24} width={24} />
      </Box>
      <Box sx={{width: '100%'}}>
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontSize: {xs: '10.8px', md: '11.8px', lg: '12.8px'},
            fontFamily: '"Inter", sans-serif !important',
            color: '#718096',
            textAlign: 'right'
          }}
        >
          {drivingClass}
        </Typography>
      </Box>
    </Box>
  );
}
