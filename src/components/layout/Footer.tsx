import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 border-t" style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-footer)" }}>
      <div className="container mx-auto px-5 py-10">

        <div className="mb-8">
          <h3 className="mb-3 text-xl font-bold" style={{ color: "var(--color-text-primary)" }}>
            امداد خودرو تکنیک
          </h3>
          <p className="max-w-sm" style={{ color: "var(--color-text-secondary)" }}>
            خدمات امداد خودرو، خودروبر و مکانیک سیار در سراسر بندرعباس به صورت شبانه‌روزی.
          </p>
        </div>

        <nav className="mb-8 flex flex-col gap-3">
          {[
            { href: "/", label: "صفحه اصلی" },
            { href: "/services", label: "خدمات" },
            { href: "/about", label: "درباره ما" },
            { href: "/contact", label: "تماس با ما" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{ color: "var(--color-text-secondary)" }}
              className="hover:underline"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="mb-8 flex flex-col gap-3" style={{ color: "var(--color-text-secondary)" }}>
          <a href="tel:+989017301443" className="flex items-center gap-2 hover:underline">
            <Phone size={16} />
            ۰۹۰۱۷۳۰۱۴۴۳
          </a>
          <p className="flex items-center gap-2">
            <MapPin size={16} />
            بندرعباس، هرمزگان
          </p>
        </div>

        <div
          className="border-t pt-5 text-sm"
          style={{ borderColor: "var(--color-border)", color: "var(--color-text-secondary)" }}
        >
          © ۱۴۰۵ امداد تکنیک. تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}
