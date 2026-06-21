import { Phone, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-5">
        <div
          className="rounded-[24px] border p-8 text-center"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <h2
            className="mb-4 text-3xl font-bold"
            style={{ color: "var(--color-text-primary)" }}
          >
            نیاز به امداد فوری دارید؟
          </h2>

          <p
            className="mb-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            تیم امداد خودرو تکنیک بندرعباس به صورت ۲۴ ساعته آماده خدمت‌رسانی است.
          </p>

          <div className="flex flex-col gap-3">
            <Button href="tel:09017301443" fullWidth>
              <Phone size={18} className="ml-2" />
              تماس فوری
            </Button>

            <Button
              href="https://wa.me/989017301443"
              variant="secondary"
              fullWidth
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} className="ml-2" />
              ارتباط از طریق واتساپ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
