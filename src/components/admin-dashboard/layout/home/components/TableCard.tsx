'use client';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
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
        gap: '12px',
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
        <Table sx={{minWidth: 200, borderCollapse: 'collapse'}}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontSize: '15px',
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: '500',
                  color: '#71717a',
                  border: 'none'
                }}
              >
                Month
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.key}
                  align="left"
                  sx={{
                    fontSize: '15px',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '500',
                    color: '#71717a',
                    border: 'none'
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {monthlyData.map((row, index) => (
              <TableRow
                key={index}
                sx={{'& td': {paddingTop: '10px', paddingBottom: '10px'}}}
              >
                <TableCell
                  sx={{
                    fontSize: '15px',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400',
                    color: '#3f3f46',
                    border: 'none'
                  }}
                >
                  {row.month}
                </TableCell>
                {columns.map((column) => (
                  <TableCell
                    key={column.key}
                    align="left"
                    sx={{
                      fontSize: '17px',
                      fontFamily: '"Inter", sans-serif !important',
                      fontWeight: '500',
                      color: '#3f3f46',
                      border: 'none'
                    }}
                  >
                    {formatter.format(row[column.key] as number)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
            <TableRow
              sx={{'& td': {paddingTop: ' 8px', paddingBottom: ' 8px'}}}
            >
              <TableCell
                sx={{
                  fontSize: '15px',
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: '600',
                  color: '#3f3f46',

                  border: 'none'
                }}
              >
                Total
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.key}
                  align="left"
                  sx={{
                    fontSize: '17px',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '500',
                    color: '#3f3f46',
                    border: 'none'
                  }}
                >
                  {formatter.format(total[column.key])}
                </TableCell>
              ))}
            </TableRow>
            <TableRow
              sx={{'& td': {paddingTop: ' 8px', paddingBottom: ' 8px'}}}
            >
              <TableCell
                sx={{
                  fontSize: '15px',
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: '400',
                  color: '#71717a',
                  border: 'none'
                }}
              >
                Last Y
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.key}
                  align="left"
                  sx={{
                    fontSize: '17px',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '500',
                    color: '#71717a',
                    border: 'none'
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
