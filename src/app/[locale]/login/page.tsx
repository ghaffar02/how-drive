'use client';
import {Box, Button, TextField, Typography} from '@mui/material';
import Logo from '@/assets/pngs/logo.png';
import Image from 'next/image';
import {useForm, Controller} from 'react-hook-form';
import Link from 'next/link';

interface FormValues {
  email: string;
  password: string;
}

export default function LoginPage() {
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

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: data.email,
          password: data.password
        })
      });

      if (res.ok) {
        const data1 = await res.json();
        console.log('This is the data after api: ', data1);
      } else {
        console.log('We got an error:', res.status, res.statusText);
      }
    } catch (err) {
      console.error('Error during login:', err);
    }

    reset();
  };

  return (
    <Box sx={{width: '100%', display: 'flex'}}>
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
            Willkommen zurück!
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
            rules={{required: 'E-Mail ist erforderlich'}}
            render={({field}) => (
              <TextField
                {...field}
                label="E-Mail"
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
              required: 'Passwort ist erforderlich',
              minLength: {
                value: 8,
                message: 'Passwort muss mindestens 8 Zeichen lang sein'
              },
              pattern: {
                value: /^(?=.*\d).{8,}$/,
                message: 'Passwort muss mindestens eine Zahl enthalten'
              }
            }}
            render={({field}) => (
              <TextField
                {...field}
                label="Passwort"
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

          <Typography
            sx={{
              color: '#1270ff',
              fontSize: '14px',
              textAlign: 'right',
              cursor: 'pointer',
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: 400
            }}
          >
            Passwort vergessen?
          </Typography>

          <Button
            type="submit"
            variant="contained"
            sx={{
              width: '100%',
              background: '#4611f5',
              textTransform: 'capitalize',
              padding: '8px 16px',
              fontSize: '16px',
              borderRadius: '12px',
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: '600'
            }}
          >
            Anmelden
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
          Noch keinen Account?{' '}
          <Link
            href="#"
            style={{
              cursor: 'pointer',
              color: '#1270ff',
              fontSize: '14px',
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: '600',
              textDecoration: 'none'
            }}
          >
            Registrieren
          </Link>
        </Typography>
      </Box>

      {/* Right Side */}
      <Box
        sx={{
          display: {xs: 'none', sm: 'block'},
          width: '50%',
          background: '#4611f5',
          margin: '20px 0px',
          borderRadius: '40px 0px 0px 40px'
        }}
      ></Box>
    </Box>
  );
}
