'use client';
import React from 'react';
import Image from 'next/image';
import {Box, Typography} from '@mui/material';
import cross from '@/assets/svgs/dashboard-student/crossicon.svg';

interface Appointment {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
  hour: number;
  category: string;
  duration: number;
}

interface DayDetailViewProps {
  date: Date;
  appointments: Appointment[];
  onClose: () => void;
}

export function DayDetailView({
  date,
  appointments,
  onClose
}: DayDetailViewProps) {
  const startHour = 6;
  const endHour = 25;
  const totalRows = endHour - startHour;

  const categories = [
    {
      key: 'purple',
      label: 'Gespräch',
      borderColor: 'rgb(147, 51, 234)',
      backgroundColor: 'rgb(237, 225, 250)'
    },
    {
      key: 'blue',
      label: 'Theoriestunden',
      borderColor: 'rgb(37, 99, 235)',
      backgroundColor: 'rgb(227, 236, 255)'
    },
    {
      key: 'cyan',
      label: 'Fahrstunden',
      borderColor: 'rgb(8, 145, 178)',
      backgroundColor: 'rgb(222, 248, 250)'
    },
    {
      key: 'red',
      label: 'Prüfungen',
      borderColor: 'rgb(220, 38, 38)',
      backgroundColor: 'rgb(250, 222, 222)'
    }
  ];

  // translateY based on start minute (with special rule)
  const getTranslateForStartTime = (start: string, end: string) => {
    const minute = start.slice(-2);
    const endMinute = end.slice(-2);

    // SPECIAL CASE:
    // If event is XX:45 → (nextHour):00 → stay inside the same row
    if (minute === '45' && endMinute === '00') {
      return 'translateY(0px)';
    } else if (minute === '30' && endMinute === '00') {
      return 'translateY(0px)';
    } else if (minute === '15' && endMinute === '00') {
      return 'translateY(0px)';
    }

    if (minute === '15') return 'translateY(14px)';
    if (minute === '30') return 'translateY(28px)';
    if (minute === '45') return 'translateY(42px)';

    return 'translateY(0px)';
  };

  // height based on duration
  const getHeightForDuration = (start: string, end: string) => {
    const [sh, sm] = start.split(':').map(Number);
    const [eh, em] = end.split(':').map(Number);

    const totalStart = sh * 60 + sm;
    const totalEnd = eh * 60 + em;

    const duration = totalEnd - totalStart;

    if (duration === 15) return '48px';
    if (duration === 30) return '48px';
    if (duration === 45) return '48px';
    if (duration === 60) return '48px';
    if (duration === 75) return '60px';
    if (duration === 90) return '71px';
    if (duration === 120) return '96px';

    return '48px';
  };

  // group events by minute for horizontal stacking
  const groupByMinute = (
    events: Appointment[]
  ): Record<string, Appointment[]> => {
    return events.reduce(
      (acc, e) => {
        const minute = e.startTime.slice(-2);
        if (!acc[minute]) acc[minute] = [];
        acc[minute].push(e);
        return acc;
      },
      {} as Record<string, Appointment[]>
    );
  };

  return (
    <Box
      sx={{
        padding: 2,
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.5)',
          pb: 3.5
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: '18px',
            color: '#2d3748',
            textTransform: 'capitalize',
            fontFamily: '"Inter", sans-serif  !important'
          }}
        >
          {date.toLocaleDateString('de-DE', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </Typography>

        <Image
          src={cross}
          alt="close"
          width={20}
          height={20}
          onClick={onClose}
          style={{
            cursor: 'pointer',
            transform: 'rotate(45deg)',
            marginRight: '6px'
          }}
        />
      </Box>

      {/* GRID */}
      <Box
        className="daydetail-container"
        sx={{
          flex: 1,
          display: 'grid',
          gridTemplateRows: `75px repeat(${totalRows}, 1fr)`,
          gridTemplateColumns: `26px repeat(4, 234px)`,
          gap: '8px',
          overflow: 'scroll',
          maxWidth: '930px'
        }}
      >
        <Box />

        {categories.map((cat) => (
          <Box
            key={cat.key}
            sx={{
              background: cat.borderColor,
              color: '#fff',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 600,
              height: '30px',
              fontFamily: '"Inter", sans-serif  !important'
            }}
          >
            {cat.label}
          </Box>
        ))}

        {/* HOURS */}
        {Array.from({length: totalRows}, (_, i) => {
          const hour = startHour + i;

          return (
            <React.Fragment key={hour}>
              {/* Time label */}
              <Box
                className="fontFamilyInter"
                sx={{
                  textAlign: 'center',
                  paddingTop: '10px',
                  color: '#4B5563',
                  fontWeight: 500
                }}
              >
                {hour.toString().padStart(2, '0')}
              </Box>

              {categories.map((cat) => {
                const cellEvents = appointments.filter(
                  (a) => a.hour === hour && a.category === cat.key
                );

                const grouped = groupByMinute(cellEvents);

                return (
                  <Box
                    key={cat.key}
                    sx={{
                      background: 'rgba(255,255,255,0.6)',
                      borderRadius: '8px',
                      position: 'relative',
                      height: '48px',
                      width: '234px',
                      overflow: 'visible'
                    }}
                  >
                    {Object.entries(grouped).map(([minute, eventsInGroup]) => (
                      <Box
                        key={minute}
                        sx={{
                          position: 'absolute',
                          left: 0,
                          right: 0,
                          top: 0,
                          transform: getTranslateForStartTime(
                            eventsInGroup[0].startTime,
                            eventsInGroup[0].endTime
                          ),
                          display: 'flex',
                          gap: '4px',
                          zIndex: 200
                        }}
                      >
                        {eventsInGroup.map((e) => (
                          <Box
                            key={e.id}
                            sx={{
                              background: cat.backgroundColor,
                              border: `1px solid ${cat.borderColor}`,
                              borderLeft: `4px solid ${cat.borderColor}`,
                              borderRadius: '8px',
                              padding: '2px 8px',
                              fontFamily: '"Inter", sans-serif  !important',
                              width: '100%',
                              height: getHeightForDuration(
                                e.startTime,
                                e.endTime
                              ),
                              fontSize: {
                                xs: '12px',
                                md: '13px',
                                lg: '14px'
                              },
                              overflow: 'hidden'
                            }}
                          >
                            <Box
                              sx={{
                                display: 'inline-flex',
                                flexWrap: 'nowrap',
                                width: '100%',
                                justifyContent: 'space-between'
                              }}
                            >
                              <span style={{fontWeight: 400}}>{e.title}</span>
                              <span style={{fontWeight: 400}}>(B17)</span>
                            </Box>

                            <br />

                            <span style={{fontWeight: 300}}>
                              {e.startTime} - {e.endTime}
                            </span>
                          </Box>
                        ))}
                      </Box>
                    ))}
                  </Box>
                );
              })}
            </React.Fragment>
          );
        })}
      </Box>
    </Box>
  );
}
