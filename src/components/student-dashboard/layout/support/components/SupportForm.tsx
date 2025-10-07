'use client';
import localFont from '@/utils/themes';
import {Box, Button, MenuItem, TextField, Typography} from '@mui/material';
import React, {Dispatch, SetStateAction} from 'react';
import {useForm, Controller} from 'react-hook-form';
import drop from '@/assets/svgs/dashboard-student/dropdown.svg';
import Image from 'next/image';

import {useTranslations} from 'next-intl';

type Inputs = {
  category: string;
  details: string;
  file: FileList;
};

type Props = {
  setOpenFaq: Dispatch<SetStateAction<boolean>>;
  openFaq: boolean;
};

export default function SupportForm({setOpenFaq, openFaq}: Props) {
  const t = useTranslations('Dashboard.Support');
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: {errors}
  } = useForm<Inputs>();
  function Submit(data: Inputs) {
    if (data.file && data.file.length > 0) {
      const uploadedFile = data.file[0]; // <-- actual File object
      console.log('Full File object:', uploadedFile);
      console.log('File name:', uploadedFile.name);
      console.log('File type:', uploadedFile.type);
      console.log('File size:', uploadedFile.size);

      // Example: convert to FormData for API upload
      const formData = new FormData();
      formData.append('category', data.category);
      formData.append('details', data.details);
      formData.append('file', uploadedFile);

      console.log(formData);

      // send `formData` to backend
    }
    console.log(data);
    reset();
  }
  return (
    <Box
      sx={{
        background: 'transparent',
        border: '1px solid #f8fafc',
        borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
        maxWidth: '860px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: {xs: '20px', md: '60px'},
        justifyContent: {md: 'center'},
        padding: {xs: '20px', md: '24px'},
        height: {xs: 'calc(100vh - 194px)', md: '100%'},
        overflow: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}
    >
      <Box
        onClick={() => setOpenFaq((prev: boolean) => !prev)}
        sx={{
          display: {
            xs: 'flex',
            md: 'none'
          },
          // margin: 'auto',
          maxWidth: '80px',
          width: '100%'
          // gap: '6px'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter20,
            fontWeight: '600',
            fontFamily: '"Inter", sans-serif !important'
          }}
        >
          FAQs
        </Typography>
        <Box
          sx={{
            height: '25px',
            width: '25px !important',
            transition: 'transform 0.3s ease-in-out',
            transform: openFaq ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        >
          <Image
            src={drop}
            alt="drop"
            style={{height: '100%', width: '100%'}}
          />
        </Box>
      </Box>
      <Box>
        <Typography sx={{...localFont.h6, textAlign: 'center', mb: '10px'}}>
          {t('title1')}
        </Typography>
        <Typography
          sx={{
            ...localFont.inter16,
            fontFamily: '"Inter", sans-serif !important',
            fontWeight: '300',
            textAlign: 'center'
          }}
        >
          {t('des')}
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
          gap: {xs: '10px', md: '20px'}
        }}
      >
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <Typography
            sx={{
              ...localFont.inter14,
              fontFamily: '"Inter", sans-serif !important'
            }}
          >
            {t('opt1')}
          </Typography>
          <Controller
            name="category"
            control={control}
            defaultValue=""
            rules={{required: t('err1')}}
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
                  {t('choice1')}
                </MenuItem>
                <MenuItem value="malfunction">{t('choice2')}</MenuItem>
                <MenuItem value="question">{t('choice3')}</MenuItem>
                <MenuItem value="feedback">{t('choice4')}</MenuItem>
                <MenuItem value="other">{t('choice5')}</MenuItem>
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
            {t('opt2')}
          </Typography>
          <TextField
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            error={!!errors.details}
            helperText={errors.details?.message}
            placeholder={t('placeholder2')}
            {...register('details', {required: t('err2')})}
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

        {/* Drag and drop file code  */}

        <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <Typography
            sx={{
              ...localFont.inter14,
              fontFamily: '"Inter", sans-serif !important'
            }}
          >
            {t('opt3')}
          </Typography>

          {/* File Upload Field */}
          <Box
            sx={{
              border: '2px dashed #ccc',
              borderRadius: '8px',
              p: {xs: '12px', md: '20px'},
              textAlign: 'center',
              background: '#ffffff99',
              cursor: 'pointer',
              '&:hover': {borderColor: '#4615ff'}
            }}
            onClick={() => document.getElementById('fileInput')?.click()}
          >
            <input
              type="file"
              id="fileInput"
              style={{display: 'none'}}
              {...register('file', {required: t('err3')})}
            />

            <Typography
              sx={{
                fontSize: '14px',
                color: '#666',
                fontFamily: '"Inter", sans-serif !important'
              }}
            >
              {t('placeholder3')}{' '}
              <span
                style={{
                  color: '#4615ff',
                  fontWeight: 500,
                  fontFamily: '"Inter", sans-serif !important'
                }}
              >
                {t('browse')}
              </span>
            </Typography>
            {watch('file')?.length > 0 && (
              <Box sx={{mt: 2}}>
                <img
                  src={URL.createObjectURL(watch('file')[0])}
                  alt="Preview"
                  style={{
                    maxWidth: '100px',
                    maxHeight: '100px',
                    borderRadius: '8px',
                    objectFit: 'contain'
                  }}
                />
              </Box>
            )}

            {errors.file && (
              <Typography sx={{fontSize: '12px', color: 'red', mt: 1}}>
                {errors.file.message}
              </Typography>
            )}
          </Box>
        </Box>

        {/* Drag and drop file code  */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          disableRipple
          sx={{
            fontSize: {xs: '14px', md: '15px', lg: '16px'},
            fontFamily: '"Inter", sans-serif !important',
            fontWeight: '500',
            textTransform: 'none',
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
          {t('btn')}
        </Button>
      </Box>
    </Box>
  );
}
