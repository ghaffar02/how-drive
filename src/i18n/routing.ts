import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/login': {
      de: '/anmelden'
    },
    '/signup': {
      de: '/registrieren'
    },
    '/forgot-password': {
      de: '/passwort-vergessen'
    },
    '/reset-password': {
      de: '/passwort-zuruecksetzen'
    },
    '/about-us': {
      de: '/ueber-uns'
    },
    '/pricing': {
      de: '/preis'
    },
    '/contact': {
      de: '/kontakt'
    },
    '/driving-schools-home': {
      de: '/fahrschulen-home'
    },
    '/driving-license-class-a': {
      de: '/fuehrerscheinklasse-a'
    },
    '/driving-license-class-b': {
      de: '/fuehrerscheinklasse-b'
    },
    '/driving-license-class-c': {
      de: '/fuehrerscheinklasse-c'
    },
    '/driving-license-class-d': {
      de: '/fuehrerscheinklasse-d'
    },
    '/driving-license-class-l-and-t': {
      de: '/fuehrerscheinklasse-l-und-t'
    },
    '/rewrite-of-driving-licenses': {
      de: '/umschreiben-der-fuehrerscheine'
    },
    '/driving-schools': {
      de: '/fahrschulen'
    },
    '/driving-schools/fahrschule-master': {
      de: '/fahrschulen/fahrschule-master'
    },
    '/help': {
      de: '/hilfe'
    },
    '/help/getting-started': {
      de: '/hilfe/erste-schritte'
    },
    '/help/for-students': {
      de: '/hilfe/fuer-fahrschueler'
    },
    '/help/for-schools': {
      de: '/hilfe/fuer-fahrschulen'
    },
    '/help/for-trainers': {
      de: '/hilfe/fuer-fahrlehrer'
    },
    '/help/data-policies': {
      de: '/hilfe/datenrichtlinien'
    },
    '/help/troubleshooting': {
      de: '/hilfe/fehlerbehebung'
    },
    '/imprint': {
      de: '/impressum'
    },
    '/pwa-installation': {
      de: '/pwa-installation'
    },
    '/privacy': {
      de: '/datenschutz'
    },

    '/terms': {
      de: '/agb'
    },
    '/cookies': {
      de: '/cookies'
    },
    '/404': {
      de: '/404'
    }
  }
});
