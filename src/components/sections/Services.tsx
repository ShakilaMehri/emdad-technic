import ServiceCard from "@/components/cards/ServiceCard";
import Container from "@/components/ui/Container";
import { services } from "@/data/ServicesData";

export default function Services() {
  return (
    <section
      id="services"
      className="py-14 bg-gradient-to-b from-[var(--color-background)] to-[var(--color-surface)]"
    >
      <Container>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)]">
            خدمات امداد خودرو
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            امداد تکنیک با تیمی حرفه‌ای و مجهز، خدمات جامع امداد خودرو را در{" "}
            <span className="font-bold text-[var(--color-accent)]">
              سراسر بندرعباس
            </span>{" "}
            ارائه می‌دهد
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={
                  <IconComponent
                    size={32}
                    strokeWidth={1.5}
                    className="text-[var(--color-accent)]"
                  />
                }
                href={service.href}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
