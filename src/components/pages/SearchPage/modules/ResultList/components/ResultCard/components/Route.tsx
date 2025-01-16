import { format } from "date-fns";

type Props = {
  arrival: string;
  arrivalName: string;
  departureName: string;
  departure: string;
};

export const Route = ({ arrival, departure, departureName, arrivalName }: Props) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <ul className="hidden tablet:block tablet:space-y-2">
        <li className="h3 text-text_prymery_color">{format(departure || new Date(), "HH:mm")}</li>
        <li className="body_medium laptop:h4 text-text_seconddary_color">{departureName}</li>
      </ul>

      <ul className="space-y-4 tablet:hidden">
        <li className="h5 text-text_prymery_color">{format(departure || new Date(), "HH:mm")}</li>
        <li className="small_text text-text_seconddary_color">{`${"hours"}h,${"minutes"}m`}</li>
        <li className="h5 text-text_prymery_color">{format(arrival || new Date(), "HH:mm")}</li>
      </ul>

      <ul className="hidden tablet:block tablet:space-y-2">
        <li className="h3 text-text_prymery_color">{format(arrival || new Date(), "HH:mm")}</li>
        <li className="body_medium laptop:h4 text-text_seconddary_color">{arrivalName}</li>
      </ul>

      <ul className="space-y-10 tablet:hidden body_medium text-text_seconddary_color">
        <li>{departureName}</li>
        <li>{arrivalName}</li>
      </ul>
    </div>
  );
};
