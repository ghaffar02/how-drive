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
          style={{cursor: 'pointer'}}
        />
      </Box>

      {/* Category Labels (like Gespräch, Theoriestunden, Fahrstunden) */}
      <Box
        sx={{
          display: 'flex',
          gap: 1.5,
          mb: 2,
          flexWrap: 'wrap'
        }}
      >
        <Box
          sx={{
            background: '#A855F7',
            borderRadius: '8px',
            padding: '6px 12px',
            color: '#fff',
            fontWeight: 500,
            fontSize: '13px'
          }}
        >
          Gespräch
        </Box>
        <Box
          sx={{
            background: '#4F46E5',
            borderRadius: '8px',
            padding: '6px 12px',
            color: '#fff',
            fontWeight: 500,
            fontSize: '13px'
          }}
        >
          Theoriestunden
        </Box>
        <Box
          sx={{
            background: '#06B6D4',
            borderRadius: '8px',
            padding: '6px 12px',
            color: '#fff',
            fontWeight: 500,
            fontSize: '13px'
          }}
        >
          Fahrstunden
        </Box>
      </Box>

      {/* Timeline Section (06:00 - 23:00) */}
      <Box
        sx={{
          flex: 1,
          display: 'grid',
          gridTemplateRows: 'repeat(18, 1fr)', // 6:00 - 23:00
          gap: '4px',
          overflowY: 'auto',
          pr: 1
        }}
      >
        {Array.from({length: 18}, (_, i) => {
          const hour = 6 + i; // start at 6 AM
          const label = `${hour.toString().padStart(2, '0')}:00`;

          return (
            <Box
              key={hour}
              sx={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(255,255,255,0.4)',
                padding: '6px 8px',
                position: 'relative',
                minHeight: '38px'
              }}
            >
              <Typography
                sx={{
                  width: 45,
                  fontSize: '13px',
                  color: '#4B5563',
                  flexShrink: 0
                }}
              >
                {label}
              </Typography>

              {/* Appointment(s) that match this hour */}
              {appointments
                .filter(
                  (a) =>
                    parseInt(a.startTime.split(':')[0]) === hour ||
                    (parseInt(a.startTime.split(':')[0]) < hour &&
                      parseInt(a.endTime.split(':')[0]) >= hour)
                )
                .map((a) => (
                  <Box
                    key={a.id}
                    sx={{
                      background: a.color,
                      color: '#fff',
                      borderRadius: '8px',
                      padding: '6px 10px',
                      fontSize: '13px',
                      fontWeight: 500,
                      marginLeft: '10px',
                      minWidth: '140px',
                      boxShadow:
                        '0px 0px 2px 0px var(--token-46fa6e04-aa50-4324-8a35-fd1170036322, rgb(212, 212, 216))',
                      border:
                        '1px solid var(--token-eb8c55ba-37a9-4a2d-935d-5f0ec2080647, #ffffff)'
                    }}
                  >
                    <Typography sx={{fontSize: '13px', fontWeight: 600}}>
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
      </Box>
    </Box>
  );
}
