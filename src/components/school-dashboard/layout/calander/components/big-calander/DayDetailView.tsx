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
  color: string;
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
  const totalRows = endHour - startHour; // 17 rows
  const totalColumns = 4; // 4 categories

  const categories = [
    {label: 'Gespräch', color: '#A855F7'},
    {label: 'Theoriestunden', color: '#2563EB'},
    {label: 'Fahrstunden', color: '#0891B2'},
    {label: 'Prüfungen', color: '#DC2626'}
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #f5f4ff 0%, #ebeafc 100%)',
        borderRadius: '20px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        padding: 2,
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.5)',
          pb: 1.5,
          mb: 2
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: '18px',
            color: '#2d3748',
            textTransform: 'capitalize'
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

      {/* Table Grid */}
      <Box
        sx={{
          flex: 1,
          display: 'grid',
          gridTemplateRows: `40px repeat(${totalRows}, 1fr)`, // extra row for headers
          gridTemplateColumns: `60px repeat(${totalColumns}, 1fr)`,
          gap: '4px',
          overflowY: 'auto',
          pr: 1
        }}
      >
        {/* === Header Row === */}
        <Box /> {/* Empty time column header */}
        {categories.map((cat, idx) => (
          <Box
            key={idx}
            sx={{
              background: cat.color,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 500,
              fontSize: '13px',
              height: '30px'
              // marginBottom: '54px',
              // padding: '40px'
            }}
          >
            {cat.label}
          </Box>
        ))}
        {/* === Time Rows + Cells === */}
        {Array.from({length: totalRows}, (_, rowIndex) => {
          const hour = startHour + rowIndex;
          const label = `${hour.toString().padStart(2, '0')}`;

          return (
            <React.Fragment key={hour}>
              {/* Time Label Cell */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '14px',
                  color: '#4B5563',
                  fontWeight: 500
                }}
              >
                {label}
              </Box>

              {/* Appointment Cells */}
              {Array.from({length: totalColumns}).map((_, colIndex) => {
                const category = categories[colIndex];
                const cellAppointments = appointments.filter(
                  (a) =>
                    parseInt(a.startTime.split(':')[0]) === hour &&
                    a.color.toLowerCase() === category.color.toLowerCase()
                );

                return (
                  <Box
                    key={`${hour}-${colIndex}`}
                    sx={{
                      background: 'rgba(255,255,255,0.6)',
                      border: '1px solid rgba(255,255,255,0.4)',
                      borderRadius: '8px',
                      minHeight: '48px',
                      padding: '4px 6px',
                      position: 'relative'
                    }}
                  >
                    {cellAppointments.map((a) => (
                      <Box
                        key={a.id}
                        sx={{
                          background: `${a.color}20`,
                          border: `1px solid ${a.color}`,
                          borderRadius: '8px',
                          padding: '4px 8px',
                          color: '#1f2937',
                          fontSize: '13px',
                          fontWeight: 500,
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          boxShadow:
                            '0px 0px 2px 0px var(--token-46fa6e04-aa50-4324-8a35-fd1170036322, rgb(212, 212, 216))'
                        }}
                      >
                        <Typography sx={{fontWeight: 600, fontSize: '13px'}}>
                          {a.title}
                        </Typography>
                        <Typography sx={{fontSize: '12px', opacity: 0.9}}>
                          {a.startTime} - {a.endTime}
                        </Typography>
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
