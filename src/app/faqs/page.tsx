import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import FAQAccordion from "@/components/ui/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import { faqs } from "@/data/faqsData";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "سوالات متداول | پاسخ به سوالات شما درباره امداد خودرو",
  description:
    "پاسخ به سوالات متداول درباره خدمات امداد خودرو، خودروبر و مکانیک سیار در بندرعباس. زمان رسیدن، هزینه‌ها، پوشش جغرافیایی و خدمات ۲۴ ساعته.",
  keywords: [
    "سوالات متداول امداد خودرو",
    "هزینه امداد خودرو بندرعباس",
    "زمان رسیدن امدادگر",
    "خدمات شبانه‌روزی امداد خودرو",
    "پوشش امداد خودرو بندرعباس",
  ],
  openGraph: {
    title: "سوالات متداول | پاسخ به سوالات شما درباره امداد خودرو",
    description:
      "پاسخ به رایج‌ترین سوالات درباره خدمات امداد خودرو تکنیک در بندرعباس.",
    url: "https://emdadtechnic.ir/faqs",
  },
};

export default function FAQsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--color-primary-light)" }}
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6">❓ سوالات متداول</Badge>
            <h1
              className="mb-4 text-4xl font-bold md:text-5xl"
              style={{ color: "var(--color-text-primary)" }}
            >
              پاسخ سوالات شما
            </h1>
            <p
              className="text-lg leading-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              پاسخ به رایج‌ترین سوالات درباره خدمات امداد خودرو تکنیک در
              بندرعباس
            </p>
          </div>
        </Container>
      </section>

      {/* FAQs Grid */}
      <section className="py-16" style={{ backgroundColor: "var(--color-background)" }}>
        <Container>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <FAQAccordion
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Trust Banner */}
      <section className="py-12" style={{ backgroundColor: "var(--color-primary-light)" }}>
        <Container>
          <div
            className="rounded-[24px] p-8 text-center"
            style={{ backgroundColor: "rgba(245, 158, 11, 0.1)", border: "1px solid var(--color-accent)" }}
          >
            <h2
              className="mb-3 text-2xl font-bold"
              style={{ color: "var(--color-text-primary)" }}
            >
              سوال دیگری دارید؟
            </h2>
            <p
              className="mb-6 text-lg"
              style={{ color: "var(--color-text-secondary)" }}
            >
              تیم پشتیبانی ما آماده پاسخگویی به تمام سوالات شماست
            </p>
            <a
              href="tel:09017301443"
              className=" inline-flex items-center gap-2 rounded-full px-8 py-3 font-semibold transition-all hover:opacity-90"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-primary)",
              }}
            >
              <Phone className="w-5 h-5" />
              تماس با پشتیبانی
            </a>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </main>
  );
}
