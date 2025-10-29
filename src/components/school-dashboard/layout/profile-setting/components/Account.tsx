/* eslint-disable @next/next/no-img-element */
import CustomCard from '@/components/student-dashboard/layout/profile-setting/Dropdown';
import localFont from '@/utils/themes';
import {Box, TextField, Typography} from '@mui/material';
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
import {AnimatePresence, motion} from 'framer-motion';
import CustomButton from '@/components/school-dashboard/CustomButton';
import CustomTextField from '@/components/student-dashboard/InputField';
import GradientDivider from '../GradientDivider';
import {watch} from 'fs';

export default function Account() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);
  const t = useTranslations('SchoolDashboard.Settings.RightSide.AccountTab');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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
                isbool: any;
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
                  {!items.isbool ? (
                    <CustomTextField
                      labal={items.placeholder}
                      sx={{
                        textAlign: 'end',
                        maxWidth: {lg: '403px', xs: '100%'}
                      }}
                    />
                  ) : (
                    <Box
                      sx={{
                        maxWidth: {lg: '403px', xs: '100%'},
                        width: '100%',
                        border: 'none',
                        borderRadius: '10px',
                        fontSize: '14px',
                        padding: '12px 12px 22px ',
                        textAlign: 'start',
                        background: '#ffffff',
                        cursor: 'pointer',
                        '&:hover': {
                          border: '1px solid black',
                          padding: '11px 11px 21px '
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
                          color: '#666',
                          fontFamily: '"Inter", sans-serif !important'
                        }}
                      >
                        {items.placeholder}
                        {/* <span
                          style={{
                            color: '#4615ff',
                            fontWeight: 500,
                            fontFamily: '"Inter", sans-serif !important'
                          }}
                        >
                          
                        </span> */}
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
                </Box>
              );
            }
          )}
        </Box>
      </Box>
      <GradientDivider />

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {xs: 'column', lg: 'row'},
          gap: '16px',
          alignItems: 'start'
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
            width: {xs: '100%', lg: '68%'},
            p: '4px',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}
        >
          <Box sx={{position: 'relative'}}>
            <CustomButton
              label={t('btn3')}
              bgColor="rgb(220, 38, 38)"
              hoverColor="#991919"
              onClick={() => setOpenDropdown((prev) => !prev)} // toggle
            />

            <AnimatePresence>
              {openDropdown && (
                <Box
                  component={motion.div}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    y: 70,
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
                    y: 60,
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
                    bottom: '100%',
                    right: {xs: '-70%', sm: 0},
                    mb: '8px',
                    width: {xs: '280px', sm: '322px', lg: '333px'},
                    zIndex: 178879,
                    // overflow: 'visible',
                    border: '1px solid rgb(255, 255, 255)',
                    backgroundColor: '#f0f0fa99',
                    backdropFilter: 'blur(10px)',
                    boxShadow: `
    0px 0px 0px 1px rgb(255, 255, 255),
    0px 1px 0px 0px rgba(0, 0, 0, 0.25),
    0px 1px 1px 0px rgba(0, 0, 0, 0.25)
  `,
                    borderRadius: '12px',
                    transformOrigin: ' bottom'
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
