import SecondFooter from '@/components/modules/footer/SecondFooter';
import NewOrderPage from '@/components/pages/NewOrderPage';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getCookies } from 'cookies-next/server';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function NewOrder({ searchParams }: { searchParams: SearchParams }) {
  const slug = await searchParams;
 


  const allCookies = await getCookies({ cookies });
  console.log(allCookies);


  if (!slug.adult && !slug.children) {
    redirect('/');
  }
  return (
    <>
      <main role='main' className='pb-16 grow bg-grayy dark:bg-background_black_mode'>
        <NewOrderPage />
      </main>
      <SecondFooter className='bg-grayy dark:bg-background_black_mode' />
    </>
  );
}
