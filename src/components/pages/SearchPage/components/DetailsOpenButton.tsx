import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
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
      className='flex items-center gap-px p-0 text-primary_1 button_underline_bolt_text text-nowrap self-end'
    >
      <span>{children}</span>
      <ChevronDown
        size={16}
        className={`rotate-0 stroke-primary ${isOpen && 'rotate-180'} transition-all data-state:[:open]`}
      />
    </Button>
  );
}
