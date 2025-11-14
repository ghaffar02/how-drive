import {Box, Typography} from '@mui/material';
import tick from '@/assets/svgs/dashboard-student/tick.svg';
import cross from '@/assets/svgs/dashboard-student/btncross.svg';
import localFont from '@/utils/themes';
import CustomButton from '@/components/student-dashboard/CustomButton';
// import CustomTextField from '@/components/school-dashboard/InputField';
import MiniFramerCalendar from '../../calander/components/MiniFramerCalendar';
import arrowIcon from '@/assets/svgs/dashboard-student/arrow.svg';
import {useTranslations} from 'next-intl';

import Image from 'next/image';
import TimePickerValue from '../../profile-setting/components/TimePicker';
interface CustomCardProps {
  text?: string;
  onClose?: () => void;
}

export default function TheoryexamDropDown({
  onClose,

  text
}: CustomCardProps) {
  const t = useTranslations('SchoolDashboard.header');
  return (
    <Box
      sx={{
        width: '100%',
        // maxWidth: {xs: '300px'},
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
            width: '100%',

            fontFamily: '"Inter", sans-serif !important',
            fontWeight: 400,
            textAlign: 'left',
            textTransform: 'capitalize'

            // mt: {xs: '8px', lg: '0px'}
          }}
        >
          {t('lable1')}
        </Typography>

        <MiniFramerCalendar />
      </Box>
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
            width: '100%',

            fontFamily: '"Inter", sans-serif !important',
            fontWeight: 400,
            textAlign: 'left',
            textTransform: 'capitalize'

            // mt: {xs: '8px', lg: '0px'}
          }}
        >
          {t('lable2')}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            width: '100%'
            // maxWidth: {md: '100px', lg: '170px'}
          }}
        >
          <TimePickerValue />

          <Image src={arrowIcon} alt="arrowIcon" height={14} width={14} />
          <TimePickerValue />
        </Box>
      </Box>
      <Box
        sx={{
          width: {xs: '100%'},

          textWrap: 'nowrap',

          p: '8px 0px',
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <CustomButton
          onClick={onClose}
          label={t('btn1')}
          bgColor="rgb(220, 38, 38)"
          hoverColor="rgb(135,25,25)"
          activeColor="rgb(82,82,91)"
          hoverTextcolor="#fff"
          imgSrc={cross}
          sx={{
            gap: '7px',
            maxWidth: '232px',
            // textWrap: 'nowrap',
            // fontSize: '12px',
            width: '100%',
            textTransform: 'none',

            justifyContent: 'center'
          }}
        />
        <CustomButton
          label={t('btn2')}
          bgColor="#0D9488"
          hoverColor="rgb(12,93,86)"
          activeColor="rgb(82,82,91)"
          imgSrc={tick}
          sx={{
            gap: '7px',
            maxWidth: '106px',
            width: '100%',
            justifyContent: 'center',
            textTransform: 'none'
          }}
          onClick={onClose}
        />
      </Box>
    </Box>
  );
}
