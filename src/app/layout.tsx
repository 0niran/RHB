import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rccgbrantford.com'),
  title: "Coming Soon - RCCG Restoration House Brantford",
  description: "Something sacred is coming. A vibrant community restoring lives, building relationships, and renewing hope through God's transforming love. RCCG Restoration House Brantford - where faith meets the future.",
  keywords: "RCCG, church, Brantford, faith, community, worship, fellowship, coming soon, restoration house, redeemed christian church",
  authors: [{ name: "RCCG Restoration House Brantford" }],
  creator: "RCCG Restoration House Brantford",
  publisher: "RCCG Restoration House Brantford",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Coming Soon - RCCG Restoration House Brantford",
    description: "Something sacred is coming. A vibrant community restoring lives, building relationships, and renewing hope through God's transforming love.",
    type: "website",
    siteName: "RCCG Restoration House Brantford",
    locale: "en_CA",
    images: [
      {
        url: "/logos/RCCG Restoration House Brantford-Black.svg",
        width: 1200,
        height: 630,
        alt: "RCCG Restoration House Brantford - Coming Soon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coming Soon - RCCG Restoration House Brantford",
    description: "Something sacred is coming. A vibrant community restoring lives, building relationships, and renewing hope through God's transforming love.",
    images: ["/logos/RCCG Restoration House Brantford-Black.svg"],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
