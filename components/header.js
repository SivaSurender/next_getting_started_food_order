import React from "react";
import mainImage from "@/assets/logo.png";
import Link from "next/link";
import classes from "./header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <img src={mainImage.src} alt="main image" /> A new era in food making
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Visit Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
