import {Box, Typography, Divider} from '@mui/material';
import React from 'react';
import Image from 'next/image';
import editIcon from '@/assets/svgs/editIcon.svg';
import closeIcon from '@/assets/svgs/closeIcon.svg';

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

// FAQ Data for Homepage tab
const faqDataHomepage: FAQItem[] = [
  {
    id: 1,
    germanQuestion: 'Was ist Fahrly?',
    germanAnswer:
      'Fahrly ist ein Service, um Fahrschüler und Fahrschulen auf einer zentralen Plattform zu verbinden. Fahrschüler können hier ihren Lernfortschritt verfolgen, Termine buchen und mit ihrer Fahrschule kommunizieren. Fahrschulen nutzen unsere Plattform, um ihre Schüler zu verwalten, Termine zu koordinieren und ihre Kommunikation zu optimieren.',
    englishQuestion: 'What is Fahrly?',
    englishAnswer:
      'Fahrly is a service that connects driving students and driving schools on a central platform. Students can track their learning progress, book appointments, and communicate with their driving school. Driving schools use our platform to manage their students, coordinate appointments, and optimize their communication.'
  },
  {
    id: 2,
    germanQuestion: 'Wo muss ich hin um meinen Führerschein zu beantragen?',
    germanAnswer:
      'Den Antrag reichst du bei der für deinen Wohnsitz zuständigen Fahrerlaubnisbehörde ein. Bei Eingabe deines Wohnsitzes zeigen wir dir, welche Behörde für dich zuständig ist. Außerdem kann deine Fahrschule dich bei diesem Schritt oft unterstützen.',
    englishQuestion: "What do I need to apply for a driver's license?",
    englishAnswer:
      "To apply for a driver's license, you will generally need the following documents: • Identity card or passport • Biometric passport photo • Eye test certificate (not older than two years) • Proof of participation in a first aid course • If applicable, registration confirmation from your driving school"
  },
  {
    id: 3,
    germanQuestion: 'Was brauche ich um den Führerschein zu beantragen?',
    germanAnswer:
      'Um einen Führerschein zu beantragen, benötigst du in der Regel folgende Unterlagen: • Personalausweis oder Reisepass • Biometrisches Passfoto • Sehtestbescheinigung (nicht älter als zwei Jahre) • Nachweis über die Teilnahme an einem Erste-Hilfe-Kurs • ggf. die Anmeldebestätigung deiner Fahrschule',
    englishQuestion: "Where do I have to go to apply for my driver's license?",
    englishAnswer:
      "You submit the application to the driver's license authority responsible for your place of residence. When you enter your place of residence, we will show you which authority is responsible for you. Your driving school can often also assist you with this step."
  },
  {
    id: 4,
    germanQuestion: 'Welche Auto Führerschein Klassen gibt es?',
    germanAnswer:
      'Es gibt sechs Führerscheinklassen, nämlich A, B, C, D, l und T. Die gängigsten Autoführerscheine sind die Klassen B und BF17. • Klasse B: Damit darfst du Kraftfahrzeuge bis 3,5 Tonnen Gesamtmasse fahren. Das Mindestalter beträgt 18 Jahre. • Klasse BF17: Das ist das „Begleitete Fahren ab 17". Hier gelten die gleichen Bedingungen wie bei Klasse B, aber du darfst nur in Begleitung einer eingetragenen Person fahren. Auf unserer Website im Bereich Führerscheinklassen kannst du alle Klassen und ihre Unterschiede sehen.',
    englishQuestion: 'What driving license classes are there?',
    englishAnswer:
      "There are six driver's license classes: A, B, C, D, I, and T. The most common car driver's licenses are classes B and BF17. • Class B: This allows you to drive motor vehicles with a gross vehicle weight of up to 3.5 tons. The minimum age is 18. • Class BF17: This is \"accompanied driving from 17.\" The same conditions apply as for class B, but you may only drive if accompanied by a registered adult. You can see all the classes and their differences on our website in the driver's license classes section."
  },
  {
    id: 5,
    germanQuestion: 'Wie viele Theoriestunden muss man machen?',
    germanAnswer:
      'Die Anzahl der Theoriestunden hängt von der Führerscheinklasse ab. Für die Klassen A und B sind 12 Doppelstunden Grundstoff und 2 Doppelstunden klassenspezifischer Unterricht vorgeschrieben. Bei einer Erweiterung (z. B. wenn du bereits einen Führerschein haben) reduziert sich die Anzahl der Gesamtstunden auf 8. Die Gesamtstunden für die Klasse C beträgt 18 und für die Klasse D 20 Stunden.',
    englishQuestion: 'How many theory lessons do you have to take?',
    englishAnswer:
      "The number of theory lessons depends on the driver's license class. For classes A and B, 12 double lessons of basic theory and two double lessons of class-specific instruction are required. If you extend your license (e.g., if you already have a driver's license), the total number of lessons is reduced to 8. The total number of lessons for class C is 18, and for class D, 20."
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
    englishQuestion: "How do I get my driver's license after the test?",
    englishAnswer:
      'After passing the practical test, you will receive your driving license either directly from the examiner or a few days later by mail or by picking it up from the driving license authority – this varies depending on the region.'
  },
  {
    id: 8,
    germanQuestion: 'Wann muss mein Führerschein umgetauscht werden?',
    germanAnswer:
      'Alle Führerscheine, die vor dem 19. Januar 2013 ausgestellt wurden, müssen stufenweise in den neuen EU-Kartenführerschein umgetauscht werden. Die Fristen sind nach Ihrem Geburtsjahr oder dem Ausstellungsdatum des Führerscheins gestaffelt. In der Regel muss der neue Führerschein alle 15 Jahre erneuert werden, wobei die Fahrerlaubnis selbst unbefristet bleibt.',
    englishQuestion: "When does my driver's license need to be exchanged?",
    englishAnswer:
      'All driving licenses issued before January 19, 2013, must be gradually exchanged for the new EU card-based driving license. The deadlines are staggered according to your year of birth or the date the driving license was issued. As a general rule, the new driving license must be renewed every 15 years, although the driving license itself remains valid for an unlimited period.'
  },
  {
    id: 9,
    germanQuestion: 'Wie schreibt man einen Führerschein um?',
    germanAnswer:
      'Ein ausländischer Führerschein ist in Deutschland nur für eine begrenzte Zeit gültig (meist 6 Monate nach Wohnsitznahme). Je nach Herkunftsland deines Führerscheins kann eine theoretische und/oder praktische Prüfung erforderlich sein. Es gibt Ausnahmen, wenn zwischen Deutschland und dem Ausstellerstaat ein Abkommen über die gegenseitige Anerkennung besteht. Für die Umschreibung muss du bei der zuständigen Führerscheinstelle deines Wohnorts einen Antrag auf Umschreibung stellen. Wir begleiten dich Schritt für Schritt durch diesen Prozess bei der Anmeldung in unserer Website.',
    englishQuestion: "How do you rewrite/convert a driver's license?",
    englishAnswer:
      "A foreign driver's license is only valid in Germany for a limited period of time (usually six months after taking up residence). Depending on the country of origin of your driver's license, a theory and/or practical test may be required. Exceptions apply if a mutual recognition agreement exists between Germany and the issuing country. To convert your license, you must submit an application to the relevant driver's license office in your place of residence. We will guide you step by step through this process during the registration process on our website."
  }
];

