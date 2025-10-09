import React, {useState} from 'react';
import {styled} from '@mui/material/styles';
import Switch from '@mui/material/Switch';

interface ToggleSwitchProps {
  defaultChecked?: boolean;
  onColor?: string;
  offColor?: string;
  customSize?: 'small' | 'medium' | 'large';
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  defaultChecked = true,
  onColor,
  offColor,
  customSize = 'medium'
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const StyledSwitch = styled(Switch, {
    shouldForwardProp: (prop) =>
      prop !== 'onColor' && prop !== 'offColor' && prop !== 'customSize'
  })<{onColor?: string; offColor?: string}>(({onColor, offColor}) => ({
    width: 50,
    height: 28,
    padding: 0,
    display: 'flex',
    '& .MuiSwitch-switchBase': {
      padding: 4,
      transition: 'transform 0.6s ease, color 0.6s ease',
      '&.Mui-checked': {
        transform: 'translateX(22px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: onColor || '#4611F5',
          opacity: 1,
          border: '1px solid transparent',
          transition: 'background-color 0.6s ease, border 0.6s ease'
        }
      }
    },
    '& .MuiSwitch-thumb': {
      width: 20,
      height: 20,
      aspectRatio: 1 / 1,
      backgroundColor: checked ? '#fff' : 'rgb(113, 128, 150)',
      borderRadius: '50%',
      transition: 'background-color 0.5s ease'
    },
    '& .MuiSwitch-track': {
      borderRadius: 999,
      border: checked
        ? '1px solid rgba(113, 128, 150, 0.04)'
        : '1px solid rgb(113, 128, 150)',
      opacity: 1,
      backgroundColor: offColor || '#fff9f9ff',
      boxSizing: 'border-box',
      transition:
        'background-color 0.5s ease, border 0.5s ease, opacity 0.5s ease'
    }
  }));

  return (
    <StyledSwitch
      checked={checked}
      onChange={() => setChecked(!checked)}
      onColor={onColor}
      offColor={offColor}
      sx={{
        ...(customSize === 'small' && {transform: 'scale(0.8)'}),
        ...(customSize === 'large' && {transform: 'scale(1.2)'})
      }}
    />
  );
};
