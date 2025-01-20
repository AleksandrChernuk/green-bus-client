"use client";

import { memo, useState } from 'react';
import { IRouteResponse } from '@/types/route.types';
import { extractLocationDetails } from '@/lib/extractLocationDetails';
import { DesctopRoute } from './components/DesctopRoute';
import { Carriers } from './components/Carriers';
import { OpenDetailsButton } from './components/OpenDetailsButton';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { CustomCard } from '@/components/shared/CustomCard';
import MobileDetails from '../../../MobileDetails';
import { MobileRoute } from './components/MobileRote';
import { useMediaQuery } from '@/hooks/useMediaQuery';

type Props = {
  element: IRouteResponse;
};

export const ResultCard = memo(({ element }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const matches = useMediaQuery('(max-width: 767px)');
  const { i18n } = useTranslation();
  const locale = i18n.language;

  return (
    <CustomCard className='shadow-[0_4px_10px_0_rgba(0,0,0,0.2)]'>
      <div className='flex flex-row items-center justify-between gap-1 tablet:gap-14'>
        {!matches ? (
          <DesctopRoute
            arrival={element.arrival.date_time ?? ''}
            departure={element.departure.date_time ?? ''}
            departurePoint={element.departure?.station_address ?? ''}
            arrivalPoin={element.arrival?.station_address ?? ''}
            arrivalName={
              extractLocationDetails(element.arrival.toLocation, locale).locationName || ''
            }
            departureName={
              extractLocationDetails(element.departure.fromLocation, locale).locationName || ''
            }
          />
        ) : (
          <MobileRoute
            arrival={element.arrival.date_time ?? ''}
            departure={element.departure.date_time ?? ''}
            departurePoint={element.departure?.station_address ?? ''}
            arrivalPoin={element.arrival?.station_address ?? ''}
            arrivalName={
              extractLocationDetails(element.arrival.toLocation, locale).locationName || ''
            }
            departureName={
              extractLocationDetails(element.departure.fromLocation, locale).locationName || ''
            }
          />
        )}

        <div className='flex flex-col items-center gap-4'>
          <p className='h4 laptop:h2 text-text_prymery_color'>
            {`${Math.floor(element.ticket_pricing.base_price)}`}
            <span className='text-xs ml-[2px]'>UAH</span>
          </p>

          <Button variant={'default'} className='px-3 py-2 min-w-[90px] max-w-[107px] samll_button'>
            Select
          </Button>
        </div>
      </div>

      <div className=' w-full h-[1px] bg-gray_0 dark:bg-black_2_for_text rounded-2xl relative my-4 '></div>

      <div className='relative flex items-center gap-2'>
        <div className='flex items-center gap-2 truncate ...'>
          <Carriers>{element.carrier.name}</Carriers>
          <div className='font-bold'>{element.provider_name}</div>
        </div>

        <div className='items-center justify-center hidden ml-auto tablet:flex'>
          <OpenDetailsButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? 'Детальніше' : 'Згорнути подробиці'}
          </OpenDetailsButton>
        </div>

        <div className='flex items-center justify-center ml-auto tablet:hidden'>
          <MobileDetails />
        </div>
      </div>
      {/* <Details element={element} open={isOpen} /> */}
    </CustomCard>
  );
});

ResultCard.displayName = "ResultCard";