// FAQ Data for Students tab
const faqDataStudents: FAQItem[] = [
  {
    id: 1,
    germanQuestion: 'Wie kann ich meine Profildaten ändern?',
    germanAnswer:
      'Gehe in deinem Dashboard zu „Einstellungen => Konto". Dort kannst du deine Kontaktdaten, Passwort und weitere Informationen jederzeit anpassen.',
    englishQuestion: 'How can I change my profile information?',
    englishAnswer:
      'Go to "Settings => Account" on your dashboard. There you can edit your contact details, password, and other information at any time.'
  },
  {
    id: 2,
    germanQuestion:
      'Ich sehe keine passenden Fahrschulen in meiner Umgebung – woran liegt das?',
    germanAnswer:
      'Möglicherweise gibt es aktuell keine registrierten Partnerfahrschulen in deiner Region. Wir erweitern unser Netzwerk ständig!',
    englishQuestion:
      "I don't see any suitable driving schools in my area – why is that?",
    englishAnswer:
      "There may not currently be any registered partner driving schools in your area. We're constantly expanding our network!"
  },
  {
    id: 3,
    germanQuestion:
      'Wie kann ich meine gebuchte Theorie- oder Fahrstunde stornieren oder verschieben?',
    germanAnswer:
      'Um gebuchte Termine bei deiner Fahrschule zu stornieren, klickst du einfach in der Tagesübersicht im Kalender auf das „X"-Symbol neben jedem Termin. Die Stornierung von Theorie- und Praxisprüfungen ist jedoch nicht möglich. Wende dich hierfür bitte direkt an deine Fahrschule. Du kannst deine Fahrschule in deinem Dashboard unter „Nachricht" kontaktieren. Um Termine zu verschieben, storniere diese zunächst und buche dann neue aus den verfügbaren Zeitfenstern.',
    englishQuestion:
      'How can I cancel or reschedule my booked theory or driving lesson?',
    englishAnswer:
      'To cancel booked appointments with your driving school, simply click the "X" symbol next to the respective appointment in the daily overview of the calendar. However, theory and practical exams cannot be canceled. You must contact your driving school directly for this. You can contact your driving school in your dashboard under "Message". To reschedule appointments, first cancel them and then book new ones from the available time slots.'
  },
  {
    id: 4,
    germanQuestion:
      'Meine Fahrschule antwortet nicht auf meine Nachrichten. Was kann ich tun?',
    germanAnswer:
      'Manche Fahrschulen benötigen etwas Zeit, um auf Anfragen zu reagieren – besonders während Stoßzeiten. Sollte innerhalb von 3 Werktagen keine Rückmeldung erfolgen, empfehlen wir, die Fahrschule erneut über unser System zu kontaktieren.',
    englishQuestion:
      "My driving school isn't responding to my messages. What can I do?",
    englishAnswer:
      "Some driving schools take some time to respond to inquiries, especially during peak times. If you don't hear back within three business days, we recommend contacting the driving school again via our system."
  },
  {
    id: 5,
    germanQuestion: 'Wie kann ich meine Fahrschule wechseln?',
    germanAnswer:
      'Du kannst jederzeit eine neue Fahrschule über unsere Plattform suchen und buchen. Offene Buchungen oder Verträge mit deiner aktuellen Fahrschule musst du jedoch selbst klären. Informiere beide Fahrschulen über den Wechsel, um Missverständnisse zu vermeiden.',
    englishQuestion: 'How can I change my driving school?',
    englishAnswer:
      'You can search for and book a new driving school through our platform at any time. However, you will need to resolve any outstanding bookings or contracts with your current driving school yourself. Please inform both driving schools about the change to avoid misunderstandings.'
  },
  {
    id: 6,
    germanQuestion:
      'Kann ich meine Prüfungsanmeldung über die Plattform vornehmen?',
    germanAnswer:
      'Nein. Unsere Plattform kann leider nicht Termine direkt bei TÜV buchen. Die Prüfungstermine werden in der Regel von deiner Fahrschule gebucht und dir in deinem Dashboard angezeigt.',
    englishQuestion: 'Can I register for the exam via the platform?',
    englishAnswer:
      'No. Unfortunately, our platform cannot book appointments directly with TÜV. Exam appointments are usually booked by your driving school and displayed on your dashboard.'
  },
  {
    id: 7,
    germanQuestion: 'Warum sehe ich nicht alle verfügbaren Fahrstunden?',
    germanAnswer:
      'Manche Fahrschulen zeigen nur bestimmte Termine online an. Falls du keine passenden Fahrstunden findest, kontaktiere deine Fahrschule direkt – oft gibt es zusätzliche Kapazitäten, die nicht online gebucht werden können.',
    englishQuestion: "Why can't I see all available driving lessons?",
    englishAnswer:
      "Some driving schools only list specific dates online. If you can't find suitable driving lessons, contact your driving school directly—they often have additional capacity that can't be booked online."
  },
  {
    id: 8,
    germanQuestion:
      'Meine Frage ist hier nicht dabei – wie kann ich den Support erreichen?',
    germanAnswer:
      'Falls deine Frage nicht beantwortet wurde, nutze bitte das Kontaktformular auf dieser Seite oder schreibe eine E-Mail. Wir versuchen so schnell wie möglich antworten.',
    englishQuestion:
      "My question isn't listed here – how can I contact support?",
    englishAnswer:
      "If your question hasn't been answered, please use the contact form on this page or send us an email. We'll try to respond as quickly as possible."
  }
];

