import { Button } from '@/components/ui/button';
import React, { ReactNode } from 'react';

type Props = {
  isOpen?: boolean;
  children: ReactNode;
  onClick?: () => void;
};

export default function DetailsOpenButton({ isOpen, children, onClick }: Props) {
  return (
    <Button
      variant={'link'}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      className='flex items-center gap-px p-0 text-primary_1 button_underline_bolt_text text-nowrap'
    >
      <span>{children}</span>
      <div className='hidden tablet:block'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='24'
          viewBox='0 0 25 24'
          fill='none'
          className={`rotate-0 ${isOpen && 'rotate-180'} transition-all data-state:[:open]`}
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M17.78 15.7084C17.9686 15.8906 18.2212 15.9914 18.4834 15.9891C18.7456 15.9869 18.9964 15.8817 19.1819 15.6963C19.3673 15.5109 19.4725 15.2601 19.4748 14.9979C19.4771 14.7358 19.3763 14.4831 19.1941 14.2945L13.1946 8.29408C13.0071 8.10659 12.7528 8.00126 12.4876 8.00124C12.2224 8.00122 11.9681 8.10652 11.7806 8.29397L5.78014 14.2935C5.59797 14.4821 5.49716 14.7347 5.49942 14.9969C5.50168 15.2591 5.60683 15.5099 5.79222 15.6953C5.97762 15.8808 6.22842 15.986 6.49062 15.9883C6.75282 15.9906 7.00543 15.8898 7.19404 15.7076L12.4874 10.415L17.78 15.7084Z'
            fill='#088537'
          />
        </svg>
      </div>
    </Button>
  );
}
