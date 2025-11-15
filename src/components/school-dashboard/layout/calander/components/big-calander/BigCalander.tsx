'use client';
import React, {useState} from 'react';
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import {format, parse, startOfWeek, getDay} from 'date-fns';
import {enUS, de} from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './BigCalander.module.css';
import {DayDetailView} from './DayDetailView';
import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import plus from '@/assets/svgs/dashboard-student/calander/plus.svg';
import {usePathname} from 'next/navigation';
import EventAddPopover from './EventAddPopover';

const locales = {'en-US': enUS, de: de};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

// ⭐ UNIFIED MASTER OBJECT FOR BOTH CALENDAR & DAY VIEW

const scheduleData: Record<string, any[]> = {
  '2025-11-03': [
    {
      id: 1,
      category: 'purple',
      startTime: '06:00',
      endTime: '07:00',
      hour: 6,
      duration: 1,
      title: 'Gespräch'
    },
    {
      id: 2,
      category: 'purple',
      startTime: '11:00',
      endTime: '12:00',
      hour: 11,
      duration: 1,
      title: 'Gespräch'
    },
    {
      id: 3,
      category: 'purple',
      startTime: '14:00',
      endTime: '15:00',
      hour: 14,
      duration: 1,
      title: 'Gespräch'
    },
    {
      id: 4,
      category: 'purple',
      startTime: '17:00',
      endTime: '18:00',
      hour: 17,
      duration: 1,
      title: 'Gespräch'
    },
    {
      id: 5,
      category: 'blue',
      startTime: '09:00',
      endTime: '10:00',
      hour: 9,
      duration: 1,
      title: 'Theoriestunde'
    }
  ],

  '2025-11-07': [
    {
      id: 1,
      category: 'red',
      startTime: '10:15',
      endTime: '11:15',
      hour: 10,
      duration: 1,
      title: 'Prüfung'
    },
    {
      id: 2,
      category: 'blue',
      startTime: '18:30',
      endTime: '19:15',
      hour: 18,
      duration: 1,
      title: 'Prüfung'
    },
    {
      id: 3,
      category: 'seyan',
      startTime: '18:30',
      endTime: '19:15',
      hour: 18,
      duration: 1,
      title: 'Prüfung'
    },
    {
      id: 4,
      category: 'red',
      startTime: '14:00',
      endTime: '16:00',
      hour: 14,
      duration: 1,
      title: 'Prüfung'
    },
    {
      id: 5,
      category: 'red',
      startTime: '17:00',
      endTime: '18:15',
      hour: 17,
      duration: 1,
      title: 'Prüfung'
    },
    {
      id: 6,
      category: 'red',
      startTime: '18:45',
      endTime: '19:15',
      hour: 18,
      duration: 1,
      title: 'Prüfung'
    }
  ],

  '2025-11-12': [
    {
      id: 1,
      category: 'cyan',
      startTime: '08:00',
      endTime: '09:00',
      hour: 8,
      duration: 1,
      title: 'Fahrstunde'
    },
    {
      id: 2,
      category: 'cyan',
      startTime: '10:15',
      endTime: '11:15',
      hour: 10,
      duration: 1,
      title: 'Fahrstunde'
    },
    {
      id: 3,
      category: 'cyan',
      startTime: '12:45',
      endTime: '13:30',
      hour: 12,
      duration: 1,
      title: 'Fahrstunde'
    },
    {
      id: 4,
      category: 'purple',
      startTime: '16:00',
      endTime: '17:00',
      hour: 16,
      duration: 1,
      title: 'Gespräch'
    },
    {
      id: 5,
      category: 'purple',
      startTime: '18:15',
      endTime: '19:15',
      hour: 18,
      duration: 1,
      title: 'Gespräch'
    },
    {
      id: 6,
      category: 'red',
      startTime: '16:00',
      endTime: '17:00',
      hour: 17,
      duration: 1,
      title: 'Gespräch'
    },
    {
      id: 7,
      category: 'red',
      startTime: '18:30',
      endTime: '19:30',
      hour: 18,
      duration: 1,
      title: 'Gespräch'
    },
    {
      id: 8,
      category: 'blue',
      startTime: '16:00',
      endTime: '17:00',
      hour: 16,
      duration: 1,
      title: 'Gespräch'
    },
    {
      id: 9,
      category: 'blue',
      startTime: '18:45',
      endTime: '19:45',
      hour: 18,
      duration: 1,
      title: 'Gespräch'
    }
  ]
};

