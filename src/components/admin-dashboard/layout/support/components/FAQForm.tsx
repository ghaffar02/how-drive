import {Box, Typography, TextField} from '@mui/material';
import React, {useState} from 'react';
import CustomButton from '@/components/admin-dashboard/CustomButton';
import checkmarkWhite from '@/assets/svgs/checkmarkWhite.svg';
import plusWhite from '@/assets/svgs/plusWhite.svg';

interface FAQFormProps {
  initialData?: {
    germanQuestion: string;
    germanAnswer: string;
    englishQuestion: string;
    englishAnswer: string;
  };
  onSave?: (data: {
    germanQuestion: string;
    germanAnswer: string;
    englishQuestion: string;
    englishAnswer: string;
  }) => void;
  onAddNew?: () => void;
}

export default function FAQForm({
  initialData,
  onSave,
  onAddNew
}: FAQFormProps) {
  const [formData, setFormData] = useState({
    germanQuestion: initialData?.germanQuestion || '',
    germanAnswer: initialData?.germanAnswer || '',
    englishQuestion: initialData?.englishQuestion || '',
    englishAnswer: initialData?.englishAnswer || ''
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    if (onSave) {
      onSave(formData);
    }
  };

  return (
    <Box
      sx={{
        width: '848px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        background: '#ffffff99',
        boxShadow: `0px 0px 0px 1px rgb(255, 255, 255, rgb(255, 255, 255)), 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)`,
        border: '2px solid #fff',
        borderRadius: '24px',
        backdropFilter: 'blur(15px)'
      }}
    >
      {/* Question (DE) */}
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#2D3748',
            fontFamily: '"Inter", sans-serif'
          }}
        >
          Question (DE)
        </Typography>
        <TextField
          value={formData.germanQuestion}
          onChange={(e) => handleChange('germanQuestion', e.target.value)}
          placeholder="Enter question in German"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          sx={{
            width: '100%',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              background: '#ffffff',
              fontSize: '14px',
              padding: '12px'
            },
            '& .MuiInputBase-input': {
              padding: 0,
              fontSize: '14px',
              fontFamily: '"Inter", sans-serif'
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#E2E8F0'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#CBD5E0'
            },
            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#4611f5'
            }
          }}
        />
      </Box>

      {/* Answer (DE) */}
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#2D3748',
            fontFamily: '"Inter", sans-serif'
          }}
        >
          Answer (DE)
        </Typography>
        <TextField
          value={formData.germanAnswer}
          onChange={(e) => handleChange('germanAnswer', e.target.value)}
          placeholder="Enter answer in German"
          multiline
          rows={6}
          fullWidth
          variant="outlined"
          sx={{
            width: '100%',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              background: '#ffffff',
              fontSize: '14px',
              padding: '12px'
            },
            '& .MuiInputBase-input': {
              padding: 0,
              fontSize: '14px',
              fontFamily: '"Inter", sans-serif'
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#E2E8F0'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#CBD5E0'
            },
            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#4611f5'
            }
          }}
        />
      </Box>

      {/* Question (EN) */}
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#2D3748',
            fontFamily: '"Inter", sans-serif'
          }}
        >
          Question (EN)
        </Typography>
        <TextField
          value={formData.englishQuestion}
          onChange={(e) => handleChange('englishQuestion', e.target.value)}
          placeholder="Enter question in English"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          sx={{
            width: '100%',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              background: '#ffffff',
              fontSize: '14px',
              padding: '12px'
            },
            '& .MuiInputBase-input': {
              padding: 0,
              fontSize: '14px',
              fontFamily: '"Inter", sans-serif'
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#E2E8F0'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#CBD5E0'
            },
            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#4611f5'
            }
          }}
        />
      </Box>

      {/* Answer (EN) */}
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#2D3748',
            fontFamily: '"Inter", sans-serif'
          }}
        >
          Answer (EN)
        </Typography>
        <TextField
          value={formData.englishAnswer}
          onChange={(e) => handleChange('englishAnswer', e.target.value)}
          placeholder="Enter answer in English"
          multiline
          rows={6}
          fullWidth
          variant="outlined"
          sx={{
            width: '100%',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              background: '#ffffff',
              fontSize: '14px',
              padding: '12px'
            },
            '& .MuiInputBase-input': {
              padding: 0,
              fontSize: '14px',
              fontFamily: '"Inter", sans-serif'
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#E2E8F0'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#CBD5E0'
            },
            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#4611f5'
            }
          }}
        />
      </Box>

      {/* Buttons */}
      <Box
        sx={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'flex-start',
          marginTop: '8px'
        }}
      >
        <CustomButton
          label="Save"
          bgColor="#14B8A6"
          hoverColor="#0D9488"
          activeColor="#0F766E"
          imgSrc={checkmarkWhite}
          onClick={handleSave}
          btnSx={{
            minWidth: '24px',
            maxWidth: '24px',
            height: '24px'
          }}
          sx={{
            gap: '8px',
            padding: '10px 20px'
          }}
        />
        <CustomButton
          label="Add New"
          bgColor="#4611f5"
          hoverColor="#300ca8"
          activeColor="#1A065C"
          imgSrc={plusWhite}
          onClick={onAddNew}
          btnSx={{
            minWidth: '24px',
            maxWidth: '24px',
            height: '24px'
          }}
          sx={{
            gap: '8px',
            padding: '10px 20px'
          }}
        />
      </Box>
    </Box>
  );
}

