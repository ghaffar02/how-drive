import {Box, MenuItem, TextField, Typography} from '@mui/material';
import {useState} from 'react';

import localFont from '@/utils/themes';
import tick from '@/assets/svgs/dashboard-student/send.svg';
import cross from '@/assets/svgs/dashboard-student/btncross.svg';
import CustomButton from '@/components/student-dashboard/CustomButton';
import CustomTextField from '@/components/student-dashboard/InputField';
import {useTranslations} from 'next-intl';

interface CustomCardProps {
  onClose?: () => void;
}

export default function LeftSideDropDown({onClose}: CustomCardProps) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const t = useTranslations('Dashboard.Messages.formDropDown');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleContainerClick = (event: React.MouseEvent) => {
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
        padding: '16px',

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
              background: '#ffffff99',
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
            '& fieldset': {
              borderColor: '#e2e8f010'
            },
            '& .MuiSelect-select': {
              padding: 0,
              fontSize: '14px',
              color: selectedCategory ? '#999' : '#999'
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

          <MenuItem value="Fahrschule Mundsburg">Fahrschule Mundsburg</MenuItem>
          <MenuItem value="Fahrer 1 - Fabian">Fahrer 1 - Fabian</MenuItem>
          <MenuItem value="Fahrer 2 - Tom">Fahrer 2 - Tom</MenuItem>
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
          {t('label2')}
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
            '& .MuiInputBase-root': {
              borderRadius: '8px',
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
          {t('label5')}
        </Typography>
        <Box
          sx={{
            maxWidth: {lg: '403px', xs: '100%'},
            width: '100%',
            border: 'none',
            borderRadius: '10px',
            fontSize: '14px',
            padding: '23px ',
            textAlign: 'start',
            background: '#ffffff',
            cursor: 'pointer',
            '&:hover': {
              border: '1px solid black',
              padding: '22px '
            }
          }}
          onClick={() => document.getElementById('fileInput')?.click()}
        >
          <input
            type="file"
            id="fileInput"
            style={{display: 'none'}}
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setSelectedFile(e.target.files[0]);
              }
            }}
          />

          {selectedFile && (
            <Box sx={{mt: 2}}>
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Preview"
                style={{
                  maxWidth: '100px',
                  maxHeight: '100px',
                  borderRadius: '8px',
                  objectFit: 'contain'
                }}
              />
            </Box>
          )}
        </Box>
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
          hoverColor="rgb(135,25,25)"
          activeColor="rgb(82,82,91)"
          hoverTextcolor="#fff"
          imgSrc={cross}
          sx={{
            // border: '1px solid #a1a1aaff',
            // color: '#000',
            gap: '8px',
            maxWidth: '122px',
            width: '100%',
            justifyContent: 'start'
          }}
        />
        <CustomButton
          label={t('btn1')}
          bgColor="#0D9488"
          hoverColor="rgb(12,93,86)"
          activeColor="rgb(82,82,91)"
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
