 import React from "react";
import FilterSortByList from '../../components/FilterRadioGroup';

export default function DestopFilter() {
  return (
    <aside>
      <ul className='space-y-4'>
        <li className='p-5'>
          <h5 className='mb-8 h3 text-text_prymery_color'>Сортувати за:</h5>
          <FilterSortByList />
        </li>
        <li className='p-5'>
          <h5 className='mb-8 h3 text-text_prymery_color'>Bus Companies:</h5>
        </li>
      </ul>
    </aside>
  );
};
