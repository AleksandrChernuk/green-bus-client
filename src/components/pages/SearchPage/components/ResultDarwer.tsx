"use client";

import { X } from "lucide-react";
import { ReactNode, useState } from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { DialogTitle } from "@/components/ui/dialog";
import { DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  title: string;
  children: ReactNode;
  footerContent?: ReactNode;
  openButton: ReactNode;
};

export const ResultDarwer = ({ title, children, footerContent, openButton }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen} shouldScaleBackground={true}>
      <DrawerTrigger asChild className="button_underline_bolt_text">
        {openButton}
      </DrawerTrigger>

      <DrawerContent className="flex flex-col m-0 rounded-none ">
        <DialogTitle className="hidden"></DialogTitle>
        <DialogDescription className="hidden">hidden</DialogDescription>

        <div className="flex items-center justify-between border-b p_drawer_content border-b-grayy_0 dark:border-b-black_2_for_text dark:bg-dark_mode_main1">
          <h3 className="h5 text-primary_1">{title}</h3>
          <DrawerClose className="flex items-center gap-1 p-1 rounded-md h5 bg-primary_1">
            <X color="#ffffff" />
          </DrawerClose>
        </div>

        <ScrollArea className="flex-grow px-5 pt-6 overflow-y-scroll bg-grayy dark:bg-background_black_mode">
          {children}
        </ScrollArea>

        {footerContent && (
          <div className="border-t p_drawer_content border-t-grayy_0 dark:border-t-black_2_for_text dark:bg-dark_mode_main1">
            {footerContent}
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
};
