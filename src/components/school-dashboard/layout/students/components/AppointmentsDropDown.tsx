import {Box, MenuItem, TextField, Typography} from '@mui/material';
import {ReactNode, useState} from 'react';

import localFont from '@/utils/themes';
import cross from '@/assets/svgs/dashboard-student/addicon.svg';
import CustomButton from '@/components/student-dashboard/CustomButton';

interface CustomCardProps {
  children?: ReactNode;
  padding?: number | string;

  bgColor?: string;
  text?: string;
  onClose?: () => void;
}

export default function AppointmentsDropDown({
  onClose,
  padding = '16px'
}: CustomCardProps) {
  const [selectedCategory, setSelectedCategory] = useState('');
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
          Category
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
            maxWidth: {lg: '402px'},
            width: '100%',

            borderRadius: '8px',
            '& .MuiInputBase-root': {
              height: '100%',
              fontSize: '14px',
              padding: '12px',
              borderRadius: '12px',
              boxShadow:
                '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none !important'
            },
            '& fieldset': {
              borderColor: '#e2e8f00a'
            },
            '& .MuiSelect-select': {
              padding: 0,
              fontSize: '16px',
              color: selectedCategory ? '#000' : '#aaa'
            }
          }}
        >
          <MenuItem value="" disabled>
            select...
          </MenuItem>
          <MenuItem value="malfunction">Malfunction</MenuItem>
          <MenuItem value="malfunction">Malfunction</MenuItem>
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
          Day
        </Typography>
        <TextField
          type="date"
          id="appt"
          name="appt"
          sx={{
            width: '100%',
            height: '40px',
            borderRadius: '10px',
            '& .MuiInputBase-root': {
              background: '#ffffff',
              height: '100%',
              // width: '100%',
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

            '& .MuiInputBase-input': {
              padding: 0,
              fontSize: '14px',
              fontFamily: '"Inter", sans-serif !important'
            },
            '&:hover fieldset': {
              // borderColor: 'transparent !important'
            },
            '& .MuiInputLabel-root': {
              top: '-6px',
              fontSize: '14px',
              fontFamily: '"Inter", sans-serif !important'
            },
            '& .MuiInputLabel-shrink': {
              top: '0px'
            }
          }}
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
          Begin
        </Typography>
        <TextField
          type="time"
          id="appt"
          name="appt"
          sx={{
            width: '100%',
            height: '40px',
            borderRadius: '10px',
            '& .MuiInputBase-root': {
              background: '#ffffff',
              height: '100%',
              // width: '100%',
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

            '& .MuiInputBase-input': {
              padding: 0,
              fontSize: '14px',
              fontFamily: '"Inter", sans-serif !important'
            },
            '&:hover fieldset': {
              // borderColor: 'transparent !important'
            },
            '& .MuiInputLabel-root': {
              top: '-6px',
              fontSize: '14px',
              fontFamily: '"Inter", sans-serif !important'
            },
            '& .MuiInputLabel-shrink': {
              top: '0px'
            }
          }}
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
          End
          <TextField
            type="time"
            id="appt"
            name="appt"
            sx={{
              width: '100%',
              height: '40px',
              borderRadius: '10px',
              '& .MuiInputBase-root': {
                background: '#ffffff',
                height: '100%',
                // width: '100%',
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

              '& .MuiInputBase-input': {
                padding: 0,
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important'
              },
              '&:hover fieldset': {
                // borderColor: 'transparent !important'
              },
              '& .MuiInputLabel-root': {
                top: '-6px',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important'
              },
              '& .MuiInputLabel-shrink': {
                top: '0px'
              }
            }}
          />
        </Typography>
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
          label="Add appointment"
          imgSrc={cross}
          sx={{
            gap: '8px',
            maxWidth: '172px',
            width: '100%',
            justifyContent: 'start'
          }}
        />
      </Box>
    </Box>
  );
}
