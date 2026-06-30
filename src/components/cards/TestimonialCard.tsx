import { Star } from 'lucide-react';
import type { TestimonialCardProps } from '@/types';

export default function TestimonialCard({ name, review }: TestimonialCardProps) {
  return (
    <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 flex flex-col gap-4">
      <div className="flex gap-1" aria-label="پنج ستاره">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-amber-400 text-amber-400"
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="text-[var(--color-text-secondary)] leading-relaxed">{review}</p>
      <p className="text-[var(--color-text-primary)] font-bold text-sm">{name}</p>
    </article>
  );
}
