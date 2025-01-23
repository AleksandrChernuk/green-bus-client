import initTranslations from '@/app/i18n';
import { IconWorning } from '@/components/icons/IconWorning';
import { AccountActionsList } from '@/constans/constans.account-actions-list';
import { CircleCheck } from 'lucide-react';
import Link from 'next/link';

export default async function AccountActions({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ['common']);

  return (
    <div>
      <h5 className='mb-4 h5 text-text_secondary_color'>{t('authYouCan')}</h5>

      <ul className='flex flex-col gap-4'>
        {AccountActionsList.map((el) => (
          <li key={el.id} className='flex flex-row items-center gap-2'>
            <CircleCheck size={24} className='stroke-primary' />
            <p>{t(el.text)}</p>
          </li>
        ))}
      </ul>

      <div className='flex flex-row items-center gap-2 mt-8'>
        <IconWorning />
        <p className='small_text text-text_secondary_color'>
          {t('auth_terms_of_the')}{' '}
          <Link href={'/'} replace aria-label='go home page' className='text-primary'>
            {t('auth_public_offer')}
          </Link>
          , {t('auth_and')}{' '}
          <Link href={'/'} className='text-primary'>
            {t('auth_returns_policy')}
          </Link>
        </p>
      </div>
    </div>
  );
}