// FAQ Data for Schools tab
const faqDataSchools: FAQItem[] = [
  {
    id: 1,
    germanQuestion: 'Wie kann ich meine Profildaten ändern?',
    germanAnswer:
      'Gehe in deinem Dashboard zu „Einstellungen => Konto". Dort kannst du deine Kontaktdaten, Passwort und weitere Informationen jederzeit anpassen.',
    englishQuestion: 'How can I change my profile information?',
    englishAnswer:
      'Go to "Settings => Account" on your dashboard. There you can edit your contact details, password, and other information at any time.'
  },
  {
    id: 2,
    germanQuestion:
      'Ein Schüler hat storniert, aber der Termin ist noch als „gebucht" markiert. Wie korrigiere ich das?',
    germanAnswer:
      'Gehe zu „Kalender" und wähle den betreffenden Termin aus. Klicke auf „Stift-Symbol" und dann auf „Stornieren". Der Platz wird automatisch wieder freigegeben.',
    englishQuestion:
      'A student has canceled, but the appointment is still marked as "booked." How do I correct this?',
    englishAnswer:
      'Go to "Calendar" and select the appointment in question. Click the "pencil icon" and then "Cancel." The slot will be automatically released.'
  },
  {
    id: 3,
    germanQuestion: 'Wie kann ich meine Zahlungsinformationen ändern?',
    germanAnswer:
      'Gehe im Dashboard auf „Einstellungen => Zahlung". Dort kannst du deine Zahlungsdaten (z. B. Kreditkarte oder SEPA-Lastschrift) aktualisieren oder eine neue Zahlungsmethode hinzufügen. Änderungen werden ab dem nächsten Abrechnungszeitraum übernommen.',
    englishQuestion: 'How can I change my payment information?',
    englishAnswer:
      'In the dashboard, go to "Settings => Payment." There you can update your payment details (e.g., credit card or SEPA direct debit) or add a new payment method. Changes will take effect starting with the next billing period.'
  },
  {
    id: 4,
    germanQuestion: 'Wie kann ich mein Abo upgraden oder downgraden?',
    germanAnswer:
      'Du kannst dein Paket jederzeit über „Einstellungen" ändern. Ein Upgrade wird sofort wirksam, ein Downgrade erfolgt zum Ende der aktuellen Abrechnungsperiode.',
    englishQuestion: 'How can I upgrade or downgrade my subscription?',
    englishAnswer:
      'You can change your package at any time via "Settings." An upgrade takes effect immediately; a downgrade takes effect at the end of the current billing period.'
  },
  {
    id: 5,
    germanQuestion: 'Meine Rechnungen sind nicht korrekt – was soll ich tun?',
    germanAnswer:
      'Bitte prüfe deine Abrechnungen im Bereich „Rechnung". Sollte dir ein Fehler auffallen, kontaktiere bitte unseren Support mit der entsprechenden Rechnungsnummer. Wir kümmern uns schnellstmöglich um eine Klärung.',
    englishQuestion: 'My invoices are incorrect – what should I do?',
    englishAnswer:
      'Please check your invoices in the "Invoice" section. If you notice an error, please contact our support team with the corresponding invoice number. We will resolve the issue as quickly as possible.'
  },
  {
    id: 6,
    germanQuestion: 'Kann ich mehrere Standorte in meinem Konto verwalten?',
    germanAnswer:
      'Nein, aktuell ist es nicht möglich, mehrere Standorte innerhalb eines einzelnen Kontos zu verwalten. Jede Fahrschule benötigt ein separates Konto pro Standort. Wenn du mehrere Konten verwalten möchtest, kontaktiere bitte unseren Support – wir helfen dir gerne bei der bestmöglichen Lösung.',
    englishQuestion: 'Can I manage multiple locations in my account?',
    englishAnswer:
      "No, it's currently not possible to manage multiple locations within a single account. Each driving school requires a separate account for each location. If you would like to manage multiple accounts, please contact our support team – we'll be happy to help you find the best solution."
  },
  {
    id: 7,
    germanQuestion: 'Wie lösche ich mein Konto?',
    germanAnswer:
      'Die Kontolöschung ist über das Dashboard unter „Einstellungen" möglich. Bitte beachte, dass alle Daten dauerhaft entfernt werden und dieser Schritt nicht rückgängig gemacht werden kann.',
    englishQuestion: 'How do I delete my account?',
    englishAnswer:
      'You can delete your account via the dashboard under "Settings." Please note that all data will be permanently deleted and this step cannot be undone.'
  },
  {
    id: 8,
    germanQuestion:
      'Meine Frage ist hier nicht dabei – wie kann ich den Support erreichen?',
    germanAnswer:
      'Falls deine Frage nicht beantwortet wurde, nutze bitte das Kontaktformular auf dieser Seite oder schreibe eine E-Mail. Wir versuchen so schnell wie möglich antworten.',
    englishQuestion:
      "My question isn't listed here – how can I contact support?",
    englishAnswer:
      "If your question hasn't been answered, please use the contact form on this page or send us an email. We'll try to respond as quickly as possible."
  }
];

