const posts = [
  {
    title: "Kurumsal AI’ye nereden başlanır?",
    desc: "Problem seçimi, veri gerçekliği ve KPI: ilk 2 haftanın planı.",
    href: "/blog/vibe-coding-giris",
    tag: "Başlangıç",
  }
];

export default function BlogPreview() {
  return (
    <section id="icerik" className="section">
      <div className="container">
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 12 }}>
          <div>
            <h2 className="sectionTitle" style={{ marginBottom: 8 }}>
              Blog
            </h2>
            <p className="sectionLead" style={{ marginBottom: 0 }}>
              Kurumsallar için uygulanabilir AI notları.
            </p>
          </div>

          <a className="btn btnGhost" href="/blog">
            Tüm yazılar
          </a>
        </div>

        <div style={{ height: 18 }} />

        <div className="cardGrid">
          {posts.map((p) => (
            <a key={p.title} href={p.href} className="card p24 span-4 m-span-12">
              <div className="badge" style={{ marginBottom: 12 }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 999,
                    background: "var(--violet)",
                    display: "inline-block",
                  }}
                />
                {p.tag}
              </div>
              <h3 style={{ margin: "0 0 8px", letterSpacing: "-0.02em" }}>{p.title}</h3>
              <p style={{ margin: 0, color: "var(--muted)" }}>{p.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
