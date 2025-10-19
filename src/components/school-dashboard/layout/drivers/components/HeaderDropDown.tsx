import {Box, Typography} from '@mui/material';
import {ReactNode, useState} from 'react';

import localFont from '@/utils/themes';
import cross from '@/assets/svgs/dashboard-student/btncross.svg';
import tick from '@/assets/svgs/dashboard-student/tick.svg';
import CustomButton from '@/components/student-dashboard/CustomButton';
import CustomTextField from '@/components/school-dashboard/InputField';
import {useTranslations} from 'next-intl';

interface CustomCardProps {
  children?: ReactNode;
  padding?: number | string;
  bgColor?: string;
  text?: string;
  onClose?: () => void;
}

export default function HeaderDropDown({
  onClose,
  padding = '16px'
}: CustomCardProps) {
  const [checkedA, setCheckedA] = useState(false);
  const [checkedB, setCheckedB] = useState(true);
  const t = useTranslations('SchoolDashboard.DriversDa.HeaderDropDown');
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding,
        gap: '24px'
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column'},
          gap: {xs: '4px'},
          alignItems: 'start',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter14,
            width: '100%',

            fontFamily: '"Inter", sans-serif !important',
            fontWeight: 400,
            textAlign: 'left',
            textTransform: 'capitalize'

            // mt: {xs: '8px', lg: '0px'}
          }}
        >
          {t('inputTitle1')}
          {/* 

 */}
        </Typography>
        <CustomTextField labal={t('lable1')} />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column'},
          gap: {xs: '4px'},
          alignItems: 'start',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter14,
            width: '100%',

            fontFamily: '"Inter", sans-serif !important',
            fontWeight: 400,
            textAlign: 'left',
            textTransform: 'capitalize'

            // mt: {xs: '8px', lg: '0px'}
          }}
        >
          {t('inputTitle2')}
        </Typography>

        <CustomTextField labal={t('lable2')} />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column'},
          gap: {xs: '4px'},
          alignItems: 'start',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter14,
            width: '100%',

            fontFamily: '"Inter", sans-serif !important',
            fontWeight: 400,
            textAlign: 'left',
            textTransform: 'capitalize'
          }}
        >
          {t('inputTitle3')}

          <CustomTextField labal={t('lable3')} />
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column'},
          gap: {xs: '4px'},
          alignItems: 'start',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          sx={{
            ...localFont.inter14,
            width: '100%',

            fontFamily: '"Inter", sans-serif !important',
            fontWeight: 400,
            textAlign: 'left',
            textTransform: 'capitalize'
          }}
        >
          {t('inputTitle4')}

          <CustomTextField labal={t('lable4')} />
        </Typography>
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column'},
          gap: {xs: '4px'},
          alignItems: 'start',
          justifyContent: 'space-between'
        }}
      >
        {/* Checkbox A */}
        <Box
          onClick={() => setCheckedA(!checkedA)}
          sx={{
            width: '100%',
            display: 'flex',
            gap: {xs: '10px'},
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <input
            type="checkbox"
            checked={checkedA}
            onChange={() => setCheckedA(!checkedA)}
            onClick={(e) => e.stopPropagation()}
          />
          <Typography
            sx={{
              ...localFont.inter14,
              width: '100%',
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: 300
            }}
          >
            {t('checkText1')}
          </Typography>
        </Box>

        {/* Checkbox B */}
        <Box
          onClick={() => setCheckedB(!checkedB)}
          sx={{
            width: '100%',
            display: 'flex',
            gap: {xs: '10px'},
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <input
            type="checkbox"
            checked={checkedB}
            onChange={() => setCheckedB(!checkedB)}
            onClick={(e) => e.stopPropagation()}
          />
          <Typography
            sx={{
              ...localFont.inter14,
              width: '100%',
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: 300
            }}
          >
            {t('checkText2')}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: {xs: '100%'},

          p: '8px 0px',
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <CustomButton
          onClick={onClose}
          label={t('btn')}
          bgColor="rgb(220, 38, 38)"
          hoverColor="#991919"
          hoverTextcolor="#fff"
          imgSrc={cross}
          sx={{
            gap: '7px',
            maxWidth: '122px',
            width: '100%',
            justifyContent: 'start'
          }}
        />
        <CustomButton
          label={t('btn1')}
          bgColor="#0D9488"
          hoverColor="#0C5C72"
          imgSrc={tick}
          sx={{
            gap: '8px',
            maxWidth: '122px',
            width: '100%',
            justifyContent: 'start'
          }}
          onClick={onClose}
        />
      </Box>
    </Box>
  );
}
