'use client';
import React, {useState} from 'react';
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

export default function RegisterPage() {
  const [tabValue, setTabValue] = useState(0);
  const [agreed, setAgreed] = useState(false);

  //   const handleTabChange = (event, newValue) => {
  //     setTabValue(newValue);
  //   };
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
            Konto erstellen als:
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
              maxWidth: '330px',
              width: '100%',
              margin: 'auto',
              background: '#F8FAFC',
              borderRadius: '10px',
              padding: '6px',
              display: 'flex',
              justifyContent: 'center',
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
                padding: '8px 32px',
                fontSize: '16px',
                fontWeight: 500,
                fontFamily: '"Inter", sans-serif !important',
                '&:hover': {
                  background: tabValue === 0 ? '#000' : '#fff'
                }
              }}
            >
              Fahrschüler
            </Button>
            <Button
              onClick={() => setTabValue(1)}
              sx={{
                // flex: 1,
                background: tabValue === 1 ? '#000' : 'transparent',
                color: tabValue === 1 ? '#fff' : '#000',
                textTransform: 'none',
                borderRadius: '8px',
                padding: '8px 32px',
                fontSize: '16px',
                fontWeight: 500,
                fontFamily: '"Inter", sans-serif !important',
                '&:hover': {
                  background: tabValue === 1 ? '#000' : '#fff'
                }
              }}
            >
              Fahrschule
            </Button>
          </Box>

          <Box
            sx={{
              maxWidth: '360px',
              width: '100%',
              padding: '20px 0px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              margin: '20px auto 0px'
            }}
          >
            {/* Form Fields */}
            <TextField
              label={tabValue === 0 ? 'Vorname' : 'Name der Fahrschule'}
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
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                  }
                }
              }}
            />
            <AnimatePresence mode="wait">
              {tabValue === 0 && (
                <motion.div
                  initial={{height: 0, opacity: 0}}
                  animate={{height: 'auto', opacity: 1}}
                  exit={{height: 0, opacity: 0}}
                  transition={{duration: 0.1, ease: 'easeIn'}}
                  layout
                >
                  <TextField
                    label="Nachname"
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
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: 'none'
                        }
                      }
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <TextField
              label="E-Mail"
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
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                  }
                }
              }}
            />

            <TextField
              label="Passwort"
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
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                  }
                }
              }}
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
                  Ich stimme der{' '}
                  <Link
                    href="#"
                    sx={{
                      color: '#1270ff',
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    Datenschutzerklärung
                  </Link>{' '}
                  zu.
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
              variant="contained"
              fullWidth
              disabled={!agreed}
              sx={{
                background: agreed ? '#4611f5' : '#808080',
                color: agreed ? '#fff' : '#ccc',
                textTransform: 'none',
                padding: '8px 16px',
                fontSize: '16px',
                borderRadius: '8px',
                fontFamily: '"Inter", sans-serif !important',
                fontWeight: 500,
                boxShadow: 'none',
                '&:hover': {
                  background: agreed ? '#4811f6' : '#E5E7EB',
                  boxShadow: 'none'
                },
                '&:disabled': {
                  background: '#808080',
                  color: '#ccc'
                }
              }}
            >
              Registrieren
            </Button>
          </Box>
        </Box>
        {/* Tab + Input Fields Box Ending Here */}
        <Typography
          sx={{
            fontSize: '14px',
            color: '#808080',
            fontFamily: '"Inter", sans-serif !important !important',
            lineHeight: '1.2em',
            textAlign: 'center'
          }}
        >
          Bereits einen Account haben?{' '}
          <span
            style={{
              cursor: 'pointer',
              color: '#1270ff',
              fontSize: '14px',
              fontFamily: '"Inter", sans-serif !important !important',
              fontWeight: '500'
            }}
          >
            Anmelden
          </span>
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
