import {Box, MenuItem, TextField, Typography} from '@mui/material';
import {useEffect, useState} from 'react';
import localFont from '@/utils/themes';
import tick from '@/assets/svgs/dashboard-student/tick.svg';
import cross from '@/assets/svgs/dashboard-student/btncross.svg';
import CustomButton from '@/components/student-dashboard/CustomButton';
import CustomTextField from '@/components/school-dashboard/InputField';
import Image from 'next/image';
import crossCircle from '@/assets/svgs/dashboard-student/crosscircle.svg';
import {useTranslations} from 'next-intl';
import TimePickerValue from '../../profile-setting/components/TimePicker';
import MiniFramerCalendar from '../../calander/components/MiniFramerCalendar';
import arrow from '@/assets/svgs/dashboard-student/arrowsetting.svg';
import whiteArrow from '@/assets/svgs/whiteArrow.svg';

interface DropdownOption {
  value: string;
  label: string;
}

interface EditAppointmentProps {
  title?: string;
  driverLabel?: string;
  dayLabel?: string;
  beginLabel?: string;
  endLabel?: string;
  participantsLabel?: string;
  participantName?: string;
  cancelHeading?: string;
  cancelDescription?: string;
  cancelBtnLabel?: string;
  saveBtnLabel?: string;
  dropdownOptions?: DropdownOption[];
  onClose?: () => void;
  barColor?: string;
}

export default function EditappointmentDropDown({
  title = 'Edit appointment',
  driverLabel = 'Driver',
  dayLabel = 'Day',
  beginLabel = 'Begin',
  endLabel = 'End',
  participantsLabel = 'Participants',
  participantName = 'Daniel Mustermann 1',
  cancelHeading = 'Cancel appointment',
  cancelDescription = 'To cancel the appointment, remove all participants from the list and click Save.',
  cancelBtnLabel = 'Cancel',
  saveBtnLabel = 'Save',
  dropdownOptions = [
    {value: 'malfunction', label: 'Malfunction'},
    {value: 'question', label: 'Question'}
  ],
  onClose,
  barColor
}: EditAppointmentProps) {
  const t = useTranslations('SchoolDashboard.Calendar.popup');
  const tabs = t.raw('tabs');
  const tabOptions = t.raw('tabsOptions.options');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [tabsIndex, setTabsIndex] = useState(0);
  const [updateTime, setUpdateTime] = useState<number | 0>(0);

  useEffect(() => {
    if (barColor === '#9333ea') setTabsIndex(0);
    if (barColor === '#2563eb') setTabsIndex(1);
    if (barColor === '#0891b2') setTabsIndex(2);
    if (barColor === '#dc2626') setTabsIndex(3);
  }, [barColor]);

  const handleContainerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

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
      <Typography
        sx={{
          ...localFont.inter16,
          width: '100%',
          fontFamily: '"Inter", sans-serif !important',
          fontWeight: 500,
          textAlign: 'center'
        }}
      >
        {title}
      </Typography>

      {/* Driver Dropdown */}
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
        {tabOptions[tabsIndex].map((option: any) =>
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

      <Box
        // component={motion.div}
        // initial={{y: 50, opacity: 0}}
        // animate={{y: 0, opacity: 1}}
        // transition={{
        //   duration: 0.2,
        //   ease: 'easeOut',
        //   delay: 0.3
        // }}
        // viewport={{once: true}}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column'},
          gap: {xs: '4px'},
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {tabsIndex < 3 ? (
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

      {tabsIndex < 3 && (
        <Box
          // component={motion.div}
          // initial={{y: 50, opacity: 0}}
          // animate={{y: 0, opacity: 1}}
          // transition={{
          //   duration: 0.2,
          //   ease: 'easeOut',
          //   delay: 0.4
          // }}
          // viewport={{once: true}}
          sx={{width: '100%', textAlign: 'center'}}
        >
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

      {tabsIndex < 3 && (
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

      {/* Participants */}
      <Box sx={{width: '100%'}}>
        <Typography
          sx={{
            ...localFont.inter14,
            fontWeight: 400,
            color: '#000',
            mb: '4px',
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          {participantsLabel}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography
            sx={{
              ...localFont.inter14,
              fontWeight: 300,
              fontFamily: '"Inter", sans-serif !important'
            }}
          >
            {participantName}
          </Typography>
          <Box
            sx={{
              height: '28px',
              width: '28px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              '&:hover': {
                background: 'rgba(48,88,255,0.1)'
              }
            }}
          >
            <Image
              src={crossCircle}
              alt="addIcon"
              style={{height: '20px', width: '20px'}}
            />
          </Box>
        </Box>
      </Box>

      {/* Cancel Info */}
      <Box sx={{width: '100%'}}>
        <Typography
          sx={{
            ...localFont.inter14,
            fontWeight: 400,
            color: '#000',
            mb: '4px',
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          {cancelHeading}
        </Typography>
        <Typography
          sx={{
            ...localFont.inter14,
            fontWeight: 300,
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          {cancelDescription}
        </Typography>
      </Box>

      {/* Buttons */}
      <Box
        sx={{
          width: {xs: '100%'},
          p: '8px 0px',
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <CustomButton
          onClick={onClose}
          label={cancelBtnLabel}
          bgColor="rgb(220, 38, 38)"
          hoverColor="#991919"
          hoverTextcolor="#fff"
          imgSrc={cross}
          sx={{
            gap: '7px',
            maxWidth: '122px',
            width: '100%',
            justifyContent: 'start'
          }}
        />
        <CustomButton
          label={saveBtnLabel}
          bgColor="#0D9488"
          hoverColor="#0C5C72"
          imgSrc={tick}
          sx={{
            gap: '8px',
            maxWidth: '122px',
            width: '100%',
            justifyContent: 'start'
          }}
          onClick={onClose}
        />
      </Box>
    </Box>
  );
}
