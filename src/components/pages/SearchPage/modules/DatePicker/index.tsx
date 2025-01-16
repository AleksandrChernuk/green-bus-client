"use client";

import { addDays, format, toDate, isBefore, isEqual } from "date-fns";

import { useDateTabs } from "../../hooks/useDateTabs";
import { Button } from "@/components/ui/button";

export default function DateTabs() {
  const { tabDate, handleUpdateDate, datesArray } = useDateTabs();
  return (
    <div>
      <div className='flex items-center justify-around gap-2 overflow-x-scroll tablet:gap-8'>
        {datesArray.map((date) => {
          return (
            <Button
              disabled={isBefore(addDays(date, 1), new Date())}
              variant={'link'}
              key={format(date, 'dd MMM')}
              onClick={() => handleUpdateDate(date)}
              aria-label={format(date, 'dd MMM')}
              aria-selected={isEqual(date, toDate(tabDate))}
              className={`${
                isEqual(date, toDate(tabDate)) && 'bg-grayy dark:bg-dark_mode_main1'
              } hover:no-underline p-4 laptop:px-6 h-auto w-auto tablet:w-24 laptop:w-32 rounded-none rounded-t-lg text-black  dark:text-grayy ${
                !isEqual(date, toDate(tabDate)) && 'text-white'
              }`}
            >
              <ul className='flex flex-col items-center'>
                <li className='small_text tablet:main_text_body'>{format(date, 'EEE')}</li>
                <li className='small_2_bolt_text tablet:h5'>{format(date, 'dd MMM')}</li>
              </ul>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
