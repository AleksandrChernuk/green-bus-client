import SecondFooter from '@/components/modules/footer/SecondFooter';
import NewOrderPage from '@/components/pages/NewOrderPage';
// import { cookies } from 'next/headers';
// import { redirect } from 'next/navigation';

export default async function NewOrder() {
  // const cookieStore = await cookies();

  return (
    <>
      <main role='main' className='pb-16 grow bg-grayy dark:bg-background_black_mode'>
        <NewOrderPage />
      </main>
      <SecondFooter className='bg-grayy dark:bg-background_black_mode' />
    </>
  );
}
