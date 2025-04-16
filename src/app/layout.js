// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";

import Nav from "./components/Nav"; // Navigation bar
import "./globals.css"; // Global styles

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Export metadata for App Router
export const metadata = {
  title: "Ranch Webpage",
  description: "Welcome to Kristen's Bed and Breakfast!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>

      <body className="antialiased">
        <div className="page-container">
          <Nav />
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
