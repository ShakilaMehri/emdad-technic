import Container from "@/components/ui/Container";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqs } from "@/data/faqsData";

export default function FAQs() {
  return (
    <section className="py-20 bg-background-secondary">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            سوالات متداول
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            پاسخ سوالات رایج درباره خدمات امداد خودرو
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <FAQAccordion
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
