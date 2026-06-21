import TestimonialCard from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/testimonialsData";

export default function Testimonials() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-5">
        <div className="mb-10 text-center">
          <h2
            className="mb-4 text-3xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            نظرات مشتریان امداد خودرو بندرعباس
          </h2>

          <p
            className="mx-auto max-w-md"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            تجربه واقعی مشتریان از خدمات امداد خودرو تکنیک بندرعباس - اعزام
            سریع، مکانیک سیار و یدک‌کش ۲۴ ساعته
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              review={testimonial.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
