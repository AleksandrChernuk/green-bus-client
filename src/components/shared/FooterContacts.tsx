 import { nanoid } from "nanoid";
 
 import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
 } from "@/components/ui/dropdown-menu";
 import { IconLocaleArrow } from "../icons/IconLocaleArrow";
 import { supportNavlinks } from "@/constans/constans.supportNavlinks";
import { SupportItem } from "../ui/SupportItem";

export default function FooterContacts() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-sm tablet:text-base font-normal group px-4 py-3 rounded-lg transition-all flex flex-row items-center gap-[5px] border border-gray-light focus:bg-transparent data-[state=open]:bg-transparent ">
        {supportNavlinks[0].icon}

        {supportNavlinks[0].title}
        <span className={"group-data-[state=open]:rotate-180 transition-all ml-5"}>
          <IconLocaleArrow className={"group-hover:stroke-gray_medium group-data-[state=open]:stroke-gray_medium"} />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col w-full gap-2 p-3 font-normal bg-white rounded-lg border-gray-light dark:bg-background_black_mode ">
        {supportNavlinks?.map((item) => (
          <DropdownMenuItem key={nanoid()} className="relative ">
            <SupportItem title={item.title} src={item.src} icon={item?.icon} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
