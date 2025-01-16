"use client";

import { memo, useState } from "react";

 import { IRouteResponse } from "@/types/route.types";
 import { extractLocationDetails } from "@/lib/extractLocationDetails";
 import { Route } from "./components/Route";
import { PassCount } from "./components/PassCount";
import { Carrier } from "./components/Carrier";
import { OpenDetailsButton } from "./components/OpenDetailsButton";
 import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { CustomCard } from "@/components/shared/CustomCard";

type Props = {
  element: IRouteResponse;
};

export const ResultCard = memo(({ element }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { i18n } = useTranslation();
  const locale = i18n.language;


  return (
    <CustomCard>
      <div className="flex flex-row items-center justify-between">
        <Route
          arrival={element.arrival.date_time || ""}
          departure={element.departure.date_time || ""}
          arrivalName={
            extractLocationDetails(element.arrival.toLocation, locale)
              .locationName || ""
          }
          departureName={
            extractLocationDetails(element.departure.fromLocation, locale)
              .locationName || ""
          }
        />
        <div className="flex flex-col items-center gap-4 ">
          <p className="h4 laptop:h2 text-text_prymery_color">{`${Math.floor(
            element.ticket_pricing.base_price
          )} uah`}</p>

          <Button
            variant={"default"}
            className="shadow-2xl small_2_bolt_text tablet:h5 text-prymery_btn_color"
          >
            Select
          </Button>
        </div>{" "}
      </div>

      <div className=" w-full h-[1px] bg-gray_0 dark:bg-black_2_for_text rounded-2xl relative my-4 "></div>

      <div className="relative flex items-center">
        <PassCount count={element.seats.available_seat_count || 0} />
        <Carrier>{element.carrier.name}</Carrier>
        <div>{element.provider_name}</div>

        <OpenDetailsButton
          text={!isOpen ? "Детальніше" : "Згорнути подробиці"}
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="hidden tablet:block tablet:ml-auto "
        />

        {/* <MobileDetails element={element} /> */}
      </div>
      {/* <Details element={element} open={isOpen} /> */}
    </CustomCard>
  );
});

ResultCard.displayName = "ResultCard";
