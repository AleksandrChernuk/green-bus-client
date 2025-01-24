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
    <Button variant={'main'} size={'mainSearch'} disabled={disabled} onClick={handleSubmit}>
      {t('searchBtn')}
    </Button>
  );
};
