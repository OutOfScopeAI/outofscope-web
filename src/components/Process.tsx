const steps = [
  { k: "01", title: "Problem Tanımı", desc: "Hedef KPI’lar, kapsam sınırları ve ölçülebilir başarı kriterleri." },
  { k: "02", title: "Veri & Risk Analizi", desc: "Veri uygunluğu, güvenlik, maliyet ve kalite risklerinin erken tespiti." },
  { k: "03", title: "Pilot (PoC)", desc: "Hızlı deneme, deney tasarımı, baseline ve iyileştirme döngüsü." },
  { k: "04", title: "Üretim Planı", desc: "MLOps, izleme, geri dönüş stratejisi ve sürdürülebilir bakım." },
];

export default function Process() {
  return (
    <section id="yaklasim" className="section">
      <div className="container">
        <h2 className="sectionTitle">Nasıl çalışıyoruz?</h2>
        <p className="sectionLead">
          “Model yaptık” değil; ölçülen, yönetilen ve sürdürülen bir süreç.
        </p>

        <div className="card p28">
          <div className="cardGrid">
            {steps.map((s) => (
              <div key={s.k} className="span-3 m-span-12">
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontWeight: 800, color: "var(--violet)", letterSpacing: "-0.02em" }}>
                    {s.k}
                  </span>
                  <h3 style={{ margin: 0, letterSpacing: "-0.02em" }}>{s.title}</h3>
                </div>
                <p style={{ margin: 0, color: "var(--muted)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
