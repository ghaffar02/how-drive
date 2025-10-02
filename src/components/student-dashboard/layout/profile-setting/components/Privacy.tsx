import CustomButton from '@/components/student-dashboard/CustomButton';
import CustomCard from '@/components/student-dashboard/layout/profile-setting/Dropdown';
import localFont from '@/utils/themes';
import {Box, Divider, Typography} from '@mui/material';
import {useTranslations} from 'next-intl';
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useRef,
  useState
} from 'react';

export default function Privacy() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState<number | 0>(0);
  const t = useTranslations('Dashboard.Settings.RightSide.PrivacyTab');
  const formFields = t.raw('formFields');
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function handleClickOutside(_event: {target: any}) {}
    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  const handleClick = (i: number) => {
    setActiveIndex(i);
  };

  return (
    <Box
      sx={{
        width: '100%',
        // height: '100%',
        mt: '32px',
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
      <Box width="100%">
        <Divider
          sx={{
            borderTop: '1px solid transparent',
            borderImage:
              'linear-gradient(90deg, rgba(245,245,245,0.6) 0%, rgba(203,203,203,1) 50%, rgba(245,245,245,0.6) 100%) 1'
            // marginBottom: '32px'
          }}
        />
      </Box>

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
              {t('heading2')}
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
      <Box width="100%">
        <Divider
          sx={{
            // mt: '32px',
            borderTop: '1px solid transparent',
            borderImage:
              'linear-gradient(90deg, rgba(245,245,245,0.6) 0%, rgba(203,203,203,1) 50%, rgba(245,245,245,0.6) 100%) 1'
            // marginBottom: '32px'
          }}
        />
      </Box>
      <Box
        sx={{
          position: 'relative',
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
          <Box sx={{position: 'relative'}}>
            <CustomButton
              label={t('btn3')}
              bgColor="#0D9488"
              hoverColor="#0C5C72"
              sx={{}}
              onClick={() => setOpenDropdown(() => !openDropdown)}
            />
            {openDropdown && (
              <Box
                ref={dropdownRef}
                sx={{
                  position: 'absolute',
                  bottom: '100%',
                  right: 0,
                  mb: '8px',
                  width: '363px',
                  zIndex: 10
                }}
              >
                <CustomCard
                  text="Would you like to download your personal data?"
                  onClose={() => setOpenDropdown(true)}
                />
              </Box>
            )}
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
