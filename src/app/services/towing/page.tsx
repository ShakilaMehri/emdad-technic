import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FAQAccordion from "@/components/ui/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import {
  towingHero,
  towingBenefits,
  towingProcess,
  towingFaqs,
} from "@/data/service-pages/towingData";

export const metadata: Metadata = {
  title: "خودروبر بندرعباس | تکنیک",
  description:
    "خدمات خودروبر و حمل خودرو در بندرعباس به صورت ۲۴ ساعته. اعزام سریع خودروبر با راننده‌های مجرب.",
};

export default function TowingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-12">
        <Container>
          <Badge>🚛 خودروبر حرفه‌ای</Badge>
          <h1
            className="mt-4 text-4xl font-bold leading-[1.3]"
            style={{ color: "var(--color-text-primary)" }}
          >
            {towingHero.title}
          </h1>
          {towingHero.lines.map((line, i) => (
            <p
              key={i}
              className="mt-3 text-base leading-7"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {line}
            </p>
          ))}
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="primary" href="tel:09017301443">
             📞 تماس فوری
            </Button>
            <Button variant="secondary" href="https://wa.me/989017301443">
             💬 واتساپ
            </Button>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-12">
        <Container>
          <h2
            className="mb-6 text-2xl font-bold"
            style={{ color: "var(--color-text-primary)" }}
          >
            مزایای خودروبر تکنیک
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {towingBenefits.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-[16px] border p-4"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                <span style={{ color: "var(--color-accent)" }}>{icon}</span>
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-12">
        <Container>
          <h2
            className="mb-6 text-2xl font-bold"
            style={{ color: "var(--color-text-primary)" }}
          >
            فرآیند درخواست خودروبر
          </h2>
          <div className="flex flex-col gap-4">
            {towingProcess.map((step, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-[16px] border p-5"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "var(--color-primary)",
                  }}
                >
                  {i + 1}
                </span>
                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <Container>
          <h2
            className="mb-6 text-2xl font-bold"
            style={{ color: "var(--color-text-primary)" }}
          >
            سوالات متداول
          </h2>
          <div className="flex flex-col gap-4">
            {towingFaqs.map((faq) => (
              <FAQAccordion
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </main>
  );
}
