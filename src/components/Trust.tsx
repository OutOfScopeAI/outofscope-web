const items = [
  { title: "Şeffaf metrikler", desc: "Başarı tanımı en başta netleşir: neyi optimize ediyoruz?" },
  { title: "Risk yönetimi", desc: "Güvenlik, maliyet, veri kalitesi ve bakım riskleri görünür olur." },
  { title: "Hype değil doğrulama", desc: "Baselinesız iddia yok; deney tasarımı ve raporlama var." },
];

export default function Trust() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="sectionTitle">Güven nasıl oluşur?</h2>
        <p className="sectionLead">
          AI proje başarısı; teknik beceriden çok, doğru kapsam + doğru ölçüm + doğru entegrasyonla gelir.
        </p>

        <div className="cardGrid">
          {items.map((x) => (
            <div key={x.title} className="card p24 span-4 m-span-12">
              <h3 style={{ margin: "0 0 8px", letterSpacing: "-0.02em" }}>{x.title}</h3>
              <p style={{ margin: 0, color: "var(--muted)" }}>{x.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
