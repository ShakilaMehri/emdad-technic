import { SITE_CONFIG } from "@/lib/constants";
import { Phone } from "lucide-react";

export default function EmergencyCalls() {
  return (
    <a
      href={`tel:${SITE_CONFIG.phone}`}
      className="fixed bottom-6 left-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-orange-500/50 active:scale-95"
      aria-label="تماس اضطراری"
    >
      <Phone className="h-7 w-7 animate-pulse" strokeWidth={2.5} />
    </a>
  );
}
