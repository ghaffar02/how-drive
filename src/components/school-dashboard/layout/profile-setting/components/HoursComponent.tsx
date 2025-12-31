import React, {useState} from 'react';
import Image from 'next/image';
import {Box, Typography} from '@mui/material';
import CustomTextField from '@/components/school-dashboard/InputField';
import arrowIcon from '@/assets/svgs/dashboard-student/arrow.svg';
import circleAdd from '@/assets/svgs/circleadd2.svg';
import circleCross from '@/assets/svgs/dashboard-student/crosscircle.svg';
import localFont from '@/utils/themes';
import TimePickerValue from './TimePicker';
import {useTranslations} from 'next-intl';

type HourProps = {
  unavailable?: boolean;
  day: string;
};

export default function HoursComponent({unavailable = false, day}: HourProps) {
  const t = useTranslations('SchoolDashboard.Calendar.Sidebar');

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
    <Box
      sx={{
        display: 'flex',
        maxWidth: {xs: '100%', lg: '425px'},
        width: '100%',
        // maxWidth: '100%',
        flexDirection: 'column',
        gap: '8px'
      }}
    >
      {/* <TimePickerValue /> */}
      {/* Case 3: "Not available" view */}
      {isUnavailable && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            // justifyContent: 'flex-end',
            gap: '10px'
          }}
        >
          <Typography
            sx={{...localFont.inter14, maxWidth: '30px', width: '100%'}}
          >
            {day}
          </Typography>
          <CustomTextField
            labal={t('notAvailable')}
            disabled={true}
            sx={{
              width: '100%',
              maxWidth: {xs: '100%', lg: '311px'},
              textAlign: 'left',
              mt: '8px'
            }}
          />
          <Image
            src={circleAdd}
            alt="add"
            height={20}
            width={20}
            style={{
              margin: '4px',
              cursor: 'pointer',
              textAlign: 'end',
              marginLeft: '36px'
            }}
            onClick={handleUnavailableAdd}
          />
        </Box>
      )}
      {/* Case 1 & 2: Time input rows */}
      {!isUnavailable &&
        rows.map((row, index) => (
          <Box
            key={row.id}
            sx={{
              width: '100%',
              maxWidth: '100%',
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              minWidth: 0
            }}
          >
            {/* Show 'Mo' only in the first row */}
            <Typography
              sx={{
                ...localFont.inter14,
                width: '30px',
                flexShrink: 0,
                visibility: index === 0 ? 'visible' : 'hidden'
              }}
            >
              {day}
            </Typography>

            {/* <TimePickerValue sx={{maxWidth: '200px'}} /> */}
            {/* Time input fields */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                width: '100%',
                maxWidth: '100%',
                flex: 1,
                minWidth: 0
              }}
            >
              <Box sx={{flex: 1, minWidth: 0}}>
                <TimePickerValue />
              </Box>

              <Image 
                src={arrowIcon} 
                alt="arrowIcon" 
                height={14} 
                width={14}
                style={{flexShrink: 0}}
              />
              <Box sx={{flex: 1, minWidth: 0}}>
                <TimePickerValue />
              </Box>
            </Box>

            {/* Action icons */}
            <Box sx={{display: 'flex', flexShrink: 0}}>
              <Image
                src={circleCross}
                alt="cross"
                height={20}
                width={20}
                style={{margin: '4px', cursor: 'pointer'}}
                onClick={() => handleRemove(row.id)}
              />
              {/* Show add only if: first row AND total rows < 2 */}
              {/* {index === 0 && rows.length < 2 && ( */}
              <Image
                src={circleAdd}
                alt="add"
                height={20}
                width={20}
                style={{
                  visibility:
                    index === 0 && rows.length < 2 ? 'visible' : 'hidden',
                  margin: '4px',
                  cursor: 'pointer'
                }}
                onClick={handleAdd}
              />
              {/* )} */}
            </Box>
          </Box>
        ))}
    </Box>
  );
}
