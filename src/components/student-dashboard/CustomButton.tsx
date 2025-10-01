import localFont from '@/utils/themes';
import {Box, Button, ButtonProps} from '@mui/material';
import {SxProps, Theme} from '@mui/material/styles';
import Image, {StaticImageData} from 'next/image';

interface CustomButtonProps extends ButtonProps {
  label: string;
  bgColor?: string;
  hoverColor?: string;
  activeColor?: string;
  hoverTextcolor?: string;
  imgSrc?: StaticImageData | string;
  sx?: SxProps<Theme>;
}

export default function CustomButton({
  label,
  bgColor = '#4611f5',
  hoverColor = '#300ca8',
  activeColor = '#1A065C',
  hoverTextcolor = '#fff',
  imgSrc,

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
          boxShadow: '0px 0px 0px #000',

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
      {imgSrc && (
        <Box sx={{maxWidth: '16px', height: '16px'}}>
          <Image
            src={imgSrc}
            alt="icon"
            style={{width: '100%', height: '100%', objectFit: 'contain'}}
          />
        </Box>
      )}
      {label}
    </Button>
  );
}
