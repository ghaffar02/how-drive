'use client';
import {Box, Typography} from '@mui/material';
import React from 'react';
import localFont from '@/utils/themes';
import {usePathname} from 'next/navigation';

type StatsCardProps = {
  title: string;
  total: number;
  active: number;
  percentage: number;
  dailySignup: number;
  weeklySignup: number;
  monthlySignup: number;
};

type MetricItemProps = {
  value: string | number;
  label: string;
  showDivider?: boolean;
};

function MetricItem({value, label, showDivider = true}: MetricItemProps) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          mb: '25px',
          textAlign: 'center',
          alignItems: 'center'
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            fontFamily: '"Inter", sans-serif !important',
            fontWeight: '500',
            color: '#000'
          }}
        >
          {value}
        </Typography>
        <Typography
          sx={{
            fontSize: '16px',
            fontFamily: '"Inter", sans-serif !important',
            fontWeight: '400',
            color: '#71717a'
          }}
        >
          {label}
        </Typography>
      </Box>
      {showDivider && (
        <Box
          sx={{
            width: '100%',
            height: '1px',
            backgroundColor: '#e4e4e7',
            mb: '12px'
          }}
        />
      )}
    </>
  );
}

export default function StatsCard({
  title,
  total,
  active,
  percentage,
  dailySignup,
  weeklySignup,
  monthlySignup
}: StatsCardProps) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const formatter = new Intl.NumberFormat(locale === 'de' ? 'de-DE' : 'en-US');

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        minHeight: '750px',
        border: '1px solid #fff',
        borderRadius: '18px',
        padding: '16px',
        background: '#ffffffbf',
        boxShadow:
          '0px 0px 0px 1px #ffffff, 0px 1px 0px 0px rgba(0,0,0,0.25), 0px 1px 1px 0px rgba(0,0,0,0.25)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography
        sx={{
          fontSize: '18px',
          fontFamily: '"Inter", sans-serif !important',
          fontWeight: '500',
          color: '#3f3f46',
          mb: '24px',
          textAlign: 'left'
        }}
      >
        {title}
      </Typography>

      <MetricItem value={formatter.format(total)} label="Total" />
      <MetricItem value={formatter.format(active)} label="Active" />
      <MetricItem value={`${percentage}%`} label="Percentage" />
      <MetricItem value={formatter.format(dailySignup)} label="Daily signup" />
      <MetricItem
        value={formatter.format(weeklySignup)}
        label="Weekly signup"
      />
      <MetricItem
        value={formatter.format(monthlySignup)}
        label="Monthly signup"
        showDivider={false}
      />
    </Box>
  );
}
