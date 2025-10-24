'use client';
import React, {useState} from 'react';
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import {format, parse, startOfWeek, getDay} from 'date-fns';
// import enUS from 'date-fns/locale/en-US';
import {enUS} from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './BigCalander.module.css';
import {DayDetailView} from './DayDetailView';
import {Box} from '@mui/material';

const locales = {'en-US': enUS};
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
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedAppointments, setSelectedAppointments] = useState<any[]>([]);

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

  const handleSelectDate = (date: Date) => {
    const dateKey = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    const filteredAppointments = appointments.filter(
      (a) => a.dateKey === dateKey
    );

    setSelectedAppointments(filteredAppointments);
    setSelectedDate(date);
  };

  return (
    <>
      <div className={styles.calendarWrapper}>
        {selectedDate ? (
          <DayDetailView
            key={selectedDate.toISOString()}
            date={selectedDate}
            appointments={selectedAppointments}
            onClose={() => setSelectedDate(null)}
          />
        ) : (
          <div className={styles.calendarContainer}>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              components={{event: EventComponent}}
              views={['month']}
              selectable
              toolbar
              onSelectSlot={(slotInfo) => handleSelectDate(slotInfo.start)}
              onSelectEvent={(event) => handleSelectDate(event.start)}
              onDrillDown={(date) => handleSelectDate(date)} // 🔥 captures clicks on date numbers
              style={{
                flex: 1,
                height: '100%',
                width: '100%',
                cursor: 'pointer'
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}
