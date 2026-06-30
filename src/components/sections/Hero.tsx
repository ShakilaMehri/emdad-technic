import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { Phone, MessageCircle, Car, Wrench, Truck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-background)] pt-14 pb-16">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <Badge variant="primary">
              <Zap size={14} className="inline ml-1" />
              خدمات امداد ۲۴ ساعته
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] text-[var(--color-text-primary)]">
                امداد خودرو و خودروبر بندرعباس
              </h1>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
                سریع‌ترین و مطمئن‌ترین خدمات امداد خودرو در بندرعباس. تیم
                حرفه‌ای ما در کمتر از ۳۰ دقیقه در محل شما حاضر می‌شود.
              </p>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-nowrap gap-2 overflow-x-auto pb-1 scrollbar-none">
              <Badge variant="secondary">
                <Car size={14} className="mr-1" /> امداد سیار
              </Badge>
              <Badge variant="secondary">
                <Wrench size={14} className="mr-1" /> تعمیرات در محل
              </Badge>
              <Badge variant="secondary">
                <Truck size={14} className="mr-1" /> یدک‌کش
              </Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                href={`tel:${SITE_CONFIG.phone}`}
                className="sm:w-auto w-full px-8 py-4 text-lg"
              >
                <Phone size={18} /> تماس فوری{" "}
                <span dir="ltr">{SITE_CONFIG.phoneDisplay}</span>
              </Button>
              <Button
                variant="secondary"
                
                href={SITE_CONFIG.social.whatsapp}
                className="sm:w-auto w-full px-8 py-4 text-lg"
              >
                <MessageCircle size={18} /> واتساپ
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
            <Image
              src="/images/hero-car.webp"
              alt="امداد خودرو بندرعباس"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
