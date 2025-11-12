import React, {useState} from 'react';
import Image from 'next/image';
import {Box, Typography} from '@mui/material';
import CustomTextField from '@/components/school-dashboard/InputField';
import arrowIcon from '@/assets/svgs/dashboard-student/arrow.svg';
import circleAdd from '@/assets/svgs/circleadd2.svg';
import circleCross from '@/assets/svgs/dashboard-student/crosscircle.svg';
import localFont from '@/utils/themes';
import TimePickerValue from '../../profile-setting/components/TimePicker';

type HourProps = {
  unavailable?: boolean;
  day: string;
};

export default function HoursComponent({unavailable = false, day}: HourProps) {
  const [rows, setRows] = useState([{id: 1}]);
  const [isUnavailable, setIsUnavailable] = useState(unavailable);

  const handleAdd = () => {
    // Add a new row only if less than 2 exist
    if (rows.length < 2) {
      setRows((prev) => [...prev, {id: Date.now()}]);
      setIsUnavailable(false);
    }
  };

  const handleRemove = (id: number) => {
    // Prevent deleting if only one row remains
    if (rows.length > 1) {
      setRows((prev) => prev.filter((row) => row.id !== id));
    } else {
      // If removing the last row, switch to "Not available" state
      setRows([]);
      setIsUnavailable(true);
    }
  };

  const handleUnavailableAdd = () => {
    // Switch back to default row
    setRows([{id: 1}]);
    setIsUnavailable(false);
  };

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      {/* Case 3: "Not available" view */}
      {isUnavailable && (
        <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <Typography
            sx={{
              ...localFont.inter14,
              fontFamily: '"Inter", sans-serif !important',
              width: '24px'
            }}
          >
            {day}
          </Typography>
          <CustomTextField labal="Nicht verfügbar" disabled={true} />
          <Box
            onClick={handleUnavailableAdd}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: '28px',
              width: '28px',
              p: '4px',
              borderRadius: '50%',
              cursor: 'pointer',
              '&:hover': {
                background: 'rgba(48,88,255,0.1)'
              }
            }}
          >
            <Image
              src={circleAdd}
              alt="add"
              height={20}
              width={20}
              // style={{margin: '4px', cursor: 'pointer'}}
            />
          </Box>
        </Box>
      )}

      {/* Case 1 & 2: Time input rows */}
      {!isUnavailable &&
        rows.map((row, index) => (
          <Box
            key={row.id}
            sx={{
              // bgcolor: 'red',
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              justifyContent: index > 0 ? 'center' : 'unset'
            }}
          >
            {/* Show 'Mo' only in the first row */}
            {index === 0 && (
              <Typography
                sx={{
                  ...localFont.inter14,
                  fontFamily: '"Inter", sans-serif !important',
                  width: '24px'
                }}
              >
                {day}
              </Typography>
            )}

            {/* Time input fields */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                gap: '2px',
                maxWidth: {md: '155px', lg: '180px'}
              }}
            >
              <TimePickerValue />
              <Image
                src={arrowIcon}
                alt="arrowIcon"
                height={14}
                width={14}
                style={{marginTop: '6px'}}
              />
              <TimePickerValue />
            </Box>

            {/* Action icons */}
            <Box sx={{display: 'flex'}}>
              <Box
                onClick={() => handleRemove(row.id)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '28px',
                  width: '28px',
                  p: '4px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  '&:hover': {
                    background: 'rgba(48,88,255,0.1)'
                  }
                }}
              >
                <Image
                  src={circleCross}
                  alt="cross"
                  height={20}
                  width={20}
                  // style={{margin: '4px', cursor: 'pointer'}}
                />
              </Box>
              {/* Show add only if: first row AND total rows < 2 */}
              {index === 0 && rows.length < 2 && (
                <Box
                  onClick={handleAdd}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '28px',
                    width: '28px',
                    p: '4px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    '&:hover': {
                      background: 'rgba(48,88,255,0.1)'
                    }
                  }}
                >
                  <Image src={circleAdd} alt="add" height={20} width={20} />
                </Box>
              )}
            </Box>
          </Box>
        ))}
    </Box>
  );
}
