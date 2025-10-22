import {Box, Typography} from '@mui/material';
import localFont from '@/utils/themes';
import {useTranslations} from 'next-intl';

interface CustomCardProps {
  onClose?: () => void;
}

export default function MainDropdown({onClose}: CustomCardProps) {
  const t = useTranslations('Dashboard.Settings.RightSide.AccountTab');
  return (
    <Box
      onClick={onClose}
      sx={{
        position: 'relative',
        width: '100%',

        padding: '16px',
        zIndex: 23333
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
        Your driving school profile!
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
        Please fill out the forms on this page. The information you provide here
        will be displayed in your driving school profile on our website. Your
        driving school profile information will then be visible to everyone.
        This is especially helpful for driving students to search for, find, and
        recognize your driving school. You can also complete the form later, but
        your profile will not be visible until the basic information has been
        provided.
      </Typography>

      <Typography
        sx={{
          ...localFont.inter16,
          fontWeight: 500,
          fontFamily: '"Inter", sans-serif !important',
          color: '#4611f5',
          textAlign: 'end '
        }}
      >
        Got it!
      </Typography>
    </Box>
  );
}
