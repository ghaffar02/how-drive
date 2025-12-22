import {Box, Typography} from '@mui/material';
import StudentPlanCard from './StudentPlanCard';
import SchoolPlanCards from './SchoolPlanCards';
import {useTranslations} from 'next-intl';

type Pricing = {
  title?: boolean;
  mode?: 'student' | 'school';
};
export default function Pricing({title = true, mode = 'student'}: Pricing) {
  const t = useTranslations('Pricing');

  return (
    <>
      <Box
        sx={{
          bgcolor: '#FAFAFA',
          boxSizing: 'border-box',
          p: {xs: '56px 16px', md: '64px 24px', lg: '80px 48px'}
        }}
      >
        <Box
          sx={{
            maxWidth: '1440px',
            width: '100%',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: {xs: '24px'}
          }}
        >
          {title && (
            <Typography
              sx={{
                fontSize: {xs: '28px', md: '32px', lg: '36px'},
                lineHeight: {xs: '35px', md: '100%'},
                fontFamily: 'Satoshi500 !important',
                padding: '16px',
                textAlign: 'center',
                color: '#000'
              }}
            >
              {/* {mode === 'student' ? t('title') : t('titleSchool')} */}
              {mode === 'student' ? t('title') : t('titleSchool')}
            </Typography>
          )}

          {mode === 'student' ? (
            <Box
              sx={{
                padding: '8px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <StudentPlanCard
                cardSx={{
                  width: '100%',
                  maxWidth: '680px',
                  height: {md: '666px'}
                }}
              />
            </Box>
          ) : (
            <SchoolPlanCards />
          )}
        </Box>
      </Box>
    </>
  );
}
