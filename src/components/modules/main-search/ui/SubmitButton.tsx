"use client";

import { Button } from '@/components/ui/button';
import { useTranslation } from "react-i18next";

 
type Props = {
  handleSubmit: () => void;
  disabled?: boolean;
 };

export const SubmitButton = ({ handleSubmit, disabled,  }: Props) => {
   const { t } = useTranslation(["common"]);

  return (
    <Button
      variant={"secondary"}
      className="text-black h-auto px-6 py-4 grow-0 rounded-none rounded-br-[16px] tablet:min-w-[108px] tablet:max-w-[108px] laptop:min-w-[187px] laptop:max-w-[187px] rounded-bl-[16px] tablet:rounded-tl-none tablet:rounded-tr-[16px] tablet:rounded-bl-none"
      disabled={disabled}
      onClick={handleSubmit}
    >
      {t("searchBtn")}
    </Button>
  );
};
