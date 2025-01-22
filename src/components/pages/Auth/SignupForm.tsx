'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { SignupSchema } from '@/schemas/auth-schemas';
import ViewPassword from './ViewPassword';
import FormError from './FormError';
import { Button } from '@/components/ui/button';
// import { useTranslation } from 'react-i18next';

const SignupForm = () => {
  const [error, setError] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();
  const [isViewPassword, setIsViewPassword] = useState(false);

  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      userName: '',
      email: '',
      password: '',
    },
  });

  // const onSubmit = (values: z.infer<typeof SignupSchema>) => {
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
            name='userName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>authName</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    type='text'
                    placeholder={'placeholderName'}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{'authEmail'}</FormLabel>
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
                <FormLabel>{'authPassword'}</FormLabel>
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

export default SignupForm;
