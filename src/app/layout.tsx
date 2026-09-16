import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js 16 Starter",
  description:
    "A Next.js 16 App Router starter template optimized for Vibe Coding and AI-native development in Google AI Studio.",
  openGraph: {
    title: "Next.js 16 Starter",
    description:
      "A Next.js 16 App Router starter template optimized for Vibe Coding and AI-native development in Google AI Studio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
