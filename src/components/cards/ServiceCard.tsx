"use client";

import { ReactNode, useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={clsx(
  "rounded-[20px] border p-5 h-full",
  "transition-all duration-200",
  "hover:-translate-y-1",
  className
)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: isHovered ? "var(--color-accent)" : "var(--color-border)",
      }}
    >
      <div
        className="mb-3 text-2xl"
        style={{
          color: "var(--color-accent)",
        }}
      >
        {icon}
      </div>

      <h3
        className="mb-2 text-lg font-bold"
        style={{
          color: "var(--color-text-primary)",
        }}
      >
        {title}
      </h3>

      <p
        className="text-sm leading-6"
        style={{
          color: "var(--color-text-secondary)",
        }}
      >
        {description}
      </p>
    </article>
  );
}