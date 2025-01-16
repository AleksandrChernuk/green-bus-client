'use client'

import { Separator } from "@radix-ui/react-dropdown-menu";
import { IconsMenu } from "@/components/icons/IconsMenu";
import { IconGlobus } from "@/components/icons/IconGlobus";
import Logo from "@/components/shared/Logo";
import MobileSupport from "./MobileSupport";
 import { SwitchTheme } from "@/components/shared/SwitchTheme";
// import { ProfileLink } from "@/components/shared/ProfileLink";
import { CustomDarwer } from "@/components/shared/CustomDarwer";
import { useState } from "react";

import { X } from "lucide-react";
import { DrawerClose } from "@/components/ui/drawer";


export const MobileMenu = ( ) => {
  const [open, setOpen] = useState(false)



     const toggleOpen =  () => {
       setOpen((prev) => !prev);
     } 
  return (
    <div className="block tablet:hidden">
      <CustomDarwer
        open={open}
        toggleOpen={toggleOpen}
        trigger={
          <div className="p-2 rounded-md bg-primary_1">
            <IconsMenu />
          </div>
        }
      >
        <div className="sticky top-0 z-50 px-5 py-4  bg-white dark:bg-dark_mode_main1 border-b-[1px] border-gray_0 dark:border-black_2_for_text flex items-center justify-between">
          <DrawerClose>
            <Logo />
          </DrawerClose>
          <DrawerClose>
            <div className="p-2 rounded-md bg-primary_1">
              <X className="stroke-white"/>
            </div>
          </DrawerClose>
        </div>
        <div className="flex flex-col w-full h-full p-0 overflow-auto">
          <div className="flex flex-col gap-4 p-5">
            {/* <ProfileLink isMobile   /> */}
            <MobileSupport />
          </div>
          <Separator className="h-[1px] bg-gray_0 dark:bg-black_2_for_text" />
          <div className="flex flex-col gap-4 p-5">
            {/* <MobileSwitchLocale /> */}

            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-2">
                <IconGlobus />
                <p className="text-base font-medium text-black_2_for_text dark:text-grayy">
                  Site theme
                </p>
              </div>
              <SwitchTheme />
            </div>
          </div>
        </div>
      </CustomDarwer>
    </div>
  );
};
