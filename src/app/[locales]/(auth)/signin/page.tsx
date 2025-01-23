import initTranslations from '@/app/i18n';
import AccountActions from '@/components/pages/Auth/AccountActions';
import AuthCard from '@/components/pages/Auth/AuthCard';
import SigninForm from '@/components/pages/Auth/SigninForm';
import BackButton from '@/components/shared/BackButton';
import { Container } from '@/components/shared/Container';

export default async function SigninPage({ params }: { params: Promise<{ locales: string }> }) {
  const { locales } = await params;

  const { t } = await initTranslations(locales, ['common']);

  return (
    <main role='main' className='flex-grow bg-grayy dark:bg-background_black_mode'>
      <section className='py-4 tablet:pb-7 tablet:pt-4 laptop:pt-28 laptop:pb-28'>
        <Container size='s' className='flex flex-col items-start justify-center'>
          <div className='mb-4 laptop:mb-8'>
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
          <div className='block mt-6 tablet:hidden'>
            <AccountActions locale={locales} />
          </div>
        </Container>
      </section>
    </main>
  );
}
