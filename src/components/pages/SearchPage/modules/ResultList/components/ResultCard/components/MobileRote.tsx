import IconArrowRoteMobile from '@/components/pages/SearchPage/images/IconArrowRoteMobile';
import { format } from 'date-fns';

type Props = {
  arrival: string;
  arrivalName: string;
  arrivalPoin: string;

  departurePoint: string;
  departureName: string;

  departure: string;
};
export const MobileRoute = ({
  arrival,
  departure,
  departureName,
  arrivalName,
  departurePoint,
  arrivalPoin,
}: Props) => {
  return (
    <div className='flex flex-row items-center gap-2 tablet:gap-4 tablet:hidden'>
      <div className='space-y-4'>
        <div className='button_mobile text-text_prymery_color'>
          {format(departure || new Date(), 'HH:mm')}
        </div>
        <div className='button_mobile text-text_prymery_color'>
          {format(arrival || new Date(), 'HH:mm')}
        </div>
      </div>

      <div className='w-3 h-full'>
        <IconArrowRoteMobile />
      </div>

      <div className='space-y-2'>
        <div>
          <div className='body_medium text-text_prymery_color'>{departureName}</div>
          <div className='text-[10px] leading-4 text-text_secondary_color  text-wrap'>
            {departurePoint}
          </div>
        </div>

        <div>
          <div className='body_medium text-text_prymery_color'>{arrivalName}</div>
          <div className='text-[10px] leading-4 text-text_secondary_color  text-wrap'>
            {arrivalPoin}
          </div>
        </div>
      </div>
    </div>
  );
};
