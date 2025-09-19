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
    '/help': {
      de: '/hilfe'
    },
    '/imprint': {
      de: '/impressum'
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
