'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { X, Phone } from 'lucide-react';
import { navigation } from '@/config/navigation';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-50" onClick={onClose} aria-hidden="true" />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        className="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 shadow-2xl"
        style={{ backgroundColor: 'var(--color-background)' }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <h2 id="drawer-title" className="text-lg font-bold" style={{ color: 'var(--color-text-primary)' }}>
              منو
            </h2>
            <button
              onClick={onClose}
              aria-label="بستن منو"
              className="p-2 rounded-lg hover:bg-white/10"
              style={{ color: 'var(--color-text-primary)' }}
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block px-4 py-3 rounded-lg hover:bg-white/10"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <a
              href="tel:09017301443"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-bold active:scale-95"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}
            >
              <Phone size={20} />
              تماس فوری: ۰۹۰۱۷۳۰۱۴۴۳
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
