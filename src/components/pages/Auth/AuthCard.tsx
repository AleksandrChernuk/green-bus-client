import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import AuthSocial from './AuthSocial';
import AccountActions from './AccountActions';

interface Props {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  locale: string;
}

export default async function AuthCard({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  locale,
}: Props) {
  return (
    <Card className='flex flex-col w-full p-4 bg-white laptop:gap-16 shadow-custom_card tablet:flex-row tablet:justify-between tablet:p-6 laptop:py-10 laptop:px-8 dark:bg-dark_mode_main1'>
      <div>
        <CardHeader className='p-0 mb-6 space-y-0 text-left h1 text-text_prymery_color'>
          {headerLabel}
        </CardHeader>

        <AccountActions locale={locale} />
      </div>

      <div className='tablet:w-1/2'>
        <CardContent className='flex-grow p-0'>{children}</CardContent>
        <p className='my-2 text-xs text-center text-gray_2_for_body'>{'authOr'}</p>

        <CardFooter className='p-0'>
          <AuthSocial />
        </CardFooter>

        <CardFooter className='flex items-center justify-center p-0 mt-4 gap-x-4'>
          <p className='text-xs'>
            {backButtonLabel === 'authLogin' ? 'authAlreadyHaveAccount' : 'authDontHaveAccount'}
          </p>
          <Link href={backButtonHref} className='text-xs underline' aria-label='go home page'>
            {'backButtonLabel'}
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
}
