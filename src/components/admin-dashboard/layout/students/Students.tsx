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
  Button
} from '@mui/material';
import Image from 'next/image';
import searchIcon from '@/assets/svgs/dashboard-student/searchIcon.svg';
import arrowDown from '@/assets/svgs/dashboard-student/arrow.svg';
import deleteIcon from '@/assets/svgs/dashboard-student/deleteIcon.svg';
import localFont from '@/utils/themes';

interface Student {
  number: string;
  name: string;
  lastName: string;
  birthday: string;
  email: string;
  phone: string;
  city: string;
  class: string;
  rewrite: string;
  school: string;
  status: 'Active' | 'Inactive';
  signup: string;
  steps: string;
  theory: string;
  driving: string;
}

// Sample data - replace with actual data
const sampleStudents: Student[] = [
  {
    number: 'stu-000015',
    name: 'Sebastian',
    lastName: 'Mustermann',
    birthday: '10.10.1998',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'B17',
    rewrite: 'No',
    school: 'Fahrschule Mustermann Hamburg',
    status: 'Active',
    signup: '23.09.2025',
    steps: '1,2,3,4,5,6,7,8',
    theory: '80%',
    driving: '30%'
  },
  {
    number: 'stu-000015',
    name: 'Sebastian',
    lastName: 'Mustermann',
    birthday: '10.10.1998',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'B',
    rewrite: 'Yes',
    school: 'Fahrschule Mustermann Hamburg',
    status: 'Active',
    signup: '23.09.2025',
    steps: '1,2,3,4,5,6,7,8',
    theory: '80%',
    driving: '30%'
  },
  {
    number: 'stu-000015',
    name: 'Sebastian',
    lastName: 'Mustermann',
    birthday: '10.10.1998',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'BE',
    rewrite: 'No',
    school: 'Fahrschule Mustermann Hamburg',
    status: 'Active',
    signup: '23.09.2025',
    steps: '1,2,3,4,5,6,7,8',
    theory: '80%',
    driving: '30%'
  },
  {
    number: 'stu-000015',
    name: 'Sebastian',
    lastName: 'Mustermann',
    birthday: '10.10.1998',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'B96',
    rewrite: 'Yes',
    school: 'Fahrschule Mustermann Hamburg',
    status: 'Active',
    signup: '23.09.2025',
    steps: '1,2,3,4,5,6,7,8',
    theory: '80%',
    driving: '30%'
  },
  {
    number: 'stu-000015',
    name: 'Sebastian',
    lastName: 'Mustermann',
    birthday: '10.10.1998',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'A',
    rewrite: 'No',
    school: 'Fahrschule Mustermann Hamburg',
    status: 'Active',
    signup: '23.09.2025',
    steps: '1,2,3,4,5,6,7,8',
    theory: '80%',
    driving: '30%'
  },
  {
    number: 'stu-000015',
    name: 'Sebastian',
    lastName: 'Mustermann',
    birthday: '10.10.1998',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'A2',
    rewrite: 'No',
    school: 'Fahrschule Mustermann Hamburg',
    status: 'Active',
    signup: '23.09.2025',
    steps: '1,2,3,4,5,6,7,8',
    theory: '80%',
    driving: '30%'
  },
  {
    number: 'stu-000015',
    name: 'Sebastian',
    lastName: 'Mustermann',
    birthday: '10.10.1998',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'A1',
    rewrite: 'Yes',
    school: 'Fahrschule Mustermann Hamburg',
    status: 'Active',
    signup: '23.09.2025',
    steps: '1,2,3,4,5,6,7,8',
    theory: '80%',
    driving: '30%'
  },
  {
    number: 'stu-000015',
    name: 'Sebastian',
    lastName: 'Mustermann',
    birthday: '10.10.1998',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'AM',
    rewrite: 'No',
    school: 'Fahrschule Mustermann Hamburg',
    status: 'Active',
    signup: '23.09.2025',
    steps: '1,2,3,4,5,6,7,8',
    theory: '80%',
    driving: '30%'
  },
  {
    number: 'stu-000015',
    name: 'Sebastian',
    lastName: 'Mustermann',
    birthday: '10.10.1998',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'B',
    rewrite: 'No',
    school: 'Fahrschule Mustermann Hamburg',
    status: 'Inactive',
    signup: '23.09.2025',
    steps: '1,2,3,4,5,6,7,8',
    theory: '80%',
    driving: '30%'
  },
  {
    number: 'stu-000015',
    name: 'Sebastian',
    lastName: 'Mustermann',
    birthday: '10.10.1998',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'B17',
    rewrite: 'Yes',
    school: 'Fahrschule Mustermann Hamburg',
    status: 'Active',
    signup: '23.09.2025',
    steps: '1,2,3,4,5,6,7,8',
    theory: '80%',
    driving: '30%'
  },
  {
    number: 'stu-000015',
    name: 'Sebastian',
    lastName: 'Mustermann',
    birthday: '10.10.1998',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'BE',
    rewrite: 'No',
    school: 'Fahrschule Mustermann Hamburg',
    status: 'Active',
    signup: '23.09.2025',
    steps: '1,2,3,4,5,6,7,8',
    theory: '80%',
    driving: '30%'
  },
  {
    number: 'stu-000015',
    name: 'Sebastian',
    lastName: 'Mustermann',
    birthday: '10.10.1998',
    email: 'mustremann@gmail.com',
    phone: '015712345678',
    city: 'Hamburg',
    class: 'A',
    rewrite: 'Yes',
    school: 'Fahrschule Mustermann Hamburg',
    status: 'Active',
    signup: '23.09.2025',
    steps: '1,2,3,4,5,6,7,8',
    theory: '80%',
    driving: '30%'
  }
];

