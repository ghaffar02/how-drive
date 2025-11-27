import {Box, Divider, TextField, Typography} from '@mui/material';
import Image from 'next/image';
import searchIcon from '@/assets/svgs/dashboard-student/searchIcon.svg';
import {useTranslations} from 'next-intl';
import localFont from '@/utils/themes';

export default function SearchInputWithSuggestions() {
  const t = useTranslations('SchoolDashboard.leftSideTab');
  return (
    <>
      <Box
        sx={{
          padding: {
            xs: '120px 16px',
            sm: '120px 24px',
            lg: '120px 48px'
          },
          background: '#FAFAFA'
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '1400px',
            m: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{maxWidth: '800px', width: '100%'}}>
            {/* Search Input Box */}
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                gap: '8px',
                padding: '16px',
                borderRadius: '999px',
                height: '60px',
                alignItems: 'center',
                background: '#ffffffbf',
                border: '1px solid #2563eb',

                boxShadow:
                  'rgba(0, 0, 0, 0.21) 0px 0.48175px 2.02335px -1.5px, rgba(0, 0, 0, 0.18) 0px 1.83083px 7.68947px -3px, rgba(0, 0, 0, 0.02) 0px 8px 33.6px -4.5px'
              }}
            >
              {/* Search Icon */}
              <Box sx={{height: '24px', width: '24px'}}>
                {' '}
                <Image
                  src={searchIcon}
                  alt="searchIcon"
                  style={{height: '100%', width: '100%'}}
                />{' '}
              </Box>

              {/* Input */}
              <TextField
                placeholder={t('search')}
                sx={{
                  width: '100%',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 0,
                    '& fieldset': {border: 'none'},
                    '&:hover fieldset': {border: 'none'},
                    '&.Mui-focused fieldset': {border: 'none'}
                  },
                  '& .MuiInputBase-input::placeholder': {
                    ...localFont.inter18,
                    color: '#A1A1AA ',
                    fontFamily: '"Inter", sans-serif !important',
                    opacity: 1
                  },
                  '& .MuiInputBase-input': {
                    ...localFont.inter18,

                    height: 'auto',

                    padding: '0px'
                  }
                }}
              />
            </Box>

            {/* Search Popup List */}
            <Box
              sx={{
                marginTop: '10px',
                background: '#FFFFFF',
                borderRadius: '24px',
                boxShadow:
                  'rgba(0, 0, 0, 0.21) 0px 0.48175px 2.02335px -1.5px, rgba(0, 0, 0, 0.18) 0px 1.83083px 7.68947px -3px, rgba(0, 0, 0, 0.02) 0px 8px 33.6px -4.5px',
                padding: '16px'
              }}
            >
              {/* ITEM 1 */}
              <Box
                component="a"
                href="#"
                sx={{
                  cursor: 'pointer'
                }}
              >
                <Typography
                  sx={{
                    ...localFont.inter16,
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: 500,
                    textAlign: 'left',
                    color: '#2d3748'
                  }}
                >
                  Fahrschule Mustermann Hamburg
                </Typography>

                <Typography
                  sx={{
                    ...localFont.inter16,
                    fontWeight: 300,
                    fontFamily: '"Inter", sans-serif !important',
                    color: '#2d3748',
                    textAlign: 'left'
                  }}
                >
                  Hamburg
                </Typography>
              </Box>

              <Box sx={{my: '10px'}}>
                <Divider sx={{borderBottom: '1px solid #d4d4d8'}} />
              </Box>

              {/* ITEM 2 */}
              <Typography
                sx={{
                  ...localFont.inter16,
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: 500,
                  textAlign: 'left',
                  color: '#2d3748'
                }}
              >
                Fahrschule Mustermann Hamburg
              </Typography>

              <Typography
                sx={{
                  ...localFont.inter16,
                  fontWeight: 300,
                  fontFamily: '"Inter", sans-serif !important',
                  color: '#2d3748',
                  textAlign: 'left'
                }}
              >
                Hamburg
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
