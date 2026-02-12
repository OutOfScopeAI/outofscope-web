export default function Hero() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 900 }}>
        <div style={{ padding: "40px 0" }}>
          <div
            style={{
              fontSize: 14,
              color: "var(--muted)",
              marginBottom: 18,
              letterSpacing: "0.02em",
            }}
          >
            Out of Scope AI Labs
          </div>

          <h1
            style={{
              fontSize: 52,
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              margin: 0,
              fontWeight: 900,
            }}
          >
            Intelligence beyond boundaries.
          </h1>

          <p
            style={{
              marginTop: 16,
              fontSize: 18,
              color: "var(--muted)",
              maxWidth: "60ch",
            }}
          >
            Teoriyi Üretime, Bilgiyi Sisteme Dönüştürüyoruz.
          </p>

          <div
            style={{
              marginTop: 26,
              display: "flex",
              gap: 24,
              alignItems: "baseline",
            }}
          >
           
          </div>
        </div>
      </div>
    </section>
  );
}