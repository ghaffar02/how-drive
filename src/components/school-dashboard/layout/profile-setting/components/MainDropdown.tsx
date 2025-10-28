import {Box, Typography} from '@mui/material';
import localFont from '@/utils/themes';
import {useTranslations} from 'next-intl';

interface CustomCardProps {
  onClose?: () => void;
}

export default function MainDropdown({onClose}: CustomCardProps) {
  const t = useTranslations('SchoolDashboard.Settings.mainDropdown');
  return (
    <Box
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

      <Typography
        onClick={onClose}
        sx={{
          cursor: 'pointer',
          ...localFont.inter16,
          fontWeight: 500,
          fontFamily: '"Inter", sans-serif !important',
          color: '#4611f5',
          textAlign: 'end '
        }}
      >
        {t('title')}
      </Typography>
    </Box>
  );
}
