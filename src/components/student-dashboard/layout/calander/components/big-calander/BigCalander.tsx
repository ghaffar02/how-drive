'use client';
import React, {useState} from 'react';
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import {format, parse, startOfWeek, getDay} from 'date-fns';
import enUS from 'date-fns/locale/en-US';
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
    title: 'Talk',
    start: new Date(2025, 9, 17, 9, 0),
    end: new Date(2025, 9, 17, 10, 30),
    color: '#A855F7'
  },
  {
    title: 'Theory',
    start: new Date(2025, 9, 17, 13, 30),
    end: new Date(2025, 9, 17, 14, 45),
    color: '#4F46E5'
  },
  {
    title: 'Driving',
    start: new Date(2025, 9, 17, 15, 0),
    end: new Date(2025, 9, 17, 16, 0),
    color: '#06B6D4'
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

  const appointments = events.map((e, i) => ({
    id: i + 1,
    title: e.title,
    startTime: e.start.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    }),
    endTime: e.end.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
    color: e.color
  }));

  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.calendarContainer}>
        {selectedDate ? (
          <DayDetailView
            date={selectedDate}
            appointments={appointments.filter(
              (a) => new Date(a.startTime).getDate() === selectedDate.getDate()
            )}
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
            toolbar
            style={{flex: 1, height: '100%', width: '100%'}}
          />
        )}
      </div>
    </div>
  );
}
