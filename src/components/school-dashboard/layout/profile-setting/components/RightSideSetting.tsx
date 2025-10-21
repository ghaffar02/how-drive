import {Box, Typography} from '@mui/material';
import Account from './Account';
import Password from './Password';
import Preference from './Preference';
import Privacy from './Privacy';
import {useTranslations} from 'next-intl';
import Notification from './Notification';

export default function RightSide({
  activeIndex,
  setActiveIndex
}: {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const t = useTranslations('SchoolDashboard.Settings.leftSide');
  // const [activeIndex, setActiveIndex] = useState<number | 0>(0);
  const data = t.raw('RightSideArray');

  const handleClick = (i: number) => {
    if (window.innerWidth <= 900) {
      setActiveIndex(i);
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        background: '#f8fafc4d',
        border: '1px solid #fff',
        boxShadow: `
    0px 0px 0px 1px #ffffff,
    0px 1px 0px 0px rgba(0, 0, 0, 0.25),
    0px 1px 1px 0px rgba(0, 0, 0, 0.25)
  `,
        // boxShadow:
        //   '0px 0px 0px 1px #ffffff), 0px 1px 0px 0px rgba(0, 0, 0, 0.25),  0px 1px 1px 0px rgba(0, 0, 0, 0.25)',
        overflow: 'hidden',

        backdropFilter: 'blur(15px)',
        borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
        // borderRadius: '0px 24px 24px 0px',
        height: {xs: '100%', md: '100%'}
      }}
    >
      <Box
        sx={{
          p: {xs: '8px', md: '24px'},
          overflowY: 'scroll',

          height: {xs: '100%', lg: '100%'},

          overflow: ' hidden auto',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        {/* Tabs */}
        <Box
          sx={{
            bgcolor: '#ffffff99',
            display: {xs: 'flex', md: 'none'},
            p: '4px',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0px 0px 2px 0px #a1a1aa',
            borderRadius: '999px'
          }}
        >
          {data.map((items: string, i: number) => (
            <Box
              key={i}
              onClick={() => handleClick(i)}
              sx={{
                background: activeIndex === i ? '#ffff' : 'transprant',
                padding: '4px 8px',
                borderRadius: '999px',
                cursor: 'pointer',
                boxShadow:
                  activeIndex === i
                    ? '0px 1px 2px 0px #00000040'
                    : '0px 0px 0px 0px #000000'
              }}
            >
              <Typography
                sx={{
                  lineHeight: '1.6em',
                  fontSize: {xs: '12px', md: '13px', lg: '14px'},
                  color: '#4A5568',
                  fontFamily: '"Inter", sans-serif !important',
                  fontWeight: activeIndex === i ? '500' : '400'
                }}
              >
                {items}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Pages */}
        <Box sx={{}}>
          {activeIndex === 0 && <Account />}
          {activeIndex === 1 && <Account />}
          {activeIndex === 2 && <Notification />}
          {activeIndex === 3 && <Notification />}
          {activeIndex === 4 && <Privacy />}
          {activeIndex === 5 && <Preference />}
          {activeIndex === 6 && <Password />}
        </Box>
      </Box>
    </Box>
  );
}
