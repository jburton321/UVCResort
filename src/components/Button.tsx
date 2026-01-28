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
  const baseStyles = 'bg-violet-700 text-white text-center font-bold uppercase tracking-wide cursor-pointer transition-colors hover:bg-violet-800';

  const variantStyles = {
    primary: 'rounded-3xl py-3.5 px-16 text-base',
    small: 'rounded-3xl py-1 px-3 text-xs w-32'
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
