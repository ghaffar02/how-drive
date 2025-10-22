import {Box, Typography} from '@mui/material';
import tick from '@/assets/svgs/dashboard-student/tick.svg';
import cross from '@/assets/svgs/dashboard-student/btncross.svg';
import localFont from '@/utils/themes';
import CustomButton from '@/components/student-dashboard/CustomButton';
// import CustomTextField from '@/components/school-dashboard/InputField';
import MiniFramerCalendar from '../../calander/components/MiniFramerCalendar';
import arrowIcon from '@/assets/svgs/dashboard-student/arrow.svg';

import CustomTextField from '@/components/school-dashboard/InputField';
import Image from 'next/image';
interface CustomCardProps {
  text?: string;
  onClose?: () => void;
}

export default function TheoryexamDropDown({
  onClose,

  text
}: CustomCardProps) {
  return (
    <Box
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
            fontWeight: 400,
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
          Day
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
          time
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
          <CustomTextField
            type="time"
            sx={{
              '& .MuiInputBase-root': {
                background: '#ffffff',
                height: '100%',
                fontSize: '14px',
                color: '#000000',
                padding: '12px',
                borderRadius: '10px',
                fontFamily: '"Inter", sans-serif !important'
              }
            }}
          />
          <Image src={arrowIcon} alt="arrowIcon" height={14} width={14} />
          <CustomTextField
            type="time"
            sx={{
              '& .MuiInputBase-root': {
                background: '#ffffff',
                height: '100%',
                fontSize: '14px',
                color: '#000000',
                padding: '12px',
                borderRadius: '10px',
                fontFamily: '"Inter", sans-serif !important'
              }
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: {xs: '100%'},

          p: '8px 0px',
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <CustomButton
          onClick={onClose}
          label="Not registered"
          bgColor="rgb(220, 38, 38)"
          hoverColor="#991919"
          hoverTextcolor="#fff"
          imgSrc={cross}
          sx={{
            gap: '7px',
            maxWidth: '182px',
            width: '100%',
            justifyContent: 'start'
          }}
        />
        <CustomButton
          label="seve"
          bgColor="#0D9488"
          hoverColor="#0C5C72"
          imgSrc={tick}
          sx={{
            gap: '8px',
            maxWidth: '99px',
            width: '100%',
            justifyContent: 'start'
          }}
          onClick={onClose}
        />
      </Box>
    </Box>
  );
}
