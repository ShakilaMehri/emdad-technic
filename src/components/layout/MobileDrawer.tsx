"use client";

import Link from "next/link";
import { X, Phone } from "lucide-react";
import { navigation } from "@/config/navigation";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 transition-opacity"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className="fixed inset-y-0 right-0 z-50 w-72 overflow-y-auto"
        style={{ backgroundColor: "var(--color-background)" }}
        role="dialog"
        aria-modal="true"
        aria-label="منوی ناوبری"
      >
        {/* Header row */}
        <div className="flex items-center justify-between px-4 py-4">
          <span
            className="text-base font-bold"
            style={{ color: "var(--color-text-primary)" }}
          >
            منو
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="بستن منو"
            className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-black/10 focus-visible:outline-none"
            style={{ color: "var(--color-text-primary)" }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-4 pb-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="rounded-lg px-3 py-2 text-lg font-medium transition-colors hover:bg-black/10 focus-visible:outline-none"
              style={{ color: "var(--color-text-primary)" }}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-4 pb-6">
          <a
            href="tel:09017301443"
            onClick={onClose}
            className="flex w-full items-center justify-center gap-2 rounded-xl py-3 font-bold transition-opacity hover:opacity-90 focus-visible:outline-none"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-background)",
            }}
          >
            <Phone size={18} />
            <span dir="ltr">۰۹۰۱۷۳۰۱۴۴۳</span>
          </a>
        </div>
      </div>
    </>
  );
}
