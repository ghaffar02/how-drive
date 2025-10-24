'use client';
import React from 'react';
import Image from 'next/image';
import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from '@mui/material';
import cross from '@/assets/svgs/dashboard-student/crossicon.svg';
import localFont from '@/utils/themes';

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
  const endHour = 24;
  const hours = Array.from(
    {length: endHour - startHour},
    (_, i) => startHour + i
  );

  const categories = [
    {label: 'Gespräch', color: '#A855F7'},
    {label: 'Theoriestunden', color: '#2563EB'},
    {label: 'Fahrstunden', color: '#0891B2'},
    {label: 'Prüfungen', color: '#DC2626'}
  ];

  // Each column has a flexible width but a min width (dynamic + scrollable)
  const CAT_MIN_W = 230;
  const TIME_COL_W = 64;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: 0,
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.6)',
          pb: 1.25,
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
            marginRight: '12px'
          }}
        />
      </Box>

      {/* Table with Scroll */}
      <TableContainer
        component={Paper}
        sx={{
          flex: 1,
          minHeight: 0,
          overflowX: 'auto',
          overflowY: 'auto',
          borderRadius: '16px',
          background: 'transparent',
          boxShadow: 'none',
          '&::-webkit-scrollbar': {
            height: '8px',
            width: '8px'
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#ccc',
            borderRadius: '4px'
          }
        }}
      >
        <Table
          sx={{
            borderCollapse: 'separate',
            borderSpacing: '6px',
            minWidth: `${TIME_COL_W + categories.length * CAT_MIN_W}px`
          }}
        >
          {/* === Header Row === */}
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  width: TIME_COL_W,
                  borderRadius: '10px',
                  textAlign: 'center',
                  backgroundColor: 'transparent',
                  border: 0
                }}
              />
              {categories.map((c) => (
                <TableCell
                  key={c.label}
                  sx={{
                    minWidth: CAT_MIN_W,
                    width: 'auto',
                    background: c.color,
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 13,
                    textAlign: 'center',
                    height: '28px',
                    padding: '0px',
                    borderRadius: '999px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {c.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* === Body Rows === */}
          <TableBody>
            {hours.map((hour) => {
              const hh = String(hour).padStart(2, '0');
              return (
                <TableRow key={hour}>
                  {/* Time Column */}
                  <TableCell
                    sx={{
                      width: TIME_COL_W,
                      textAlign: 'center',
                      fontWeight: 500,
                      color: '#4a5568',
                      padding: 0,
                      height: '48px',
                      border: 'unset',
                      background: 'transparent'
                    }}
                  >
                    {hh}
                  </TableCell>

                  {/* Dynamic Columns */}
                  {categories.map((cat) => {
                    const cellAppointments = appointments.filter(
                      (a) =>
                        parseInt(a.startTime.split(':')[0]) === hour &&
                        a.color.toLowerCase() === cat.color.toLowerCase()
                    );

                    return (
                      <TableCell
                        key={`${hour}-${cat.label}`}
                        sx={{
                          minWidth: CAT_MIN_W,
                          width: 'auto',
                          background: 'rgba(255,255,255,0.7)',
                          border: '1px solid rgba(255,255,255,0.6)',
                          borderRadius: '12px',
                          verticalAlign: 'middle',
                          padding: '0'
                        }}
                      >
                        {cellAppointments.map((a) => (
                          <Box
                            key={a.id}
                            sx={{
                              background: `${a.color}1A`,
                              border: `1px solid ${a.color}`,
                              borderRadius: '10px',
                              px: '4px',
                              py: '2px',
                              mb: '2px'
                            }}
                          >
                            <Typography
                              sx={{...localFont.inter14, fontWeight: 700}}
                            >
                              {a.title}
                            </Typography>
                            <Typography
                              sx={{...localFont.inter14, fontWeight: 400}}
                            >
                              {a.startTime} - {a.endTime}
                            </Typography>
                          </Box>
                        ))}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
