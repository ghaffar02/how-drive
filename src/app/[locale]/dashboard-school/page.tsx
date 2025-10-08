'use client';
import SchoolLayout from '@/components/school-dashboard/layout/Layout';
import {Box} from '@mui/material';

export default function SchoolDashboard() {
  return (
    <Box
      sx={{
        backgroundImage: "url('/bgStudentDashboard.svg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        padding: {xs: '0px 16px', md: '20px'},
        position: 'relative'
      }}
    >
      <SchoolLayout />
    </Box>
  );
}
