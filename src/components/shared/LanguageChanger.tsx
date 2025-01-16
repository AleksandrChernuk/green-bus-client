"use client";

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select-locale';




import { IconFlagUA } from '../icons/IconFlagUA';
import { IconFlagEnglish } from '../icons/IconFlagEnglish';
import { IconFlagRus } from '../icons/IconFlagRus';
import i18NextConfig from '@/i18next.config';


type Props = {
  isMobile?: boolean;
};

export default function SelectLocale ({ isMobile }: Props)   {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = async (value: string) => {
    if (value === currentLocale) return;

    await i18n.changeLanguage(value);

    const queryString = searchParams?.toString();
    const query = queryString ? `?${queryString}` : "";

    if (currentLocale === i18NextConfig.i18n.defaultLocale) {
      router.push("/" + value + currentPathname + query);
    } else if (currentPathname) {
      const newPath = currentPathname.replace(`/${currentLocale}`, `/${value}`);
      router.push(newPath + query);
    }
  };

  const displayedValue = (key: string) => {
    switch (key) {
      case "uk":
        return isMobile ? (
          <>
            <IconFlagUA className={"w-7 h-7"} />
            Українська
          </>
        ) : (
          <IconFlagUA className={"w-7 h-7"} />
        );

      case "en":
        return isMobile ? (
          <>
            <IconFlagEnglish className={"w-7 h-7"} />
            English
          </>
        ) : (
          <IconFlagEnglish className={"w-7 h-7"} />
        );

      case "ru":
        return isMobile ? (
          <>
            <IconFlagRus className={"w-7 h-7"} />
            ПидаРасия
          </>
        ) : (
          <IconFlagRus className={"w-7 h-7"} />
        );

      default:
        return isMobile ? (
          <>
            <IconFlagUA className={"w-7 h-7"} />
            Українська
          </>
        ) : (
          <IconFlagUA className={"w-7 h-7"} />
        );
    }
  };

  return (
    <Select
      value={currentLocale}
      onValueChange={(value) => {
        handleChange(value);
      }}
    >
      <SelectTrigger className="w-full p-0 border-none ring-offset-0 ring-0 focus:ring-0 focus:ring-offset-0 bg-inherit">
        <SelectValue>{displayedValue(currentLocale)}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="uk">
            <IconFlagUA />
            Українська
          </SelectItem>
          <SelectItem value="en">
            <IconFlagEnglish />
            English
          </SelectItem>
          <SelectItem value="ru">
            <IconFlagRus />
            ПидаРасия
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

