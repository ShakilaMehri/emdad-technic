import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "امداد خودرو تکنیک بندرعباس",
  description:
    "امداد خودرو و خودروبر بندرعباس، خدمات ۲۴ ساعته خودروبر، مکانیک سیار، برق خودرو و امداد جاده‌ای در تمام مناطق بندرعباس حتی روزهای تعطیل.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        {children}
      </body>
    </html>
  );
}