import {Box, TextField, Typography} from '@mui/material';
import {ReactNode} from 'react';
import tick from '@/assets/svgs/dashboard-student/tick.svg';
import cross from '@/assets/svgs/dashboard-student/btncross.svg';
import localFont from '@/utils/themes';
import CustomButton from '@/components/student-dashboard/CustomButton';
interface CustomCardProps {
  children?: ReactNode;
  padding?: number | string;

  bgColor?: string;
  text?: string;
  onClose?: () => void;
}

export default function TheoryexamDropDown({
  onClose,
  padding = '16px',
  text
}: CustomCardProps) {
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
        padding,

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
        <TextField
          type="date"
          id="appt"
          name="appt"
          sx={{
            width: '100%',
            height: '40px',
            borderRadius: '10px',
            '& .MuiInputBase-root': {
              background: '#ffffff',
              height: '100%',
              // width: '100%',
              fontSize: '14px',
              padding: '12px',
              // color: 'red',
              borderRadius: '10px',
              fontFamily: '"Inter", sans-serif !important',
              boxShadow:
                '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: '10px'
            },

            '& .MuiInputBase-input': {
              padding: 0,
              fontSize: '14px',
              fontFamily: '"Inter", sans-serif !important'
            },
            '&:hover fieldset': {
              // borderColor: 'transparent !important'
            },
            '& .MuiInputLabel-root': {
              top: '-6px',
              fontSize: '14px',
              fontFamily: '"Inter", sans-serif !important'
            },
            '& .MuiInputLabel-shrink': {
              top: '0px'
            }
          }}
        />
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
        <TextField
          type="time"
          id="appt"
          name="appt"
          sx={{
            width: '100%',
            height: '40px',
            borderRadius: '10px',
            '& .MuiInputBase-root': {
              background: '#ffffff',
              height: '100%',
              // width: '100%',
              fontSize: '14px',
              padding: '12px',
              borderRadius: '10px',
              fontFamily: '"Inter", sans-serif !important',
              boxShadow:
                '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: '10px'
            },

            '& .MuiInputBase-input': {
              padding: 0,
              fontSize: '14px',
              fontFamily: '"Inter", sans-serif !important'
            },
            '&:hover fieldset': {
              // borderColor: 'transparent !important'
            },
            '& .MuiInputLabel-root': {
              top: '-6px',
              fontSize: '14px',
              fontFamily: '"Inter", sans-serif !important'
            },
            '& .MuiInputLabel-shrink': {
              top: '0px'
            }
          }}
        />
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
