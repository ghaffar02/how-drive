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

  // 1 — translate based on minutes
  const getTranslateForStartTime = (time: string) => {
    const minuteString = time.slice(-2);

    if (minuteString === '15') return 'translateY(14px)';
    if (minuteString === '30') return 'translateY(28px)';
    if (minuteString === '45') return 'translateY(42px)';

    return 'translateY(0%)';
  };

  // 2 — height based on duration
  const getHeightForDuration = (start: string, end: string) => {
    const [sh, sm] = start.split(':').map(Number);
    const [eh, em] = end.split(':').map(Number);

    const totalStart = sh * 60 + sm;
    const totalEnd = eh * 60 + em;

    const duration = totalEnd - totalStart;

    if (duration === 60) return '48px';
    if (duration === 75) return '60px';
    if (duration === 90) return '71px';
    if (duration === 120) return '96px';

    return '48px';
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
        {/* Header Row */}
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

        {/* Hours + Appointments */}
        {Array.from({length: totalRows}, (_, i) => {
          const hour = startHour + i;

          return (
            <React.Fragment key={hour}>
              {/* Time Label */}
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

                return (
                  <Box
                    key={cat.key}
                    sx={{
                      background: 'rgba(255,255,255,0.6)',
                      borderRadius: '8px',
                      position: 'relative',
                      height: '48px',
                      width: '234px'
                    }}
                  >
                    {cellEvents.map((e) => (
                      <Box
                        key={e.id}
                        sx={{
                          background: cat.backgroundColor,
                          border: `1px solid ${cat.borderColor}`,
                          borderLeft: `4px solid ${cat.borderColor}`,
                          borderRadius: '8px',
                          padding: '2px 8px',
                          fontFamily: '"Inter", sans-serif  !important',
                          position: 'relative',
                          zIndex: 100,
                          width: '100%',
                          height: getHeightForDuration(e.startTime, e.endTime),
                          transform: getTranslateForStartTime(e.startTime),
                          transition: '0.2s linear',
                          overflowX: 'hidden',
                          fontSize: {xs: '12px', md: '13px', lg: '14px'}
                        }}
                      >
                        <Box sx={{display: 'inline'}}>
                          <span
                            style={{
                              fontWeight: 400,
                              textWrap: 'nowrap',
                              fontSize: 'inherit'
                            }}
                          >
                            {e.title}
                          </span>
                          <span
                            style={{
                              fontWeight: 400,
                              float: 'right',
                              textWrap: 'nowrap',
                              fontSize: 'inherit'
                            }}
                          >
                            (B17)
                          </span>
                        </Box>
                        <br />
                        <span
                          style={{
                            fontWeight: 300,
                            textWrap: 'nowrap',
                            fontSize: 'inherit'
                          }}
                        >
                          {e.startTime} - {e.endTime}
                        </span>
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
