import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "My Train — Know where your train really is.",
    template: "%s · My Train",
  },
  description:
    "My Train shows you exactly where your train is — combining official running status with real-time, privacy-first crowd verification from fellow passengers. Track trains and check PNR status, all in one clean app.",
  applicationName: "My Train",
  keywords: [
    "train tracking",
    "Indian Railways",
    "live train status",
    "PNR status",
    "running status",
    "crowd verified",
    "train location",
  ],
  authors: [{ name: "My Train" }],
  creator: "My Train",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "My Train",
    title: "My Train — Know where your train really is.",
    description:
      "Official running status plus privacy-first, crowd-verified positioning from fellow passengers. Now in active development across India.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Train — Know where your train really is.",
    description:
      "Official running status plus privacy-first, crowd-verified positioning. In active development across India.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0C0F" },
    { media: "(prefers-color-scheme: light)", color: "#F1F3F8" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sora.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
