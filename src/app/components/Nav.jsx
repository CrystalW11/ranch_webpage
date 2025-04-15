// src/app/components/Nav.jsx
import Link from "next/link";

export default function Nav() {
  return (
    <nav style={{ padding: "1rem", background: "#eee", display: "flex", alignItems: "center" }}>
      {/* Logo */}
      <div style={{ marginRight: "2rem" }}>
        <Link href="/">
          <img src="/kristens1_logo.png" alt="Kristen's Logo" style={{ height: "40px" }} />
        </Link>
      </div>
      
      {/* Navigation Links */}
      <Link href="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link href="/about" style={{ marginRight: "1rem" }}>About</Link>
      <Link href="/reservation" style={{ marginRight: "1rem" }}>Reservation</Link>
      <Link href="/services" style={{ marginRight: "1rem" }}>Services</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
