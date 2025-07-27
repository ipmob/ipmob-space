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
  title: "ipmob.space - AI-powered Document Intelligence Platform",
  description: "Transform complex files into interactive, queryable knowledge bases with enterprise-grade privacy. Your private Perplexity for internal documents.",
  keywords: "document intelligence, AI, enterprise, privacy, document processing, knowledge management",
  authors: [{ name: "ipmob.space" }],
  openGraph: {
    title: "ipmob.space - AI-powered Document Intelligence Platform",
    description: "Transform complex files into interactive, queryable knowledge bases with enterprise-grade privacy.",
    type: "website",
    locale: "en_US",
    siteName: "ipmob.space",
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
