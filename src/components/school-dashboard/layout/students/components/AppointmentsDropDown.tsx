import {Box, MenuItem, TextField, Typography} from '@mui/material';
import {ReactNode, useState} from 'react';

import localFont from '@/utils/themes';
import cross from '@/assets/svgs/dashboard-student/btncross.svg';
import CustomButton from '@/components/student-dashboard/CustomButton';
import CustomTextField from '@/components/student-dashboard/InputField';

import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
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
            select ...
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
          Day
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
          Begin
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['TimePicker']} sx={{paddingTop: '0px'}}>
            <TimePicker
              sx={{
                bgcolor: '#ffffff99',
                width: '100%',
                maxWidth: '400px',
                borderRadius: '12px',

                zIndex: 1111,

                // ⏱️ Input base styling
                '& .MuiInputBase-root': {
                  width: '100%',
                  backgroundColor: '#ffffffcc',
                  border: '1px solid #ccc',
                  borderRadius: '12px',
                  paddingRight: '8px'
                },
                '& .MuiInputBase-input': {
                  fontSize: '16px',
                  padding: '4px 8px',
                  borderRadius: '12px'
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none'
                },

                // 📋 Dropdown (selector) styles
                '& .MuiPickersLayout-root': {
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0px 4px 12px rgba(0,0,0,0.2)'
                },
                '& .MuiPickersPopper-root': {
                  zIndex: 9999
                },

                // 🧾 Each list section (Hours, Minutes, AM/PM)
                '& .MuiPickersSectionList-root': {
                  width: '202px',
                  padding: '9px 0',
                  scrollbarWidth: 'none', // For Firefox
                  '&::-webkit-scrollbar': {
                    display: 'none' // ✅ Hide scrollbar
                  },
                  overflowY: 'scroll',
                  scrollBehavior: 'smooth' // ✅ Smooth auto scroll
                },

                // 🕓 Optional: highlight selected time cell
                '& .Mui-selected': {
                  backgroundColor: '#007bff !important',
                  color: '#fff !important',
                  borderRadius: '8px'
                }
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
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
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['TimePicker']} sx={{paddingTop: '0px'}}>
            <TimePicker
              sx={{
                bgcolor: '#ffffff99',
                width: '100%',
                maxWidth: '400px',
                borderRadius: '12px',

                zIndex: 1111,

                '& .MuiPickersSectionList-root': {
                  width: '202px',
                  padding: '9px 0'
                },
                '& .MuiInputBase-root': {
                  width: '100%',
                  // borderRadius: '12px',
                  // borderRadius: '19px',
                  backgroundColor: '#ffffffcc',
                  border: '1px solid #ccc',
                  paddingRight: '8px'
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                  borderRadius: '12px'
                },

                '& .MuiPickersInputBase-root.MuiPickersOutlinedInput-root': {
                  // bgcolor: 'green',
                  borderRadius: '12px'
                },
                '& .MuiInputBase-input': {
                  fontSize: '16px',
                  padding: '4px 8px',
                  borderRadius: '12px'
                },
                '& .MuiClockPicker-root': {
                  display: 'none',
                  borderRadius: '12px'
                }
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
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
          bgColor="rgb(220, 38, 38)"
          hoverColor="#991919"
          hoverTextcolor="#fff"
          imgSrc={cross}
          sx={{
            gap: '8px',
            maxWidth: '222px',
            width: '100%',
            justifyContent: 'start'
          }}
        />
      </Box>
    </Box>
  );
}
