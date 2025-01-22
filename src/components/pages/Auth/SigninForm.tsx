'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { SigninSchema } from '@/schemas/auth-schemas';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import ViewPassword from './ViewPassword';
import FormError from './FormError';
import { Button } from '@/components/ui/button';
// import { useTranslation } from 'react-i18next';

const SigninForm = () => {
  // const { t } = useTranslation(['common']);

  const [error, setError] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();
  const [isViewPassword, setIsViewPassword] = useState(false);

  const form = useForm<z.infer<typeof SigninSchema>>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // const onSubmit = (values: z.infer<typeof SigninSchema>) => {
  //   setError('');

  //   startTransition(() => {});
  // };

  const onSubmit = () => {
    setError('');
    startTransition(() => {});
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <div className='space-y-4'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>{t("authEmail")}</FormLabel> */}
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    type='email'
                    placeholder='user@example.com'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>{t("authPassword")}</FormLabel> */}
                <FormControl>
                  <div className='relative'>
                    <Input
                      {...field}
                      disabled={isPending}
                      type={!isViewPassword ? 'password' : 'text'}
                      placeholder='******'
                    />
                    <ViewPassword
                      isViewPassword={isViewPassword}
                      setIsViewPassword={() => setIsViewPassword((prev) => !prev)}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormError message={error} />

        <Button
          type='submit'
          className='w-full py-4 text-white rounded-full h5'
          disabled={isPending}
        >
          Login
        </Button>
      </form>
    </Form>
  );
};

export default SigninForm;
