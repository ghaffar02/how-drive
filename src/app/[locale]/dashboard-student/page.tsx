'use client';
import StudentLayout from '@/components/student-dashboard/layout/layout';
import {Box} from '@mui/material';

export default function StudentDashboard() {
  return (
    <Box sx={{width: '100%'}}>
      <StudentLayout />
    </Box>
  );
}
