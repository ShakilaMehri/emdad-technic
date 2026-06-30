import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import FinalCTA from "@/components/sections/FinalCTA";
import { MapPin, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "پوشش جغرافیایی | خدمات امداد خودرو در سراسر بندرعباس",
  description:
    "امداد خودرو تکنیک در تمامی مناطق بندرعباس شامل مرکز شهر، گلشهر، الهیه، سه راه برق، شهرک پیامبر اعظم، نایبند و سایر مناطق حضور دارد. حداکثر ۳۰ دقیقه به محل می‌رسیم.",
  keywords: [
    "امداد خودرو گلشهر",
    "امداد خودرو الهیه",
    "خودروبر مرکز شهر بندرعباس",
    "امداد خودرو نایبند",
    "خودروبر شهرک پیامبر اعظم",
    "امداد جاده‌ای بندر شهید رجایی",
  ],
  openGraph: {
    title: "پوشش جغرافیایی | خدمات امداد خودرو در سراسر بندرعباس",
    description:
      "امداد خودرو تکنیک در تمامی مناطق بندرعباس و حومه با حداکثر ۳۰ دقیقه حضور سریع در خدمت شماست.",
    url: "https://emdadtechnic.ir/coverage",
  },
};

const coverageAreas = [
  "مرکز شهر",
  "گلشهر",
  "الهیه",
  "سه راه برق",
  "شهرک پیامبر اعظم",
  "نایبند",
  "بلوار امام حسین",
  "بلوار جمهوری",
  "پاسداران",
  "پشت شهر",
  "شهرک صنعتی",
  "بندر شهید رجایی",
];

export default function CoveragePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-20"
        style={{ backgroundColor: "var(--color-primary-light)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-accent) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6">📍 پوشش کامل بندرعباس</Badge>
            <h1
              className="mb-4 text-4xl md:text-5xl font-bold leading-[1.2]"
              style={{ color: "var(--color-text-primary)" }}
            >
              در هر نقطه از بندرعباس کنار شما هستیم
            </h1>
            <p
              className="text-lg md:text-xl leading-7"
              style={{ color: "var(--color-text-secondary)" }}
            >
              امداد خودرو تکنیک با پوشش کامل در تمام مناطق بندرعباس، در کمتر از ۳۰
              دقیقه در محل حضور پیدا می‌کند
            </p>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div
              className="rounded-[20px] overflow-hidden border shadow-sm"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112686.02964894968!2d56.18228934863281!3d27.18709999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ee86ff596ca70b7%3A0x4e8593c1c13096f0!2sBandar%20Abbas%2C%20Hormozgan%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="نقشه بندرعباس"
              ></iframe>
            </div>
          </div>
        </Container>
      </section>

      {/* Coverage Details */}
      <section
        className="py-16 border-t"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
        }}
      >
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="mb-4 text-3xl md:text-4xl font-bold"
                style={{ color: "var(--color-text-primary)" }}
              >
                مناطق اصلی تحت پوشش
              </h2>
              <p
                className="text-lg"
                style={{ color: "var(--color-text-secondary)" }}
              >
                ما در تمام مناطق زیر با سرعت و کیفیت بالا خدمات ارائه می‌دهیم
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {coverageAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 p-4 rounded-[12px] border"
                  style={{
                    backgroundColor: "var(--color-primary-light)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(245, 158, 11, 0.15)" }}
                  >
                    <MapPin
                      className="w-5 h-5"
                      style={{ color: "var(--color-accent)" }}
                    />
                  </div>
                  <span
                    className="font-medium"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {area}
                  </span>
                </div>
              ))}
            </div>

            {/* Full Coverage Banner */}
            <div
              className="rounded-[20px] p-8 border text-center"
              style={{
                backgroundColor: "var(--color-accent)",
                borderColor: "var(--color-accent)",
              }}
            >
              <CheckCircle2
                className="w-12 h-12 mx-auto mb-4"
                style={{ color: "white" }}
              />
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: "white" }}
              >
                پوشش کامل در سراسر بندرعباس و حومه
              </h3>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: "rgba(255, 255, 255, 0.95)" }}
              >
                علاوه بر مناطق ذکر شده، ما در تمامی نقاط بندرعباس و حتی حومه شهر
                آماده ارائه خدمات امداد خودرو هستیم. کافیست تماس بگیرید!
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Response Time Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div
              className="rounded-[20px] p-8 md:p-12 border"
              style={{
                backgroundColor: "var(--color-primary-light)",
                borderColor: "var(--color-border)",
              }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div
                  className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(245, 158, 11, 0.15)" }}
                >
                  <Clock
                    className="w-10 h-10"
                    style={{ color: "var(--color-accent)" }}
                  />
                </div>
                <div className="text-center md:text-right">
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-3"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    زمان حضور: حداکثر ۳۰ دقیقه
                  </h3>
                  <p
                    className="text-lg"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    تیم امداد ما در سریع‌ترین زمان ممکن در محل شما حاضر می‌شود.
                    با سیستم موقعیت‌یابی پیشرفته، نزدیک‌ترین تکنسین را به شما
                    اختصاص می‌دهیم.
                  </p>
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
