import { IconRouteLeft } from '@/components/pages/SearchPage/images/IconRouteLeft';
import { IconRouteRigth } from '@/components/pages/SearchPage/images/IconRouteRigth';
import { format } from 'date-fns';

type Props = {
  arrival: string;
  arrivalName: string;
  arrivalPoin: string;
  departurePoint: string;
  departureName: string;
  departure: string;
};

export const DesctopRoute = ({
  arrival,
  departure,
  departureName,
  arrivalName,
  departurePoint,
  arrivalPoin,
}: Props) => {
  return (
    <div className='grid w-full grid-cols-3 gap-2'>
      <div className='space-y-2'>
        <h3 className='h5 text-text_secondary_color'>{format(departure || new Date(), 'HH:mm')}</h3>

        <div className='space-y-2 truncate text-wrap'>
          <div className='h3 laptop:h4 text-text_prymery_color'>{departureName}</div>
          <div className='text-sm leading-4 text-text_secondary_color'>{departurePoint}</div>
        </div>
      </div>

      <div className='flex items-center justify-center w-full gap-2'>
        <IconRouteLeft />
        <div className='text-text_secondary_color'>22h,14m</div>
        <IconRouteRigth />
      </div>

      <div className='space-y-2'>
        <h3 className='h5 text-text_secondary_color'>{format(arrival || new Date(), 'HH:mm')}</h3>

        <div className='space-y-2 truncate text-wrap'>
          <div className='h3 laptop:h4 text-text_prymery_color'>{arrivalName}</div>
          <div className='text-sm leading-4 text-text_secondary_color'>{arrivalPoin}</div>
        </div>
      </div>
    </div>
  );
};
