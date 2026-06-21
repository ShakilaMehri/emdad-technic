import Badge from "@/components/ui/Badge";
import { coverageAreas } from "@/data/CoverageData";
import { Car } from "lucide-react";

export default function Coverage() {
  return (
    <section className="py-6">
      <div className="container mx-auto px-5">
        <div className="mb-10 text-center">
          <h2
            className="mb-4 text-3xl font-bold"
            style={{ color: "var(--color-text-primary)" }}
          >
            مناطق تحت پوشش امداد خودرو بندرعباس
          </h2>

          <p
            className="mx-auto max-w-md"
            style={{ color: "var(--color-text-secondary)" }}
          >
            امداد خودرو تکنیک با اعزام سریع و خدمات ۲۴ ساعته در تمامی مناطق
            اصلی بندرعباس آماده ارائه خدمات در محل است.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {coverageAreas.map((area) => (
            <Badge key={area}>{area}</Badge>
          ))}
        </div>

        <div
          className="rounded-[20px] border p-5 text-center"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <p
            className="inline-flex items-center justify-center gap-2 font-semibold"
            style={{ color: "var(--color-text-primary)" }}
          >
            <Car className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
            اعزام در کمتر از ۳۰ دقیقه در اکثر مناطق بندرعباس
          </p>
        </div>
      </div>
    </section>
  );
}