// Map category → color
const categoryColors: any = {
  purple: '#A855F7',
  blue: '#2563EB',
  cyan: '#0891B2',
  red: '#DC2626'
};

// -------------------------
// Custom Date Cell Wrapper
// -------------------------
const CustomDateCell = ({children, value, currentMonth, currentYear}: any) => {
  const isOffRange =
    value.getMonth() !== currentMonth || value.getFullYear() !== currentYear;

  const key = value.toISOString().split('T')[0];
  const events = scheduleData[key] || [];

  const counts = {
    purple: events?.filter((e) => e.category === 'purple')?.length || 0,
    blue: events?.filter((e) => e.category === 'blue')?.length || 0,
    cyan: events?.filter((e) => e.category === 'cyan')?.length || 0,
    red: events?.filter((e) => e.category === 'red')?.length || 0
  };

  const hasData = Object.values(counts).some((v) => v > 0);

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflowY: 'hidden'
      }}
    >
      {/* Background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: isOffRange ? 'transparent' : '#FFFFFFBF',
          borderRadius: '10px',
          transition: 'background 0.3s ease',
          zIndex: 1,
          border: isOffRange ? 'none' : '2px solid #fff'
        }}
      />

      {/* Foreground */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Day Number */}
        <Typography
          sx={{
            mt: 0.5,
            fontSize: '13px',
            fontFamily: 'Inter, sans-serif',
            color: isOffRange ? '#A0AEC0' : '#000'
          }}
        >
          {children}
        </Typography>

        {/* Activity Lines */}
        {hasData && !isOffRange && (
          <Box
            sx={{
              pt: {xs: '31px', sm: '31.5px', md: '33px'},
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '3px',
              pl: '8px',
              width: '100%'
            }}
          >
            {Object.entries(counts).map(([cat, count]) =>
              count > 0 ? (
                <Box key={cat} sx={{display: 'flex', gap: '4px'}}>
                  <Box
                    sx={{
                      width: '6px',
                      height: '14px',
                      borderRadius: '999px',
                      backgroundColor: categoryColors[cat]
                    }}
                  />
                  <Typography sx={{fontSize: '10px', color: '#4A5568'}}>
                    {count}
                  </Typography>
                </Box>
              ) : null
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

// =======================
// MAIN COMPONENT
// =======================
export default function BigCalendar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [visibleDate, setVisibleDate] = useState(new Date());

  const handleClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  // const handleDateClick = (slotInfo: any) => setSelectedDate(slotInfo.start);

  const pathname = usePathname();
  const isGerman = pathname.startsWith('/de');
  const currentLocale = isGerman ? 'de' : 'en-US';

  const calendarMessages = isGerman
    ? {
        today: 'Heute',
        previous: 'Zurück',
        next: 'Weiter',
        month: 'Monat'
      }
    : {
        today: 'Today',
        previous: 'Back',
        next: 'Next',
        month: 'Month'
      };

  const handleDateClick = (slot: any) => setSelectedDate(slot.start);

  const key = selectedDate?.toISOString().split('T')[0] || '';
  const dayAppointments = scheduleData[key] || [];

  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.calendarContainer}>
        {selectedDate ? (
          <DayDetailView
            date={selectedDate}
            appointments={dayAppointments}
            onClose={() => setSelectedDate(null)}
          />
        ) : (
          <Box sx={{height: '100%', width: '100%', position: 'relative'}}>
            {' '}
            {/* PLUS BUTTON */}
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
            {/* MAIN CALENDAR */}
            <Calendar
              localizer={localizer}
              culture={currentLocale}
              messages={calendarMessages}
              components={{
                dateCellWrapper: (props) => (
                  <CustomDateCell
                    {...props}
                    currentMonth={visibleDate.getMonth()}
                    currentYear={visibleDate.getFullYear()}
                  />
                )
              }}
              views={['month']}
              selectable
              onSelectSlot={handleDateClick}
              onNavigate={(date) => setVisibleDate(date)}
              style={{flex: 1, height: '100%', width: '100%'}}
            />
          </Box>
        )}
      </div>
    </div>
  );
}
