// src/app/layout.jsx
import Nav from "./components/Nav";
import "./globals.css";

export const metadata = {
  title: "Ranch Webpage",
  description: "Welcome to Kristen's Bed and Breakfast!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
