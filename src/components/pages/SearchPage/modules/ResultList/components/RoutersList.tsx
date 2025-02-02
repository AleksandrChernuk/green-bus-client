import { IRouteResponse } from '@/types/route.types';
import { RouteCard } from './RouteCard';
 
type Props = {
  routersList: IRouteResponse[];
};
export default function RoutersList({ routersList }: Props) {
  return (
    <ul className='flex flex-col space-y-8'>
      {routersList.map((route, i) => {
        return <RouteCard key={`${route.route_id}_${i}`} element={route} />;
      })}
    </ul>
  );
}
