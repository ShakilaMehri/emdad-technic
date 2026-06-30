import Link from "next/link";
import clsx from "clsx";

type ArticleCardProps = {
  icon: React.ReactNode;
  title: string;
  readTime: string;
  href?: string;
  slug?: string;
  className?: string;
};

export default function ArticleCard({
  icon,
  title,
  readTime,
  href,
  slug,
  className,
}: ArticleCardProps) {
  const resolvedHref = href || (slug ? `/articles/${slug}` : "#");

  return (
    <Link
      href={resolvedHref}
      className={clsx(
        "group rounded-[20px] border bg-[var(--color-surface)] p-6 cursor-pointer",
        "transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-accent)]",
        className
      )}
    >
      <div className="mb-4 text-3xl text-[var(--color-accent)]">{icon}</div>

      <h3 className="mb-3 text-lg font-semibold leading-8 text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
        {title}
      </h3>

      <div className="flex items-center justify-between text-sm text-[var(--color-text-secondary)]">
        <span>{readTime}</span>
        <span className="text-[var(--color-accent)]">مطالعه مقاله ←</span>
      </div>
    </Link>
  );
}
