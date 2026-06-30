import { whyUsItems } from "@/data/WhyUsData";
import Container from "@/components/ui/Container";

export default function WhyUs() {
  return (
    <section className="py-16 bg-[var(--color-background)]">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-text-primary)]">
            چرا امداد تکنیک؟
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)]">
            تیم متخصص و با تجربه ما آماده خدمت‌رسانی به شماست
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUsItems.map((item) => (
            <div key={item.id} className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 text-[var(--color-text-primary)]">
                {item.title}
              </h3>
              <p className="text-[var(--color-text-secondary)]">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
