import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EmergencyCalls from "@/components/sections/EmergencyCalls";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emdadtechnic.ir"),
  title: {
    default: "امداد خودرو تکنیک بندرعباس | خدمات امداد خودرو ۲۴ ساعته",
    template: "%s | امداد خودرو تکنیک بندرعباس",
  },
  description:
    "امداد خودرو و خودروبر بندرعباس، خدمات ۲۴ ساعته خودروبر، مکانیک سیار، برق خودرو و امداد جاده‌ای در تمام مناطق بندرعباس حتی روزهای تعطیل.",
  keywords: [
    "امداد خودرو بندرعباس",
    "خودروبر بندرعباس",
    "مکانیک سیار بندرعباس",
    "امداد جاده‌ای بندرعباس",
    "یدک‌کش بندرعباس",
    "باطری ساز سیار بندرعباس",
    "برق خودرو بندرعباس",
    "تعویض روغن سیار بندرعباس",
  ],
  authors: [{ name: "امداد خودرو تکنیک" }],
  creator: "امداد خودرو تکنیک",
  publisher: "امداد خودرو تکنیک",
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://emdadtechnic.ir",
    siteName: "امداد خودرو تکنیک بندرعباس",
    title: "امداد خودرو تکنیک بندرعباس | خدمات امداد خودرو ۲۴ ساعته",
    description:
      "امداد خودرو و خودروبر بندرعباس، خدمات ۲۴ ساعته خودروبر، مکانیک سیار، برق خودرو و امداد جاده‌ای در تمام مناطق بندرعباس.",
    images: [
      {
        url: "/og-image.jpg", // باید تصویر OG اضافه کنی
        width: 1200,
        height: 630,
        alt: "امداد خودرو تکنیک بندرعباس",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "امداد خودرو تکنیک بندرعباس | خدمات امداد خودرو ۲۴ ساعته",
    description:
      "امداد خودرو و خودروبر بندرعباس، خدمات ۲۴ ساعته خودروبر، مکانیک سیار، برق خودرو و امداد جاده‌ای.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "کد Google Search Console", // بعداً اضافه می‌کنی
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        <Header />
        {children}
        <Footer />
        <EmergencyCalls />
      </body>
    </html>
  );
}
