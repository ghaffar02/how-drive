import {
  Box,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import React, {useState, useEffect} from 'react';
import CustomButton from '@/components/admin-dashboard/CustomButton';
import checkmarkWhite from '@/assets/svgs/checkmarkWhite.svg';
import plusWhite from '@/assets/svgs/plusWhite.svg';
import sendIcon from '@/assets/svgs/dashboard-student/sendIcon.svg';

interface FAQFormProps {
  activeTab?: string;
  initialData?: {
    germanQuestion?: string;
    germanAnswer?: string;
    englishQuestion?: string;
    englishAnswer?: string;
  };
  onSave?: (data: any) => void;
  onAddNew?: () => void;
}

export default function FAQForm({
  activeTab,
  initialData,
  onSave,
  onAddNew
}: FAQFormProps) {
  const isEmails = activeTab === 'Emails';

  // Initialize form data based on active tab
  const [formData, setFormData] = useState(() => {
    return {
      germanQuestion: initialData?.germanQuestion || '',
      germanAnswer: initialData?.germanAnswer || '',
      englishQuestion: initialData?.englishQuestion || '',
      englishAnswer: initialData?.englishAnswer || '',
      stu: false,
      sch: false,
      tra: false
    };
  });

  // Update form data when initialData or activeTab changes
  useEffect(() => {
    if (initialData) {
      setFormData({
        germanQuestion: initialData.germanQuestion || '',
        germanAnswer: initialData.germanAnswer || '',
        englishQuestion: initialData.englishQuestion || '',
        englishAnswer: initialData.englishAnswer || '',
        stu: false,
        sch: false,
        tra: false
      });
    } else {
      setFormData({
        germanQuestion: '',
        germanAnswer: '',
        englishQuestion: '',
        englishAnswer: '',
        stu: false,
        sch: false,
        tra: false
      });
    }
  }, [initialData]);

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    if (onSave) {
      onSave(formData);
      // Reset form after save
      setFormData({
        germanQuestion: '',
        germanAnswer: '',
        englishQuestion: '',
        englishAnswer: '',
        stu: false,
        sch: false,
        tra: false
      });
    }
  };

  const handleAddNew = () => {
    setFormData({
      germanQuestion: '',
      germanAnswer: '',
      englishQuestion: '',
      englishAnswer: '',
      stu: false,
      sch: false,
      tra: false
    });
    if (onAddNew) {
      onAddNew();
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        background: '#ffffff99',
        boxShadow: `0px 0px 0px 1px rgb(255, 255, 255, rgb(255, 255, 255)), 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)`,
        border: '2px solid #fff',
        borderRadius: '24px',
        backdropFilter: 'blur(15px)',
        height: 'fit-content',
        maxHeight: '100%',
        overflowY: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}
    >
      {/* Title/Question (DE) */}
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#2D3748',
            fontFamily: '"Inter", sans-serif'
          }}
        >
          {isEmails ? 'Title (DE)' : 'Question (DE)'}
        </Typography>
        <TextField
          value={formData.germanQuestion || ''}
          onChange={(e) => handleChange('germanQuestion', e.target.value)}
          placeholder={
            isEmails ? 'Enter title in German' : 'Enter question in German'
          }
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

      {/* Text/Answer (DE) */}
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#2D3748',
            fontFamily: '"Inter", sans-serif'
          }}
        >
          {isEmails ? 'Text (DE)' : 'Answer (DE)'}
        </Typography>
        <TextField
          value={formData.germanAnswer || ''}
          onChange={(e) => handleChange('germanAnswer', e.target.value)}
          placeholder={
            isEmails ? 'Enter text in German' : 'Enter answer in German'
          }
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

      {/* Title/Question (EN) */}
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#2D3748',
            fontFamily: '"Inter", sans-serif'
          }}
        >
          {isEmails ? 'Title (EN)' : 'Question (EN)'}
        </Typography>
        <TextField
          value={formData.englishQuestion || ''}
          onChange={(e) => handleChange('englishQuestion', e.target.value)}
          placeholder={
            isEmails ? 'Enter title in English' : 'Enter question in English'
          }
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

      {/* Text/Answer (EN) */}
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#2D3748',
            fontFamily: '"Inter", sans-serif'
          }}
        >
          {isEmails ? 'Text (EN)' : 'Answer (EN)'}
        </Typography>
        <TextField
          value={formData.englishAnswer || ''}
          onChange={(e) => handleChange('englishAnswer', e.target.value)}
          placeholder={
            isEmails ? 'Enter text in English' : 'Enter answer in English'
          }
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

      {/* Checkboxes - Only for Email tab */}
      {isEmails && (
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.stu}
                onChange={(e) => handleChange('stu', e.target.checked)}
                sx={{
                  color: '#4611f5',
                  '&.Mui-checked': {
                    color: '#4611f5'
                  },
                  '& .MuiSvgIcon-root': {
                    fontSize: 20
                  }
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#2D3748',
                  fontFamily: '"Inter", sans-serif'
                }}
              >
                Stu
              </Typography>
            }
            sx={{margin: 0}}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.sch}
                onChange={(e) => handleChange('sch', e.target.checked)}
                sx={{
                  color: '#4611f5',
                  '&.Mui-checked': {
                    color: '#4611f5'
                  },
                  '& .MuiSvgIcon-root': {
                    fontSize: 20
                  }
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#2D3748',
                  fontFamily: '"Inter", sans-serif'
                }}
              >
                Sch
              </Typography>
            }
            sx={{margin: 0}}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.tra}
                onChange={(e) => handleChange('tra', e.target.checked)}
                sx={{
                  color: '#4611f5',
                  '&.Mui-checked': {
                    color: '#4611f5'
                  },
                  '& .MuiSvgIcon-root': {
                    fontSize: 20
                  }
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#2D3748',
                  fontFamily: '"Inter", sans-serif'
                }}
              >
                Tra
              </Typography>
            }
            sx={{margin: 0}}
          />
        </Box>
      )}

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
        {isEmails ? (
          /* Send Email button - Only for Email tab */
          <CustomButton
            label="Send Email"
            bgColor="#4611f5"
            hoverColor="#300ca8"
            activeColor="#1A065C"
            imgSrc={sendIcon}
            onClick={handleSave}
            btnSx={{
              minWidth: '24px',
              maxWidth: '24px',
              height: '24px',
              filter: 'brightness(0) invert(1)'
            }}
            sx={{
              gap: '8px',
              padding: '10px 20px'
            }}
          />
        ) : (
          /* Save and Add New buttons - For other tabs */
          <>
            <CustomButton
              label="Add New"
              bgColor="#4611f5"
              hoverColor="#300ca8"
              activeColor="#1A065C"
              imgSrc={plusWhite}
              onClick={handleAddNew}
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
          </>
        )}
      </Box>
    </Box>
  );
}
