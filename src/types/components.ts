import type { ReactNode, ButtonHTMLAttributes, HTMLAttributes, AnchorHTMLAttributes } from 'react';

export interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'small' | 'primary' | 'secondary';
  className?: string;
}

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export type ButtonProps =
  | (ButtonHTMLAttributes<HTMLButtonElement> & {
      variant?: 'primary' | 'secondary' | 'ghost';
      size?: 'sm' | 'md' | 'lg';
      fullWidth?: boolean;
      children?: ReactNode;
      className?: string;
      href?: undefined;
    })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & {
      variant?: 'primary' | 'secondary' | 'ghost';
      size?: 'sm' | 'md' | 'lg';
      fullWidth?: boolean;
      children?: ReactNode;
      className?: string;
      href: string;
    });
