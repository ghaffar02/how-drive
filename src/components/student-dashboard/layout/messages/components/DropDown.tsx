import {Box, Typography} from '@mui/material';
import {ReactNode} from 'react';

import localFont from '@/utils/themes';
import tick from '@/assets/svgs/dashboard-student/tick.svg';
import cross from '@/assets/svgs/dashboard-student/btncross.svg';
import CustomButton from '@/components/student-dashboard/CustomButton';
import {useTranslations} from 'next-intl';

interface CustomCardProps {
  children?: ReactNode;
  padding?: number | string;
  radius?: number | string;
  bgColor?: string;
  text?: string;
  onClose?: () => void;
}

export default function CustomCard({
  onClose,
  padding = '16px',
  radius = '10px',

  text
}: CustomCardProps) {
  const t = useTranslations('Dashboard.Messages.dropDown');

  return (
    <Box
      onClick={onClose}
      sx={{
        width: '100%',
        // maxWidth: {xs: '323px', sm: '333px'},
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding,

        gap: '24px'
      }}
    >
      <Typography
        sx={{
          ...localFont.inter14,
          fontWeight: 300,
          fontFamily: '"Inter", sans-serif !important',
          textAlign: 'center'
        }}
      >
        {t('des')}
      </Typography>
      <Typography
        sx={{
          ...localFont.inter14,
          fontWeight: 500,
          fontFamily: '"Inter", sans-serif !important',
          textAlign: 'center'
        }}
      >
        {t('title')}
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
          label={t('btn')}
          bgColor="rgb(220, 38, 38)"
          hoverColor="#991919"
          hoverTextcolor="#fff"
          imgSrc={cross}
          sx={{
            // border: '1px solid #a1a1aaff',
            // color: '#000',
            gap: '8px',
            maxWidth: '80px',
            width: '100%',
            justifyContent: 'start'
          }}
        />
        <CustomButton
          label={t('btn1')}
          bgColor="#0D9488"
          hoverColor="#0C5C72"
          imgSrc={tick}
          sx={{
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
