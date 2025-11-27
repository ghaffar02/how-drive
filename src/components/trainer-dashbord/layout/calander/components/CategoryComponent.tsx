import React, {useState, useEffect, useRef} from 'react';
import localFont from '@/utils/themes';
import {Box, MenuItem, Select, Typography} from '@mui/material';
import Image from 'next/image';
import crossIcon from '@/assets/svgs/dashboard-student/crossicon.svg';
import CustomTextField from '@/components/school-dashboard/InputField';
import CustomButton from '@/components/school-dashboard/CustomButton';
import send from '@/assets/svgs/dashboard-student/send.svg';
import cross from '@/assets/svgs/dashboard-student/cross2.svg';
import {motion} from 'framer-motion';

type CardProps = {
  color?: string;
  title?: string;
  place?: string;
  options?: {label: string; value: string}[];
  title2?: string;
  modalPlace?: string;
  cancel: string;
  save: string;
};

export default function CategoryComponent({
  color,
  title,
  place,
  options,
  title2,
  modalPlace,
  cancel,
  save
}: CardProps) {
  const [value, setValue] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If modal is open, and the click happened outside modal and icon → close it
      const target = event.target as Node;
      if (
        modalRef.current &&
        !modalRef.current.contains(target) &&
        iconRef.current &&
        !iconRef.current.contains(target)
      ) {
        setOpenModal(false);
      }
    };

    if (openModal) {
      // Use pointerdown for better inside-click detection
      document.addEventListener('pointerdown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, [openModal]);

  return (
    <Box>
      {/* Title */}
      <Box sx={{display: 'flex', gap: '6px', mb: '6px'}}>
        <Box
          sx={{
            width: '6px',
            height: '22px',
            background: color,
            borderRadius: '999px'
          }}
        />
        <Typography
          sx={{
            ...localFont.inter14,
            fontFamily: '"Inter", sans-serif !important',
            fontWeight: '500'
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* Select + Icon */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          padding: '10px',
          borderRadius: '12px',
          height: '38px',
          alignItems: 'center',
          backgroundColor: '#ffffffbf !important',
          boxShadow: '0px 0px 2px 0px #D4D4D8',
          backdropFilter: 'blur(8px) !important'
        }}
      >
        <Select
          displayEmpty
          value={value}
          onChange={(e) => setValue(e.target.value)}
          sx={{
            flex: 1,
            borderRadius: 0,
            '& fieldset': {border: 'none'},
            '&:hover fieldset': {border: 'none'},
            '&.Mui-focused fieldset': {border: 'none'},
            '& .MuiSelect-select': {
              padding: '0px',
              height: 'auto'
            },
            '& .MuiOutlinedInput-root': {
              borderRadius: 0
            }
          }}
          variant="outlined"
          renderValue={
            value !== ''
              ? undefined
              : () => <span style={{color: '#999'}}>{place}</span>
          }
        >
          {options?.map((data) => (
            <MenuItem key={data.label} value={data.label}>
              {data.value}
            </MenuItem>
          ))}
          {/* <MenuItem value="driving">Driving Lesson</MenuItem>
            <MenuItem value="theory">Theory Class</MenuItem>
            <MenuItem value="test">Final Test</MenuItem> */}
        </Select>
      </Box>
    </Box>
  );
}
