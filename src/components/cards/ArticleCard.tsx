import { ReactNode } from "react";
import clsx from "clsx";

type ArticleCardProps = {
  icon: ReactNode;
  title: string;
  readTime: string;
  className?: string;
};

export default function ArticleCard({
  icon,
  title,
  readTime,
  className,
}: ArticleCardProps) {
  return (
    <article
      className={clsx(
        "rounded-[20px] border p-6 cursor-pointer",
        "transition-all duration-300 hover:-translate-y-2",
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
        className="mb-3 text-lg font-semibold leading-8"
        style={{
          color: "var(--color-text-primary)",
        }}
      >
        {title}
      </h3>

      <div
        className="flex items-center justify-between text-sm"
        style={{
          color: "var(--color-text-secondary)",
        }}
      >
        <span>
          {readTime}
        </span>

        <span
          style={{
            color: "var(--color-accent)",
          }}
        >
          مطالعه مقاله ←
        </span>
      </div>
    </article>
  );
}