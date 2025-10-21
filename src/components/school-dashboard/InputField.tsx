import {TextField} from '@mui/material';
import {SxProps, Theme} from '@mui/material/styles';

interface CustomTextFieldProps {
  labal?: string;
  sx?: SxProps<Theme>;
  type?: string;
  name?: string;
  id?: string;
}

export default function CustomTextField({
  labal,
  sx = {},
  type,
  name,
  id,
  ...rest
}: CustomTextFieldProps) {
  return (
    <TextField
      type={type}
      id={id}
      name={name}
      placeholder={labal}
      {...rest}
      sx={{
        width: '100%',
        height: '40px',
        borderRadius: '10px',
        '& .MuiInputBase-root': {
          // background: '#ffffff',
          height: '100%',
          fontSize: '14px',
          color: '#000000',
          padding: '12px',
          borderRadius: '10px',
          fontFamily: '"Inter", sans-serif !important'
          // boxShadow:
          //   '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
        },

        // for date/time pickers (make icon grey)
        ...(type !== 'number' && {
          [`& input[type="${type}"]::-webkit-calendar-picker-indicator`]: {
            filter: 'invert(36%) sepia(88%) saturate(23%) hue-rotate(180deg)',
            cursor: 'pointer'
          }
        }),

        '& .MuiOutlinedInput-notchedOutline': {
          background: '#ffffff',
          borderRadius: '10px'
        },

        '& .MuiInputBase-input': {
          padding: 0,

          fontSize: '14px',
          fontFamily: '"Inter", sans-serif !important',
          color: '#000000' // 👈 ensure input text is black
        },

        '&::placeholder': {
          color: '#999999' // placeholder color (grey)
        },

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
