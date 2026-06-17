import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/data/Services";

export default function Services() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-5">
        <div className="mb-10 text-center">
          <h2
            className="mb-4 text-3xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            خدمات امداد خودرو تکنیک
          </h2>

          <p
            className="mx-auto max-w-md"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            خدمات تخصصی امداد خودرو و خودروبر در بندرعباس با اعزام سریع و
            پشتیبانی ۲۴ ساعته.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}