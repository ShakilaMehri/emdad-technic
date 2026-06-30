import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import TestimonialCard from "@/components/cards/TestimonialCard";
import FinalCTA from "@/components/sections/FinalCTA";
import { testimonials } from "@/data/testimonialsData";
import { Award } from "lucide-react";

export const metadata: Metadata = {
  title: "نظرات مشتریان | تجربه واقعی از خدمات امداد خودرو تکنیک",
  description:
    "بیش از ۱۵۰۰۰ مشتری به امداد خودرو تکنیک اعتماد کرده‌اند. نظرات واقعی مشتریان درباره خدمات امداد خودرو، خودروبر و مکانیک سیار در بندرعباس را بخوانید.",
  keywords: [
    "نظرات امداد خودرو بندرعباس",
    "تجربه مشتریان امداد خودرو",
    "رضایت مشتریان خودروبر",
    "نظرات مکانیک سیار بندرعباس",
  ],
  openGraph: {
    title: "نظرات مشتریان | تجربه واقعی از خدمات امداد خودرو تکنیک",
    description:
      "بیش از ۱۵۰۰۰ مشتری به امداد خودرو تکنیک اعتماد کرده‌اند. نظرات واقعی مشتریان را بخوانید.",
    url: "https://emdadtechnic.ir/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-primary-light)" }}
      >
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6">⭐ نظرات مشتریان</Badge>
            <h1
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "var(--color-text-primary)" }}
            >
              تجربه مشتریان ما
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              اعتماد شما، افتخار ماست. بیش از ۱۵۰۰۰ نفر به خدمات امداد خودرو
              تکنیک اعتماد کرده‌اند.
            </p>
          </div>
        </Container>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                review={testimonial.review}
              />
            ))}
          </div>

          {/* Trust Banner */}
          <div
            className="mt-16 p-8 rounded-[20px] text-center"
            style={{
              backgroundColor: "rgba(245, 158, 11, 0.1)",
              border: "1px solid var(--color-accent)",
            }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Award
                className="w-8 h-8"
                style={{ color: "var(--color-accent)" }}
              />
              <p
                className="text-xl md:text-2xl font-semibold"
                style={{ color: "var(--color-text-primary)" }}
              >
                رضایت شما، هدف ماست
              </p>
            </div>
            <p
              className="mt-3 text-lg md:text-xl leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              اعتماد شما، افتخار ماست. بیش از ۱۵۰۰۰ نفر به خدمات امداد خودرو
              تکنیک اعتماد کرده‌اند و {testimonials.length} نظر را با ما به
              اشتراک گذاشته‌اند.
            </p>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </main>
  );
}
