import { CheckoutSchema } from '@/schemas/checkout-form.shema';

import { FormValues } from '@/types/checkout-from.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import createPassList from '../helpers/createPassList';

export function useMainForm({ adult, children }: { adult: number; children: number }) {
  const methods = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(CheckoutSchema),
    defaultValues: {
      passengers: createPassList({ adult: adult, children: Number(children) }),
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
