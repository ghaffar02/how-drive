'use client';
import localFont from '@/utils/themes';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useTranslations} from 'next-intl';

export default function ProcessForm() {
  const t = useTranslations('Dashboard.Process.processform');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: {xs: '36px', md: '48px'},
        padding: '24px',
        background: 'rgba(248,250,252,0.3)',
        backdropFilter: 'blur(15px)',
        boxShadow: `0px 0px 0px 1px rgb(255, 255, 255, rgb(255, 255, 255)), 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)`,
        height: {xs: '100%', md: '100%'},
        // marginBottom: '150px',
        width: '100%',
        border: '2px solid #fff',
        borderRadius: {xs: '24px', md: '0px 24px 24px 0px'}
      }}
    >
      <Box>
        <Typography
          sx={{
            ...localFont.inter18,
            fontWeight: '500',
            fontFamily: '"Inter", sans-serif !important',
            lineHeight: '1.4em',
            textAlign: 'center',
            mb: '10px'
          }}
        >
          {t('title')}
        </Typography>
        <Typography
          sx={{
            ...localFont.inter16,
            fontWeight: '300',
            fontFamily: '"Inter", sans-serif !important',
            lineHeight: '1.5em',
            textAlign: 'center'
          }}
        >
          {t('des')}
        </Typography>
      </Box>
      <DrivingLicenseForm />
    </Box>
  );
}

// Form Below

type FormValues = {
  licenseClass: string;
  residence: string;
  phone: string;
  school?: string;
  foreign?: boolean;
};

