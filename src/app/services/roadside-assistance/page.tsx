import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FAQAccordion from "@/components/ui/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import {
  roadsideHero,
  roadsideBenefits,
  roadsideProcess,
  roadsideFAQs,
} from "@/data/service-pages/roadside-assistance";

export const metadata: Metadata = {
  title: "امداد خودرو بندرعباس | تکنیک",
  description:
    "خدمات امداد خودرو در محل در بندرعباس، ۲۴ ساعته و ۷ روز هفته. اعزام سریع با کمترین زمان انتظار.",
};

export default function RoadsideAssistancePage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-12">
        <Container>
          <Badge>🟢 ۲۴ ساعته آماده خدمت</Badge>
          <h1
            className="mt-4 text-4xl font-bold leading-[1.3]"
            style={{ color: "var(--color-text-primary)" }}
          >
            {roadsideHero.title}
          </h1>
          {roadsideHero.lines.map((line, i) => (
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
            مزایای خدمات امداد خودرو تکنیک
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {roadsideBenefits.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-[16px] border p-4"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                <Icon size={20} style={{ color: "var(--color-accent)" }} />
                <span className="text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
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
            فرآیند دریافت خدمات
          </h2>
          <div className="flex flex-col gap-4">
            {roadsideProcess.map(({ step, title, desc }) => (
              <div
                key={step}
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
                  {step}
                </span>
                <div>
                  <p className="font-semibold" style={{ color: "var(--color-text-primary)" }}>
                    {title}
                  </p>
                  <p className="mt-1 text-sm leading-6" style={{ color: "var(--color-text-secondary)" }}>
                    {desc}
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
            {roadsideFAQs.map((faq) => (
              <FAQAccordion key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </main>
  );
}
