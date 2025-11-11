'use client';

import * as React from 'react';
import {DayPicker} from 'react-day-picker';
import {enGB} from 'date-fns/locale';
import 'react-day-picker/style.css';
import styles from './mini-framer-calendar.module.css';

type Prop = {
  datesArray?: string[];
};
export default function MiniFramerCalendar({datesArray}: Prop) {
  const [selected, setSelected] = React.useState<Date | undefined>(
    new Date(2025, 10, 14)
  );

  // Grey “badge” days like in your screenshot
  const eventDays: Date[] = datesArray?.map((date) => new Date(date)) ?? [];

  const isAllowedDate = (date: Date) => {
    if (!eventDays.length) return true;
    return eventDays.some(
      (d) =>
        d.getFullYear() === date.getFullYear() &&
        d.getMonth() === date.getMonth() &&
        d.getDate() === date.getDate()
    );
  };

  return (
    <div className={styles.wrap}>
      <DayPicker
        locale={enGB}
        mode="single"
        selected={selected}
        onSelect={(date) => {
          if (date && isAllowedDate(date)) {
            setSelected(date);
          }
        }}
        showOutsideDays
        fixedWeeks
        className={styles.calendar}
        modifiers={{event: eventDays}}
        modifiersClassNames={{event: styles.event}}
        disabled={eventDays.length ? (date) => !isAllowedDate(date) : undefined}
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
