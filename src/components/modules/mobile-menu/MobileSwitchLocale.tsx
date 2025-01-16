"use client";

import React from "react";
import { Accordion } from "@/components/ui/accordion";
// import { IconFlagUA } from "@/components/icons/IconFlagUA";
// import { IconFlagEnglish } from "@/components/icons/IconFlagEnglish";
// import { IconFlagRus } from "@/components/icons/IconFlagRus";

const MobileSwitchLocale = () => {
  // const changeLocale = useChangeLocale();
  // const locale = useCurrentLocale();
  // const t = useScopedI18n("AuthPage");

  // const displayedValue = (key: string) => {
  //   switch (key) {
  //     case "uk":
  //       return <IconFlagUA className={"w-7 h-7"} />;

  //     case "en":
  //       return <IconFlagEnglish className={"w-7 h-7"} />;

  //     case "ru":
  //       return <IconFlagRus className={"w-7 h-7"} />;

  //     default:
  //       return <IconFlagUA className={"w-7 h-7"} />;
  //   }
  // };

  return (
    <Accordion type="multiple" className="w-full ">
      {/* <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger
          className={`flex flex-row items-center justify-between gap-1 p-0 transition-all  text-black text-base font-medium dark:text-grayy dark:fill-black data-[state=open]:fill-gray_3 dark:data-[state=open]:fill-gray_3 data-[state=open]:text-gray_3  hover:text-gray_3 hover:underline hover:fill-gray_3 active:fill-gray_3 dark:active:fill-gray_3 dark:hover:fill-gray_3 active:text-gray_3 `}
        >
          <div className="flex flex-row items-center gap-1">
            {displayedValue(locale)}
            <span> Ukrainian language (UK)</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="inline-flex flex-col gap-2 p-2">
          <ul className="flex flex-col gap-2 text-base font-normal text-black dark:text-grayy">
            <li className="flex items-center gap-1 p-2 cursor-pointer" onClick={() => changeLocale("uk")}>
              <div className="flex items-center gap-1 text-base font-normal text-black dark:text-grayy">
                <IconFlagUA />
                <span>Українська</span>
              </div>
            </li>
            <li className="flex items-center gap-1 p-2 cursor-pointer" onClick={() => changeLocale("en")}>
              <div className="flex items-center gap-1 text-base font-normal text-black dark:text-grayy">
                <IconFlagEnglish />
                <span>English</span>
              </div>
            </li>
            <li className="flex items-center gap-1 p-2 cursor-pointer" onClick={() => changeLocale("ru")}>
              <div className="flex items-center gap-1 text-base font-normal text-black dark:text-grayy">
                <IconFlagRus />
                <span>Руськая</span>
              </div>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem> */}
    </Accordion>
  );
};

export default MobileSwitchLocale;
