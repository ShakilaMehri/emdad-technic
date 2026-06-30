import type { Metadata } from "next";
import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/data/ServicesData";

export const metadata: Metadata = {
  title: "خدمات امداد خودرو تکنیک بندرعباس",
  description:
    "خدمات تخصصی امداد خودرو، خودروبر، مکانیک سیار و برق خودرو در بندرعباس به صورت شبانه‌روزی.",
};

export default function ServicesPage() {
  return (
    <main className="py-12" aria-label="صفحه خدمات">
      <div className="container mx-auto px-5">
        <div className="mb-10 text-center">
          <h1
            className="mb-4 text-3xl font-bold"
            style={{ color: "var(--color-text-primary)" }}
          >
            خدمات امداد خودرو تکنیک
          </h1>

          <p
            className="mx-auto max-w-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            خدمات تخصصی امداد خودرو، خودروبر، مکانیک سیار و برق خودرو در
            بندرعباس به صورت شبانه‌روزی.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <ServiceCard
                key={service.id}
                icon={
                  <IconComponent
                    size={32}
                    strokeWidth={1.5}
                    style={{ color: "var(--color-accent)" }}
                  />
                }
                title={service.title}
                description={service.description}
                href={service.href}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
