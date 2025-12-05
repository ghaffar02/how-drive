import {Box, Typography, TextField} from '@mui/material';
import React, {useState, useEffect} from 'react';
import CustomButton from '@/components/admin-dashboard/CustomButton';
import checkmarkWhite from '@/assets/svgs/checkmarkWhite.svg';
import plusWhite from '@/assets/svgs/plusWhite.svg';

interface FAQFormProps {
  activeTab?: string;
  initialData?: {
    video?: string;
    photoDE?: string;
    photoEN?: string;
    text1DE?: string;
    text2DE?: string;
    text1EN?: string;
    text2EN?: string;
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
  const isHelpArticles = activeTab === 'Help Articles';

  // Initialize form data based on active tab
  const [formData, setFormData] = useState(() => {
    if (isHelpArticles) {
      return {
        video: initialData?.video || '',
        photoDE: initialData?.photoDE || '',
        photoEN: initialData?.photoEN || '',
        text1DE: initialData?.text1DE || '',
        text2DE: initialData?.text2DE || '',
        text1EN: initialData?.text1EN || '',
        text2EN: initialData?.text2EN || ''
      };
    } else {
      return {
        germanQuestion: initialData?.germanQuestion || '',
        germanAnswer: initialData?.germanAnswer || '',
        englishQuestion: initialData?.englishQuestion || '',
        englishAnswer: initialData?.englishAnswer || ''
      };
    }
  });

  // Update form data when initialData or activeTab changes
  useEffect(() => {
    if (isHelpArticles) {
      if (initialData) {
        setFormData({
          video: initialData.video || '',
          photoDE: initialData.photoDE || '',
          photoEN: initialData.photoEN || '',
          text1DE: initialData.text1DE || '',
          text2DE: initialData.text2DE || '',
          text1EN: initialData.text1EN || '',
          text2EN: initialData.text2EN || ''
        });
      } else {
        setFormData({
          video: '',
          photoDE: '',
          photoEN: '',
          text1DE: '',
          text2DE: '',
          text1EN: '',
          text2EN: ''
        });
      }
    } else {
      if (initialData) {
        setFormData({
          germanQuestion: initialData.germanQuestion || '',
          germanAnswer: initialData.germanAnswer || '',
          englishQuestion: initialData.englishQuestion || '',
          englishAnswer: initialData.englishAnswer || ''
        });
      } else {
        setFormData({
          germanQuestion: '',
          germanAnswer: '',
          englishQuestion: '',
          englishAnswer: ''
        });
      }
    }
  }, [initialData, isHelpArticles]);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    if (onSave) {
      onSave(formData);
      // Reset form after save
      if (isHelpArticles) {
        setFormData({
          video: '',
          photoDE: '',
          photoEN: '',
          text1DE: '',
          text2DE: '',
          text1EN: '',
          text2EN: ''
        });
      } else {
        setFormData({
          germanQuestion: '',
          germanAnswer: '',
          englishQuestion: '',
          englishAnswer: ''
        });
      }
    }
  };

  const handleAddNew = () => {
    if (isHelpArticles) {
      setFormData({
        video: '',
        photoDE: '',
        photoEN: '',
        text1DE: '',
        text2DE: '',
        text1EN: '',
        text2EN: ''
      });
    } else {
      setFormData({
        germanQuestion: '',
        germanAnswer: '',
        englishQuestion: '',
        englishAnswer: ''
      });
    }
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
      {isHelpArticles ? (
        <>
          {/* Top Row: Video, Photo (DE), Photo (EN) */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: {xs: 'column', md: 'row'},
              gap: '16px'
            }}
          >
        {/* Video */}
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px', flex: 1}}>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 500,
              color: '#2D3748',
              fontFamily: '"Inter", sans-serif'
            }}
          >
            Video
          </Typography>
          <TextField
            value={formData.video}
            onChange={(e) => handleChange('video', e.target.value)}
            placeholder="Enter video URL"
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

        {/* Photo (DE) */}
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px', flex: 1}}>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 500,
              color: '#2D3748',
              fontFamily: '"Inter", sans-serif'
            }}
          >
            Photo (DE)
          </Typography>
          <TextField
            value={formData.photoDE}
            onChange={(e) => handleChange('photoDE', e.target.value)}
            placeholder="Enter photo URL (DE)"
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

        {/* Photo (EN) */}
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px', flex: 1}}>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 500,
              color: '#2D3748',
              fontFamily: '"Inter", sans-serif'
            }}
          >
            Photo (EN)
          </Typography>
          <TextField
            value={formData.photoEN}
            onChange={(e) => handleChange('photoEN', e.target.value)}
            placeholder="Enter photo URL (EN)"
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
      </Box>

      {/* Text 1 (DE) */}
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#2D3748',
            fontFamily: '"Inter", sans-serif'
          }}
        >
          Text 1 (DE)
        </Typography>
        <TextField
          value={formData.text1DE}
          onChange={(e) => handleChange('text1DE', e.target.value)}
          placeholder="Enter text 1 in German"
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

      {/* Text 2 (DE) */}
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#2D3748',
            fontFamily: '"Inter", sans-serif'
          }}
        >
          Text 2 (DE)
        </Typography>
        <TextField
          value={formData.text2DE}
          onChange={(e) => handleChange('text2DE', e.target.value)}
          placeholder="Enter text 2 in German"
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

      {/* Text 1 (EN) */}
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#2D3748',
            fontFamily: '"Inter", sans-serif'
          }}
        >
          Text 1 (EN)
        </Typography>
        <TextField
          value={formData.text1EN}
          onChange={(e) => handleChange('text1EN', e.target.value)}
          placeholder="Enter text 1 in English"
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

      {/* Text 2 (EN) */}
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#2D3748',
            fontFamily: '"Inter", sans-serif'
          }}
        >
          Text 2 (EN)
        </Typography>
        <TextField
          value={formData.text2EN}
          onChange={(e) => handleChange('text2EN', e.target.value)}
          placeholder="Enter text 2 in English"
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
        </>
      ) : (
        <>
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
              value={(formData as any).germanQuestion || ''}
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
              value={(formData as any).germanAnswer || ''}
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
              value={(formData as any).englishQuestion || ''}
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
              value={(formData as any).englishAnswer || ''}
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
        </>
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
      </Box>
    </Box>
  );
}

