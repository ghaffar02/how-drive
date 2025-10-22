import localFont from '@/utils/themes';
import {Box, MenuItem, Select, TextField, Typography} from '@mui/material';
import {useState} from 'react';
import crossIcon from '@/assets/svgs/dashboard-student/crossicon.svg';
import Image from 'next/image';
import CustomTextField from '@/components/school-dashboard/InputField';
import HoursComponent from './HoursComponent';
import CustomButton from '@/components/school-dashboard/CustomButton';
import MiniFramerCalendar from './MiniFramerCalendar';

export default function SchedulerSidebar() {
  const [activeIndex, setActiveIndex] = useState<number | 0>(0);

  const handleClickTab = (i: number) => {
    setActiveIndex(i);
  };
  return (
    <Box
      sx={{
        maxWidth: {md: '230px', lg: '300px'},
        width: '100%',
        // height: '100%',
        background: 'rgba(248,250,252,0.3)',
        padding: {xs: '8px', md: '24px 12px'},
        border: '1px solid #fff',
        boxShadow:
          'rgb(255, 255, 255) 0px 0px 0px 1px, rgba(0, 0, 0, 0.25) 0px 1px 0px 0px, rgba(0, 0, 0, 0.25) 0px 1px 1px 0px',
        backdropFilter: 'blur(15px)',
        display: {xs: 'none', md: 'flex'},
        alignItems: 'center',
        flexDirection: {xs: 'column'},
        gap: '16px',
        overflow: 'scroll',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}
    >
      <Typography
        sx={{
          ...localFont.inter16,
          fontSize: {xs: '14px', md: '15px', lg: '16px'},
          fontWeight: '500',
          // colo
          fontFamily: '"Inter", sans-serif !important'
        }}
      >
        Set appointment schedules
      </Typography>

      {/* Tab Section */}

      <Box
        sx={{
          // bgcolor: '#000',
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column'},
          gap: '20px',
          alignItems: 'end',
          justifyContent: 'end'
        }}
      >
        <Box
          sx={{
            width: '100%',
            // maxWidth: '828px',
            bgcolor: '#ffffff99',
            display: 'flex',
            p: '4px',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0px 0px 2px 0px #D4D4D8',
            borderRadius: '999px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Moving Highlight */}
          <Box
            sx={{
              position: 'absolute',
              top: 4,
              bottom: 4,
              left: 4,
              width: `calc((100% - 8px) / 3)`,
              borderRadius: '999px',
              background: '#4611F5',
              // boxShadow: '0px 2px 6px 0px #fe0909ff',
              transition: 'all 0.4s ease',
              transform: `translateX(${activeIndex * 100}%)`, // move on X
              zIndex: 1
            }}
          />

          {['Talk', 'Theory', 'Driving'].map((item, i) => (
            <Box
              key={i}
              onClick={() => handleClickTab(i)}
              sx={{
                flex: 1,
                textAlign: 'center',
                p: '4px 8px',
                cursor: 'pointer',
                zIndex: 2
              }}
            >
              <Typography
                sx={{
                  lineHeight: '1.6em',
                  fontSize: {xs: '12px', md: '13px', lg: '14px'},
                  color: activeIndex === i ? '#ffff' : '#4A5568',
                  fontWeight: activeIndex === i ? '400' : '400',
                  transition: 'all 0.3s ease-in-out',
                  fontFamily: '"Inter", sans-serif !important'
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
        <SelectAppointmentType />
      </Box>
    </Box>
  );
}

function SelectAppointmentType() {
  const [value, setValue] = useState('');
  const days = [
    {day: 'Mo', unavailable: false},
    {day: 'Di', unavailable: false},
    {day: 'Mi', unavailable: false},
    {day: 'Do', unavailable: false},
    {day: 'Fr', unavailable: false},
    {day: 'Sa', unavailable: true},
    {day: 'So', unavailable: true}
  ];
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}
    >
      <Box>
        <Box sx={{display: 'flex', gap: '6px', mb: '6px'}}>
          <Box
            sx={{
              width: '6px',
              height: '22px',
              background: 'red',
              borderRadius: '999px'
            }}
          />
          <Typography sx={{...localFont.inter14}}>Category</Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            gap: '6px'
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              padding: '10px',
              borderRadius: '12px',
              height: '38px',
              alignItems: 'center',
              background: '#ffffffbf',
              boxShadow: '0px 0px 2px 0px #D4D4D8'
            }}
          >
            <Select
              displayEmpty
              value={value}
              onChange={(e) => setValue(e.target.value)}
              sx={{
                flex: 1,
                borderRadius: 0,
                '& fieldset': {border: 'none'},
                '&:hover fieldset': {border: 'none'},
                '&.Mui-focused fieldset': {border: 'none'},
                '& .MuiSelect-select': {
                  padding: '0px',
                  height: 'auto'
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: 0
                }
              }}
              variant="outlined"
              renderValue={
                value !== ''
                  ? undefined
                  : () => <span style={{color: '#999'}}>Select type</span>
              }
            >
              <MenuItem value="driving">Driving Lesson</MenuItem>
              <MenuItem value="theory">Theory Class</MenuItem>
              <MenuItem value="test">Final Test</MenuItem>
            </Select>
          </Box>
          <Box
            sx={{
              height: '36px',
              width: '36px',
              background: '#ffffffbf',
              padding: '8px',
              borderRadius: '50%',
              position: 'relative',
              cursor: 'pointer',
              overflow: 'visible !important',
              '&:hover': {
                bgcolor: '#E4E4E7'
              }
            }}
          >
            <Image
              src={crossIcon}
              alt="addIcon"
              height={20}
              width={20}
              style={{position: 'relative'}}
              // onClick={() => setOpenDropdown((prev) => !prev)}
            />
          </Box>
        </Box>
      </Box>
      {/* Capacity Persons */}
      <Box sx={{width: '100%'}}>
        <Typography sx={{...localFont.inter14, mb: '6px'}}>
          Capacity (persons)
        </Typography>
        <CustomTextField type="number" />
      </Box>
      {/* Duration Minutes */}
      <Box sx={{width: '100%'}}>
        <Typography sx={{...localFont.inter14, mb: '6px'}}>
          Duration (minutes)
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            padding: '10px',
            borderRadius: '12px',
            height: '38px',
            alignItems: 'center',
            background: '#ffffffbf',
            boxShadow: '0px 0px 2px 0px #D4D4D8'
          }}
        >
          <Select
            sx={{
              flex: 1,
              borderRadius: 0,
              '& fieldset': {border: 'none'},
              '&:hover fieldset': {border: 'none'},
              '&.Mui-focused fieldset': {border: 'none'},
              '& .MuiSelect-select': {
                padding: '0px',
                height: 'auto'
              },
              '& .MuiOutlinedInput-root': {
                borderRadius: 0
              }
            }}
          >
            <MenuItem value="15">15</MenuItem>
            <MenuItem value="30">30</MenuItem>
            <MenuItem value="45">45</MenuItem>
            <MenuItem value="60">60</MenuItem>
            <MenuItem value="90">90</MenuItem>
            <MenuItem value="120">120</MenuItem>
          </Select>
        </Box>
      </Box>
      {/* Weekly Hours */}
      <Box>
        <Typography sx={{...localFont.inter14, mb: '10px'}}>
          Weekly hours
        </Typography>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          {days.map((data, i) => (
            <HoursComponent
              key={i}
              day={data.day}
              unavailable={data.unavailable}
            />
          ))}
        </Box>
      </Box>
      {/* Date specific availability */}
      <Box sx={{width: '100%'}}>
        <Typography sx={{...localFont.inter14}}>
          Date-specific availability
        </Typography>
        <Typography sx={{...localFont.inter14, fontWeight: '200', mb: '6px'}}>
          Select a day to set a different time slot.
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          <MiniFramerCalendar />
          <HoursComponent day="Thu" />
        </Box>
      </Box>
      {/* Maximum Time in Advance for Booking */}
      <Box sx={{width: '100%'}}>
        <Typography sx={{...localFont.inter14, mb: '6px'}}>
          Maximum time in advance for booking appointments (days)
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            padding: '10px',
            borderRadius: '12px',
            height: '38px',
            alignItems: 'center',
            background: '#ffffffbf',
            boxShadow: '0px 0px 2px 0px #D4D4D8'
          }}
        >
          <Select
            sx={{
              flex: 1,
              borderRadius: 0,
              '& fieldset': {border: 'none'},
              '&:hover fieldset': {border: 'none'},
              '&.Mui-focused fieldset': {border: 'none'},
              '& .MuiSelect-select': {
                padding: '0px',
                height: 'auto'
              },
              '& .MuiOutlinedInput-root': {
                borderRadius: 0
              }
            }}
          >
            <MenuItem value="30">30</MenuItem>
            <MenuItem value="60">60</MenuItem>
            <MenuItem value="90">90</MenuItem>
          </Select>
        </Box>
      </Box>
      {/* Minimum time in advance for booking */}
      <Box sx={{width: '100%'}}>
        <Typography sx={{...localFont.inter14, mb: '6px'}}>
          Minimum time in advance for booking an appointment (hours)
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            padding: '10px',
            borderRadius: '12px',
            height: '38px',
            alignItems: 'center',
            background: '#ffffffbf',
            boxShadow: '0px 0px 2px 0px #D4D4D8'
          }}
        >
          <Select
            sx={{
              flex: 1,
              borderRadius: 0,
              '& fieldset': {border: 'none'},
              '&:hover fieldset': {border: 'none'},
              '&.Mui-focused fieldset': {border: 'none'},
              '& .MuiSelect-select': {
                padding: '0px',
                height: 'auto'
              },
              '& .MuiOutlinedInput-root': {
                borderRadius: 0
              }
            }}
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="12">12</MenuItem>
            <MenuItem value="24">24</MenuItem>
          </Select>
        </Box>
      </Box>
      {/* Cancellation limit (hours) */}
      <Box sx={{width: '100%'}}>
        <Typography sx={{...localFont.inter14, mb: '6px'}}>
          Cancellation limit (hours)
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            padding: '10px',
            borderRadius: '12px',
            height: '38px',
            alignItems: 'center',
            background: '#ffffffbf',
            boxShadow: '0px 0px 2px 0px #D4D4D8'
          }}
        >
          <Select
            sx={{
              flex: 1,
              borderRadius: 0,
              '& fieldset': {border: 'none'},
              '&:hover fieldset': {border: 'none'},
              '&.Mui-focused fieldset': {border: 'none'},
              '& .MuiSelect-select': {
                padding: '0px',
                height: 'auto'
              },
              '& .MuiOutlinedInput-root': {
                borderRadius: 0
              }
            }}
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="12">12</MenuItem>
            <MenuItem value="24">24</MenuItem>
          </Select>
        </Box>
      </Box>
      {/* Button */}
      <CustomButton label="Apply" />
    </Box>
  );
}
