import { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  variant?: 'primary' | 'small';
  className?: string;
  onClick?: () => void;
}

export function Button({
  children = 'RESERVE NOW',
  variant = 'primary',
  className = '',
  onClick
}: ButtonProps) {
  const baseStyles = 'bg-violet-700 text-white text-center font-bold uppercase tracking-wide cursor-pointer transition-all hover:bg-violet-800 active:scale-[0.98] touch-manipulation';

  const variantStyles = {
    primary: 'rounded-3xl py-3 sm:py-3.5 px-8 sm:px-16 text-sm sm:text-base min-h-[48px]',
    small: 'rounded-3xl py-2 px-4 text-xs min-h-[44px] min-w-[100px] sm:min-w-[120px]'
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
