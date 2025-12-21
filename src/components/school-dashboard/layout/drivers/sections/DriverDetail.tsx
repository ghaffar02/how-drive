import {Box, Typography} from '@mui/material';
import React, {useState} from 'react';
import Header from '../components/Header';
import DrivingStudents from '../components/DrivingStudents';
import Messages from '../components/Messages';
import {useTranslations} from 'next-intl';
import BigCalendar from '../../calander/components/big-calander/BigCalander';
import DetailSide from './DetailSide';
import back from '@/assets/svgs/dashboard-student/arrowsetting.svg';
import Image from 'next/image';
import localFont from '@/utils/themes';

type DriverDetailProps = {
  activeKey?: string;
};
export default function DriverDetail({activeKey}: DriverDetailProps) {
  const t = useTranslations('SchoolDashboard.Drivers.DriverDetail');
  const [openTrainers, setOpenTrainers] = useState(true);

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: 'calc(100vh - 194px)',
          display: openTrainers ? {xs: 'block', md: 'none'} : 'none'
        }}
      >
        <DetailSide display="flex" setOpenTrainers={setOpenTrainers} />
      </Box>
      <Box
        sx={{
          width: '100%',
          // height: 'calc( 100vh - 40px )',
          height: 'auto',
          padding: {xs: '16px', md: '24px'},
          background: 'rgba(248,250,252,0.3)',
          backdropFilter: 'blur(15px)',
          boxShadow: `0px 0px 0px 1px rgb(255, 255, 255, rgb(255, 255, 255)), 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)`,
          border: '2px solid #fff',
          borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
          display: openTrainers ? {xs: 'none', md: 'flex'} : 'flex',
          flexDirection: 'column',
          gap: {xs: '16px', md: '24px'},
          overflow: 'scroll',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        <Box
          onClick={(e) => {
            e.stopPropagation();
            setOpenTrainers(true);
          }}
          sx={{
            minHeight: '24px',
            width: '100%',
            borderRadius: '18px',
            background: '#ffffffbf',
            display: {xs: 'flex', md: 'none'},
            p: '2px',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow:
              '0px 0px 0px 1px #ffffff, 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)'
          }}
        >
          <Image
            src={back}
            alt="back"
            height={16}
            width={16}
            style={{transform: 'rotate(180deg)'}}
          />
          <Typography
            sx={{
              ...localFont.inter14,
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: '400'
            }}
          >
            {t('back')}
          </Typography>
        </Box>
        <Header />
        <Box
          sx={{
            display: 'flex',
            flexDirection: {xs: 'column', lg: 'row'},
            gap: {xs: '16px', md: '24px'}
          }}
        >
          <Box sx={{flex: 1}}>
            <DrivingStudents title={t('drivingTitle')} />
          </Box>
          <Box sx={{flex: 1}}>
            <Messages />
          </Box>
        </Box>
        <Box
          sx={
            {
              // height: '100%'
            }
          }
        >
          <Box
            sx={{
              width: '100%',
              // height: {xs: '640px', md: '650px', lg: '866px'},
              '& > :first-child': {
                height: {xs: '640px', md: '650px', lg: '866px'}
              },
              // padding: {xs: '8px', md: '24px'},
              // backgroundColor: 'rgba(248, 250, 252, 0.6)',
              borderRadius: '24px',
              border: '2px solid #fff'
            }}
          >
            <BigCalendar activeKey={activeKey} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
