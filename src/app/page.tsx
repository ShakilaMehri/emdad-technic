import Container from "@/components/ui/Container";
import ServiceCard from "@/components/cards/ServiceCard";

export default function Home() {
  return (
    <main className="section">
      <Container>

        <h1 className="text-center mb-8">
          خدمات امداد خودرو تکنیک
        </h1>

        <div className="grid gap-6">

          <ServiceCard
            icon="🚛"
            title="خودروبر"
            description="حمل خودرو در تمام مناطق بندرعباس به صورت ۲۴ ساعته"
          />

          <ServiceCard
            icon="🔧"
            title="مکانیک سیار"
            description="رفع مشکلات فنی خودرو در محل شما"
          />

          <ServiceCard
            icon="⚡"
            title="برق خودرو"
            description="عیب‌یابی و تعمیر سیستم برق خودرو"
          />

        </div>

      </Container>
    </main>
  );
}