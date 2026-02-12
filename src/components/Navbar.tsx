import Image from "next/image";

const navItems = [{ label: "Blog", href: "/blog" }, {label: "Origin & Philosophy", href: "/origin" }];

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.78)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="container"
        style={{
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Image src="/logo.png" alt="OOS logo" width={38} height={38} priority />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <span style={{ fontWeight: 850, letterSpacing: "-0.02em" }}>OOS</span>
            <span style={{ fontSize: 12, color: "var(--muted)" }}>
              Intelligence beyond boundaries
            </span>
          </div>
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {navItems.map((i) => (
            <a
            key={i.href}
            href={i.href}
            style={{
              fontSize: 14,
              color: "var(--muted)",
              textDecoration: "none",
            }}
          >
            {i.label}
          </a>
          ))}

          {/* Primary CTA */}
         
        </nav>
      </div>
    </header>
  );
}