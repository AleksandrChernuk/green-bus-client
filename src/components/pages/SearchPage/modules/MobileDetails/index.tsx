'use client';

import { CustomDarwer } from '@/components/shared/CustomDarwer';
import { DrawerClose } from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { LoaderCircle, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useCurrentRouteStore } from '@/store/useCurrentRoute';
import { IconLoader } from '@/components/icons/IconLoader';
import RoteDetails from '../../components/Details/DetailsStops';
import { CustomCard } from '@/components/shared/CustomCard';

export default function MobileDetails({
  handleSetCurretRoute,
  handleSelect,
}: {
  handleSetCurretRoute: () => void;
  handleSelect: () => void;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const { t } = useTranslation(['common']);
  const сurrentRoute = useCurrentRouteStore((state) => state.сurrentRoute);
  const loadingDetails = useCurrentRouteStore((state) => state.loadingDetails);

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <CustomDarwer
      open={open}
      toggleOpen={() => {
        setOpen((p) => !p);
      }}
      trigger={
        <Button
          variant={'link'}
          className='items-center justify-center text-xs font-bold'
          onClick={handleSetCurretRoute}
        >
          {t('details')}
        </Button>
      }
    >
      <div className='flex items-center justify-between px-5 py-4 border-b border-b-gray_0 dark:border-b-dark_mode_main1 dark:bg-dark_mode_main1'>
        <h3 className='font-medium h5 text-primary_1'> {t('details')}</h3>
        <DrawerClose asChild>
          <Button
            variant={'default'}
            className='flex items-center gap-1 p-1 rounded-md h5 bg-primary_1'
          >
            <X color='#ffffff' />
          </Button>
        </DrawerClose>
      </div>
      <ScrollArea className='relative px-5 pt-6 overflow-y-scroll grow bg-grayy dark:bg-background_black_mode'>
        {loadingDetails ? (
          <div className='flex items-center justify-center gap-1 body_medium text-text_prymery_color tablet:min-w-[397px] py-4'>
            <IconLoader />
          </div>
        ) : (
          <CustomCard>
            <RoteDetails />
          </CustomCard>
        )}
      </ScrollArea>
      <div className='flex items-center justify-between gap-4 px-5 py-4 border-t border-t-gray_1 dark:border-t-black_2_for_text dark:bg-dark_mode_main1'>
        <div className='mx-auto text-center'>
          <div className='small_text text-gray_2_for_body dark:text-grayy'>
            1 {t('placeholderPassenger')}
          </div>
          <div className='main_text_body text-black.2.for.text dark:text-gray_1'>
            {Math.floor(сurrentRoute?.ticket_pricing.base_price || 0)}{' '}
            <span className='text-xs ml-[2px]'>UAH</span>
          </div>
        </div>

        <Button
          variant={'default'}
          className='w-1/2 px-5 py-3 rounded-full button_mobile'
          onClick={() => {
            setLoading(true);
            handleSelect();
          }}
          disabled={loadingDetails}
        >
          {loading ? <LoaderCircle className='animate-spin' /> : t('selectButton')}
        </Button>
      </div>
    </CustomDarwer>
  );
}
