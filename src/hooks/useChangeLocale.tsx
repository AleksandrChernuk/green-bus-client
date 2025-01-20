'use client';

import { useTranslation } from 'react-i18next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import i18NextConfig from '@/i18next.config';
import { IconFlagUA } from '@/components/icons/IconFlagUA';
import { IconFlagEnglish } from '@/components/icons/IconFlagEnglish';
import { IconFlagRus } from '@/components/icons/IconFlagRus';

export default function useChangeLocale() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const searchParams = useSearchParams();

  const dispalyIcon = (key: string) => {
    switch (key) {
      case 'uk':
        return { icon: <IconFlagUA />, name: 'Українська мова (UK)', shortName: 'Українська' };

      case 'en':
        return { icon: <IconFlagEnglish />, name: 'English language (EN)', shortName: 'English' };

      case 'ru':
        return { icon: <IconFlagRus />, name: 'Русский язык (RU)', shortName: 'Русский' };

      default:
        break;
    }
  };

  const handleChange = async (value: string) => {
    if (value === currentLocale) return;

    await i18n.changeLanguage(value);

    const queryString = searchParams?.toString();
    const query = queryString ? `?${queryString}` : '';

    if (currentLocale === i18NextConfig.i18n.defaultLocale) {
      router.push('/' + value + currentPathname + query);
    } else if (currentPathname) {
      const newPath = currentPathname.replace(`/${currentLocale}`, `/${value}`);
      router.push(newPath + query);
    }
  };

  return { handleChange, dispalyIcon: dispalyIcon(currentLocale) };
}
