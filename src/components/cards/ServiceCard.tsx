import { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <article
      className="group rounded-[20px] border p-5 h-full transition-all duration-200 hover:-translate-y-1"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)")
      }
    >
      <div className="mb-3" style={{ color: "var(--color-accent)" }}>
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold" style={{ color: "var(--color-text-primary)" }}>
        {title}
      </h3>
      <p className="text-sm leading-6" style={{ color: "var(--color-text-secondary)" }}>
        {description}
      </p>
    </article>
  );
}
