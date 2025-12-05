import CustomButton from '@/components/student-dashboard/CustomButton';
// import CustomCard from '@/components/student-dashboard/layout/profile-setting/Dropdown';
// import CustomTextField from '@/components/student-dashboard/InputField';
import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import {useEffect, useRef, useState} from 'react';
import {useTranslations} from 'next-intl';
import GradientDivider from '@/components/student-dashboard/layout/profile-setting/GradientDivider';
import CustomTextField from '@/components/school-dashboard/InputField';
// import GradientDivider from '../GradientDivider';

export default function Account() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);
  const t = useTranslations('Dashboard.Settings.RightSide.AccountTab');
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        dropdownRef.current.contains(event.target as Node)
      ) {
        return;
      }
      if (iconRef.current && iconRef.current.contains(event.target as Node)) {
        return;
      }

      setOpenDropdown(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  // const formFields = t.raw('formFields');
  const formFields = [
    {label: 'Email', placeholder: ''},
    {label: 'Current password', placeholder: ''},
    {label: 'New password', placeholder: ''},
    {label: 'Repeat new password', placeholder: ''},
    {label: 'Basic', placeholder: '29,95'},
    {label: 'Standard', placeholder: '44,95'},
    {label: 'Premium', placeholder: '69,95'}
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        p: {xs: '8px', md: '24px'},
        overflowY: 'scroll',

        // overflow: ' hidden auto',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        // height: '100%',
        // mt: '32px',
        // padding:3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: '24px'
        // overflow: 'hidden'
        // bgcolor: '#ffffffbf'
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'row'},
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'space-between'
          // overflow: 'hidden'
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
            Account
          </Typography>
          <Typography
            sx={{
              ...localFont.inter16,
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: 300
            }}
          >
            Email, Password, and Prices
          </Typography>
        </Box>
        <Box
          sx={{
            p: '4px',

            width: '100%',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'end'
          }}
        >
          <CustomButton
            label="Cancel"
            bgColor="rgba(248, 250, 252, 0)"
            hoverTextcolor="#fff"
            sx={{border: '1px solid #a1a1aaff', color: '#000'}}
          />
          <CustomButton label="Save" sx={{}} />
        </Box>
      </Box>
      <GradientDivider />
      <GradientDivider />
      <Box sx={{width: '100%'}}>
        {/* <Typography
          sx={{
            ...localFont.inter16,
            fontWeight: 500,
            fontFamily: '"Inter", sans-serif !important',
            mb: '32px',
            p: '4px'
          }}
        >
          {t('heading2')}
        </Typography> */}
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
          {formFields.map((items: any, i: number) => {
            return (
              <Box
                key={i}
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: {xs: 'column'},
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
                  {items.label}
                </Typography>
                <CustomTextField
                  labal={items.placeholder}
                  sx={{
                    textAlign: 'end',
                    maxWidth: {xs: '480px '},
                    width: '100%'
                  }}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
