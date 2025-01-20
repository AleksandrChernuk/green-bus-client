'use client';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { TsortBy, useRoutesStore } from '@/store/use-router-store';
import { BadgeEuro, ClockArrowDown, ClockArrowUp, Route } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const sortBuyItems = [
  {
    type: 'sort_buy_price',
    value: 'price_sort',
    icon: <BadgeEuro color='#098537' />,
  },

  {
    type: 'sort_buy_departure_time',
    value: 'departure_time_sort',
    icon: <ClockArrowUp color='#098537' />,
  },
  {
    type: 'sort_buy_arrival_time',
    value: 'arrival_time_sort',
    icon: <ClockArrowDown color='#098537' />,
  },

  {
    type: 'sort_buy_shortest_journeye',
    value: 'shortest_journeye',
    icon: <Route color='#098537' />,
  },
];

export default function FilterSortByList() {
  const setSortBy = useRoutesStore((state) => state.setSortBy);
  const [value, setValue] = useState('');
  const { t } = useTranslation(['search']);

  return (
    <RadioGroup
      className='space-y-4'
      value={value}
      onValueChange={(value) => {
        setValue(value);
        setSortBy(value as TsortBy);
      }}
    >
      {sortBuyItems.map((el) => (
        <div className='flex items-center space-x-2' key={el.type}>
          <RadioGroupItem value={el.type} id={el.type} />
          <Label htmlFor={el.type} className='w-full main_text_body text-text_secondary_color'>
            <ul className='flex items-center justify-between'>
              <li>{t(`${el.type}`)}</li>
              <li className='w-6 h-6'>{el.icon}</li>
            </ul>
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
