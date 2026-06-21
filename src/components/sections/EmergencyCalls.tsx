'use client';

import { Phone } from "lucide-react";
import { useState } from "react";

export default function EmergencyCalls() {
  const [showLabel, setShowLabel] = useState(false);

  return (
    <div className="fixed bottom-6 left-4 z-50 flex items-center gap-3">
      {/* Tooltip label */}
      {showLabel && (
        <div className="bg-[#0a0f1d] text-white text-sm font-bold px-4 py-2 rounded-xl border border-white/10 shadow-xl whitespace-nowrap">
          تماس اضطراری: ۰۹۰۱۷۳۰۱۴۴۳
        </div>
      )}

      {/* Round button */}
      <a
        href="tel:09017301443"
        aria-label="تماس اضطراری با امداد خودرو"
        onMouseEnter={() => setShowLabel(true)}
        onMouseLeave={() => setShowLabel(false)}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl active:scale-95 transition-transform"
        style={{ backgroundColor: "var(--color-accent)" }}
      >
        <Phone size={26} className="text-[#0a0f1d] animate-pulse" />
      </a>
    </div>
  );
}
