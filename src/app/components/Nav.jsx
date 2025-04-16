"use client"; // This marks the component as a client component

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/rtr-ranch_logo-final_reverse.png"; // Optional if using next/image

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false); // To manage whether the menu is open or closed

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      {/* Logo with link */}
      <a href="/">
        <Image
          src={logo}
          alt="RTR Ranch Logo"
          className="logo-img"
          width={150} // Adjust the width as necessary
          height={50} // Adjust the height as necessary
        />
      </a>

      {/* Hamburger Button (visible on mobile) */}
      <button className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </button>

      {/* Nav links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/reservation">Reservation</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
