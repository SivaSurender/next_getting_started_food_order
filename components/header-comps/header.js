import React from "react";
import mainImage from "@/assets/logo.png";
import Link from "next/link";
import classes from "./header.module.css";
import Image from "next/image";
import HeaderBackGround from "./header-background";

function Header() {
  return (
    <>
      <HeaderBackGround />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={mainImage} alt="main image" priority />A new era in food
          making
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
    </>
  );
}

export default Header;
