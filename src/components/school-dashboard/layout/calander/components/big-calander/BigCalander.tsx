'use client';
import React, {useState} from 'react';
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import {format, parse, startOfWeek, getDay} from 'date-fns';
// import enUS from 'date-fns/locale/en-US';
import {enUS, de} from 'date-fns/locale'; // ✅ added German locale
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './BigCalander.module.css';
import {DayDetailView} from './DayDetailView';
import {Box, MenuItem, Popover, TextField, Typography} from '@mui/material';
import MiniFramerCalendar from '../MiniFramerCalendar';
import localFont from '@/utils/themes';
import Image from 'next/image';
import plus from '@/assets/svgs/dashboard-student/calander/plus.svg';
import {usePathname} from 'next/navigation'; // ✅ added for route-based locale detection
import TimePickerValue from '../../../profile-setting/components/TimePicker';
import CustomButton from '@/components/school-dashboard/CustomButton';
import arrow from '@/assets/svgs/dashboard-student/arrowsetting.svg';
import whiteArrow from '@/assets/svgs/whiteArrow.svg';
import CustomTextField from '@/components/school-dashboard/InputField';
import crossCircle from '@/assets/svgs/dashboard-student/crosscircle.svg';

const locales = {
  'en-US': enUS,
  de: de
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

const events = [
  {
    title: 'Gespräch',
    start: new Date(2025, 9, 17, 9, 0),
    end: new Date(2025, 9, 17, 10, 30),
    color: '#A855F7'
  },
  {
    title: 'Theoriestunden',
    start: new Date(2025, 9, 17, 13, 30),
    end: new Date(2025, 9, 17, 14, 45),
    color: '#2563EB'
  },
  {
    title: 'Fahrstunden',
    start: new Date(2025, 9, 17, 15, 0),
    end: new Date(2025, 9, 17, 16, 0),
    color: '#0891B2'
  },
  {
    title: 'Theorieprüfung',
    start: new Date(2025, 9, 17, 10, 15),
    end: new Date(2025, 9, 17, 10, 35),
    color: '#DC2626'
  }
];

const EventComponent: React.FC<{event: any}> = ({event}) => (
  <div
    style={{
      width: '6px',
      height: '18px',
      borderRadius: '999px',
      margin: '2px 0 2px 15%',
      backgroundColor: event.color
    }}
  />
);

export default function BigCalendar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateClick = (slotInfo: any) => {
    setSelectedDate(slotInfo.start);
  };

  // ✅ Detect current locale from route
  const pathname = usePathname();
  const isGerman = pathname.startsWith('/de');
  const currentLocale = isGerman ? 'de' : 'en-US';

  // ✅ Messages for both languages
  const calendarMessages = isGerman
    ? {
        today: 'Heute',
        previous: 'Zurück',
        next: 'Weiter',
        month: 'Monat',
        week: 'Woche',
        day: 'Tag'
      }
    : {
        today: 'Today',
        previous: 'Back',
        next: 'Next',
        month: 'Month',
        week: 'Week',
        day: 'Day'
      };

  // transform events into simpler structure for the DayDetailView
  const appointments = events.map((e, i) => ({
    id: i + 1,
    title: e.title,
    startTime: `${String(e.start.getHours()).padStart(2, '0')}:${String(
      e.start.getMinutes()
    ).padStart(2, '0')}`,
    endTime: `${String(e.end.getHours()).padStart(2, '0')}:${String(
      e.end.getMinutes()
    ).padStart(2, '0')}`,
    color: e.color,
    dateKey: `${e.start.getFullYear()}-${e.start.getMonth()}-${e.start.getDate()}`
  }));

  // Filter appointments by the selected date
  const selectedAppointments =
    selectedDate !== null
      ? appointments.filter(
          (a) =>
            a.dateKey ===
            `${selectedDate.getFullYear()}-${selectedDate.getMonth()}-${selectedDate.getDate()}`
        )
      : [];

  return (
    <div
      style={{fontFamily: "font-family: 'Inter', sans-serif !important"}}
      className={styles.calendarWrapper}
    >
      <div className={styles.calendarContainer}>
        {selectedDate ? (
          <DayDetailView
            date={selectedDate}
            appointments={selectedAppointments}
            onClose={() => setSelectedDate(null)}
          />
        ) : (
          <Box sx={{height: '100%', width: '100%', position: 'relative'}}>
            <Box sx={{position: 'absolute', top: '0px', right: '0px'}}>
              <Box
                onClick={handleClick}
                sx={{
                  padding: '8px',
                  height: '36px',
                  width: '36px',
                  background: '#fff',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  position: 'relative',
                  '&:hover': {backgroundColor: '#CED5F5'},
                  '&:active': {backgroundColor: '#B9C2EB'},
                  transition: 'all 0.1s ease-in'
                }}
              >
                <Image height={20} width={20} src={plus} alt="plus" />
              </Box>
              <EventAddPopover
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              />
            </Box>
            <Calendar
              localizer={localizer}
              culture={currentLocale} // ✅ dynamic culture
              messages={calendarMessages} // ✅ dynamic translation
              events={events}
              startAccessor="start"
              endAccessor="end"
              components={{event: EventComponent}}
              views={['month']}
              selectable
              onSelectSlot={handleDateClick}
              onSelectEvent={(event) => setSelectedDate(event.start)}
              toolbar
              style={{flex: 1, height: '100%', width: '100%'}}
            />
          </Box>
        )}
      </div>
    </div>
  );
}

