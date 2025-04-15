// src/app/layout.js or src/app/RootLayout.js
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./components/Nav";  // Your Nav component
import "./globals.css";  // Global CSS
import Head from "next/head";  // Import Head to manage HTML head elements

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My App",  // Your app title
  description: "A Next.js app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Head>
          {/* Set favicon here */}
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        {children}
      </body>
    </html>
  );
}
