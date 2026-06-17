import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-6 pb-10">
      <Container>
        {/* Status Badge */}
        <div className="mb-6">
          <Badge>🟢 ۲۴ ساعته آماده خدمت</Badge>
        </div>

        {/* Heading */}
        <h1
          className="mb-4 text-4xl font-bold leading[1.2]"
          style={{
            color: "var(--color-text-primary)",
          }}
        >
          امداد خودرو و
          <br />
          خودروبر بندرعباس
        </h1>

        {/* Description */}
        <div
          className="mb-6 space-y-2 text-base leading-7"
          style={{
            color: "var(--color-text-secondary)",
          }}
        >
          <p>پوشش تمام مناطق بندرعباس</p>

          <p>خدمات امداد خودرو، خودروبر و مکانیک سیار</p>

          <p>۲۴ ساعته حتی روزهای تعطیل</p>
        </div>

        {/* Feature Badges */}
        <div className="mb-8 flex flex-wrap items-center gap-6">
          <Badge variant="small">🕐 ۲۴ ساعته</Badge>

          <Badge variant="small">📍 تمام بندرعباس</Badge>

          <Badge variant="small">🚚 اعزام سریع</Badge>
        </div>

        {/* Emergency Call */}
        <div className="mb-4">
          <Button variant="primary" fullWidth>
            <span className="flex w-full items-center justify-between">
              <span>۰۹۱۷۱۲۳۴۵۶۷</span>

              <span>تماس فوری 📞</span>
            </span>
          </Button>
        </div>

<Button variant="secondary" fullWidth>
  <div className="flex w-full items-center justify-center gap-2">
    💬
    ارتباط از طریق واتساپ
  </div>
</Button>

        {/* Hero Image */}
        <div className="relative mt-8 aspect-[3/2] overflow-hidden rounded-3xl">
          <Image
            src="/images/hero-car.webp"
            alt="امداد خودرو و خودروبر تکنیک بندرعباس"
            fill
            className="object-cover object-[center_80%]"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
