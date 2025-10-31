import {Box, Typography} from '@mui/material';
import tick from '@/assets/svgs/dashboard-student/tick.svg';
import cross from '@/assets/svgs/dashboard-student/btncross.svg';
import localFont from '@/utils/themes';
import CustomButton from '@/components/student-dashboard/CustomButton';
import {useTranslations} from 'next-intl';
interface CustomCardProps {
  text?: string;
  onClose?: () => void;
}

export default function DrivinglicenseDropdown({
  onClose,

  text
}: CustomCardProps) {
  const t = useTranslations('SchoolDashboard.Drivers.DriverDetailMessages');
  return (
    <Box
      onClick={onClose}
      sx={{
        width: '100%',
        maxWidth: {xs: '300px'},
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px',

        gap: '24px'
        // borderRadius: radius
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column'},
          gap: {xs: '4px'},
          alignItems: 'start',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter14,
            fontWeight: 500,
            fontFamily: '"Inter", sans-serif !important',
            textAlign: 'center',
            color: '#4A5568'
          }}
        >
          {text}
        </Typography>
      </Box>

      <Box
        sx={{
          width: {xs: '100%'},
          p: '8px',
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <CustomButton
          onClick={onClose}
          label={t('btn')}
          bgColor="rgb(220, 38, 38)"
          hoverColor="rgb(135,25,25)"
          activeColor="rgb(82,82,91)"
          hoverTextcolor="#fff"
          imgSrc={cross}
          sx={{
            gap: '8px',
            maxWidth: '80px',
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
            maxWidth: '80px',
            width: '100%',
            justifyContent: 'start'
          }}
          onClick={onClose}
        />
      </Box>
    </Box>
  );
}
