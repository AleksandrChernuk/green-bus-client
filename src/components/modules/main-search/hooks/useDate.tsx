"use client";

import { useCallback,  useState } from "react";
import { addMonths, format } from "date-fns";
import { useSearchStore } from "@/store/search-store";

export const useDate = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [month, setMonth] = useState<Date>(new Date());

  const setDate = useSearchStore((state) => state.setDate);

  const toggleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleBlur = useCallback((event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpen(false);
    }
  }, []);

  const handleSelectDate = (data: Date) => {
    setOpen(false);
    setDate(format(data || new Date(), 'yyyy-MM-dd'));
  };

  const incrementMonth = useCallback(() => {
    setMonth((prevMonth) => addMonths(prevMonth, 1));
  }, []);

  const decrementMonth = useCallback(() => {
    setMonth((prevMonth) => addMonths(prevMonth, -1));
  }, []);

  return {
    open,
    setOpen,
    toggleOpen,
    setDate,
    handleSelectDate,
    handleBlur,
    month,
    incrementMonth,
    decrementMonth,
    setMonth,
  };
};
