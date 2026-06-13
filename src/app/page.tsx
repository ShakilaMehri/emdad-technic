import Container from "@/components/ui/Container";
import StatisticCard from "@/components/cards/StatisticCard";

export default function Home() {
  return (
    <main className="section">
      <Container>
        <h2 className="mb-8 text-center">
          امداد خودرو تکنیک در یک نگاه
        </h2>

        <div className="grid gap-6">
          <StatisticCard
            value="۲۴/۷"
            title="آماده خدمت"
          />

          <StatisticCard
            value="تمام بندرعباس"
            title="پوشش مناطق"
            description="خدمات در تمام مناطق شهر"
          />

          <StatisticCard
            value="بدون تعطیلی"
            title="همه روزهای هفته"
          />
        </div>
      </Container>
    </main>
  );
}