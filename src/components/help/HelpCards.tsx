import {Box, Grid, TextField, Typography} from '@mui/material';
import Image, {StaticImageData} from 'next/image';
import React from 'react';
import localFont from '@/utils/themes';
import {useRouter} from '@/i18n/navigation';
import searchIcon from '@/assets/svgs/dashboard-student/searchIcon.svg';
import {useTranslations} from 'next-intl';

type HelpItem = {
  image: StaticImageData;
  title: string;
  desc: string;
  href?: string;
};

type HelpCardProps = {
  data: HelpItem[];
};

export default function HelpCard({data}: HelpCardProps) {
  const t = useTranslations('SchoolDashboard.leftSideTab');
  const router = useRouter();
  return (
    <Box
      sx={{
        maxWidth: '1400px',
        width: '100%',
        margin: 'auto',
        padding: {xs: '56px 16px', sm: '64px 24px', lg: '80px 48px'}
      }}
    >
      {/* Search */}
      {/* <Box sx={{maxWidth: '800px', width: '100%', m: 'auto', mb: '80px'}}>
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
          <Box sx={{height: '24px', width: '24px'}}>
            {' '}
            <Image
              src={searchIcon}
              alt="searchIcon"
              style={{height: '100%', width: '100%'}}
            />{' '}
          </Box>

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
      </Box> */}
      <Grid
        container
        spacing={3}
        sx={{padding: '8px', justifyContent: 'center'}}
      >
        {data?.map((item, i) => (
          <Grid
            key={i}
            size={{xs: 12, sm: 6, lg: 4}}
            sx={{maxWidth: {lg: '333px'}, width: '100%'}}
          >
            <Box
              onClick={() => {
                if (item.href) {
                  router.push(item.href as Parameters<typeof router.push>[0]);
                }
              }}
              sx={{
                cursor: 'pointer',
                maxWidth: {lg: '333px'},
                width: '100%',
                background: '#f2f2f2',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '48px',
                height: {xs: '327px', sm: '338px', lg: '329px'},
                borderRadius: '15px'
              }}
            >
              <Box>
                <Image src={item.image} alt="image" height={80} width={80} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    ...localFont.h3,
                    fontWeight: 500,
                    fontFamily: 'Satoshi500 !important',
                    textAlign: 'center',
                    mb: '16px'
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: '16px', sm: '17px', lg: '18px'},
                    fontFamily:
                      '"Inter", "Inter Placeholder", sans-serif !important',
                    color: '#2d3748',
                    letterSpacing: '0.02em',
                    textAlign: 'center'
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
