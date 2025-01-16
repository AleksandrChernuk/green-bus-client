"use client";

import { memo } from "react";
import { IconPass } from "@/components/icons/IconPass";
import { PassengersButton } from "./PassengersButton";
import { usePassengers } from "../../hooks/usePassengers";
import { DropdownWrapper, StartIcon } from "../../ui";
import { useShallow } from "zustand/react/shallow";
import { useSearchStore } from "@/store/search-store";
 
export const DesktopPassengers = memo(() => {
  const { open, toggleOpen, handleBlur } = usePassengers();

  const adult = useSearchStore(useShallow((state) => state.adult));
  const children = useSearchStore(useShallow((state) => state.children));

  return (
    <div role="dropdown-warapp" className="relative" onBlur={handleBlur}>
      <div className="relative" >
        <StartIcon icon={<IconPass />} />
        <input
          type="button"
          value={adult + children}
          className="z-0 min-h-10 rounded-md size-full h-auto px-4 py-2 pl-8 tablet:px-9 laptop:px-12 tablet:py-4 outline-none bg-transparent focus:bg-gray_1 active:bg-gray_1 dark:focus:bg-black_2_for_text dark:active:bg-black_2_for_text placeholder-black dark:placeholder-gray_0 body_medium laptop:filter_input_medium_text text-black dark:text-grayy text-left text-nowrap truncate border-[1px] border-transparent"
          onFocus={() => {
            toggleOpen();
          }}
        />
       </div>
       

      <DropdownWrapper open={open} position="right">
        <div className="space-y-4">
          <PassengersButton type="adult" value={adult} />
          <PassengersButton type="children" value={children} />
        </div>
      </DropdownWrapper>
    </div>
  );
});

DesktopPassengers.displayName = "DesktopPassengers";
