import type { Metadata } from "next";
import "./globals.css";
import '@/lib/fontawesome';

export const metadata: Metadata = {
  title: "Live Docs",
  description:
    "We offer a seamless user experience to write you docs and share it with your friends and peers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
