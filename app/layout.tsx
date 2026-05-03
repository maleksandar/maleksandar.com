import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const title = "Aleksandar Milosavljević — Senior Software Engineer";
const description =
  "Senior Software Engineer with 10+ years of experience in React, TypeScript, and JavaScript. Currently at Datadog in Madrid, Spain.";
const url = "https://maleksandar.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    "Aleksandar Milosavljević",
    "Senior Software Engineer",
    "Frontend Engineer",
    "React",
    "TypeScript",
    "JavaScript",
    "Angular",
    "Datadog",
    "Madrid",
    "maleksandar",
  ],
  authors: [{ name: "Aleksandar Milosavljević", url }],
  creator: "Aleksandar Milosavljević",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: "maleksandar.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
    creator: "@maleksandar",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aleksandar Milosavljević",
  url,
  jobTitle: "Senior Software Engineer",
  worksFor: { "@type": "Organization", name: "Datadog" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madrid",
    addressCountry: "ES",
  },
  email: "amilosavljevic@pm.me",
  sameAs: [
    "https://github.com/maleksandar",
    "https://linkedin.com/in/maleksandar",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Belgrade, Faculty of Mathematics",
  },
  knowsAbout: ["React", "TypeScript", "JavaScript", "Angular", "Node.js", "C#", "ASP.NET"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrains.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
