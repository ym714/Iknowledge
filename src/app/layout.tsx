import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://iknowledge.vercel.app"), // Replace with your actual domain when you have one
  title: {
    default: "Iknowledge",
    template: "%s | Iknowledge",
  },
  description: "Iknowledge is an ecosystem woven by organized Agents.",
  openGraph: {
    title: "Iknowledge",
    description: "Iknowledge is an ecosystem woven by organized Agents.",
    url: "https://iknowledge.vercel.app",
    siteName: "Iknowledge",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iknowledge",
    description: "Iknowledge is an ecosystem woven by organized Agents.",
    creator: "@Iknowledge_ai",
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
        className={`${inter.variable} ${merriweather.variable} antialiased font-sans text-gray-900 bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
