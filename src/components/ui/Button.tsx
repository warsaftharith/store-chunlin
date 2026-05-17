import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const variants = {
    primary: 'bg-leaf text-white hover:bg-leaf/90',
    secondary: 'bg-wheat text-ink hover:bg-wheat/80',
    ghost: 'border border-line bg-white text-ink hover:border-leaf/30 hover:text-leaf',
  };

  return (
    <a className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
