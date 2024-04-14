"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classes from "./nav-link.module.css";

function NavLink({ children, href }) {
  const activePath = usePathname();
  return (
    <Link
      href={href}
      className={
        activePath.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}

export default NavLink;
