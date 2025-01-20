'use client';

import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

const isAuth = false;

export default function MobileProfileLink() {
  const { t } = useTranslation(['common']);

  if (!isAuth) {
    return (
      <Button variant={'link'} className='justify-start text-text_prymery_color body_medium'>
        <User size={24} className='stroke-primary' />
        <Link href={'/login'} replace>
          {t('mainNavProfileLink')}
        </Link>
      </Button>
    );
  }

  if (isAuth) {
    return (
      <Button variant={'link'} className='justify-start text-text_prymery_color body_medium'>
        <User size={24} className='stroke-primary' />
        <Link href={'/profile'} replace>
          {t('mainNavProfileLink')}
        </Link>
      </Button>
    );
  }
}
