import { ReactNode } from "react";
import clsx from "clsx";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium",
        "border",
        className
      )}
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
        color: "var(--color-text-primary)",
      }}
    >
      {children}
    </span>
  );
}