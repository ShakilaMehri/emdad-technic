"use client";

import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import clsx from "clsx";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
  className?: string;children?: React.ReactNode;
};

type AsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: never;
  };

type AsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

type ButtonProps = AsButton | AsAnchor;

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  className,
  href,
  ...props
}: ButtonProps) {
  const baseClass = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium transition-all duration-300",
    { "w-full": fullWidth },
    "disabled:opacity-50 disabled:cursor-not-allowed",
    { border: variant === "secondary" },
    className,
  );

  const baseStyle = {
    backgroundColor:
      variant === "primary"
        ? "var(--color-accent)"
        : "transparent",
    color:
      variant === "primary"
        ? "var(--color-primary-light)"
        : "var(--color-text-primary)",
    borderColor:
      variant === "secondary" ? "var(--color-text-primary)" : "transparent",
    borderWidth: variant === "secondary" ? "2px" : "0",
    borderStyle: "solid" as const,
  };

  const hoverHandlers = {
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      if (variant === "ghost") {
        (e.currentTarget as HTMLElement).style.color = "var(--color-accent)";
      } else if (variant === "secondary") {
        (e.currentTarget as HTMLElement).style.backgroundColor =
          "rgba(255, 255, 255, 0.1)";
      }
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      if (variant === "ghost") {
        (e.currentTarget as HTMLElement).style.color =
          "var(--color-text-primary)";
      } else if (variant === "secondary") {
        (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
      }
    },
  };

  if (href) {
    return (<a
        href={href}
        className={baseClass}
        style={baseStyle}
        {...hoverHandlers}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={baseClass}
      style={baseStyle}
      {...hoverHandlers}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
