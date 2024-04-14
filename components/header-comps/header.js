"use client";
import React from "react";
import mainImage from "@/assets/logo.png";
import Link from "next/link";
import classes from "./header.module.css";
import Image from "next/image";
import HeaderBackGround from "./header-background";
import { usePathname } from "next/navigation";

function Header() {
  const activePath = usePathname();
  console.log(activePath);
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
              <Link
                href="/meals"
                className={activePath === "/community" && "active"}
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className={activePath === "/community" && "active"}
              >
                Visit Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
