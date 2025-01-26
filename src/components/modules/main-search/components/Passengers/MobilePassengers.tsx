"use client";

import { PassengersButton } from "./PassengersButton";
import { IconPass } from "@/components/icons/IconPass";
import { usePassengers } from "../../hooks/usePassengers";
import { memo } from "react";
import { StartIcon } from '../../ui';
import { CustomDarwer } from '@/components/shared/CustomDarwer';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { useShallow } from 'zustand/react/shallow';
import { useSearchStore } from '@/store/useSearch';
import { DrawerClose } from '@/components/ui/drawer';
import { IconBack } from '@/components/icons/IconBack';
import { useTranslation } from 'react-i18next';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export const MobilePassengers = memo(() => {
  const { open, handleToggleOpen } = usePassengers();
  const { t } = useTranslation(['common']);

  const adult = useSearchStore(useShallow((state) => state.adult));
  const children = useSearchStore(useShallow((state) => state.children));

  const passCount = adult + children;

  return (
    <CustomDarwer
      open={open}
      toggleOpen={handleToggleOpen}
      trigger={
        <div className='relative'>
          <StartIcon icon={<IconPass />} />
          <input
            type='button'
            value={
              passCount === 1
                ? `${passCount} ${t('placeholderPassenger')}`
                : passCount > 4
                  ? `${passCount} ${t('placeholderPassengersGenitive')}`
                  : `${passCount} ${t('placeholderPassengers')}`
            }
            className='z-0 min-h-10 rounded-md size-full h-auto px-4 py-2 pl-8 tablet:px-9 laptop:px-12 tablet:py-4 outline-hidden bg-transparent focus:bg-gray_1 active:bg-gray_1 dark:focus:bg-black_2_for_text dark:active:bg-black_2_for_text placeholder-black dark:placeholder-gray_0 body_medium laptop:filter_input_medium_text text-black dark:text-grayy text-left text-nowrap truncate border-[1px] border-transparent'
          />
        </div>
      }
    >
      <div className='flex items-center justify-between border-b-[2px] px-5 py-6  border-b-gray_1 dark:border-b-black_2_for_text dark:bg-dark_mode_main1'>
        <DrawerClose className='flex items-center gap-1 h5 text-text_prymery_color'>
          <IconBack />
          {t('backBtn')}
        </DrawerClose>
      </div>
      <ScrollArea className='relative grow px-5 pt-4 overflow-y-scroll bg-grayy dark:bg-background_black_mode'>
        <h3 className='mb-6 h3 text-text_prymery_color'> {t('placeholderPassengers')}</h3>
        <div>
          <PassengersButton type='adult' value={adult} />
          <Separator className='h-[1px] my-4 rounded-lg bg-gray_0 dark:bg-black_2_for_text' />
          <PassengersButton type='children' value={children} />
        </div>
      </ScrollArea>
      <div className='p-4'>
        <DrawerClose asChild>
          <Button variant={'default'} className='w-full p-4 rounded-full h5'>
            {t('continue')}
          </Button>
        </DrawerClose>
      </div>
    </CustomDarwer>
  );
});

MobilePassengers.displayName = "MobilePassengers";