export function DrivingLicenseForm() {
  const t = useTranslations('Dashboard.Process.processform');
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: {errors}
  } = useForm<FormValues>({
    defaultValues: {
      licenseClass: '',
      residence: '',
      phone: '',
      school: '',
      foreign: false
    }
  });

  const [isReady, setIsReady] = useState(false);

  // Watch required fields
  const licenseClass = watch('licenseClass');
  const residence = watch('residence');
  const phone = watch('phone');

  useEffect(() => {
    if (licenseClass && residence && phone && !errors.phone) {
      setIsReady(true);
    } else {
      setIsReady(false);
    }
  }, [licenseClass, residence, phone, errors.phone]);

  const onSubmit = (data: FormValues) => {
    console.log('Form Data:', data);
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        maxWidth: 400,
        width: '100%',
        margin: '0 auto',
        p: '20px'
      }}
    >
      {/* Driving license class */}
      <Controller
        name="licenseClass"
        control={control}
        rules={{required: `${t('err1')}`}}
        render={({field}) => (
          <FormControl fullWidth error={!!errors.licenseClass}>
            <Select
              displayEmpty
              {...field}
              // error={!!errors.licenseClass}
              // helperText={errors.licenseClass?.message}
              sx={{
                background: '#ffffff',
                borderRadius: '10px',
                height: '40px',
                fontFamily: '"Inter", sans-serif !important',
                fontSize: '14px',
                boxShadow:
                  '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)',
                '& .MuiSelect-select': {
                  padding: '12px',
                  color: field.value === '' ? '#aaa' : 'inherit',
                  fontFamily: '"Inter", sans-serif !important'
                }
              }}
            >
              <MenuItem value="" disabled>
                {t('opt1')}
              </MenuItem>
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="BF17">BF17</MenuItem>
              <MenuItem value="BE">BE</MenuItem>
              <MenuItem value="B96">B96</MenuItem>
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="A2">A2</MenuItem>
              <MenuItem value="A1">A1</MenuItem>
              <MenuItem value="AM">AM</MenuItem>
            </Select>
            {errors.licenseClass && (
              <FormHelperText>{errors.licenseClass.message}</FormHelperText>
            )}
          </FormControl>
        )}
      />

      {/* Place of residence (1) */}
      <Controller
        name="residence"
        control={control}
        rules={{required: `${t('err2')}`}}
        render={({field}) => (
          <FormControl fullWidth error={!!errors.residence}>
            <Select
              {...field}
              displayEmpty
              sx={{
                background: '#ffffff',
                borderRadius: '10px',
                height: '40px',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important',
                boxShadow:
                  '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)',
                '& .MuiSelect-select': {
                  padding: '12px',
                  color: field.value === '' ? '#aaa' : 'inherit',
                  fontFamily: '"Inter", sans-serif !important'
                }
              }}
            >
              <MenuItem value="" disabled>
                {t('opt2')}
              </MenuItem>
              <MenuItem value="Berlin">Berlin</MenuItem>
              <MenuItem value="Hamburg">Hamburg</MenuItem>
              <MenuItem value="München">München</MenuItem>
              <MenuItem value="Düsseldorf">Düsseldorf</MenuItem>
              <MenuItem value="Köln">Köln</MenuItem>
              <MenuItem value="Frankfurt">Frankfurt</MenuItem>
              <MenuItem value="Stuttgart">Stuttgart</MenuItem>
            </Select>
            {errors.residence && (
              <FormHelperText>{errors.residence.message}</FormHelperText>
            )}
          </FormControl>
        )}
      />

      {/* Phone number */}
      <Controller
        name="phone"
        control={control}
        rules={{
          // required: `${t('err3')}`,
          pattern: {
            value: /^[0-9]{10,12}$/, // adjust according to your needs
            message: 'Enter a valid phone number'
          }
        }}
        render={({field}) => (
          <TextField
            // label="Phone number"
            placeholder={t('opt3')}
            type="tel"
            {...field}
            fullWidth
            error={!!errors.phone}
            helperText={errors.phone?.message}
            sx={{
              // height: '40px',
              borderRadius: '10px',
              '& .MuiInputBase-root': {
                background: '#ffffff',
                height: '40px',
                fontSize: '14px',
                padding: '12px',
                borderRadius: '10px',
                fontFamily: '"Inter", sans-serif !important',
                boxShadow:
                  '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: '10px'
              },
              '& .MuiInputBase-input': {
                padding: 0,
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important'
                // background: '#fff'
              },
              '& .MuiInputLabel-root': {
                top: '-6px',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important'
              },
              '& .MuiInputLabel-shrink': {
                top: '0px'
              }
            }}
          />
        )}
      />

      {/* Driving school */}
      <Controller
        name="school"
        control={control}
        // rules={{required: 'Driving school is required'}}
        render={({field}) => (
          <TextField
            // label="Driving school"
            placeholder={t('opt4')}
            {...field}
            fullWidth
            // error={!!errors.school}
            // helperText={errors.school?.message}
            sx={{
              height: '40px',
              borderRadius: '10px',
              '& .MuiInputBase-root': {
                background: '#ffffff',
                height: '100%',
                fontSize: '14px',
                padding: '12px',
                borderRadius: '10px',
                fontFamily: '"Inter", sans-serif !important',
                boxShadow:
                  '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: '10px'
              },
              '& .MuiInputBase-input': {
                padding: 0,
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important'
              },
              '& .MuiInputLabel-root': {
                top: '-6px',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif !important'
              },
              '& .MuiInputLabel-shrink': {
                top: '0px'
              }
            }}
          />
        )}
      />

      {/* Checkbox */}
      <Controller
        name="foreign"
        control={control}
        render={({field}) => (
          <FormControlLabel
            control={<Checkbox {...field} checked={field.value} />}
            label={t('check')}
            sx={{
              margin: '0px',
              alignItems: 'flex-start',
              gap: '8px',
              '& .MuiCheckbox-root': {
                padding: '0px',
                height: '24px',
                width: '24px'
              },
              '& .MuiSvgIcon-root': {
                fontSize: '24px' // this controls the tick box icon size
              },
              '& .MuiFormControlLabel-label': {
                ...localFont.inter14,
                fontFamily: '"Inter", sans-serif !important'
              }
            }}
          />
        )}
      />

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        disableRipple
        sx={{
          backgroundColor: isReady ? '#4615ff' : '#808080',
          borderRadius: '10px',
          color: 'white',
          textTransform: 'none',
          height: '40px',
          p: '8px 16px',
          fontWeight: 600,
          fontSize: {xs: '14px', md: '15px', lg: '16px'},
          fontFamily: '"Inter", sans-serif !important',
          '&:hover': {
            backgroundColor: isReady ? '#3a12d1' : '#808080'
          }
        }}
      >
        {t('button')}
      </Button>
    </Box>
  );
}
