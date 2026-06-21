import { ReactNode } from "react";
import clsx from "clsx";

type TrustCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
};

export default function TrustCard({ icon, title, description, className }: TrustCardProps) {
  return (
    <article
      className={clsx(
        "rounded-[20px] border p-6 transition-all duration-300 hover:-translate-y-1",
        className,
      )}
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="mb-4" style={{ color: "var(--color-accent)" }}>
        {icon}
      </div>
      <h3 className="mb-3 text-lg font-semibold" style={{ color: "var(--color-text-primary)" }}>
        {title}
      </h3>
      <p className="text-sm leading-6" style={{ color: "var(--color-text-secondary)" }}>
        {description}
      </p>
    </article>
  );
}
