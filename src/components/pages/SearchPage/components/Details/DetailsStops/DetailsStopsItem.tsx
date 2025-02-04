import React from 'react';
import { IStops } from '@/types/stops-interface';

type Props = {
  isFirst?: boolean;
  isLast?: boolean;
  point: IStops;
};

// function formatTime(timeString: string | null): string {
//   if (!timeString) return '';

//   // if (timeString.length === 8) {
//   //   return timeString.slice(0, 5);
//   // }

//   // const parsedDate = parseISO(timeString);
//   // return format(parsedDate, 'HH:mm');
// }

export default function DetailsStopsItem({ isFirst, isLast, point }: Props) {
  return (
    <div
      className={`relative flex items-start justify-start  ${isLast && 'overflow-hidden z-10 bg-white dark:bg-dark_mode_main1 tablet:dark:bg-card_bg_primery'}`}
    >
      <span
        className={`${isFirst || isLast ? 'button_mobile' : 'small_2_bolt_text'} text-text_prymery_color mr-9 min-w-[40px] max-w-[40px]`}
      >
        {isFirst
          ? point?.departure_date_time?.split(' ')[1].replace(':00', '')
          : point?.arrival_date_time?.split(' ')[1].replace(':00', '')}
      </span>

      <div
        className={`relative after:content-[''] before:absolute 
             after:rounded-full before:border-[2px]	${isLast ? 'before:border-primary_1' : 'before:border-blackmode before:bg-white dark:before:bg-background_black_mode tablet:dark:before:bg-background_black_mode'}
            before:w-4 before:h-4
             before:top-0 before:-left-[19px] before:-translate-x-1/2 before:rounded-full
             before:z-20 `}
      >
        {isLast && (
          <span className='absolute w-[8px] h-[8px] rounded-full bg-primary_1 top-[4px] -left-[19px] -translate-x-1/2'></span>
        )}
        <div
          className={`${isFirst || isLast ? 'button_mobile' : 'small_2_bolt_text'}  text-text_prymery_color`}
        >
          {point.location.name}
        </div>

        <div className='text-text_secondary_color  text-[10px] mobile:small_text'>
          {point.station.name && `${point.station.name}, `}
          {point.station.address}
        </div>
        {!isLast && !isFirst && point.bus_changes && (
          <div className='p-1 my-0.5  text-white bg-red-500 text-xs  font-bold  rounded-lg text-center'>
            Організована пересадка
          </div>
        )}
      </div>
    </div>
  );
}
