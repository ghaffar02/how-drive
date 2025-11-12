'use client';
import React, {useState} from 'react';
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import {format, parse, startOfWeek, getDay} from 'date-fns';
import {enUS, de} from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './BigCalander.module.css';
import {DayDetailView} from './DayDetailView';
import {Box, MenuItem, Popover, TextField, Typography} from '@mui/material';
import MiniFramerCalendar from '../MiniFramerCalendar';
import localFont from '@/utils/themes';
import Image from 'next/image';
import plus from '@/assets/svgs/dashboard-student/calander/plus.svg';
import {usePathname} from 'next/navigation';
import TimePickerValue from '../../../profile-setting/components/TimePicker';
import CustomButton from '@/components/school-dashboard/CustomButton';
import arrow from '@/assets/svgs/dashboard-student/arrowsetting.svg';
import whiteArrow from '@/assets/svgs/whiteArrow.svg';
import CustomTextField from '@/components/school-dashboard/InputField';
import crossCircle from '@/assets/svgs/dashboard-student/crosscircle.svg';

const locales = {'en-US': enUS, de: de};

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

// ✅ Custom Date Cell (receives visibleDate from closure)
const CustomDateCell: React.FC<any> = ({children, value, visibleDate}) => {
  const isOffRange = value.getMonth() !== visibleDate.getMonth();
  const isDemoMonth =
    visibleDate.getFullYear() === 2025 && visibleDate.getMonth() === 10; // ✅ Only November 2025

  const day = value.getDate();
  const counts = isDemoMonth
    ? {
        purple: day % 2 === 0 ? 12 : null,
        blue: day % 3 === 0 ? 5 : null,
        cyan: day % 4 === 0 ? 3 : null,
        red: day % 5 === 0 ? 1 : null
      }
    : {
        purple: null,
        blue: null,
        cyan: null,
        red: null
      };

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
      {/* ✅ Background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: isOffRange ? 'transparent' : '#FFFFFFBF', // ✅ white with 75% opacity
          borderRadius: '10px',
          transition: 'background 0.3s ease',
          zIndex: 1,
          border: isOffRange ? 'none' : '2px solid #fff'
        }}
      />

      {/* ✅ Foreground */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden'
        }}
      >
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

export default function BigCalendar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [visibleDate, setVisibleDate] = useState(new Date()); // ✅ new state

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
              culture={currentLocale}
              messages={calendarMessages}
              events={events}
              startAccessor="start"
              endAccessor="end"
              components={{
                event: EventComponent,
                dateCellWrapper: (props) => (
                  <CustomDateCell {...props} visibleDate={visibleDate} />
                )
              }}
              views={['month']}
              selectable
              onSelectSlot={handleDateClick}
              onSelectEvent={(event) => setSelectedDate(event.start)}
              onNavigate={(date) => setVisibleDate(date)} // ✅ track visible month
              toolbar
              style={{flex: 1, height: '100%', width: '100%'}}
            />
          </Box>
        )}
      </div>
    </div>
  );
}

type EventAddPopoverProps = {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
};

function EventAddPopover({open, anchorEl, onClose}: EventAddPopoverProps) {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
      transformOrigin={{vertical: 'top', horizontal: 'right'}}
      PaperProps={{
        sx: {
          maxWidth: '300px',
          height: '95vh',
          borderRadius: '10px',
          border: '1px solid #fff',
          p: '16px',
          background: 'rgba(248, 250, 252, 0.3)',
          backdropFilter: 'blur(15px)',
          boxShadow: '0px 0px 2px 0px rgb(212, 212, 216)'
        }
      }}
    >
      {/* Your popover content here */}
    </Popover>
  );
}
