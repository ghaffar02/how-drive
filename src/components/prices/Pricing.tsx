import {Box, Typography} from '@mui/material';
import PricingCards from './PricingCards';

export default function Pricing() {
  const preiseData = [
    {
      title: 'Fahrschüler',
      price: {amount: 'Kostenlos'},
      features: [
        'Alle Funktionen inklusive',
        'Infos über benötigte Unterlagen',
        'Zuständige Behörden',
        'Prozessleitfaden',
        'Terminbuchung',
        'Nachrichten senden',
        'Keine versteckten Kosten'
      ],
      button: 'Starten'
    },
    {
      title: 'Fahrschulen',
      price: {amount: '29,95 €', duration: '/Monat', note: '(inkl. MwSt.)'},
      features: [
        'Kostenlose Registrierung',
        'Einen kostenlosen Probemonat',
        'Terminverwaltung',
        'Digitale Kommunikation',
        'Keine Einrichtungsgebühr',
        'Monatlich kündbar'
      ],
      button: 'Registrieren'
    }
  ];

  return (
    <>
      <Box
        sx={{
          bgcolor: '#FAFAFA',
          boxSizing: 'border-box'
        }}
      >
        <Box
          sx={{
            maxWidth: '1280px',
            width: '100%',
            p: {xs: '48px 16px', md: '48px 24px', lg: '48px'},
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: {xs: '24px'}
          }}
        >
          <Typography
            sx={{
              fontSize: {xs: '28px', md: '32px', lg: '36px'},
              lineHeight: {xs: '35px', md: '100%'},
              fontFamily: 'Satoshi500 !important',
              padding: '16px',
              textAlign: 'center',
              color: '#000'
            }}
          >
            Unsere Preise für Fahrschüler und Fahrschulen
          </Typography>
          <Box
            sx={{
              padding: '8px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              gap: {xs: '32px', lg: '60px'},
              alignItems: 'center',
              flexWrap: {xs: 'wrap', md: 'nowrap'}
            }}
          >
            <PricingCards preiseData={preiseData} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
