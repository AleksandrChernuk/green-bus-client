import { IconsPhone } from "@/components/icons/IconsPhone";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { supportNavlinks } from "@/constans/constans.supportNavlinks";

 import Link from "next/link";

const MobileSupport = () => {
  return (
    <Accordion type="single" collapsible className="w-full ">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger
          className={`flex flex-row items-center justify-between gap-2 p-0 transition-all  text-black text-base font-medium dark:text-grayy dark:fill-black data-[state=open]:fill-gray_3 dark:data-[state=open]:fill-gray_3 data-[state=open]:text-gray_3  hover:text-gray_3 hover:underline hover:fill-gray_3 active:fill-gray_3 dark:active:fill-gray_3 dark:hover:fill-gray_3 active:text-gray_3 `}
        >
          <div className="flex flex-row items-center gap-2">
            <span>
              <IconsPhone className={"fill-primary_1"} />
            </span>
            <span>Support</span>
          </div>
        </AccordionTrigger>

        <AccordionContent className="inline-flex flex-col gap-2 p-4 ">
          {supportNavlinks.map((item, idx) => (
            <Link
              key={`${item.title}+${idx}`}
              href={item.src}
              className="flex flex-row items-center justify-start gap-2 p-1"
            >
              <span>{item.icon && item.icon}</span>
              <span className="text-base font-normal text-black dark:text-grayy">{item.title}</span>
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MobileSupport;
