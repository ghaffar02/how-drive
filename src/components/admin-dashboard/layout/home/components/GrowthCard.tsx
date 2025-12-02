'use client';
import {Box, Typography, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import React from 'react';
import localFont from '@/utils/themes';
import {usePathname} from 'next/navigation';

type MonthlyData = {
  month: string;
  stu: number;
  sch: number;
  tra: number;
};

type GrowthCardProps = {
  monthlyData: MonthlyData[];
  total: {stu: number; sch: number; tra: number};
  lastYear: {stu: number; sch: number; tra: number};
};

export default function GrowthCard({monthlyData, total, lastYear}: GrowthCardProps) {
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
        Growth
      </Typography>

      <Box sx={{overflowX: 'auto', flex: 1}}>
        <Table sx={{minWidth: 200}}>
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
                Stu
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
                Sch
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
                Tra
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
                  {formatter.format(row.stu)}
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
                  {formatter.format(row.sch)}
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
                  {formatter.format(row.tra)}
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
                {formatter.format(total.stu)}
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
                {formatter.format(total.sch)}
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
                {formatter.format(total.tra)}
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
                {formatter.format(lastYear.stu)}
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
                {formatter.format(lastYear.sch)}
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
                {formatter.format(lastYear.tra)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}

