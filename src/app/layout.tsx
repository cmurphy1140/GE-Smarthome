import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ServiceWorkerRegistration } from "@/components/common/ServiceWorkerRegistration";
import { SmoothScroll, ScrollToTop } from "@/components/ui/SmoothScroll";
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
  title: "GE Smart Home Dealer Program | Partnership with Savant",
  description: "Join the GE Smart Home dealer network. Partner with industry leaders to deliver cutting-edge Smart Home experiences with exclusive tools, training, and support.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "GE Smart Home"
  },
  formatDetection: {
    telephone: true,
    email: true
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1e3a8a" }
  ]
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
        <ServiceWorkerRegistration />
        <SmoothScroll />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
