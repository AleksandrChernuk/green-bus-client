'use client';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { TsortBy, useRoutesStore } from '@/store/use-router-store';
import { BadgeEuro, ClockArrowDown, ClockArrowUp, Route, Star } from 'lucide-react';

const sortBuyItems = [
  {
    type: 'price',
    value: 'price_sort',
    icon: <BadgeEuro color='#098537' />,
  },
  {
    type: 'popularity',
    value: 'popularity_sort',
    icon: <Star color='#098537' />,
  },
  {
    type: 'departure_time',
    value: 'departure_time_sort',
    icon: <ClockArrowUp color='#098537' />,
  },
  {
    type: 'arrival_time',
    value: 'arrival_time_sort',
    icon: <ClockArrowDown color='#098537' />,
  },

  {
    type: 'shortest_journeye',
    value: 'shortest_journeye',
    icon: <Route color='#098537' />,
  },
];

export default function FilterSortByList() {
  const setSortBy = useRoutesStore((state) => state.setSortBy);
  return (
    <RadioGroup
      className='space-y-4'
      onValueChange={(value) => {
        setSortBy(value as TsortBy);
      }}
    >
      {sortBuyItems.map((el) => (
        <div className='flex items-center space-x-2' key={el.type}>
          <RadioGroupItem value={el.type} id={el.type} />
          <Label htmlFor={el.type} className='w-full main_text_body text-text_secondary_color'>
            <ul className='flex items-center justify-between'>
              <li>{el.value}</li>
              <li className='w-6 h-6'>{el.icon}</li>
            </ul>
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
