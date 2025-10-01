'use client';

import * as React from 'react';
import {DayPicker} from 'react-day-picker';
import {de} from 'date-fns/locale';
import 'react-day-picker/style.css';
import styles from './mini-framer-calendar.module.css';

export default function MiniFramerCalendar() {
  const [selected, setSelected] = React.useState<Date | undefined>(
    new Date(2025, 9, 16)
  ); // Oct 16, 2025

  // Grey “badge” days like in your screenshot
  const eventDays = [
    new Date(2025, 9, 13),
    new Date(2025, 9, 14),
    new Date(2025, 9, 16),
    new Date(2025, 9, 17),
    new Date(2025, 9, 20),
    new Date(2025, 9, 21),
    new Date(2025, 9, 23),
    new Date(2025, 9, 24),
    new Date(2025, 9, 27),
    new Date(2025, 9, 28),
    new Date(2025, 9, 29),
    new Date(2025, 9, 30),
    new Date(2025, 9, 31)
  ];

  return (
    <div className={styles.wrap}>
      <DayPicker
        locale={de}
        mode="single"
        selected={selected}
        onSelect={setSelected}
        showOutsideDays
        fixedWeeks
        className={styles.calendar}
        modifiers={{event: eventDays}}
        modifiersClassNames={{event: styles.event}}
        components={
          {
            // simple ◀ ▶ arrows
            // IconLeft: () => <span className={styles.chev}>&lsaquo;</span>,
            // IconRight: () => <span className={styles.chev}>&rsaquo;</span>
          }
        }
      />
    </div>
  );
}
