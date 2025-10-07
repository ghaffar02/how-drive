import {Box, Typography} from '@mui/material';
import {ReactNode} from 'react';
import CustomButton from '../../CustomButton';
import localFont from '@/utils/themes';
import tick from '@/assets/svgs/dashboard-student/tick.svg';
import cross from '@/assets/svgs/dashboard-student/btncross.svg';
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
  const t = useTranslations('Dashboard.Settings.RightSide.AccountTab');
  return (
    <Box
      onClick={onClose}
      sx={{
        position: 'relative',
        width: '100%',
        // maxWidth: {xs: '323px', sm: '333px'},
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding,
        zIndex: 23333,

        gap: '24px'
        //       borderRadius: radius,

        //       border: '1px solid rgb(255, 255, 255)',
        //       backgroundColor: '#f0f0fa99',
        //       backdropFilter: 'blur(15px)',
        //       // borderRadius: "12px",
        //       boxShadow: `
        //   0px 0px 0px 1px rgb(255, 255, 255),
        //   0px 1px 0px 0px rgba(0, 0, 0, 0.25),
        //   0px 1px 1px 0px rgba(0, 0, 0, 0.25)
        // `
      }}
    >
      <Typography
        sx={{
          ...localFont.inter14,
          fontWeight: 500,
          fontFamily: '"Inter", sans-serif !important'
        }}
      >
        {text}
      </Typography>

      <Box
        sx={{
          width: {xs: '100%'},

          p: ' 8px 4px',
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'center'
          // justifyContent: 'space-between'
        }}
      >
        <CustomButton
          label={t('btn6')}
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
          label={t('btn5')}
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
