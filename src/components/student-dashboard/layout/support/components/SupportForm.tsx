'use client';
import localFont from '@/utils/themes';
import {Box, Button, MenuItem, TextField, Typography} from '@mui/material';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';

type Inputs = {
  category: string;
  details: string;
};

export default function SupportForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: {errors}
  } = useForm<Inputs>();
  function Submit(data: Inputs) {
    console.log(data);
    reset();
  }
  return (
    <Box
      sx={{
        background: 'transparent',
        border: '1px solid #f8fafc',
        borderRadius: {xs: '8px', md: '0px 24px 24px 0px'},
        maxWidth: '860px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: {xs: '8px', md: '24px'},
        height: '100%'
      }}
    >
      <Box>
        <Typography sx={{...localFont.h6, textAlign: 'center', mb: '10px'}}>
          Submit a new request!
        </Typography>
        <Typography
          sx={{
            ...localFont.inter16,
            fontFamily: '"Inter", sans-serif !important',
            fontWeight: '300',
            textAlign: 'center'
          }}
        >
          Are you experiencing problems with our service or do you simply have
          questions? Send us your request. We&apos;ll try to process it as
          quickly as possible.
        </Typography>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit(Submit)}
        sx={{
          maxWidth: '540px',
          width: '100%',
          margin: '0px auto',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <Typography
            sx={{
              ...localFont.inter14,
              fontFamily: '"Inter", sans-serif !important'
            }}
          >
            Category
          </Typography>
          <Controller
            name="category"
            control={control}
            defaultValue=""
            rules={{required: 'Category is required'}}
            render={({field}) => (
              <TextField
                {...field}
                select
                fullWidth
                variant="outlined"
                error={!!errors.category}
                helperText={errors.category?.message}
                sx={{
                  background: '#ffffff99',
                  height: 40,
                  borderRadius: '8px',
                  '& .MuiInputBase-root': {
                    height: '100%',
                    fontSize: '14px',
                    padding: '12px'
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                  },
                  '& .MuiSelect-select': {
                    padding: 0,
                    fontSize: '14px'
                  }
                }}
              >
                <MenuItem value="" disabled>
                  Select...
                </MenuItem>
                <MenuItem value="malfunction">Malfunction</MenuItem>
                <MenuItem value="question">Question</MenuItem>
                <MenuItem value="feedback">Feedback</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            )}
          />
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <Typography
            sx={{
              ...localFont.inter14,
              fontFamily: '"Inter", sans-serif !important'
            }}
          >
            Request details
          </Typography>
          <TextField
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            error={!!errors.details}
            helperText={errors.details?.message}
            placeholder="How can we help you?"
            {...register('details', {required: 'Message is required'})}
            sx={{
              borderRadius: '8px',
              '& .MuiInputBase-root': {
                background: '#ffffff99',
                height: '100%',
                fontSize: '14px',
                padding: '12px'
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                border: 'none'
              },
              '& .MuiInputBase-input': {
                padding: 0,
                fontSize: '14px'
              }
            }}
          />
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          disableRipple
          sx={{
            fontSize: {xs: '14px', md: '15px', lg: '16px'},
            fontFamily: '"Inter", sans-serif !important',
            fontWeight: '500',
            height: '40px',
            borderRadius: '8px',
            background: '#4611f5',
            '&:hover': {
              background: '#300CA8'
            },
            '&:active': {
              background: '#1A065C'
            }
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}
