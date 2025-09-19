'use client';
import {Box, Button, TextField, Typography} from '@mui/material';
import Logo from '@/assets/pngs/logo.png';
import Image from 'next/image';
import {useForm, Controller} from 'react-hook-form';
import Link from 'next/link';
// import loginImage from '@/assets/svgs/registerImage.svg';
import loginImage from '@/assets/svgs/loginImage.svg';

import {useTranslations} from 'next-intl';
import {useLogin} from '@/hooks/useLogin';

interface FormValues {
  email: string;
  password: string;
}

export default function LoginPage() {
  const t = useTranslations('loginPage');
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const {mutate, isPending, isError, error, data} = useLogin();

  const onSubmit = async (data: FormValues) => {
    const email = data.email;
    const password = data.password;
    mutate({email, password});
    reset();
  };

  return (
    <Box sx={{width: '100%', display: 'flex', height: '100vh'}}>
      {/* Left Side */}
      <Box
        sx={{
          maxWidth: {xs: '100%', sm: '50%'},
          width: '100%',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: {xs: '30px', sm: '40px'},
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

        {/* Input Fields Box */}
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            maxWidth: '360px',
            width: '100%',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '25px'
          }}
        >
          {/* Email */}
          <Controller
            name="email"
            control={control}
            rules={{required: `${t('emailError')}`}}
            render={({field}) => (
              <TextField
                {...field}
                label={t('email')}
                type="text"
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    background: '#F8FAFC',
                    borderRadius: '10px',
                    '& .MuiOutlinedInput-input': {
                      padding: '14px 12px',
                      fontSize: '14px',
                      fontFamily: '"Inter", sans-serif !important'
                    }
                  },
                  '& .MuiInputLabel-root': {
                    fontSize: '14px',
                    fontFamily: '"Inter", sans-serif !important'
                  }
                }}
              />
            )}
          />

          {/* Password */}
          <Controller
            name="password"
            control={control}
            rules={{
              required: `${t('passwordError')}`,
              minLength: {
                value: 8,
                message: t('passMin')
              },
              pattern: {
                value: /^(?=.*\d).{8,}$/,
                message: t('passChar')
              }
            }}
            render={({field}) => (
              <TextField
                {...field}
                label={t('password')}
                type="password"
                error={!!errors.password}
                helperText={errors.password?.message}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    background: '#F8FAFC',
                    borderRadius: '10px',
                    '& .MuiOutlinedInput-input': {
                      padding: '14px 12px',
                      fontSize: '14px',
                      fontFamily: '"Inter", sans-serif !important'
                    }
                  },
                  '& .MuiInputLabel-root': {
                    fontSize: '14px',
                    fontFamily: '"Inter", sans-serif !important'
                  }
                }}
              />
            )}
          />

          <Link href={'/forgot-password'}>
            <Typography
              sx={{
                color: '#1270ff',
                fontSize: '14px',
                textAlign: 'right',
                cursor: 'pointer',
                fontFamily: '"Inter", sans-serif !important',
                fontWeight: 500
              }}
            >
              {t('forgetPassword')}
            </Typography>
          </Link>
          <Button
            type="submit"
            variant="contained"
            disableRipple
            sx={{
              width: '100%',
              background: '#4611f5',
              textTransform: 'capitalize',
              padding: '8px 16px',
              fontSize: '16px',
              borderRadius: '12px',
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: '500',
              '&:hover': {
                background: '#300ca8'
              },
              '&:active': {
                background: '#1A065C'
              }
            }}
          >
            {t('button')}
          </Button>
        </Box>

        <Typography
          sx={{
            fontSize: '14px',
            color: '#808080',
            fontFamily: '"Inter", sans-serif !important',
            lineHeight: '1.2em',
            textAlign: 'center'
          }}
        >
          {t('alreadyUser')}{' '}
          <Link
            href="/register"
            style={{
              cursor: 'pointer',
              color: '#1270ff',
              fontSize: '14px',
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: '500',
              textDecoration: 'none'
            }}
          >
            {t('register')}
          </Link>
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
          src={loginImage}
          alt="loginImage"
        />
      </Box>
    </Box>
  );
}
