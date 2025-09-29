import {TextField} from '@mui/material';
import {SxProps, Theme} from '@mui/material/styles';
interface CustomTextFieldProps {
  bgColor?: string;
  borderColor?: string;
  hoverBorderColor?: string;
  radius?: string | number;
  sx?: SxProps<Theme>;
}

export default function CustomTextField({
  bgColor = '#F8FAFC',
  borderColor = '#E2E8F0',
  hoverBorderColor = '#1976d2',
  radius = '8px',
  sx = {},
  ...rest
}: CustomTextFieldProps) {
  return (
    <TextField
      {...rest}
      sx={{
        '& .MuiOutlinedInput-root': {
          background: bgColor,
          borderRadius: radius,
          border: `1px solid ${borderColor}`,
          '& .MuiOutlinedInput-input': {
            padding: '14px 12px',
            fontSize: '14px',
            fontFamily: '"Inter", sans-serif !important',
            color: '#000',
            '&::placeholder': {
              color: '#94A3B8',
              opacity: 1
            }
          },
          '& fieldset': {
            borderColor: borderColor
          },
          '&:hover fieldset': {
            borderColor: hoverBorderColor
          }
        },
        ...sx
      }}
    />
  );
}
