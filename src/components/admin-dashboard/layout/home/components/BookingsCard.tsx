'use client';
import {Box, Typography, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import React from 'react';
import localFont from '@/utils/themes';
import {usePathname} from 'next/navigation';

type MonthlyBookingData = {
  month: string;
  talk: number;
  theory: number;
  driving: number;
  exam: number;
};

type BookingsCardProps = {
  monthlyData: MonthlyBookingData[];
  total: {talk: number; theory: number; driving: number; exam: number};
  lastYear: {talk: number; theory: number; driving: number; exam: number};
};

export default function BookingsCard({monthlyData, total, lastYear}: BookingsCardProps) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const formatter = new Intl.NumberFormat(locale === 'de' ? 'de-DE' : 'en-US');

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        border: '1px solid #fff',
        borderRadius: '18px',
        padding: '24px',
        background: '#ffffffbf',
        boxShadow:
          '0px 0px 0px 1px #ffffff, 0px 1px 0px 0px rgba(0,0,0,0.25), 0px 1px 1px 0px rgba(0,0,0,0.25)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        overflow: 'hidden'
      }}
    >
      <Typography
        sx={{
          ...localFont.inter18,
          fontFamily: '"Inter", sans-serif !important',
          fontWeight: '500',
          color: '#3f3f46'
        }}
      >
        Bookings
      </Typography>

      <Box sx={{overflowX: 'auto', flex: 1}}>
        <Table sx={{minWidth: 300}}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  ...localFont.inter12,
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: '500',
                  color: '#71717a',
                  padding: '8px',
                  borderBottom: '1px solid #e4e4e7'
                }}
              >
                Month
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  ...localFont.inter12,
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: '500',
                  color: '#71717a',
                  padding: '8px',
                  borderBottom: '1px solid #e4e4e7'
                }}
              >
                Talk
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  ...localFont.inter12,
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: '500',
                  color: '#71717a',
                  padding: '8px',
                  borderBottom: '1px solid #e4e4e7'
                }}
              >
                Theory
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  ...localFont.inter12,
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: '500',
                  color: '#71717a',
                  padding: '8px',
                  borderBottom: '1px solid #e4e4e7'
                }}
              >
                Driving
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  ...localFont.inter12,
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: '500',
                  color: '#71717a',
                  padding: '8px',
                  borderBottom: '1px solid #e4e4e7'
                }}
              >
                Exam
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {monthlyData.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{
                    ...localFont.inter12,
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400',
                    color: '#3f3f46',
                    padding: '8px',
                    borderBottom: '1px solid #f4f4f5'
                  }}
                >
                  {row.month}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    ...localFont.inter12,
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400',
                    color: '#3f3f46',
                    padding: '8px',
                    borderBottom: '1px solid #f4f4f5'
                  }}
                >
                  {formatter.format(row.talk)}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    ...localFont.inter12,
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400',
                    color: '#3f3f46',
                    padding: '8px',
                    borderBottom: '1px solid #f4f4f5'
                  }}
                >
                  {formatter.format(row.theory)}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    ...localFont.inter12,
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400',
                    color: '#3f3f46',
                    padding: '8px',
                    borderBottom: '1px solid #f4f4f5'
                  }}
                >
                  {formatter.format(row.driving)}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    ...localFont.inter12,
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400',
                    color: '#3f3f46',
                    padding: '8px',
                    borderBottom: '1px solid #f4f4f5'
                  }}
                >
                  {formatter.format(row.exam)}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell
                sx={{
                  ...localFont.inter12,
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: '600',
                  color: '#3f3f46',
                  padding: '8px',
                  borderBottom: '1px solid #e4e4e7'
                }}
              >
                Total
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  ...localFont.inter12,
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: '600',
                  color: '#3f3f46',
                  padding: '8px',
                  borderBottom: '1px solid #e4e4e7'
                }}
              >
                {formatter.format(total.talk)}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  ...localFont.inter12,
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: '600',
                  color: '#3f3f46',
                  padding: '8px',
                  borderBottom: '1px solid #e4e4e7'
                }}
              >
                {formatter.format(total.theory)}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  ...localFont.inter12,
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: '600',
                  color: '#3f3f46',
                  padding: '8px',
                  borderBottom: '1px solid #e4e4e7'
                }}
              >
                {formatter.format(total.driving)}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  ...localFont.inter12,
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: '600',
                  color: '#3f3f46',
                  padding: '8px',
                  borderBottom: '1px solid #e4e4e7'
                }}
              >
                {formatter.format(total.exam)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  ...localFont.inter12,
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: '400',
                  color: '#71717a',
                  padding: '8px'
                }}
              >
                Last Y
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  ...localFont.inter12,
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: '400',
                  color: '#71717a',
                  padding: '8px'
                }}
              >
                {formatter.format(lastYear.talk)}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  ...localFont.inter12,
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: '400',
                  color: '#71717a',
                  padding: '8px'
                }}
              >
                {formatter.format(lastYear.theory)}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  ...localFont.inter12,
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: '400',
                  color: '#71717a',
                  padding: '8px'
                }}
              >
                {formatter.format(lastYear.driving)}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  ...localFont.inter12,
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: '400',
                  color: '#71717a',
                  padding: '8px'
                }}
              >
                {formatter.format(lastYear.exam)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}

