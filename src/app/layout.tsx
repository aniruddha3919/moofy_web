import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SideBanner from "@/components/layout/SideBanner";
import SmoothCursor from "@/components/ui/SmoothCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Moofy - Social Media Marketing & Website Development",
  description: "End-to-end social media branding, content creation, and website development for shops & businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <SmoothCursor />
        <SideBanner />
        {children}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YY57E7XQ84"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YY57E7XQ84');
          `}
        </Script>
      </body>
    </html>
  );
}
