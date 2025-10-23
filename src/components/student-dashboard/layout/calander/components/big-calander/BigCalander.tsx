'use client';
import React, {useState} from 'react';
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import {format, parse, startOfWeek, getDay} from 'date-fns';
// import enUS from 'date-fns/locale/en-US';
import {enUS} from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './BigCalander.module.css';
import {DayDetailView} from './DayDetailView';

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

  const handleDateClick = (slotInfo: any) => {
    setSelectedDate(slotInfo.start);
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
    <div className={styles.calendarWrapper}>
      <div className={styles.calendarContainer}>
        {selectedDate ? (
          <DayDetailView
            date={selectedDate}
            appointments={selectedAppointments}
            onClose={() => setSelectedDate(null)}
          />
        ) : (
          <Calendar
            localizer={localizer}
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
        )}
      </div>
    </div>
  );
}
