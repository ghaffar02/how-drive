import {Box, Typography} from '@mui/material';
import {ReactNode} from 'react';

import localFont from '@/utils/themes';

import InputField from '@/components/school-dashboard/InputField';
import CustomButton from '@/components/school-dashboard/CustomButton';

import send from '@/assets/svgs/dashboard-student/send.svg';

interface CustomCardProps {
  children?: ReactNode;
  padding?: number | string;

  bgColor?: string;
  text?: string;
  onClose?: () => void;
}

export default function LeftSideDropDown({
  onClose,
  padding = '16px'
}: CustomCardProps) {
  const handleContainerClick = (event: React.MouseEvent) => {
    // Yeh prevent karega ke andar ke elements par click karne se onClose trigger na ho
    event.stopPropagation();
  };

  return (
    <Box
      onClick={onClose}
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding,
        gap: '24px'
      }}
    >
      <Box
        onClick={handleContainerClick}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column'},
          gap: {xs: '24px'},
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter16,
            width: '100%',

            fontFamily: '"Inter", sans-serif !important',
            fontWeight: 400,
            textAlign: 'center'
          }}
        >
          Neue Schüler einladen
        </Typography>
        <Typography
          sx={{
            ...localFont.inter14,
            width: '100%',

            fontFamily: '"Inter", sans-serif !important',
            fontWeight: 400,
            textAlign: 'center'
          }}
        >
          Wir senden eine Einladung an die folgende E-Mail-Adresse. Die
          Einladung muss zunächst angenommen werden, um in dieser Liste zu
          erscheinen.
        </Typography>
        <Box sx={{width: '100%'}}>
          <Typography
            sx={{
              ...localFont.inter14,
              fontFamily: '"Inter", sans-serif !important',
              mb: '6px'
            }}
          >
            E-Mail-Adresse
          </Typography>
          <InputField />
        </Box>
        <CustomButton
          label="Einladung senden"
          imgSrc={send}
          bgColor="#4611f5"
          hoverColor="rgb(48,12,168)"
          sx={{gap: '8px'}}
        />
      </Box>
    </Box>
  );
}
