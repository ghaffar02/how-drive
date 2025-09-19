'use client';
import {Box, Button, TextField, Typography} from '@mui/material';
import Logo from '@/assets/pngs/logo.png';
import Image from 'next/image';
import registerImage from '@/assets/svgs/registerImage.svg';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import {toast} from 'react-toastify';
import {useResetPassword} from '@/hooks/useResetPassword';

export default function PasswordResetPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState();
  const [authentication, setAuthentication] = useState();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const {mutate} = useResetPassword();

  useEffect(() => {
    if (typeof window !== undefined) {
      const queryParams = new URLSearchParams(window.location.search);
      const tokenData64 = queryParams.get('token');
      if (tokenData64) {
        try {
          const token = JSON.parse(atob(tokenData64));
          if (token) {
            // console.log('this is token data: ', token);
            setEmail(token.email);
            setAuthentication(token.authenticated);
          }
        } catch (error) {
          console.log('no token found', error);
        }
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authentication) {
      toast.error('Email not found!');
      return;
    }

    if (!password || !confirmPassword) {
      setError('Password and Confirm Password are required');
      return;
    }
    if (!passwordRegex.test(password)) {
      setError(
        'Password must be at least 8 characters and include uppercase, lowercase, and a number'
      );
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      mutate({email, password, confirmPassword});
      setPassword('');
      setConfirmPassword('');
      setError('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{width: '100%', height: '100vh', display: 'flex'}}>
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
            Reset Password
          </Typography>
          <Typography
            sx={{
              maxWidth: '380px',
              width: '100%',
              color: '#2d3748',
              fontSize: {xs: '14px', sm: '15px', md: '16px'},
              fontFamily: '"Inter", sans-serif !important',
              marginTop: '10px !important',
              textAlign: 'center',
              letterSpacing: '0.01em',
              lineHeight: '1.5em',
              fontWeight: '300'
            }}
          >
            Please enter a new password below to reset it.
          </Typography>
        </Box>
        {/* Input Fields Box */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: '360px',
            width: '100%',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '25px'
          }}
        >
          <TextField
            label="New password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!error}
            helperText={error}
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
          />
          <TextField
            label="Confirm new password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={!!error}
            helperText={error}
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
          />

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
            Reset Password
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
          Remember password?{' '}
          <Link
            href={'/login'}
            style={{
              cursor: 'pointer',
              color: '#1270ff',
              fontSize: '14px',
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: '500'
            }}
          >
            Sign in
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
          src={registerImage}
          alt="registerImage"
        />
      </Box>
    </Box>
  );
}
