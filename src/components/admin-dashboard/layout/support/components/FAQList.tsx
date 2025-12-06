import {Box, Typography, Divider} from '@mui/material';
import React from 'react';
import Image from 'next/image';
import editIcon from '@/assets/svgs/editIcon.svg';
import closeIcon from '@/assets/svgs/closeIcon.svg';
import FAQForm from './FAQForm';

interface FAQItem {
  id: number;
  germanQuestion: string;
  germanAnswer: string;
  englishQuestion: string;
  englishAnswer: string;
}

interface FAQListProps {
  onEdit: (item: FAQItem) => void;
  selectedFAQId?: number;
  activeTab: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    germanQuestion: 'Was ist WieFührerschein?',
    germanAnswer:
      'WieFührerschein ist ein Service, um Fahrschüler und Fahrschulen auf einer zentralen Plattform zu verbinden. Fahrschüler können hier ihren Lernfortschritt verfolgen, Termine buchen und mit ihrer Fahrschule kommunizieren. Fahrschulen nutzen unsere Plattform, um ihre Schüler zu verwalten, Termine zu koordinieren und ihre Kommunikation zu optimieren.',
    englishQuestion: 'What is WieFührerschein?',
    englishAnswer:
      'WieFührerschein is a service that connects driving students and driving schools on a central platform. Students can track their learning progress, book appointments, and communicate with their driving school. Driving schools use our platform to manage their students, coordinate appointments, and optimize their communication.'
  },
  {
    id: 2,
    germanQuestion: 'Wo muss ich hin um meinen Führerschein zu beantragen?',
    germanAnswer:
      'Den Antrag reichst du bei der für deinen Wohnsitz zuständigen Fahrerlaubnisbehörde ein. Bei Eingabe deines Wohnsitzes zeigen wir dir, welche Behörde für dich zuständig ist. Außerdem kann deine Fahrschule dich bei diesem Schritt oft unterstützen.',
    englishQuestion: 'What do I need to apply for a driver\'s license?',
    englishAnswer:
      'To apply for a driver\'s license, you will generally need the following documents: • Identity card or passport • Biometric passport photo • Eye test certificate (not older than two years) • Proof of participation in a first aid course • If applicable, registration confirmation from your driving school'
  },
  {
    id: 3,
    germanQuestion: 'Was brauche ich um den Führerschein zu beantragen?',
    germanAnswer:
      'Um einen Führerschein zu beantragen, benötigst du in der Regel folgende Unterlagen: • Personalausweis oder Reisepass • Biometrisches Passfoto • Sehtestbescheinigung (nicht älter als zwei Jahre) • Nachweis über die Teilnahme an einem Erste-Hilfe-Kurs • ggf. die Anmeldebestätigung deiner Fahrschule',
    englishQuestion: 'Where do I have to go to apply for my driver\'s license?',
    englishAnswer:
      'You submit the application to the driver\'s license authority responsible for your place of residence. When you enter your place of residence, we will show you which authority is responsible for you. Your driving school can often also assist you with this step.'
  },
  {
    id: 4,
    germanQuestion: 'Welche Auto Führerschein Klassen gibt es?',
    germanAnswer:
      'Es gibt sechs Führerscheinklassen, nämlich A, B, C, D, l und T. Die gängigsten Autoführerscheine sind die Klassen B und BF17. • Klasse B: Damit darfst du Kraftfahrzeuge bis 3,5 Tonnen Gesamtmasse fahren. Das Mindestalter beträgt 18 Jahre. • Klasse BF17: Das ist das „Begleitete Fahren ab 17". Hier gelten die gleichen Bedingungen wie bei Klasse B, aber du darfst nur in Begleitung einer eingetragenen Person fahren. Auf unserer Website im Bereich Führerscheinklassen kannst du alle Klassen und ihre Unterschiede sehen.',
    englishQuestion: 'What driving license classes are there?',
    englishAnswer:
      'There are six driver\'s license classes: A, B, C, D, I, and T. The most common car driver\'s licenses are classes B and BF17. • Class B: This allows you to drive motor vehicles with a gross vehicle weight of up to 3.5 tons. The minimum age is 18. • Class BF17: This is "accompanied driving from 17." The same conditions apply as for class B, but you may only drive if accompanied by a registered adult. You can see all the classes and their differences on our website in the driver\'s license classes section.'
  },
  {
    id: 5,
    germanQuestion: 'Wie viele Theoriestunden muss man machen?',
    germanAnswer:
      'Die Anzahl der Theoriestunden hängt von der Führerscheinklasse ab. Für die Klassen A und B sind 12 Doppelstunden Grundstoff und 2 Doppelstunden klassenspezifischer Unterricht vorgeschrieben. Bei einer Erweiterung (z. B. wenn du bereits einen Führerschein haben) reduziert sich die Anzahl der Gesamtstunden auf 8. Die Gesamtstunden für die Klasse C beträgt 18 und für die Klasse D 20 Stunden.',
    englishQuestion: 'How many theory lessons do you have to take?',
    englishAnswer:
      'The number of theory lessons depends on the driver\'s license class. For classes A and B, 12 double lessons of basic theory and two double lessons of class-specific instruction are required. If you extend your license (e.g., if you already have a driver\'s license), the total number of lessons is reduced to 8. The total number of lessons for class C is 18, and for class D, 20.'
  },
  {
    id: 6,
    germanQuestion: 'Wie viele Fahrstunden muss man machen?',
    germanAnswer:
      'Es gibt keine Mindestanzahl an normalen Übungsstunden – diese richtet sich nach deinem Lernfortschritt und dein Fahrlehrer entscheidet, wann du bereit für die Prüfung bist. Zusätzlich sind folgende Sonderfahrten gesetzlich vorgeschrieben: • Klasse A: 12 Sonderfahrten • Klasse b: 12 Sonderfahrten • Klasse C: 10 Sonderfahrten • Klasse D: 10 Sonderfahrten',
    englishQuestion: 'How many driving lessons do you have to take?',
    englishAnswer:
      'There is no minimum number of regular practice sessions – this depends on your learning progress, and your driving instructor will decide when you are ready for the test. In addition, the following special driving lessons are required by law: • Class A: 12 special driving lessons • Class B: 12 special driving lessons • Class C: 10 special driving lessons • Class D: 10 special driving lessons'
  },
  {
    id: 7,
    germanQuestion: 'Wie bekomme ich meinen Führerschein nach der Prüfung?',
    germanAnswer:
      'Nach bestandener Praxisprüfung bekommst du deinen Führerschein entweder direkt vom Prüfer oder einige Tage später per Post oder Abholung bei der Fahrerlaubnisbehörde – je nach Region unterschiedlich.',
    englishQuestion: 'How do I get my driver\'s license after the test?',
    englishAnswer:
      'After passing the practical test, you will receive your driving license either directly from the examiner or a few days later by mail or by picking it up from the driving license authority – this varies depending on the region.'
  },
  {
    id: 8,
    germanQuestion: 'Wann muss mein Führerschein umgetauscht werden?',
    germanAnswer:
      'Alle Führerscheine, die vor dem 19. Januar 2013 ausgestellt wurden, müssen stufenweise in den neuen EU-Kartenführerschein umgetauscht werden. Die Fristen sind nach Ihrem Geburtsjahr oder dem Ausstellungsdatum des Führerscheins gestaffelt. In der Regel muss der neue Führerschein alle 15 Jahre erneuert werden, wobei die Fahrerlaubnis selbst unbefristet bleibt.',
    englishQuestion: 'When does my driver\'s license need to be exchanged?',
    englishAnswer:
      'All driving licenses issued before January 19, 2013, must be gradually exchanged for the new EU card-based driving license. The deadlines are staggered according to your year of birth or the date the driving license was issued. As a general rule, the new driving license must be renewed every 15 years, although the driving license itself remains valid for an unlimited period.'
  },
  {
    id: 9,
    germanQuestion: 'Wie schreibt man einen Führerschein um?',
    germanAnswer:
      'Ein ausländischer Führerschein ist in Deutschland nur für eine begrenzte Zeit gültig (meist 6 Monate nach Wohnsitznahme). Je nach Herkunftsland deines Führerscheins kann eine theoretische und/oder praktische Prüfung erforderlich sein. Es gibt Ausnahmen, wenn zwischen Deutschland und dem Ausstellerstaat ein Abkommen über die gegenseitige Anerkennung besteht. Für die Umschreibung muss du bei der zuständigen Führerscheinstelle deines Wohnorts einen Antrag auf Umschreibung stellen. Wir begleiten dich Schritt für Schritt durch diesen Prozess bei der Anmeldung in unserer Website.',
    englishQuestion: 'How do you rewrite/convert a driver\'s license?',
    englishAnswer:
      'A foreign driver\'s license is only valid in Germany for a limited period of time (usually six months after taking up residence). Depending on the country of origin of your driver\'s license, a theory and/or practical test may be required. Exceptions apply if a mutual recognition agreement exists between Germany and the issuing country. To convert your license, you must submit an application to the relevant driver\'s license office in your place of residence. We will guide you step by step through this process during the registration process on our website.'
  }
];

