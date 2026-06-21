import Image from "next/image";
import { Menu } from "lucide-react";

interface HeaderProps {
  onOpenMenu: () => void;
}

export default function Header({ onOpenMenu }: HeaderProps) {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "var(--color-background)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            {/* Logo with white background */}
            <div
              className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <Image
                src="/images/logo.png"
                alt="امداد خودرو تکنیک"
                fill
                className="object-contain p-1"
                style={{ maxWidth: "none" }}
              />
            </div>

            {/* Brand Text */}
            <div className="flex flex-col">
              <div
                className="text-lg font-bold leading-tight"
                style={{ color: "var(--color-text-primary)" }}
              >
                امداد خودرو تکنیک
              </div>
              <div className="text-sm" style={{ color: "var(--color-accent)" }}>
                بندرعباس
              </div>
            </div>
          </div>

          {/* Menu Button */}
          <button
            onClick={onOpenMenu}
            aria-label="باز کردن منو"
            className="p-3 rounded-lg transition-colors hover:bg-white/10"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
}
