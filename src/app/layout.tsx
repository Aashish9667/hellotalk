import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./provider";
import Footer from "@/component/footer/footer";
import Navigation from "@/component/welcome/navigation";
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
  title: "Multi-Language App",
  description: "Auto translation using Google",
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
        <Providers>
          <div id="google_translate_element">
            <div>
              <Navigation />
            </div>
            <div className="p-5">{children}</div>
            <div className="p-5 mx-auto max-w-7xl">
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
