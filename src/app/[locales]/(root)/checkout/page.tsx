import SecondFooter from '@/components/modules/footer/SecondFooter';
import CheckoutPage from '@/components/pages/CheckoutPage';

export default async function Checkout() {
  return (
    <>
      <main role='main' className='grow pb-16 bg-grayy dark:bg-dark_mode_main1'>
        <CheckoutPage />
      </main>
      <SecondFooter />
    </>
  );
}
