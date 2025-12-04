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
  Menu,
  IconButton,
  InputAdornment,
  Dialog,
  DialogContent,
  Button,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import dayjs, {Dayjs} from 'dayjs';
import Image from 'next/image';
import searchIcon from '@/assets/svgs/dashboard-student/searchIcon.svg';
import arrowDown from '@/assets/svgs/dashboard-student/arrow.svg';
import deleteIcon from '@/assets/svgs/dashboard-student/deleteIcon.svg';
import localFont from '@/utils/themes';

interface School {
  number: string;
  school: string;
  email: string;
  phone: string;
  city: string;
  class: string;
  stu: string;
  perc: string;
  tra: string;
  appt: string;
  plan: string;
  planDate: string;
  status: 'Verified' | 'Non';
  signup: string;
  license: string;
}

// Sample data - replace with actual data
const sampleSchools: School[] = [
  {
    number: 'sch-0015',
    school: 'Fahrschule Mustermann Hamburg',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'B',
    stu: '164',
    perc: '43%',
    tra: '5',
    appt: '158',
    plan: 'Basic',
    planDate: '01.01.2026',
    status: 'Verified',
    signup: '23.09.2025',
    license: 'Download'
  },
  {
    number: 'sch-0015',
    school: 'Fahrschule Mustermann Hamburg',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'A',
    stu: '164',
    perc: '43%',
    tra: '5',
    appt: '158',
    plan: 'Standard',
    planDate: '01.01.2026',
    status: 'Verified',
    signup: '23.09.2025',
    license: 'Download'
  },
  {
    number: 'sch-0015',
    school: 'Fahrschule Mustermann Hamburg',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'A,B',
    stu: '164',
    perc: '43%',
    tra: '5',
    appt: '158',
    plan: 'Premium',
    planDate: '01.01.2026',
    status: 'Non',
    signup: '23.09.2025',
    license: 'Download'
  },
  {
    number: 'sch-0015',
    school: 'Fahrschule Mustermann Hamburg',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'B',
    stu: '164',
    perc: '43%',
    tra: '5',
    appt: '158',
    plan: 'Basic',
    planDate: '01.01.2026',
    status: 'Verified',
    signup: '23.09.2025',
    license: 'Download'
  },
  {
    number: 'sch-0015',
    school: 'Fahrschule Mustermann Hamburg',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'A',
    stu: '164',
    perc: '43%',
    tra: '5',
    appt: '158',
    plan: 'Standard',
    planDate: '01.01.2026',
    status: 'Verified',
    signup: '23.09.2025',
    license: 'Download'
  },
  {
    number: 'sch-0015',
    school: 'Fahrschule Mustermann Hamburg',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'B',
    stu: '164',
    perc: '43%',
    tra: '5',
    appt: '158',
    plan: 'Premium',
    planDate: '01.01.2026',
    status: 'Verified',
    signup: '23.09.2025',
    license: 'Download'
  },
  {
    number: 'sch-0015',
    school: 'Fahrschule Mustermann Hamburg',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'A,B',
    stu: '164',
    perc: '43%',
    tra: '5',
    appt: '158',
    plan: 'Basic',
    planDate: '01.01.2026',
    status: 'Verified',
    signup: '23.09.2025',
    license: 'Download'
  },
  {
    number: 'sch-0015',
    school: 'Fahrschule Mustermann Hamburg',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'A',
    stu: '164',
    perc: '43%',
    tra: '5',
    appt: '158',
    plan: 'Standard',
    planDate: '01.01.2026',
    status: 'Verified',
    signup: '23.09.2025',
    license: 'Download'
  },
  {
    number: 'sch-0015',
    school: 'Fahrschule Mustermann Hamburg',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'B',
    stu: '164',
    perc: '43%',
    tra: '5',
    appt: '158',
    plan: 'Premium',
    planDate: '01.01.2026',
    status: 'Verified',
    signup: '23.09.2025',
    license: 'Download'
  },
  {
    number: 'sch-0015',
    school: 'Fahrschule Mustermann Hamburg',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'A,B',
    stu: '164',
    perc: '43%',
    tra: '5',
    appt: '158',
    plan: 'Basic',
    planDate: '01.01.2026',
    status: 'Verified',
    signup: '23.09.2025',
    license: 'Download'
  },
  {
    number: 'sch-0015',
    school: 'Fahrschule Mustermann Hamburg',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'A',
    stu: '164',
    perc: '43%',
    tra: '5',
    appt: '158',
    plan: 'Standard',
    planDate: '01.01.2026',
    status: 'Verified',
    signup: '23.09.2025',
    license: 'Download'
  },
  {
    number: 'sch-0015',
    school: 'Fahrschule Mustermann Hamburg',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'B',
    stu: '164',
    perc: '43%',
    tra: '5',
    appt: '158',
    plan: 'Premium',
    planDate: '01.01.2026',
    status: 'Verified',
    signup: '23.09.2025',
    license: 'Download'
  }
];

