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

// 🎯 Only 5 days in November 2025 will have activities
const demoActivities: Record<number, any> = {
  3: {purple: 4, blue: 1},
  7: {red: 2},
  12: {cyan: 3, purple: 1},
  19: {blue: 5},
  25: {purple: 2, red: 1}
};

// -------------------------
// Custom Date Cell Wrapper
// -------------------------
const CustomDateCell: React.FC<any> = ({
  children,
  value,
  currentMonth,
  currentYear
}) => {
  const isOffRange =
    value.getMonth() !== currentMonth || value.getFullYear() !== currentYear;

  const isDemoMonth = currentYear === 2025 && currentMonth === 10; // November 2025

  const day = value.getDate();

  let counts;

  if (isDemoMonth && demoActivities[day]) {
    const {
      purple = null,
      blue = null,
      cyan = null,
      red = null
    } = demoActivities[day];

    counts = {purple, blue, cyan, red};
  } else {
    counts = {purple: null, blue: null, cyan: null, red: null};
  }

  const hasData = Object.values(counts).some(Boolean);

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
      {/* White background */}
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
        {/* Day number */}
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
              mt: {xs: '31px', sm: '31.5px', md: '33px'},
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '3px',
              ml: '16px',
              width: '100%'
            }}
          >
            {counts.purple && (
              <Box sx={{display: 'flex', alignItems: 'center', gap: '3px'}}>
                <Box
                  sx={{
                    width: '5px',
                    height: '14px',
                    borderRadius: '999px',
                    backgroundColor: '#A855F7'
                  }}
                />
                <Typography sx={{fontSize: '10px', color: '#4A5568'}}>
                  {counts.purple}
                </Typography>
              </Box>
            )}
            {counts.blue && (
              <Box sx={{display: 'flex', alignItems: 'center', gap: '3px'}}>
                <Box
                  sx={{
                    width: '5px',
                    height: '14px',
                    borderRadius: '999px',
                    backgroundColor: '#2563EB'
                  }}
                />
                <Typography sx={{fontSize: '10px', color: '#4A5568'}}>
                  {counts.blue}
                </Typography>
              </Box>
            )}
            {counts.cyan && (
              <Box sx={{display: 'flex', alignItems: 'center', gap: '3px'}}>
                <Box
                  sx={{
                    width: '5px',
                    height: '14px',
                    borderRadius: '999px',
                    backgroundColor: '#0891B2'
                  }}
                />
                <Typography sx={{fontSize: '10px', color: '#4A5568'}}>
                  {counts.cyan}
                </Typography>
              </Box>
            )}
            {counts.red && (
              <Box sx={{display: 'flex', alignItems: 'center', gap: '3px'}}>
                <Box
                  sx={{
                    width: '5px',
                    height: '14px',
                    borderRadius: '999px',
                    backgroundColor: '#DC2626'
                  }}
                />
                <Typography sx={{fontSize: '10px', color: '#4A5568'}}>
                  {counts.red}
                </Typography>
              </Box>
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

  const handleDateClick = (slotInfo: any) => setSelectedDate(slotInfo.start);

  const pathname = usePathname();
  const isGerman = pathname.startsWith('/de');
  const currentLocale = isGerman ? 'de' : 'en-US';

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

  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.calendarContainer}>
        {selectedDate ? (
          <DayDetailView
            date={selectedDate}
            appointments={[]}
            onClose={() => setSelectedDate(null)}
          />
        ) : (
          <Box sx={{height: '100%', width: '100%', position: 'relative'}}>
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
              startAccessor="start"
              endAccessor="end"
              components={{
                dateCellWrapper: (props) => (
                  <CustomDateCell
                    {...props}
                    currentMonth={visibleDate.getMonth()}
                    currentYear={visibleDate.getFullYear()}
                  />
                )
              }}
              onSelectSlot={handleDateClick}
              views={['month']}
              selectable
              toolbar
              onNavigate={(date) => setVisibleDate(date)}
              style={{flex: 1, height: '100%', width: '100%'}}
            />
          </Box>
        )}
      </div>
    </div>
  );
}
