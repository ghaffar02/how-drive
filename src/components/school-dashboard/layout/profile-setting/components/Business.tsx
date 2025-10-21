import CustomCard from '@/components/student-dashboard/layout/profile-setting/Dropdown';
import localFont from '@/utils/themes';
import {Box, TextField, Typography} from '@mui/material';
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useRef,
  useState
} from 'react';
import {useTranslations} from 'next-intl';
import {AnimatePresence, motion} from 'framer-motion';
import CustomButton from '@/components/school-dashboard/CustomButton';
import CustomTextField from '@/components/student-dashboard/InputField';
import GradientDivider from '../GradientDivider';

export default function Business() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);
  const [checkedA, setCheckedA] = useState(false);
  const [checkedB, setCheckedB] = useState(true);
  const t = useTranslations('SchoolDashboard.Settings.RightSide.BussinessTab');
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
  const formFields = t.raw('formFields');

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        // height: '100%',
        // mt: '32px',
        // padding:3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: '32px',
        overflow: 'hidden'
        // bgcolor: 'red'
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column', lg: 'row'},
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'space-between',
          overflow: 'hidden'
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
          {formFields.map(
            (
              items: {
                [x: string]:
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
                checkBox1?: any;
                checkBox2?: any;
                checkBox3?: any;
                label?: any;
                isbool?: any;
                placeholder?: any;
              },
              i: Key | null | undefined
            ) => {
              const hasCheckbox =
                items.checkBox1 || items.checkBox2 || items.checkBox3; // ✅ detect checkbox fields

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
                  {/* Label */}
                  <Typography
                    sx={{
                      ...localFont.inter14,
                      width: '100%',
                      maxWidth: '400px',
                      fontFamily: '"Inter", sans-serif !important',
                      fontWeight: 400,
                      textAlign: 'left'
                    }}
                  >
                    {items.label}
                  </Typography>

                  {/* ✅ 1️⃣ Normal TextField */}
                  {!items.isbool && !hasCheckbox && (
                    <CustomTextField
                      labal={items.placeholder}
                      sx={{
                        textAlign: 'end',
                        maxWidth: {lg: '403px', xs: '100%'}
                      }}
                    />
                  )}

                  {/* ✅ 2️⃣ TextArea Field */}
                  {items.isbool && (
                    <TextField
                      placeholder={items.placeholder}
                      multiline
                      rows={4}
                      fullWidth
                      variant="outlined"
                      sx={{
                        maxWidth: {lg: '403px'},
                        width: '100%',
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                          background: '#ffffff',
                          height: '100%',
                          fontSize: '14px',
                          padding: '12px'
                        },
                        '& .MuiInputBase-input': {
                          padding: 0,
                          fontSize: '14px'
                        }
                      }}
                    />
                  )}

                  {/* ✅ 3️⃣ Checkbox group */}
                  {hasCheckbox && (
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        maxWidth: {lg: '403px'},
                        width: '100%'
                      }}
                    >
                      {Object.keys(items)
                        .filter((key) => key.startsWith('checkBox'))
                        .map((key, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              cursor: 'pointer'
                            }}
                          >
                            <input type="checkbox" />
                            <Typography
                              sx={{
                                ...localFont.inter14,
                                fontFamily: '"Inter", sans-serif !important',
                                fontWeight: 300
                              }}
                            >
                              {items[key]}
                            </Typography>
                          </Box>
                        ))}
                    </Box>
                  )}
                </Box>
              );
            }
          )}
        </Box>
      </Box>
    </Box>
  );
}
