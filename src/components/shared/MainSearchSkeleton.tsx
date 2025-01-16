import { Skeleton } from "@/components/ui/skeleton";

export const MainSearchSkeleton = () => {
  return (
    <div className="relative overflow-hidden flex flex-col tablet:flex-row rounded-2xl bg-white dark:bg-dark_mode_main1 shadow-[0_4px_10px_0_rgba(0,0,0,0.1)]">
      <div className="flex flex-col tablet:flex-row tablet:items-center p-4 tablet:px-4 tablet:py-3 tablet:gap-[25px] laptop:gap-10 w-full">
        <Skeleton className="h-[40px] tablet:h-[58px] laptop:h-[55.59px] w-full bg-light_primary dark:bg-black_2_for_text" />
        <Skeleton className="h-[1px] tablet:hidden my-3 w-full bg-light_primary dark:bg-black_2_for_text" />

        <Skeleton className="h-[40px] tablet:h-[58px]  laptop:h-[55.59px] w-full bg-light_primary dark:bg-black_2_for_text" />
        <Skeleton className="h-[1px] tablet:hidden my-3 w-full bg-light_primary dark:bg-black_2_for_text" />

        <Skeleton className="h-[40px] tablet:h-[58px]  laptop:h-[55.59px] w-full  bg-light_primary dark:bg-black_2_for_text" />
        <Skeleton className="h-[1px] tablet:hidden my-3 w-full bg-light_primary dark:bg-black_2_for_text " />

        <Skeleton className="h-[40px] tablet:h-[58px]  laptop:h-[55.59px] w-full bg-light_primary dark:bg-black_2_for_text" />
      </div>
      <Skeleton className="min-w-[108px] laptop:min-w-[187px] min-h-[56px] laptop:min-h-full tablet:min-h-[72px] bg-light_primary dark:bg-black_2_for_text" />
    </div>
  );
};
