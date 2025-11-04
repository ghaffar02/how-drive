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
import CustomButton from '@/components/school-dashboard/CustomButton';
import CustomTextField from '@/components/student-dashboard/InputField';
import GradientDivider from '../GradientDivider';
import MainDropdown from './MainDropdown';
import HoursComponent from './HoursComponent';

export default function Business() {
  const [openDropdown, setOpenDropdown] = useState(true);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [checkedA, setCheckedA] = useState(false);
  const [checkedValues, setCheckedValues] = useState<{[key: string]: boolean}>(
    {}
  );

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
  const days = t.raw('days');

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: '32px'
        // overflow: 'hidden'
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
                items.checkBox1 || items.checkBox2 || items.checkBox3;

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
                  {!items.isbool && !hasCheckbox && !items.isfile && (
                    <CustomTextField
                      labal={items.placeholder}
                      sx={{
                        textAlign: 'end',
                        maxWidth: {lg: '403px', xs: '100%'}
                      }}
                    />
                  )}

                  {/* ✅ 2️⃣ TextArea Field */}
                  {items.isbool && !items.isfile && (
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
                  {items.isfile && !items.isbool && (
                    <Box
                      sx={{
                        boxShadow:
                          '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)',
                        border: '1px solid  rgba(0, 0, 0, 0.24)',
                        maxWidth: {lg: '403px', xs: '100%'},
                        width: '100%',
                        // border: 'none',
                        borderRadius: '10px',
                        fontSize: '14px',
                        padding: '23px ',
                        textAlign: 'start',
                        background: '#ffffff',
                        cursor: 'pointer',
                        '&:hover': {
                          border: '1px solid black',
                          padding: '23px '
                        }
                      }}
                      onClick={() =>
                        document.getElementById('fileInput')?.click()
                      }
                    >
                      <input
                        type="file"
                        id="fileInput"
                        style={{display: 'none'}}
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setSelectedFile(e.target.files[0]);
                          }
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: '14px',
                          color: '#999',
                          fontFamily: '"Inter", sans-serif !important',
                          textAlign: 'center'
                        }}
                      >
                        {items.placeholder}
                      </Typography>
                      {selectedFile && (
                        <Box sx={{mt: 2}}>
                          <img
                            src={URL.createObjectURL(selectedFile)}
                            alt="Preview"
                            style={{
                              maxWidth: '100px',
                              maxHeight: '100px',
                              borderRadius: '8px',
                              objectFit: 'contain'
                            }}
                          />
                        </Box>
                      )}
                    </Box>
                  )}
                  {/* ✅ 3️⃣ Checkbox group */}
                  {hasCheckbox && (
                    <Box
                      onClick={() => setCheckedA(!checkedA)}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        maxWidth: {lg: '403px'},
                        width: '100%'
                      }}
                    >
                      {Object.keys(items)
                        //["label", "checkBox1", "checkBox2", "checkBox3"]
                        .filter((key) => key.startsWith('checkBox'))
                        //["checkBox1", "checkBox2", "checkBox3"]
                        .map((key, idx) => (
                          //1st loop → key = "checkBox1"
                          // // 2nd loop → key = "checkBox2"
                          // // 3rd loop → key = "checkBox3"
                          <Box
                            key={idx}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              cursor: 'pointer'
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={checkedValues[key] || false}
                              //{ checkBox1: true, checkBox2: false }

                              onChange={() =>
                                setCheckedValues((prev) => ({
                                  ...prev,
                                  [key]: !prev[key]
                                }))
                              }
                            />
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
          {t('heading3')}
        </Typography>
        <Typography
          sx={{
            ...localFont.inter14,
            // fontWeight: 500,
            fontFamily: '"Inter", sans-serif !important',
            mb: '10px',
            p: '4px'
          }}
        >
          {t('description2')}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '20px'
          }}
        >
          {days.map(
            (
              data: {day: string; unavailable: boolean | undefined},
              i: Key | null | undefined
            ) => (
              <HoursComponent
                key={i}
                day={data.day}
                unavailable={data.unavailable}
              />
            )
          )}
        </Box>
      </Box>
      {openDropdown && (
        <Box
          sx={{
            position: 'absolute',
            p: {xs: '48px 24px'},
            top: '10%',

            zIndex: 178879,
            overflow: 'visible',
            border: '1px solid #ffffffff',
            backgroundColor: '#fff',
            // bgcolor: 'red',
            backdropFilter: 'blur(10px)',
            boxShadow: `
      0px 0px 0px 2px rgba(0, 0, 0, 0.02),
      0px 2px 9px 0px rgba(0, 0, 0, 0.09),
      0px 10px 42px 0px rgba(0, 0, 0, 0.4)
       
    `,
            borderRadius: '18px',
            transformOrigin: ' bottom'
          }}
        >
          <MainDropdown />
        </Box>
      )}
    </Box>
  );
}
