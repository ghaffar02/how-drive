import {Locale, useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';

export default function PathnamesPage({
  params
}: PageProps<'/[locale]/pathnames'>) {
  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations('PathnamesPage');

  return (
    <div className="max-w-[490px]">
      {t.rich('description', {
        p: (chunks) => <p className="mt-4">{chunks}</p>,
        code: (chunks) => <code className="font-mono text-white">{chunks}</code>
      })}
    </div>
  );
}
