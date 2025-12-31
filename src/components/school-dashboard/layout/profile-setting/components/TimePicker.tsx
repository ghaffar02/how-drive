import * as React from 'react';
import dayjs, {Dayjs} from 'dayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
interface Props {
  sx?: object;
}
export default function TimePickerValue({sx = {}}: Props) {
  // const [value, setValue] = React.useState<Dayjs | null>(null);
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer 
        components={['TimePicker']}
        sx={{width: '100%', '& > div': {width: '100%'}}}
      >
        <TimePicker
          ampm={false}
          minutesStep={15}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          slotProps={{
            actionBar: {
              sx: {
                '& .MuiButton-root': {
                  padding: '0 !important',
                  pl: '4px !important',
                  minWidth: '40px !important', // ✅ width reduce
                  width: '40px !important'
                }
              },
              actions: ['cancel', 'accept'] // ✅ OK + Cancel dono
            },

            textField: {
              placeholder: 'Select time',
              InputProps: {
                readOnly: true,
                onKeyDown: (e: any) => e.preventDefault()
              },
              size: 'small',
              sx: {
                overflow: 'hidden',
                borderRadius: '10px !important',
                width: '100%',
                minWidth: '10px !important',
                backgroundColor: 'white',
                ...sx,

                '& .css-vycme6-MuiPickersInputBase-root-MuiPickersOutlinedInput-root':
                  {
                    borderRadius: '10px'
                  },

                '& .MuiSvgIcon-root': {
                  fontSize: '18px'
                },

                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px !important'
                },

                '& .MuiOutlinedInput-notchedOutline': {
                  borderRadius: '10px !important'
                },

                '& .MuiInputBase-root': {
                  borderRadius: '10px',
                  backgroundColor: 'white'
                },

                '& input': {
                  cursor: 'pointer',
                  userSelect: 'none',
                  borderRadius: '10px !important',
                  backgroundColor: 'white'
                },

                '& .MuiPickersSectionList-root': {
                  py: '8.5px !important'
                },

                '& .css-gfka5e-MuiPickersSectionList-root-MuiPickersInputBase-sectionsContainer-MuiPickersOutlinedInput-sectionsContainer':
                  {
                    width: '100% !important'
                  }
              }
            }
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