export default function FAQList({onEdit, selectedFAQId, activeTab}: FAQListProps) {
  return (
    <Box
      sx={{
      width: '848px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        background: '#ffffff99',
        boxShadow: `0px 0px 0px 1px rgb(255, 255, 255, rgb(255, 255, 255)), 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)`,
        border: '2px solid #fff',
        borderRadius: {xs: '24px', },
        backdropFilter: 'blur(15px)',
        overflowY: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
          width: '8px'
        },
        '&::-webkit-scrollbar-track': {
          background: '#f1f1f1',
          borderRadius: '4px'
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#888',
          borderRadius: '4px',
          '&:hover': {
            background: '#555'
          }
        }
      }}
    >
      {/* FAQ Form */}
      <FAQForm
        onSave={(data) => {
          console.log('Save data:', data);
        }}
        onAddNew={() => {
          console.log('Add new FAQ');
        }}
      />

      {/* FAQ List */}
      <Box
        sx={{
          width: '100%',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          background: '#ffffff99',
          boxShadow: `0px 0px 0px 1px rgb(255, 255, 255, rgb(255, 255, 255)), 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)`,
          border: '2px solid #fff',
          borderRadius: {xs: '24px'},
          backdropFilter: 'blur(15px)',
          overflowY: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            width: '8px'
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '4px'
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '4px',
            '&:hover': {
              background: '#555'
            }
          }
        }}
      >
      {faqData.map((item, index) => (
        <React.Fragment key={item.id}>
          <Box
            sx={{
              display: 'flex',
              gap: '12px',
              alignItems: 'flex-start',
              paddingBottom: index < faqData.length - 1 ? '12px' : 0,
              backgroundColor: selectedFAQId === item.id ? '#F0F9FF' : 'transparent',
              borderRadius: '8px',
              padding: selectedFAQId === item.id ? '8px' : '0',
              transition: 'background-color 0.2s ease'
            }}
          >
            {/* X Icon */}
            <Box
              sx={{
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                marginTop: '4px'
              }}
            >
              <Image
                src={closeIcon}
                alt="Close"
                width={20}
                height={20}
                style={{width: '100%', height: '100%'}}
              />
            </Box>

            {/* Number Circle */}
            <Box
              sx={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#2D3748',
                  fontFamily: '"Inter", sans-serif'
                }}
              >
                {item.id}
              </Typography>
            </Box>

            {/* Content Section */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                gap: '24px'
              }}
            >
              {/* German Section */}
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  padding: '8px'
                }}
              >
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#2D3748',
                    fontFamily: '"Inter", sans-serif',
                    lineHeight: '1.5'
                  }}
                >
                  {item.germanQuestion}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#4A5568',
                    fontFamily: '"Inter", sans-serif',
                    lineHeight: '1.6'
                  }}
                >
                  {item.germanAnswer}
                </Typography>
              </Box>

              {/* English Section */}
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  padding: '8px',
                  position: 'relative'
                }}
              >
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#2D3748',
                    fontFamily: '"Inter", sans-serif',
                    lineHeight: '1.5'
                  }}
                >
                  {item.englishQuestion}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#4A5568',
                    fontFamily: '"Inter", sans-serif',
                    lineHeight: '1.6'
                  }}
                >
                  {item.englishAnswer}
                </Typography>
                {/* Edit Icon */}
                <Box
                  onClick={() => onEdit(item)}
                  sx={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#000',
                    '&:hover': {
                      opacity: 0.7
                    }
                  }}
                >
                  <Image
                    src={editIcon}
                    alt="Edit"
                    width={20}
                    height={20}
                    style={{width: '100%', height: '100%'}}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          {index < faqData.length - 1 && (
            <Divider
              sx={{
                borderColor: '#E2E8F0',
                margin: '0 -24px'
              }}
            />
          )}
        </React.Fragment>
      ))}
      </Box>
    </Box>
  );
}

