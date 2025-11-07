import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import Image, {StaticImageData} from 'next/image';
import React from 'react';
import {usePathname} from 'next/navigation';

type ProfileProps = {
  students: number;
  title: string;
  imgSrc?: StaticImageData | string;
  progressBar?: boolean;
  activePercentage?: number;
  iconBg?: boolean;
};

export default function ProfileCard({
  students,
  title,
  imgSrc,
  progressBar = false,
  activePercentage,
  iconBg
}: ProfileProps) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const value1 = activePercentage || 0;
  const value2 = 100 - value1;

  const size = 85;
  const strokeWidth = 7;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset1 = circumference * (1 - value1 / 100);
  const offset2 = circumference * (1 - value2 / 100);
  const formatter = new Intl.NumberFormat(locale === 'de' ? 'de-DE' : 'en-US');
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        border: '1px solid #fff',
        borderRadius: '18px',
        padding: {xs: '16px', md: '24px'},
        background: '#ffffffbf',
        boxShadow:
          '0px 0px 0px 1px #ffffff, 0px 1px 0px 0px rgba(0,0,0,0.25), 0px 1px 1px 0px rgba(0,0,0,0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10px'
      }}
    >
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <Typography sx={{...localFont.inter24, fontWeight: '500'}}>
          {/* {students} */}
          {formatter.format(students)}
        </Typography>
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", sans-serif !important',
            fontWeight: '300'
          }}
        >
          {title}
        </Typography>
      </Box>

      {progressBar ? (
        <Box sx={{position: 'relative', width: size, height: size}}>
          <svg width={size} height={size}>
            {/* Background */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#eee"
              strokeWidth={strokeWidth}
              fill="none"
            />

            {/* Clockwise (Green) */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#1a3478"
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset2} //this allows you see the part according to value
              strokeLinecap="butt"
              style={{
                transition: 'stroke-dashoffset 1s ease-out',
                transform: 'rotate(-90deg)',
                transformOrigin: '50% 50%'
              }}
            />

            {/* Anti-clockwise (Purple) */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#00bcd1"
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset1} //this allows you see the part according to value
              strokeLinecap="butt"
              style={{
                transition: 'stroke-dashoffset 1s ease-out',
                transform: 'rotate(90deg) scaleX(-1)',
                transformOrigin: '50% 50%'
              }}
            />
          </svg>

          <Typography
            sx={{
              position: 'absolute',
              top: '25%',
              left: '20%',
              //   transform: 'translate(-50%, -50%)',
              fontSize: '11px',
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: 500,
              color: '#00bcd1'
            }}
          >
            {value1}%
          </Typography>
          <Typography
            sx={{
              position: 'absolute',
              bottom: '25%',
              right: '20%',
              //   transform: 'translate(-50%, -50%)',
              fontFamily: '"Inter", sans-serif !important',
              fontSize: '11px',
              fontWeight: 500,
              color: '#1a3478'
            }}
          >
            {value2}%
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            height: '60px',
            width: '60px',
            display: {xs: 'flex', md: 'none', lg: 'flex'},
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            background: iconBg ? 'rgba(37,99,235,0.1)' : '#00bcd11a'
          }}
        >
          {imgSrc && (
            <Image src={imgSrc} alt="profileIcon" height={28} width={28} />
          )}
        </Box>
      )}
    </Box>
  );
}
