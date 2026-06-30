// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // فعال‌سازی Strict Mode
  reactStrictMode: true,
  
  // بهینه‌سازی تصاویر
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  
  // فشرده‌سازی خروجی
  compress: true,
  
  // حذف X-Powered-By header برای امنیت
  poweredByHeader: false,
};

export default nextConfig;
