// src/components/layout/Footer.tsx
import Link from 'next/link';
import { SITE_CONFIG, ROUTES } from '@/lib/constants';
import { navigation } from '@/config/navigation';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-10 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* برند */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">
              امداد خودرو تکنیک
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              خدمات امداد خودرو، خودروبر و مکانیک سیار در سراسر بندرعباس به
              صورت شبانه‌روزی.
            </p>
          </div>

          {/* لینک‌های ناوبری */}
          <div>
            <h4 className="text-white font-semibold mb-3">دسترسی سریع</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* اطلاعات تماس */}
          <div>
            <h4 className="text-white font-semibold mb-3">تماس با ما</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="hover:text-white transition-colors"
                >
                  📞 {SITE_CONFIG.phone}
                </a>
              </li>
              <li>📍 {SITE_CONFIG.address}</li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  ✉️ {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex gap-3 pt-1">
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  اینستاگرام
                </a>
                <a
                  href={SITE_CONFIG.social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  تلگرام
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* کپی‌رایت */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs">
          © 2026 {SITE_CONFIG.name}. تمام حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}
