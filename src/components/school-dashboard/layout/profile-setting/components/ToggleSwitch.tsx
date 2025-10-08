import React, {useState} from 'react';
import {styled} from '@mui/material/styles';
import Switch from '@mui/material/Switch';

interface ToggleSwitchProps {
  defaultChecked?: boolean;
  onColor?: string;
  offColor?: string;
  customSize?: 'small' | 'medium' | 'large';
}

const StyledSwitch = styled(Switch, {
  shouldForwardProp: (prop) =>
    prop !== 'onColor' && prop !== 'offColor' && prop !== 'customSize'
})<{onColor?: string; offColor?: string}>(({onColor, offColor}) => ({
  width: 50,
  height: 28,
  padding: 0,
  display: 'flex',
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(22px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: onColor || '#4611F5',
        opacity: 1
      }
    }
  },
  '& .MuiSwitch-thumb': {
    width: 24,
    height: 24,
    backgroundColor: '#fff',
    borderRadius: '50%'
  },
  '& .MuiSwitch-track': {
    borderRadius: 999,
    opacity: 1,
    backgroundColor: offColor || '#ccc',
    boxSizing: 'border-box'
  }
}));

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  defaultChecked = true, // ✅ Default ON
  onColor,
  offColor,
  customSize = 'medium'
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <StyledSwitch
      checked={checked}
      onChange={() => setChecked(!checked)} // ✅ Toggle karega
      onColor={onColor}
      offColor={offColor}
      sx={{
        ...(customSize === 'small' && {transform: 'scale(0.8)'}),
        ...(customSize === 'large' && {transform: 'scale(1.2)'})
      }}
    />
  );
};
