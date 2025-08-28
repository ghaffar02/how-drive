'use client';

import * as React from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Collapse,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Image from 'next/image';
import profile from '@/assets/svgs/how-it-works/profile.svg';
import car from '@/assets/svgs/how-it-works/car.svg';
import apple from '@/assets/svgs/how-it-works/apple.svg';
import androidLogo from '@/assets/svgs/how-it-works/androidLogo.svg';
import TabMenu from '@/components/home/TabMenu';
import uiDesigner from '@/assets/pngs/Tab-Menu/uiDesigner.png';
import webDesigner from '@/assets/pngs/Tab-Menu/webDesigner.png';
import seoSpecialist from '@/assets/pngs/Tab-Menu/seoSpecialist.png';
import guide from '@/assets/pngs/Tab-Menu/guide.png';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{p: 3}}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function HowItWorks() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up('md'));

  const handleChange = (_e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabsData = [
    {label: 'Fahrschüler', icon: profile},
    {label: 'Fahrschulen', icon: car},
    {label: 'PWA auf iOS', icon: apple},
    {label: 'PWA auf Android', icon: androidLogo}
  ];

  return (
    <Box
      sx={{
        padding: {
          xs: '64px 16px 48px 16px',
          md: '64px 24px 48px 24px',
          lg: '64px 48px 48px 48px'
        },
        backgroundColor: '#FAFAFA'
      }}
    >
      <Box sx={{maxWidth: '1280px', m: 'auto'}}>
        <Typography
          sx={{
            p: '16px',
            color: '#000',
            fontSize: {xs: '28px', md: '32px', lg: '36px'},
            textAlign: 'center',
            fontWeight: 700
          }}
        >
          So funktioniert’s
        </Typography>

        <Box
          sx={{
            pt: {xs: '40px', lg: '24px'},
            '& > :not(:first-of-type)': {padding: '0px !important'}
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            TabIndicatorProps={{style: {display: 'none'}}}
            sx={{
              backgroundColor: '#FAFAFA',
              width: 'fit-content',
              m: 'auto',
              borderRadius: '999px',
              border: '1px solid #D4D4D4',
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 2px 0px',
              marginBottom: '24px',
              '& .MuiTab-root': {
                textTransform: 'none',
                backgroundColor: 'transparent !important',
                minHeight: 'auto',
                minWidth: 'auto',
                color: '#2D3748',
                p: '8px',
                borderRadius: '999px',
                fontSize: {xs: '14px', md: '15px', lg: '16px'},
                transition: 'all 0.3s ease-in-out',
                m: '8px',
                '&.Mui-selected': {
                  color: '#2D3748 !important',
                  backgroundColor: '#fff !important',
                  boxShadow: '0px 2px 8px rgba(0,0,0,0.15)',
                  p: '8px 16px'
                },
                '&:hover, &.Mui-focusVisible': {
                  backgroundColor: '#fff !important',
                  boxShadow: '0px 2px 8px rgba(0,0,0,0.15)'
                }
              }
            }}
          >
            {tabsData.map((tab, i) => {
              const showText = upMd || value === i;
              return (
                <Tab
                  key={i}
                  disableRipple
                  label={
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: {xs: showText ? '10px' : 0, md: '10px'}
                      }}
                    >
                      <Image
                        src={tab.icon}
                        alt={tab.label}
                        width={30}
                        height={30}
                        style={{objectFit: 'contain'}}
                      />
                      <Collapse
                        in={showText}
                        orientation="horizontal"
                        timeout={200}
                        unmountOnExit
                      >
                        <Box component="span" sx={{textWrap: 'nowrap'}}>
                          {tab.label}
                        </Box>
                      </Collapse>
                    </Box>
                  }
                  {...a11yProps(i)}
                />
              );
            })}
          </Tabs>

          <CustomTabPanel value={value} index={0}>
            <TabMenu
              number="1"
              title="Führerscheinklasse"
              heading="Wähle die Führerscheinklasse"
              description="Welche Fahrerlaubnis benötigst du? Wähle die passende Kategorie aus. Wir begleiten dich Schritt für Schritt durch den Prozess des Führerscheinerwerbs."
              image={uiDesigner}
            />
            <TabMenu
              number="2"
              title="Wohnort"
              heading="Trage ein, wo du wohnst"
              description="Weder Fahrerlaubnisbehörde oder TÜV, bei Eingabe des Wohnortes werden die zu dir passenden Behörden und ihre Kontaktadressen in deinem Konto angezeigt."
              image={webDesigner}
            />
            <TabMenu
              number="3"
              title="Fahrschule"
              heading="Finde deine Fahrschule"
              description="Bei Verknüpfung deiner Fahrschule kannst du Termine buchen und Nachrichten senden. Deine Fahrschule kann auch deinen Fortschritt verfolgen bzw. eingeben."
              image={seoSpecialist}
            />
            <TabMenu
              number="4"
              title="Prozessleitfaden"
              heading="Verfolge deinen Weg zum Führerschein"
              description="Wir visualisieren deinen Weg zum Führerschein Schritt für Schritt und ermöglichen einen Überblick, was wann genau erforderlich ist."
              image={guide}
            />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <TabMenu
              number="1"
              title="Registrieren"
              heading="Registriere deine Fahrschule"
              description="Erstelle ein Benutzerkonto und melde deine Fahrschule kostenlos auf unserer Website an. Hierfür benötigst du eine gültige E-Mail-Adresse und ein sicheres Passwort."
              image={uiDesigner}
            />
            <TabMenu
              number="2"
              title="Informationen"
              heading="Trage Informationen über deine Fahrschule ein"
              description="Informationen wie Name, Kontaktadresse, Öffnungszeiten, etc. helfen Fahrschülern bei der Kommunikation."
              image={webDesigner}
            />
            <TabMenu
              number="3"
              title="Prozess"
              heading="Gib die Reihenfolge des Prozesses ein"
              description="Die Reihenfolge der Schritte zum Führerscheinerwerb kann bei einigen Fahrschulen unterschiedlich sein. Gib ein, wie es bei dir ist."
              image={seoSpecialist}
            />
            <TabMenu
              number="4"
              title="Fahrerlaubnisbehörde"
              heading="Lege die zuständigen Behörden fest"
              description="Wähle aus der Liste, zu welcher Fahrerlaubnisbehörde und TÜV deine Fahrschüler gehen sollen."
              image={guide}
            />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <TabMenu
              number="1"
              title="Website"
              heading="Öffne unsere Website in Safari"
              description="Navigiere zunächst in Safari zur Website. Wenn keine Popup zum Installieren unserer Website angezeigt war, verfolge die nächsten Schritten."
              image={uiDesigner}
            />
            <TabMenu
              number="2"
              title="Teilen-Symbol"
              heading="Tippe auf das Teilen-Symbol"
              description="Tippe unten in der Mitte auf das Teilen-Symbol (ein Quadrat mit einem Pfeil nach oben). Dies öffnet die Menüoptionen zum Teilen."
              image={webDesigner}
            />
            <TabMenu
              number="3"
              title="Home-Bildschirm"
              heading="Wähle „Zum Home-Bildschirm hinzufügen“"
              description='Wähle die Option "Zum Home-Bildschirm" aus dem Menü. Dies fügt die Web-App zur Liste der verfügbaren Apps hinzu.'
              image={seoSpecialist}
            />
            <TabMenu
              number="4"
              title="Name"
              heading="Lege den Namen fest und bestätige ihn"
              description={`Gib der App ggf. einen Namen und bestätige den Vorgang, indem du auf "Hinzufügen" tippst. Die Website erscheint nun wie eine App auf deinem Startbildschirm.`}
              image={guide}
            />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <TabMenu
              number="1"
              title="Website"
              heading="Öffne unsere Website in Chrome"
              description="Navigiere zunächst in Chrome zur Website. Wenn keine Popup zum Installieren unserer Website angezeigt war, verfolge die nächsten Schritten."
              image={uiDesigner}
            />
            <TabMenu
              number="2"
              title="Drei-Punkte-Symbol"
              heading="Tippe auf das Drei-Punkte-Symbol"
              description="Tippe auf das Drei-Punkte-Menü (⋮) in der oberen oder unteren rechten Ecke des Browsers. Dadurch öffnet sich das Hauptmenü von Chrome."
              image={webDesigner}
            />
            <TabMenu
              number="3"
              title="Home-Bildschirm"
              heading="Wähle „Zum Home-Bildschirm hinzufügen“"
              description={`Wähle die Option "Zum Startbildschirm hinzufügen" aus dem Menü. Manchmal wird diese Option auch als "App installieren" angezeigt.`}
              image={seoSpecialist}
            />
            <TabMenu
              number="4"
              title="Name"
              heading="Lege den Namen fest und bestätige ihn"
              description={`Gib der App einen Namen deiner Wahl und tippe auf "Hinzufügen". Das Icon der PWA erscheint nun auf deinem Startbildschirm.`}
              image={guide}
            />
          </CustomTabPanel>
        </Box>
      </Box>
    </Box>
  );
}
