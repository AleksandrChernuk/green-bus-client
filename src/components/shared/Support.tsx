'use client' 


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IconsPhone } from "../icons/IconsPhone";
import { supportNavlinks } from '@/constans/constans.supportNavlinks';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import useToggleOpen from '@/hooks/useToggleOpen';
import { Button } from '../ui/button';
import { Phone } from 'lucide-react';

export const Support = () => {
  const { open, handleToggleOpen } = useToggleOpen();
  const { t } = useTranslation(['common']);

  return (
    <div className='relative flex items-center justify-center'>
      <Button
        className={`text-text_prymery_color body_medium gap-0.5`}
        variant={'link'}
        onClick={handleToggleOpen}
        onBlur={() => handleToggleOpen()}
      >
        <Phone size={24} className='stroke-text_prymery_color' />
        {t('mainNavSupportLink')}
      </Button>

      {open && (
        <ul
          className={`absolute top-10  z-50 p-4 border border-black dark:border-dark_mode_main1 dark:bg-black_2_for_text  rounded-2xl   bg-white  overflow-hidden max-h-fit min-w-fit space-y-2 `}
        >
          {supportNavlinks.map((item, idx) => (
            <li key={`${item.title}+${idx}`}>
              <Link
                href={item.src}
                className='flex flex-row items-center justify-start gap-2 p-1 body_medium'
              >
                <span className='w-[22.5px] h-[22.5px]'>{item.icon && item.icon}</span>
                <span className='text-base font-normal text-black dark:text-grayy'>
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
