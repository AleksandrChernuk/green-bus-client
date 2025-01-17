"use client";

import { PassengersButton } from "./PassengersButton";
import { IconPass } from "@/components/icons/IconPass";
import { usePassengers } from "../../hooks/usePassengers";
import { memo } from "react";
import { DrawerHeader, StartIcon } from '../../ui';
import { CustomDarwer } from "@/components/shared/CustomDarwer";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useShallow } from "zustand/react/shallow";
import { useSearchStore } from "@/store/search-store";
 
export const MobilePassengers = memo(() => {
  const { open, toggleOpen } = usePassengers();

  const adult = useSearchStore(useShallow((state) => state.adult));
  const children = useSearchStore(useShallow((state) => state.children));

  return (
    <CustomDarwer
      open={open}
      toggleOpen={toggleOpen}
      trigger={
        <div className='relative'>
          <StartIcon icon={<IconPass />} />
          <input
            type='button'
            value={adult + children}
            className='z-0 min-h-10 rounded-md size-full h-auto px-4 py-2 pl-8 tablet:px-9 laptop:px-12 tablet:py-4 outline-none bg-transparent focus:bg-gray_1 active:bg-gray_1 dark:focus:bg-black_2_for_text dark:active:bg-black_2_for_text placeholder-black dark:placeholder-gray_0 body_medium laptop:filter_input_medium_text text-black dark:text-grayy text-left text-nowrap truncate border-[1px] border-transparent'
          />
        </div>
      }
    >
      <DrawerHeader />
      <ScrollArea className='relative flex-grow px-5 overflow-y-scroll bg-grayy dark:bg-background_black_mode'>
        <h3 className='mt-4 mb-6 h3'>placeholderPassengers</h3>
        <div className='space-y-4'>
          <PassengersButton type='adult' value={adult} />
          <PassengersButton type='children' value={children} />
        </div>
      </ScrollArea>
    </CustomDarwer>
  );
});

MobilePassengers.displayName = "MobilePassengers";
