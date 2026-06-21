import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqs } from "@/data/faqsData";

export default function FAQs() {
  return (
    <section className="py-6">
      <div className="container mx-auto px-5">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold" style={{ color: "var(--color-text-primary)" }}>
            سوالات متداول امداد خودرو بندرعباس
          </h2>
          <p className="mx-auto max-w-md" style={{ color: "var(--color-text-secondary)" }}>
            پاسخ به سوالات رایج درباره خدمات امداد خودرو ۲۴ ساعته، یدک‌کش و مکانیک سیار تکنیک در بندرعباس.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FAQAccordion key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
