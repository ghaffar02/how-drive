import {Box, Typography} from '@mui/material';

import localFont from '@/utils/themes';

import InputField from '@/components/school-dashboard/InputField';
import CustomButton from '@/components/school-dashboard/CustomButton';

import send from '@/assets/svgs/dashboard-student/send.svg';
import {useTranslations} from 'next-intl';

interface CustomCardProps {
  onClose?: () => void;
}

export default function LeftSideDropDown({onClose}: CustomCardProps) {
  const handleContainerClick = (event: React.MouseEvent) => {
    // Yeh prevent karega ke andar ke elements par click karne se onClose trigger na ho
    event.stopPropagation();
  };
  const t = useTranslations('SchoolDashboard.studentLeftDD');

  return (
    <Box
      onClick={onClose}
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px',
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
            fontWeight: 500,
            textAlign: 'center'
          }}
        >
          {t('heading')}
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
          {t('des')}
        </Typography>
        <Box sx={{width: '100%'}}>
          <Typography
            sx={{
              ...localFont.inter14,
              fontFamily: '"Inter", sans-serif !important',
              mb: '6px'
            }}
          >
            {t('label')}
          </Typography>
          <InputField />
        </Box>
        <CustomButton
          label={t('btn')}
          imgSrc={send}
          bgColor="#4611f5"
          hoverColor="rgb(48,12,168)"
          sx={{gap: '8px', textTransform: 'unset'}}
        />
      </Box>
    </Box>
  );
}
