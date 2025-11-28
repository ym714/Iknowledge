import type { Metadata } from "next";
import { Inter, Merriweather, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iknowledge-xyz.vercel.app"),
  title: {
    default: "know I edge",
    template: "%s | know I edge",
  },
  description: "know I edge is an ecosystem woven by organized Agents.",
  openGraph: {
    title: "know I edge",
    description: "know I edge is an ecosystem woven by organized Agents.",
    url: "https://iknowledge-xyz.vercel.app",
    siteName: "know I edge",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "know I edge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "know I edge",
    description: "know I edge is an ecosystem woven by organized Agents.",
    creator: "@Iknowledge_ai",
    images: ["https://iknowledge-xyz.vercel.app/opengraph-image?v=2"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${merriweather.variable} ${cinzel.variable} antialiased font-sans text-gray-900 bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
