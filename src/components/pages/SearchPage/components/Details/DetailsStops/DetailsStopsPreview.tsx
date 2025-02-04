import { extractLocationDetails } from '@/lib/extractLocationDetails';
import { useCurrentRouteStore } from '@/store/useCurrentRoute';
import { format, parseISO } from 'date-fns';

export default function DetailsStopsPreview() {
  const сurrentRoute = useCurrentRouteStore((state) => state.сurrentRoute);
  console.log(сurrentRoute?.departure.date_time);

  return (
    <>
      <div className={`relative flex items-start justify-start  `}>
        <span className={`button_mobile text-text_prymery_color mr-9 min-w-[40px] max-w-[40px]`}>
          {format(сurrentRoute?.departure.date_time || new Date(), 'HH:mm')}
        </span>

        <div
          className={`relative after:content-[''] before:absolute after:rounded-full before:border-[2px] before:border-blackmode before:bg-white dark:before:bg-dark_mode_main1 tablet:dark:before:bg-background_black_mode before:w-4 before:h-4 before:top-0 before:-left-[19px] before:-translate-x-1/2 before:rounded-full before:z-20`}
        >
          <div className={`button_mobile text-text_prymery_color`}>
            {сurrentRoute?.departure?.fromLocation &&
              extractLocationDetails(сurrentRoute.departure.fromLocation, 'uk').locationName}
          </div>
          <div className='text-text_secondary_color  text-[10px] mobile:small_text'>
            {сurrentRoute?.departure.station_address}
          </div>
        </div>
      </div>
      <div
        className={`relative flex items-start justify-start  overflow-hidden z-10 bg-white dark:bg-background_black_mode tablet:dark:bg-card_bg_primery'}`}
      >
        <span className={`button_mobile text-text_prymery_color mr-9 min-w-[40px] max-w-[40px]`}>
          {format(parseISO(сurrentRoute?.arrival.date_time || ''), 'HH:mm')}
        </span>

        <div
          className={`relative after:content-[''] before:absolute after:rounded-full before:border-[2px] before:border-primary_1  before:w-4 before:h-4 before:top-0 before:-left-[19px] before:-translate-x-1/2 before:rounded-full before:z-20`}
        >
          <span className='absolute w-[8px] h-[8px] rounded-full bg-primary_1 top-[4px] -left-[19px] -translate-x-1/2'></span>

          <div className={`button_mobile text-text_prymery_color`}>
            {сurrentRoute?.arrival?.toLocation &&
              extractLocationDetails(сurrentRoute.arrival.toLocation, 'uk').locationName}
          </div>
          <div className='text-text_secondary_color  text-[10px] mobile:small_text'>
            {сurrentRoute?.arrival.station_address}
          </div>
        </div>
      </div>
    </>
  );
}
