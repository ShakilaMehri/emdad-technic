type FAQAccordionProps = {
  question: string;
  answer: string;
};

export default function FAQAccordion({ question, answer }: FAQAccordionProps) {
  return (
    <details
      className="group overflow-hidden rounded-[20px] border"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between p-5 text-right">
        <span className="font-semibold" style={{ color: "var(--color-text-primary)" }}>
          {question}
        </span>
        <span
          className="text-xl transition-transform duration-200 group-open:rotate-45"
          style={{ color: "var(--color-accent)" }}
        >
          +
        </span>
      </summary>

      <div className="px-5 pb-5">
        <p className="text-sm leading-7" style={{ color: "var(--color-text-secondary)" }}>
          {answer}
        </p>
      </div>
    </details>
  );
}
