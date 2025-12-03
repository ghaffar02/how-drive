'use client';
import AdminDashboard from '@/components/admin-dashboard/layout/Layout';
import {Box} from '@mui/material';

export default function Admin() {
  return (
    <Box
      sx={{
        backgroundImage: "url('/bgStudentDashboard.svg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        padding: {xs: '0px 16px', md: '24px'},
        position: 'relative'
      }}
    >
      <AdminDashboard />
    </Box>
  );
}
