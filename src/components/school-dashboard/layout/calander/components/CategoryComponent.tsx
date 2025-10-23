import React, {useState, useEffect, useRef} from 'react';
import localFont from '@/utils/themes';
import {Box, MenuItem, Select, Typography} from '@mui/material';
import Image from 'next/image';
import crossIcon from '@/assets/svgs/dashboard-student/crossicon.svg';
import CustomTextField from '@/components/school-dashboard/InputField';
import CustomButton from '@/components/school-dashboard/CustomButton';
import send from '@/assets/svgs/dashboard-student/send.svg';
import cross from '@/assets/svgs/dashboard-student/cross2.svg';

type CardProps = {
  color?: string;
  title?: string;
  place?: string;
  options?: {label: string; value: string}[];
  title2?: string;
  modalPlace?: string;
};

export default function CategoryComponent({
  color,
  title,
  place,
  options,
  title2,
  modalPlace
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
        <Typography sx={{...localFont.inter14}}>{title}</Typography>
      </Box>

      {/* Select + Icon */}
      <Box sx={{width: '100%', display: 'flex', gap: '6px'}}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            padding: '10px',
            borderRadius: '12px',
            height: '38px',
            alignItems: 'center',
            background: '#ffffffbf',
            boxShadow: '0px 0px 2px 0px #D4D4D8'
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

        {/* Add / Cross Icon */}
        <Box
          ref={iconRef}
          onClick={() => setOpenModal((prev) => !prev)}
          sx={{
            height: '36px',
            width: '36px',
            background: '#ffffffbf',
            padding: '8px',
            borderRadius: '50%',
            position: 'relative',
            cursor: 'pointer',
            '&:hover': {
              bgcolor: '#E4E4E7'
            }
          }}
        >
          <Image src={crossIcon} alt="addIcon" height={20} width={20} />

          {/* Modal Box */}
          {openModal && (
            <Box
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
              sx={{
                width: '270px',
                position: 'absolute',
                top: 50,
                right: 0,
                zIndex: 9,
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
                padding: '16px',
                border: '1px solid rgb(255, 255, 255)',
                backgroundColor: '#f0f0fa99',
                backdropFilter: 'blur(8px)',
                boxShadow: `
                  0px 0px 0px 1px rgb(255, 255, 255),
                  0px 1px 0px 0px rgba(0, 0, 0, 0.25),
                  0px 1px 1px 0px rgba(0, 0, 0, 0.25)
                `,
                borderRadius: '12px'
              }}
            >
              <Box>
                <Typography sx={{...localFont.inter14, mb: '6px'}}>
                  {title2}
                </Typography>
                <CustomTextField type="text" labal={modalPlace} />
              </Box>

              <Box
                sx={{display: 'flex', justifyContent: 'center', gap: '16px'}}
              >
                <Box onClick={() => setOpenModal(false)}>
                  <CustomButton
                    label="Cancel"
                    imgSrc={cross}
                    sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      gap: '8px',
                      background: '#dc2626',
                      width: '110px',
                      '&:hover': {
                        background: 'rgb(153,25,25)'
                      },
                      '&:active': {
                        background: 'rgb(82,82,91)'
                      }
                    }}
                  />
                </Box>
                <Box onClick={() => setOpenModal(false)}>
                  <CustomButton
                    label="Save"
                    imgSrc={send}
                    sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      gap: '8px',
                      background: '#0d9488',
                      width: '110px',
                      '&:hover': {
                        background: 'rgb(12,93,86)'
                      },
                      '&:active': {
                        background: 'rgb(82,82,91)'
                      }
                    }}
                  />
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
