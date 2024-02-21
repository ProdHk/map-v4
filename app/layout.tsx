import { Theme } from '@radix-ui/themes';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Map",
  description: "Excelência no trabalho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Theme accentColor="teal" grayColor="slate" radius="small" scaling="100%">
          {children}
        </Theme>
      </body>
    </html>
  );
}
