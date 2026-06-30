'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone } from 'lucide-react';
import MobileDrawer from './MobileDrawer';
import { SITE_CONFIG, ROUTES } from '@/lib/constants';
import { navigation } from '@/config/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 shadow-lg">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">

          {/* لوگو و نام برند */}
          <Link href={ROUTES.home} className="flex items-center gap-3 flex-shrink-0">
            <div className="bg-white rounded-lg p-1.5 shadow-sm">
              <Image
                src="/images/logo.png"
                alt={SITE_CONFIG.name}
                width={48}
                height={48}
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-base">
                {SITE_CONFIG.name}
              </span>
              <span className="text-gray-400 text-xs">بندرعباس</span>
            </div>
          </Link>

          {/* ناوبری دسکتاپ — فقط lg+ */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="ناوبری اصلی"
          >
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${isActive
                      ? 'text-yellow-400 bg-white/5'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }
                  `}
                aria-current={isActive ? 'page' : undefined}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* دکمه تماس دسکتاپ — فقط lg+ */}
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="hidden lg:flex items-center gap-2 px-4 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-lg text-sm font-bold transition-colors flex-shrink-0"
          >
            <Phone size={16} />
            <span dir="ltr">{SITE_CONFIG.phone}</span>
          </a>

          {/* دکمه همبرگری — فقط موبایل/تبلت */}
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="باز کردن منو"
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            <Menu size={24} />
          </button>

        </div>
      </header>

      <MobileDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
