import React from "react";

type Props = {
  timeInRoad: string;
};

 
export const TimelLneIndicator = ({ timeInRoad }: Props) => {
  return (
    <ul className="flex flex-col items-center ml-2 mr-2 tablet:mr-4 tablet:flex-row tablet:justify-normal ">
      <li className="w-4 h-4 border-2 border-black rounded-full dark:border-blackmode"></li>

      <li className="w-px h-14 border-r-[2px] tablet:min-w-14 tablet:h-auto tablet:border-r-0 tablet:border-t-[2px] border-gray_2_for_body dark:border-blackmode border-dashed"></li>

      <li className="hidden p-1 tablet:block small_text text-text_seconddary_color">{timeInRoad}</li>
      <li className="hidden tablet:block min-w-14 h-auto border-t-[2px] border-gray_2_for_body dark:border-blackmode border-dashed"></li>
      <li className="flex items-center justify-center w-4 h-4 border-2 rounded-full border-primary_1">
        <div className="w-px h-px p-1 rounded-full bg-primary_1"></div>
      </li>
    </ul>
  );
};
