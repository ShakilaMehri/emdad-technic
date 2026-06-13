import clsx from "clsx";

type StatisticCardProps = {
  value: string;
  title: string;
  description?: string;
  className?: string;
};

export default function StatisticCard({
  value,
  title,
  description,
  className,
}: StatisticCardProps) {
  return (
    <article
      className={clsx(
        "rounded-[20px] border p-6 text-center",
        "transition-all duration-300 hover:-translate-y-1",
        className
      )}
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      <div
        className="mb-3 text-4xl font-bold"
        style={{
          color: "var(--color-accent)",
        }}
      >
        {value}
      </div>

      <h3
        className="mb-2 text-lg font-semibold"
        style={{
          color: "var(--color-text-primary)",
        }}
      >
        {title}
      </h3>

      {description && (
        <p
          className="text-sm leading-6"
          style={{
            color: "var(--color-text-secondary)",
          }}
        >
          {description}
        </p>
      )}
    </article>
  );
}