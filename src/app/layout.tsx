import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Vedansh | Full Stack Developer",
    template: "%s | Vedansh",
  },
  description:
    "Full Stack Developer building clean, high-performance web apps.",

  // Required so Next.js knows your production URL for OG tags
  metadataBase: new URL("https://vedanshworks.vercel.app"),

  openGraph: {
    title: "Vedansh | Full Stack Developer",
    description:
      "Welcome to my internet home. I build clean, scalable web applications.",
    url: "https://vedanshworks.vercel.app",
    siteName: "Vedansh Portfolio",
    images: [
      {
        url: "https://vedanshworks.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Vedansh Portfolio Preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vedansh | Full Stack Developer",
    description:
      "Welcome to my internet home. I build clean, scalable web applications.",
    images: ["https://vedanshworks.vercel.app/og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
