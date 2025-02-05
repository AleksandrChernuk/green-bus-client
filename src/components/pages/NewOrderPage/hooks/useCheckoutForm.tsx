/* eslint-disable react-hooks/exhaustive-deps */
import { CheckoutSchema } from '@/schemas/checkout-form.shema';
import { FormValues } from '@/types/checkout-from.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import createPassList from '../helpers/createPassList';
import { useSearchParams } from 'next/navigation';

export function useMainForm() {
  const params = useSearchParams();

  const methods = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(CheckoutSchema),
    defaultValues: {
      passengers: createPassList({
        adult: params.get('adult') ? Number(params.get('adult')) : 1,
        children: params.get('children') ? Number(params.get('children')) : 0,
      }),
      email: '',
      phone: '',
    },
  });

  useEffect(() => {
    const storedPassengers = localStorage.getItem('passengers');

    if (typeof window !== 'undefined' && storedPassengers) {
      const passengers = JSON.parse(storedPassengers);
      methods.reset({ passengers });
    }
  }, []);

  useEffect(() => {
    const subscription = methods.watch((value) => {
      localStorage.setItem('passengers', JSON.stringify(value.passengers));
    });

    return () => subscription.unsubscribe();
  }, [methods.watch]);

  const { handleSubmit } = methods;

  const onSubmit = async (data: FormValues) => {
    console.log('Form Submitted:', data);
  };

  return { methods, onSubmit, handleSubmit };
}
