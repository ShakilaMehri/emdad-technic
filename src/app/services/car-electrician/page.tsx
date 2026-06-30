import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FAQAccordion from "@/components/ui/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import {
  carElectricianHero,
  carElectricianBenefits,
  carElectricianProcess,
  carElectricianFaqs,
} from "@/data/service-pages/car-electrician";

export const metadata: Metadata = {
  title: "برق خودرو بندرعباس | امداد تکنیک",
  description:
    "عیب‌یابی و تعمیر سیستم برق خودرو در محل توسط متخصصین مجرب. اعزام سریع ۲۴ ساعته در بندرعباس.",
};

export default function CarElectricianPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-12" style={{ backgroundColor: "var(--color-primary)" }}>
        <Container>
          <Badge>⚡ تخصصی‌ترین برق‌کار خودرو</Badge>
          <h1
            className="mt-4 text-4xl font-bold leading-[1.3]"
            style={{ color: "var(--color-text-primary)" }}
          >
            {carElectricianHero.title}
          </h1>
          {carElectricianHero.lines.map((line, i) => (
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
            className="mb-8 text-2xl font-bold"
            style={{ color: "var(--color-text-primary)" }}
          >
            مزایای برق خودرو تکنیک
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {carElectricianBenefits.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 rounded-[20px] border p-5 text-center"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                <span style={{ color: "var(--color-accent)" }}>{item.icon}</span>
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {item.label}
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
            className="mb-8 text-2xl font-bold"
            style={{ color: "var(--color-text-primary)" }}
          >
            مراحل دریافت خدمت
          </h2>
          <ol className="flex flex-col gap-4">
            {carElectricianProcess.map((step, i) => (
              <li
                key={i}
                className="flex items-center gap-4 rounded-[20px] border p-5"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "var(--color-primary)",
                  }}
                >
                  {i + 1}
                </span>
                <span
                  className="font-medium"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <Container>
          <h2
            className="mb-8 text-2xl font-bold"
            style={{ color: "var(--color-text-primary)" }}
          >
            سوالات متداول
          </h2>
          <div className="flex flex-col gap-4">
            {carElectricianFaqs.map((faq, i) => (
              <FAQAccordion
                key={i}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}