export default function Schools() {
  const [searchQuery, setSearchQuery] = useState('');
  const [citySearchQuery, setCitySearchQuery] = useState('');
  const [stuSearchQuery, setStuSearchQuery] = useState('');
  const [traSearchQuery, setTraSearchQuery] = useState('');
  const [apptSearchQuery, setApptSearchQuery] = useState('');
  const [signupSearchQuery, setSignupSearchQuery] = useState('');
  const [schoolSearchQuery, setSchoolSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    city: [] as string[],
    class: [] as string[],
    stu: [] as string[],
    tra: [] as string[],
    appt: [] as string[],
    plan: [] as string[],
    status: [] as string[],
    signup: [] as string[]
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState<{
    element: HTMLElement;
    index: number;
  } | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const [licenseClassA, setLicenseClassA] = useState(false);
  const [licenseClassB, setLicenseClassB] = useState(false);
  const rowsPerPage = 10;

  // Filter and paginate schools
  const filteredSchools = sampleSchools.filter((school) => {
    const matchesSearch =
      searchQuery === '' ||
      school.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
      school.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      school.number.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilters =
      (filters.city.length === 0 || filters.city.includes(school.city)) &&
      (filters.class.length === 0 || filters.class.includes(school.class)) &&
      (filters.stu.length === 0 || filters.stu.includes(school.stu)) &&
      (filters.tra.length === 0 || filters.tra.includes(school.tra)) &&
      (filters.appt.length === 0 || filters.appt.includes(school.appt)) &&
      (filters.plan.length === 0 || filters.plan.includes(school.plan)) &&
      (filters.status.length === 0 || filters.status.includes(school.status)) &&
      (filters.signup.length === 0 || filters.signup.includes(school.signup));

    return matchesSearch && matchesFilters;
  });

  const totalPages = Math.ceil(filteredSchools.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedSchools = filteredSchools.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setAnchorEl({element: event.currentTarget, index});
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenDialog = (school: School) => {
    setSelectedSchool(school);
    // Parse class string to checkboxes (e.g., "A,B" or "A" or "B")
    const classes = school.class.split(',');
    setLicenseClassA(classes.includes('A'));
    setLicenseClassB(classes.includes('B'));
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedSchool(null);
    setLicenseClassA(false);
    setLicenseClassB(false);
  };

  const handleDelete = (index: number) => {
    // Handle delete action
    console.log('Delete student at index:', index);
    handleMenuClose();
    setOpenDeleteConfirm(false);
    setOpenDialog(false);
  };

  const handleDeleteClick = () => {
    setOpenDeleteConfirm(true);
  };

  const handleDeleteCancel = () => {
    setOpenDeleteConfirm(false);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Get unique values for filter dropdowns
  const uniqueCities = Array.from(new Set(sampleSchools.map((s) => s.city)));
  const uniqueClasses = Array.from(new Set(sampleSchools.map((s) => s.class)));
  const uniqueStu = Array.from(new Set(sampleSchools.map((s) => s.stu)));
  const uniqueTra = Array.from(new Set(sampleSchools.map((s) => s.tra)));
  const uniqueAppt = Array.from(new Set(sampleSchools.map((s) => s.appt)));
  const uniquePlans = Array.from(new Set(sampleSchools.map((s) => s.plan)));
  const uniqueStatuses = Array.from(
    new Set(sampleSchools.map((s) => s.status))
  );
  const uniqueSignups = Array.from(new Set(sampleSchools.map((s) => s.signup)));

  // Filter cities based on search query
  const filteredCities = uniqueCities.filter((city) =>
    city.toLowerCase().includes(citySearchQuery.toLowerCase())
  );

  // Filter stu based on search query
  const filteredStu = uniqueStu.filter((stu) =>
    stu.toLowerCase().includes(stuSearchQuery.toLowerCase())
  );

  // Filter tra based on search query
  const filteredTra = uniqueTra.filter((tra) =>
    tra.toLowerCase().includes(traSearchQuery.toLowerCase())
  );

  // Filter appt based on search query
  const filteredAppt = uniqueAppt.filter((appt) =>
    appt.toLowerCase().includes(apptSearchQuery.toLowerCase())
  );

  // Filter signups based on search query
  const filteredSignups = uniqueSignups.filter((signup) =>
    signup.toLowerCase().includes(signupSearchQuery.toLowerCase())
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
                if (selectedArray.length === 0) return 'City';
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
            value={filters.city}
            onChange={(e) => {
              const value = e.target.value;
              setFilters({
                ...filters,
                city: typeof value === 'string' ? value.split(',') : value
              });
            }}
            sx={{
              width: '80px',
              minWidth: '80px',
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
                color: filters.city.length > 0 ? '#000' : '#4A5568',
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
                paddingBottom: '12px',
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
                  value={citySearchQuery}
                  onChange={(e) => setCitySearchQuery(e.target.value)}
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
            {filteredCities.length > 0 ? (
              filteredCities.map((city) => (
                <MenuItem
                  key={city}
                  value={city}
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
                    checked={filters.city.indexOf(city) > -1}
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
                    {city}
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
                  No cities found
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
                if (selectedArray.length === 0) return 'Class';
                return selectedArray.join(', ');
              },
              MenuProps: {
                PaperProps: {
                  sx: {
                    borderRadius: '12px',
                    padding: '12px 12px 0',
                    gap: '12px',
                    boxShadow:
                      '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
                  }
                },
                MenuListProps: {
                  sx: {
                    padding: 0,
                    '& .MuiMenuItem-root': {
                      padding: '0px',
                      gap: '10px',
                      mb: '12px'
                    }
                  }
                }
              }
            }}
            value={filters.class}
            onChange={(e) => {
              const value = e.target.value;
              setFilters({
                ...filters,
                class: typeof value === 'string' ? value.split(',') : value
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
                color: filters.class.length > 0 ? '#000' : '#4A5568',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important'
              }
            }}
          >
            {uniqueClasses.map((cls) => (
              <MenuItem
                key={cls}
                value={cls}
                sx={{display: 'flex', alignItems: 'center', gap: '10px'}}
              >
                <input
                  type="checkbox"
                  checked={filters.class.indexOf(cls) > -1}
                  onChange={() => {}}
                  style={{
                    width: '16px',
                    height: '16px',
                    margin: 0,
                    cursor: 'pointer'
                  }}
                />
                {cls}
              </MenuItem>
            ))}
          </TextField>

          {/* Stu Filter with Search */}
          <TextField
            select
            SelectProps={{
              multiple: true,
              displayEmpty: true,
              renderValue: (selected: unknown) => {
                const selectedArray = selected as string[];
                if (selectedArray.length === 0) return 'Stu';
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
            value={filters.stu}
            onChange={(e) => {
              const value = e.target.value;
              setFilters({
                ...filters,
                stu: typeof value === 'string' ? value.split(',') : value
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
                color: filters.stu.length > 0 ? '#000' : '#4A5568',
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
                paddingBottom: '12px',
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
                  value={stuSearchQuery}
                  onChange={(e) => setStuSearchQuery(e.target.value)}
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
            {filteredStu.length > 0 ? (
              filteredStu.map((stu) => (
                <MenuItem
                  key={stu}
                  value={stu}
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
                    checked={filters.stu.indexOf(stu) > -1}
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
                    {stu}
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
                  No results found
                </Typography>
              </MenuItem>
            )}
          </TextField>

          {/* Tra Filter with Search */}
          <TextField
            select
            SelectProps={{
              multiple: true,
              displayEmpty: true,
              renderValue: (selected: unknown) => {
                const selectedArray = selected as string[];
                if (selectedArray.length === 0) return 'Tra';
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
            value={filters.tra}
            onChange={(e) => {
              const value = e.target.value;
              setFilters({
                ...filters,
                tra: typeof value === 'string' ? value.split(',') : value
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
                color: filters.tra.length > 0 ? '#000' : '#4A5568',
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
                paddingBottom: '12px',
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
                  value={traSearchQuery}
                  onChange={(e) => setTraSearchQuery(e.target.value)}
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
            {filteredTra.length > 0 ? (
              filteredTra.map((tra) => (
                <MenuItem
                  key={tra}
                  value={tra}
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
                    checked={filters.tra.indexOf(tra) > -1}
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
                    {tra}
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
                  No results found
                </Typography>
              </MenuItem>
            )}
          </TextField>

          {/* Appt. Filter with Search */}
          <TextField
            select
            SelectProps={{
              multiple: true,
              displayEmpty: true,
              renderValue: (selected: unknown) => {
                const selectedArray = selected as string[];
                if (selectedArray.length === 0) return 'Appt.';
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
            value={filters.appt}
            onChange={(e) => {
              const value = e.target.value;
              setFilters({
                ...filters,
                appt: typeof value === 'string' ? value.split(',') : value
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
                color: filters.appt.length > 0 ? '#000' : '#4A5568',
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
                paddingBottom: '12px',
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
                  value={apptSearchQuery}
                  onChange={(e) => setApptSearchQuery(e.target.value)}
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
            {filteredAppt.length > 0 ? (
              filteredAppt.map((appt) => (
                <MenuItem
                  key={appt}
                  value={appt}
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
                    checked={filters.appt.indexOf(appt) > -1}
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
                    {appt}
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
                  No results found
                </Typography>
              </MenuItem>
            )}
          </TextField>

          {/* Plan Filter without Search */}
          <TextField
            select
            SelectProps={{
              multiple: true,
              displayEmpty: true,
              renderValue: (selected: unknown) => {
                const selectedArray = selected as string[];
                if (selectedArray.length === 0) return 'Plan';
                return selectedArray.join(', ');
              },
              MenuProps: {
                PaperProps: {
                  sx: {
                    borderRadius: '12px',
                    padding: '12px 12px 0',
                    boxShadow:
                      '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
                  }
                },
                MenuListProps: {
                  sx: {
                    padding: 0,
                    '& .MuiMenuItem-root': {
                      padding: '0px',
                      mb: '12px',
                      gap: '10px'
                    }
                  }
                }
              }
            }}
            value={filters.plan}
            onChange={(e) => {
              const value = e.target.value;
              setFilters({
                ...filters,
                plan: typeof value === 'string' ? value.split(',') : value
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
                color: filters.plan.length > 0 ? '#000' : '#4A5568',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important'
              }
            }}
          >
            {uniquePlans.map((plan) => (
              <MenuItem
                key={plan}
                value={plan}
                sx={{display: 'flex', alignItems: 'center', gap: '10px'}}
              >
                <input
                  type="checkbox"
                  checked={filters.plan.indexOf(plan) > -1}
                  onChange={() => {}}
                  style={{
                    width: '16px',
                    height: '16px',
                    margin: 0,
                    cursor: 'pointer'
                  }}
                />
                {plan}
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
                if (selectedArray.length === 0) return 'Status';
                return selectedArray.join(', ');
              },
              MenuProps: {
                PaperProps: {
                  sx: {
                    borderRadius: '12px',
                    padding: '12px 12px 0',
                    boxShadow:
                      '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
                  }
                },
                MenuListProps: {
                  sx: {
                    padding: 0,
                    '& .MuiMenuItem-root': {
                      padding: '0px',
                      mb: '12px',
                      gap: '10px'
                    }
                  }
                }
              }
            }}
            value={filters.status}
            onChange={(e) => {
              const value = e.target.value;
              setFilters({
                ...filters,
                status: typeof value === 'string' ? value.split(',') : value
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
                color: filters.status.length > 0 ? '#000' : '#4A5568',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important'
              }
            }}
          >
            <MenuItem
              value="Verified"
              sx={{display: 'flex', alignItems: 'center', gap: '10px'}}
            >
              <input
                type="checkbox"
                checked={filters.status.indexOf('Verified') > -1}
                onChange={() => {}}
                style={{
                  width: '16px',
                  height: '16px',
                  margin: 0,
                  cursor: 'pointer'
                }}
              />
              Verified
            </MenuItem>
            <MenuItem
              value="Non"
              sx={{display: 'flex', alignItems: 'center', gap: '10px'}}
            >
              <input
                type="checkbox"
                checked={filters.status.indexOf('Non') > -1}
                onChange={() => {}}
                style={{
                  width: '16px',
                  height: '16px',
                  margin: 0,
                  cursor: 'pointer'
                }}
              />
              Non
            </MenuItem>
          </TextField>

          <TextField
            select
            SelectProps={{
              multiple: true,
              displayEmpty: true,
              renderValue: (selected: unknown) => {
                const selectedArray = selected as string[];
                if (selectedArray.length === 0) return 'Signup';
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
            value={filters.signup}
            onChange={(e) => {
              const value = e.target.value;
              setFilters({
                ...filters,
                signup: typeof value === 'string' ? value.split(',') : value
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
                color: filters.signup.length > 0 ? '#000' : '#4A5568',
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
                paddingBottom: '12px',
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
                  value={signupSearchQuery}
                  onChange={(e) => setSignupSearchQuery(e.target.value)}
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
            {filteredSignups.length > 0 ? (
              filteredSignups.map((signup) => (
                <MenuItem
                  key={signup}
                  value={signup}
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
                    checked={filters.signup.indexOf(signup) > -1}
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
                    {signup}
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
                  No signups found
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
                    width: '156px',
                    minWidth: '156px',
                    maxWidth: '156px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    overflow: 'hidden',
                    textAlign: 'left'
                  }}
                >
                  Email
                </TableCell>
                <TableCell
                  sx={{
                    width: '130px',
                    minWidth: '130px',
                    maxWidth: '130px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    overflow: 'hidden',
                    textAlign: 'left'
                  }}
                >
                  Phone
                </TableCell>
                <TableCell
                  sx={{
                    width: '100px',
                    minWidth: '100px',
                    maxWidth: '100px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    overflow: 'hidden',
                    textAlign: 'left'
                  }}
                >
                  City
                </TableCell>
                <TableCell
                  sx={{
                    width: '80px',
                    minWidth: '80px',
                    maxWidth: '80px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    overflow: 'hidden',
                    textAlign: 'left'
                  }}
                >
                  Class
                </TableCell>
                <TableCell
                  sx={{
                    width: '60px',
                    minWidth: '60px',
                    maxWidth: '60px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    overflow: 'hidden',
                    textAlign: 'left'
                  }}
                >
                  Stu
                </TableCell>
                <TableCell
                  sx={{
                    width: '70px',
                    minWidth: '70px',
                    maxWidth: '70px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    overflow: 'hidden',
                    textAlign: 'left'
                  }}
                >
                  Perc.
                </TableCell>
                <TableCell
                  sx={{
                    width: '50px',
                    minWidth: '50px',
                    maxWidth: '50px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    overflow: 'hidden',
                    textAlign: 'left'
                  }}
                >
                  Tra
                </TableCell>
                <TableCell
                  sx={{
                    width: '70px',
                    minWidth: '70px',
                    maxWidth: '70px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    overflow: 'hidden',
                    textAlign: 'left'
                  }}
                >
                  Appt.
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
                  Plan
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
                  Plan Date
                </TableCell>
                <TableCell
                  sx={{
                    width: '100px',
                    minWidth: '100px',
                    maxWidth: '100px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    overflow: 'hidden',
                    textAlign: 'left'
                  }}
                >
                  Status
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
                  Signup
                </TableCell>
                <TableCell
                  sx={{
                    width: '100px',
                    minWidth: '100px',
                    maxWidth: '100px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    overflow: 'hidden',
                    textAlign: 'left'
                  }}
                >
                  License
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
              {paginatedSchools.map((school, index) => (
                <TableRow
                  key={`${school.number}-${index}`}
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
                    {school.number}
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
                    {school.school}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '156px',
                      maxWidth: '156px',
                      minWidth: '156px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      overflow: 'hidden',
                      textAlign: 'left',
                      padding: '12px 16px'
                    }}
                  >
                    {school.email}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '130px',
                      minWidth: '130px',
                      maxWidth: '130px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      overflow: 'hidden',
                      textAlign: 'left',
                      padding: '12px 16px'
                    }}
                  >
                    {school.phone}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '100px',
                      minWidth: '100px',
                      maxWidth: '100px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      overflow: 'hidden',
                      textAlign: 'left',
                      padding: '12px 16px'
                    }}
                  >
                    {school.city}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '80px',
                      minWidth: '80px',
                      maxWidth: '80px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      overflow: 'hidden',
                      textAlign: 'left',
                      padding: '12px 16px'
                    }}
                  >
                    {school.class}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '60px',
                      minWidth: '60px',
                      maxWidth: '60px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      overflow: 'hidden',
                      textAlign: 'left',
                      padding: '12px 16px'
                    }}
                  >
                    {school.stu}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '70px',
                      minWidth: '70px',
                      maxWidth: '70px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      overflow: 'hidden',
                      textAlign: 'left',
                      padding: '12px 16px'
                    }}
                  >
                    {school.perc}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '50px',
                      minWidth: '50px',
                      maxWidth: '50px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      overflow: 'hidden',
                      textAlign: 'left',
                      padding: '12px 16px'
                    }}
                  >
                    {school.tra}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '70px',
                      minWidth: '70px',
                      maxWidth: '70px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      overflow: 'hidden',
                      textAlign: 'left',
                      padding: '12px 16px'
                    }}
                  >
                    {school.appt}
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
                    {school.plan}
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
                    {school.planDate}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '100px',
                      minWidth: '100px',
                      maxWidth: '100px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      overflow: 'hidden',
                      textAlign: 'left',
                      padding: '12px 16px'
                    }}
                  >
                    <Typography
                      sx={{
                        color:
                          school.status === 'Verified' ? '#10b981' : '#ef4444',
                        fontWeight: 500,
                        fontSize: '14px',
                        fontFamily: '"Inter", sans-serif !important'
                      }}
                    >
                      {school.status}
                    </Typography>
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
                    {school.signup}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '100px',
                      minWidth: '100px',
                      maxWidth: '100px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      overflow: 'hidden',
                      textAlign: 'left',
                      padding: '12px 16px'
                    }}
                  >
                    <Typography
                      onClick={() => {
                        // Handle download action here
                        console.log('Download license for:', school.number);
                      }}
                      sx={{
                        color: '#667eea',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontFamily: '"Inter", sans-serif !important',
                        display: 'inline-block',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          color: '#5568d3',
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      {school.license}
                    </Typography>
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
                      onClick={() => handleOpenDialog(school)}
                      sx={{
                        padding: '4px'
                      }}
                    >
                      <Image
                        src={arrowDown}
                        alt="actions"
                        width={16}
                        height={16}
                        style={{transform: 'rotate(0deg)'}}
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

      {/* Action Menu */}
      <Menu
        anchorEl={anchorEl?.element || null}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuItem
          onClick={() => anchorEl && handleDelete(anchorEl.index)}
          sx={{
            fontSize: '14px',
            fontFamily: '"Inter", sans-serif !important',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          <Image src={deleteIcon} alt="delete" width={16} height={16} />
          Delete
        </MenuItem>
        {/* Add more menu items as needed */}
      </Menu>

      {/* Student Edit Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth={false}
        PaperProps={{
          sx: {
            width: {sm: 'calc(100vw - 250px)', xs: '95%'},
            maxWidth: '100vw',
            margin: 0,
            borderRadius: '24px',
            background: 'rgba(248, 250, 252, 0.3)',
            backdropFilter: 'blur(15px)',
            boxShadow:
              '0px 0px 0px 1px rgb(255, 255, 255), 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)',
            border: '2px solid #fff'
          }
        }}
      >
        <DialogContent
          sx={{
            padding: '32px',
            background: 'rgba(248, 250, 252, 0.3)'
          }}
        >
          {selectedSchool && (
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 3,
                  mb: 3
                }}
              >
                {/* First Row */}
                <Box sx={{flex: '1 1 calc(25% - 18px)', minWidth: '200px'}}>
                  <TextField
                    label="Name"
                    fullWidth
                    defaultValue={selectedSchool.school}
                    sx={{
                      '& .MuiInputBase-root': {
                        background: '#ffffff',
                        borderRadius: '8px'
                      }
                    }}
                  />
                </Box>
                <Box sx={{flex: '1 1 calc(25% - 18px)', minWidth: '200px'}}>
                  <TextField
                    label="Email"
                    fullWidth
                    defaultValue={selectedSchool.email}
                    sx={{
                      '& .MuiInputBase-root': {
                        background: '#ffffff',
                        borderRadius: '8px'
                      }
                    }}
                  />
                </Box>
                <Box sx={{flex: '1 1 calc(25% - 18px)', minWidth: '200px'}}>
                  <TextField
                    label="City"
                    fullWidth
                    defaultValue={selectedSchool.city}
                    sx={{
                      '& .MuiInputBase-root': {
                        background: '#ffffff',
                        borderRadius: '8px'
                      }
                    }}
                  />
                </Box>
                <Box sx={{flex: '1 1 calc(25% - 18px)', minWidth: '200px'}}>
                  <TextField
                    label="Phone number"
                    fullWidth
                    defaultValue={selectedSchool.phone}
                    sx={{
                      '& .MuiInputBase-root': {
                        background: '#ffffff',
                        borderRadius: '8px'
                      }
                    }}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 3,
                  mb: 4,
                  alignItems: 'flex-start'
                }}
              >
                {/* Second Row */}
                <Box sx={{flex: '1 1 calc(25% - 18px)', minWidth: '200px'}}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={licenseClassA}
                        onChange={(e) => setLicenseClassA(e.target.checked)}
                        sx={{
                          color: '#667eea',
                          '&.Mui-checked': {
                            color: '#667eea'
                          }
                        }}
                      />
                    }
                    label="Driving license class A"
                    sx={{
                      '& .MuiFormControlLabel-label': {
                        fontSize: '14px',
                        fontFamily: '"Inter", sans-serif !important',
                        color: '#000'
                      }
                    }}
                  />
                </Box>
                <Box sx={{flex: '1 1 calc(25% - 18px)', minWidth: '200px'}}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={licenseClassB}
                        onChange={(e) => setLicenseClassB(e.target.checked)}
                        sx={{
                          color: '#667eea',
                          '&.Mui-checked': {
                            color: '#667eea'
                          }
                        }}
                      />
                    }
                    label="Driving license class B"
                    sx={{
                      '& .MuiFormControlLabel-label': {
                        fontSize: '14px',
                        fontFamily: '"Inter", sans-serif !important',
                        color: '#000'
                      }
                    }}
                  />
                </Box>
                <Box sx={{flex: '1 1 calc(25% - 18px)', minWidth: '200px'}}>
                  <TextField
                    select
                    label="Plan"
                    fullWidth
                    defaultValue={selectedSchool.plan}
                    SelectProps={{
                      displayEmpty: true
                    }}
                    sx={{
                      '& .MuiInputBase-root': {
                        background: '#ffffff',
                        borderRadius: '8px'
                      }
                    }}
                  >
                    {uniquePlans.map((plan) => (
                      <MenuItem key={plan} value={plan}>
                        {plan}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                <Box sx={{flex: '1 1 calc(25% - 18px)', minWidth: '200px'}}>
                  <TextField
                    select
                    label="Status"
                    fullWidth
                    defaultValue={selectedSchool.status}
                    SelectProps={{
                      displayEmpty: true
                    }}
                    sx={{
                      '& .MuiInputBase-root': {
                        background: '#ffffff',
                        borderRadius: '8px'
                      }
                    }}
                  >
                    <MenuItem value="Verified">Verified</MenuItem>
                    <MenuItem value="Non">Non</MenuItem>
                  </TextField>
                </Box>
              </Box>

              {/* Action Buttons */}
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
                      ✓
                    </Box>
                  }
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
                  Save
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
                      −
                    </Box>
                  }
                  sx={{
                    background: '#3B82F6',
                    color: '#fff',
                    borderRadius: '8px',
                    padding: '10px 20px',
                    textTransform: 'none',
                    fontSize: '14px',
                    fontFamily: '"Inter", sans-serif !important',
                    '&:hover': {
                      background: '#2563EB'
                    }
                  }}
                >
                  Deactivate
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
                      ×
                    </Box>
                  }
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
                  onClick={handleDeleteClick}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>

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
            Are you sure?
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
              onClick={() => {
                if (selectedSchool) {
                  const schoolIndex = sampleSchools.findIndex(
                    (s) => s.number === selectedSchool.number
                  );
                  if (schoolIndex !== -1) {
                    handleDelete(schoolIndex);
                  }
                }
              }}
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
