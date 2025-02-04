import SecondFooter from '@/components/modules/footer/SecondFooter';
import CheckoutPage from '@/components/pages/CheckoutPage';
import { cookies } from 'next/headers';

export default async function NewOrder() {
  const cookieStore = await cookies();

  const adult = cookieStore.get('adult')?.value;
  const children = cookieStore.get('children')?.value;

  return (
    <>
      <main role='main' className='pb-16 grow bg-grayy dark:bg-background_black_mode'>
        <CheckoutPage adult={`${adult}`} childrenPass={`${children}`} />
      </main>
      <SecondFooter className='bg-grayy dark:bg-background_black_mode' />
    </>
  );
}
