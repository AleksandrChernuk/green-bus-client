import SecondFooter from '@/components/modules/footer/SecondFooter';
import NewOrderWrapp from '@/components/pages/NewOrderPage/NewOrderWrapp';
 
export default async function NewOrder() {
  return (
    <>
      <main role='main' className='pb-16 grow bg-grayy dark:bg-background_black_mode'>
        <NewOrderWrapp />
      </main>
      <SecondFooter className='bg-grayy dark:bg-background_black_mode' />
    </>
  );
}
