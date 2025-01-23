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
import { CircleAlert } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SignupForm = () => {
  const { t } = useTranslation(['common']);

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

  const onSubmit = (values: z.infer<typeof SignupSchema>) => {
    console.log(values);
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
            render={({ field, fieldState }) => {
              return (
                <FormItem>
                  <FormLabel className='text-text_prymery_color'>{t('authName')}</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Input
                        {...field}
                        onChange={(e) => {
                          field.onChange(e.target.value.trim());
                        }}
                        disabled={isPending}
                        type='text'
                        placeholder={t('placeholderName')}
                        className={`${Boolean(fieldState?.error) && 'border-[#DE2A1A]   bg-[#FFE7E5] placeholder:text-[#DE2A1A]  dark:bg-background_black_mode'}`}
                      />
                      {Boolean(fieldState?.invalid) && (
                        <div className='absolute inset-y-0 flex items-center cursor-pointer pointer-events-none right-4'>
                          <CircleAlert className='stroke-[#DE2A1A]' />
                        </div>
                      )}
                    </div>
                  </FormControl>
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className='text-text_prymery_color'>{t('authEmail')}</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <Input
                      {...field}
                      onChange={(e) => {
                        field.onChange(e.target.value.trim());
                      }}
                      disabled={isPending}
                      type='email'
                      placeholder='user@example.com'
                      autoComplete='off'
                      name='unique-email-field'
                      className={`${Boolean(fieldState?.error) && 'border-[#DE2A1A]   bg-[#FFE7E5] placeholder:text-[#DE2A1A]  dark:bg-background_black_mode'}`}
                    />
                    {Boolean(fieldState?.error) && (
                      <div className='absolute inset-y-0 flex items-center cursor-pointer pointer-events-none right-4'>
                        <CircleAlert className='stroke-[#DE2A1A]' />
                      </div>
                    )}
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-text_prymery_color'>{t('authPassword')}</FormLabel>
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
          className='w-full py-4 text-white rounded-full h5 max-h-[52px]'
          disabled={isPending}
        >
          Login
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
