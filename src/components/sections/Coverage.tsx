"use client";

import { MapPin, Zap } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import { coverageAreas, headquarters } from "@/data/CoverageData";

const mapPoints = [
  { id: "golshahr", cx: 150, cy: 100, label: "گلشهر", x: 150, y: 120 },
  { id: "elahieh", cx: 250, cy: 120, label: "الهی", x: 250, y: 140 },
  { id: "serah-bargh", cx: 350, cy: 140, label: "سه راه برق", x: 350, y: 160 },
  {
    id: "shahrak-payambar",
    cx: 450,
    cy: 110,
    label: "شهرک پیامبر اعظم",
    x: 450,
    y: 130,
  },
  { id: "nayband", cx: 200, cy: 200, label: "نایبند", x: 200, y: 220 },
  {
    id: "imam-hossein",
    cx: 300,
    cy: 220,
    label: "بلوار ام حسین",
    x: 300,
    y: 240,
  },
  { id: "jomhouri", cx: 400, cy: 200, label: "بلوار جمهری", x: 400, y: 220 },
  { id: "pasdaran", cx: 500, cy: 220, label: "پاسداران", x: 500, y: 240 },
  { id: "posht-shahr", cx: 350, cy: 280, label: "پشت شهر", x: 350, y: 300 },
];

const centralOffice = {
  cx: 300,
  cy: 160,
  label: "دفتر مرکزی",
  sublabel: "امداد تکنیک",
};

export default function Coverage() {
  return (
    <section id="coverage" className="py-20 bg-[#0F172A]">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            محدوده پوش خدمات ما
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            ما در سراسر بندرعباس و حومه آماده ارائه خدمات هستیم. با تیم‌های
            متعد در نقاط مختلف شهر، سریع‌ترین زمان واکنش را تضمین می‌کنیم.
          </p>
        </div>

        {/* SVG Map */}
        <div className="bg-[#1E293B] rounded-2xl p-4 sm:p-8 mb-8 border border-slate-700/50 shadow-xl">
          <svg
            viewBox="0 0 600 350"
            className="w-full h-auto"
            style={{ minHeight: "260px", maxHeight: "480px" }}
          >
            {/* Background */}
            <rect x="0" y="0" width="600" height="350" fill="#0F172A" />

            {/* Persian Gulf coastline */}
            <path
              d="M 50 320 Q 150 310, 250 315 T 450 320 L 550 325"
              stroke="#3b82f6"
              strokeWidth="3"
              fill="none"
              opacity="0.6"
            />
            <text
              x="500"
              y="340"
              fontSize="14"
              fill="#3b82f6"
              fontFamily="Vazirmatn, sans-serif"
              textAnchor="middle"
              opacity="0.8"
            >
              خلیج فارس
            </text>

            {/* Grid lines */}
            {[50, 150, 250].map((y) => (
              <line
                key={`h-${y}`}
                x1="100"
                y1={y}
                x2="500"
                y2={y}
                stroke="#475569"
                strokeWidth="1"
                strokeDasharray="5,5"
                opacity="0.3"
              />
            ))}
            {[150, 300, 450].map((x) => (
              <line
                key={`v-${x}`}
                x1={x}
                y1="50"
                x2={x}
                y2="300"
                stroke="#475569"
                strokeWidth="1"
                strokeDasharray="5,5"
                opacity="0.3"
              />
            ))}

            {/* Coverage area points */}
            {mapPoints.map((point) => (
              <g key={point.id}>
                <circle
                  cx={point.cx}
                  cy={point.cy}
                r="6"
                  fill="#3b82f6"
                  opacity="0.8"
                />
                <text
                  x={point.x}
                  y={point.y}
                  fontSize="12"
                  fill="#e2e8f0"
                  fontFamily="Vazirmatn, sans-serif"
                  textAnchor="middle"
                >
                  {point.label}
                </text>
              </g>
            ))}

            {/* Central office marker */}
            <g>
              <circle
                cx={centralOffice.cx}
                cy={centralOffice.cy}
                r="20"
                fill="#f59e0b"
                opacity="0.2"
              />
              <circle
                cx={centralOffice.cx}
                cy={centralOffice.cy}
                r="12"
                fill="#f59e0b"
                opacity="0.4"
              />
              <circle
                cx={centralOffice.cx}
                cy={centralOffice.cy}
                r="6"
                fill="#f59e0b"
              />
              <path
                d={`M ${centralOffice.cx} ${centralOffice.cy - 15} L ${centralOffice.cx} ${centralOffice.cy - 5}`}
                stroke="#fbbf24"
                strokeWidth="2"
              />
              <rect
                x={centralOffice.cx - 25}
                y={centralOffice.cy - 40}
                width="50"
                height="20"
                fill="#1E293B"
                opacity="0.9"
                rx="4"
              />
              <text
                x={centralOffice.cx}
                y={centralOffice.cy - 32}
                fontSize="11"
                fill="#fbbf24"
                fontFamily="Vazirmatn, sans-serif"
                textAnchor="middle"
                fontWeight="bold"
              >
                {centralOffice.label}
              </text>
              <text
                x={centralOffice.cx}
                y={centralOffice.cy - 22}
                fontSize="9"
                fill="#e2e8f0"
                fontFamily="Vazirmatn, sans-serif"
                textAnchor="middle"
              >
                {centralOffice.sublabel}
              </text>
            </g>
          </svg>
        </div>

        {/* Headquarters Info Card */}
        <div className="bg-[#1E293B] border border-slate-700/50 rounded-xl p-6 mb-8 flex items-start gap-4 shadow-lg hover:border-slate-600 transition-all">
          <MapPin className="text-amber-500 flex-shrink-0 mt-1" size={28} />
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-3 text-white">
              {headquarters.name}
            </h3>
            <p className="text-base text-slate-300 mb-2 leading-relaxed">
              {headquarters.address}
            </p>
            <p className="text-sm text-slate-400 font-medium">
              محله:{" "}
              <span className="text-slate-200">{headquarters.neighborhood}</span>
            </p>
          </div>
        </div>

        {/* Coverage Badges — 3 per row */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {coverageAreas.map((area, index) => (
            <Badge key={`${area.name}-${index}`} className="justify-center text">
              {area.name}
            </Badge>
          ))}
        </div>

        {/* Final Callout */}
        <div className="bg-amber-500/10 border-r-4 border-amber-500 rounded-lg p-6 text-center backdrop-blur-sm">
          <p className="text-lg text-amber-100 font-semibold flex items-center justify-center gap-2">
            <Zap className="text-amber-400 flex-shrink-0" size={20} />
            تیم‌های ما در کمتر از ۳۰ دقیقه به محل شما می‌رسند
          </p>
        </div>
      </Container>
    </section>
  );
}
