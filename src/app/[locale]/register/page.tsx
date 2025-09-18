'use client';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  Typography
} from '@mui/material';
import Logo from '@/assets/pngs/logo.png';
import Image from 'next/image';
import {AnimatePresence, motion} from 'framer-motion';
import registerImage from '@/assets/svgs/registerImage.svg';
import {useTranslations} from 'next-intl';
import {useRegister} from '@/hooks/useRegister';

export default function RegisterPage() {
  const [tabValue, setTabValue] = useState(0);
  const [agreed, setAgreed] = useState(false);
  const t = useTranslations('registerPage');

  type FormValues = {
    vorname?: string;
    nachname?: string;
    schule?: string;
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<FormValues>();

  const {mutate, isPending, isError, error, data} = useRegister();

  const onSubmit = async (data: FormValues) => {
    const email = data.email;
    const password = data.password;
    const name =
      tabValue === 0 ? `${data.vorname} ${data.nachname}` : `${data.schule}`;
    const role = tabValue === 0 ? 'User' : 'SuperAdmin';
    const address = 'any';
    const phone = 'any';
    mutate({email, password, name, role, address, phoneNumber: phone});
    reset();
  };

  return (
    <Box sx={{width: '100%', display: 'flex'}}>
      {/* Left Side */}
      <Box
        sx={{
          maxWidth: {xs: '100%', sm: '50%'},
          width: '100%',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: {xs: '30px', sm: '36px'},
          height: '100vh'
        }}
      >
        <Box>
          <Box sx={{width: '75px', height: '75px', margin: 'auto'}}>
            <Image
              src={Logo}
              alt="logo"
              style={{height: '100%', width: '100%'}}
            />
          </Box>
          <Typography
            sx={{
              color: '#1a202c',
              fontSize: {xs: '20px', sm: '22px', md: '24px'},
              fontFamily: 'Satoshi700 !important',
              marginTop: '30px !important',
              textAlign: 'center',
              letterSpacing: '0.03em',
              lineHeight: '1.3em'
            }}
          >
            {t('heading')}
          </Typography>
        </Box>
        {/* Tab + Input Fields Box */}
        <Box
          sx={{
            maxWidth: '380px',
            width: '100%',
            padding: '8px 0px',
            fontFamily: '"Inter", sans-serif !important',
            height: '510px'
          }}
        >
          {/* Tab Section */}
          <Box
            sx={{
              display: 'flex',
              width: 'fit-content',
              margin: 'auto',
              background: '#F8FAFC',
              borderRadius: '10px',
              padding: '6px',
              gap: '10px',
              boxShadow:
                '0px 0px 0px 1px rgba(26, 32, 44, 0.1), 0px 1px 0px 0px rgba(26, 32, 44, 0.2), 0px 2px 4px 0px rgba(26, 32, 44, 0.5)'
            }}
          >
            <Button
              onClick={() => setTabValue(0)}
              sx={{
                // flex: 1,
                background: tabValue === 0 ? '#000' : 'transparent',
                color: tabValue === 0 ? '#fff' : '#000',
                textTransform: 'none',
                borderRadius: '8px',
                padding: '8px 30px',
                fontSize: '16px',
                fontWeight: 500,
                fontFamily: '"Inter", sans-serif !important',
                letterSpacing: '0.01em',
                '&:hover': {
                  background: tabValue === 0 ? '#000' : '#fff',
                  boxShadow:
                    '0px 0px 0px 1px rgba(26, 32, 44, 0.1), 0px 1px 0px 0px rgba(26, 32, 44, 0.2), 0px 2px 4px 0px rgba(26, 32, 44, 0.5)'
                }
              }}
            >
              {t('tabValue1')}
            </Button>
            <Button
              onClick={() => setTabValue(1)}
              sx={{
                // flex: 1,
                background: tabValue === 1 ? '#000' : 'transparent',
                color: tabValue === 1 ? '#fff' : '#000',
                textTransform: 'none',
                borderRadius: '8px',
                padding: '8px 30px',
                fontSize: '16px',
                fontWeight: 500,
                fontFamily: '"Inter", sans-serif !important',
                letterSpacing: '0.01em',
                '&:hover': {
                  background: tabValue === 1 ? '#000' : '#fff',
                  boxShadow:
                    '0px 0px 0px 1px rgba(26, 32, 44, 0.1), 0px 1px 0px 0px rgba(26, 32, 44, 0.2), 0px 2px 4px 0px rgba(26, 32, 44, 0.5)'
                }
              }}
            >
              {t('tabValue2')}
            </Button>
          </Box>

          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              maxWidth: '360px',
              width: '100%',
              padding: '20px 0px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              margin: '16px auto 0px'
            }}
          >
            {/* Form Fields */}
            <TextField
              key={tabValue}
              label={tabValue === 0 ? `${t('firstName')}` : `${t('school')}`}
              variant="outlined"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  background: '#F8FAFC',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0',
                  '& .MuiOutlinedInput-input': {
                    padding: '14px 12px',
                    fontSize: '14px',
                    fontFamily: '"Inter", sans-serif !important',
                    color: '#000',
                    '&::placeholder': {
                      color: '#94A3B8',
                      opacity: 1
                    }
                  },
                  '& fieldset': {
                    borderColor: '#E2E8F0'
                  },
                  '&:hover fieldset': {
                    borderColor: '#1976d2'
                  }
                }
              }}
              {...register(tabValue === 0 ? 'vorname' : 'schule', {
                required: `${t('error1')}`
              })}
              error={!!errors.vorname || !!errors.schule}
              helperText={
                (errors.vorname?.message || errors.schule?.message) as string
              }
            />
            <AnimatePresence initial={false} mode="wait">
              {tabValue === 0 && (
                <motion.div
                  initial={{height: 0, opacity: 0}}
                  animate={{height: 'auto', opacity: 1}}
                  exit={{height: 0, opacity: 0}}
                  transition={{duration: 0.1, ease: 'easeIn'}}
                  layout
                >
                  <TextField
                    label={t('lastName')}
                    variant="outlined"
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        background: '#F8FAFC',
                        borderRadius: '8px',
                        border: '1px solid #E2E8F0',
                        '& .MuiOutlinedInput-input': {
                          padding: '14px 12px',
                          fontSize: '14px',
                          fontFamily: '"Inter", sans-serif !important',
                          color: '#000',
                          '&::placeholder': {
                            color: '#94A3B8',
                            opacity: 1
                          }
                        },
                        '& fieldset': {
                          borderColor: '#E2E8F0'
                        },
                        '&:hover fieldset': {
                          borderColor: '#1976d2'
                        }
                      }
                    }}
                    {...register('nachname', {
                      required: `${t('error2')}`
                    })}
                    error={!!errors.nachname}
                    helperText={errors.nachname?.message as string}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <TextField
              label={t('email')}
              variant="outlined"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  background: '#F8FAFC',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0',
                  '& .MuiOutlinedInput-input': {
                    padding: '14px 12px',
                    fontSize: '14px',
                    fontFamily: '"Inter", sans-serif !important',
                    color: '#000',
                    '&::placeholder': {
                      color: '#94A3B8',
                      opacity: 1
                    }
                  },
                  '& fieldset': {
                    borderColor: '#E2E8F0'
                  },
                  '&:hover fieldset': {
                    borderColor: '#1976d2'
                  }
                }
              }}
              {...register('email', {
                required: `${t('error3')}`,
                pattern: {value: /^\S+@\S+$/i, message: `${t('invalidEmail')}`}
              })}
              error={!!errors.email}
              helperText={errors.email?.message as string}
            />

            <TextField
              label={t('password')}
              type="password"
              variant="outlined"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  background: '#F8FAFC',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0',
                  '& .MuiOutlinedInput-input': {
                    padding: '14px 12px',
                    fontSize: '14px',
                    fontFamily: '"Inter", sans-serif !important',
                    color: '#000',
                    '&::placeholder': {
                      color: '#94A3B8',
                      opacity: 1
                    }
                  },
                  '& fieldset': {
                    borderColor: '#E2E8F0'
                  },
                  '&:hover fieldset': {
                    borderColor: '#1976d2'
                  }
                }
              }}
              {...register('password', {
                required: `${t('error4')}`,
                minLength: {
                  value: 8,
                  message: t('passMin')
                },
                pattern: {
                  value: /^(?=.*\d).{8,}$/,
                  message: t('passChar')
                }
              })}
              error={!!errors.password}
              helperText={errors.password?.message as string}
            />

            {/* Checkbox with Agreement */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  //   size="small"
                  sx={{
                    color: '#CBD5E1',
                    '&.Mui-checked': {
                      color: '#1270ff'
                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: '16px'
                    }
                  }}
                />
              }
              label={
                <Typography
                  sx={{
                    fontSize: '14px',
                    color: '#474747',
                    fontFamily: '"Inter", sans-serif !important'
                  }}
                >
                  {t('policy')}{' '}
                  <Link
                    href="#"
                    sx={{
                      color: '#1270ff',
                      textDecoration: 'none'
                    }}
                  >
                    {t('policy2')}
                  </Link>{' '}
                  {t('policy3')}
                </Typography>
              }
              sx={{
                alignItems: 'flex-center',
                marginLeft: 0,
                '& .MuiFormControlLabel-label': {
                  paddingLeft: '8px'
                }
              }}
            />

            {/* Register Button */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disableRipple
              disabled={!agreed}
              sx={{
                background: agreed ? '#4611f5' : '#808080',
                color: agreed ? '#fff' : '#ccc',
                textTransform: 'none',
                padding: '8px 16px',
                fontSize: '16px',
                borderRadius: '12px',
                fontFamily: '"Inter", sans-serif !important',
                fontWeight: 500,
                boxShadow: 'none',
                '&:hover': {
                  background: agreed ? '#300ca8' : '#E5E7EB',
                  boxShadow: 'none'
                },
                '&:active': {
                  background: '#1A065C'
                },
                '&:disabled': {
                  background: '#808080',
                  color: '#ccc'
                }
              }}
            >
              {t('button')}
            </Button>
          </Box>
        </Box>
        {/* Tab + Input Fields Box Ending Here */}
        <Typography
          sx={{
            fontSize: '14px',
            color: '#808080',
            fontFamily: '"Inter", sans-serif !important',
            lineHeight: '1.2em',
            textAlign: 'center'
          }}
        >
          {t('alreadyExist')}{' '}
          <Link
            href="/login"
            style={{
              cursor: 'pointer',
              color: '#1270ff',
              fontSize: '14px',
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: '500',
              textDecoration: 'none'
            }}
          >
            {t('signin')}
          </Link>
        </Typography>
        <Typography
          sx={{
            maxWidth: '410px',
            width: '100%',
            margin: '0px auto',
            textAlign: 'center',
            fontSize: '14px',
            fontFamily: '"Inter", sans-serif !important',
            color: '#808080',
            lineHeight: '1.2em'
          }}
        >
          {t('lastpoint')}
        </Typography>
      </Box>
      {/* Right Side */}
      <Box
        sx={{
          display: {xs: 'none', sm: 'block'},
          width: '50%',
          margin: '20px 0px',
          borderRadius: '40px 0px 0px 40px',
          overflow: 'hidden'
        }}
      >
        <Image
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover'
          }}
          src={registerImage}
          alt="registerImage"
        />
      </Box>
    </Box>
  );
}
