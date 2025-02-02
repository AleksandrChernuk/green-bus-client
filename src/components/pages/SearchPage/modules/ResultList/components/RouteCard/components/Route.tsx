import IconArrowRoteMobile from '@/components/pages/SearchPage/images/IconArrowRoteMobile';
import { IconRouteLeft } from '@/components/pages/SearchPage/images/IconRouteLeft';
import { IconRouteRigth } from '@/components/pages/SearchPage/images/IconRouteRigth';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

type Props = {
  arrival: string;
  arrivalName: string;
  arrivalPoin: string;
  duration: string;
  departurePoint: string;
  departureName: string;
  departure: string;
};
export const Route = ({
  arrival,
  departure,
  departureName,
  arrivalName,
  departurePoint,
  arrivalPoin,
  duration,
}: Props) => {
  const { t } = useTranslation();

  const durationArr = duration.split(':');
  return (
    <>
      <div className='flex flex-row items-center gap-2 tablet:hidden'>
        <div className='flex flex-col items-center gap-4'>
          <div className='button_mobile text-text_prymery_color'>
            {format(departure || new Date(), 'HH:mm')}
          </div>

          <div className='small_text text-black.2.for.text  dark:text-gray_1'>{`${durationArr[0]}${t('shortHours')},${durationArr[1]}${t('shortMinutes')}`}</div>
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

      <div className='hidden w-full grid-cols-3 gap-2 tablet:grid'>
        <div className='space-y-2'>
          <h3 className='h5 text-text_secondary_color'>
            {format(departure || new Date(), 'HH:mm')}
          </h3>

          <div className='space-y-2 truncate text-wrap'>
            <div className='h3 laptop:h4 text-text_prymery_color'>{departureName}</div>
            <div className='text-sm leading-4 text-text_secondary_color'>{departurePoint}</div>
          </div>
        </div>

        <div className='flex items-center justify-center w-full gap-2'>
          <div className='w-[49px] h-[17px]'>
            <IconRouteLeft />
          </div>
          <div className='small_text text-black.2.for.text  dark:text-gray_1'>{`${durationArr[0]}${t('shortHours')},${durationArr[1]}${t('shortMinutes')}`}</div>
          <div className='w-[49px] h-[17px]'>
            <IconRouteRigth />
          </div>
        </div>

        <div className='space-y-2'>
          <h3 className='h5 text-text_secondary_color'>{format(arrival || new Date(), 'HH:mm')}</h3>

          <div className='space-y-2 truncate text-wrap'>
            <div className='h3 laptop:h4 text-text_prymery_color'>{arrivalName}</div>
            <div className='text-sm leading-4 text-text_secondary_color'>{arrivalPoin}</div>
          </div>
        </div>
      </div>
    </>
  );
};
