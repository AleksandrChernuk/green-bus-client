import NotFoundPage from '@/components/pages/NotFoundPage';

export default async function NotFound({ params }: { params: Promise<{ locales: string }> }) {
  const { locales } = await params;

  return (
    <>
      <main role='main' className='grow pt-16 bg-grayy dark:bg-background_black_mode'>
        <NotFoundPage locales={locales} />
      </main>
    </>
  );
}
