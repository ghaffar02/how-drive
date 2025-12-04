'use client';
import React, {useState} from 'react';
import {
  Box,
  TextField,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Dialog,
  DialogContent,
  Button
} from '@mui/material';
import Image from 'next/image';
import searchIcon from '@/assets/svgs/dashboard-student/searchIcon.svg';
import deleteIcon from '@/assets/svgs/dashboard-student/deleteIcon.svg';

interface Appointment {
  number: string;
  type: 'Talk' | 'Theory' | 'Driving' | 'Exam';
  title: string;
  date: string;
  begin: string;
  end: string;
  school: string;
  stuName: string;
  stuLast: string;
  traName: string;
  traLast: string;
}

// Sample data - replace with actual data
const sampleAppointments: Appointment[] = [
  {
    number: 'appt-0000002',
    type: 'Talk',
    title: 'Gruppe 1',
    date: '12.02.2026',
    begin: '16:30',
    end: '18:00',
    school: 'Fahrschule Mustermann Hamburg',
    stuName: 'Sebastian',
    stuLast: 'Mustermann',
    traName: '-',
    traLast: '-'
  },
  {
    number: 'appt-0000002',
    type: 'Theory',
    title: 'Gruppe 1',
    date: '12.02.2026',
    begin: '16:30',
    end: '18:00',
    school: 'Fahrschule Mustermann Hamburg',
    stuName: 'Sebastian',
    stuLast: 'Mustermann',
    traName: '-',
    traLast: '-'
  },
  {
    number: 'appt-0000002',
    type: 'Driving',
    title: 'Gruppe 1',
    date: '12.02.2026',
    begin: '16:30',
    end: '18:00',
    school: 'Fahrschule Mustermann Hamburg',
    stuName: 'Sebastian',
    stuLast: 'Mustermann',
    traName: 'Tom',
    traLast: 'Schwarz'
  },
  {
    number: 'appt-0000002',
    type: 'Exam',
    title: 'Gruppe 1',
    date: '12.02.2026',
    begin: '16:30',
    end: '18:00',
    school: 'Fahrschule Mustermann Hamburg',
    stuName: 'Sebastian',
    stuLast: 'Mustermann',
    traName: '-',
    traLast: '-'
  },
  {
    number: 'appt-0000002',
    type: 'Driving',
    title: 'Gruppe 1',
    date: '12.02.2026',
    begin: '16:30',
    end: '18:00',
    school: 'Fahrschule Mustermann Hamburg',
    stuName: 'Sebastian',
    stuLast: 'Mustermann',
    traName: 'Tom',
    traLast: 'Schwarz'
  },
  {
    number: 'appt-0000002',
    type: 'Driving',
    title: 'Gruppe 1',
    date: '12.02.2026',
    begin: '16:30',
    end: '18:00',
    school: 'Fahrschule Mustermann Hamburg',
    stuName: 'Sebastian',
    stuLast: 'Mustermann',
    traName: 'Tom',
    traLast: 'Schwarz'
  },
  {
    number: 'appt-0000002',
    type: 'Driving',
    title: 'Gruppe 1',
    date: '12.02.2026',
    begin: '16:30',
    end: '18:00',
    school: 'Fahrschule Mustermann Hamburg',
    stuName: 'Sebastian',
    stuLast: 'Mustermann',
    traName: 'Tom',
    traLast: 'Schwarz'
  },
  {
    number: 'appt-0000002',
    type: 'Driving',
    title: 'Gruppe 1',
    date: '12.02.2026',
    begin: '16:30',
    end: '18:00',
    school: 'Fahrschule Mustermann Hamburg',
    stuName: 'Sebastian',
    stuLast: 'Mustermann',
    traName: 'Tom',
    traLast: 'Schwarz'
  },
  {
    number: 'appt-0000002',
    type: 'Driving',
    title: 'Gruppe 1',
    date: '12.02.2026',
    begin: '16:30',
    end: '18:00',
    school: 'Fahrschule Mustermann Hamburg',
    stuName: 'Sebastian',
    stuLast: 'Mustermann',
    traName: 'Tom',
    traLast: 'Schwarz'
  },
  {
    number: 'appt-0000002',
    type: 'Driving',
    title: 'Gruppe 1',
    date: '12.02.2026',
    begin: '16:30',
    end: '18:00',
    school: 'Fahrschule Mustermann Hamburg',
    stuName: 'Sebastian',
    stuLast: 'Mustermann',
    traName: 'Tom',
    traLast: 'Schwarz'
  },
  {
    number: 'appt-0000002',
    type: 'Driving',
    title: 'Gruppe 1',
    date: '12.02.2026',
    begin: '16:30',
    end: '18:00',
    school: 'Fahrschule Mustermann Hamburg',
    stuName: 'Sebastian',
    stuLast: 'Mustermann',
    traName: 'Tom',
    traLast: 'Schwarz'
  },
  {
    number: 'appt-0000002',
    type: 'Driving',
    title: 'Gruppe 1',
    date: '12.02.2026',
    begin: '16:30',
    end: '18:00',
    school: 'Fahrschule Mustermann Hamburg',
    stuName: 'Sebastian',
    stuLast: 'Mustermann',
    traName: 'Tom',
    traLast: 'Schwarz'
  }
];

