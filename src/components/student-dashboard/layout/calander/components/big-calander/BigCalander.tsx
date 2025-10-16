'use client';
import React from 'react';
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import {format, parse, startOfWeek, getDay} from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './BigCalander.module.css';

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
    title: 'Event 5',
    start: new Date(2025, 9, 9),
    end: new Date(2025, 9, 9),
    color: '#4F46E5'
  },
  {
    title: 'Event 12',
    start: new Date(2025, 9, 13),
    end: new Date(2025, 9, 13),
    color: '#A855F7'
  },
  {
    title: 'Event 3',
    start: new Date(2025, 9, 13),
    end: new Date(2025, 9, 13),
    color: '#06B6D4'
  },
  {
    title: 'Event 5',
    start: new Date(2025, 9, 17),
    end: new Date(2025, 9, 17),
    color: '#4F46E5'
  },
  {
    title: 'Event 12',
    start: new Date(2025, 9, 17),
    end: new Date(2025, 9, 17),
    color: '#A855F7'
  },
  {
    title: 'Event 3',
    start: new Date(2025, 9, 31),
    end: new Date(2025, 9, 31),
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
  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.calendarContainer}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          components={{event: EventComponent}}
          views={['month']}
          toolbar
          popup={false}
          selectable={false}
          style={{flex: 1, height: '100%', width: '100%'}}
        />
      </div>
    </div>
  );
}
