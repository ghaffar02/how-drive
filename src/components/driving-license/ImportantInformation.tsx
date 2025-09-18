'use client';
import {Box, SvgIcon, Typography} from '@mui/material';
type DrivingRule = {
  title: string;
  description: string;
};

type ImportantInformationProps = {
  drivingRules: DrivingRule[];
  heading: string;
};

export default function ImportantInformation({
  drivingRules,
  heading
}: ImportantInformationProps) {
  return (
    <Box sx={{bgcolor: '#FAFAFA'}}>
      <Box
        sx={{
          maxWidth: '1280px',
          textAlign: 'center',

          margin: ' auto',
          width: '100%',
          // backgroundColor: '#FAFAFA',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: {xs: '60px 16px', md: '60px 24px', lg: '60px 48px'},
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: '1063px',
            width: '100%',
            backgroundColor: '#EDF0FF',
            p: {xs: '16px', sm: '24px', lg: '48px'},
            borderRadius: '24px'
          }}
        >
          {/* Heading */}
          <Typography
            sx={{
              color: '#1A202C',
              // lineHeight: {xs: '58px', md: '100%'},
              fontSize: {xs: '20px', md: '22px', lg: '24px'},
              fontWeight: 600,
              fontFamily: '"Inter", "Inter Placeholder", sans-serif !important',

              width: '100%'
            }}
          >
            {heading}
          </Typography>

          {drivingRules.map((item, i) => {
            return (
              <Box
                key={i}
                sx={{
                  width: '100%',
                  mt: '28px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px'
                }}
              >
                <SvgIcon
                  viewBox="0 0 256 256"
                  focusable="false"
                  sx={{width: 20}}
                >
                  <g>
                    <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z" />
                  </g>
                </SvgIcon>

                <Box sx={{width: '100%', textAlign: 'left'}}>
                  <Typography
                    sx={{
                      width: '100%',
                      color: '#2D3748',
                      fontSize: {xs: '14px', md: '16px', lg: '18px'},
                      fontWeight: 500,
                      fontFamily:
                        '"Inter", "Inter Placeholder", sans-serif !important'
                      // lineHeight: '1.35em'
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      // maxWidth: '650px',
                      width: '100%',
                      color: '#2D3748',
                      fontSize: {xs: '14px', md: '15px', lg: '16px'},
                      fontFamily:
                        '"Inter", "Inter Placeholder", sans-serif !important',
                      fontWeight: 300
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
