import * as React from 'react';
import dayjs, {Dayjs} from 'dayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';

export default function TimePickerValue() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        ampm={false}
        minutesStep={15}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        // defaultValue={dayjs('--:-- --')}

        slotProps={{
          // openPickerIcon: null,
          textField: {
            placeholder: 'Select time',
            sx: {
              // ✅ Main wrapper
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px !important',
                paddingRight: '0px !important'
              },

              // ✅ Border outline
              '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: '12px !important'
              },

              borderRadius: '12px',
              width: '140px',
              backgroundColor: 'white',
              // height: '40px',
              '& .MuiInputBase-root': {
                borderRadius: '12px',

                // height: '40px',
                backgroundColor: 'white'
              },
              '& input': {
                borderRadius: '12px',

                backgroundColor: 'white' // ✅ white BG
              },
              '& .MuiPickersSectionList-root': {
                py: '8.5px !important'
              }
            }
          }
        }}
      />
    </LocalizationProvider>
  );
}
