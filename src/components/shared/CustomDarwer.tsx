import { ReactElement, ReactNode } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { DialogTitle } from "@/components/ui/dialog";
import { DialogDescription } from "@/components/ui/dialog";

type Props = {
  open: boolean;
  toggleOpen: (value: boolean) => void;
  trigger: ReactElement;
  children: ReactNode;
  onClose?: () => void;
  title?: string;
  description?: string;
};

export const CustomDarwer = ({ open, toggleOpen, title, description, trigger, children, onClose }: Props) => {
  return (
    <Drawer direction="right" open={open} onOpenChange={toggleOpen} onClose={onClose} shouldScaleBackground={true}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className="flex flex-col m-0 rounded-none">
        <DialogTitle className="hidden">{title}</DialogTitle>
        <DialogDescription className="hidden">{description}</DialogDescription>
        {children}
      </DrawerContent>
    </Drawer>
  );
};

{
  /* <div className="flex items-center justify-between border-b p_drawer_content border-b-grayy_0 dark:border-b-black_2_for_text dark:bg-dark_mode_main1">
          <DrawerClose className="flex items-center gap-1 h5">
            <IconBack />
            backBtn
          </DrawerClose>
        </div>

        <ScrollArea className="relative flex-grow px-5 overflow-y-scroll bg-grayy dark:bg-background_black_mode">
          {children}
        </ScrollArea>

        {footerContent && (
          <div className="relative border-t p_drawer_content border-t-grayy_0 dark:border-t-black_2_for_text dark:bg-dark_mode_main1">
            {footerContent}
          </div>
        )} */
}
