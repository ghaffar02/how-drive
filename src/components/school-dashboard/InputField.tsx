import {TextField} from '@mui/material';
import {SxProps, Theme} from '@mui/material/styles';

interface CustomTextFieldProps {
  labal?: string;
  sx?: SxProps<Theme>;
  type?: string;
  name?: string;
  id?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function CustomTextField({
  labal,
  sx = {},
  type,
  name,
  id,
  disabled = false,
  onClick,
  ...rest
}: CustomTextFieldProps) {
  // ✅ Prevent negative numbers
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'number' && Number(event.target.value) < 0) {
      event.target.value = '0';
    }
  };

  return (
    <TextField
      type={type}
      id={id}
      name={name}
      placeholder={labal}
      disabled={disabled}
      onClick={onClick}
      onInput={handleInput}
      {...rest}
      sx={{
        width: '100%',
        height: '40px',
        borderRadius: '10px',
        '& .MuiInputBase-root': {
          background: '#ffffff',
          height: '100%',
          fontSize: '14px',
          color: '#000000',
          padding: '12px',
          borderRadius: '10px',
          fontFamily: '"Inter", sans-serif !important'
        },

        // for date/time pickers (make icon grey)
        ...(type !== 'number' && {
          [`& input[type="${type}"]::-webkit-calendar-picker-indicator`]: {
            ...(type === 'time'
              ? {
                  opacity: 0,
                  width: '20%',
                  cursor: 'pointer'
                }
              : {
                  filter:
                    'invert(36%) sepia(88%) saturate(23%) hue-rotate(180deg)',
                  cursor: 'pointer'
                })
          }
        }),

        '& .MuiOutlinedInput-notchedOutline': {
          borderRadius: '10px'
        },

        '& .MuiInputBase-input': {
          padding: 0,
          fontSize: '14px',
          fontFamily: '"Inter", sans-serif !important',
          color: '#000000'
        },

        '&::placeholder': {
          color: '#999999'
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