export default function Bookings() {
  const [searchQuery, setSearchQuery] = useState('');
  const [dateSearchQuery, setDateSearchQuery] = useState('');
  const [beginSearchQuery, setBeginSearchQuery] = useState('');
  const [endSearchQuery, setEndSearchQuery] = useState('');
  const [schoolSearchQuery, setSchoolSearchQuery] = useState('');
  const [studentSearchQuery, setStudentSearchQuery] = useState('');
  const [trainerSearchQuery, setTrainerSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    type: [] as string[],
    date: [] as string[],
    begin: [] as string[],
    end: [] as string[],
    school: [] as string[],
    student: [] as string[],
    trainer: [] as string[]
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const [selectedAppointmentIndex, setSelectedAppointmentIndex] = useState<
    number | null
  >(null);
  const rowsPerPage = 10;

  // Filter and paginate appointments
  const filteredAppointments = sampleAppointments.filter((appointment) => {
    const matchesSearch =
      searchQuery === '' ||
      appointment.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.type.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilters =
      (filters.type.length === 0 || filters.type.includes(appointment.type)) &&
      (filters.date.length === 0 || filters.date.includes(appointment.date)) &&
      (filters.begin.length === 0 ||
        filters.begin.includes(appointment.begin)) &&
      (filters.end.length === 0 || filters.end.includes(appointment.end)) &&
      (filters.school.length === 0 ||
        filters.school.includes(appointment.school)) &&
      (filters.student.length === 0 ||
        filters.student.includes(
          `${appointment.stuName} ${appointment.stuLast}`
        )) &&
      (filters.trainer.length === 0 ||
        filters.trainer.includes(
          `${appointment.traName} ${appointment.traLast}`
        ));

    return matchesSearch && matchesFilters;
  });

  const totalPages = Math.ceil(filteredAppointments.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedAppointments = filteredAppointments.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  const handleDeleteClick = (index: number) => {
    setSelectedAppointmentIndex(index);
    setOpenDeleteConfirm(true);
  };

  const handleDeleteCancel = () => {
    setOpenDeleteConfirm(false);
    setSelectedAppointmentIndex(null);
  };

  const handleDeleteConfirm = () => {
    if (selectedAppointmentIndex !== null) {
      // Handle delete action
      console.log('Delete appointment at index:', selectedAppointmentIndex);
      setOpenDeleteConfirm(false);
      setSelectedAppointmentIndex(null);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Get unique values for filter dropdowns
  const uniqueTypes = Array.from(
    new Set(sampleAppointments.map((a) => a.type))
  );
  const uniqueDates = Array.from(
    new Set(sampleAppointments.map((a) => a.date))
  );
  const uniqueBegins = Array.from(
    new Set(sampleAppointments.map((a) => a.begin))
  );
  const uniqueEnds = Array.from(new Set(sampleAppointments.map((a) => a.end)));
  const uniqueSchools = Array.from(
    new Set(sampleAppointments.map((a) => a.school))
  );
  const uniqueStudents = Array.from(
    new Set(sampleAppointments.map((a) => `${a.stuName} ${a.stuLast}`.trim()))
  );
  const uniqueTrainers = Array.from(
    new Set(sampleAppointments.map((a) => `${a.traName} ${a.traLast}`.trim()))
  );

  // Filter dates based on search query
  const filteredDates = uniqueDates.filter((date) =>
    date.toLowerCase().includes(dateSearchQuery.toLowerCase())
  );

  // Filter begins based on search query
  const filteredBegins = uniqueBegins.filter((begin) =>
    begin.toLowerCase().includes(beginSearchQuery.toLowerCase())
  );

  // Filter ends based on search query
  const filteredEnds = uniqueEnds.filter((end) =>
    end.toLowerCase().includes(endSearchQuery.toLowerCase())
  );

  // Filter schools based on search query
  const filteredSchools = uniqueSchools.filter((school) =>
    school.toLowerCase().includes(schoolSearchQuery.toLowerCase())
  );

  // Filter students based on search query
  const filteredStudents = uniqueStudents.filter((student) =>
    student.toLowerCase().includes(studentSearchQuery.toLowerCase())
  );

  // Filter trainers based on search query
  const filteredTrainers = uniqueTrainers.filter((trainer) =>
    trainer.toLowerCase().includes(trainerSearchQuery.toLowerCase())
  );

  return (
    <Box
      sx={{
        width: '100%',
        // width: 'calc(100vw - 128px)',
        position: 'relative',
        height: {xs: '100%', md: '100%'},
        padding: {xs: '16px', md: '24px'},
        background: 'rgba(248,250,252,0.3)',
        backdropFilter: 'blur(15px)',
        boxShadow: `0px 0px 0px 1px rgb(255, 255, 255, rgb(255, 255, 255)), 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)`,
        border: '2px solid #fff',
        borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          width: {xs: 'calc(100vw - 68px)', md: 'calc(100vw - 202px)'},
          overflowX: 'auto',
          overflowY: 'visible',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          // bgcolor: 'red',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {/* Search and Filters Section */}
        <Box
          sx={{
            width: '100%',
            maxWidth: '1720px',
            display: 'flex',
            gap: 2,
            mb: 3,
            // bgcolor: 'green',
            flexWrap: 'wrap',
            alignItems: 'center',
            minWidth: 'max-content'
          }}
        >
          {/* Search Bar */}
          <Box
            sx={{
              // bgcolor: 'green',
              flex: 1,
              width: '100%',
              maxWidth: '1720px',
              // minWidth: '200px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Image
              src={searchIcon}
              alt="search"
              width={20}
              height={20}
              style={{
                position: 'absolute',
                left: '12px',
                zIndex: 1,
                pointerEvents: 'none'
              }}
            />
            <TextField
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                width: '100%',
                '& .MuiInputBase-root': {
                  background: 'rgba(255, 255, 255, 0.75)',
                  height: '40px',
                  borderRadius: '999px',
                  paddingLeft: '40px',
                  fontSize: '14px',
                  fontFamily: '"Inter", sans-serif !important',
                  boxShadow:
                    '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none'
                },
                '& .MuiInputBase-input': {
                  padding: 0
                }
              }}
            />
          </Box>

          {/* Filter Dropdowns */}
          <TextField
            select
            SelectProps={{
              multiple: true,
              displayEmpty: true,
              renderValue: (selected: unknown) => {
                const selectedArray = selected as string[];
                if (selectedArray.length === 0) return 'Type';
                return selectedArray.join(', ');
              },
              MenuProps: {
                PaperProps: {
                  sx: {
                    mt: 1,
                    maxWidth: '200px',
                    borderRadius: '10px',
                    padding: '12px',

                    boxShadow:
                      '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
                  }
                },
                MenuListProps: {
                  sx: {
                    padding: 0,
                    '& .MuiMenuItem-root': {
                      padding: '0px',
                      gap: '10px'
                    }
                  }
                }
              }
            }}
            value={filters.type}
            onChange={(e) => {
              const value = e.target.value;
              setFilters({
                ...filters,
                type: typeof value === 'string' ? value.split(',') : value
              });
            }}
            sx={{
              width: '90px',
              minWidth: '90px',
              '& .MuiInputBase-root': {
                background: 'rgba(255, 255, 255, 0.75)',
                height: '40px',
                borderRadius: '999px',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important',
                boxShadow:
                  '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none'
              },
              '& .MuiSelect-select': {
                padding: '0 12px',
                color: filters.type.length > 0 ? '#000' : '#4A5568',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important'
              }
            }}
          >
            {uniqueTypes.map((type) => (
              <MenuItem
                key={type}
                value={type}
                sx={{display: 'flex', alignItems: 'center', gap: '10px'}}
              >
                <input
                  type="checkbox"
                  checked={filters.type.indexOf(type) > -1}
                  onChange={() => {}}
                  style={{
                    width: '16px',
                    height: '16px',
                    margin: 0,
                    cursor: 'pointer'
                  }}
                />
                {type}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            SelectProps={{
              multiple: true,
              displayEmpty: true,
              renderValue: (selected: unknown) => {
                const selectedArray = selected as string[];
                if (selectedArray.length === 0) return 'Date';
                return selectedArray.join(', ');
              },
              MenuProps: {
                PaperProps: {
                  sx: {
                    mt: 1,
                    maxWidth: '200px',
                    borderRadius: '10px',
                    padding: '12px',
                    boxShadow:
                      '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
                  }
                },
                MenuListProps: {
                  sx: {
                    padding: 0,
                    '& .MuiMenuItem-root': {
                      padding: '0px',
                      gap: '10px'
                    }
                  }
                }
              }
            }}
            value={filters.date}
            onChange={(e) => {
              const value = e.target.value;
              setFilters({
                ...filters,
                date: typeof value === 'string' ? value.split(',') : value
              });
            }}
            sx={{
              width: '90px',
              minWidth: '90px',
              '& .MuiInputBase-root': {
                background: 'rgba(255, 255, 255, 0.75)',
                height: '40px',
                borderRadius: '999px',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important',
                boxShadow:
                  '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none'
              },
              '& .MuiSelect-select': {
                padding: '0 12px',
                color: filters.date.length > 0 ? '#000' : '#4A5568',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important'
              }
            }}
          >
            <Box
              sx={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                background: '#fff',
                padding: '12px',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                mb: '8px'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  gap: '4px',
                  padding: '10px',
                  borderRadius: '999px',
                  height: '38px',
                  alignItems: 'center',
                  background: '#ffffffbf',
                  boxShadow: '0px 0px 2px 0px #D4D4D8'
                }}
              >
                <Box sx={{height: '16px', width: '16px'}}>
                  <Image
                    src={searchIcon}
                    alt="searchIcon"
                    style={{height: '100%', width: '100%'}}
                  />
                </Box>
                <TextField
                  placeholder="Search"
                  variant="outlined"
                  value={dateSearchQuery}
                  onChange={(e) => setDateSearchQuery(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    flex: 1,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 0,
                      '& fieldset': {border: 'none'},
                      '&:hover fieldset': {border: 'none'},
                      '&.Mui-focused fieldset': {border: 'none'}
                    },
                    '& .MuiInputBase-input': {
                      fontFamily: '"Inter", sans-serif !important',
                      height: 'auto',
                      padding: '0px'
                    }
                  }}
                />
              </Box>
            </Box>
            {filteredDates.length > 0 ? (
              filteredDates.map((date) => (
                <MenuItem
                  key={date}
                  value={date}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    py: '6px',
                    px: '16px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={filters.date.indexOf(date) > -1}
                    onChange={() => {}}
                    style={{
                      width: '16px',
                      height: '16px',
                      margin: 0,
                      marginTop: '2px',
                      cursor: 'pointer',
                      flexShrink: 0
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: '#4A5568',
                      fontFamily: '"Inter", sans-serif !important',
                      wordBreak: 'break-word',
                      whiteSpace: 'normal',
                      lineHeight: '1.4',
                      flex: 1
                    }}
                  >
                    {date}
                  </Typography>
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontFamily: '"Inter", sans-serif !important',
                    color: '#aaa'
                  }}
                >
                  No dates found
                </Typography>
              </MenuItem>
            )}
          </TextField>

          <TextField
            select
            SelectProps={{
              multiple: true,
              displayEmpty: true,
              renderValue: (selected: unknown) => {
                const selectedArray = selected as string[];
                if (selectedArray.length === 0) return 'School';
                return selectedArray.join(', ');
              },
              MenuProps: {
                PaperProps: {
                  sx: {
                    mt: 1,
                    // bgcolor: 'red',
                    maxWidth: '200px',
                    borderRadius: '10px',
                    padding: '12px',
                    boxShadow:
                      '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
                  }
                },
                MenuListProps: {
                  sx: {
                    padding: 0,
                    '& .MuiMenuItem-root': {
                      padding: '0px',
                      // mb: '12px',
                      gap: '10px'
                    }
                  }
                }
              }
            }}
            value={filters.school}
            onChange={(e) => {
              const value = e.target.value;
              setFilters({
                ...filters,
                school: typeof value === 'string' ? value.split(',') : value
              });
            }}
            sx={{
              width: '110px',
              minWidth: '110px',
              '& .MuiInputBase-root': {
                background: 'rgba(255, 255, 255, 0.75)',
                height: '40px',
                borderRadius: '999px',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important',
                boxShadow:
                  '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none'
              },
              '& .MuiSelect-select': {
                padding: '0 12px',
                color: filters.school.length > 0 ? '#000' : '#4A5568',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important'
              }
            }}
          >
            <Box
              sx={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                background: '#fff',
                padding: '12px',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                mb: '8px'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  gap: '4px',
                  padding: '10px',
                  borderRadius: '999px',
                  height: '38px',
                  alignItems: 'center',
                  background: '#ffffffbf',
                  boxShadow: '0px 0px 2px 0px #D4D4D8'
                }}
              >
                <Box sx={{height: '16px', width: '16px'}}>
                  <Image
                    src={searchIcon}
                    alt="searchIcon"
                    style={{height: '100%', width: '100%'}}
                  />
                </Box>
                <TextField
                  placeholder="Search"
                  variant="outlined"
                  value={schoolSearchQuery}
                  onChange={(e) => setSchoolSearchQuery(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    flex: 1,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 0,
                      '& fieldset': {border: 'none'},
                      '&:hover fieldset': {border: 'none'},
                      '&.Mui-focused fieldset': {border: 'none'}
                    },
                    '& .MuiInputBase-input': {
                      fontFamily: '"Inter", sans-serif !important',
                      height: 'auto',
                      padding: '0px'
                    }
                  }}
                />
              </Box>
            </Box>
            {filteredSchools.length > 0 ? (
              filteredSchools.map((school) => (
                <MenuItem
                  key={school}
                  value={school}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    py: '6px',
                    px: '16px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={filters.school.indexOf(school) > -1}
                    onChange={() => {}}
                    style={{
                      width: '16px',
                      height: '16px',
                      margin: 0,
                      marginTop: '2px',
                      cursor: 'pointer',
                      flexShrink: 0
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: '#4A5568',
                      fontFamily: '"Inter", sans-serif !important',
                      wordBreak: 'break-word',
                      whiteSpace: 'normal',
                      lineHeight: '1.4',
                      flex: 1
                    }}
                  >
                    {school}
                  </Typography>
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontFamily: '"Inter", sans-serif !important',
                    color: '#aaa'
                  }}
                >
                  No schools found
                </Typography>
              </MenuItem>
            )}
          </TextField>

          {/* Begin Filter with Search */}
          <TextField
            select
            SelectProps={{
              multiple: true,
              displayEmpty: true,
              renderValue: (selected: unknown) => {
                const selectedArray = selected as string[];
                if (selectedArray.length === 0) return 'Begin';
                return selectedArray.join(', ');
              },
              MenuProps: {
                PaperProps: {
                  sx: {
                    mt: 1,
                    maxWidth: '200px',
                    borderRadius: '10px',
                    padding: '12px',
                    boxShadow:
                      '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
                  }
                },
                MenuListProps: {
                  sx: {
                    padding: 0,
                    '& .MuiMenuItem-root': {
                      padding: '0px',
                      gap: '10px'
                    }
                  }
                }
              }
            }}
            value={filters.begin}
            onChange={(e) => {
              const value = e.target.value;
              setFilters({
                ...filters,
                begin: typeof value === 'string' ? value.split(',') : value
              });
            }}
            sx={{
              width: '90px',
              minWidth: '90px',
              '& .MuiInputBase-root': {
                background: 'rgba(255, 255, 255, 0.75)',
                height: '40px',
                borderRadius: '999px',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important',
                boxShadow:
                  '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none'
              },
              '& .MuiSelect-select': {
                padding: '0 12px',
                color: filters.begin.length > 0 ? '#000' : '#4A5568',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important'
              }
            }}
          >
            <Box
              sx={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                background: '#fff',
                padding: '12px',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                mb: '8px'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  gap: '4px',
                  padding: '10px',
                  borderRadius: '999px',
                  height: '38px',
                  alignItems: 'center',
                  background: '#ffffffbf',
                  boxShadow: '0px 0px 2px 0px #D4D4D8'
                }}
              >
                <Box sx={{height: '16px', width: '16px'}}>
                  <Image
                    src={searchIcon}
                    alt="searchIcon"
                    style={{height: '100%', width: '100%'}}
                  />
                </Box>
                <TextField
                  placeholder="Search"
                  variant="outlined"
                  value={beginSearchQuery}
                  onChange={(e) => setBeginSearchQuery(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    flex: 1,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 0,
                      '& fieldset': {border: 'none'},
                      '&:hover fieldset': {border: 'none'},
                      '&.Mui-focused fieldset': {border: 'none'}
                    },
                    '& .MuiInputBase-input': {
                      fontFamily: '"Inter", sans-serif !important',
                      height: 'auto',
                      padding: '0px'
                    }
                  }}
                />
              </Box>
            </Box>
            {filteredBegins.length > 0 ? (
              filteredBegins.map((begin) => (
                <MenuItem
                  key={begin}
                  value={begin}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    py: '6px',
                    px: '16px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={filters.begin.indexOf(begin) > -1}
                    onChange={() => {}}
                    style={{
                      width: '16px',
                      height: '16px',
                      margin: 0,
                      marginTop: '2px',
                      cursor: 'pointer',
                      flexShrink: 0
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: '#4A5568',
                      fontFamily: '"Inter", sans-serif !important',
                      wordBreak: 'break-word',
                      whiteSpace: 'normal',
                      lineHeight: '1.4',
                      flex: 1
                    }}
                  >
                    {begin}
                  </Typography>
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontFamily: '"Inter", sans-serif !important',
                    color: '#aaa'
                  }}
                >
                  No begins found
                </Typography>
              </MenuItem>
            )}
          </TextField>

          {/* End Filter with Search */}
          <TextField
            select
            SelectProps={{
              multiple: true,
              displayEmpty: true,
              renderValue: (selected: unknown) => {
                const selectedArray = selected as string[];
                if (selectedArray.length === 0) return 'End';
                return selectedArray.join(', ');
              },
              MenuProps: {
                PaperProps: {
                  sx: {
                    mt: 1,
                    maxWidth: '200px',
                    borderRadius: '10px',
                    padding: '12px',
                    boxShadow:
                      '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
                  }
                },
                MenuListProps: {
                  sx: {
                    padding: 0,
                    '& .MuiMenuItem-root': {
                      padding: '0px',
                      gap: '10px'
                    }
                  }
                }
              }
            }}
            value={filters.end}
            onChange={(e) => {
              const value = e.target.value;
              setFilters({
                ...filters,
                end: typeof value === 'string' ? value.split(',') : value
              });
            }}
            sx={{
              width: '90px',
              minWidth: '90px',
              '& .MuiInputBase-root': {
                background: 'rgba(255, 255, 255, 0.75)',
                height: '40px',
                borderRadius: '999px',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important',
                boxShadow:
                  '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none'
              },
              '& .MuiSelect-select': {
                padding: '0 12px',
                color: filters.end.length > 0 ? '#000' : '#4A5568',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important'
              }
            }}
          >
            <Box
              sx={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                background: '#fff',
                padding: '12px',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                mb: '8px'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  gap: '4px',
                  padding: '10px',
                  borderRadius: '999px',
                  height: '38px',
                  alignItems: 'center',
                  background: '#ffffffbf',
                  boxShadow: '0px 0px 2px 0px #D4D4D8'
                }}
              >
                <Box sx={{height: '16px', width: '16px'}}>
                  <Image
                    src={searchIcon}
                    alt="searchIcon"
                    style={{height: '100%', width: '100%'}}
                  />
                </Box>
                <TextField
                  placeholder="Search"
                  variant="outlined"
                  value={endSearchQuery}
                  onChange={(e) => setEndSearchQuery(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    flex: 1,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 0,
                      '& fieldset': {border: 'none'},
                      '&:hover fieldset': {border: 'none'},
                      '&.Mui-focused fieldset': {border: 'none'}
                    },
                    '& .MuiInputBase-input': {
                      fontFamily: '"Inter", sans-serif !important',
                      height: 'auto',
                      padding: '0px'
                    }
                  }}
                />
              </Box>
            </Box>
            {filteredEnds.length > 0 ? (
              filteredEnds.map((end) => (
                <MenuItem
                  key={end}
                  value={end}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    py: '6px',
                    px: '16px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={filters.end.indexOf(end) > -1}
                    onChange={() => {}}
                    style={{
                      width: '16px',
                      height: '16px',
                      margin: 0,
                      marginTop: '2px',
                      cursor: 'pointer',
                      flexShrink: 0
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: '#4A5568',
                      fontFamily: '"Inter", sans-serif !important',
                      wordBreak: 'break-word',
                      whiteSpace: 'normal',
                      lineHeight: '1.4',
                      flex: 1
                    }}
                  >
                    {end}
                  </Typography>
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontFamily: '"Inter", sans-serif !important',
                    color: '#aaa'
                  }}
                >
                  No ends found
                </Typography>
              </MenuItem>
            )}
          </TextField>

          {/* Student Filter with Search */}
          <TextField
            select
            SelectProps={{
              multiple: true,
              displayEmpty: true,
              renderValue: (selected: unknown) => {
                const selectedArray = selected as string[];
                if (selectedArray.length === 0) return 'Student';
                return selectedArray.join(', ');
              },
              MenuProps: {
                PaperProps: {
                  sx: {
                    mt: 1,
                    maxWidth: '200px',
                    borderRadius: '10px',
                    padding: '12px',
                    boxShadow:
                      '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
                  }
                },
                MenuListProps: {
                  sx: {
                    padding: 0,
                    '& .MuiMenuItem-root': {
                      padding: '0px',
                      gap: '10px'
                    }
                  }
                }
              }
            }}
            value={filters.student}
            onChange={(e) => {
              const value = e.target.value;
              setFilters({
                ...filters,
                student: typeof value === 'string' ? value.split(',') : value
              });
            }}
            sx={{
              width: '100px',
              minWidth: '100px',
              '& .MuiInputBase-root': {
                background: 'rgba(255, 255, 255, 0.75)',
                height: '40px',
                borderRadius: '999px',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important',
                boxShadow:
                  '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none'
              },
              '& .MuiSelect-select': {
                padding: '0 12px',
                color: filters.student.length > 0 ? '#000' : '#4A5568',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important'
              }
            }}
          >
            <Box
              sx={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                background: '#fff',
                padding: '12px',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                mb: '8px'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  gap: '4px',
                  padding: '10px',
                  borderRadius: '999px',
                  height: '38px',
                  alignItems: 'center',
                  background: '#ffffffbf',
                  boxShadow: '0px 0px 2px 0px #D4D4D8'
                }}
              >
                <Box sx={{height: '16px', width: '16px'}}>
                  <Image
                    src={searchIcon}
                    alt="searchIcon"
                    style={{height: '100%', width: '100%'}}
                  />
                </Box>
                <TextField
                  placeholder="Search"
                  variant="outlined"
                  value={studentSearchQuery}
                  onChange={(e) => setStudentSearchQuery(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    flex: 1,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 0,
                      '& fieldset': {border: 'none'},
                      '&:hover fieldset': {border: 'none'},
                      '&.Mui-focused fieldset': {border: 'none'}
                    },
                    '& .MuiInputBase-input': {
                      fontFamily: '"Inter", sans-serif !important',
                      height: 'auto',
                      padding: '0px'
                    }
                  }}
                />
              </Box>
            </Box>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <MenuItem
                  key={student}
                  value={student}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    py: '6px',
                    px: '16px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={filters.student.indexOf(student) > -1}
                    onChange={() => {}}
                    style={{
                      width: '16px',
                      height: '16px',
                      margin: 0,
                      marginTop: '2px',
                      cursor: 'pointer',
                      flexShrink: 0
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: '#4A5568',
                      fontFamily: '"Inter", sans-serif !important',
                      wordBreak: 'break-word',
                      whiteSpace: 'normal',
                      lineHeight: '1.4',
                      flex: 1
                    }}
                  >
                    {student}
                  </Typography>
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontFamily: '"Inter", sans-serif !important',
                    color: '#aaa'
                  }}
                >
                  No students found
                </Typography>
              </MenuItem>
            )}
          </TextField>

          {/* Trainer Filter with Search */}
          <TextField
            select
            SelectProps={{
              multiple: true,
              displayEmpty: true,
              renderValue: (selected: unknown) => {
                const selectedArray = selected as string[];
                if (selectedArray.length === 0) return 'Trainer';
                return selectedArray.join(', ');
              },
              MenuProps: {
                PaperProps: {
                  sx: {
                    mt: 1,
                    maxWidth: '200px',
                    borderRadius: '10px',
                    padding: '12px',
                    boxShadow:
                      '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
                  }
                },
                MenuListProps: {
                  sx: {
                    padding: 0,
                    '& .MuiMenuItem-root': {
                      padding: '0px',
                      gap: '10px'
                    }
                  }
                }
              }
            }}
            value={filters.trainer}
            onChange={(e) => {
              const value = e.target.value;
              setFilters({
                ...filters,
                trainer: typeof value === 'string' ? value.split(',') : value
              });
            }}
            sx={{
              width: '100px',
              minWidth: '100px',
              '& .MuiInputBase-root': {
                background: 'rgba(255, 255, 255, 0.75)',
                height: '40px',
                borderRadius: '999px',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important',
                boxShadow:
                  '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none'
              },
              '& .MuiSelect-select': {
                padding: '0 12px',
                color: filters.trainer.length > 0 ? '#000' : '#4A5568',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important'
              }
            }}
          >
            <Box
              sx={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                background: '#fff',
                padding: '12px',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                mb: '8px'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  gap: '4px',
                  padding: '10px',
                  borderRadius: '999px',
                  height: '38px',
                  alignItems: 'center',
                  background: '#ffffffbf',
                  boxShadow: '0px 0px 2px 0px #D4D4D8'
                }}
              >
                <Box sx={{height: '16px', width: '16px'}}>
                  <Image
                    src={searchIcon}
                    alt="searchIcon"
                    style={{height: '100%', width: '100%'}}
                  />
                </Box>
                <TextField
                  placeholder="Search"
                  variant="outlined"
                  value={trainerSearchQuery}
                  onChange={(e) => setTrainerSearchQuery(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    flex: 1,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 0,
                      '& fieldset': {border: 'none'},
                      '&:hover fieldset': {border: 'none'},
                      '&.Mui-focused fieldset': {border: 'none'}
                    },
                    '& .MuiInputBase-input': {
                      fontFamily: '"Inter", sans-serif !important',
                      height: 'auto',
                      padding: '0px'
                    }
                  }}
                />
              </Box>
            </Box>
            {filteredTrainers.length > 0 ? (
              filteredTrainers.map((trainer) => (
                <MenuItem
                  key={trainer}
                  value={trainer}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    py: '6px',
                    px: '16px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={filters.trainer.indexOf(trainer) > -1}
                    onChange={() => {}}
                    style={{
                      width: '16px',
                      height: '16px',
                      margin: 0,
                      marginTop: '2px',
                      cursor: 'pointer',
                      flexShrink: 0
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: '#4A5568',
                      fontFamily: '"Inter", sans-serif !important',
                      wordBreak: 'break-word',
                      whiteSpace: 'normal',
                      lineHeight: '1.4',
                      flex: 1
                    }}
                  >
                    {trainer}
                  </Typography>
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontFamily: '"Inter", sans-serif !important',
                    color: '#aaa'
                  }}
                >
                  No trainers found
                </Typography>
              </MenuItem>
            )}
          </TextField>
        </Box>

        {/* Table Container */}
        <Box
          sx={{
            width: '100%',
            maxWidth: '1720px',
            overflow: 'visible'
            // bgcolor: 'red'
          }}
        >
          <Table
            sx={{
              minWidth: '1400px',
              width: '100%',
              // bgcolor: 'pink',
              tableLayout: 'fixed',
              borderCollapse: 'separate',
              borderSpacing: '0 8px'
            }}
          >
            {/* Table Header */}
            <TableHead>
              <TableRow
                sx={{
                  background: 'rgb(67, 83, 125)',
                  borderRadius: '8px',
                  height: '42px',
                  '& th': {
                    color: '#ffffff',
                    fontWeight: 500,
                    fontSize: '14px',
                    fontFamily: '"Inter", sans-serif !important',
                    padding: '12px 16px',
                    textAlign: 'left',
                    border: 'none',
                    whiteSpace: 'nowrap',
                    height: '42px',
                    verticalAlign: 'middle',
                    '&:first-of-type': {
                      borderTopLeftRadius: '8px',
                      borderBottomLeftRadius: '8px'
                    },
                    '&:last-of-type': {
                      borderTopRightRadius: '8px',
                      borderBottomRightRadius: '8px'
                    }
                  },
                  '& th:nth-of-type(5), & th:nth-of-type(10)': {
                    whiteSpace: 'normal',
                    verticalAlign: 'middle'
                  }
                }}
              >
                <TableCell
                  sx={{
                    width: '120px',
                    minWidth: '120px',
                    maxWidth: '120px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    overflow: 'hidden',
                    textAlign: 'left'
                  }}
                >
                  Number
                </TableCell>
                <TableCell
                  sx={{
                    width: '90px',
                    minWidth: '90px',
                    maxWidth: '90px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    overflow: 'hidden',
                    textAlign: 'left'
                  }}
                >
                  Type
                </TableCell>
                <TableCell
                  sx={{
                    width: '120px',
                    minWidth: '120px',
                    maxWidth: '120px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    overflow: 'hidden',
                    textAlign: 'left'
                  }}
                >
                  Title
                </TableCell>
                <TableCell
                  sx={{
                    width: '120px',
                    minWidth: '120px',
                    maxWidth: '120px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    overflow: 'hidden',
                    textAlign: 'left'
                  }}
                >
                  Date
                </TableCell>
                <TableCell
                  sx={{
                    width: '90px',
                    minWidth: '90px',
                    maxWidth: '90px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    overflow: 'hidden',
                    textAlign: 'left'
                  }}
                >
                  Begin
                </TableCell>
                <TableCell
                  sx={{
                    width: '90px',
                    minWidth: '90px',
                    maxWidth: '90px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    overflow: 'hidden',
                    textAlign: 'left'
                  }}
                >
                  End
                </TableCell>
                <TableCell
                  sx={{
                    width: '195px',
                    minWidth: '195px',
                    maxWidth: '195px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    overflow: 'hidden',
                    textAlign: 'left'
                  }}
                >
                  School
                </TableCell>
                <TableCell
                  sx={{
                    width: '120px',
                    minWidth: '120px',
                    maxWidth: '120px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    overflow: 'hidden',
                    textAlign: 'left'
                  }}
                >
                  Stu Name
                </TableCell>
                <TableCell
                  sx={{
                    width: '120px',
                    minWidth: '120px',
                    maxWidth: '120px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    overflow: 'hidden',
                    textAlign: 'left'
                  }}
                >
                  Stu Last
                </TableCell>
                <TableCell
                  sx={{
                    width: '120px',
                    minWidth: '120px',
                    maxWidth: '120px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    overflow: 'hidden',
                    textAlign: 'left'
                  }}
                >
                  Tra Name
                </TableCell>
                <TableCell
                  sx={{
                    width: '120px',
                    minWidth: '120px',
                    maxWidth: '120px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    overflow: 'hidden',
                    textAlign: 'left'
                  }}
                >
                  Tra Last
                </TableCell>
                <TableCell
                  sx={{
                    minWidth: '50px',
                    maxWidth: '50px',
                    width: '50px'
                  }}
                ></TableCell>
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {paginatedAppointments.map((appointment, index) => (
                <TableRow
                  key={`${appointment.number}-${index}`}
                  sx={{
                    background: 'rgba(255, 255, 255, 0.65)',
                    borderRadius: '8px',
                    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                    height: 'auto',
                    '& td': {
                      border: 'none',
                      padding: '12px 16px',
                      textAlign: 'left',
                      fontSize: '14px',
                      fontFamily: '"Inter", sans-serif !important',
                      color: '#4a5568',
                      minHeight: '60px',
                      verticalAlign: 'middle',
                      overflow: 'hidden',
                      overflowWrap: 'break-word',
                      wordWrap: 'break-word',
                      '&:first-of-type': {
                        borderTopLeftRadius: '8px',
                        borderBottomLeftRadius: '8px'
                      },
                      '&:last-of-type': {
                        borderTopRightRadius: '8px',
                        borderBottomRightRadius: '8px'
                      }
                    },
                    '& td:nth-of-type(5), & td:nth-of-type(10)': {
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      verticalAlign: 'middle'
                    }
                  }}
                >
                  <TableCell
                    sx={{
                      width: '120px',
                      minWidth: '120px',
                      maxWidth: '120px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      overflow: 'hidden',
                      textAlign: 'left',
                      padding: '12px 16px'
                    }}
                  >
                    {appointment.number}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '90px',
                      minWidth: '90px',
                      maxWidth: '90px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      overflow: 'hidden',
                      textAlign: 'left',
                      padding: '12px 16px'
                    }}
                  >
                    {appointment.type}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '120px',
                      minWidth: '120px',
                      maxWidth: '120px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      overflow: 'hidden',
                      textAlign: 'left',
                      padding: '12px 16px'
                    }}
                  >
                    {appointment.title}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '120px',
                      minWidth: '120px',
                      maxWidth: '120px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      overflow: 'hidden',
                      textAlign: 'left',
                      padding: '12px 16px'
                    }}
                  >
                    {appointment.date}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '90px',
                      minWidth: '90px',
                      maxWidth: '90px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      overflow: 'hidden',
                      textAlign: 'left',
                      padding: '12px 16px'
                    }}
                  >
                    {appointment.begin}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '90px',
                      minWidth: '90px',
                      maxWidth: '90px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      overflow: 'hidden',
                      textAlign: 'left',
                      padding: '12px 16px'
                    }}
                  >
                    {appointment.end}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '195px',
                      maxWidth: '195px',
                      minWidth: '195px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      overflow: 'hidden',
                      textAlign: 'left',
                      padding: '12px 16px'
                    }}
                  >
                    {appointment.school}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '120px',
                      minWidth: '120px',
                      maxWidth: '120px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      overflow: 'hidden',
                      textAlign: 'left',
                      padding: '12px 16px'
                    }}
                  >
                    {appointment.stuName || '-'}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '120px',
                      minWidth: '120px',
                      maxWidth: '120px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      overflow: 'hidden',
                      textAlign: 'left',
                      padding: '12px 16px'
                    }}
                  >
                    {appointment.stuLast || '-'}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '120px',
                      minWidth: '120px',
                      maxWidth: '120px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      overflow: 'hidden',
                      textAlign: 'left',
                      padding: '12px 16px'
                    }}
                  >
                    {appointment.traName || '-'}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '120px',
                      minWidth: '120px',
                      maxWidth: '120px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      overflow: 'hidden',
                      textAlign: 'left',
                      padding: '12px 16px'
                    }}
                  >
                    {appointment.traLast || '-'}
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: '50px',
                      maxWidth: '50px',
                      width: '50px',
                      padding: '12px 16px'
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={() => handleDeleteClick(index)}
                      sx={{
                        padding: '4px'
                      }}
                    >
                      <Image
                        src={deleteIcon}
                        alt="delete"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>

        {/* Pagination */}
        {totalPages > 1 && (
          <Box
            sx={{
              width: '100%',
              maxWidth: '1720px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
              mt: 3,
              mb: 2
            }}
          >
            <IconButton
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              sx={{
                padding: '4px 8px',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important',
                color: currentPage === 1 ? '#ccc' : '#000',
                '&:disabled': {
                  opacity: 0.5
                }
              }}
            >
              &lt;&lt;
            </IconButton>
            <IconButton
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              sx={{
                padding: '4px 8px',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important',
                color: currentPage === 1 ? '#ccc' : '#000',
                '&:disabled': {
                  opacity: 0.5
                }
              }}
            >
              &lt;
            </IconButton>
            {Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
              <IconButton
                key={page}
                onClick={() => handlePageChange(page)}
                sx={{
                  padding: '4px 12px',
                  fontSize: '14px',
                  fontFamily: '"Inter", sans-serif !important',
                  color: currentPage === page ? '#667eea' : '#000',
                  fontWeight: currentPage === page ? 600 : 400,
                  background:
                    currentPage === page
                      ? 'rgba(102, 126, 234, 0.1)'
                      : 'transparent',
                  borderRadius: '4px',
                  minWidth: '32px'
                }}
              >
                {page}
              </IconButton>
            ))}
            <IconButton
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              sx={{
                padding: '4px 8px',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important',
                color: currentPage === totalPages ? '#ccc' : '#000',
                '&:disabled': {
                  opacity: 0.5
                }
              }}
            >
              &gt;
            </IconButton>
            <IconButton
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              sx={{
                padding: '4px 8px',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important',
                color: currentPage === totalPages ? '#ccc' : '#000',
                '&:disabled': {
                  opacity: 0.5
                }
              }}
            >
              &gt;&gt;
            </IconButton>
          </Box>
        )}
      </Box>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={openDeleteConfirm}
        onClose={handleDeleteCancel}
        PaperProps={{
          sx: {
            borderRadius: '12px',
            padding: '24px',
            minWidth: '300px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
            background: '#ffffff'
          }
        }}
      >
        <DialogContent
          sx={{
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3
          }}
        >
          <Typography
            sx={{
              fontSize: '18px',
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: 500,
              color: '#3f3f46',
              textAlign: 'center'
            }}
          >
            Are you sure you want to delete this?
          </Typography>
          <Box sx={{display: 'flex', gap: 2, justifyContent: 'center'}}>
            <Button
              variant="contained"
              startIcon={
                <Box
                  sx={{
                    width: '16px',
                    height: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}
                >
                  ×
                </Box>
              }
              onClick={handleDeleteCancel}
              sx={{
                background: '#EF4444',
                color: '#fff',
                borderRadius: '8px',
                padding: '10px 20px',
                textTransform: 'none',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important',
                '&:hover': {
                  background: '#DC2626'
                }
              }}
            >
              No
            </Button>
            <Button
              variant="contained"
              startIcon={
                <Box
                  sx={{
                    width: '16px',
                    height: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}
                >
                  ✓
                </Box>
              }
              onClick={handleDeleteConfirm}
              sx={{
                background: '#10B981',
                color: '#fff',
                borderRadius: '8px',
                padding: '10px 20px',
                textTransform: 'none',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important',
                '&:hover': {
                  background: '#059669'
                }
              }}
            >
              Yes
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
