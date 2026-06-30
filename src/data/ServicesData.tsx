import { Car, Truck, Wrench, Zap, Hammer } from "lucide-react";

/**
 * لیست خدمات امداد خودرو تکنیک
 * هر خدمت شامل: آیکن، عنوان، توضیحات و لینک صفحه جزئیات
 */
export const services = [
  {
    id: "roadside-assistance",
    icon: Car,
    title: "امداد خودرو",
    description:
      "خدمات امداد خودرو در محل، ۲۴ ساعته و ۷ روز هفته در تمام مناطق بندرعباس. اعزام سریع با کمترین زمان انتظار.",
    href: "/services/roadside-assistance",
  },
  {
    id: "towing",
    icon: Truck,
    title: "خودروبر",
    description:
      "حمل ایمن خودروهای سواری و لوکس با خودروبر مجهز و استاندارد در بندرعباس. جابجایی بدون آسیب با تجهیزات حرفه‌ای.",
    href: "/services/towing",
  },
  {
    id: "mobile-mechanic",
    icon: Wrench,
    title: "مکانیک سیار",
    description:
      "رفع مشکلات فنی خودرو در محل در بندرعباس، بدون نیاز به انتقال به تعمیرگاه. تعمیر موتور، گیربکس و سیستم تعلیق در محل.",
    href: "/services/mobile-mechanic",
  },
  {
    id: "car-electrician",
    icon: Zap,
    title: "برق خودرو",
    description:
      "عیب‌یابی و رفع مشکلات برقی خودرو در بندرعباس توسط متخصصین مجرب. تعمیر ECU، سیم‌کشی و سیستم روشنایی در محل.",
    href: "/services/car-electrician",
  },
  {
    id: "body-repair",
    icon: Hammer,
    title: "صافکاری سیار",
    description:
      "خدمات صافکاری و رفع آسیب‌های جزئی بدنه خودرو در محل در بندرعباس. اعزام سریع بدون نیاز به مراجعه به تعمیرگاه.",
    href: "/services/body-repair",
  },
];
