'use client';

import { memo, useState } from 'react';
import { IRouteResponse } from '@/types/route.types';
import { extractLocationDetails } from '@/lib/extractLocationDetails';
import { Carriers } from './components/Carriers';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { CustomCard } from '@/components/shared/CustomCard';
import { Route } from './components/Route';
import { useCurrentRouteStore } from '@/store/useCurrentRoute';
import { useRouter } from 'next/navigation';
import { LoaderCircle } from 'lucide-react';
import { useSearchStore } from '@/store/useSearch';
import { setCookie } from 'cookies-next';
import { IconLoader } from '@/components/icons/IconLoader';
import MobileDetails from '../../../MobileDetails';
import DetailsOpenButton from '../../../../components/DetailsOpenButton';
import CardDetails from './components/CardDetails';

type Props = {
  element: IRouteResponse;
};

export const RouteCard = memo(({ element }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const route = useRouter();

  const setCurrentRoute = useCurrentRouteStore((state) => state.setCurrentRoute);
  const loadingDetails = useCurrentRouteStore((state) => state.loadingDetails);

  const adult = useSearchStore((state) => state.adult);
  const children = useSearchStore((state) => state.children);
  const from = useSearchStore((state) => state.from);
  const to = useSearchStore((state) => state.to);

  const handleSelect = () => {
    setLoading(true);

    setCurrentRoute({
      route: element,
      toCityId: to?.id,
      fromCityId: from?.id,
      locale: 'uk',
      passCount: adult + children,
    });

    setCookie('adult', adult);
    setCookie('children', children);
    route.push(`/checkout`);
  };

  const { t, i18n } = useTranslation();
  const locale = i18n.language;

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div onBlur={handleBlur} tabIndex={0}>
      <CustomCard className='shadow-[0_4px_10px_0_rgba(0,0,0,0.2)]'>
        <div className='flex flex-row items-center justify-between gap-1 tablet:gap-2'>
          <Route
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
            duration={element.duration || ''}
          />

          <div className='flex flex-col items-center gap-4'>
            <p className='h4 laptop:h2 text-text_prymery_color'>
              {`${Math.floor(element.ticket_pricing.base_price || 0)}`}
              <span className='text-xs ml-[2px]'>UAH</span>
            </p>

            <Button
              variant={'default'}
              onClick={() => {
                handleSelect();
              }}
              className='px-3 py-2 tablet:py-3 tablet:px-4 laptop:py-[14px] laptop:px-[24px]  min-w-[108px] tablet:min-w-[205px] samll_button tablet:h5 max-h-[26.41px]  tablet:max-h-[44px]  laptop:max-h-[48px] rounded-full'
            >
              {loading ? <LoaderCircle className='animate-spin' /> : t('selectButton')}
            </Button>
          </div>
        </div>

        <div className='w-full h-[1px] bg-gray_0 dark:bg-black_2_for_text rounded-2xl relative my-4'></div>

        <div className='relative flex items-center gap-2'>
          <div className='flex items-center gap-2 truncate ...'>
            <Carriers>{element.carrier.name}</Carriers>
            <div className='font-bold'>{element.provider_name}</div>
          </div>

          <div className='items-center justify-center hidden ml-auto tablet:flex'>
            <DetailsOpenButton
              isOpen={isOpen}
              onClick={() => {
                if (!isOpen) {
                  setCurrentRoute({
                    route: element,
                    toCityId: to?.id,
                    fromCityId: from?.id,
                    locale: 'uk',
                    passCount: adult + children,
                  });
                }

                setIsOpen(!isOpen);
              }}
            >
              {!isOpen ? 'Детальніше' : 'Згорнути подробиці'}
            </DetailsOpenButton>
          </div>

          <div className='flex items-center justify-center ml-auto tablet:hidden'>
            <MobileDetails
              handleSelect={handleSelect}
              handleSetCurretRoute={() =>
                setCurrentRoute({
                  route: element,
                  toCityId: to?.id,
                  fromCityId: from?.id,
                  locale: 'uk',
                  passCount: adult + children,
                })
              }
            />
          </div>
        </div>
        {isOpen && (
          <div>
            {loadingDetails ? (
              <div className='flex items-center justify-center gap-1 body_medium text-text_prymery_color tablet:min-w-[397px] py-4'>
                <IconLoader />
              </div>
            ) : (
              <CardDetails />
            )}
          </div>
        )}
      </CustomCard>
    </div>
  );
});

RouteCard.displayName = 'RouteCard';
