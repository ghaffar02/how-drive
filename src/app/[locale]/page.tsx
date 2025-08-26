import {Locale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';

import HomePage from './home/page';

export default function IndexPage({params}: PageProps<'/[locale]'>) {
  const {locale} = use(params);
  setRequestLocale(locale as Locale);
  return <HomePage />;
}
