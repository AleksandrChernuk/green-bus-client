"use client";

import useChangeLocale from '@/hooks/useChangeLocale';
import useToggleOpen from '@/hooks/useToggleOpen';
import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import { supportLocalesList } from '@/constans/constans.support.locales';

export default function SelectLocale() {
  const { dispalyIcon, handleChange } = useChangeLocale();
  const { open, handleToggleOpen, handleSetOpen } = useToggleOpen();
  return (
    <div
      className='relative flex items-center justify-center'
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          handleSetOpen(false);
        }
      }}
    >
      <Button
        className={`text-text_prymery_color gap-0.5`}
        variant={'link'}
        onClick={handleToggleOpen}
      >
        <div className='w-7 h-7'>{dispalyIcon?.icon}</div>
        <ChevronDown
          size={24}
          className={`stroke-text_prymery_color ${open && 'rotate-180'} transition-all duration-300 ease-in-out`}
        />
      </Button>
      {open && (
        <ul
          className={`absolute top-10  z-50 p-4 border border-black dark:border-dark_mode_main1 dark:bg-black_2_for_text  rounded-2xl   bg-white  overflow-hidden max-h-fit min-w-fit space-y-2 `}
        >
          {supportLocalesList.map((el) => (
            <li key={el.name}>
              <Button
                key={el.name}
                variant={'link'}
                className='justify-start text-text_prymery_color body_medium'
                onClick={() => {
                  handleChange(el.value);
                  handleSetOpen(false);
                }}
              >
                <div className='w-6 h-6'> {el.icon} </div>
                {el.shortName}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

