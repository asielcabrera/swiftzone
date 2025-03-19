import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/context/language-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EFF6DF" },
    { media: "(prefers-color-scheme: dark)", color: "#1A531D" },
  ],
};

export const metadata: Metadata = {
  title: "SwiftZone | Digital Marketing & Software Development Agency",
  description: "We are an agency specialized in digital marketing and custom software development, driving innovation and growth for your business.",
  keywords: "digital marketing, software development, web design, mobile applications, UX/UI design, digital strategy, digital agency",
  authors: [
    {
      name: "SwiftZone",
      url: "https://swiftzone.com",
    },
  ],
  creator: "SwiftZone",
  publisher: "SwiftZone",
  icons: {
    icon: [
      { url: "/icon?id=small", sizes: "32x32", type: "image/png" },
      { url: "/icon?id=medium", sizes: "48x48", type: "image/png" },
      { url: "/icon?id=large", sizes: "96x96", type: "image/png" },
    ],
    apple: { url: "/icon?id=large", sizes: "96x96", type: "image/png" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://swiftzone.com",
    title: "SwiftZone | Digital Marketing & Software Development Agency",
    description: "We are an agency specialized in digital marketing and custom software development, driving innovation and growth for your business.",
    siteName: "SwiftZone",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107",
        width: 1200,
        height: 630,
        alt: "SwiftZone - Digital Marketing & Software Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SwiftZone | Digital Marketing & Software Development Agency",
    description: "We are an agency specialized in digital marketing and custom software development, driving innovation and growth for your business.",
    images: ["https://images.unsplash.com/photo-1523961131990-5ea7c61b2107"],
    creator: "@swiftzone",
  },
  metadataBase: new URL("https://swiftzone.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
          <Toaster position="top-right" />
        </LanguageProvider>
      </body>
    </html>
  );
}
