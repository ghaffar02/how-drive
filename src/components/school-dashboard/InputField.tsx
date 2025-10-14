import {TextField} from '@mui/material';
import {SxProps, Theme} from '@mui/material/styles';

interface CustomTextFieldProps {
  bgColor?: string;
  borderColor?: string;
  hoverBorderColor?: string;
  radius?: string | number;
  labal?: string;
  sx?: SxProps<Theme>;
}

export default function CustomTextField({
  labal,
  sx = {},
  ...rest
}: CustomTextFieldProps) {
  return (
    <TextField
      placeholder={labal}
      {...rest}
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
        '&:hover fieldset': {},
        '& .MuiInputLabel-root': {
          top: '-6px',
          fontSize: '14px',
          fontFamily: '"Inter", sans-serif !important'
        },
        '& .MuiInputLabel-shrink': {
          top: '0px'
        },
        ...sx
      }}
    />
  );
}
