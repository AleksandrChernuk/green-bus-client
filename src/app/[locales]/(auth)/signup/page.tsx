import initTranslations from '@/app/i18n';
import AuthCard from '@/components/pages/Auth/AuthCard';
import SignupForm from '@/components/pages/Auth/SignupForm';
import BackButton from '@/components/shared/BackButton';
import { Container } from '@/components/shared/Container';

export default async function SignupPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const { t } = await initTranslations(locale, ['common']);
  return (
    <main role='main' className='flex-grow bg-grayy dark:bg-background_black_mode'>
      <section className='pt-4'>
        <Container size='s' className='flex flex-col items-start justify-center gap-y-2 '>
          <div className='mb-4'>
            <BackButton />
          </div>
          <AuthCard
            locale={locale}
            headerLabel={t('signupTitle')}
            backButtonHref='/signin'
            backButtonLabel='authCreateAccount'
          >
            <SignupForm />
          </AuthCard>
        </Container>
      </section>
    </main>
  );
}
