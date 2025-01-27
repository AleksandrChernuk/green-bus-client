import MainFooter from '@/components/modules/footer/MainFooter';
 import MainPage from '@/components/pages/MainPage';

 export default async function Home({ params }: { params: Promise<{ locales: string }> }) {
   const { locales } = await params;
   return (
     <>
       <main role='main' className='grow pb-16 bg-grayy dark:bg-dark_mode_main1'>
         <MainPage locales={locales} />
       </main>
       <MainFooter />
     </>
   );
 }
