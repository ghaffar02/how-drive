'use client';
import StudentLayout from '@/components/student-dashboard/layout/Layout';
import {Box} from '@mui/material';

export default function StudentDashboard() {
  return (
    <Box
      sx={{
        backgroundImage: "url('/bgStudentDashboard.svg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        padding: '24px',
        backgroundColor: '#fff'
      }}
    >
      <StudentLayout />
    </Box>
  );
}
