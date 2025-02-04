import SecondFooter from '@/components/modules/footer/SecondFooter';
import NewOrderPage from '@/components/pages/NewOrderPage';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';

export default async function NewOrder() {
  const adult = await getCookie('adult', { cookies });
  const children = await getCookie('children', { cookies });

  return (
    <>
      <main role='main' className='pb-16 grow bg-grayy dark:bg-background_black_mode'>
        <NewOrderPage adult={`${adult}`} childrenPass={`${children}`} />
      </main>
      <SecondFooter className='bg-grayy dark:bg-background_black_mode' />
    </>
  );
}
