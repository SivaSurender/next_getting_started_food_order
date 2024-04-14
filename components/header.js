import React from "react";
import mainImage from "@/assets/logo.png";
import Link from "next/link";

function Header() {
  return (
    <>
      <Link href="/">
        <img src={mainImage.src} alt="main image" /> A new era in food making
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Visit Community</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
