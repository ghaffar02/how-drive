'use clients';

import {Box, TextField, Typography} from '@mui/material';
import tick from '@/assets/svgs/dashboard-student/send.svg';

import localFont from '@/utils/themes';
import CustomButton from '@/components/student-dashboard/CustomButton';
import CustomTextField from '@/components/school-dashboard/InputField';
import {useTranslations} from 'next-intl';
import {useState} from 'react';
interface CustomCardProps {
  onClose?: () => void;
}

export default function MessagesDropDown({onClose}: CustomCardProps) {
  const handleContainerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const t = useTranslations('SchoolDashboard.MessageLesson');

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px',

        gap: '24px'
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

            fontFamily: '"Inter", sans-serif !important',
            fontWeight: 400,
            textAlign: 'left'
          }}
        >
          {t('messLable1')}
        </Typography>

        <CustomTextField />
      </Box>
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

            fontFamily: '"Inter", sans-serif !important',
            fontWeight: 400,
            textAlign: 'left'
          }}
        >
          {t('messLable2')}
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
              // boxShadow:
              //   '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)',
              height: '100%',
              fontSize: '14px',
              padding: '12px'
            },

            '& .MuiInputBase-input': {
              padding: 0,
              fontSize: '14px'
            }
          }}
        />
      </Box>
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

            fontFamily: '"Inter", sans-serif !important',
            fontWeight: 400,
            textAlign: 'left'
          }}
        >
          {t('messLable3')}
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
          label={t('messBtn')}
          imgSrc={tick}
          sx={{
            gap: '8px',
            maxWidth: '174px',
            width: '100%',
            justifyContent: 'start',
            textTransform: 'none'
          }}
          onClick={onClose}
        />
      </Box>
    </Box>
  );
}
