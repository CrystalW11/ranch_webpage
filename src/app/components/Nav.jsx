import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/rtr-ranch_logo-final_reverse.png"; // Optional if using next/image

export default function Nav() {
  return (
    <nav className="nav">
      {/* Logo - link to the actual image file */}
      <Link href="/logo">
        <img
          src="/images/rtr-ranch_logo-final_reverse.png"
          alt="RTR Ranch Logo"
          className="logo-img"
        />
      </Link>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/reservation">Reservation</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