// FAQ Data for Trainers tab
const faqDataTrainers: FAQItem[] = [
  {
    id: 1,
    germanQuestion: 'Wie kann ich meine Profildaten ändern?',
    germanAnswer:
      'Gehe in deinem Dashboard zu „Einstellungen => Konto". Dort kannst du deine Kontaktdaten, Passwort und weitere Informationen jederzeit anpassen.',
    englishQuestion: 'How can I change my profile information?',
    englishAnswer:
      'Go to "Settings => Account" on your dashboard. There you can edit your contact details, password, and other information at any time.'
  },
  {
    id: 2,
    germanQuestion:
      'Ein Schüler hat storniert, aber der Termin ist noch als „gebucht" markiert. Wie korrigiere ich das?',
    germanAnswer:
      'Gehe zu „Kalender" und wähle den betreffenden Termin aus. Klicke auf „Stift-Symbol" und dann auf „Stornieren". Der Platz wird automatisch wieder freigegeben.',
    englishQuestion:
      'A student has canceled, but the appointment is still marked as "booked." How do I correct this?',
    englishAnswer:
      'Go to "Calendar" and select the appointment in question. Click the "pencil icon" and then "Cancel." The slot will be automatically released.'
  },
  {
    id: 3,
    germanQuestion: 'Wie melde ich mich in meinem Fahrlehrer-Dashboard an?',
    germanAnswer:
      'Du kannst dich unter Anmeldung-Seite mit den Zugangsdaten anmelden, die dir deine Fahrschule gegeben hat. Falls du keine Anmeldedaten hast, frag einfach bei deinem Fahrschul-Administrator nach.',
    englishQuestion: 'How do I log in to my driving instructor dashboard?',
    englishAnswer:
      "You can log in on the registration page using the login details provided by your driving school. If you don't have login details, simply ask your driving school administrator."
  },
  {
    id: 4,
    germanQuestion:
      'Wie sehe ich meinen Stundenplan für den Tag oder die Woche?',
    germanAnswer:
      'Dein Stundenplan wird direkt auf der Startseite angezeigt. Änderungen von der Fahrschule oder von Schülern siehst du sofort.',
    englishQuestion: 'How do I view my schedule for the day or the week?',
    englishAnswer:
      'Your timetable is displayed directly on the homepage. You will see any changes made by the driving school or other students immediately.'
  },
  {
    id: 5,
    germanQuestion:
      'Was mache ich, wenn ein Schüler kurzfristig eine Fahrstunde absagt?',
    germanAnswer:
      'Du bekommst eine Benachrichtigung, wenn ein Schüler absagt. Bei Terminplanung kannst du Stornierungslimit bestimmen. Außerdem kannst du den Schüler direkt über das Nachrichtensystem kontaktieren, um einen neuen Termin zu finden.',
    englishQuestion:
      'What do I do if a student cancels a driving lesson at short notice?',
    englishAnswer:
      'You will receive a notification if a student cancels. When scheduling appointments, you can set a cancellation limit. You can also contact the student directly through the messaging system to find a new appointment time.'
  },
  {
    id: 6,
    germanQuestion: 'Wie kann ich den Fortschritt eines Schülers melden?',
    germanAnswer:
      'Bei der „Schülerakte" kannst du Änderungen vornehmen. Einige Änderungen sind nur für Fahrschulen erlaubt. Die Änderungen werden gleichzeitig den Schülern und Fahrschulen angezeigt.',
    englishQuestion: "How can I report a student's progress?",
    englishAnswer:
      'You can make changes to the "student file". Some changes are only permitted for driving schools. The changes will be displayed to both the students and the driving schools simultaneously.'
  },
  {
    id: 7,
    germanQuestion: 'Kann ich über die Plattform mit Schülern schreiben?',
    germanAnswer:
      'Ja, einfach im Tab „Nachricht" eine Nachricht schreiben. Alle Chats werden gespeichert, damit die Fahrschule bei Bedarf nachschauen kann.',
    englishQuestion: 'Can I communicate with students through the platform?',
    englishAnswer:
      'Yes, simply write a message in the "Message" tab. All chats are saved so that the driving school can review them if needed.'
  },
  {
    id: 8,
    germanQuestion: 'Wie trage ich meine Verfügbarkeit ein?',
    germanAnswer:
      'Gehe auf „Kalender" und wähle Terminplanung aus. Das System aktualisiert automatisch deinen Plan. Fahrschulen können auch deine Terminplanung sehen und aktualisieren. Diese Änderungen werden dir auch angezeigt.',
    englishQuestion: 'How do I enter my time availability?',
    englishAnswer:
      'Go to "Calendar" and select "Schedule". The system will automatically update your schedule. Driving schools can also view and update your schedule. These changes will also be displayed to you.'
  }
];

