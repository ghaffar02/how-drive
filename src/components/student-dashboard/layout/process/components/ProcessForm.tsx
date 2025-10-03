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

export default function ProcessForm() {
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
        height: {xs: 'fit-content', md: '100%'},
        // marginBottom: '150px',
        width: '100%',
        border: '1px solid #fff',
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
          Please fill in the following information!
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
          By filling out the following information, a new guide for obtaining a
          driving license will be created. Connecting a driving school is also
          possible later in the &quot;Settings&quot;.
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
        rules={{required: 'Driving license class is required'}}
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
                fontSize: '14px',
                '& .MuiSelect-select': {
                  padding: '12px',
                  color: field.value === '' ? '#aaa' : 'inherit' // greyed placeholder
                }
              }}
            >
              <MenuItem value="" disabled>
                Driving license class
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
        rules={{required: 'Place of residence is required'}}
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
                '& .MuiSelect-select': {
                  padding: '12px',
                  color: field.value === '' ? '#aaa' : 'inherit' // greyed placeholder
                }
              }}
            >
              <MenuItem value="" disabled>
                Place of residence
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
          required: 'Phone number is required',
          pattern: {
            value: /^[0-9]{10,12}$/, // adjust according to your needs
            message: 'Enter a valid phone number'
          }
        }}
        render={({field}) => (
          <TextField
            // label="Phone number"
            placeholder="Phone number"
            type="tel"
            {...field}
            fullWidth
            error={!!errors.phone}
            helperText={errors.phone?.message}
            sx={{
              borderRadius: '10px',
              '& .MuiInputBase-root': {
                background: '#ffffff',
                height: '100%',
                fontSize: '14px',
                padding: '12px',
                borderRadius: '10px'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: '10px'
              },
              '& .MuiInputBase-input': {
                padding: 0,
                fontSize: '14px'
                // background: '#fff'
              },
              '& .MuiInputLabel-root': {
                top: '-6px',
                fontSize: '14px'
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
            placeholder="Driving school"
            {...field}
            fullWidth
            // error={!!errors.school}
            // helperText={errors.school?.message}
            sx={{
              borderRadius: '10px',
              '& .MuiInputBase-root': {
                background: '#ffffff',
                height: '100%',
                fontSize: '14px',
                padding: '12px',
                borderRadius: '10px'
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: '10px'
              },
              '& .MuiInputBase-input': {
                padding: 0,
                fontSize: '14px'
              },
              '& .MuiInputLabel-root': {
                top: '-6px',
                fontSize: '14px'
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
            label="I want to have my foreign driving license converted."
            sx={{
              ...localFont.inter14
            }}
          />
        )}
      />

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: isReady ? '#4615ff' : 'grey.600',
          borderRadius: '10px',
          color: 'white',
          textTransform: 'none',
          py: 1.2,
          fontWeight: 600,
          '&:hover': {
            backgroundColor: isReady ? '#3a12d1' : 'grey.700'
          }
        }}
      >
        Continue
      </Button>
    </Box>
  );
}
