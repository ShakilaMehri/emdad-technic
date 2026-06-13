"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({
  children,
  variant = "primary",
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium transition-all duration-300",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        {
          "": variant === "primary",
          "border": variant === "secondary",
          "": variant === "ghost",
        },
        className
      )}
      onMouseEnter={(e) => {
        if (variant === "ghost") {
          (e.target as HTMLButtonElement).style.color = "var(--color-accent)";
        } else if (variant === "secondary") {
          (e.target as HTMLButtonElement).style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        }
      }}
      onMouseLeave={(e) => {
        if (variant === "ghost") {
          (e.target as HTMLButtonElement).style.color = "var(--color-text-primary)";
        } else if (variant === "secondary") {
          (e.target as HTMLButtonElement).style.backgroundColor = "transparent";
        }
      }}
      style={{
        backgroundColor:
          variant === "primary"
            ? "var(--color-accent)"
            : variant === "secondary"
            ? "transparent"
            : "transparent",

        color:
          variant === "primary"
            ? "var(--color-primary-light)"
            : "var(--color-text-primary)",

        borderColor:
          variant === "secondary"
            ? "var(--color-text-primary)"
            : "transparent",
        borderWidth: variant === "secondary" ? "2px" : "0",
        borderStyle: "solid",
      }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}