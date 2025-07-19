import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Felipe Messias - Full Stack Developer",
  description: "Professional portfolio of Felipe Messias, a skilled full-stack developer specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: "Felipe Messias, Full Stack Developer, React, Next.js, TypeScript, Web Development, Portfolio",
  authors: [{ name: "Felipe Messias" }],
  openGraph: {
    title: "Felipe Messias - Full Stack Developer",
    description: "Professional portfolio showcasing modern web development projects and skills",
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Felipe Messias - Full Stack Developer",
    description: "Professional portfolio showcasing modern web development projects and skills",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
