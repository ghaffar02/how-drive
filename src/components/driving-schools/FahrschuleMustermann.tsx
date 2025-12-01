import {Box, Typography} from '@mui/material';
// import {useTranslations} from 'next-intl';

import bg1 from '@/assets/pngs/ImageBGridInfo.jpg';
// import file from '@/assets/svgs/FlagGermany.svg';
import ConnectIcon from '@/assets/svgs/driving-schools/ConnectIcon.svg';
import SchoolPageBGMobile from '@/assets/svgs/driving-schools/SchoolPageBGMobile.svg';
import SchoolPageBGTablet from '@/assets/svgs/driving-schools/SchoolPageBGTablet.svg';
import messagebtnIcon from '@/assets/svgs/driving-schools/messagebtnIcon.svg';
import schoolicon from '@/assets/svgs/driving-schools/schoolicon.svg';

import SchoolPageBG from '@/assets/svgs/driving-schools/SchoolPageBG.svg';
import BgCard from './components/BgCard';
import Image from 'next/image';
import localFont from '@/utils/themes';
import CustomButton from '../school-dashboard/CustomButton';
export default function FahrschuleMustermann() {
  const title = `Über die Fahrschule`;
  const heading = `
Erste Fahrstunde: Deine erste Fahrstunde beginnt mit einer herzlichen Begrüßung durch deinen Fahrlehrer und einer ausführlichen Einweisung in die Bedienelemente des Fahrzeugs. Anschließend werdet ihr gemeinsam die ersten Meter auf einem ruhigen Gelände fahren, um das Anfahren, Schalten und Bremsen zu üben. Wir legen Wert darauf, dass du dich wohlfühlst und nicht unter Druck stehst.
<div style="margin:20px 0 0"></div>
Moderne Ausbildung: Unser moderner Fuhrpark besteht aus einer vielfältigen Auswahl an Fahrzeugen, die eine abwechslungsreiche und komfortable Ausbildung garantieren. Während deiner gesamten Ausbildung wirst du neben dem alltäglichen Fahren auch auf die sogenannten Grundfahraufgaben vorbereitet, wie beispielsweise Einparken oder eine Gefahrenbremsung. Das erwartet dich: Prüfungsvorbereitung: Wir bereiten Sie auf alle Aspekte der praktischen Prüfung vor, vom sicheren Fahren bis zur richtigen Vorbereitung wie Sitz- und Spiegelanpassung, sodass Sie entspannt in die Prüfung gehen können. Wir begleiten durch Phasen.
`;

  // const t = useTranslations('SchoolDashboard.leftSideTab');
  return (
    <>
      <Box
        sx={{
          width: '100%',

          backgroundImage: {
            xs: `url(${SchoolPageBGMobile.src})`,
            md: `url(${SchoolPageBGTablet.src})`,
            lg: `url(${SchoolPageBG.src})`
          },

          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <Box
          sx={{
            padding: {
              xs: '120px 16px',
              sm: '120px 24px',
              lg: '120px 24px'
            },
            width: '100%',
            maxWidth: '1400px',
            m: '0 auto',
            display: 'flex',

            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              gap: '120px',
              flexDirection: {xs: 'column', lg: 'row'},
              alignItems: 'center'
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                // justifyContent: 'center',
                alignItems: 'center',
                gap: '48px'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  // justifyContent: 'center',
                  alignItems: 'center',
                  gap: '24px'
                }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    height: '120px'
                  }}
                >
                  <Box
                    sx={{
                      height: '60px',
                      width: '60px',
                      textAlign: 'center',
                      my: ' 50%'
                    }}
                  >
                    {' '}
                    <Image
                      src={schoolicon}
                      alt="searchIcon"
                      style={{height: '100%', width: '100%'}}
                    />{' '}
                  </Box>
                </Box>
                <Typography
                  sx={{
                    ...localFont.h2,
                    textAlign: 'center',
                    color: '#000',
                    fontWeight: '600',
                    fontFamily: '"Inter", sans-serif !important'
                  }}
                >
                  {' '}
                  Fahrschule Mustermann Hamburg
                </Typography>
                <Typography
                  sx={{
                    ...localFont.inter22,
                    textAlign: 'center',
                    color: '#000',
                    fontWeight: '300',
                    fontFamily: '"Inter", sans-serif !important'
                  }}
                >
                  {' '}
                  Hamburg
                </Typography>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '24px',
                    py: '24px'
                  }}
                >
                  <CustomButton
                    label={'Verbinden'}
                    bgColor="#2d3748ff"
                    hoverColor="rgba(0, 0, 0, 0)"
                    activeColor="#001959"
                    hoverTextcolor="#2D3748"
                    imgSrc={ConnectIcon}
                    hoverImgSrc={messagebtnIcon}
                    btnSx={{
                      maxWidth: '20px',
                      height: '20px'
                    }}
                    sx={{
                      ...localFont.inter18,
                      maxWidth: '168px',
                      width: '100%',
                      gap: '12px',
                      color: '#fff',
                      border: '1px solid #2d3748ff',
                      borderRadius: '999px',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      p: '12px',
                      height: '49px',
                      '&:active': {bgcolor: '#001959', color: '#fff'}
                    }}
                  />
                  <CustomButton
                    sx={{
                      ...localFont.inter18,
                      maxWidth: '168px',
                      alignItems: 'center',
                      border: '1px solid #000',

                      justifyContent: 'flex-start',
                      width: '100%',
                      gap: '12px',
                      color: '#2D3748',
                      borderRadius: '999px',
                      p: '12px',
                      height: '49px'
                    }}
                    label={'Kontaktieren'}
                    hoverImgSrc={messagebtnIcon}
                    hoverTextcolor="#fff"
                    bgColor="rgba(0, 0, 0, 0)"
                    hoverColor="#2d3748ff "
                    activeColor="#001959"
                    imgSrc={messagebtnIcon}
                    btnSx={{
                      maxWidth: '20px',
                      height: '20px'
                    }}
                  />
                </Box>
              </Box>
              <CustomButton
                label={'Weitere Informationen'}
                bgColor="#fff"
                hoverColor="#fff"
                activeColor="#fff"
                sx={{
                  maxWidth: '360px',
                  width: '100%',
                  height: '60px',
                  boxShadow:
                    'rgba(0, 0, 0, 0.18) 0px 0.301094px 1.26459px -1.25px, rgba(0, 0, 0, 0.16) 0px 1.14427px 4.80592px -2.5px, rgba(0, 0, 0, 0.06) 0px 5px 21px -3.75px',

                  ...localFont.inter18,
                  color: '#2D3748',

                  borderRadius: '999px',
                  p: '24px',
                  '&:hover': {
                    boxShadow:
                      'rgba(0, 0, 0, 0.18) 0px 0.301094px 1.26459px -1.25px, rgba(0, 0, 0, 0.16) 0px 1.14427px 4.80592px -2.5px, rgba(0, 0, 0, 0.06) 0px 5px 21px -3.75px',

                    color: '#2D3748'
                  }
                }}
              />
            </Box>
            <BgCard
              sx={{
                maxWidth: '580px',
                width: '100%',
                height: '100%',
                borderRadius: '24px',
                gap: '24px',
                p: {xs: '24px', md: '48px'}
              }}
              bgImage={bg1.src}
              title={title}
              des={heading}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
