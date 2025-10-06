import {Box, MenuItem, TextField, Typography} from '@mui/material';
import {ReactNode, useState} from 'react';

import localFont from '@/utils/themes';
import tick from '@/assets/svgs/dashboard-student/send.svg';
import cross from '@/assets/svgs/dashboard-student/btncross.svg';
import CustomButton from '@/components/student-dashboard/CustomButton';
import CustomTextField from '@/components/student-dashboard/InputField';

interface CustomCardProps {
  children?: ReactNode;
  padding?: number | string;
  radius?: number | string;
  bgColor?: string;
  text?: string;
  onClose?: () => void;
}

export default function LeftSideDropDown({
  onClose,
  padding = '16px',
  radius = '10px'
}: CustomCardProps) {
  const [selectedCategory, setSelectedCategory] = useState('');
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

        gap: '24px',
        borderRadius: radius,

        border: '1px solid rgb(255, 255, 255)',
        backgroundColor: '#f0f0fa99',
        backdropFilter: 'blur(10px)',
        // borderRadius: "12px",
        boxShadow: `
    0px 0px 0px 1px rgb(255, 255, 255),
    0px 1px 0px 0px rgba(0, 0, 0, 0.25),
    0px 1px 1px 0px rgba(0, 0, 0, 0.25)
  `
      }}
    >
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
            textAlign: 'left'
          }}
        >
          To:
          {/* {t('lable1')} */}
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
          // error={!!errors.category}
          // helperText={errors.category?.message}
          sx={{
            background: '#ffffff99',
            height: 40,
            // maxWidth: {lg: '402px'},
            width: '100%',

            borderRadius: '12px',
            '& .MuiInputBase-root': {
              height: '100%',
              fontSize: '14px',
              padding: '12px',
              boxShadow:
                '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none !important'
            },
            '& fieldset': {
              borderColor: '#E2E8F0'
            },
            '& .MuiSelect-select': {
              padding: 0,
              fontSize: '14px',
              color: selectedCategory ? '#aaa' : '#9ca3af'
            }
          }}
        >
          <MenuItem value="" disabled>
            select....
            {/* {t('option1')}... */}
          </MenuItem>
          <MenuItem value="malfunction">Malfunction</MenuItem>
          <MenuItem value="question">Question</MenuItem>
        </TextField>
      </Box>
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
          Topic:
        </Typography>
        <CustomTextField
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
          Message:
        </Typography>

        <TextField
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          sx={{
            '& .MuiInputBase-root': {
              borderRadius: '12px',
              background: '#ffffff99',
              boxShadow:
                '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)',
              height: '100%',
              fontSize: '14px',
              padding: '12px'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none'
              // borderColor: 'rgba(255, 255, 0, 1)'
            },
            '& fieldset': {
              borderColor: ' #e2e8f00a'
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
            textTransform: 'capitalize',
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          upload file:
        </Typography>

        <TextField
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          sx={{
            '& .MuiInputBase-root': {
              borderRadius: '12px',
              background: '#ffffff99',
              boxShadow:
                '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)',
              height: '100%',
              fontSize: '14px',
              padding: '12px'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none'
              // borderColor: 'rgba(255, 255, 0, 1)'
            },
            '& fieldset': {
              borderColor: ' #e2e8f00a'
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
          label="cancel"
          bgColor="rgb(220, 38, 38)"
          hoverColor="#991919"
          hoverTextcolor="#fff"
          imgSrc={cross}
          sx={{
            border: '1px solid #a1a1aaff',
            // color: '#000',
            gap: '8px',
            maxWidth: '122px',
            width: '100%',
            justifyContent: 'start'
          }}
        />
        <CustomButton
          label="send"
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
