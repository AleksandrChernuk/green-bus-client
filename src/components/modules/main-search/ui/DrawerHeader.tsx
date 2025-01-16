import { IconBack } from '@/components/icons/IconBack';
import { DrawerClose } from "@/components/ui/drawer";
import React from "react";

export const DrawerHeader = () => {
  return (
    <div className="flex items-center justify-between border-b p_drawer_content border-b-grayy_0 dark:border-b-black_2_for_text dark:bg-dark_mode_main1">
      <DrawerClose className="flex items-center gap-1 h5">
        <IconBack />
        backBtn
      </DrawerClose>
    </div>
  );
};
