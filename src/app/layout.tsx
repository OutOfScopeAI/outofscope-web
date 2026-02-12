import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FixedMailCTA from "@/components/FixedMailCTA";

export const metadata: Metadata = {
  title: { default: "OOS — Intelligence beyond boundaries", template: "%s — OOS" },
  description: "Out of Scope AI Labs — Intelligence beyond boundaries.",
  metadataBase: new URL("https://outofscope.ai"),
  openGraph: {
    title: "OOS — Intelligence beyond boundaries",
    description: "Out of Scope AI Labs.",
    url: "https://outofscope.ai",
    siteName: "OOS",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "OOS — Intelligence beyond boundaries",
    description: "Out of Scope AI Labs.",
    images: ["/opengraph-image"],
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
      </body>
    </html>
  );
}