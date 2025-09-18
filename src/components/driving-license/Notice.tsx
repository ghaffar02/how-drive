'use client';
import {Box, SvgIcon, Typography} from '@mui/material';
type Notice = {
  heading: string;
  description: string;
};

// type ImportantInformationProps = {
//   drivingRules: DrivingRule[];
//   heading: string;
// };

export default function Notice({heading, description}: Notice) {
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

          <Box
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
              // focusable="false"
              sx={{
                width: '20px',
                height: '25px',
                color: '#2d3748'
              }}
            >
              <path d="M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"></path>
            </SvgIcon>
            <Typography
              sx={{
                // maxWidth: '650px',
                width: '100%',
                color: '#2D3748',
                fontSize: {xs: '14px', md: '16px', lg: '18px'},
                fontWeight: 500,
                textAlign: 'left',
                fontFamily:
                  '"Inter", "Inter Placeholder", sans-serif !important'
              }}
            >
              {description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
