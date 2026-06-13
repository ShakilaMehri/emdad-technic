import { ReactNode } from "react";
import clsx from "clsx";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={clsx(
        "rounded-[20px] border p-6 transition-all duration-300",
        "hover:-translate-y-2",
        className
      )}
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      <div
        className="mb-4 text-3xl"
        style={{
          color: "var(--color-accent)",
        }}
      >
        {icon}
      </div>

      <h3
        className="mb-3"
        style={{
          color: "var(--color-text-primary)",
        }}
      >
        {title}
      </h3>

      <p>
        {description}
      </p>
    </article>
  );
}