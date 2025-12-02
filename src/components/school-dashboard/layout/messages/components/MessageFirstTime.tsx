import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import alertIcon from '@/assets/svgs/alertIcon.svg';
import localFont from '@/utils/themes';
import {useTranslations} from 'next-intl';
export default function MessageFirstTime() {
  const t = useTranslations('SchoolDashboard.leftSideTab');
  return (
    <Box
      sx={{
        width: '100%',
        background: '#f8fafc4d',
        boxShadow: `0px 0px 0px 1px rgb(255, 255, 255, rgb(255, 255, 255)), 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)`,
        border: '2px solid #fff',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(15px)',
        borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
        height: {xs: '100%'},
        padding: {xs: '8px', md: '24px'}
      }}
    >
      {' '}
      <Box sx={{mb: '16px', textAlign: 'center'}}>
        <Box
          sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        >
          <Image src={alertIcon} alt="alert" height={24} width={24} />
        </Box>
        <Typography
          component="div"
          sx={{
            ...localFont.inter16,
            fontFamily: '"Inter", sans-serif !important',
            textAlign: 'center',
            fontWeight: 300,
            mt: '8px'
          }}
          dangerouslySetInnerHTML={{__html: t('messageFisrtTime') ?? ''}}
        />
      </Box>
    </Box>
  );
}
