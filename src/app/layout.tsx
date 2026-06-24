import type { Metadata } from "next";
import "@/globals.css";
import { site } from "@/data/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getOpenGraph, getTwitter, siteUrl } from "@/lib/seo";

const rootTitle = "Polen Antrepoculuk ve Lojistik A.Ş. | Antrepo ve Lojistik Çözümleri";

export const metadata: Metadata = {
  title: rootTitle,
  description: site.description,
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/images/logos/polen-amblem.svg",
  },
  openGraph: getOpenGraph("tr", "home", rootTitle, site.description),
  twitter: getTwitter(rootTitle, site.description),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-white text-slate-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
