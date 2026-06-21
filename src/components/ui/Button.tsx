"use client";

import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import clsx from "clsx";

type BaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium transition-all duration-300",
    { "w-full": fullWidth },
    "disabled:opacity-50 disabled:cursor-not-allowed",
    { border: variant === "secondary" },
    className,
  );

  const styles = {
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

  const hoverEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (variant === "ghost") {
      (e.currentTarget as HTMLElement).style.color = "var(--color-accent)";
    } else if (variant === "secondary") {
      (e.currentTarget as HTMLElement).style.backgroundColor =
        "rgba(255, 255, 255, 0.1)";
    }
  };

  const hoverLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (variant === "ghost") {
      (e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)";
    } else if (variant === "secondary") {
      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
    }
  };

  if ("href" in props && props.href !== undefined) {
    const { href, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a
        href={href}
        className={classes}
        style={styles}
        onMouseEnter={hoverEnter}
        onMouseLeave={hoverLeave}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const { disabled, ...buttonProps } = props as ButtonAsButton;
  return (
    <button
      className={classes}
      style={styles}
      onMouseEnter={hoverEnter}
      onMouseLeave={hoverLeave}
      disabled={disabled}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