// 🔹 Subcomponent
type EventAddPopoverProps = {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
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

const tabOptions = [
  [
    {value: 'anmeldung-fahrschule', label: 'Anmeldung Fahrschule'},
    {value: 'besprechung', label: 'Besprechung'}
  ],
  [
    {value: 'gruppe-1', label: 'Gruppe 1'},
    {value: 'gruppe-2', label: 'Gruppe 2'}
  ],
  [
    {value: 'tom', label: 'Tom'},
    {value: 'fabian', label: 'Fabian'},
    {value: 'sophia', label: 'Sophia'}
  ],
  [
    {value: 'theorieprüfung', label: 'Theorieprüfung'},
    {value: 'praktisch-prüfung', label: 'Praktisch Prüfung'}
  ]
];

function EventAddPopover({open, anchorEl, onClose}: EventAddPopoverProps) {
  // const [activeIndex, setActiveIndex] = React.useState(0);
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
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      PaperProps={{
        sx: {
          maxWidth: '300px',
          height: '95vh',
          borderRadius: '10px',
          border: '1px solid #fff',
          p: '16px',
          background: 'rgba(248, 250, 252, 0.3)',
          backdropFilter: 'blur(15px)',
          boxShadow:
            '0px 0px 2px 0px var(--token-46fa6e04-aa50-4324-8a35-fd1170036322, rgb(212, 212, 216))',
          top: '16px !important',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          '& > *:not(:last-child)': {
            marginBottom: '32px'
          }
        }
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
          Book an appointment for the student
        </Typography>

        <Box sx={{width: '100%'}}>
          <Typography
            sx={{
              ...localFont.inter14,
              fontFamily: '"Inter", sans-serif !important',
              mb: '6px'
            }}
          >
            Driving student
          </Typography>
          <CustomTextField />
          <Box
            sx={{
              mt: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              maxHeight: '36px'
            }}
          >
            <Typography
              sx={{
                ...localFont.inter14,
                fontFamily: '"Inter", sans-serif !important'
              }}
            >
              Daniel Mustermann 1
            </Typography>
            <Box
              sx={{
                height: '36px',
                width: 'min-content',
                padding: '8px',
                cursor: 'pointer',
                borderRadius: '50%',
                '&:hover': {
                  background: 'rgba(48,88,255,0.1)'
                }
              }}
            >
              <Image src={crossCircle} alt="cancel" height={20} width={20} />
            </Box>
          </Box>
        </Box>

        {/* Area for the tab */}

        <Box
          sx={{
            // bgcolor: '#000',
            width: '100%',
            mt: '14px',
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
                left: 4,
                width: `calc((100% - 8px) / 4)`,
                borderRadius: '999px',
                background: '#4611F5',
                // boxShadow: '0px 2px 6px 0px #fe0909ff',
                transition: 'all 0.4s ease',
                transform: `translateX(${activeIndex * 100}%)`, // move on X
                zIndex: 1
              }}
            />

            {['Talk', 'Theory', 'Driving', 'Exam'].map(
              (item: string, i: number) => (
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
              )
            )}
          </Box>
        </Box>

        {/* Ending Area for the tab */}

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
          {tabOptions[activeIndex].map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column'},
          gap: {xs: '4px'},
          alignItems: 'start',
          justifyContent: 'space-between'
        }}
      >
        <MiniFramerCalendar
          datesArray={[
            '2025-11-16',
            '2025-11-18',
            '2025-11-20',
            '2025-11-22',
            '2025-11-25'
          ]}
        />
      </Box>

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
        {activeIndex < 3 &&
          timeArray.map((data) => (
            <Box
              onClick={() => {
                if (!data.select) return;
                setUpdateTime(data.id);
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
                cursor: 'pointer',
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
      <Box sx={{width: '100%'}}>
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          Different time slot
        </Typography>
        <Box sx={{display: 'flex', gap: '4px', alignItems: 'center'}}>
          <TimePickerValue />
          <Image src={arrow} alt="arrow" height={14} width={14} />
          <TimePickerValue />
        </Box>
      </Box>

      {activeIndex === 3 && (
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", sans-serif !important',
            textAlign: 'center'
          }}
        >
          The appointment for practical exam will not automatically be reserved
          for the assigned trainer. Please book the same time slot for the
          trainer participating the practical exam as well.
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
          label="Book"
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
    </Popover>
  );
}
