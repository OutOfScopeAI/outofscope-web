import Image from "next/image";

export default function OriginPhilosophy() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 900 }}>
        <div style={{ paddingTop: 10 }}>
          <div className="kicker">Origin &amp; Philosophy</div>

          <div style={{ height: 18 }} />

          <h2 className="h2">Neden Out of Scope?</h2>
          <p className="p">
            Out of Scope AI Labs (OOS); yapay zeka odaklı ürünlerin geliştirilmesi ve iş süreçlerine entegrasyonunda, 
            teorik bilgiyi üretim standartlarında ölçeklenebilir sistemlere dönüştürmek amacıyla kuruldu.
          </p>
          <p className="p">
            İsmimiz, standart yaklaşımların dışına çıkma ve karmaşık problemleri alışılmışın
            ötesinde bir akıl yürütme ile çözme vizyonumuzdan geliyor.
          </p>

          <div style={{ height: 22 }} />

          <h2 className="h2">Intelligence Beyond Boundaries</h2>
          <p className="p">
            Bizim için zeka, sadece bir modelin tahmin başarısı değil, bir sistemin otonom
            karar verme kapasitesidir.
          </p>

          <ul className="bullets">
            <li>
              <span className="bTitle">Analitik yaklaşım.</span>{" "}
              Popüler olanı değil, probleme en uygun mimariyi bilimsel verilerle seçiyoruz.
            </li>
            <li>
              <span className="bTitle">Sistem bütünlüğü.</span>{" "}
              AI modellerini tekil bir araç değil, işletmenizin ana omurgası olarak kurguluyoruz.
            </li>
            <li>
              <span className="bTitle">Vibe &amp; Precision.</span>{" "}
              Yeni nesil “vibe coding” araçlarıyla çeviklik kazanırken, mühendislik disipliniyle
              hassasiyeti sağlıyoruz.
            </li>
          </ul>

          <div style={{ height: 22 }} />

          <h2 className="h2">Kurucu &amp; Baş Araştırmacı</h2>
          <p className="p">
            Out of Scope, akademik titizliğin ve bağımsız bir
            laboratuvarın esnekliğiyle buluştuğu bir merkezdir.
          </p>

          <div className="signature">
            <div className="sigName"> Dr. Yunus Can Bilge </div>
            <div className="sigRole">Kurucu &amp; Baş Araştırmacı</div>
            <div className="sigText">
              
            </div>
          </div>

          <div className="pt-12 mt-16 border-t border-slate-100">
 
  <div className="mt-8">
    <a 
      href="mailto:hello@outofscope.ai" 
      className="text-[#7c3aed] font-bold text-lg border-b-2 border-[#7c3aed]/20 hover:border-[#7c3aed] transition-all pb-1"
    >
      hello@outofscope.ai
    </a>
  </div>
</div>

          <div style={{ height: 34 }} />

          {/* Minimal logo touch */}
          <div style={{ display: "flex", justifyContent: "center", opacity: 0.55 }}>
            <Image src="/logo.png" alt="OOS" width={42} height={42} />
          </div>

          <div style={{ marginTop: 24, textAlign: "center", fontSize: 14 }}>
            <a href="https://www.youtube.com/@OutOfScopeAILabs" target="_blank">YouTube</a>
            {" · "}
            <a href="https://www.linkedin.com/company/out-of-scope-ai-labs" target="_blank">LinkedIn</a>
            {" · "}
            <a href="https://x.com/oosailabs" target="_blank">X</a>
        </div>
          
        </div>
      </div>
    </section>
  );
}