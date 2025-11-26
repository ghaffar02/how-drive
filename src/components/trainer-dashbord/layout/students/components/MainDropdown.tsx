import {Box, Typography} from '@mui/material';
import localFont from '@/utils/themes';
import {useTranslations} from 'next-intl';
import CustomButton from '@/components/student-dashboard/CustomButton';
import tick from '@/assets/svgs/dashboard-student/tick.svg';
import cross from '@/assets/svgs/dashboard-student/btncross.svg';

interface CustomCardProps {
  onClose?: () => void;
}

export default function MainDropdown({onClose}: CustomCardProps) {
  const t = useTranslations('SchoolDashboard.studentRightSideDD');

  return (
    <Box
      // onClick={onClose}
      sx={{
        width: '100%'
      }}
    >
      <Typography
        sx={{
          ...localFont.inter18,
          fontWeight: 500,
          color: '#000',
          fontFamily: '"Inter", sans-serif !important',
          textAlign: 'center',
          mb: '10px'
        }}
      >
        {t('heading')}
      </Typography>
      <Typography
        sx={{
          ...localFont.inter16,
          fontWeight: 300,
          fontFamily: '"Inter", sans-serif !important',
          textAlign: 'center',
          color: '#2D3748',
          mb: '48px'
        }}
      >
        {t('des')}
      </Typography>

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
          onClick={onClose}
          label={t('btn2')}
          bgColor="rgb(220, 38, 38)"
          hoverColor="rgb(135,25,25)"
          activeColor="rgb(82,82,91)"
          hoverTextcolor="#fff"
          imgSrc={cross}
          sx={{
            gap: '7px',
            maxWidth: '122px',
            width: '100%',
            justifyContent: 'start'
          }}
        />
        <CustomButton
          label={t('btn1')}
          bgColor="#0D9488"
          hoverColor="rgb(12,93,86)"
          activeColor="rgb(82,82,91)"
          imgSrc={tick}
          sx={{
            gap: '8px',
            maxWidth: '122px',
            width: '100%',
            justifyContent: 'start'
          }}
          onClick={onClose}
        />
      </Box>
    </Box>
  );
}
