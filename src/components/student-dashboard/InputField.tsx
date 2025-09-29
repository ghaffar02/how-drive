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
  hoverBorderColor = '#1976d2',
  radius = '8px',
  labal,
  sx = {},
  ...rest
}: CustomTextFieldProps) {
  return (
    <TextField
      {...rest}
      sx={{
        maxWidth: '400px',
        width: '100%',

        '& .MuiOutlinedInput-root': {
          background: bgColor,
          borderRadius: radius,
          boxShadow:
            '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)',
          // border: `1px solid ${borderColor}`,
          '& .MuiOutlinedInput-input': {
            padding: '12px',
            fontSize: '12px',
            fontFamily: '"Inter", sans-serif !important',
            color: '#000',
            '&::placeholder': {
              color: '#999999',
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
    >
      {labal}
    </TextField>
  );
}
