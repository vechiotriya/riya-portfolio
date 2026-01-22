import type { Metadata } from "next";
import {DotGothic16,Montserrat } from "next/font/google";
import "./globals.css";

const dotGothic16 = DotGothic16({
  variable: "--font-dot-gothic-16",
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
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
      <body className={`${dotGothic16.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
