import {Box, Grid, Typography} from '@mui/material';
import Image, {StaticImageData} from 'next/image';
import React from 'react';
import localFont from '@/utils/themes';
import Starten from '@/assets/svgs/help/starten.svg';
import Konto from '@/assets/svgs/help/konto.svg';
import Rechnung from '@/assets/svgs/help/rechnung.svg';
import Daten from '@/assets/svgs/help/daten.svg';
import Trouble from '@/assets/svgs/help/trouble.svg';
import Sontiges from '@/assets/svgs/help/sontiges.svg';

const data = [
  {
    image: Starten,
    title: 'Starten',
    desc: 'Lerne die Grundlagen'
  },
  {
    image: Konto,
    title: 'Konto',
    desc: 'Lerne die Grundlagen'
  },
  {
    image: Rechnung,
    title: 'Rechnung',
    desc: 'Lerne die Grundlagen'
  },
  {
    image: Daten,
    title: 'Daten',
    desc: 'Lerne die Grundlagen'
  },
  {
    image: Trouble,
    title: 'Troubleshooting',
    desc: 'Lerne die Grundlagen'
  },
  {
    image: Sontiges,
    title: 'Sontiges',
    desc: 'Lerne die Grundlagen'
  }
];

type HelpItem = {
  image: StaticImageData;
  title: string;
  desc: string;
};

type HelpCardProps = {
  data: HelpItem[];
};

export default function HelpCard({data}: HelpCardProps) {
  return (
    <Box
      sx={{
        maxWidth: '1400px',
        width: '100%',
        margin: 'auto',
        padding: {xs: '56px 16px', sm: '64px 24px', lg: '80px 48px'}
      }}
    >
      <Grid container spacing={3} sx={{padding: '8px'}}>
        {data?.map((item, i) => (
          <Grid key={i} size={{xs: 12, sm: 6, lg: 4}}>
            <Box
              sx={{
                // maxWidth: '333px',
                width: '100%',
                background: '#f2f2f2',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '48px',
                height: {xs: '327px', sm: '338px', lg: '329px'},
                borderRadius: '15px'
              }}
            >
              <Box>
                <Image src={item.image} alt="image" height={80} width={80} />
              </Box>
              <Box>
                <Typography
                  sx={{...localFont.h3, textAlign: 'center', mb: '16px'}}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: '16px', sm: '17px', lg: '18px'},
                    fontFamily: '"Inter", sans-serif',
                    color: '#2d3748',
                    letterSpacing: '0.02em',
                    textAlign: 'center'
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
