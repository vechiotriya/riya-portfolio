import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Riya Vechiot | React Native Developer",
    template: "%s | Riya Vechiot",
  },
  description:
    "Portfolio of Riya Vechiot, a React Native mobile developer building modern, high-performance applications. Available for hire.",
  keywords: [
    "Riya Vechiot",
    "React Native Developer",
    "Mobile App Developer",
    "Portfolio",
    "Freelance Developer",
  ],
  authors: [{ name: "Riya Vechiot" }],
  creator: "Riya Vechiot",
  openGraph: {
    title: "Riya Vechiot | React Native Developer",
    description:
      "Modern mobile applications built with React Native. Explore projects and experience.",
    url: "https://riya-vechiot.vercel.app/",
    siteName: "Riya Vechiot Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Riya Vechiot",
            jobTitle: "React Native Developer",
            url: "https://riya-vechiot.vercel.app/",
          }),
        }}
      />
      <body className={`${pressStart2P.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