export default function Students() {
  const [searchQuery, setSearchQuery] = useState('');
  const [schoolSearchQuery, setSchoolSearchQuery] = useState('');
  const [schoolMenuAnchor, setSchoolMenuAnchor] = useState<HTMLElement | null>(
    null
  );
  const [filters, setFilters] = useState({
    city: [] as string[],
    class: [] as string[],
    rewrite: [] as string[],
    school: [] as string[],
    status: [] as string[],
    signup: [] as string[],
    steps: [] as string[]
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState<{
    element: HTMLElement;
    index: number;
  } | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const rowsPerPage = 10;

  // Filter and paginate students
  const filteredStudents = sampleStudents.filter((student) => {
    const matchesSearch =
      searchQuery === '' ||
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.number.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilters =
      (filters.city.length === 0 || filters.city.includes(student.city)) &&
      (filters.class.length === 0 || filters.class.includes(student.class)) &&
      (filters.rewrite.length === 0 ||
        filters.rewrite.includes(student.rewrite)) &&
      (filters.school.length === 0 ||
        filters.school.includes(student.school)) &&
      (filters.status.length === 0 ||
        filters.status.includes(student.status)) &&
      (filters.signup.length === 0 ||
        filters.signup.includes(student.signup)) &&
      (filters.steps.length === 0 ||
        filters.steps.some((step) => student.steps.includes(step)));

    return matchesSearch && matchesFilters;
  });

  const totalPages = Math.ceil(filteredStudents.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedStudents = filteredStudents.slice(
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

  const handleOpenDialog = (student: Student) => {
    setSelectedStudent(student);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedStudent(null);
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
  const uniqueCities = Array.from(new Set(sampleStudents.map((s) => s.city)));
  const uniqueClasses = Array.from(new Set(sampleStudents.map((s) => s.class)));
  const uniqueSchools = Array.from(
    new Set(sampleStudents.map((s) => s.school))
  );

  // Filter schools based on search query
  const filteredSchools = uniqueSchools.filter((school) =>
    school.toLowerCase().includes(schoolSearchQuery.toLowerCase())
  );

  const handleSchoolMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setSchoolMenuAnchor(event.currentTarget);
  };

  const handleSchoolMenuClose = () => {
    setSchoolMenuAnchor(null);
    setSchoolSearchQuery('');
  };

  const handleSchoolToggle = (school: string) => {
    setFilters({
      ...filters,
      school: filters.school.includes(school)
        ? filters.school.filter((s) => s !== school)
        : [...filters.school, school]
    });
  };

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
            maxWidth: '1660px',
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
              maxWidth: '1660px',
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
              placeholder="Q Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                width: '100%',
                '& .MuiInputBase-root': {
                  background: '#ffffff',
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
                      gap: '10px',
                      mb: '12px'
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
              width: '70px',
              minWidth: '70px',
              '& .MuiInputBase-root': {
                background: '#ffffff',
                height: '40px',
                borderRadius: '999px',
                fontSize: '13px',
                fontFamily: '"Inter", sans-serif !important',
                boxShadow:
                  '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none'
              },
              '& .MuiSelect-select': {
                padding: '0 12px',
                color: filters.city.length > 0 ? '#000' : '#4A5568'
              }
            }}
          >
            {uniqueCities.map((city) => (
              <MenuItem
                key={city}
                value={city}
                sx={{display: 'flex', alignItems: 'center', gap: '10px'}}
              >
                <input
                  type="checkbox"
                  checked={filters.city.indexOf(city) > -1}
                  onChange={() => {}}
                  style={{
                    width: '16px',
                    height: '16px',
                    margin: 0,
                    cursor: 'pointer'
                  }}
                />
                {city}
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
                background: '#ffffff',
                height: '40px',
                borderRadius: '999px',
                fontSize: '13px',
                fontFamily: '"Inter", sans-serif !important',
                boxShadow:
                  '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none'
              },
              '& .MuiSelect-select': {
                padding: '0 12px',
                color: filters.class.length > 0 ? '#000' : '#4A5568'
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

          <TextField
            select
            SelectProps={{
              multiple: true,
              displayEmpty: true,
              renderValue: (selected: unknown) => {
                const selectedArray = selected as string[];
                if (selectedArray.length === 0) return 'Rewrite';
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
            value={filters.rewrite}
            onChange={(e) => {
              const value = e.target.value;
              setFilters({
                ...filters,
                rewrite: typeof value === 'string' ? value.split(',') : value
              });
            }}
            sx={{
              width: '100px',
              minWidth: '100px',
              '& .MuiInputBase-root': {
                background: '#ffffff',
                height: '40px',
                borderRadius: '999px',
                fontSize: '13px',
                fontFamily: '"Inter", sans-serif !important',
                boxShadow:
                  '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none'
              },
              '& .MuiSelect-select': {
                padding: '0 12px',
                color: filters.rewrite.length > 0 ? '#000' : '#4A5568'
              }
            }}
          >
            <MenuItem
              value="Yes"
              sx={{display: 'flex', alignItems: 'center', gap: '10px'}}
            >
              <input
                type="checkbox"
                checked={filters.rewrite.indexOf('Yes') > -1}
                onChange={() => {}}
                style={{
                  width: '16px',
                  height: '16px',
                  margin: 0,
                  cursor: 'pointer'
                }}
              />
              Yes
            </MenuItem>
            <MenuItem
              value="No"
              sx={{display: 'flex', alignItems: 'center', gap: '10px'}}
            >
              <input
                type="checkbox"
                checked={filters.rewrite.indexOf('No') > -1}
                onChange={() => {}}
                style={{
                  width: '16px',
                  height: '16px',
                  margin: 0,
                  cursor: 'pointer'
                }}
              />
              No
            </MenuItem>
          </TextField>

          <Box>
            <TextField
              onClick={handleSchoolMenuOpen}
              value={filters.school.length > 0 ? filters.school.join(', ') : ''}
              placeholder="School"
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <Image
                      src={arrowDown}
                      alt="dropdown"
                      width={16}
                      height={16}
                      style={{transform: 'rotate(0deg)'}}
                    />
                  </InputAdornment>
                )
              }}
              sx={{
                width: '110px',

                minWidth: '110px',
                '& .MuiInputBase-root': {
                  background: '#ffffff',
                  height: '40px',
                  borderRadius: '999px',
                  fontSize: '13px',
                  fontFamily: '"Inter", sans-serif !important',
                  boxShadow:
                    '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)',
                  cursor: 'pointer'
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none'
                },
                '& .MuiInputBase-input': {
                  padding: '0 12px',
                  color: filters.school.length > 0 ? '#000' : '#4A5568',
                  cursor: 'pointer',
                  '&::placeholder': {
                    color: '#4A5568',
                    opacity: 1
                  }
                }
              }}
            />
            <Menu
              anchorEl={schoolMenuAnchor}
              open={Boolean(schoolMenuAnchor)}
              onClose={handleSchoolMenuClose}
              PaperProps={{
                sx: {
                  mt: 1,
                  // bgcolor: 'red',
                  maxWidth: '200px',
                  borderRadius: '10px',
                  padding: '12px',
                  boxShadow:
                    '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
                }
              }}
              MenuListProps={{
                sx: {
                  padding: 0,
                  '& .MuiMenuItem-root': {
                    padding: '0px',
                    // mb: '12px',
                    gap: '10px'
                  }
                }
              }}
            >
              {/* Search Input */}
              {/* <Box
                sx={{
                  p: '16px',
                  // pb: '12px',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
                }}
              >
                <TextField
                  placeholder="Search"
                  value={schoolSearchQuery}
                  onChange={(e) => setSchoolSearchQuery(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Image
                          src={searchIcon}
                          alt="search"
                          width={16}
                          height={16}
                        />
                      </InputAdornment>
                    )
                  }}
                  sx={{
                    width: '100%',
                    '& .MuiInputBase-root': {
                      background: '#ffffff',
                      height: '36px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontFamily: '"Inter", sans-serif !important'
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: '1px solid rgba(0, 0, 0, 0.1)'
                    },
                    '& .MuiInputBase-input': {
                      padding: '0 8px',
                      fontSize: '14px'
                    }
                  }}
                />
              </Box> */}

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
                  boxShadow: '0px 0px 2px 0px #D4D4D8',
                  mb: '12px'
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
              {/* School List */}
              <Box sx={{maxHeight: '300px', overflowY: 'auto'}}>
                {filteredSchools.length > 0 ? (
                  filteredSchools.map((school) => (
                    <MenuItem
                      key={school}
                      onClick={() => handleSchoolToggle(school)}
                      sx={{
                        py: '6px',
                        px: '16px',
                        whiteSpace: 'normal',
                        wordBreak: 'break-word',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.04)'
                        }
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
              </Box>
            </Menu>
          </Box>

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
                background: '#ffffff',
                height: '40px',
                borderRadius: '999px',
                fontSize: '13px',
                fontFamily: '"Inter", sans-serif !important',
                boxShadow:
                  '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none'
              },
              '& .MuiSelect-select': {
                padding: '0 12px',
                color: filters.status.length > 0 ? '#000' : '#4A5568'
              }
            }}
          >
            <MenuItem
              value="Active"
              sx={{display: 'flex', alignItems: 'center', gap: '10px'}}
            >
              <input
                type="checkbox"
                checked={filters.status.indexOf('Active') > -1}
                onChange={() => {}}
                style={{
                  width: '16px',
                  height: '16px',
                  margin: 0,
                  cursor: 'pointer'
                }}
              />
              Active
            </MenuItem>
            <MenuItem
              value="Inactive"
              sx={{display: 'flex', alignItems: 'center', gap: '10px'}}
            >
              <input
                type="checkbox"
                checked={filters.status.indexOf('Inactive') > -1}
                onChange={() => {}}
                style={{
                  width: '16px',
                  height: '16px',
                  margin: 0,
                  cursor: 'pointer'
                }}
              />
              Inactive
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
            value={filters.signup}
            onChange={(e) => {
              const value = e.target.value;
              setFilters({
                ...filters,
                signup: typeof value === 'string' ? value.split(',') : value
              });
            }}
            sx={{
              width: '90px',
              minWidth: '90px',
              '& .MuiInputBase-root': {
                background: '#ffffff',
                height: '40px',
                borderRadius: '999px',
                fontSize: '13px',
                fontFamily: '"Inter", sans-serif !important',
                boxShadow:
                  '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none'
              },
              '& .MuiSelect-select': {
                padding: '0 12px',
                color: filters.signup.length > 0 ? '#000' : '#4A5568'
              }
            }}
          >
            <MenuItem
              value="23.09.2025"
              sx={{display: 'flex', alignItems: 'center', gap: '10px'}}
            >
              <input
                type="checkbox"
                checked={filters.signup.indexOf('23.09.2025') > -1}
                onChange={() => {}}
                style={{
                  width: '16px',
                  height: '16px',
                  margin: 0,
                  cursor: 'pointer'
                }}
              />
              23.09.2025
            </MenuItem>
          </TextField>

          <TextField
            select
            SelectProps={{
              multiple: true,
              displayEmpty: true,
              renderValue: (selected: unknown) => {
                const selectedArray = selected as string[];
                if (selectedArray.length === 0) return 'Steps';
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
            value={filters.steps}
            onChange={(e) => {
              const value = e.target.value;
              setFilters({
                ...filters,
                steps: typeof value === 'string' ? value.split(',') : value
              });
            }}
            sx={{
              width: '90px',
              minWidth: '90px',
              '& .MuiInputBase-root': {
                background: '#ffffff',
                height: '40px',
                borderRadius: '999px',
                fontSize: '13px',
                fontFamily: '"Inter", sans-serif !important',
                boxShadow:
                  '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none'
              },
              '& .MuiSelect-select': {
                padding: '0 12px',
                color: filters.steps.length > 0 ? '#000' : '#4A5568'
              }
            }}
          >
            <MenuItem
              value="1"
              sx={{display: 'flex', alignItems: 'center', gap: '10px'}}
            >
              <input
                type="checkbox"
                checked={filters.steps.indexOf('1') > -1}
                onChange={() => {}}
                style={{
                  width: '16px',
                  height: '16px',
                  margin: 0,
                  cursor: 'pointer'
                }}
              />
              1
            </MenuItem>
            <MenuItem
              value="2"
              sx={{display: 'flex', alignItems: 'center', gap: '10px'}}
            >
              <input
                type="checkbox"
                checked={filters.steps.indexOf('2') > -1}
                onChange={() => {}}
                style={{
                  width: '16px',
                  height: '16px',
                  margin: 0,
                  cursor: 'pointer'
                }}
              />
              2
            </MenuItem>
            <MenuItem
              value="3"
              sx={{display: 'flex', alignItems: 'center', gap: '10px'}}
            >
              <input
                type="checkbox"
                checked={filters.steps.indexOf('3') > -1}
                onChange={() => {}}
                style={{
                  width: '16px',
                  height: '16px',
                  margin: 0,
                  cursor: 'pointer'
                }}
              />
              3
            </MenuItem>
            <MenuItem
              value="4"
              sx={{display: 'flex', alignItems: 'center', gap: '10px'}}
            >
              <input
                type="checkbox"
                checked={filters.steps.indexOf('4') > -1}
                onChange={() => {}}
                style={{
                  width: '16px',
                  height: '16px',
                  margin: 0,
                  cursor: 'pointer'
                }}
              />
              4
            </MenuItem>
            <MenuItem
              value="5"
              sx={{display: 'flex', alignItems: 'center', gap: '10px'}}
            >
              <input
                type="checkbox"
                checked={filters.steps.indexOf('5') > -1}
                onChange={() => {}}
                style={{
                  width: '16px',
                  height: '16px',
                  margin: 0,
                  cursor: 'pointer'
                }}
              />
              5
            </MenuItem>
            <MenuItem
              value="6"
              sx={{display: 'flex', alignItems: 'center', gap: '10px'}}
            >
              <input
                type="checkbox"
                checked={filters.steps.indexOf('6') > -1}
                onChange={() => {}}
                style={{
                  width: '16px',
                  height: '16px',
                  margin: 0,
                  cursor: 'pointer'
                }}
              />
              6
            </MenuItem>
            <MenuItem
              value="7"
              sx={{display: 'flex', alignItems: 'center', gap: '10px'}}
            >
              <input
                type="checkbox"
                checked={filters.steps.indexOf('7') > -1}
                onChange={() => {}}
                style={{
                  width: '16px',
                  height: '16px',
                  margin: 0,
                  cursor: 'pointer'
                }}
              />
              7
            </MenuItem>
            <MenuItem
              value="8"
              sx={{display: 'flex', alignItems: 'center', gap: '10px'}}
            >
              <input
                type="checkbox"
                checked={filters.steps.indexOf('8') > -1}
                onChange={() => {}}
                style={{
                  width: '16px',
                  height: '16px',
                  margin: 0,
                  cursor: 'pointer'
                }}
              />
              8
            </MenuItem>
          </TextField>
        </Box>

        {/* Table Container */}
        <Box
          sx={{
            // width: 'max-content',
            width: '50%',
            // minWidth: '100%',
            overflow: 'visible'
            // bgcolor: 'red'
          }}
        >
          <Table
            sx={{
              minWidth: '1400px',
              width: '100%',
              // bgcolor: 'pink',
              tableLayout: 'auto',
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
                    '&:first-of-type': {
                      borderTopLeftRadius: '8px',
                      borderBottomLeftRadius: '8px'
                    },
                    '&:last-of-type': {
                      borderTopRightRadius: '8px',
                      borderBottomRightRadius: '8px'
                    }
                  }
                }}
              >
                <TableCell>Number</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>LastName</TableCell>
                <TableCell>Birthday</TableCell>
                <TableCell
                  sx={{
                    minWidth: '156px',
                    maxWidth: '156px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    textAlign: 'left'
                  }}
                >
                  Email
                </TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Class</TableCell>
                <TableCell>Re</TableCell>
                <TableCell
                  sx={{
                    minWidth: '195px',
                    maxWidth: '195px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    textAlign: 'left'
                  }}
                >
                  School
                </TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Signup</TableCell>
                <TableCell>Steps</TableCell>
                <TableCell>Theory</TableCell>
                <TableCell>Driving</TableCell>
                <TableCell width={50}></TableCell>
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {paginatedStudents.map((student, index) => (
                <TableRow
                  key={`${student.number}-${index}`}
                  sx={{
                    background: '#ffffff',
                    borderRadius: '8px',
                    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                    height: 'auto',
                    '& td': {
                      border: 'none',
                      padding: '12px 16px',
                      textAlign: 'left',
                      fontSize: '14px',
                      fontFamily: '"Inter", sans-serif !important',
                      color: '#000000',
                      whiteSpace: 'nowrap',
                      minHeight: '60px',
                      verticalAlign: 'top',
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
                      wordBreak: 'break-word'
                    }
                  }}
                >
                  <TableCell>{student.number}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.lastName}</TableCell>
                  <TableCell>{student.birthday}</TableCell>
                  <TableCell
                    sx={{
                      maxWidth: '156px',
                      minWidth: '156px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      textAlign: 'left',
                      padding: '12px 16px'
                    }}
                  >
                    {student.email}
                  </TableCell>
                  <TableCell>{student.phone}</TableCell>
                  <TableCell>{student.city}</TableCell>
                  <TableCell>{student.class}</TableCell>
                  <TableCell>{student.rewrite}</TableCell>
                  <TableCell
                    sx={{
                      maxWidth: '195px',
                      minWidth: '195px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      textAlign: 'left',
                      padding: '12px 16px'
                    }}
                  >
                    {student.school}
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{
                        color:
                          student.status === 'Active' ? '#10b981' : '#ef4444',
                        fontWeight: 500,
                        fontSize: '14px',
                        fontFamily: '"Inter", sans-serif !important'
                      }}
                    >
                      {student.status}
                    </Typography>
                  </TableCell>
                  <TableCell>{student.signup}</TableCell>
                  <TableCell>{student.steps}</TableCell>
                  <TableCell>{student.theory}</TableCell>
                  <TableCell>{student.driving}</TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      onClick={() => handleOpenDialog(student)}
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
              maxWidth: '1660px',
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
          {selectedStudent && (
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
                    label="First name"
                    fullWidth
                    defaultValue={selectedStudent.name}
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
                    label="Last name"
                    fullWidth
                    defaultValue={selectedStudent.lastName}
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
                    defaultValue={selectedStudent.email}
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
                    defaultValue={selectedStudent.phone}
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
                  mb: 4
                }}
              >
                {/* Second Row */}
                <Box sx={{flex: '1 1 calc(25% - 18px)', minWidth: '200px'}}>
                  <TextField
                    label="City"
                    fullWidth
                    defaultValue={selectedStudent.city}
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
                    label="Birthday"
                    fullWidth
                    placeholder="dd/mm/yyyy"
                    defaultValue={selectedStudent.birthday}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton edge="end" sx={{padding: '4px'}}>
                            📅
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
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
                    label="Driving school"
                    fullWidth
                    defaultValue={selectedStudent.school}
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
                    select
                    label="Driving license class"
                    fullWidth
                    defaultValue={selectedStudent.class}
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
                    <MenuItem value={selectedStudent.class}>
                      {selectedStudent.class}
                    </MenuItem>
                  </TextField>
                </Box>
              </Box>

              {/* Action Buttons */}
              <Box sx={{display: 'flex', gap: 2, justifyContent: 'flex-start'}}>
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
                if (selectedStudent) {
                  const studentIndex = sampleStudents.findIndex(
                    (s) => s.number === selectedStudent.number
                  );
                  if (studentIndex !== -1) {
                    handleDelete(studentIndex);
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
