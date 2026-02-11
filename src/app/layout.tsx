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
  title: "Riya Vechiot",
  description: "Leveling up one line of code at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pressStart2P.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
