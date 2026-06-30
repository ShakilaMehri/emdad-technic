import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "تماس با ما | ارتباط با امداد خودرو تکنیک بندرعباس",
  description:
    "تماس با امداد خودرو تکنیک بندرعباس. پشتیبانی ۲۴ ساعته، خدمات امداد خودرو، خودروبر و مکانیک سیار در سراسر بندرعباس. شماره تماس: ۰۹۰۱۷۳۰۱۴۴۳",
  keywords: [
    "تماس با امداد خودرو بندرعباس",
    "شماره امداد خودرو بندرعباس",
    "آدرس امداد خودرو تکنیک",
    "پشتیبانی امداد خودرو",
  ],
  openGraph: {
    title: "تماس با ما | ارتباط با امداد خودرو تکنیک بندرعباس",
    description:
      "تماس با امداد خودرو تکنیک بندرعباس. پشتیبانی ۲۴ ساعته. شماره تماس: ۰۹۰۱۷۳۰۱۴۴۳",
    url: "https://emdadtechnic.ir/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--color-primary-light)" }}
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6">📞 تماس با ما</Badge>
            <h1
              className="mb-4 text-4xl font-bold md:text-5xl"
              style={{ color: "var(--color-text-primary)" }}
            >
              در خدمت شما هستیم
            </h1>
            <p
              className="text-lg leading-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              ۲۴ ساعته و ۷ روز هفته آماده پاسخگویی و ارائه خدمات امداد خودرو
              در سراسر بندرعباس
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <Container>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {/* Phone Card */}
            <article
              className="rounded-[20px] border p-8 text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              <div
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(245, 158, 11, 0.15)" }}
              >
                <Phone
                  size={32}
                  style={{ color: "var(--color-accent)" }}
                  strokeWidth={1.5}
                />
              </div>
              <h3
                className="mb-2 text-xl font-bold"
                style={{ color: "var(--color-text-primary)" }}
              >
                تماس تلفنی
              </h3>
              <p
                className="mb-4 text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                برای دریافت خدمات فوری
              </p>
              <a
                href="tel:09017301443"
                className="inline-block text-2xl font-bold transition-colors hover:opacity-80"
                style={{ color: "var(--color-accent)" }}
                dir="ltr"
              >
                ۰۹۰۱۷۳۰۱۴۴۳
              </a>
            </article>

            {/* Location Card */}
            <article
              className="rounded-[20px] border p-8 text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              <div
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(245, 158, 11, 0.15)" }}
              >
                <MapPin
                  size={32}
                  style={{ color: "var(--color-accent)" }}
                  strokeWidth={1.5}
                />
              </div>
              <h3
                className="mb-2 text-xl font-bold"
                style={{ color: "var(--color-text-primary)" }}
              >
                محدوده خدمات‌رسانی
              </h3>
              <p
                className="mb-4 text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                پوشش کامل شهر
              </p>
              <p
                className="text-xl font-bold"
                style={{ color: "var(--color-text-primary)" }}
              >
                بندرعباس
              </p>
            </article>

            {/* Hours Card */}
            <article
              className="rounded-[20px] border p-8 text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              <div
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(245, 158, 11, 0.15)" }}
              >
                <Clock
                  size={32}
                  style={{ color: "var(--color-accent)" }}
                  strokeWidth={1.5}
                />
              </div>
              <h3
                className="mb-2 text-xl font-bold"
                style={{ color: "var(--color-text-primary)" }}
              >
                ساعات کاری
              </h3>
              <p
                className="mb-4 text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                همیشه در دسترس
              </p>
              <p
                className="text-xl font-bold"
                style={{ color: "var(--color-accent)" }}
              >
                ۲۴ ساعته و ۷ روز هفته
              </p>
            </article>

            {/* Email Card */}
            <article
              className="rounded-[20px] border p-8 text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              <div
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(245, 158, 11, 0.15)" }}
              >
                <Mail
                  size={32}
                  style={{ color: "var(--color-accent)" }}
                  strokeWidth={1.5}
                />
              </div>
              <h3
                className="mb-2 text-xl font-bold"
                style={{ color: "var(--color-text-primary)" }}
              >
                ایمیل
              </h3>
              <p
                className="mb-4 text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                برای سوالات و پیشنهادات
              </p>
              <a
                href="mailto:info@emdadtechnic.ir"
                className="inline-block text-lg font-semibold transition-colors hover:opacity-80"
                style={{ color: "var(--color-accent)" }}
                dir="ltr"
              >
                info@emdadtechnic.ir
              </a>
            </article>
          </div>
        </Container>
      </section>

      {/* Emergency Call Banner */}
      <section
        className="py-12"
        style={{ backgroundColor: "var(--color-primary-light)" }}
      >
        <Container>
          <div
            className="rounded-[24px] p-8 text-center md:p-12"
            style={{
              backgroundColor: "rgba(245, 158, 11, 0.1)",
              border: "2px solid var(--color-accent)",
            }}
          >
            <h2
              className="mb-3 text-3xl font-bold"
              style={{ color: "var(--color-text-primary)" }}
            >
              نیاز به امداد فوری دارید؟
            </h2>
            <p
              className="mb-6 text-lg"
              style={{ color: "var(--color-text-secondary)" }}
            >
              همین الان تماس بگیرید - حداکثر ۳۰ دقیقه به محل شما می‌رسیم
            </p>
            <a href="tel:09017301443">
              <Button className="px-8 py-4 text-lg">
                <Phone size={20} className="ml-2" />
                تماس فوری: ۰۹۰۱۷۳۰۱۴۴۳
              </Button>
            </a>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <Container>
          <div className="mx-auto max-w-5xl">
            <h2
              className="mb-8 text-center text-3xl font-bold"
              style={{ color: "var(--color-text-primary)" }}
            >
              محدوده خدمات‌رسانی
            </h2>
            <div
              className="overflow-hidden rounded-[24px] border"
              style={{ borderColor: "var(--color-border)" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229537.8736634956!2d55.88358887119262!3d27.186620788799893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed556d1ce4c90cd%3A0xedc0f2e3c5cfa104!2sBandar%20Abbas%2C%20Hormozgan%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="نقشه بندرعباس"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </main>
  );
}
