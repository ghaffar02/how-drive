'use client';
import {Box, Grid} from '@mui/material';
import React from 'react';
import {useTranslations} from 'next-intl';
import StatsCard from './components/StatsCard';
import Messages from './components/Message';
import TableCard from './components/TableCard';
import PopularCitiesCard from './components/PopularCitiesCard';

// Icons for messages
import car from '@/assets/svgs/dashboard-student/home/car.svg';
import steering from '@/assets/svgs/steering.svg';
import logo from '@/assets/pngs/logo.avif';
import userIcon from '@/assets/svgs/userIcon.svg';

type Props = {
  setActiveKey: React.Dispatch<React.SetStateAction<string>>;
};

export default function Home({setActiveKey}: Props) {
  const t = useTranslations('SchoolDashboard.Home');

  // Sample data for messages
  const messages = [
    {
      sender: 'Fahrschule',
      subject: 'Das ist das Thema der Email...',
      date: '02.06.2025',
      icon: car
    },
    {
      sender: 'Fabian',
      subject: 'Das ist das Thema der Email...',
      date: '26.05.2025',
      icon: steering
    },
    {
      sender: 'Tomas Schulz',
      subject: 'Das ist das Thema der Email...',
      date: '28.05.2025',
      icon: userIcon
    },
    {
      sender: 'Fahrschule',
      subject: 'Das ist das Thema der Email...',
      date: '25.05.2025',
      icon: car
    },
    {
      sender: 'Fahrly',
      subject: 'Das ist das Thema der Email...',
      date: '20.05.2025',
      icon: logo
    },
    {
      sender: 'Fahrschule',
      subject: 'Das ist das Thema der Email...',
      date: '02.06.2025',
      icon: car
    },
    {
      sender: 'Fabian',
      subject: 'Das ist das Thema der Email...',
      date: '26.05.2025',
      icon: steering
    },
    {
      sender: 'Tomas Schulz',
      subject: 'Das ist das Thema der Email...',
      date: '28.05.2025',
      icon: userIcon
    },
    {
      sender: 'Fahrschule',
      subject: 'Das ist das Thema der Email...',
      date: '25.05.2025',
      icon: car
    },
    {
      sender: 'Fahrly',
      subject: 'Das ist das Thema der Email...',
      date: '20.05.2025',
      icon: logo
    },
    {
      sender: 'Fabian',
      subject: 'Das ist das Thema der Email...',
      date: '26.05.2025',
      icon: steering
    },
    {
      sender: 'Tomas Schulz',
      subject: 'Das ist das Thema der Email...',
      date: '28.05.2025',
      icon: userIcon
    },
    {
      sender: 'Fahrschule',
      subject: 'Das ist das Thema der Email...',
      date: '25.05.2025',
      icon: car
    },
    {
      sender: 'Fahrly',
      subject: 'Das ist das Thema der Email...',
      date: '20.05.2025',
      icon: logo
    }
  ];

  // Sample data for growth
  const growthMonthlyData = [
    {month: 'Jan', stu: 100, sch: 85, tra: 125},
    {month: 'Feb', stu: 100, sch: 85, tra: 125},
    {month: 'Mar', stu: 100, sch: 85, tra: 125},
    {month: 'Apr', stu: 100, sch: 85, tra: 125},
    {month: 'May', stu: 100, sch: 85, tra: 125},
    {month: 'Jun', stu: 100, sch: 85, tra: 125},
    {month: 'Jul', stu: 100, sch: 85, tra: 125},
    {month: 'Aug', stu: 100, sch: 85, tra: 125},
    {month: 'Sep', stu: 100, sch: 85, tra: 125},
    {month: 'Oct', stu: 100, sch: 85, tra: 125},
    {month: 'Nov', stu: 100, sch: 85, tra: 125},
    {month: 'Dec', stu: 100, sch: 85, tra: 125}
  ];

  const growthTotal = {stu: 1200, sch: 1020, tra: 1500};
  const growthLastYear = {stu: 1000, sch: 950, tra: 1200};

  // Sample data for popular cities
  const popularCitiesSchools = [
    {city: 'München', value: 1200},
    {city: 'Berlin', value: 1100},
    {city: 'Hamburg', value: 950},
    {city: 'Köln', value: 850},
    {city: 'Düsseldorf', value: 700},
    {city: 'Frankfurt', value: 600},
    {city: 'Dortmund', value: 500}
  ];

  const popularCitiesStudents = [
    {city: 'München', value: 1200},
    {city: 'Berlin', value: 1100},
    {city: 'Hamburg', value: 950},
    {city: 'Köln', value: 850},
    {city: 'Düsseldorf', value: 700},
    {city: 'Frankfurt', value: 600},
    {city: 'Dortmund', value: 500}
  ];

  // Sample data for bookings
  const bookingsMonthlyData = [
    {month: 'Jan', talk: 100, theory: 85, driving: 125, exam: 125},
    {month: 'Feb', talk: 100, theory: 85, driving: 125, exam: 125},
    {month: 'Mar', talk: 100, theory: 85, driving: 125, exam: 125},
    {month: 'Apr', talk: 100, theory: 85, driving: 125, exam: 125},
    {month: 'May', talk: 100, theory: 85, driving: 125, exam: 125},
    {month: 'Jun', talk: 100, theory: 85, driving: 125, exam: 125},
    {month: 'Jul', talk: 100, theory: 85, driving: 125, exam: 125},
    {month: 'Aug', talk: 100, theory: 85, driving: 125, exam: 125},
    {month: 'Sep', talk: 100, theory: 85, driving: 125, exam: 125},
    {month: 'Oct', talk: 100, theory: 85, driving: 125, exam: 125},
    {month: 'Nov', talk: 100, theory: 85, driving: 125, exam: 125},
    {month: 'Dec', talk: 100, theory: 85, driving: 125, exam: 125}
  ];

  const bookingsTotal = {talk: 1200, theory: 1020, driving: 1500, exam: 1500};
  const bookingsLastYear = {talk: 1000, theory: 950, driving: 1200, exam: 1200};

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: {xs: 'auto', md: '100%'},
          padding: {xs: '8px', md: '24px'},
          background: 'rgba(21, 31, 42, 0.3)',
          borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
          backgroundColor: 'rgba(248, 250, 252, 0.3)',
          border: {xs: '2px solid #fff', md: 'none'},
          backdropFilter: {xs: 'blur(15px)', md: 'none'},
          zIndex: '1',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          overflowX: 'hidden',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        {/* First Row: Students, Schools, Trainers (md: 3 cols, lg: 3 cols + Messages 2 cols) */}
        <Grid
          container
          spacing={3}
          sx={{
            mb: 3,
            display: {xs: 'flex', md: 'grid', lg: 'grid'},
            gridTemplateColumns: {
              md: 'repeat(3, 1fr)',
              lg: 'repeat(5, 1fr)'
            }
          }}
        >
          <Grid
            size={{xs: 12}}
            sx={{
              gridColumn: {md: 'span 1', lg: 'span 1'}
            }}
          >
            <StatsCard
              title="Students"
              total={1000}
              active={850}
              percentage={85}
              dailySignup={1}
              weeklySignup={3}
              monthlySignup={15}
            />
          </Grid>
          <Grid
            size={{xs: 12}}
            sx={{
              gridColumn: {md: 'span 1', lg: 'span 1'}
            }}
          >
            <StatsCard
              title="Schools"
              total={1500}
              active={1000}
              percentage={66}
              dailySignup={5}
              weeklySignup={15}
              monthlySignup={25}
            />
          </Grid>
          <Grid
            size={{xs: 12}}
            sx={{
              gridColumn: {md: 'span 1', lg: 'span 1'}
            }}
          >
            <StatsCard
              title="Trainers"
              total={2600}
              active={1700}
              percentage={65}
              dailySignup={8}
              weeklySignup={20}
              monthlySignup={35}
            />
          </Grid>
          <Grid
            size={{xs: 12}}
            sx={{
              gridColumn: {md: 'none', lg: 'span 2'},
              display: {xs: 'none', md: 'none', lg: 'block'}
            }}
          >
            <Messages setActiveKey={setActiveKey} messages={messages} />
          </Grid>
        </Grid>
        {/* Second Row: Messages (md only), Growth */}
        <Grid
          container
          spacing={3}
          sx={{
            mb: 3,
            display: {xs: 'flex', md: 'grid', lg: 'none'},
            gridTemplateColumns: {md: 'repeat(3, 1fr)'}
          }}
        >
          <Grid
            size={{xs: 12}}
            sx={{
              gridColumn: {md: 'span 1'},
              display: {xs: 'block', md: 'block', lg: 'none'}
            }}
          >
            <Messages setActiveKey={setActiveKey} messages={messages} />
          </Grid>
          <Grid
            size={{xs: 12}}
            sx={{
              gridColumn: {md: 'span 2'}
            }}
          >
            <TableCard
              title="Growth"
              columns={[
                {key: 'stu', label: 'Stu'},
                {key: 'sch', label: 'Sch'},
                {key: 'tra', label: 'Tra'}
              ]}
              monthlyData={growthMonthlyData}
              total={growthTotal}
              lastYear={growthLastYear}
            />
          </Grid>
        </Grid>
        {/* Third Row: Growth (lg only), Popular Cities, Bookings */}
        <Grid
          container
          spacing={3}
          sx={{
            display: {xs: 'flex', md: 'grid', lg: 'grid'},
            gridTemplateColumns: {
              md: 'repeat(3, 1fr)',
              lg: 'repeat(5, 1fr)'
            }
          }}
        >
          <Grid
            size={{xs: 12}}
            sx={{
              gridColumn: {md: 'none', lg: 'span 2'},
              display: {xs: 'none', md: 'none', lg: 'block'}
            }}
          >
            <TableCard
              title="Growth"
              columns={[
                {key: 'stu', label: 'Stu'},
                {key: 'sch', label: 'Sch'},
                {key: 'tra', label: 'Tra'}
              ]}
              monthlyData={growthMonthlyData}
              total={growthTotal}
              lastYear={growthLastYear}
            />
          </Grid>
          <Grid
            size={{xs: 12}}
            sx={{
              gridColumn: {md: 'span 1', lg: 'span 1'}
            }}
          >
            <PopularCitiesCard
              schools={popularCitiesSchools}
              students={popularCitiesStudents}
            />
          </Grid>
          <Grid
            size={{xs: 12}}
            sx={{
              gridColumn: {md: 'span 2', lg: 'span 2'}
            }}
          >
            <TableCard
              title="Bookings"
              columns={[
                {key: 'talk', label: 'Talk'},
                {key: 'theory', label: 'Theory'},
                {key: 'driving', label: 'Driving'},
                {key: 'exam', label: 'Exam'}
              ]}
              monthlyData={bookingsMonthlyData}
              total={bookingsTotal}
              lastYear={bookingsLastYear}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
