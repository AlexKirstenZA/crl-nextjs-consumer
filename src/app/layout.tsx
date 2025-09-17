import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "NextJS consumer technical exercise",
  description: "Technical exercise for CR Senior Drupal / NextJS developer role.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <div className="mx-auto min-h-screen max-w-screen-md">
          {children}
        </div>
      </body>
    </html>
  );
}
