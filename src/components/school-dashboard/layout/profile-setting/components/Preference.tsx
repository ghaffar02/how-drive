import localFont from '@/utils/themes';
import {Box, MenuItem, TextField, Typography} from '@mui/material';
import {ToggleSwitch} from './ToggleSwitch';
import {useTranslations} from 'next-intl';
import {useState} from 'react';
import GradientDivider from '../GradientDivider';
import CustomButton from '@/components/school-dashboard/CustomButton';

// const formFields = ['Current password', 'New password', 'repeat password'];
export default function Preference() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const t = useTranslations('Dashboard.Settings.RightSide.Preferen');

  return (
    <Box
      sx={{
        width: '100%',
        // height: '100%',
        // mt: '32px',
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
      <GradientDivider />

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
              {t('lable1')}
            </Typography>

            <TextField
              select
              fullWidth
              variant="outlined"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              SelectProps={{
                displayEmpty: true
              }}
              sx={{
                background: '#ffffffff',
                height: 40,
                maxWidth: {lg: '402px'},
                width: '100%',

                borderRadius: '8px',
                '& .MuiInputBase-root': {
                  height: '100%',
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

                // '&:hover .MuiOutlinedInput-notchedOutline': {
                //   borderColor: '#82828210'
                // },
                '& .MuiSelect-select': {
                  padding: 0,
                  fontSize: '16px',
                  color: selectedCategory ? '#000' : '#aaa'
                }
              }}
            >
              <MenuItem value="" disabled>
                {t('option1')}...
              </MenuItem>
              <MenuItem value="german">Deutsch</MenuItem>
              <MenuItem value="english">English</MenuItem>
            </TextField>
          </Box>
        </Box>
      </Box>
      <GradientDivider />

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
          {t('heading3')}
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
              {t('lable2')}
            </Typography>

            <ToggleSwitch />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
