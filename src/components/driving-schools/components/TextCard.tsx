import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import Image, {StaticImageData} from 'next/image';
import arrow from '@/assets/svgs/dashboard-student/arrow.svg';
import React from 'react';
type TimeSlot = {
  from: string;
  to: string;
};

type Timing = {
  day: string;
  slots: TimeSlot[];
};

type CardProps = {
  heading?: string;
  description?: string;
  headingSize?: boolean;
  background?: string;
  isbool?: boolean;
  data?: Timing[];
  icon?: StaticImageData | string;
};

export default function TextCard({
  heading,
  icon,
  description,
  headingSize = true,
  isbool,
  background = '#f2f2f2',
  data
}: CardProps) {
  return (
    <Box
      sx={{
        background: background,
        // maxWidth: '100%',
        width: '100%',
        height: {
          xs: data ? '100%' : '164px',
          sm: data ? '100%' : '169px',
          md: data ? '100%' : '171px'
        },
        padding: '24px',
        gap: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          sx={{
            fontSize: headingSize
              ? {xs: '32px', sm: '36px', lg: '48px'}
              : {xs: '20px', sm: '22px', lg: '24px'},
            fontFamily: 'Satoshi700 !important',
            color: '#2563eb'
          }}
        >
          {heading}
        </Typography>
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
      <Box>
        {description && (
          <Typography
            component="div"
            sx={{
              ...localFont.inter18,
              color: '#1A202C',
              fontWeight: '400',
              fontFamily: '"Inter", sans-serif !important'
            }}
            dangerouslySetInnerHTML={{__html: description ?? ''}}
          />
        )}
        {data && (
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column'
              // gap: 1
              // p: 2,
              // bgcolor: '#eef2ff',
              // borderRadius: '8px'
            }}
          >
            {data.map((item) => (
              <Box
                key={item.day}
                sx={{
                  display: 'flex',
                  gap: '10px',
                  height: '36px',
                  alignItems: 'flex-start'
                }}
              >
                {/* Day */}
                <Typography
                  sx={{
                    width: '48px',
                    ...localFont.inter18,
                    color: '#1A202C',
                    fontWeight: '400',
                    fontFamily: '"Inter", sans-serif !important'
                  }}
                >
                  {item.day}:
                </Typography>

                {/* Slots */}
                <Box sx={{display: 'flex', flexWrap: 'wrap', gap: '4px'}}>
                  {item.slots.map((slot, i) => (
                    <Typography
                      key={i}
                      sx={{
                        ...localFont.inter18,
                        color: '#1A202C',
                        fontWeight: '400',
                        fontFamily: '"Inter", sans-serif !important'
                      }}
                    >
                      {slot.from === 'Nicht verfügbar' ||
                      slot.from === 'Not available' ? (
                        slot.from
                      ) : (
                        <>
                          {slot.from}
                          <Image
                            src={arrow}
                            alt="arrow"
                            width={16}
                            height={16}
                            style={{margin: '0 4px'}}
                          />
                          {slot.to}
                        </>
                      )}

                      {i !== item.slots.length - 1 ? ' , ' : ''}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
