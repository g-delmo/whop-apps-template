import { Theme } from "frosted-ui";
import "frosted-ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ClientLayout } from "./layout.client";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ClientLayout>
          <Theme>{children}</Theme>
        </ClientLayout>
        <Script
          src="/_whop/analytics/analytics-v1.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
