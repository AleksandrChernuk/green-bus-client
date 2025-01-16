'use client' 


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IconsPhone } from "../icons/IconsPhone";
import { supportNavlinks } from "@/constans/constans.supportNavlinks";
import { SupportItem } from "../ui/SupportItem";
import { useTranslation } from "react-i18next";
 
export const Support = () => {
    const { t } = useTranslation(["common"]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="flex flex-row items-center gap-2 group"
      >
        <div>
          <div className="p-1 rounded-full w-7 h-7 bg-gray_1 dark:bg-grayy dark:fill-black group-hover:fill-gray_3 group-dark:hover:fill-gray_1 group-data-[state=open]:fill-gray_3 group-data-[state=open]:dark:fill-dark_mode_main1 transition-colors">
            <IconsPhone />
          </div>
          <div className="navigation_text_body text-search_color group-hover:text-gray_3 group-dark:hover:text-gray_1 group-data-[state=open]:text-gray_2_for_body  group-data-[state=open]:dark:group-hover:text-grayy transition-colors">
            {t("mainNavSupportLink")}
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-4 space-y-4 bg-white border-black rounded-2xl dark:bg-background_black_mode dark:border-black_2_for_text">
        {supportNavlinks?.map((item, idx) => (
          <DropdownMenuItem
            key={`${item.title}+${idx}`}
            className="p-0 secondary_text hover:underline hover:bg-transparent focus:bg-transparent"
          >
            <SupportItem title={item.title} src={item.src} icon={item?.icon} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
