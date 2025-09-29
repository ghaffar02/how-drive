import CustomButton from '@/components/student-dashboard/CustomButton';
import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';

export default function Account() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        gap: '32px'
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{width: '100%'}}>
          <Typography sx={{...localFont.inter18}}>Konto</Typography>
          <Typography sx={{...localFont.inter16}}>
            Persönliche Daten, Konto löschen, etc.
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'end'
          }}
        >
          <CustomButton
            label="Abbrechen"
            bgColor="rgba(248,250,252,0.3)"
            hoverTextcolor="#fff"
            sx={{border: '1px solid #000', color: '#000'}}
          />
          <CustomButton label="Abbrechen" sx={{}} />
        </Box>
      </Box>
    </Box>
  );
}
