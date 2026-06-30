import { Phone, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-surface border-y border-border">
      <div className="max-w-4xl mx-auto text-center space-y-8 px-6">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            نیاز به امداد فوری دارید؟
          </h2>
          <p className="text-lg text-secondary">
            تیم امداد خودرو تکنیک بندرعباس به صورت ۲۴ ساعته آماده خمت‌رسانی است.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 w-full max-w-xs mx-auto">
          <Button
            variant="primary"
            href={`tel:${SITE_CONFIG.phone}`}
            fullWidth
          >
            <Phone size={20} className="flex-shrink-0" />
            تماس فوری
          </Button>

          <Button
            variant="secondary"
            href={SITE_CONFIG.social.whatsapp}
            target="_blank"
            rel="nopener noreferrer"
            fullWidth
          >
            <MessageCircle size={20} className="flex-shrink-0" />
            ارتباط از طریق واتساپ
          </Button>
        </div>
      </div>
    </section>
  );
}
