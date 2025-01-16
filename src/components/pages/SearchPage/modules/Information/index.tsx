"use client";

import { CustomCard } from "@/components/shared/CustomCard";
  import { extractLocationDetails } from "@/lib/extractLocationDetails";
import { useSearchStore } from "@/store/search-store";
import { format, toDate } from "date-fns";
import { ArrowRight } from "lucide-react";
import React from "react";
import { useShallow } from "zustand/react/shallow";

export const Information = () => {
  const date = useSearchStore(useShallow((state) => state.date));
  const from = useSearchStore(useShallow((state) => state.from));
  const to = useSearchStore(useShallow((state) => state.to));

  return (
    <div>
      <CustomCard className="p-5 space-y-4">
        <h3 className="h3 laptop:h1 text-text_prymery_color">{format(toDate(date), "eee ,d MMM.")}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 main_text_body text-text_seconddary_color ">
            <div>
              {from && extractLocationDetails(from, "ru").locationName},{" "}
              {from && extractLocationDetails(from, "ru").countryName}
            </div>
            <ArrowRight />
            <div>
              {to && extractLocationDetails(to, "ru").locationName},{" "}
              {to && extractLocationDetails(to, "ru").countryName}
            </div>
          </div>
          <div className="main_text_body text-primary_1 "> results</div>
        </div>
      </CustomCard>
    </div>
  );
};
