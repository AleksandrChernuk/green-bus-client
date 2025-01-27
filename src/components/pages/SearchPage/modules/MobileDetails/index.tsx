'use client';

import { CustomDarwer } from '@/components/shared/CustomDarwer';
import { DrawerClose } from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useCurrentRouteStore } from '@/store/useCurrentRoute';

export default function MobileDetails() {
  const [open, setOpen] = useState<boolean>(false);
  const { t } = useTranslation(['common']);
  const setCurrentRoute = useCurrentRouteStore((state) => state.setCurrentRoute);

  return (
    <CustomDarwer
      open={open}
      toggleOpen={() => {
        setOpen((p) => !p);
      }}
      onClose={() => setCurrentRoute(null)}
      trigger={
        <Button variant={'link'} className='items-center justify-center text-xs font-bold '>
          {t('details')}
        </Button>
      }
    >
      <div className='flex items-center justify-between px-5 py-4 border-b border-b-gray_1 dark:border-b-black_2_for_text dark:dark:bg-dark_mode_main1'>
        <h3 className='font-medium h4 text-primary_1'>Details</h3>
        <DrawerClose asChild>
          <Button
            variant={'default'}
            className='flex items-center gap-1 p-1 rounded-md h5 bg-primary_1'
          >
            <X color='#ffffff' />
          </Button>
        </DrawerClose>
      </div>
      <ScrollArea className='relative grow px-5 pt-6 overflow-y-scroll bg-grayy dark:bg-background_black_mode'>
        {/* { детали маршрута } */}
      </ScrollArea>
      <div className='flex items-center justify-between gap-4 px-5 py-4 border-t border-t-gray_1 dark:border-t-black_2_for_text dark:bg-dark_mode_main1'>
        <div className='mx-auto text-center text-text_prymery_color'>
          <div>1 Pasenger</div>
          <div>745.00$r</div>
        </div>
        <DrawerClose asChild>
          <Button variant={'default'} className='w-1/2 px-5 py-3 button_mobile'>
            Buy
          </Button>
        </DrawerClose>
      </div>
    </CustomDarwer>
  );
}
