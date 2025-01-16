"use client";

import { format, toDate } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IconCalendar } from "@/components/icons/IconCalendar";
import { useDate } from "../../hooks/useDate";
import { useShallow } from "zustand/react/shallow";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import {   DrawerHeader, InputError, StartIcon,   } from "../../ui";
import { CustomDarwer } from "@/components/shared/CustomDarwer";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { memo } from "react";
import { useSearchStore } from "@/store/search-store";

export const MobileDate = memo(() => {
  const { open, toggleOpen, month, handleSelectDate, setMonth, decrementMonth, incrementMonth } = useDate();
  const currentDate = useSearchStore(useShallow((state) => state.date));

  return (
    <CustomDarwer
      open={open}
      toggleOpen={toggleOpen}
      trigger={
        <div className="relative"  >
                <StartIcon icon={<IconCalendar />} />
                <input
                  type="button"
                  value={format(currentDate || new Date(), "dd MMM ")}
                  className="z-0 min-h-10 rounded-md size-full h-auto px-4 py-2 pl-8 tablet:px-9 laptop:px-12 tablet:py-4 outline-none bg-transparent focus:bg-gray_1 active:bg-gray_1 dark:focus:bg-black_2_for_text dark:active:bg-black_2_for_text placeholder-black dark:placeholder-gray_0 body_medium laptop:filter_input_medium_text text-black dark:text-grayy text-left text-nowrap truncate border-[1px] border-transparent"
                  onFocus={() => {
                    toggleOpen();
                  }}
                />
                <InputError inputError={null} />
              </div>
      }
    >
      <DrawerHeader />
      <ScrollArea className="relative flex-grow px-5 overflow-y-scroll bg-grayy dark:bg-background_black_mode">
        <div className="sticky top-0 left-0 right-0 z-50 ">
          <div className="flex items-center justify-between w-full py-6 bg-grayy dark:bg-background_black_mode">
            <h3 className="grow h3">When are you leaving?</h3>
            <div className="flex items-center justify-end gap-2">
              <Button
                className="w-8 h-8"
                size={"icon"}
                variant={"outline"}
                onClick={decrementMonth}
                disabled={month < new Date()}
              >
                <ChevronLeft />
              </Button>
              <Button
                className="w-8 h-8"
                size={"icon"}
                variant={"outline"}
                onClick={incrementMonth}
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
        <Calendar
          mode="single"
          month={month}
          onMonthChange={(value) => {
            setMonth(value);
          }}
          selected={currentDate ? toDate(currentDate) : toDate(new Date())}
          today={currentDate ? toDate(currentDate) : toDate(new Date())}
          onSelect={(value) => {
            handleSelectDate(value || new Date());
          }}
          disabled={{ before: new Date() }}
          className="rounded-none"
          classNames={{
            row: "flex w-full items-center justify-between mt-2 gap-2",
            head_row:
              "flex w-full items-center justify-between gap-1 mobile:gap-2",
            months: "flex flex-col gap-4",
            nav_button_previous: "hidden",
            nav_button_next: "hidden",
            caption:
              "flex justify-start relative items-center mb-4 text-sm text-black_2_for_text dark:text-grayy font-medium",
            cell: "h-4 w-4 mobile:h-9 mobile:w-9 rounded-full text-center text-sm p-0 relative flex justify-center items-center [&:has([aria-selected])]:bg-transporante focus-within:relative focus-within:z-20",
          }}
          numberOfMonths={3}
        />
      </ScrollArea>
    </CustomDarwer>
  );
});

MobileDate.displayName = "MobileDate";
