import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Webpenter Solution Booking & Rental Software Experts",
    template: "%s | Webpenter Solution",
  },
  description:
    "Webpenter Solution builds world-class booking and rental platforms. From the BookHere mobile app to custom web and mobile solutions we help rental businesses grow revenue and scale operations.",
  keywords: [
    "booking platform",
    "rental solution",
    "BookHere app",
    "mobile booking app",
    "custom booking system",
    "Webpenter Solution",
  ],
  authors: [{ name: "Webpenter Solution" }],
  creator: "Webpenter Solution",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Webpenter Solution Booking & Rental Software Experts",
    description:
      "We build world-class booking and rental platforms BookHere mobile app, custom web & mobile solutions.",
    siteName: "Webpenter Solution",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webpenter Solution Booking & Rental Software Experts",
    description:
      "We build world-class booking and rental platforms BookHere mobile app, custom web & mobile solutions.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1C3320",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white text-[#111110]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
