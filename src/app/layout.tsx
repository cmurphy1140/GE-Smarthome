import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ServiceWorkerRegistration } from "@/components/common/ServiceWorkerRegistration";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { ClientScrollToTop } from "@/components/ui/ClientScrollToTop";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { FloatingActionButton } from "@/components/ui/FloatingActionButton";
import { PerformanceMonitor } from "@/components/common/PerformanceMonitor";
import { StructuredData } from "@/components/common/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://ge-smarthome.vercel.app'),
  title: "GE Smart Home Dealer Program | Partnership with Savant AI",
  description: "Join the GE Smart Home dealer network powered by Savant AI. Access exclusive smart lighting, thermostats, security systems, and automation solutions. Get 24/7 support, dealer pricing, and comprehensive training to build your signature smart home business.",
  icons: {
    icon: [
      { url: '/ge-favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/ge-favicon-32.png', sizes: '32x32', type: 'image/png' }
    ]
  },
  keywords: [
    "GE Smart Home",
    "Savant AI",
    "Smart Lighting",
    "Smart Thermostats",
    "Home Automation",
    "Dealer Program",
    "Smart Home Installation",
    "Electrical Contractors",
    "HVAC Contractors",
    "Security Systems"
  ],
  authors: [{ name: "GE Lighting" }],
  creator: "GE Lighting",
  publisher: "GE Lighting",
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ge-smarthome.vercel.app',
    title: 'GE Smart Home Dealer Program | Partnership with Savant AI',
    description: 'Join the GE Smart Home dealer network powered by Savant AI. Access exclusive smart lighting, thermostats, security systems, and automation solutions.',
    siteName: 'GE Smart Home',
    images: [
      {
        url: '/ge-smart-bulb-showcase.png',
        width: 1200,
        height: 630,
        alt: 'GE Smart Home Products Showcase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GE Smart Home Dealer Program | Partnership with Savant AI',
    description: 'Join the GE Smart Home dealer network powered by Savant AI. Access exclusive smart lighting, thermostats, security systems, and automation solutions.',
    images: ['/ge-smart-bulb-showcase.png'],
  },
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GE Smart Home",
    "description": "GE Smart Home dealer program powered by Savant AI, offering exclusive smart lighting, thermostats, security systems, and automation solutions.",
    "url": "https://ge-smarthome.vercel.app",
    "logo": "https://ge-smarthome.vercel.app/GE-Logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "1-800-GE-SMART",
      "contactType": "customer service",
      "email": "partnersupport@gesmarthome.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1975 Noble Road, Building 313",
      "addressLocality": "East Cleveland",
      "addressRegion": "OH",
      "postalCode": "44112",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.gelighting.com/",
      "https://www.savant.com/"
    ]
  }

  return (
    <html lang="en">
      <head>
        <StructuredData json={organizationSchema} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>
          <ServiceWorkerRegistration />
          <SmoothScroll />
          <ClientScrollToTop />
          <PerformanceMonitor />
          {children}
          <FloatingActionButton />
        </ErrorBoundary>
      </body>
    </html>
  );
}
