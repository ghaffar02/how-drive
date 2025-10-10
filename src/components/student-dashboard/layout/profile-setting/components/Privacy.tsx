import CustomButton from '@/components/student-dashboard/CustomButton';
import CustomCard from '@/components/student-dashboard/layout/profile-setting/Dropdown';
import localFont from '@/utils/themes';
import {Box, Divider, Typography} from '@mui/material';
import {useTranslations} from 'next-intl';
import {AnimatePresence, motion} from 'framer-motion';
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useRef,
  useState
} from 'react';
import GradientDivider from '../GradientDivider';

export default function Privacy() {
  const [activeIndex, setActiveIndex] = useState<number | 0>(0);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  const t = useTranslations('Dashboard.Settings.RightSide.PrivacyTab');
  const formFields = t.raw('formFields');
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

  const handleClick = (i: number) => {
    setActiveIndex(i);
  };

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
            p: '4px',
            width: '100%',
            display: 'flex',
            gap: '10px',
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
          <Box
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
              Cookies
            </Typography>

            <Box
              sx={{
                // bgcolor: '#000',
                width: '100%',
                display: 'flex',
                flexDirection: {xs: 'column'},
                gap: '20px',
                alignItems: 'end',
                justifyContent: 'end'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  maxWidth: '328px',
                  bgcolor: '#ffffff99',
                  display: 'flex',
                  p: '4px',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0px 0px 2px 0px #a1a1aa',
                  borderRadius: '999px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Moving Highlight */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 4,
                    bottom: 4,
                    left: 4,
                    width: `calc((100% - 8px) / 3)`, // 3 buttons ka equal divide
                    borderRadius: '999px',
                    background: '#fff',
                    boxShadow: '0px 2px 6px 0px #00000033',
                    transition: 'all 0.4s ease',
                    transform: `translateX(${activeIndex * 100}%)`, // move on X
                    zIndex: 1
                  }}
                />

                {formFields.map(
                  (
                    item:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<
                          | string
                          | number
                          | bigint
                          | boolean
                          | ReactPortal
                          | ReactElement<
                              unknown,
                              string | JSXElementConstructor<any>
                            >
                          | Iterable<ReactNode>
                          | null
                          | undefined
                        >
                      | null
                      | undefined,
                    i: number
                  ) => (
                    <Box
                      key={i}
                      onClick={() => handleClick(i)}
                      sx={{
                        flex: 1,
                        textAlign: 'center',
                        p: '4px 8px',
                        cursor: 'pointer',
                        zIndex: 2
                      }}
                    >
                      <Typography
                        sx={{
                          lineHeight: '1.6em',
                          fontSize: {xs: '12px', md: '13px', lg: '14px'},
                          color: activeIndex === i ? '#4A5568' : '#4A5568',
                          fontWeight: activeIndex === i ? '500' : '400',
                          transition: 'all 0.3s ease-in-out',
                          fontFamily: '"Inter", sans-serif !important'
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  )
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <GradientDivider />
      <Box
        sx={{
          position: 'relative',
          zIndex: 4,
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column', lg: 'row'},
          // flexWrap: 'wrap',
          gap: '16px',
          alignItems: 'start'
          // justifyContent: 'space-between'
          // mb: '12px'
        }}
      >
        <Box sx={{width: '100%', p: '4px'}}>
          <Typography
            sx={{
              ...localFont.inter16,
              fontWeight: 500,
              fontFamily: '"Inter", sans-serif !important'
            }}
          >
            {t('heading3')}
          </Typography>
          <Typography
            sx={{
              width: '100%',
              ...localFont.inter14,
              fontFamily: '"Inter", sans-serif !important',
              fontWeight: 300
            }}
          >
            {t('description2')}
          </Typography>
        </Box>
        <Box
          ref={iconRef}
          sx={{
            width: {xs: '100%', lg: '75%'},
            p: '4px',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'flex-end'
            // justifyContent: 'space-between'
          }}
        >
          <Box sx={{position: 'relative', zIndex: 22}}>
            <CustomButton
              label={t('btn3')}
              bgColor="#0D9488"
              hoverColor="#0C5C72"
              sx={{}}
              onClick={() => setOpenDropdown(() => !openDropdown)}
            />

            <AnimatePresence>
              {openDropdown && (
                <Box
                  component={motion.div}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    y: -20,
                    x: 20,
                    originX: 1,
                    originY: 0
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    x: 0,
                    originX: 1,
                    originY: 0
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    // dur: 1,
                    y: -20,
                    x: 20,
                    originX: 1,
                    originY: 0
                  }}
                  transition={{
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 300,
                    damping: 25
                  }}
                  sx={{
                    position: 'absolute',
                    right: {xs: '-70%', sm: 0},
                    mt: '8px',
                    left: 'auto',
                    width: {xs: '280px', sm: '349px', md: '324px', lg: '405px'},
                    zIndex: 33,
                    overflow: 'visible',
                    border: '1px solid rgb(255, 255, 255)',
                    backgroundColor: '#f0f0fa99',
                    backdropFilter: 'blur(12px)',
                    // borderRadius: "12px",
                    boxShadow: `
    0px 0px 0px 1px rgb(255, 255, 255),
    0px 1px 0px 0px rgba(0, 0, 0, 0.25),
    0px 1px 1px 0px rgba(0, 0, 0, 0.25)
  `,
                    borderRadius: '12px',
                    transformOrigin: 'top right'
                  }}
                >
                  <CustomCard
                    text={t('dropDown')}
                    // onClose={() => setOpenDropdown(false)}
                  />
                </Box>
              )}
            </AnimatePresence>
          </Box>
          <CustomButton
            label={t('btn4')}
            bgColor="rgba(248, 250, 252, 0)"
            hoverTextcolor="#fff"
            sx={{border: '1px solid #a1a1aaff', color: '#000'}}
          />
        </Box>
      </Box>
    </Box>
  );
}
