type HeaderProps = {
  onOpenMenu: () => void;
};

export default function Header({
  onOpenMenu,
}: HeaderProps) {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "var(--color-background)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <div>
          <h1
            className="text-lg font-bold leading-6"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            امداد خودرو تکنیک
          </h1>

          <p
            className="text-sm"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            بندرعباس
          </p>
        </div>

        {/* Menu Button */}
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label="باز کردن منو"
          className="text-3xl transition-opacity hover:opacity-80"
          style={{
            color: "var(--color-text-primary)",
          }}
        >
          ☰
        </button>
      </div>
    </header>
  );
}