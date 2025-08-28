'use client';
import {Box} from '@mui/material';

import Hero from '@/components/home/Hero';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import TrustServiceSection from '@/components/home/TrustServiceSection';
import HowItWorks from '@/components/home/HowItWorks';
import Faq from '@/components/home/Faq';
import Advantages from '@/components/home/Advantages';
import Pricing from '@/components/prices/Pricing';

export default function HomePage() {
  const faqData = [
    {
      title: 'Was ist WieFührerschein?',
      content:
        'WieFührerschein ist ein Service, um Fahrschüler und Fahrschulen auf einer zentralen Plattform zu verbinden. Fahrschüler können hier ihren Lernfortschritt verfolgen, Termine buchen und mit ihrer Fahrschule kommunizieren. Fahrschulen nutzen unsere Plattform, um ihre Schüler zu verwalten, Termine zu koordinieren und ihre Kommunikation zu optimieren.'
    },
    {
      title: 'Was brauche ich um den Führerschein zu beantragen?',
      content: `Um einen Führerschein zu beantragen, benötigst du in der Regel folgende Unterlagen:
•       Personalausweis oder Reisepass
•       Biometrisches Passfoto
•       Sehtestbescheinigung (nicht älter als zwei Jahre)
•       Nachweis über die Teilnahme an einem Erste-Hilfe-Kurs
•       ggf. die Anmeldebestätigung deiner Fahrschule`
    },
    {
      title: 'Wo muss ich hin um meinen Führerschein zu beantragen?',
      content:
        'Den Antrag reichst du bei der für deinen Wohnsitz zuständigen Fahrerlaubnisbehörde ein. Bei Eingabe deines Wohnsitzes zeigen wir dir, welche Behörde für dich zuständig ist. Außerdem kann deine Fahrschule dich bei diesem Schritt oft unterstützen. '
    },
    {
      title: 'Welche Auto Führerschein Klassen gibt es?',
      content: `Es gibt sechs Führerscheinklassen, nämlich A, B, C, D, l und T. Die gängigsten Autoführerscheine sind die Klassen B und BF17. 
•      Klasse B: Damit darfst du Kraftfahrzeuge bis 3,5 Tonnen Gesamtmasse fahren. Das Mindestalter beträgt 18   Jahre.
•      Klasse BF17: Das ist das „Begleitete Fahren ab 17“. Hier gelten die gleichen Bedingungen wie bei Klasse B, aber du darfst nur in Begleitung einer eingetragenen Person fahren.    
Auf unserer Website im Bereich Führerscheinklassen kannst du alle Klassen und ihre Unterschiede sehen.`
    },
    {
      title: 'Wie viele Theroiestunden muss man machen? ',
      content: `Die Anzahl der Theoriestunden hängt von der Führerscheinklasse ab. Für die Klassen A und B sind 12 Doppelstunden Grundstoff und 2 Doppelstunden klassenspezifischer Unterricht vorgeschrieben. Bei einer Erweiterung (z. B. wenn du bereits einen Führerschein haben) reduziert sich die Anzahl der Gesamtstunden auf 8. Die Gesamtstunden für die Klasse C beträgt 18 und für die Klasse D 20 Stunden.`
    },
    {
      title: 'Wie viele Fahrstunden muss man machen? ',
      content: `Es gibt keine Mindestanzahl an normalen Übungsstunden – diese richtet sich nach deinem Lernfortschritt und dein Fahrlehrer entscheidet, wann du bereit für die Prüfung bist. Zusätzlich sind folgende Sonderfahrten gesetzlich vorgeschrieben:
•	Klasse A: 12 Sonderfahrten
•	Klasse b: 12 Sonderfahrten
•	Klasse C: 10 Sonderfahrten
•	Klasse D: 10 Sonderfahrten`
    },
    {
      title: 'Wie bekomme ich meinen Führerschein nach der Prüfung?',
      content:
        'Nach bestandener Praxisprüfung bekommst du deinen Führerschein entweder direkt vom Prüfer oder einige Tage später per Post oder Abholung bei der Fahrerlaubnisbehörde – je nach Region unterschiedlich.'
    },
    {
      title: 'Wann muss mein Führerschein umgetauscht werden?',
      content:
        'Alle Führerscheine, die vor dem 19. Januar 2013 ausgestellt wurden, müssen stufenweise in den neuen EU-Kartenführerschein umgetauscht werden. Die Fristen sind nach Ihrem Geburtsjahr oder dem Ausstellungsdatum des Führerscheins gestaffelt. In der Regel muss der neue Führerschein alle 15 Jahre erneuert werden, wobei die Fahrerlaubnis selbst unbefristet bleibt.'
    },
    {
      title: 'Wie schreibt man einen Führerschein um?',
      content:
        'Ein ausländischer Führerschein ist in Deutschland nur für eine begrenzte Zeit gültig (meist 6 Monate nach Wohnsitznahme). Je nach Herkunftsland deines Führerscheins kann eine theoretische und/oder praktische Prüfung erforderlich sein. Es gibt Ausnahmen, wenn zwischen Deutschland und dem Ausstellerstaat ein Abkommen über die gegenseitige Anerkennung besteht. Für die Umschreibung muss du bei der zuständigen Führerscheinstelle deines Wohnorts einen Antrag auf Umschreibung stellen. Wir begleiten dich Schritt für Schritt durch diesen Prozess bei der Anmeldung in unserer Website.'
    }
  ];

  return (
    <>
      <Box>
        <Box
          sx={{
            position: 'fixed',
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            top: 0,
            zIndex: 10
          }}
        >
          <Navbar />
        </Box>
        <Box sx={{marginTop: '82px'}}>
          <Hero />
          <HowItWorks />
        </Box>
        <Advantages />
        <Pricing />
        <Faq items={faqData} />
        <TrustServiceSection />
        <Footer />
      </Box>
    </>
  );
}
