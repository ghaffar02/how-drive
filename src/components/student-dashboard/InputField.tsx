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
  bgColor = '#f8fafcff',
  borderColor = '#E2E8F0',
  hoverBorderColor = '#3058ff',
  radius = '8px',
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
        pr: '1px',

        '& .MuiOutlinedInput-root': {
          background: bgColor,
          borderRadius: radius,
          boxShadow:
            '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)',

          '& .MuiOutlinedInput-input': {
            padding: '12px',
            height: '16px',
            fontSize: '14px',
            fontFamily: '"Inter", sans-serif !important',

            '&::placeholder': {
              color: '#999',
              lineHeight: '14px !important',
              opacity: 1
            }
          },

          // Default border
          '& fieldset': {
            borderColor: borderColor
          },

          // Disable hover color change (same as default)
          '&:hover fieldset': {
            borderColor: borderColor
          },

          // Active (focused) border color
          '&.Mui-focused fieldset': {
            borderColor: hoverBorderColor,
            borderWidth: '1.5px'
          }
        },
        ...sx
      }}
    />
  );
}
