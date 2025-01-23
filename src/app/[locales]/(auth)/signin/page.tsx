import initTranslations from '@/app/i18n';
import AuthCard from '@/components/pages/Auth/AuthCard';
import SigninForm from '@/components/pages/Auth/SigninForm';
import BackButton from '@/components/shared/BackButton';
import { Container } from '@/components/shared/Container';

export default async function SigninPage({ params }: { params: Promise<{ locales: string }> }) {
  const { locales } = await params;

  const { t } = await initTranslations(locales, ['common']);

  return (
    <main role='main' className='flex-grow bg-grayy dark:bg-background_black_mode'>
      <section className='py-28'>
        <Container size='s' className='flex flex-col items-start justify-center gap-y-2 '>
          <div className='mb-4'>
            <BackButton />
          </div>

          <AuthCard
            locale={locales}
            headerLabel={t('signinTitle')}
            backButtonHref='/signup'
            backButtonLabel='authCreateAccount'
          >
            <SigninForm />
          </AuthCard>
        </Container>
      </section>
    </main>
  );
}
