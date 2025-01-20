'use client';

import { Button } from '@/components/ui/button';
import { supportLocalesList } from '@/constans/constans.support.locales';
import useChangeLocale from '@/hooks/useChangeLocale';
import useToggleOpen from '@/hooks/useToggleOpen';
import { ChevronDown } from 'lucide-react';

export default function MobileLanguageChanger() {
  const { dispalyIcon, handleChange } = useChangeLocale();
  const { open, handleToggleOpen } = useToggleOpen();

  return (
    <div>
      <Button
        className={`  w-full text-text_prymery_color justify-between`}
        variant={'link'}
        onClick={handleToggleOpen}
      >
        <div className='flex items-center gap-2 body_medium'>
          <div className='w-6 h-6'>{dispalyIcon?.icon}</div>
          {dispalyIcon?.name}
        </div>
        <ChevronDown
          className={`stroke-primary ${open && 'rotate-180'} transition-all duration-300 ease-in-out`}
        />
      </Button>

      <ul
        className={`transition-all duration-300 ease-in-out overflow-hidden ml-2 space-y-2 ${
          open ? 'max-h-96  pt-2 opacity-100' : 'max-h-0 pt-0 opacity-100'
        } flex flex-col gap-2 `}
      >
        {supportLocalesList.map((el) => (
          <Button
            key={el.name}
            variant={'link'}
            className='justify-start text-text_prymery_color body_medium'
            onClick={() => handleChange(el.value)}
          >
            <div className='w-6 h-6'> {el.icon} </div>
            {el.shortName}
          </Button>
        ))}
      </ul>
    </div>
  );
}
