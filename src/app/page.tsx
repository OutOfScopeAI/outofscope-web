import Hero from "@/components/Hero";
import HomeBlogPreview from "@/components/HomeBlogPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeBlogPreview limit={3} />

      {/* signature line (minimal) */}
      <section className="section">
  <div className="container" style={{ maxWidth: 900 }}>
    <div
      style={{
        padding: "12px 0",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        gap: 14,
        flexWrap: "wrap",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
        <span style={{ fontWeight: 900, letterSpacing: "-0.02em" }}>
          Haftalık Yapay Zekâ Bülteni
        </span>
        <span style={{ color: "var(--muted)", fontSize: 14 }}>
          Yakında Yayında.
        </span>
      </div>
    </div>
  </div>
</section>
    </>
  );
}