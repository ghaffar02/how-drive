'use client';
import React, {useState} from 'react';
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import {format, parse, startOfWeek, getDay} from 'date-fns';
// import enUS from 'date-fns/locale/en-US';
import {enUS, de} from 'date-fns/locale'; // ✅ added German locale
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './BigCalander.module.css';
import {DayDetailView} from './DayDetailView';
import {Box, Popover, Typography} from '@mui/material';
import MiniFramerCalendar from '../MiniFramerCalendar';
import localFont from '@/utils/themes';
import Image from 'next/image';
import plus from '@/assets/svgs/dashboard-student/calander/plus.svg';
import {usePathname} from 'next/navigation'; // ✅ added for route-based locale detection

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

function EventAddPopover({open, anchorEl, onClose}: EventAddPopoverProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);

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
          borderRadius: '10px',
          border: '1px solid #fff',
          p: '16px',
          background: 'rgba(248, 250, 252, 0.3)',
          backdropFilter: 'blur(15px)',
          boxShadow:
            '0px 0px 2px 0px var(--token-46fa6e04-aa50-4324-8a35-fd1170036322, rgb(212, 212, 216))',
          top: '16px !important',
          '& > *:not(:last-child)': {
            marginBottom: '32px'
          }
        }
      }}
    >
      <Typography variant="h6" sx={{...localFont.inter16}}>
        Termin bei Fahrschule buchen
      </Typography>
      <Box
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.85)',
          display: 'flex',
          p: '4px',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow:
            '0px 0px 2px 0px var(--token-46fa6e04-aa50-4324-8a35-fd1170036322, rgb(212, 212, 216))',
          borderRadius: '999px',
          gap: '4px'
        }}
      >
        {['Gespräch', 'Theorie', 'Fahren'].map((item, i) => (
          <Box
            key={i}
            onClick={() => setActiveIndex(i)}
            sx={{
              background: activeIndex === i ? '#463DF5' : 'transparent',
              padding: '4px 8px',
              borderRadius: '999px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              width: '100%'
            }}
          >
            <Typography
              sx={{
                ...localFont.inter16,
                color: activeIndex === i ? '#fff' : '#4A5568',
                textAlign: 'center'
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
      <MiniFramerCalendar />
    </Popover>
  );
}
