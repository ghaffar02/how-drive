import {Box, Typography} from '@mui/material';
import tick from '@/assets/svgs/dashboard-student/addicon.svg';

import localFont from '@/utils/themes';
import CustomButton from '@/components/student-dashboard/CustomButton';
import CustomTextField from '@/components/school-dashboard/InputField';
import {useTranslations} from 'next-intl';
interface CustomCardProps {
  onClose?: () => void;
}

export default function DriveStudentsDropD({onClose}: CustomCardProps) {
  const handleContainerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  const t = useTranslations('SchoolDashboard.Drivers.DriverDetail');

  return (
    <Box
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
          gap: {xs: '8px'},
          alignItems: 'start',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter14,
            width: '100%',

            fontFamily: '"Inter", sans-serif !important',
            fontWeight: 500,
            textAlign: 'left'
          }}
        >
          {t('label')}
        </Typography>

        <CustomTextField />
      </Box>

      <Box
        sx={{
          width: {xs: '100%'},

          p: '  4px',
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <CustomButton
          label={t('btn')}
          imgSrc={tick}
          sx={{
            gap: '8px',
            maxWidth: '204px',
            width: '100%',
            justifyContent: 'start',
            textTransform: 'unset'
          }}
          onClick={onClose}
        />
      </Box>
    </Box>
  );
}
