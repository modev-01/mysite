import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Tajawal, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono-code",
});

export const metadata: Metadata = {
  title: "محمد قماري | مطور واجهات أمامية محترف",
  description:
    "محفظة أعمال محمد قماري مطور واجهات أمامية متخصص في React و TypeScript وبناء تجارب رقمية سريعة وأنيقة.",
  generator: "v0.app",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#1a1f2e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`dark bg-background ${tajawal.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
