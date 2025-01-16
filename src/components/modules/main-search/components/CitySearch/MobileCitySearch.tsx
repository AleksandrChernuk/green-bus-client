"use client";

import { IconClear } from "@/components/icons/IconClear";
import { IconFrom } from "@/components/icons/IconFrom";
import { IconTo } from "@/components/icons/IconTo";
import { IconSwap } from "@/components/icons/IconSwap";
import { memo } from "react";
import { useCitySearch } from "../../hooks/useCitySearch";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { EndIcon, DrawerHeader, StartIcon, InputError } from "../../ui";
import { useSearchStore } from "@/store/search-store";
import { CustomDarwer } from '@/components/shared/CustomDarwer';
 

const ClearButton = ({ handleClear }: { handleClear: () => void }) => {
  return (
    <div
      className="absolute right-0 inline-flex w-10 h-10 p-2 -translate-y-1/2 rounded-lg cursor-pointer top-1/2"
      onClick={(e) => {
        e.stopPropagation();
        handleClear();
      }}
    >
      <IconClear />
    </div>
  );
};

export const MobCitySeacrh = memo(({ name }: { name: "from" | "to" }) => {
  const { open, toggleOpen, handleCloseDrawer, value, onInputChange, list, handleClearMobileInput, placeholder } =
    useCitySearch({
      name,
    });

  // const city = useSearchStore((state) => state[name]);
  const swap = useSearchStore((state) => state.swap);

  return (
    <CustomDarwer
      open={open}
      toggleOpen={toggleOpen}
      trigger={
        <div className="relative">
          <StartIcon icon={name === "from" ? <IconFrom /> : <IconTo />} />
          <input
            type="button"
            value={placeholder}
            className="z-0 min-h-10 rounded-md size-full h-auto px-4 py-2 pl-8 tablet:px-9 laptop:px-12 tablet:py-4 outline-none bg-transparent focus:bg-gray_1 active:bg-gray_1 dark:focus:bg-black_2_for_text dark:active:bg-black_2_for_text placeholder-black dark:placeholder-gray_0 body_medium laptop:filter_input_medium_text text-black dark:text-grayy text-left text-nowrap truncate border-[1px] border-transparent
"
          />
          <InputError inputError={null} />
          <EndIcon icon={name === "from" && <IconSwap />} onClick={swap} />
        </div>
      }
      onClose={handleCloseDrawer}
    >
      <DrawerHeader />
      <ScrollArea className="relative flex-grow px-5 overflow-y-scroll bg-grayy dark:bg-background_black_mode">
        <div className="sticky top-0 left-0 right-0 h-12 ">
          <div className="relative py-4 bg-grayy dark:bg-background_black_mode">
            <input
              id={name}
              type="text"
              value={value}
              placeholder={placeholder}
              name={name}
              onChange={(e) => onInputChange(e.target.value)}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck="false"
              className="p-4 pr-10 h-full w-full bg-white dark:bg-dark_mode_main1 rounded-lg border-[1px] border-black_2_for_text focus:border-primary_1 outline-primary_1 placeholder:italic"
            />
            <ClearButton handleClear={handleClearMobileInput} />
          </div>
        </div>
        <div id="list-container" className="mt-11">
          {list}
        </div>
      </ScrollArea>
    </CustomDarwer>
  );
});

MobCitySeacrh.displayName = "MobCitySeacrh";
