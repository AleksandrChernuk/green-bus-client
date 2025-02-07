import SecondFooter from '@/components/modules/footer/SecondFooter';
import NewOrderPage from '@/components/pages/NewOrderPage';
import { cookies } from 'next/headers';
 
export default async function NewOrder() {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme') || 'default';

  console.log(theme);  
  return (
    <>
      <main role='main' className='pb-16 grow bg-grayy dark:bg-background_black_mode'>
        <NewOrderPage />
      </main>
      <SecondFooter className='bg-grayy dark:bg-background_black_mode' />
    </>
  );
}
