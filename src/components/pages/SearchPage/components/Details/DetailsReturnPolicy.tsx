import { useCurrentRouteStore } from '@/store/useCurrentRoute';
import React from 'react';

export default function DetailsReturnPolicy({ hasCardWrapp }: { hasCardWrapp?: boolean }) {
  const сurrentRoute = useCurrentRouteStore((state) => state.сurrentRoute);

  if (
    !сurrentRoute?.details?.return_rules_description ||
    сurrentRoute.details.return_rules_description.length === 0
  ) {
    return null;
  }

  return (
    <div
      className={`space-y-1 ${hasCardWrapp && 'p-4 tablet:p-6 bg-card_bg_primery shadow-(--shadow-custom) rounded-2xl dark:bg-dark_mode_main1'}`}
    >
      <h5 className='h5 text-text_prymery_color'>Return policy:</h5>
      <ul>
        {сurrentRoute?.details?.return_rules_description.map((el) => (
          <li
            className='text-wrap text-text_secondary_color  text-[10px] mobile:small_text'
            key={el}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}
