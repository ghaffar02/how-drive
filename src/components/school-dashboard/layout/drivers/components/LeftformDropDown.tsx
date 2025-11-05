import {Box, Typography} from '@mui/material';
import {useState} from 'react';

import localFont from '@/utils/themes';
import cross from '@/assets/svgs/dashboard-student/addicon.svg';
import CustomButton from '@/components/student-dashboard/CustomButton';
import CustomTextField from '@/components/school-dashboard/InputField';
import alertIcon from '@/assets/svgs/alertIcon.svg';
import {useTranslations} from 'next-intl';
import Image from 'next/image';

interface CustomCardProps {
  onClose?: () => void;
}

export default function LeftformDropDown({onClose}: CustomCardProps) {
  const [checkedA, setCheckedA] = useState(false);
  const [checkedB, setCheckedB] = useState(true);
  const t = useTranslations('SchoolDashboard.DriversDa.leftDD');
  const handleContainerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <Box
      onClick={handleContainerClick}
      sx={{
        width: '100%',
        height: '100%',
        maxHeight: '80vh',
        overflow: 'auto',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        msOverflowStyle: 'none'
      }}
    >
      <Box
        // onClick={handleContainerClick}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '16px',
          gap: '24px'
        }}
      >
        <Box>
          <Typography
            sx={{
              ...localFont.inter16,
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: 500,
              textAlign: 'center',
              mb: '24px'
            }}
          >
            {t('titleTrainer')}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Image src={alertIcon} alt="alert" height={24} width={24} />
          </Box>
          <Typography
            sx={{
              ...localFont.inter16,
              fontFamily: '"Inter", sans-serif !important',
              textAlign: 'center',
              fontWeight: 300,
              mt: '8px'
            }}
          >
            {t('desTrainer')}
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
            {t('inputTitle1')}
            {/* 

 */}
          </Typography>
          <CustomTextField />
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

          <CustomTextField />
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

            <CustomTextField />
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
            {t('inputTitle5')}

            <CustomTextField />
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

            <CustomTextField />
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
            imgSrc={cross}
            sx={{
              gap: '7px',
              maxWidth: '122px',
              width: '100%',
              justifyContent: 'start'
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
