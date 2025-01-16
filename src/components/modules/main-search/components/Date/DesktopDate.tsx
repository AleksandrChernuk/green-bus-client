"use client";

import { IconCalendar } from "@/components/icons/IconCalendar";
import React, { memo } from "react";
import { format, toDate } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { useDate } from "../../hooks/useDate";
import { DropdownWrapper, InputError, StartIcon } from "../../ui";
import { useShallow } from "zustand/react/shallow";
import { useSearchStore } from "@/store/search-store";
 
export const DesktopDate = memo(() => {
  const { open, toggleOpen, handleSelectDate, handleBlur } = useDate();
  const currentDate = useSearchStore(useShallow((state) => state.date));

  return (
    <div role='dropdown-warapp' className='relative' onBlur={handleBlur}>
      <div
        className={`relative border-r border-gray_1 dark:border-black_2_for_text ${
          open && 'dark:border-r-transparent border-r-transparent'
        }`}
      >
        <StartIcon icon={<IconCalendar />} />
        <input
          type='button'
          value={format(currentDate || new Date(), 'dd MMM ')}
          className='z-0 min-h-10 rounded-md size-full h-auto px-4 py-2 pl-8 tablet:px-9 laptop:px-12 tablet:py-4 outline-none bg-transparent focus:bg-gray_1 active:bg-gray_1 dark:focus:bg-black_2_for_text dark:active:bg-black_2_for_text placeholder-black dark:placeholder-gray_0 body_medium laptop:filter_input_medium_text text-black dark:text-grayy text-left text-nowrap truncate border-[1px] border-transparent'
          onClick={() => {
            toggleOpen();
          }}
        />
        <InputError inputError={null} />
      </div>

      <DropdownWrapper open={open}>
        <Calendar
          mode='single'
          month={new Date()}
          selected={currentDate ? toDate(currentDate) : toDate(new Date())}
          today={currentDate ? toDate(currentDate) : toDate(new Date())}
          onSelect={(value) => {
            handleSelectDate(value || new Date());
          }}
          disabled={{ before: new Date() }}
          className='rounded-none'
          classNames={{
            months: 'flex flex-col',
            month: 'space-y-4',
            caption: 'flex justify-center relative items-center mb-7',
            caption_label: 'text-md font-bold',
            nav: 'space-x-1 flex items-center',
            nav_button:
              'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 hover:bg-transparent',

            nav_button_previous: 'absolute left-1 ',
            nav_button_next: 'absolute right-1',
            table: 'w-full border-collapse space-y-1',
            head_row: 'flex gap-2',
            head_cell: 'text-muted-foreground rounded-md w-9 font-medium text-base',
            row: 'flex w-full mt-2 gap-2',
            cell: 'h-9 w-9 rounded-full text-center text-base p-0 relative flex justify-center items-center [&:has([aria-selected])]:bg-transporante hover:bg-primary_1  focus-within:relative focus-within:z-20',
            day: 'rounded-full h-9 w-9 p-0 font-medium text-sm	aria-selected:opacity-100 hover:bg-primary_1',
            day_range_end: 'day-range-end',
            day_selected:
              'bg-primary_1 text-white hover:bg-primary_1 hover:text-white focus:bg-primary_1 focus:text-white',
            day_today: 'bg-transporante border-[2px] border-primary_1 text-accent-foreground',
            day_outside:
              'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
            day_disabled: 'text-muted-foreground opacity-50',
            day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
            day_hidden: 'invisible',
          }}
          showOutsideDays
        />
      </DropdownWrapper>
    </div>
  );
});

DesktopDate.displayName = "DesktopDate";
