'use client';
import {Box, Typography, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import React from 'react';
import localFont from '@/utils/themes';
import {usePathname} from 'next/navigation';

type Column = {
  key: string;
  label: string;
};

type TableCardProps = {
  title: string;
  columns: Column[];
  monthlyData: Array<{month: string; [key: string]: string | number}>;
  total: Record<string, number>;
  lastYear: Record<string, number>;
};

export default function TableCard({
  title,
  columns,
  monthlyData,
  total,
  lastYear
}: TableCardProps) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const formatter = new Intl.NumberFormat(locale === 'de' ? 'de-DE' : 'en-US');

  return (
    <Box
      sx={{
        width: '100%',
        height: '766px',
        border: '1px solid #fff',
        borderRadius: '18px',
        padding: '16px',
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
        {title}
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
              {columns.map((column) => (
                <TableCell
                  key={column.key}
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
                  {column.label}
                </TableCell>
              ))}
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
                {columns.map((column) => (
                  <TableCell
                    key={column.key}
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
                    {formatter.format(row[column.key] as number)}
                  </TableCell>
                ))}
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
              {columns.map((column) => (
                <TableCell
                  key={column.key}
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
                  {formatter.format(total[column.key])}
                </TableCell>
              ))}
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
              {columns.map((column) => (
                <TableCell
                  key={column.key}
                  align="right"
                  sx={{
                    ...localFont.inter12,
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400',
                    color: '#71717a',
                    padding: '8px'
                  }}
                >
                  {formatter.format(lastYear[column.key])}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}

