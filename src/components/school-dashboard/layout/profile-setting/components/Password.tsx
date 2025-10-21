import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import {useTranslations} from 'next-intl';
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key
} from 'react';
import GradientDivider from '../GradientDivider';
import CustomButton from '@/components/school-dashboard/CustomButton';
import CustomTextField from '@/components/school-dashboard/InputField';

export default function Password() {
  const t = useTranslations('Dashboard.Settings.RightSide.Password');
  const formFields = t.raw('formFields');
  return (
    <Box
      sx={{
        width: '100%',
        // height: '100%',
        // mt: '32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: '32px'
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column', lg: 'row'},
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{width: '100%', p: '4px'}}>
          <Typography
            sx={{
              ...localFont.inter18,
              fontWeight: 500,
              fontFamily: '"Inter", sans-serif !important'
            }}
          >
            {t('heading1')}
          </Typography>
          <Typography
            sx={{
              ...localFont.inter16,
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: 300
            }}
          >
            {t('description1')}
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            gap: '10px',
            p: '4px',
            alignItems: 'center',
            justifyContent: 'end'
          }}
        >
          <CustomButton
            label={t('btn1')}
            bgColor="rgba(248, 250, 252, 0)"
            hoverTextcolor="#fff"
            sx={{border: '1px solid #a1a1aaff', color: '#000'}}
          />
          <CustomButton label={t('btn2')} sx={{}} />
        </Box>
      </Box>
      <GradientDivider />

      <Box sx={{width: '100%'}}>
        <Typography
          sx={{
            ...localFont.inter16,
            fontWeight: 500,
            fontFamily: '"Inter", sans-serif !important',
            mb: '32px',
            p: '4px'
          }}
        >
          {t('heading2')}
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: {xs: 'column'},
            gap: '20px',
            alignItems: 'start',
            justifyContent: 'space-between'
          }}
        >
          {formFields.map(
            (
              items:
                | string
                | number
                | bigint
                | boolean
                | ReactElement<unknown, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | Promise<
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactPortal
                    | ReactElement<unknown, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | null
                    | undefined
                  >
                | null
                | undefined,
              i: Key | null | undefined
            ) => {
              return (
                <Box
                  key={i}
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: {xs: 'column', lg: 'row'},
                    gap: {xs: '8px'},
                    alignItems: 'start',
                    justifyContent: 'space-between'
                  }}
                >
                  <Typography
                    sx={{
                      ...localFont.inter14,
                      width: '100%',
                      maxWidth: '400px',
                      fontFamily: '"Inter", sans-serif !important',
                      fontWeight: 400,
                      textAlign: 'left'

                      // mt: {xs: '8px', lg: '0px'}
                    }}
                  >
                    {items}
                  </Typography>
                  <CustomTextField
                    // labal={items}
                    sx={{textAlign: 'end', maxWidth: {lg: '403px'}}}
                  />
                </Box>
              );
            }
          )}
        </Box>
      </Box>
    </Box>
  );
}
