import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Aleksandar Milosavljević",
  description: "Software engineer & JS enthusiast",
  openGraph: {
    title: "Aleksandar Milosavljević",
    description: "Software engineer & JS enthusiast",
    url: "https://maleksandar.com",
    siteName: "maleksandar.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Aleksandar Milosavljević",
    description: "Software engineer & JS enthusiast",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrains.variable}>
      <body>{children}</body>
    </html>
  );
}
