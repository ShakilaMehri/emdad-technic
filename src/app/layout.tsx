import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import EmergencyCalls from "@/components/sections/EmergencyCalls";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://emdadtechnic.ir'),
  title: {
    default: 'امداد خودرو تکنیک بندرعباس | یدک‌کش و امداد 24 ساعته',
    template: '%s | امداد خودرو تکنیک'
  },
  description: 'خدمات امداد خودرو، یدک‌کش، حمل خودرو و مکانیک سیار در بندرعباس - 24 ساعته - تماس: ۰۹۰۱۷۳۰۱۴۴۳',
  keywords: ['امداد خودرو بندرعباس', 'یدک‌کش بندرعباس', 'مکانیک سیار', 'حمل خودرو'],
  
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://emdadtechnic.ir',
    siteName: 'امداد خودرو تکنیک',
    title: 'امداد خودرو تکنیک بندرعباس | یدک‌کش 24 ساعته',
    description: 'خدمات امداد خودرو حرفه‌ای در بندرعباس',
    // images: ['/og-image.jpg'],  logo
  },
  
  robots: {
    index: true,
    follow: true,
  },
  
  alternates: {
    canonical: 'https://emdadtechnic.ir',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        
        {children}
        <Footer/>
        <EmergencyCalls/>
      </body>
    </html>
  );
}