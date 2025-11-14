'use client';
import React from 'react';
import Image from 'next/image';
import {Box, Typography} from '@mui/material';
import cross from '@/assets/svgs/dashboard-student/crossicon.svg';

interface Appointment {
  id: number;
  title: string;
  hour: number;
  duration: number;
  category: string;
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
  const endHour = 23;
  const totalRows = endHour - startHour;

  const categories = [
    {key: 'purple', label: 'Gespräch', color: '#A855F7'},
    {key: 'blue', label: 'Theoriestunden', color: '#2563EB'},
    {key: 'cyan', label: 'Fahrstunden', color: '#0891B2'},
    {key: 'red', label: 'Prüfungen', color: '#DC2626'}
  ];

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
          // prev value
          gridTemplateRows: `75px repeat(${totalRows}, 1fr)`,
          // gridTemplateColumns: `26px repeat(${totalColumns}, 1fr)`,
          // new value
          // gridTemplateRows: `75px repeat(${totalRows}, 1fr)`,
          gridTemplateColumns: `26px repeat(4, 234px)`,
          gap: '8px',
          // backgroundColor: 'red',
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
              background: cat.color,
              color: '#fff',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 600,
              height: '30px',
              fontFamily: '"Inter", sans-serif  !important',
              fontSize: {xs: '12px', md: '13px', lg: '14px'},
              lineHeight: '1.6em'
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
                  fontWeight: 500,
                  fontSize: {xs: '12px', md: '13px', lg: '14px'},
                  // fontFamily: '"Inter", sans-serif  !important',
                  lineHeight: '1.6em'
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
                      height: '56px',
                      width: '234px'
                      // backgroundColor: 'red'
                    }}
                  >
                    {cellEvents.map((e) => (
                      <Box
                        key={e.id}
                        sx={{
                          background: `${cat.color}20`,
                          border: `1px solid ${cat.color}`,
                          borderLeft: `4px solid ${cat.color}`,
                          borderRadius: '8px',
                          padding: '2px 8px',
                          fontSize: {xs: '12px', md: '13px', lg: '14px'},
                          fontFamily: '"Inter", sans-serif  !important',
                          color: '#4a5568',
                          lineHeight: '1.6em',
                          position: 'absolute',
                          inset: 0
                        }}
                      >
                        <span
                          className="fontFamilyInter"
                          style={{
                            fontFamily: '"Inter", sans-serif  !important',
                            fontWeight: '400'
                          }}
                        >
                          {e.title}
                        </span>
                        <br />
                        <span
                          className="fontFamilyInter"
                          style={{paddingTop: '0px', fontWeight: 300}}
                        >
                          {e.hour}:00 - {e.hour + e.duration}:00
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
