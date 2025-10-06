import CustomButton from '@/components/student-dashboard/CustomButton';
import localFont from '@/utils/themes';
import {Box, Divider, MenuItem, TextField, Typography} from '@mui/material';
import {ToggleSwitch} from './ToggleSwitch';
import {useTranslations} from 'next-intl';

const formFields = ['Current password', 'New password', 'repeat password'];
export default function Preference() {
  const t = useTranslations('Dashboard.Settings.RightSide.Password');

  return (
    <Box
      sx={{
        width: '100%',
        // height: '100%',
        mt: '32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: '32px'
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column', lg: 'row'},
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{width: '100%', p: '4px'}}>
          <Typography
            sx={{
              ...localFont.inter18,
              fontWeight: 500,
              fontFamily: '"Inter", sans-serif !important'
            }}
          >
            {t('heading1')}
          </Typography>
          <Typography
            sx={{
              ...localFont.inter16,
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: 300
            }}
          >
            {t('description1')}
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            gap: '10px',
            p: '4px',
            alignItems: 'center',
            justifyContent: 'end'
          }}
        >
          <CustomButton
            label={t('btn1')}
            bgColor="rgba(248, 250, 252, 0)"
            hoverTextcolor="#fff"
            sx={{border: '1px solid #a1a1aaff', color: '#000'}}
          />
          <CustomButton label={t('btn2')} sx={{}} />
        </Box>
      </Box>
      <Box width="100%">
        <Divider
          sx={{
            borderImage:
              'linear-gradient(90deg, #E4E4E7 0%, #D4D4D8 50%, #E4E4E7 100%) 1'
          }}
        />
      </Box>

      <Box sx={{width: '100%'}}>
        <Typography
          sx={{
            ...localFont.inter16,
            fontWeight: 500,
            fontFamily: '"Inter", sans-serif !important',
            mb: '32px',
            p: '4px'
          }}
        >
          {t('heading2')}
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: {xs: 'column'},
            gap: '32px',
            alignItems: 'start',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: {xs: 'column', lg: 'row'},
              gap: {xs: '8px'},
              alignItems: 'start',
              justifyContent: 'space-between'
            }}
          >
            <Typography
              sx={{
                ...localFont.inter14,
                width: '100%',
                maxWidth: '400px',
                fontFamily: '"Inter", sans-serif !important',
                fontWeight: 400,
                textAlign: 'left'
              }}
            >
              language
            </Typography>

            <TextField
              select
              fullWidth
              variant="outlined"
              // error={!!errors.category}
              // helperText={errors.category?.message}
              sx={{
                background: '#ffffff99',
                height: 40,
                maxWidth: '402px',
                width: '100%',
                borderRadius: '8px',
                '& .MuiInputBase-root': {
                  height: '100%',
                  fontSize: '14px',
                  padding: '12px'
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  border: 'none'
                },
                '& .MuiSelect-select': {
                  padding: 0,
                  fontSize: '14px'
                }
              }}
            >
              <MenuItem value="" disabled>
                Select...
              </MenuItem>
              <MenuItem value="malfunction">Malfunction</MenuItem>
              <MenuItem value="question">Question</MenuItem>
            </TextField>
          </Box>
        </Box>
      </Box>
      <Box width="100%">
        <Divider
          sx={{
            borderImage:
              'linear-gradient(90deg, #E4E4E7 0%, #D4D4D8 50%, #E4E4E7 100%) 1'
          }}
        />
      </Box>

      <Box sx={{width: '100%'}}>
        <Typography
          sx={{
            ...localFont.inter16,
            fontWeight: 500,
            fontFamily: '"Inter", sans-serif !important',
            mb: '32px',
            p: '4px'
          }}
        >
          {t('heading2')}
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: {xs: 'column'},
            gap: '32px',
            alignItems: 'start',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: {xs: 'row', lg: 'row'},
              gap: {xs: '8px'},
              alignItems: 'start',
              justifyContent: 'space-between'
            }}
          >
            <Typography
              sx={{
                ...localFont.inter14,
                width: '100%',
                maxWidth: '400px',
                fontFamily: '"Inter", sans-serif !important',
                fontWeight: 400,
                textAlign: 'left'

                // mt: {xs: '8px', lg: '0px'}
              }}
            >
              language
            </Typography>

            <ToggleSwitch defaultChecked={false} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
