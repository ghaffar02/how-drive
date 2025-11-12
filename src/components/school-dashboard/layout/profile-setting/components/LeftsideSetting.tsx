import localFont from '@/utils/themes';
import {Box, Typography} from '@mui/material';
import arrow from '@/assets/svgs/dashboard-student/arrowsetting.svg';
import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';

export default function Leftside({
  activeIndexes,
  setActiveIndexes
}: {
  activeIndexes: number;
  setActiveIndexes: React.Dispatch<React.SetStateAction<number>>;
}) {
  const t = useTranslations('SchoolDashboard.Settings.leftSide');

  const handleClick = (i: number) => {
    // setActiveIndexes((prev) =>
    //   prev.includes(i) ? prev.filter((idx) => idx !== i) : [...prev, i]
    // );
    setActiveIndexes(i);
  };

  const data = t.raw('SettingsArray');
  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: 1,
        maxWidth: {md: '250px', lg: '300px'},
        width: '100%',
        // height: '100%',
        background: 'rgba(248,250,252,0.3)',
        padding: {xs: '8px', md: '24px 12px'},
        border: '2px solid #fff',

        boxShadow: '0px 0px 2px 0px #D4D4D8',
        backdropFilter: 'blur(15px)',
        display: {xs: 'none', md: 'flex'},
        alignItems: 'center',
        flexDirection: {xs: 'column'},
        gap: '16px'
      }}
    >
      <Typography
        sx={{
          ...localFont.inter16,
          fontSize: {xs: '14px', md: '15px', lg: '16px'},
          fontWeight: '500',
          fontFamily: '"Inter", sans-serif !important'
        }}
      >
        {t('title')}
      </Typography>

      {data.map((items: string, i: number) => (
        <Box
          component={motion.div}
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{
            // type: 'spring',
            duration: 0.2,
            ease: 'easeOut',
            delay: i * 0.11
          }}
          key={i}
          onClick={() => handleClick(i)}
          sx={{
            width: '100%',
            background:
              activeIndexes === i ? 'rgba(255, 255, 255, 0.85)' : '#ffffff99',
            padding: '8px',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
            cursor: 'pointer',
            overflow: 'hidden',
            boxShadow:
              activeIndexes === i
                ? '0px 0px 2px 0px #4611f5'
                : '0px 0px 2px 0px #a1a1aa51',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow:
                activeIndexes === i
                  ? '0px 0px 2px 0px #4611f5'
                  : '0px 0px 2px 0px #d4d4d8',
              background: 'rgba(255, 255, 255, 0.85)'
            },
            '&:hover .hoverArrow': {
              opacity: 1,
              transform: 'translateX(1px)',
              overflow: 'hidden'
              // transition: 'transform 0.3s ease-in-out'
            }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <Typography
              sx={{
                ...localFont.inter14,

                lineHeight: '1.9em',
                // fontSize: {xs: '14px', md: '15px', lg: '16px'},
                color: activeIndexes === i ? '#4611f5' : '#2d3748',
                fontFamily: '"Inter", sans-serif !important',
                fontWeight: activeIndexes === i ? '500' : '400'
              }}
            >
              {items}
            </Typography>

            <Box
              // className="hoverArrow"
              className={
                (activeIndexes !== i && 'hoverArrow') as string | undefined
              }
              component="img"
              src={arrow.src}
              alt="Arrow"
              sx={{
                maxWidth: {xs: '14px', sm: '15px', md: '16px'},
                width: '100%',
                height: '100%',
                opacity: 0,
                // mr: '2px',
                transition: 'opacity 0.5s ease, transform 0.3s ease-in-out',
                // opacity: activeIndexes.includes(i) ? 1 : 0,
                transform:
                  activeIndexes === i ? 'translateX(30px)' : 'translateX(-10px)'
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
