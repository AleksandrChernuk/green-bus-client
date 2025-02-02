import { useCurrentRouteStore } from '@/store/useCurrentRoute';
import DetailsStopsItem from './DetailsStopsItem';
import { extractLocationDetails } from '@/lib/extractLocationDetails';

export default function DetailsStopsList() {
  const сurrentRoute = useCurrentRouteStore((state) => state.сurrentRoute);
  const stops = сurrentRoute?.details?.stops;

  console.log(сurrentRoute);

  if (!stops) return null;

  switch (сurrentRoute?.provider_name) {
    case 'KLR':
      return stops
        ?.slice(
          stops.findIndex(
            (el) => el.departure_date_time === `${сurrentRoute?.departure?.date_time}`
          ),
          stops.findIndex(
            (el) =>
              el.location.name ===
              `${extractLocationDetails(сurrentRoute?.arrival?.toLocation, 'uk').locationName}`
          )
        )
        .map((element, idx, array) => (
          <DetailsStopsItem
            point={element}
            key={`${element.station.name}_${idx}`}
            isFirst={idx === 0}
            isLast={idx === array.length - 1}
          />
        ));

    case 'Octobus':
      return stops
        ?.slice(
          stops.findIndex((el) => el.station.id === `${сurrentRoute?.departure?.station_id}`),
          stops.findIndex((el) => el.station.id === `${сurrentRoute?.arrival?.station_id}`)
        )
        .map((element, idx, array) => (
          <DetailsStopsItem
            point={element}
            key={`${element.station.name}_${idx}`}
            isFirst={idx === 0}
            isLast={idx === array.length - 1}
          />
        ));

    case 'TransTempo':
      return stops.map((element, idx, array) => (
        <DetailsStopsItem
          point={element}
          key={`${element.station.name}_${idx}`}
          isFirst={idx === 0}
          isLast={idx === array.length - 1}
        />
      ));

    default:
      return stops.map((element, idx, array) => (
        <DetailsStopsItem
          point={element}
          key={`${element.station.name}_${idx}`}
          isFirst={idx === 0}
          isLast={idx === array.length - 1}
        />
      ));
  }
}
