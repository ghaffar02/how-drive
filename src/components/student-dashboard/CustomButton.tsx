import localFont from '@/utils/themes';
import {Button, ButtonProps} from '@mui/material';
import {SxProps, Theme} from '@mui/material/styles';

interface CustomButtonProps extends ButtonProps {
  label: string;
  bgColor?: string;
  hoverColor?: string;
  activeColor?: string;
  hoverTextcolor?: string;
  sx?: SxProps<Theme>;
}

export default function CustomButton({
  label,
  bgColor = '#4611f5',
  hoverColor = '#300ca8',
  activeColor = '#1A065C',
  hoverTextcolor = '#fff',

  sx = {},
  ...rest
}: CustomButtonProps) {
  return (
    <Button
      variant="contained"
      disableRipple
      sx={{
        // maxWidth: '93px',
        // width: '100%',
        background: bgColor,
        textTransform: 'capitalize',
        padding: '8px 12px',
        fontSize: {xs: '12px', sm: '13px', md: '14px'},
        borderRadius: '10px',
        fontFamily: '"Inter", sans-serif !important',
        fontWeight: '400',
        boxShadow: '0px 0px 0px #000',
        '&:hover': {
          background: hoverColor,
          color: hoverTextcolor
        },
        '&:active': {
          background: activeColor,
          color: hoverTextcolor
        },
        ...sx
      }}
      {...rest}
    >
      {label}
    </Button>
  );
}
