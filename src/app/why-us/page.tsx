import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import FinalCTA from "@/components/sections/FinalCTA";
import { Phone, Users, Award, ThumbsUp } from "lucide-react";
import { whyUsItems } from "@/data/WhyUsData";
import TrustCard from "@/components/cards/TrustCard";

export const metadata: Metadata = {
  title: "چرا امداد خودرو تکنیک؟ | مزایا و تفاوت‌های ما",
  description:
    "با بیش از ۱۰ سال تجربه، +۱۵۰۰۰ مشتری راضی، پشتیبانی ۲۴/۷ و ۹۸٪ رضایت مشتریان، امداد خودرو تکنیک انتخاب مطمئن شما در بندرعباس است.",
  openGraph: {
    title: "چرا امداد خودرو تکنیک؟ | مزایا و تفاوت‌های ما",
    description:
      "با بیش از ۱۰ سال تجربه، +۱۵۰۰۰ مشتری راضی، پشتیبانی ۲۴/۷ و ۹۸٪ رضایت مشتریان، امداد خودرو تکنیک انتخاب مطمئن شما در بندرعباس است.",
    url: "https://emdadtechnic.ir/why-us",
  },
};

export default function WhyUsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20"
        style={{ backgroundColor: "var(--color-primary-light)" }}
      >
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: "radial-gradient(circle, var(--color-accent) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}></div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6">
              🏆 مورد اعتماد هزاران مشتری
            </Badge>
            <h1 
              className="mb-4 text-4xl md:text-5xl font-bold leading-[1.2]"
              style={{ color: "var(--color-text-primary)" }}
            >
              چرا امداد خودرو تکنیک؟
            </h1>
            <p 
              className="text-lg md:text-xl leading-7"
              style={{ color: "var(--color-text-secondary)" }}
            >
              انتخاب مطمئن برای امداد خودروی شما در بندرعباس و حومه
            </p>
          </div>
        </Container>
      </section>

      {/* Statistics Section */}
      <section 
        className="py-16 border-b"
        style={{ 
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)"
        }}
      >
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div 
                className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
                style={{ backgroundColor: "rgba(245, 158, 11, 0.15)" }}
              >
                <Users className="w-7 h-7" style={{ color: "var(--color-accent)" }} />
              </div>
              <div 
                className="text-3xl font-bold mb-2"
                style={{ color: "var(--color-text-primary)" }}
              >
                +۱۵۰۰۰
              </div>
              <div style={{ color: "var(--color-text-secondary)" }}>
                مشتری راضی
              </div>
            </div>
            <div className="text-center">
              <div 
                className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
                style={{ backgroundColor: "rgba(245, 158, 11, 0.15)" }}
              >
                <Award className="w-7 h-7" style={{ color: "var(--color-accent)" }} />
              </div>
              <div 
                className="text-3xl font-bold mb-2"
                style={{ color: "var(--color-text-primary)" }}
              >
                ۱۰+
              </div>
              <div style={{ color: "var(--color-text-secondary)" }}>
                سال تجربه
              </div>
            </div>
            <div className="text-center">
              <div 
                className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
                style={{ backgroundColor: "rgba(245, 158, 11, 0.15)" }}
              >
                <Phone className="w-7 h-7" style={{ color: "var(--color-accent)" }} />
              </div>
              <div 
                className="text-3xl font-bold mb-2"
                style={{ color: "var(--color-text-primary)" }}
              >
                ۲۴/۷
              </div>
              <div style={{ color: "var(--color-text-secondary)" }}>
                پشتیبانی
              </div>
            </div>
            <div className="text-center">
              <div 
                className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
                style={{ backgroundColor: "rgba(245, 158, 11, 0.15)" }}
              >
                <ThumbsUp className="w-7 h-7" style={{ color: "var(--color-accent)" }} />
              </div>
              <div 
                className="text-3xl font-bold mb-2"
                style={{ color: "var(--color-text-primary)" }}
              >
                ۹۸٪
              </div>
              <div style={{ color: "var(--color-text-secondary)" }}>
                رضایت مشتریان
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Benefits Section */}
      <section className="py-20">
        <Container>
          <div className="mb-16 text-center">
            <Badge className="mb-4">💎 مزیت‌های ما</Badge>
            <h2 
              className="mb-4 text-3xl md:text-4xl font-bold"
              style={{ color: "var(--color-text-primary)" }}
            >
              چه چیزی ما را متفاوت می‌کند؟
            </h2>
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              تعهد ما به ارائه بهترین خدمات امداد خودرو با کیفیت برتر و سرعت بالا
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUsItems.map((item, index) => (
              <TrustCard key={index} {...item} />
            ))}
          </div>
        </Container>
      </section>

      {/* Commitment Section */}
      <section 
        className="py-20"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">✅ تعهد ما به شما</Badge>
              <h2 
                className="mb-4 text-3xl md:text-4xl font-bold"
                style={{ color: "var(--color-text-primary)" }}
              >
                ضمانت‌های امداد خودرو تکنیک
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div 
                className="rounded-[20px] p-6 border"
                style={{ 
                  backgroundColor: "var(--color-primary-light)",
                  borderColor: "var(--color-border)"
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(245, 158, 11, 0.15)" }}
                  >
                    <span style={{ color: "var(--color-accent)", fontSize: "1.5rem" }}>✓</span>
                  </div>
                  <div>
                    <h3 
                      className="text-lg font-bold mb-2"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      ضمانت قیمت شفاف
                    </h3>
                    <p style={{ color: "var(--color-text-secondary)" }}>
                      بدون هیچ هزینه پنهانی، قیمت نهایی قبل از شروع خدمات اعلام می‌شود
                    </p>
                  </div>
                </div>
              </div>

              <div 
                className="rounded-[20px] p-6 border"
                style={{ 
                  backgroundColor: "var(--color-primary-light)",
                  borderColor: "var(--color-border)"
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(245, 158, 11, 0.15)" }}
                  >
                    <span style={{ color: "var(--color-accent)", fontSize: "1.5rem" }}>✓</span>
                  </div>
                  <div>
                    <h3 
                      className="text-lg font-bold mb-2"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      ضمانت حضور سریع
                    </h3>
                    <p style={{ color: "var(--color-text-secondary)" }}>
                      حداکثر ۳۰ دقیقه در سطح شهر بندرعباس، در کمترین زمان در محل حضور پیدا می‌کنیم
                    </p>
                  </div>
                </div>
              </div>

              <div 
                className="rounded-[20px] p-6 border"
                style={{ 
                  backgroundColor: "var(--color-primary-light)",
                  borderColor: "var(--color-border)"
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(245, 158, 11, 0.15)" }}
                  >
                    <span style={{ color: "var(--color-accent)", fontSize: "1.5rem" }}>✓</span>
                  </div>
                  <div>
                    <h3 
                      className="text-lg font-bold mb-2"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      ضمانت کیفیت تعمیر
                    </h3>
                    <p style={{ color: "var(--color-text-secondary)" }}>
                      تمام خدمات تعمیری با گارانتی کتبی و استفاده از قطعات اصل ارائه می‌شود
                    </p>
                  </div>
                </div>
              </div>

              <div 
                className="rounded-[20px] p-6 border"
                style={{ 
                  backgroundColor: "var(--color-primary-light)",
                  borderColor: "var(--color-border)"
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(245, 158, 11, 0.15)" }}
                  >
                    <span style={{ color: "var(--color-accent)", fontSize: "1.5rem" }}>✓</span>
                  </div>
                  <div>
                    <h3 
                      className="text-lg font-bold mb-2"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      پشتیبانی ۲۴ ساعته
                    </h3>
                    <p style={{ color: "var(--color-text-secondary)" }}>
                      هر زمان که نیاز داشتید، شبانه‌روز آماده پاسخگویی و خدمت‌رسانی هستیم
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </main>
  );
}
