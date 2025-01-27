import { Container } from '@/components/shared/Container';
import React from 'react';

export default function CheckoutPage() {
  return (
    <section>
      <h1 className='sr-only'>CheckoutPage</h1>
      <Container size='l'>
        <div className='items-start justify-between py-6 laptop:py-14 tablet:flex gap-9 laptop:gap-12'>
          <div className='hidden min-w-80 max-w-80 laptop:block'></div>
          <div className='w-full space-y-6 laptop:space-y-8'></div>
        </div>
      </Container>
    </section>
  );
}
