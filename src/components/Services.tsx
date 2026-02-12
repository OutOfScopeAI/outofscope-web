const services = [
  {
    title: "AI Readiness & Yol Haritası",
    desc: "İş hedefi → veri/altyapı → kullanım senaryosu → başarı metrikleri. 2–3 haftada net plan.",
  },
  {
    title: "PoC / Pilot Proje",
    desc: "Hızlı prototip, kontrollü deney tasarımı, ölçüm raporu ve üretim planı.",
  },
  {
    title: "Kurumsal Eğitimler",
    desc: "Yöneticiler ve mühendisler için: LLM’ler, veri, güvenlik, maliyet ve ürünleşme.",
  },
  {
    title: "Üretimleştirme (MLOps)",
    desc: "Versiyonlama, izleme, geri dönüş planı, veri drift, güvenilirlik ve maliyet optimizasyonu.",
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="section">
      <div className="container">
        <h2 className="sectionTitle">Ne yapıyoruz?</h2>
        <p className="sectionLead">
          Başlangıç seviyesinden üretime kadar, “gürültüsüz” bir AI teslim süreci.
        </p>

        <div className="cardGrid">
          {services.map((s) => (
            <div
              key={s.title}
              className="card p24 span-6 m-span-12"
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 14,
                  border: "1px solid var(--border)",
                  background:
                    "linear-gradient(180deg, #fff 0%, rgba(124,58,237,0.10) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 14,
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 999,
                    background: "var(--violet)",
                    display: "inline-block",
                  }}
                />
              </div>

              <h3 style={{ margin: "0 0 8px", letterSpacing: "-0.02em" }}>
                {s.title}
              </h3>
              <p style={{ margin: 0, color: "var(--muted)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
