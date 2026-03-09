import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // Script tag use karne ke liye

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased p-5`}>
        {/* 1. Google Translate ka Dropdown yahan dikhega */}
        <div id="google_translate_element" className="mb-5"></div>

        {children}

        {/* 2. Google Translate Scripts */}
        <Script id="google-translate-config" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'hi,en,ko,ja,zh-CN', // Jo languages aapko chahiye
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
              }, 'google_translate_element');
            }
          `}
        </Script>
        <Script 
          src="//://translate.google.com"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
