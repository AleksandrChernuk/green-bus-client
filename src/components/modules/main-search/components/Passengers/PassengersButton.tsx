"use client";

import { IconDecrement } from "@/components/icons/IconDecrement";
import { IconIncrement } from "@/components/icons/IconIncrement";
import { useSearchStore } from "@/store/search-store";
import { memo } from "react";

type Props = {
  type: "adult" | "children";
  value: number;
};

export const PassengersButton = memo(({ value, type }: Props) => {
  const decrementPassenger = useSearchStore((state) => state.decrementPassenger);
  const incrementPassenger = useSearchStore((state) => state.incrementPassenger);

  const isAdult = type === "adult";
  const maxValue = 10;
  const minValue = isAdult ? 1 : 0;

  return (
    <div className={`flex flex-row items-center justify-between gap-20 ${isAdult && "border-px border-gray_0"}`}>
      <p className="text-addional_regular_text text-text-search_color text-nowrap">{isAdult ? "adult" : "children"}</p>

      <div className="bg-white flex gap-2 items-center justify-between p-1 w-24 dark:bg-background_black_mode dark:hover:bg-black border-[1px] border-gray_2_for_body dark:border-gray_2_for_body rounded-md transition-all">
        <button
          className="p-1"
          onClick={() => decrementPassenger(type)}
          disabled={value === minValue}
          aria-label={`Decrement ${isAdult ? "adult" : "children"}`}
        >
          <IconDecrement disabled={value === minValue} />
        </button>

        <p className="text-center h5 text-search_color grow">{value}</p>

        <button
          className="p-1"
          onClick={() => incrementPassenger(type)}
          disabled={value === maxValue}
          aria-label={`Increment ${isAdult ? "adult" : "children"}`}
        >
          <IconIncrement disabled={value === maxValue} />
        </button>
      </div>
    </div>
  );
});

PassengersButton.displayName = "PassengersButton";
