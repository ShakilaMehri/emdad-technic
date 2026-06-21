import TrustCard from "@/components/cards/TrustCard";
import { whyUsItems } from "@/data/WhyUsData";

export default function WhyUs() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-5">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold" style={{ color: "var(--color-text-primary)" }}>
            چرا امداد خودرو تکنیک؟
          </h2>
          <p className="mx-auto max-w-md" style={{ color: "var(--color-text-secondary)" }}>
            ترکیب سرعت، تخصص و پشتیبانی ۲۴ ساعته برای ارائه بهترین خدمات امداد خودرو در بندرعباس.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyUsItems.map((item) => (
            <TrustCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
