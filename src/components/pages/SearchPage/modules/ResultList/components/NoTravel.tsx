 
import { Card } from "@/components/ui/card";
import Image from "next/image";
import noTravelImg from '../../../images/NoTravel.png'

  
export const NoTravel = () => {
  return (
    <Card className="flex flex-col items-center self-center gap-8 p-5 text-center w-fit">
      <Image
        src={noTravelImg}
        placeholder="blur"
        alt="peaple wait buses"
        className="overflow-hidden rounded-3xl mx-auto w-auto h-auto tablet:w-[330px] tablet:h-[325px] laptop:w-[350px] laptop:h-[345px]"
      />{" "}
      <h3 className="h3">
        No travel on the following dates: Friday, October 19
      </h3>
    </Card>
  );
};
