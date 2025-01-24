import initTranslations from '@/app/i18n';
import FilterSortByList from '../../components/FilterRadioGroup';
import { Suspense } from 'react';
import FilterCheckBoxList from '../../components/FilterCheckBoxList';
 
export default async function DestopFilter({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ['common']);

  return (
    <aside>
      <ul className='space-y-4'>
        <li className='p-5'>
          <h5 className='mb-8 h4 text-text_prymery_color'>{t('sort_by')}:</h5>
          <Suspense>
            <FilterSortByList />
          </Suspense>
        </li>
        <li className='p-5'>
          <h5 className='mb-8 h4 text-text_prymery_color'>{t('bus_companies')}:</h5>
          <FilterCheckBoxList   />
        </li>
      </ul>
    </aside>
  );
}
