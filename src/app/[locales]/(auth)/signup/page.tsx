// import SignupForm from '@/components/auth/SignupForm';
import SignupForm from '@/components/pages/Auth/SignupForm';
import BackButton from '@/components/shared/BackButton';
import { Container } from '@/components/shared/Container';
//  import BackButton from "@/components/shared/BackButton";

export default async function SignupPage() {
  return (
    <>
      <main role='main' className='flex-grow bg-grayy dark:bg-background_black_mode'>
        <section className='pt-4'>
          <Container size='s' className='flex flex-col items-start justify-center gap-y-2 '>
            <div className='mb-4'>
              <BackButton />
            </div>
            <SignupForm />
          </Container>
        </section>
      </main>
      {/* <MainFooter /> */}
    </>
  );
}
