import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Inter, Montserrat, Playfair_Display } from "next/font/google";
import { SITE } from "@/lib/config";
import { ClientShell } from "@/components/ClientShell";
import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-cormorant" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  applicationName: SITE.name,
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: "/royal-priesthood-preview.png",
        width: 1024,
        height: 1024,
        alt: "A regal navy and gold crown-and-cradle announcement visual"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/royal-priesthood-preview.png"]
  },
  icons: {
    icon: "/royal-priesthood-preview.png",
    apple: "/royal-priesthood-preview.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#0B1B3D",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${cinzel.variable} ${montserrat.variable} ${cormorant.variable} ${playfair.variable} ${inter.variable}`}>
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
