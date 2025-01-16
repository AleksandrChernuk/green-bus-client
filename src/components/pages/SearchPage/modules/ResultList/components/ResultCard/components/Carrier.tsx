import { IconBus } from "@/components/pages/SearchPage/icons/IconAccountActions";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Carrier = ({ children }: Props) => {
  return (
    <div className='flex items-center gap-2 small_text text-text_prymery_color shrink grow-0 text-nowrap'>
      <div className='w-[45px] h-[16px] tablet:w-[70px] tablet:h-[24px] grow-0'>
        <IconBus />
      </div>

      <span className='text-[10px] tablet:small_text break-all text-text_prymery_color'>
        {children}
      </span>
    </div>
  );
};