// Email Templates for Emails tab
const emailData: FAQItem[] = [
  {
    id: 1,
    germanQuestion: 'Setzen Sie Ihr Passwort zurück',
    germanAnswer:
      "Hallo [User's First Name],\n\nWir haben eine Anfrage erhalten, Ihr Passwort auf [Your Website Name] zurückzusetzen. Wenn Sie diese Anfrage nicht gestellt haben, können Sie diese E-Mail einfach ignorieren. Ihr Konto ist sicher.\n\nUm Ihr Passwort zurückzusetzen, klicken Sie bitte auf den folgenden Link:\n\n[Passwort zurücksetzen Link]\n\nDieser Link ist aus Sicherheitsgründen [Zeitlimit, z. B. 30 Minuten] gültig. Wenn Sie das Passwort nicht innerhalb dieses Zeitrahmens zurücksetzen, müssen Sie eine neue Anfrage für das Zurücksetzen des Passworts stellen.\n\nBei Fragen oder Problemen können Sie sich gerne an unser Support-Team unter [Support E-Mail] wenden.\n\nMit freundlichen Grüßen,\nDas Team von [Your Website Name]",
    englishQuestion: 'Reset Your Password',
    englishAnswer:
      "Hello [User's First Name],\n\nWe've received a request to reset the password for your account on [Your Website Name]. If you didn't request this, please ignore this email. Your account is safe.\n\nTo reset your password, click the link below:\n\n[Reset Password Link]\n\nThis link will expire in [Time Limit, e.g., 30 minutes] for your security. If you don't reset your password within this time frame, you'll need to request a new password reset.\n\nIf you have any questions or need further assistance, feel free to reach out to our support team at [Support Email].\n\nBest regards,\nThe [Your Website Name] Team"
  }
];

