import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moya Barber",
  description: "Your nearby professional barber",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="apple-itunes-app" content="app-id=6661020234" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
