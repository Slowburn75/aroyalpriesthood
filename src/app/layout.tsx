import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteTitle = "AROYALPRIESTHOOD | A Royal Priesthood";
const siteDescription =
  "A premium Christian baby announcement celebrating the arrival of a beloved prince, wrapped in testimony, prophecy, and royal gratitude.";

export const metadata: Metadata = {
  metadataBase: new URL("https://aroyalpriesthood.com"),
  title: siteTitle,
  description: siteDescription,
  applicationName: "AROYALPRIESTHOOD",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://aroyalpriesthood.com",
    siteName: "AROYALPRIESTHOOD",
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
    title: siteTitle,
    description: siteDescription,
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
