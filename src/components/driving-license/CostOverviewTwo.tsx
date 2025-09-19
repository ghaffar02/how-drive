'use client';
import React from 'react';
import {Box, Typography} from '@mui/material';
// import {drivingLicenseRules} from './DrivingLicenseRules';

type DrivingCost = {
  heading: string;
  items: {title: string; cost: string}[];
};

type CostOverviewTwoProps = {
  drivingCosts: DrivingCost[];
  heading: string;
  Description?: string;
};

export default function CostOverviewTwo({
  drivingCosts,
  heading,
  Description
}: CostOverviewTwoProps) {
  return (
    <Box sx={{bgcolor: '#FAFAFA'}}>
      <Box
        sx={{
          maxWidth: '1280px',
          mx: 'auto',
          width: '100%',
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
            // bgcolor: '#ccc',
            p: {xs: '16px', sm: '24px', lg: '48px'},
            borderRadius: '24px'
          }}
        >
          {Description && (
            <Typography
              sx={{
                textAlign: 'center',
                color: '#1A202C',
                // lineHeight: {xs: '58px', md: '100%'},
                fontSize: {xs: '14px', md: '15px', lg: '16px'},
                fontFamily:
                  '"Inter", "Inter Placeholder", sans-serif !important',
                fontWeight: 300,
                width: '100%',
                mb: '48px'
              }}
            >
              {Description}
            </Typography>
          )}
          <Typography
            sx={{
              textAlign: 'center',
              color: '#1A202C',
              // lineHeight: {xs: '58px', md: '100%'},
              fontSize: {xs: '20px', md: '22px', lg: '24px'},
              fontWeight: 600,
              fontFamily: '"Inter", "Inter Placeholder", sans-serif !important',
              width: '100%',
              mb: '48px'
            }}
          >
            {heading}
          </Typography>

          {drivingCosts.map((group, gIndex) => (
            <Box
              key={gIndex}
              sx={{
                // border: '1px solid #D4D4D8',
                border: '1px solid #D4D4D8',
                borderRadius: '20px 0 20px 0',
                mb: '48px',
                overflow: 'hidden',
                backgroundColor: 'transparent'
              }}
            >
              {/* Group heading */}
              <Typography
                sx={{
                  // flex: 1,
                  // maxWidth: {xs: '220px'},
                  width: '100%',
                  borderBottom: '1px solid #D4D4D8',
                  color: '#2D3748',
                  fontSize: {xs: '14px', md: '15px', lg: '16px'},
                  fontFamily:
                    '"Inter", "Inter Placeholder", sans-serif !important',
                  fontWeight: 500,
                  textAlign: 'center',

                  p: '10px'
                }}
              >
                {group.heading}
              </Typography>

              {group.items.map(
                (
                  item: {title: string; cost: string},
                  i: React.Key | null | undefined
                ) => (
                  <Box
                    key={i}
                    sx={{
                      position: 'relative', // 👉 separator ko absolute rakhne ke liye
                      display: 'flex',
                      alignItems: 'center',

                      borderBottom:
                        i !== drivingCosts.length - 1
                          ? '1px solid #D4D4D8'
                          : 'none',
                      backgroundColor: 'transparent'
                      // D4D4D8
                    }}
                  >
                    {/* Title */}
                    <Typography
                      sx={{
                        flex: 1,
                        maxWidth: {xs: '220px'},
                        width: '100%',
                        color: '#2D3748',
                        fontSize: {xs: '14px', md: '15px', lg: '16px'},
                        fontFamily:
                          '"Inter", "Inter Placeholder", sans-serif !important',
                        fontWeight: 500,
                        textAlign: 'left',

                        p: '10px'
                      }}
                    >
                      {item.title}
                    </Typography>
                    {/* 👉 Column separator – table style */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: {xs: '40%', sm: '220px', md: '220px'},
                        width: '1px',
                        backgroundColor: '#D4D4D8'
                      }}
                    />
                    {/* Cost */}
                    <Typography
                      sx={{
                        flex: '1',
                        // maxWidth: '900px',
                        p: '10px',
                        width: '100%',
                        color: '#2D3748',
                        fontSize: {xs: '14px', md: '15px', lg: '16px'},
                        fontFamily:
                          '"Inter", "Inter Placeholder", sans-serif !important',
                        fontWeight: 300,
                        textAlign: 'left',
                        wordBreak: 'break-word'
                        // marginLeft: '10px'
                      }}
                      dangerouslySetInnerHTML={{__html: item.cost}}
                    />
                  </Box>
                )
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
