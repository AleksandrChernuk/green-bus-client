import { Container } from '@/components/shared/Container';
import { CustomCard } from '@/components/shared/CustomCard';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import errorImg from '../../../../public/images/error.webp';
import initTranslations from '@/app/i18n';

export default async function NotFoundPage({ locales }: { locales: string }) {
  const { t } = await initTranslations(locales, ['common']);

  return (
    <Container size='s'>
      <CustomCard className=' dark:bg-dark_mode_main1 flex flex-col items-center gap-4'>
        <Image
          src={errorImg}
          placeholder='blur'
          alt='errorImg'
          className='overflow-hidden rounded-3xl mx-auto w-auto h-auto tablet:w-[330px] tablet:h-[325px] laptop:w-[350px] laptop:h-[345px]'
        />
        <h1 className='h5 tablet:h1 text-text_prymery_color'>{t('errorTitle')}</h1>
        <Button asChild size={'secondary'} variant={'default'}>
          <Link href='/' replace>
            {t('mainPageBtn')}
          </Link>
        </Button>
      </CustomCard>
    </Container>
  );
}
