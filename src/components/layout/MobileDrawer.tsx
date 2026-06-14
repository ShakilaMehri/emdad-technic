import Link from "next/link";
import { navigation } from "@/config/navigation";

type MobileDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 transition-opacity"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto"
        style={{
          backgroundColor: "var(--color-background)",
        }}
      >
        <div className="p-5">
          {/* Close Button */}
          <button type="button" onClick={onClose}>
            ✕
          </button>

          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-col gap-6">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-lg font-medium"
                    style={{
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Divider */}
          <div
            className="my-8 border-t"
            style={{
              borderColor: "var(--color-border)",
            }}
          />

          {/* Emergency Call */}
          <button
            className="w-full rounded-xl py-3 font-bold"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-background)",
            }}
          >
            📞 تماس فوری
          </button>
        </div>
      </div>
    </>
  );
}
