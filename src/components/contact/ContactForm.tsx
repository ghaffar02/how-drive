import localFont from '@/utils/themes';
import {Box, Button, MenuItem, TextField} from '@mui/material';
import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useTranslations} from 'next-intl';

type FormValues = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

export default function ContactForm() {
  const t = useTranslations('contactPage');
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Form submitted:', data);
    reset();
  };
  return (
    <Box
      sx={{
        maxWidth: '1400px',
        width: '100%',
        margin: 'auto',
        padding: {xs: '56px 16px', sm: '64px 24px', md: '80px 48px'}
      }}
    >
      <Box
        sx={{
          maxWidth: '720px',
          width: '100%',
          margin: 'auto',
          padding: '48px',
          background: '#edf0ff',
          borderRadius: '24px'
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          <Box>
            <Box
              component="label"
              htmlFor="name"
              sx={{...localFont.p8, color: '#4a5568'}}
            >
              {t('input1')}
            </Box>
            <TextField
              id="name"
              type="text"
              placeholder={t('input1')}
              {...register('name', {required: `${t('error1')}`})}
              error={!!errors.name}
              helperText={errors.name?.message}
              sx={{
                width: '100%',
                mt: '10px',
                '& .MuiInputBase-root': {
                  borderRadius: '10px',
                  background: '#fff',
                  '&:hover fieldset': {
                    borderColor: '#1976d2'
                  }
                },
                '& .MuiInputBase-input': {
                  padding: '12px',
                  fontSize: '14px'
                }
              }}
            />
          </Box>
          <Box>
            <Box
              component="label"
              htmlFor="email"
              sx={{...localFont.p8, color: '#4a5568'}}
            >
              {t('input2')}
            </Box>
            <TextField
              id="email"
              type="email"
              placeholder={t('input2')}
              {...register('email', {
                required: `${t('error2')}`,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email'
                }
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{
                width: '100%',
                mt: '10px',
                '& .MuiInputBase-root': {
                  borderRadius: '10px',
                  background: '#fff',
                  '&:hover fieldset': {
                    borderColor: '#1976d2'
                  }
                },
                '& .MuiInputBase-input': {
                  padding: '12px',
                  fontSize: '14px'
                }
              }}
            />
          </Box>
          <Box>
            <Box
              component="label"
              htmlFor="topic"
              sx={{...localFont.p8, color: '#4a5568'}}
            >
              {t('input3')}
            </Box>
            <TextField
              id="topic"
              select
              defaultValue=""
              placeholder="Select..."
              {...register('topic', {required: `${t('error3')}`})}
              error={!!errors.topic}
              helperText={errors.topic?.message}
              sx={{
                width: '100%',
                mt: '10px',
                '& .MuiInputBase-root': {
                  borderRadius: '10px',
                  background: '#fff',
                  '&:hover fieldset': {
                    borderColor: '#1976d2'
                  }
                },
                '& .MuiInputBase-input': {
                  padding: '12px',
                  fontSize: '14px'
                }
              }}
            >
              <MenuItem value="generalquestions">{t('input3a')}</MenuItem>
              <MenuItem value="malfunction">{t('input3b')}</MenuItem>
              <MenuItem value="other">{t('input3c')}</MenuItem>
            </TextField>
          </Box>
          <Box>
            <Box
              component="label"
              htmlFor="message"
              sx={{...localFont.p8, color: '#4a5568'}}
            >
              {t('input4')}
            </Box>
            <TextField
              id="message"
              type="text"
              placeholder={t('input4a')}
              multiline
              rows={4}
              {...register('message', {required: `${t('error4')}`})}
              error={!!errors.message}
              helperText={errors.message?.message}
              sx={{
                width: '100%',
                mt: '10px',
                '& .MuiInputBase-root': {
                  borderRadius: '10px',
                  background: '#fff',
                  padding: '0px',
                  '&:hover fieldset': {
                    borderColor: '#1976d2'
                  }
                },
                '& .MuiInputBase-input': {
                  padding: '12px',
                  fontSize: '14px'
                }
              }}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disableRipple
            sx={{
              background: '#4611f5',
              color: '#fff',
              textTransform: 'none',
              padding: '8px 16px',
              fontSize: '16px',
              borderRadius: '12px',
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: 500,
              boxShadow: 'none',
              '&:hover': {
                background: '#300ca8',
                boxShadow: 'none'
              },
              '&:active': {
                background: '#1A065C'
              }
            }}
          >
            {t('button')}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
