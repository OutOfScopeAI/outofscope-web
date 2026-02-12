export default function CTA() {
  return (
    <section id="iletisim" className="section">
      <div className="container">
        <div className="card p28">
          <h2 className="sectionTitle" style={{ marginBottom: 10 }}>
            30 dakikada netleştirelim
          </h2>
          <p className="sectionLead" style={{ marginBottom: 18 }}>
            Kısa bir keşif görüşmesinde hedefi, veri durumunu ve en hızlı “pilot” yolunu birlikte çıkaralım.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <input
              placeholder="Ad Soyad"
              style={inputStyle}
            />
            <input
              placeholder="Kurumsal e-posta"
              type="email"
              style={inputStyle}
            />
            <input
              placeholder="Şirket"
              style={inputStyle}
            />
            <input
              placeholder="Rol"
              style={inputStyle}
            />
            <textarea
              placeholder="Kısaca ihtiyaç: (örn. çağrı merkezi, doküman arama, kalite kontrol, tahminleme...)"
              rows={4}
              style={{ ...inputStyle, gridColumn: "1 / -1", resize: "vertical" }}
            />
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 14, flexWrap: "wrap" }}>
            <button className="btn btnPrimary" type="button">
              Gönder
            </button>
            <span style={{ color: "var(--muted)", fontSize: 13, alignSelf: "center" }}>
              (Form şu an demo. İstersen API / e-posta entegrasyonunu da eklerim.)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 14,
  border: "1px solid var(--border)",
  outline: "none",
  background: "#fff",
};
