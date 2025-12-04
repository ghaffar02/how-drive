import {Box, MenuItem, TextField, Typography} from '@mui/material';
import {ReactNode, useState} from 'react';

import localFont from '@/utils/themes';
import CustomButton from '@/components/student-dashboard/CustomButton';
// import MiniFramerCalendar from '../../calander/components/MiniFramerCalendar';
import Image from 'next/image';
import arrow from '@/assets/svgs/dashboard-student/arrowsetting.svg';
import whiteArrow from '@/assets/svgs/whiteArrow.svg';
// import TimePickerValue from '../../profile-setting/components/TimePicker';
import {motion} from 'framer-motion';
import {useTranslations} from 'next-intl';
import CustomTextField from '@/components/school-dashboard/InputField';
import crossCircle from '@/assets/svgs/dashboard-student/crosscircle.svg';
import MiniFramerCalendar from '@/components/school-dashboard/layout/calander/components/MiniFramerCalendar';
import TimePickerValue from '@/components/school-dashboard/layout/profile-setting/components/TimePicker';

interface CustomCardProps {
  children?: ReactNode;
  padding?: number | string;

  bgColor?: string;
  text?: string;
  onClose?: () => void;
}

const timeArray = [
  {
    id: 1,
    from: '14:30',
    to: '14:45',
    select: true
  },
  {
    id: 2,
    from: '14:45',
    to: '15:00',
    select: true
  },
  {
    id: 3,
    from: '15:00',
    to: '15:15',
    select: false
  },
  {
    id: 4,
    from: '15:15',
    to: '15:30',
    select: true
  },
  {
    id: 5,
    from: '15:30',
    to: '15:45',
    select: true
  },
  {
    id: 6,
    from: '15:45',
    to: '16:00',
    select: true
  },
  {
    id: 7,
    from: '16:00',
    to: '16:15',
    select: true
  },
  {
    id: 8,
    from: '16:15',
    to: '16:30',
    select: false
  },
  {
    id: 9,
    from: '16:30',
    to: '16:45',
    select: true
  },
  {
    id: 10,
    from: '16:45',
    to: '17:00',
    select: true
  }
];

