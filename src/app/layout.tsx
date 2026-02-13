import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FixedMailCTA from "@/components/FixedMailCTA";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://outofscope.ai"),
  title: { default: "OOS — Intelligence beyond boundaries", template: "%s — OOS" },
  description:
    "Akademik derinliği ölçeklenebilir sistemlere dönüştürüyoruz. Bilgisayarlı görü, büyük dil modelleri ve ses işleme üzerine uzmanlaşmış, araştırma odaklı yapay zeka laboratuvarı.",
  keywords: [
    "AI Labs",
    "Machine Learning",
    "Computer Vision",
    "LLM",
    "Audio Processing",
    "Vibe Coding",
    "Yapay Zeka",
    "Yapay Zeka Laboratuvarı",
    "Görüntü İşleme",
    "Doğal Dil İşleme",
    "Ses İşleme",
    "Yapay Zeka Danışmanlığı",
    "Akademik Araştırma ve Geliştirme",
    "Türkiye AI",
  ],
  openGraph: {
    title: "OOS AI Labs. — Intelligence beyond boundaries",
    description: "Akademik derinliği üretim standartlarına taşıyan, Yapay Zeka (AI) destekli kurumsal uygulamaları ve sistem tasarımı odaklı araştırma laboratuvarı.",
    url: "https://outofscope.ai",
    siteName: "OOS",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OOS AI Labs. — Intelligence beyond boundaries",
    description: "Akademik derinliği üretim standartlarına taşıyan, Yapay Zeka (AI) destekli kurumsal uygulamaları ve sistem tasarımı odaklı araştırma laboratuvarı.",
    images: ["/opengraph-image"],
  },
  icons: {
  icon: "/favicon.ico",
  apple: "/icon.png",
},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FixedMailCTA />
        <Analytics />
      </body>
    </html>
  );
}