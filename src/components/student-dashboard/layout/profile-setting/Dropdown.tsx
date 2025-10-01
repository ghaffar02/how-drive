import {Box, Typography} from '@mui/material';
import {ReactNode} from 'react';
import CustomButton from '../../CustomButton';
import localFont from '@/utils/themes';
import tick from '@/assets/svgs/dashboard-student/tick.svg';
import cross from '@/assets/svgs/dashboard-student/btncross.svg';

interface CustomCardProps {
  children?: ReactNode;
  padding?: number | string;
  radius?: number | string;
  bgColor?: string;
  onClose?: () => void;
}

export default function CustomCard({
  onClose,
  padding = '16px',
  radius = '10px',
  bgColor = '#ffffff'
}: CustomCardProps) {
  return (
    <Box
      onClick={onClose}
      sx={{
        width: '100%',
        maxWidth: '324px',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding,
        boxShadow:
          '0px 10px 20px 0px rgba(0, 0, 0, 0.05), 0px 0px 2px 1px rgba(0, 0, 0, 0.05)',
        backgroundColor: bgColor,
        // overflow: 'var(--overflow-clip-fallback, clip)',
        // alignContent: 'center',
        // flexWrap: 'nowrap',
        gap: '16px',
        borderRadius: radius
      }}
    >
      <Typography
        sx={{
          ...localFont.inter14,
          fontWeight: 500,
          fontFamily: '"Inter", sans-serif !important'
        }}
      >
        Do you really want to delete your account?
      </Typography>

      <Box
        sx={{
          width: {xs: '100%'},
          p: '4px',
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'center'
          // justifyContent: 'space-between'
        }}
      >
        <CustomButton
          label="yes"
          bgColor="rgb(220, 38, 38)"
          hoverColor="#991919"
          imgSrc={tick}
          sx={{
            gap: '8px',
            maxWidth: '80px',
            width: '100%',
            justifyContent: 'start'
          }}
        />
        <CustomButton
          label="no"
          bgColor="#71717A"
          hoverTextcolor="#fff"
          hoverColor="rgb(82, 82, 91)"
          imgSrc={cross}
          sx={{
            border: '1px solid #a1a1aaff',
            // color: '#000',
            gap: '8px',
            maxWidth: '80px',
            width: '100%',
            justifyContent: 'start'
          }}
        />
      </Box>
    </Box>
  );
}
