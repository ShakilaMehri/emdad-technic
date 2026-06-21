import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { Clock, MapPin, Zap, Phone, MessageCircle, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-8 pb-12">
      <Container>
        {/* Status Badges */}
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <Badge>
            <CheckCircle size={16} className="text-green-500" />
            ۲۴ ساعته آماده خدمت
          </Badge>
          <Badge>
            <Zap size={16} className="text-yellow-500" />
            اعزام فوری
          </Badge>
        </div>

        {/* Heading */}
        <h1
          className="mb-5 text-[42px] font-extrabold leading-[1.15] tracking-tight"
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
          className="mb-7 space-y-2 text-base leading-7"
          style={{
            color: "var(--color-text-secondary)",
          }}
        >
          <p>پوشش تمام مناطق بندرعباس</p>

          <p>خدمات امداد خودرو، خودروبر و مکانیک سیار</p>

          <p>۲۴ ساعته حتی روزهای تعطیل</p>
        </div>

        {/* Feature Badges */}
        <div className="mb-7 flex flex-wrap items-center gap-3">
          <Badge variant="small">
            <Clock size={14} />
            ۲۴ ساعته
          </Badge>

          <Badge variant="small">
            <MapPin size={14} />
            تمام بندرعباس
          </Badge>

          <Badge variant="small">
            <Zap size={14} />
            اعزام سریع
          </Badge>
        </div>

        {/* Emergency Call */}
        <div className="mb-4">
          <Button variant="primary" fullWidth>
            <span className="flex w-full items-center justify-between">
              <span>۰۹۰۱۷۳۰۱۴۴۳</span>

              <span className="flex items-center gap-2">
                تماس فوری
                <Phone size={20} />
              </span>
            </span>
          </Button>
        </div>

        <a
          href="https://wa.me/989017301443"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="secondary" fullWidth>
            <div className="flex w-full items-center justify-center gap-2">
              <MessageCircle size={20} />
              ارتباط از طریق واتساپ
            </div>
          </Button>
        </a>

        {/* Hero Image */}
        <div className="relative mt-8 aspect-[3/2] overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/images/hero-car.webp"
            alt="امداد خودرو و خودروبر تکنیک بندرعباس - سرویس ۲۴ ساعته امداد خودرو، یدک‌کش و مکانیک سیار در تمام مناطق بندرعباس"
            fill
            className="object-cover object-[center_80%]"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
