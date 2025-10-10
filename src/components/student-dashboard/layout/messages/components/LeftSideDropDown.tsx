import {Box, MenuItem, TextField, Typography} from '@mui/material';
import {ReactNode, useState} from 'react';

import localFont from '@/utils/themes';
import tick from '@/assets/svgs/dashboard-student/send.svg';
import cross from '@/assets/svgs/dashboard-student/btncross.svg';
import CustomButton from '@/components/student-dashboard/CustomButton';
import CustomTextField from '@/components/student-dashboard/InputField';
import {useTranslations} from 'next-intl';

interface CustomCardProps {
  children?: ReactNode;
  padding?: number | string;

  bgColor?: string;
  text?: string;
  onClose?: () => void;
}

export default function LeftSideDropDown({
  onClose,
  padding = '16px'
}: CustomCardProps) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const t = useTranslations('Dashboard.Messages.formDropDown');
  const handleContainerClick = (event: React.MouseEvent) => {
    // Yeh prevent karega ke andar ke elements par click karne se onClose trigger na ho
    event.stopPropagation();
  };

  return (
    <Box
      onClick={onClose}
      sx={{
        width: '100%',
        // maxWidth: {xs: '323px', sm: '333px'},
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding,

        gap: '24px'
        // borderRadius: radius
      }}
    >
      <Box
        onClick={handleContainerClick}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column'},
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
          {t('label1')}
        </Typography>

        <TextField
          select
          fullWidth
          variant="outlined"
          value={selectedCategory} // e.g. from useState
          onChange={(e) => setSelectedCategory(e.target.value)}
          SelectProps={{
            displayEmpty: true
          }}
          sx={{
            height: 40,
            // maxWidth: {lg: '402px'},
            width: '100%',

            '& .MuiInputBase-root': {
              background: '#ffffff',
              borderRadius: '8px',
              height: '100%',
              fontSize: '14px',
              padding: '12px',
              // border: '1px solid  rgba(0, 0, 0, 0.24)'

              boxShadow: '0px 0px 0px 1px #0000000f, 0px 1px 0px #00000011  '
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none !important'
            },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
              {
                border: ' 1px solid #3058ff'
              },
            '& fieldset': {
              borderColor: '#e2e8f010'
            },

            '& .MuiSelect-select': {
              padding: 0,
              fontSize: '14px',
              color: selectedCategory ? '#000' : '#aaa'
            },
            '&.Mui-focused ': {
              borderColor: '#3058ff',
              borderWidth: '1px'
            }
          }}
        >
          <MenuItem value="" disabled>
            {t('placeholder')}
          </MenuItem>

          <MenuItem value="Fahrschule-Mundsburg">Fahrschule Mundsburg</MenuItem>
          <MenuItem value="Fabian-Fahrer">Fabian - Fahrer</MenuItem>
          {/* <MenuItem value="Fahrer 2 - Tom">Fahrer 2 - Tom</MenuItem> */}
        </TextField>
      </Box>
      {/* <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column'},
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
            textAlign: 'left',
            textTransform: 'capitalize'

            // mt: {xs: '8px', lg: '0px'}
          }}
        >
          {t('label2')}
        </Typography>
        <CustomTextField
          // labal={items}
          bgColor="#fff"
          sx={{textAlign: 'end', maxWidth: {lg: '403px'}}}
        />
      </Box> */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column'},
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
            textAlign: 'left',
            textTransform: 'capitalize'

            // mt: {xs: '8px', lg: '0px'}
          }}
        >
          {t('label3')}
        </Typography>
        <CustomTextField
          bgColor="#fff"
          // labal={items}
          sx={{textAlign: 'end', maxWidth: {lg: '403px'}}}
        />
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", sans-serif !important',
            textTransform: 'capitalize'
          }}
        >
          {t('label4')}
        </Typography>

        <TextField
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              background: '#ffffff',
              boxShadow:
                '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)',
              height: '100%',
              fontSize: '14px',
              padding: '12px',

              // Default border (none or light)
              '& fieldset': {
                borderColor: '#e2e8f00a'
              },

              // On hover
              '&:hover fieldset': {
                borderColor: '#e2e8f00a'
              },

              // ✅ On focus
              '&.Mui-focused fieldset': {
                borderColor: '#3850ff',
                borderWidth: '1.5px'
              }
            },

            '& .MuiInputBase-input': {
              padding: 0,
              fontSize: '14px'
            }
          }}
        />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter14,
            textTransform: 'none',
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          {t('label5')}
        </Typography>

        <TextField
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              background: '#ffffff',
              boxShadow:
                '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)',
              height: '100%',
              fontSize: '14px',
              padding: '12px',

              // Default border (none or light)
              '& fieldset': {
                borderColor: '#e2e8f00a'
              },

              // On hover
              '&:hover fieldset': {
                borderColor: '#e2e8f00a'
              },

              // ✅ On focus
              '&.Mui-focused fieldset': {
                borderColor: '#3850ff',
                borderWidth: '1.5px'
              }
            },

            '& .MuiInputBase-input': {
              padding: 0,
              fontSize: '14px'
            }
          }}
        />
      </Box>

      <Box
        sx={{
          width: {xs: '100%'},

          p: '  4px',
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <CustomButton
          label={t('btn')}
          bgColor="rgb(220, 38, 38)"
          hoverColor="#991919"
          hoverTextcolor="#fff"
          imgSrc={cross}
          sx={{
            // border: '1px solid #a1a1aaff',
            // color: '#000',
            gap: '7px',
            maxWidth: '122px',
            width: '100%',
            justifyContent: 'start'
          }}
        />
        <CustomButton
          label={t('btn1')}
          bgColor="#0D9488"
          hoverColor="#0C5C72"
          imgSrc={tick}
          sx={{
            gap: '8px',
            maxWidth: '122px',
            width: '100%',
            justifyContent: 'start'
          }}
        />
      </Box>
    </Box>
  );
}
