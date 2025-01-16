"use client";

import { format, isEqual, toDate } from "date-fns";
import { useState,   } from "react";
import { createDateArr } from "../helpers";
import { useSearchStore } from "@/store/search-store";

export const useDateTabs = () => {
  const currentDate = useSearchStore((state) => state.date);
  const setDate = useSearchStore((state) => state.setDate);

  const [tabDate, setTabDate] = useState<Date>(toDate(currentDate));

  const [datesArray, setDatesArray] = useState<Date[]>(createDateArr(toDate(tabDate), 7, Math.floor(7 / 2)));

  const handleUpdateDate = (newDate: Date) => {
    setTabDate(newDate);
    setDate(format(newDate, "yyyy-MM-dd"));

    const firstDate = datesArray[0];
    const lastDate = datesArray[datesArray.length - 1];

    if (isEqual(newDate, lastDate) || isEqual(newDate, firstDate)) {
      setDatesArray(createDateArr(toDate(newDate), 7, Math.floor(7 / 2)));
    }
  };

  return {
    handleUpdateDate,
    tabDate,
    setTabDate,
    datesArray,
  };
};
