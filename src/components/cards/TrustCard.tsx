import type { TrustCardProps } from '@/types';

export default function TrustCard({ icon, title, description }: TrustCardProps) {
  return (
    <div className="flex flex-col items-center text-center gap-4 p-6">
      <div className="w-14 h-14 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)]">
        {icon}
      </div>
      <h3 className="text-[var(--color-text-primary)] font-bold">{title}</h3>
      <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
