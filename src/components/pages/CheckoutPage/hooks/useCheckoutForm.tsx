import { CheckoutSchema } from '@/schemas/checkout-form.shema';

import { FormValues } from '@/types/checkout-from.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TPassengersProps } from '../types';
import createPassList from '../helpers/createPassList';

export function useMainForm({ adult, childrenPass }: TPassengersProps) {
  const methods = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(CheckoutSchema),
    defaultValues: {
      passengers: createPassList({ adult: Number(adult), children: Number(childrenPass) }),
      payment: 'card',
      email: '',
      phone: '',
      accept_rules: false,
      processing_data: false,
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: FormValues) => {
    console.log('data', data);
  };

  return { methods, handleSubmit, onSubmit };
}
