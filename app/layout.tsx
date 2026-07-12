import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joyal Varghese | Future Immigration Services",
  description: "Digital profile card for Joyal Varghese, Immigration Consultant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
