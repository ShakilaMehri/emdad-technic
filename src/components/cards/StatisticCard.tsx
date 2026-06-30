import type { StatisticCardProps } from '@/types';
import { cn } from '@/lib/utils';

export default function StatisticCard({
  value,
  title,
  description,
  className,
}: StatisticCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]',
        'p-6 flex flex-col items-center text-center gap-2',
        className
      )}
    >
      <span className="text-4xl font-black text-[var(--color-accent)]">{value}</span>
      <span className="text-[var(--color-text-primary)] font-bold">{title}</span>
      {description && (
        <span className="text-[var(--color-text-secondary)] text-sm">{description}</span>
      )}
    </div>
  );
}