// Function to get FAQ data based on active tab
const getFAQDataByTab = (activeTab: string): FAQItem[] => {
  switch (activeTab) {
    case 'FAQ Homepage':
      return faqDataHomepage;
    case 'FAQ Students':
      return faqDataStudents;
    case 'FAQ Schools':
      return faqDataSchools;
    case 'FAQ Trainers':
      return faqDataTrainers;
    case 'Emails':
      return emailData;
    default:
      return faqDataHomepage;
  }
};

export default function FAQList({
  onEdit,
  selectedFAQId,
  activeTab
}: FAQListProps) {
  const faqData = getFAQDataByTab(activeTab);

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
      {faqData.length === 0 ? (
        <Typography
          sx={{
            textAlign: 'center',
            color: '#4A5568',
            fontSize: '14px',
            fontFamily: '"Inter", sans-serif',
            padding: '24px'
          }}
        >
          {activeTab === 'Emails'
            ? 'No email templates available for this tab.'
            : 'No FAQ items available for this tab.'}
        </Typography>
      ) : (
        faqData.map((item, index) => (
          <React.Fragment key={item.id}>
            <Box
              sx={{
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
                paddingBottom: index < faqData.length - 1 ? '12px' : 0,
                backgroundColor:
                  selectedFAQId === item.id ? '#F0F9FF' : 'transparent',
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
                      fontSize: {xs: '16px', md: '20px'},
                      fontWeight: '800 !important',
                      color: '#2D3748',
                      fontFamily: '"Inter", sans-serif',
                      lineHeight: '1.5'
                    }}
                  >
                    {item.germanQuestion}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {xs: '14px', md: '16px'},
                      fontWeight: 400,
                      color: '#4A5568',
                      fontFamily: '"Inter", sans-serif',
                      lineHeight: '1.6',
                      whiteSpace: activeTab === 'Emails' ? 'pre-line' : 'normal'
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
                      fontSize: {xs: '16px', md: '20px'},
                      fontWeight: 800,
                      color: '#2D3748',
                      fontFamily: '"Inter", sans-serif',
                      lineHeight: '1.5'
                    }}
                  >
                    {item.englishQuestion}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {xs: '14px', md: '16px'},
                      fontWeight: 400,
                      color: '#4A5568',
                      fontFamily: '"Inter", sans-serif',
                      lineHeight: '1.6',
                      whiteSpace: activeTab === 'Emails' ? 'pre-line' : 'normal'
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
                  borderColor: '#E2E8F0'
                }}
              />
            )}
          </React.Fragment>
        ))
      )}
    </Box>
  );
}
