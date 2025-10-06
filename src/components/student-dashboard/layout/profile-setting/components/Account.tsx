import CustomButton from '@/components/student-dashboard/CustomButton';
import CustomCard from '@/components/student-dashboard/layout/profile-setting/Dropdown';
import CustomTextField from '@/components/student-dashboard/InputField';
import localFont from '@/utils/themes';
import {Box, Divider, Typography} from '@mui/material';
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useRef,
  useState
} from 'react';
import {useTranslations} from 'next-intl';

export default function Account() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const t = useTranslations('Dashboard.Settings.RightSide.AccountTab');

  // Outside click close

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenDropdown(false);
      }
    }

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  const formFields = t.raw('formFields');

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
            borderImage:
              'linear-gradient(90deg, #E4E4E7 0%, #D4D4D8 50%, #E4E4E7 100%) 1'
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
          {formFields.map(
            (
              items: {
                label:
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
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
                placeholder: string | undefined;
              },
              i: number
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
                    {items.label}
                  </Typography>
                  <CustomTextField
                    labal={items.placeholder}
                    sx={{textAlign: 'end', maxWidth: {lg: '403px'}}}
                  />
                </Box>
              );
            }
          )}
        </Box>
      </Box>
      <Box width="100%">
        <Divider
          sx={{
            borderImage:
              'linear-gradient(90deg, #E4E4E7 0%, #D4D4D8 50%, #E4E4E7 100%) 1'
          }}
        />
      </Box>

      <Box
        sx={{
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
          ref={containerRef}
          sx={{
            width: {xs: '100%', lg: '68%'},
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
              label="Delete account"
              bgColor="rgb(220, 38, 38)"
              hoverColor="#991919"
              onClick={() => setOpenDropdown((prev) => !prev)} // toggle
            />

            {openDropdown && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '100%',
                  // left: {xs: '10%', sm: 'unset'},
                  right: {xs: '-20%', sm: 0},
                  mb: '8px',
                  width: {xs: '283px', sm: '333px'},
                  zIndex: 10
                }}
              >
                <CustomCard
                  text=" Do you really want to delete your account?"
                  onClose={() => setOpenDropdown(false)}
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
