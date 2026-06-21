import { Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  review: string;
};

export default function TestimonialCard({
  name,
  review,
}: TestimonialCardProps) {
  return (
    <article
      className="rounded-[20px] border p-5 transition-colors duration-200 hover:border-[var(--color-accent)]"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="mb-3 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-5 w-5 fill-[var(--color-accent)] text-[var(--color-accent)]"
          />
        ))}
      </div>

      <p
        className="mb-4 text-sm leading-7"
        style={{
          color: "var(--color-text-secondary)",
        }}
      >
        {review}
      </p>

      <p
        className="font-semibold"
        style={{
          color: "var(--color-text-primary)",
        }}
      >
        {name}
      </p>
    </article>
  );
}
