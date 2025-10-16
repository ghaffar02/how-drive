import {Box, MenuItem, TextField, Typography} from '@mui/material';
import {useState} from 'react';
import localFont from '@/utils/themes';
import tick from '@/assets/svgs/dashboard-student/tick.svg';
import cross from '@/assets/svgs/dashboard-student/btncross.svg';
import CustomButton from '@/components/student-dashboard/CustomButton';
import CustomTextField from '@/components/school-dashboard/InputField';
import Image from 'next/image';
import crossCircle from '@/assets/svgs/dashboard-student/crosscircle.svg';

interface DropdownOption {
  value: string;
  label: string;
}

interface EditAppointmentProps {
  title?: string;
  driverLabel?: string;
  dayLabel?: string;
  beginLabel?: string;
  endLabel?: string;
  participantsLabel?: string;
  participantName?: string;
  cancelHeading?: string;
  cancelDescription?: string;
  cancelBtnLabel?: string;
  saveBtnLabel?: string;
  dropdownOptions?: DropdownOption[];
  onClose?: () => void;
}

export default function EditappointmentDropDown({
  title = 'Edit appointment',
  driverLabel = 'Driver',
  dayLabel = 'Day',
  beginLabel = 'Begin',
  endLabel = 'End',
  participantsLabel = 'Participants',
  participantName = 'Daniel Mustermann 1',
  cancelHeading = 'Cancel appointment',
  cancelDescription = 'To cancel the appointment, remove all participants from the list and click Save.',
  cancelBtnLabel = 'Cancel',
  saveBtnLabel = 'Save',
  dropdownOptions = [
    {value: 'malfunction', label: 'Malfunction'},
    {value: 'question', label: 'Question'}
  ],
  onClose
}: EditAppointmentProps) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleContainerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px',
        gap: '24px'
      }}
    >
      <Typography
        sx={{
          ...localFont.inter16,
          width: '100%',
          fontFamily: '"Inter", sans-serif !important',
          fontWeight: 500,
          textAlign: 'center'
        }}
      >
        {title}
      </Typography>

      {/* Driver Dropdown */}
      <Box
        onClick={handleContainerClick}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column'},
          gap: {xs: '4px'},
          alignItems: 'start',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter14,
            width: '100%',
            fontFamily: '"Inter", sans-serif !important',
            fontWeight: 400,
            color: '#000',
            textAlign: 'left'
          }}
        >
          {driverLabel}
        </Typography>

        <TextField
          select
          fullWidth
          variant="outlined"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          SelectProps={{
            displayEmpty: true
          }}
          sx={{
            background: '#ffffff99',
            height: 40,
            maxWidth: {lg: '402px'},
            width: '100%',
            borderRadius: '8px',
            '& .MuiInputBase-root': {
              height: '100%',
              fontSize: '14px',
              padding: '12px',
              borderRadius: '12px',
              boxShadow:
                '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none !important'
            },
            '& fieldset': {
              borderColor: '#e2e8f00a'
            },
            '& .MuiSelect-select': {
              padding: 0,
              fontSize: '16px',
              color: selectedCategory ? '#000' : '#aaa'
            }
          }}
        >
          <MenuItem value="" disabled>
            Select...
          </MenuItem>
          {dropdownOptions.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      {/* Day */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter14,
            color: '#000',
            fontFamily: '"Inter", sans-serif !important',
            fontWeight: 400,
            textAlign: 'left',
            textTransform: 'capitalize'
          }}
        >
          {dayLabel}
        </Typography>
        <CustomTextField type="date" id="day" name="day" />
      </Box>

      {/* Begin */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter14,
            color: '#000',
            fontFamily: '"Inter", sans-serif !important',
            fontWeight: 400,
            textAlign: 'left',
            textTransform: 'capitalize'
          }}
        >
          {beginLabel}
        </Typography>
        <CustomTextField type="time" id="begin" name="begin" />
      </Box>

      {/* End */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter14,
            color: '#000',
            fontFamily: '"Inter", sans-serif !important',
            fontWeight: 400,
            textAlign: 'left',
            textTransform: 'capitalize'
          }}
        >
          {endLabel}
        </Typography>
        <CustomTextField type="time" id="end" name="end" />
      </Box>

      {/* Participants */}
      <Box sx={{width: '100%'}}>
        <Typography
          sx={{
            ...localFont.inter14,
            fontWeight: 400,
            color: '#000',
            mb: '4px',
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          {participantsLabel}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography
            sx={{
              ...localFont.inter14,
              fontWeight: 300,
              fontFamily: '"Inter", sans-serif !important'
            }}
          >
            {participantName}
          </Typography>
          <Box sx={{height: '20px', width: '20px'}}>
            <Image
              src={crossCircle}
              alt="addIcon"
              style={{height: '100%', width: '100%'}}
            />
          </Box>
        </Box>
      </Box>

      {/* Cancel Info */}
      <Box sx={{width: '100%'}}>
        <Typography
          sx={{
            ...localFont.inter14,
            fontWeight: 400,
            color: '#000',
            mb: '4px',
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          {cancelHeading}
        </Typography>
        <Typography
          sx={{
            ...localFont.inter14,
            fontWeight: 300,
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          {cancelDescription}
        </Typography>
      </Box>

      {/* Buttons */}
      <Box
        sx={{
          width: {xs: '100%'},
          p: '8px 0px',
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <CustomButton
          onClick={onClose}
          label={cancelBtnLabel}
          bgColor="rgb(220, 38, 38)"
          hoverColor="#991919"
          hoverTextcolor="#fff"
          imgSrc={cross}
          sx={{
            gap: '7px',
            maxWidth: '122px',
            width: '100%',
            justifyContent: 'start'
          }}
        />
        <CustomButton
          label={saveBtnLabel}
          bgColor="#0D9488"
          hoverColor="#0C5C72"
          imgSrc={tick}
          sx={{
            gap: '8px',
            maxWidth: '122px',
            width: '100%',
            justifyContent: 'start'
          }}
          onClick={onClose}
        />
      </Box>
    </Box>
  );
}