export default function AppointmentsDropDown({
  onClose,
  padding = '16px'
}: CustomCardProps) {
  const t = useTranslations('SchoolDashboard.Calendar.popup');
  const tabs = t.raw('tabs2');
  const tabOptions = t.raw('tabsOptions.option2');
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleContainerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  const [activeIndex, setActiveIndex] = useState<number | 0>(0);
  const [updateTime, setUpdateTime] = useState<number | 0>(0);
  const handleClickTab = (i: number) => {
    setActiveIndex(i);
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding,
        gap: '24px'
      }}
    >
      <Box
        onClick={handleContainerClick}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column'},
          gap: {xs: '4px'},
          alignItems: 'start',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter16,
            width: '100%',

            fontFamily: '"Inter", sans-serif !important',
            fontWeight: 500,
            textAlign: 'center'
          }}
        >
          {t('title2')}
        </Typography>
        {/* Area for the tab */}
        <Box
          sx={{
            // bgcolor: '#000',
            width: '100%',
            mt: '16px',
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
              bgcolor: '#ffffff',
              display: 'flex',
              p: '4px',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0px 0px 2px 0px #D4D4D8',
              borderRadius: '999px',
              position: 'relative',
              overflow: 'hidden',
              mb: '24px'
            }}
          >
            {/* Moving Highlight */}
            <Box
              sx={{
                position: 'absolute',
                top: 4,
                bottom: 4,
                width: `calc((100% - 8px) / 2)`,
                borderRadius: '999px',
                background: '#4611F5',
                transition: 'all 0.4s ease',
                transform: `translateX(${activeIndex * 100}%)`, // move on X
                zIndex: 1
              }}
            />

            {tabs.map((item: string, i: number) => (
              <Box
                key={i}
                onClick={() => handleClickTab(i)}
                sx={{
                  flex: 1,
                  textAlign: 'center',
                  p: '4px 0px',
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
        </Box>

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
            background: '#ffffff',
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
          {tabOptions[activeIndex].map((option: any) =>
            option.value === '' ? (
              <MenuItem key={option.label} value={option.value} disabled>
                {option.label}
              </MenuItem>
            ) : (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            )
          )}
        </TextField>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column'},
          gap: {xs: '4px'},
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {activeIndex < 1 ? (
          <MiniFramerCalendar
            datesArray={[
              '2025-11-16',
              '2025-11-18',
              '2025-11-20',
              '2025-11-22',
              '2025-11-25'
            ]}
          />
        ) : (
          <MiniFramerCalendar />
        )}
      </Box>

      {activeIndex < 1 && (
        <Box sx={{width: '100%', textAlign: 'center'}}>
          <Typography
            sx={{
              ...localFont.inter16,
              fontFamily: '"Inter", sans-serif !important',
              mb: '10px',
              fontWeight: 400
            }}
          >
            {t('title1')}
          </Typography>
          <Typography
            sx={{
              ...localFont.inter14,
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: 300
            }}
          >
            {t('des1')}
          </Typography>
        </Box>
      )}

      {activeIndex < 1 && (
        <Box
          sx={{
            display: 'flex',
            flex: '0 0 auto',
            flexWrap: 'wrap',
            gap: '10px',
            alignItems: 'flex-start',
            justifyContent: 'center',
            alignContent: 'flex-start'
          }}
        >
          {timeArray.map((data) => (
            <Box
              onClick={() => {
                if (!data.select) return;
                if (updateTime === data.id) {
                  setUpdateTime(0);
                } else {
                  setUpdateTime(data.id);
                }
              }}
              key={data.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background:
                  updateTime === data.id
                    ? 'rgb(70,17,245)'
                    : data.select
                      ? '#fff'
                      : '#e6e6e8',
                p: '8px',
                gap: '6px',
                minHeight: '38px',
                minWidth: '128px',
                cursor: data.select ? 'pointer' : 'unset',
                borderRadius: '8px',
                boxShadow: '0px 0px 2px 0px rgb(212,212,216)',
                '&:hover': {
                  boxShadow: data.select
                    ? '0px 0px 2px 0px rgb(70,17,245)'
                    : 'unset'
                }
              }}
            >
              <Typography
                sx={{
                  ...localFont.inter14,
                  fontFamily: '"Inter", sans-serif !important',
                  color: updateTime === data.id ? '#fff' : '#4a5568'
                }}
              >
                {data.from}
              </Typography>
              <Image
                src={updateTime === data.id ? whiteArrow : arrow}
                alt="to"
                height={14}
                width={14}
              />
              <Typography
                sx={{
                  ...localFont.inter14,
                  fontFamily: '"Inter", sans-serif !important',
                  color: updateTime === data.id ? '#fff' : '#4a5568'
                }}
              >
                {data.to}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      <Box sx={{width: '100%'}}>
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          {t('input2')}
        </Typography>
        <Box sx={{display: 'flex', gap: '4px', alignItems: 'center'}}>
          <TimePickerValue
            sx={{
              ...(updateTime !== 0 && {
                opacity: 0.5,
                pointerEvents: 'none',
                userSelect: 'none'
              })
            }}
          />
          <Image
            src={arrow}
            alt="arrow"
            height={14}
            width={14}
            style={{marginTop: '8px'}}
          />
          <TimePickerValue
            sx={{
              ...(updateTime !== 0 && {
                opacity: 0.5,
                pointerEvents: 'none',
                userSelect: 'none'
              })
            }}
          />
        </Box>
      </Box>

      {activeIndex === 1 && (
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", sans-serif !important',
            textAlign: 'center'
          }}
        >
          {t('des2')}
        </Typography>
      )}

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
          onClick={onClose}
          label={t('btn')}
          sx={{
            gap: '8px',
            maxWidth: '100%',
            width: '100%',
            justifyContent: 'center',
            fontWeight: '500',
            fontSize: {xs: '14px', md: '15px', lg: '16px'}
          }}
        />
      </Box>
    </Box>
  );
}
